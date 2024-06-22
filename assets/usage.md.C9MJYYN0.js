import{_ as a,c as e,o as s,a2 as i}from"./chunks/framework.C50fyHGs.js";const F=JSON.parse('{"title":"项目使用文档","description":"","frontmatter":{"lastUpdated":true,"editLink":true,"footer":true,"outline":"deep"},"headers":[],"relativePath":"usage.md","filePath":"usage.md","lastUpdated":1717986616000}'),t={name:"usage.md"},n=i(`<h1 id="项目使用文档" tabindex="-1">项目使用文档 <a class="header-anchor" href="#项目使用文档" aria-label="Permalink to &quot;项目使用文档&quot;">​</a></h1><h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><p>本项目是一个大模型的集成，计划完成包括对话交流、指令分解、文本实体抽取、文本生成等功能，目前项目处于早期阶段。</p><h2 id="项目进展" tabindex="-1">项目进展 <a class="header-anchor" href="#项目进展" aria-label="Permalink to &quot;项目进展&quot;">​</a></h2><ul><li>「2024.06.09」 支持基于 2024.6.7 开源的 <a href="https://qwenlm.github.io/blog/qwen2/" target="_blank" rel="noreferrer">Qwen2</a>(<a href="https://github.com/QwenLM/Qwen2" target="_blank" rel="noreferrer">Code</a>) 模型进行指令微调的任务，目前仅完成了对话交流功能</li><li>「2024.04.28」 基于千文大模型(Qwen1.5)的模型导出和模型推理测试，并且完成了上下文对话的测试，能记录用户的对话历史</li><li>「2024.04.26」 项目启动</li></ul><blockquote><p>TODO: 引入更多大模型。聊天只是一个最基本的功能，计划利用大模型的理解能力和生成能力，完成更多有趣的功能</p></blockquote><h2 id="模型仓库" tabindex="-1">模型仓库 <a class="header-anchor" href="#模型仓库" aria-label="Permalink to &quot;模型仓库&quot;">​</a></h2><table><thead><tr><th>模型</th><th>模型大小</th><th>模型地址</th></tr></thead><tbody><tr><td>Qwen2-0.5B</td><td>0.5B</td><td><a href="https://huggingface.co/Qwen/Qwen2-0.5B" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/qwen/Qwen2-0.5B" target="_blank" rel="noreferrer">ModelScope</a></td></tr><tr><td>Qwen2-0.5B-Instruct</td><td>0.5B</td><td><a href="https://huggingface.co/Qwen/Qwen2-0.5B-Instruct" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/qwen/Qwen2-0.5B-Instruct" target="_blank" rel="noreferrer">ModelScope</a></td></tr><tr><td>Qwen2-1.5B</td><td>1.5B</td><td><a href="https://huggingface.co/Qwen/Qwen2-1.5B" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/models/qwen/Qwen2-1.5B" target="_blank" rel="noreferrer">ModelScope</a></td></tr><tr><td>Qwen2-1.5B-Instruct</td><td>1.5B</td><td><a href="https://huggingface.co/Qwen/Qwen2-1.5B-Instruct" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/qwen/Qwen2-1.5B-Instruct" target="_blank" rel="noreferrer">ModelScope</a></td></tr><tr><td>Qwen2-7B</td><td>7B</td><td><a href="https://huggingface.co/Qwen/Qwen2-7B" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/models/qwen/Qwen2-7B" target="_blank" rel="noreferrer">ModelScope</a></td></tr><tr><td>Qwen2-7B-Instruct</td><td>7B</td><td><a href="https://huggingface.co/Qwen/Qwen2-7B-Instruct" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/qwen/Qwen2-7B-Instruct" target="_blank" rel="noreferrer">ModelScope</a></td></tr></tbody></table><h2 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h2><h3 id="获取源码" tabindex="-1">获取源码 <a class="header-anchor" href="#获取源码" aria-label="Permalink to &quot;获取源码&quot;">​</a></h3><p>获取项目源码</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BvYe1" id="tab-k2-yccj" checked="checked"><label for="tab-k2-yccj">HTTP</label><input type="radio" name="group-BvYe1" id="tab-tyopC21"><label for="tab-tyopC21">SSH</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/HenryZhuHR/toyllm</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toyllm</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:HenryZhuHR/toyllm.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toyllm</span></span></code></pre></div></div></div><h3 id="文档本地启动" tabindex="-1">文档本地启动 <a class="header-anchor" href="#文档本地启动" aria-label="Permalink to &quot;文档本地启动&quot;">​</a></h3><p>该项目的文档可以本地启动，运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><h3 id="创建环境" tabindex="-1">创建环境 <a class="header-anchor" href="#创建环境" aria-label="Permalink to &quot;创建环境&quot;">​</a></h3><p>确保安装了 conda ，如果没有安装，请从 <a href="https://docs.anaconda.com/free/miniconda/index.html" target="_blank" rel="noreferrer">Miniconda</a> 下载，或者快速安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># linux x64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda3-latest-Linux-x86_64.sh</span></span></code></pre></div><p>创建环境，会在当前目录下 <code>.env/toyllm</code> 创建环境，并安装依赖</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toyllm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toyllm</span></span></code></pre></div><h2 id="项目使用说明" tabindex="-1">项目使用说明 <a class="header-anchor" href="#项目使用说明" aria-label="Permalink to &quot;项目使用说明&quot;">​</a></h2><h3 id="导出模型" tabindex="-1">导出模型 <a class="header-anchor" href="#导出模型" aria-label="Permalink to &quot;导出模型&quot;">​</a></h3><p>请到 <a href="https://huggingface.co/collections/Qwen/qwen2-6659360b33528ced941e557f" target="_blank" rel="noreferrer">Hugging Face</a> / <a href="https://www.modelscope.cn/home" target="_blank" rel="noreferrer">ModelScope</a> 下载 Qwen2 模型，以 <a href="https://huggingface.co/Qwen/Qwen2-7B-Instruct" target="_blank" rel="noreferrer">Qwen2-7B</a> 为例，下载模型到 <code>downloads</code> 目录下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://huggingface.co/Qwen/Qwen2-7B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloads/Qwen/Qwen2-7B</span></span></code></pre></div><blockquote><p>模型遵循 <a href="https://huggingface.co/Qwen/Qwen2-7B-Instruct/blob/main/LICENSE" target="_blank" rel="noreferrer">Apache-2.0</a> 协议，请遵守协议使用</p></blockquote><p>导出模型，默认导出至 <code>weights</code> 目录下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --model_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Qwen/Qwen2-7B</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --weight_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloads/Qwen/Qwen2-7B</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --quan_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int8</span></span></code></pre></div><h3 id="模型推理" tabindex="-1">模型推理 <a class="header-anchor" href="#模型推理" aria-label="Permalink to &quot;模型推理&quot;">​</a></h3><p>对话交流模型功能，以及预设了部分对话，可以直接运行方面测试模型效果，运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> infer-chat.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --model_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Qwen/Qwen2-7B</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --model_path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> weights/Qwen/Qwen2-7B-IR-int8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --quan_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> int8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --max_sequence_length</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 512</span></span></code></pre></div><p>推理结果中可以看到，该模型可以记录用户的对话历史，并根据上下文进行对话</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>🚀 通义千问 <a href="https://github.com/QwenLM/Qwen2" target="_blank" rel="noreferrer">QwenLM/Qwen2</a></li></ul><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p>本项目遵循 <a href="https://opensource.org/licenses/GPL-3.0" target="_blank" rel="noreferrer">GPL-3.0</a> 协议，请遵循协议使用本项目</p>`,35),l=[n];function h(r,p,d,o,c,k){return s(),e("div",null,l)}const u=a(t,[["render",h]]);export{F as __pageData,u as default};