import os
import gc
import time
import argparse
from typing import List
from transformers import AutoTokenizer, AutoConfig
from optimum.intel import OVWeightQuantizationConfig
from optimum.intel.openvino import (
    OVModelForCausalLM,
    OVWeightQuantizationConfig,
)
import openvino as ov

from utils.llm_config import SUPPORTED_LLM_LIST, SupportedLLMConfig


class ExportArgs:

    def get_args(self):
        parser = argparse.ArgumentParser()
        # fmt: off
        parser.add_argument("-m", "--model_id", type=str, default="Qwen/Qwen2-1.5B-Instruct", choices=self.MIL)
        parser.add_argument("-w", "--weight_dir", type=str, default="downloads/Qwen/Qwen2-1.5B-Instruct")
        parser.add_argument("-q", "--quan_type", type=str, default="int8", choices=["fp16", "int8", "int4"])
        parser.add_argument("-s", "--save_dir", type=str, default="weights")
        parser.add_argument("-d", "--device", type=str, default="AUTO")
        # fmt: on
        return parser.parse_args()

    def __init__(self) -> None:
        args = self.get_args()
        self.model_id: str = args.model_id
        self.weight_dir: str = args.weight_dir
        self.quan_type: str = args.quan_type
        self.save_dir: str = args.save_dir
        self.device: str = args.device

    MIL = [config.model_id for config in SUPPORTED_LLM_LIST]  # model id list


def printc(type: str, *message: List[str]):
    if type == "INFO":
        print(f"\033[00;36m -- [INFO]", *message, "\033[0m")
    elif type == "SUCCESS":
        print(f"\033[00;32m -- [SUCCESS]", *message, "\033[0m")
    elif type == "WARNING":
        print(f"\033[00;33m -- [WARNING]", *message, "\033[0m")
    elif type == "ERROR":
        print(f"\033[00;31m -- [ERROR]", *message, "\033[0m")
    else:
        print(*message)


def main():
    args = ExportArgs()
    core = ov.Core()
    printc("INFO", f"Available Devices: {core.available_devices}")

    llm_config: SupportedLLMConfig = None
    for config in SUPPORTED_LLM_LIST:
        if config.model_id == args.model_id:
            llm_config = config
            break

    # set the export directory
    export_model_dir = os.path.join(args.save_dir, f"{args.model_id}-IR-{args.quan_type}")
    if os.path.exists(export_model_dir):
        printc(
            "WARNING",
            f"{export_model_dir} already exists." "If you want to overwrite, please delete it manually.",
        )
    os.makedirs(export_model_dir, exist_ok=True)

    pretrained_model_name_or_path = args.weight_dir if os.path.exists(args.weight_dir) else args.model_id

    # =========================================
    #   Tokenizer
    # =========================================
    model_kwargs = {
        "trust_remote_code": True,
    }
    tokenizer = AutoTokenizer.from_pretrained(
        pretrained_model_name_or_path,
        **model_kwargs,
    )
    tokenizer.save_pretrained(export_model_dir)
    del tokenizer
    gc.collect()
    printc("INFO", f"Tokenizer Saved to {export_model_dir}")

    # =========================================
    #   LLM
    # =========================================
    config = AutoConfig.from_pretrained(
        pretrained_model_name_or_path,
        trust_remote_code=True,
    )
    printc("SUCCESS", "Model config:")
    print(config)

    model_kwargs = {
        "trust_remote_code": True,
        "config": config,
        "cache_dir": ".cache",
        # cache_dir : https://github.com/huggingface/optimum-intel/issues/347
    }
    ov_model: OVModelForCausalLM = None
    st = time.time()
    if args.quan_type == "int8":
        # https://huggingface.co/docs/optimum/main/en/intel/optimization_ov#8-bit
        ov_model = OVModelForCausalLM.from_pretrained(
            pretrained_model_name_or_path,
            export=True,
            compile=False,
            load_in_8bit=True,
            **model_kwargs,
        )
    elif args.quan_type == "int4":
        # https://huggingface.co/docs/optimum/main/en/intel/optimization_ov#4-bit
        quantization_config = OVWeightQuantizationConfig(bits=4, **llm_config.int4_compression_configs)
        ov_model = OVModelForCausalLM.from_pretrained(
            pretrained_model_name_or_path,
            export=True,
            compile=False,
            quantization_config=quantization_config,
            **model_kwargs,
        )
    else:
        ov_model = OVModelForCausalLM.from_pretrained(
            pretrained_model_name_or_path,
            export=True,
            compile=False,
            **model_kwargs,
        )
    printc("SUCCESS", f"Model '{args.model_id}' Loaded in {time.time() - st:.2f} s, but not compiled yet.")
    st = time.time()
    ov_model.to(args.device)
    ov_model.compile()
    et = time.time()
    printc("SUCCESS", f"Model '{args.model_id}' Compiled in {et-st:.2f} s")
    ov_model.save_pretrained(export_model_dir)
    printc("SUCCESS", f"Export completed. Model '{args.model_id}' saved to {export_model_dir}")


if __name__ == "__main__":
    main()
