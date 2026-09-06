---
title: Resume
permalink: /Others/resume_di
navbar: false
aside: false
password: 567
---


::: card title="基本信息" icon="mdi-account-circle-outline"
- 姓名: 张磾 | 性别: 男 | 年龄: 30岁 
- 学校: 山东理工大学(2015-2019) | 专业: 物理学 | 学历: 本科
- 手机: 17861969190 | 微信: st_mos | 邮箱: threekd42@gmail.com
:::

::: card title="求职意向" icon="mdi-rocket-launch-outline"
::carbon:ai-agent:: AI Agent 应用开发 / 数字化转型

::majesticons:award-line:: 3 年+ 快消企业实验室数字化经验，独立落地多个"低代码+AI"应用（LLM Agent 管线、Power Platform、BI 看板）。擅长从业务痛点出发，梳理业务逻辑，将非结构化数据转化为可用的数据资产，成果曾获部门创新奖第一名。
:::


::: card title="技能清单" icon="mdi-star-outline"

::cryptocurrency-color:auto:: AI Agent 开发:
    Prompt 工程、JSON Schema 结构化输出、RAG、MCP

::ant-design:code-outlined:: 编程语言:
    熟练掌握Python、Linux、SQL; 熟悉Nginx、HTML/CSS、Vue3

::logos:microsoft-icon:: Microsoft Power Platform:
    Power Query、Power BI、Power Automate、Power Apps

::cryptocurrency-color:auto:: 自动化与低代码开发:
    具备从0到1搭建业务流程应用的能力，熟悉明道云HAP低代码平台

::icon-park:english::英语读写流利，可进行书面沟通与展示型汇报，具备国际化团队协作基础
:::

<div style="page-break-after: always;"></div>
<br>

::: card title="工作经历" icon="mdi-briefcase-outline"

::mdi:company:: 公司: **Coca-Cola - 亚太技术中心|APTC** (Manpower 人力派遣)

::uiw:date:: 时间: 2022年2月 - 2025年8月

::solar:card-outline:: 职位: **Lab Digital Specialist**

::material-symbols-light:network-node::工作成果: 
- 主导实验室数字化转型，落地 3 个数字化系统（详见项目经历）。
- 通过 Power Query/Python 自动化 + Power BI 看板，登样效率提升 2 倍，报告周期由 2 天缩短至 1 天。
- 为实验室提供 IT 解决方案与培训，推广 Python/Power BI 工具，赋能业务人员自助完成数据可视化。
- 所负责项目分获部门年度创新第一名、年度团队合作奖第一名。

<br>

::mdi:company:: 公司: **启卓教育/汉德自动化**

::uiw:date:: 时间: 2019年8月 - 2021年12月

::material-symbols-light:network-node::主要经历: 

- 启卓教育 - 数理化辅导教师（带出 4 名初三学生考入重点高中），积累了面向不同对象的沟通与培训能力。
- 汉德自动化 - 机械资料中英核对、全站仪测量数据处理。

:::

<div style="page-break-after: always;"></div>
<br>

::: card title="项目经历" icon="streamline-sharp:user-work-laptop-wifi"
::: timeline 

- **Litnebula - 世界文学影响图谱 Web 应用**(离职后个人项目，全栈独立开发): 
    time=2026/08/18 - 2026/08/30 type=success
    - 项目简介: 
        - 从电子书一键生成"作者-作品-提及关系"的结构化文学图谱：上传电子书后，由多阶段 LLM Agent 管线自动提取实体与关系，经去重与人工审核后发布为 3D 交互图谱。
        - 已发布为Web应用，可现场展示。
    - 工作内容: 
        - 设计并实现多阶段 LLM Agent 管线：电子书解析 → 元数据/实体提取(A1/A2) → 书内提及识别与涟漪分类(B) → 作者补全 → 批次构建 → 草稿落库 → 人工审核发布，各阶段以提示词 + JSON Schema 约束输出并自动重试解析失败。
        - 实现三阶段去重（字符级基础匹配 + 向量语义嵌入 + LLM 兜底确认），并引入置信度分流机制：模型输出 confidence(0~1)，高置信直通、低置信跳过、中间区间触发二次判定，误判/漏检明细随批次落盘供审计。
        - 构建后台导入任务队列（并发上限、限流、取消与垃圾清理）与"提取→去重→审核→发布"闭环，全程审计日志。
    - 工作亮点: 
        - 独立完成全栈开发（FastAPI + SQLite + React/TypeScript + Three.js + DeepSeek/阿里云百炼），2 周内交付可用版本。
        - 后端 316 个单元测试、前端 73 个测试、多用户数据隔离、账号安全（Argon2、Turnstile、CSRF、限流）。
        - 通过置信度分流与二次判定，将 LLM 输出不稳定问题显式化、可审计，显著降低漏检/误判对数据质量的影响。
<br>

- **Product Integrity Program**: 
    time=2023/03/10 - 2024/06/01 type=success
    - 项目简介: 
        - 收集市场样品进行质量分析和合规检验，并提交对应的分析报告
    - 工作内容: 重新设计并优化了登样(Log in)和出报告(report)流程: 
        - 通过Power Query自动处理数据以及利用python编写脚本，减少人工的重复性劳动。
        - 通过 Power BI 规划设计了项目的Dashboard，提供了一站式查询/分析/报告功能
    - 工作亮点: 
        - 在促进了流程的标准化和数据的准确性的基础上，登样效率提升两倍，出报告时间由原来的2天缩短至1天。
        - 连接企业数据库系统，实时更新数据，并通过结合各种评判标准，及时发现问题并进行预警。
        - 实验员通过该Dashboard进行数据自检，管理层通过该Dashboard获取项目进度和关键指标。
        - 该项目在部门年度创新（Innovation）评选中获得第一名。
<br>
:::

<div style="page-break-after: always;"></div>

::: card title="项目经历" icon="streamline-sharp:user-work-laptop-wifi"
::: timeline 
- **原物料预警系统**: 
    time=2024/07/20 - 2025/04/30 type=success
    - 项目简介: 
        - 收集原物料缺陷信息，整合数据，形成统计分析。对关键物料，设立预警机制，及时分享给全系统。
    - 工作内容: 
        - 通过与OU部门和质控经理的多方沟通，了解需求，独立设计并实现了整个系统。
    - 工作亮点: 
        - 通过Forms + Power Automate + Outlook + Power BI, 实现了提交，预警，分析的完整系统。
        - 利用GPT-4o设计Prompt，自动将人员的非结构化描述转化为标准化记录，为后续Agent分析和预警提供高质量数据入口。
        - 解决了OU部门收集信息难，数据处理过程繁琐的痛点，并有效避免了重复问题的发生，节约了大量的时间和人力成本。
        - 该项目赋能于中国及东南亚几个国家，多次在上级视察活动中作为特色项目展出，并获得年度团队合作奖第一名。
<br>

- **实验室数据管理系统**: 
    time=2025/02/20 - 2025/08/20 type=success
    - 项目简介: 
        - 通过明道云HAP低代码平台，管理实验室的日常数据处理和自动化需求。
    - 工作内容: 
        - 通过与管理层和业务人员的多方沟通，实际调查，重新规划并设计了实验室的采购和库存管理模块。
    - 工作亮点: 
        - 库存结构清晰，通过目录-产品-批次的三层结构进行管理，有助于快速定位和查询。
        - 实现了采购申请，审批，入库，出库等流程的自动化，提升了工作效率。
        - 集成LLM（DeepSeek）与化学数据库CAS Common Chemistry API，实现化合物名称的自动识别与标准化。
<br>
:::
