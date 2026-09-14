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
::carbon:ai-agent:: BI / 数据分析 · 数字化方向

::majesticons:award-line:: 3.5 年快消行业（可口可乐亚太技术中心）数字化经验，独立交付 3 个业务系统（2 个Power BI项目 + 1 个低代码平台系统），擅长从业务痛点出发设计并落地数据系统。
:::

::: card title="技能清单" icon="mdi-star-outline"

::logos:microsoft-icon:: Microsoft Power Platform:
    Power Query (M Language)、Power Automate、Power Apps、
    
      Power BI (Desktop/Service 全流程：数据建模、DAX 度量值、发布与应用分发、企业网关与计划刷新)

::ant-design:code-outlined:: 编程语言:
    熟练掌握Python、SQL; 熟悉AI Agent开发(Prompt 工程、JSON Schema 结构化输出)

::cryptocurrency-color:auto:: 自动化与低代码开发:
    具备从0到1搭建业务流程应用的能力，熟练掌握明道云HAP低代码平台

::icon-park:english::英语读写流利，可进行书面沟通与展示型汇报。
:::

<div style="page-break-after: always;"></div>

::: card title="工作经历" icon="mdi-briefcase-outline"

::mdi:company:: 公司: **Coca-Cola - 亚太技术中心|APTC** (Manpower 人力派遣)

::uiw:date:: 时间: 2022年2月 - 2025年8月

::solar:card-outline:: 职位: **Lab Digital Specialist**

::material-symbols-light:network-node::工作成果: 
- 主导实验室数字化转型，落地 3 个数字化系统（详见项目经历）。
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

::: card title="项目经历" icon="streamline-sharp:user-work-laptop-wifi"
::: timeline 
- **原物料预警系统**: 
    time=2024/07/20 - 2025/04/30 type=success
    - 项目简介: 
        - 收集原物料缺陷信息，整合数据，形成统计分析。对关键物料，设立预警机制，及时分享给全系统。
    - 工作内容: 
        - 通过与OU部门和质控经理的多方沟通，了解需求，独立设计并实现了整个系统。
        - 数据以 Forms 人工提交为主（结构化字段 + 自由文本描述），搭配标准化维度表（物料 / 缺陷类型 / OU / 日期）保证口径一致
        - 通过 Power BI Service 报表共享 / 应用受众，为不同国家、OU 的人员分配 Viewer 角色，实现报表级访问控制——各区域人员仅能访问本区域的报表。
    - 工作亮点: 
        - 通过Forms + Power Automate + Outlook + Power BI, 实现了提交，预警，分析的完整系统。
        - 设计 Prompt 模板 + JSON Schema，用 GPT-4o 将人员非结构化描述自动转为标准化记录；通过维度表匹配做名称归一，并实现重复问题判重，为预警分析提供高质量数据入口。
        - Power Automate 事件触发流实现"提交即推送"（Outlook 通知责任人 + 触发数据集刷新）。
        - 解决了OU部门收集信息难，数据处理过程繁琐的痛点，并有效避免了重复问题的发生，将一项繁琐任务自动化输出为可视化报告并推送责任人。
        - 该项目赋能于中国及东南亚几个国家，多次在上级视察活动中作为特色项目展出，并获得年度团队合作奖第一名。
<br>

- **Product Integrity Program**: 
    time=2023/03/10 - 2024/06/01 type=success
    - 项目简介: 
        - 收集市场样品进行质量分析和合规检验，并提交对应的分析报告
    - 工作内容: 重新设计并优化了登样(Log in)和出报告(report)流程: 
        - 数据源以SQL Server为主，Excel/PowerPoint 作为补充源（10+ 数据源，30+ table）；通过企业网关配置计划刷新，服务端每日自动更新。
        - 按星型模型拆分维度，沉淀20+ DAX 度量值（合格率、待办量、YTD 同比），并基于 AVERAGEX / SUMX / VAR 实现 t 统计量与自由度计算 + 临界值表判定样本差异显著性，提供数据钻取与层级展示。
        - 交互式看板服务两类用户（实验员数据自检 / 管理层把控进度），提供了一站式查询/分析/报告功能
    - 工作亮点: 
        - 在促进了流程的标准化和数据的准确性的基础上，登样效率提升 100%，出报告时间由原来的2天缩短至1天。
        - 基于刷新后的核心指标设置异常阈值，通过 Power Automate 推送责任人，将事后弥补改为主动纠偏。
        - 该项目在部门年度创新（Innovation）评选中获得第一名。
<br>
:::

<div style="page-break-after: always;"></div>

::: card title="项目经历" icon="streamline-sharp:user-work-laptop-wifi"
::: timeline 
- **实验室数据管理系统**: 
    time=2025/02/20 - 2025/08/20 type=success
    - 项目简介: 
        - 通过明道云HAP低代码平台，管理实验室的日常数据处理和自动化需求。
    - 工作内容: 
        - 通过与管理层和业务人员的多方沟通，实际调查，重新规划并设计了实验室的采购和库存管理模块。
        - 目录-产品-批次三层层级建模；化合物名称→CAS 号 / 规范名自动识别与标准化，保障主数据一致性。
        - 实现了采购申请，审批，入库，出库等流程的自动化，提升了工作效率。
    - 工作亮点: 
        - 主数据标准化使同一化合物不再以多种名称重复入库。
        - 将 HAP 数据接入 Power BI 做库存与采购看板，实现跨系统数据统一查看。
:::
