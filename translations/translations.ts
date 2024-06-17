type Translations = {
  [key: string]: {
    contact: string;
    areasWeServe: string;
    globalPharma: string;
    heroDescription: string;
    contactUs: string;
    assistingQuestions: string;
    emailPrompt: string;
    serviceMarkets: string;
    documentTranslations: string;
    contactInfo: string;
    email: string;
    phoneNumber: string;
    message: string;
    sendMessage: string;
    thanksMessage: string;
    address: string;
    home: string;
    rights: string;
    servicesHeading: string;
    servicesSubHeading: string;
    servicesDescription: string;
    ourServicesInclude: string;
    serviceItems: { name: string; description: string }[];
    panelDetails: { title: string; subtitle: string; description: string[] }[];
    parallaxHeading: string;
    usaSectionTitle: string;
    usaSectionDescription: string;
    chinaSectionTitle: string;
    chinaSectionDescription: string;
    contactHeading: string;
    contactDescription: string;
    contactEmailPrompt: string;
    contactServiceMarkets: string;
    contactAddress: string;
  };
};

export const translations: Translations = {
  en: {
    contact: 'CONTACT',
    areasWeServe: 'Areas We Serve',
    globalPharma: 'Global Pharma Made Fast & Simple',
    heroDescription: 'Looking to penetrate new markets with your medical products or devices? We are your end-to-end regulatory partners from initial idea to market approval and throughout your product\'s entire lifecycle.',
    contactUs: 'Contact Us',
    assistingQuestions: 'We are here to assist you with any questions or inquiries you may have. Whether you are looking for more information about our services, need support, or want to provide feedback, please feel free to get in touch.',
    emailPrompt: 'Please email us and we will keep you closely updated on new regions and new additions to the scope of our services.',
    serviceMarkets: 'Currently, we only service products intended for US & China markets and offer document translations between English and Mandarin Chinese.',
    documentTranslations: 'Performing technical document translations.',
    contactInfo: 'Contact Information',
    email: 'Email',
    phoneNumber: 'Phone Number',
    message: 'Message',
    sendMessage: 'Send Message',
    thanksMessage: 'Thanks for your message! We\'ll be in touch soon.',
    address: 'Address',
    home: 'Home',
    rights: 'All rights reserved.',
    servicesHeading: 'All-inclusive regulatory management services throughout your product’s entire lifecycle.',
    servicesSubHeading: 'Serving USA and China*',
    servicesDescription: 'We provide a wide range of services to help you navigate the regulatory landscape and ensure compliance with industry standards.',
    ourServicesInclude: 'Our Services Include:',
    serviceItems: [
      { name: 'Regulatory Intelligence', description: 'Keeping up-to-date with the latest regulations and standards.' },
      { name: 'Regulatory Strategy', description: 'Developing plans to navigate regulatory requirements efficiently.' },
      { name: 'Consultation Meetings', description: 'Facilitating interactions with health authorities.' },
      { name: 'Regulatory Operations', description: 'Managing the practical aspects of compliance and submissions.' },
      { name: 'Clinical Trial Operations', description: 'Overseeing the administration of clinical trials.' },
      { name: 'Medical Writing and Publishing', description: 'Creating necessary documentation and reports. Performing technical document translations.*' },
      { name: 'Product Registration', description: 'Handling the registration of drugs, medical foods and medical devices with the relevant government and regulatory authorities.' },
      { name: 'Product Life-Cycle Management', description: 'Ensuring compliance throughout a product\'s life cycle.' },
      { name: 'Pre-Submission Meetings', description: 'Preparing for meetings with regulatory bodies.' },
      { name: 'Post-Approval Changes', description: 'Managing changes to a product after it has been approved.' },
    ],
    panelDetails: [
      {
        title: 'Medical Foods',
        subtitle: 'We handle the required registrations, licensing, and product lifecycle management of complete nutrient formulas for:',
        description: [
          'Diabetes mellitus',
          'Respiratory system illness',
          'Kidney disease',
          'Oncological conditions',
          'Liver disease',
          'Sarcopenia syndrome',
          'Trauma, infection, surgery, and other stress conditions',
          'Inflammatory bowel disease',
          'Food protein allergies',
          'Refractory epilepsy',
          'Gastrointestinal malabsorption and pancreatitis',
          'Fatty acid metabolic abnormality',
          'Obesity and fat reduction surgery',
          'And more.',
        ],
      },
      {
        title: 'Drugs',
        subtitle: 'We offer and ensure:',
        description: [
          'NDA and ANDA filings in the U.S. for new and generic drugs.',
          'Compilation of detailed information on drug safety, efficacy, labeling, manufacturing, and quality controls for NDAs.',
          'Bioequivalence to reference drugs for ANDA submissions.',
          'NDAs in China for various drug categories including chemical drugs, biological products, and traditional Chinese medicines.',
          'Leveraging of expedited pathways for rare disease and pediatric drugs in China to meet clinical needs and advance treatment availability.',
        ],
      },
      {
        title: 'Medical Devices',
        subtitle: 'We offer and ensure:',
        description: [
          'PMAs and 510(k) filings in the U.S. for medical devices.',
          'Compilation of detailed information on device safety, effectiveness, labeling, manufacturing, and quality controls for PMAs.',
          'Substantial equivalence to predicate devices for 510k submissions.',
          'Medical Device Registrations in China for various device categories.',
        ],
      },
    ],
    parallaxHeading: 'Areas We Serve',
    usaSectionTitle: 'United States',
    usaSectionDescription: 'For the US market, we specialize in facilitating New Drug Application (NDA) filings and Abbreviated New Drug Application (ANDA) filings. We ensure that pharmaceutical companies can quickly and efficiently submit their applications for new drugs or generic versions of existing drugs. For NDAs, we meticulously compile comprehensive information on safety, efficacy, labeling, manufacturing processes, and quality controls. When it comes to ANDAs, we focus on ensuring that bioequivalence is demonstrated to reference drugs in your submission. Our goal is to support the continuous evaluation and improvement of the pharmaceutical landscape, helping companies make safe and effective medications accessible to patients across the United States faster.',
    chinaSectionTitle: 'China',
    chinaSectionDescription: 'For the Chinese market, we specialize in facilitating New Drug Applications (NDAs). Our expertise ensures that pharmaceutical companies can efficiently submit their applications for new chemical drugs, new biological products, gene and cell therapies, new vaccines, and new traditional Chinese medicines approved for the first time in mainland China. Notably, China set a new record in 2023 by approving the highest number of new drugs in a single year—104 in total. These approvals encompassed a wide range of therapeutic areas, including oncology drugs, anti-infective drugs, and central nervous system (CNS) drugs. Additionally, we make sure that companies can effectively use the expedited regulatory pathways for rare disease drugs and pediatric drugs, addressing unmet clinical needs and ensuring that innovative treatments reach patients efficiently.',
    contactHeading: 'Contact Us',
    contactDescription: 'We are here to assist you with any questions or inquiries you may have. Whether you are looking for more information about our services, need support, or want to provide feedback, please feel free to get in touch.',
    contactEmailPrompt: 'Please email us and we will keep you closely updated on new regions and new additions to the scope of our services.',
    contactServiceMarkets: '*Currently, we only service products intended for US & China markets and offer document translations between English and Mandarin Chinese.',
    contactAddress: '350 Wireless Blvd.\nHauppauge, NY 11788',
  },
  zh: {
    contact: '联系我们',
    areasWeServe: '我们服务的领域',
    globalPharma: '全球医药 快速与简单',
    heroDescription: '希望用您的医疗产品或设备开拓新市场？我们是您的端到端监管伙伴，从最初的构想到市场批准以及产品的整个生命周期。',
    contactUs: '联系我们',
    assistingQuestions: '我们随时为您解答任何问题或疑问。无论您是想了解更多关于我们服务的信息，需要支持，或是想提供反馈，请随时与我们联系。',
    emailPrompt: '请给我们发送电子邮件，我们会及时向您通报新的地区和服务范围的扩展情况。',
    serviceMarkets: '目前，我们仅为美国和中国市场的产品提供服务，并提供英语和中文的技术文件翻译。',
    documentTranslations: '进行技术文件翻译。',
    contactInfo: '联系信息',
    email: '电子邮件',
    phoneNumber: '电话号码',
    message: '信息',
    sendMessage: '发送信息',
    thanksMessage: '感谢您的信息！我们会尽快与您联系。',
    address: '地址',
    home: '首页',
    rights: '版权所有。',
    servicesHeading: '全方位的监管管理服务贯穿您产品的整个生命周期。',
    servicesSubHeading: '服务美国和中国*',
    servicesDescription: '我们提供广泛的服务，帮助您在监管环境中导航，并确保符合行业标准。',
    ourServicesInclude: '我们的服务包括:',
    serviceItems: [
      { name: '监管情报', description: '随时了解最新的法规和标准。' },
      { name: '监管策略', description: '制定高效应对监管要求的计划。' },
      { name: '咨询会议', description: '促进与卫生当局的互动。' },
      { name: '监管操作', description: '管理合规和提交的实际方面。' },
      { name: '临床试验操作', description: '监督临床试验的管理。' },
      { name: '医学写作和出版', description: '创建必要的文件和报告。进行技术文件翻译。' },
      { name: '产品注册', description: '处理药品、医疗食品和医疗器械的注册。' },
      { name: '产品生命周期管理', description: '确保产品生命周期内的合规。' },
      { name: '提交前会议', description: '为与监管机构的会议做准备。' },
      { name: '批准后的变更', description: '管理产品批准后的变更。' },
    ],
    panelDetails: [
      {
        title: '医疗食品',
        subtitle: '我们处理所需的注册、许可和完整营养配方的产品生命周期管理，包括：',
        description: [
          '糖尿病',
          '呼吸系统疾病',
          '肾病',
          '肿瘤病症',
          '肝病',
          '肌肉减少症',
          '创伤、感染、手术和其他应激状态',
          '炎症性肠病',
          '食物蛋白过敏',
          '难治性癫痫',
          '胃肠道吸收不良和胰腺炎',
          '脂肪酸代谢异常',
          '肥胖和减肥手术',
          '等等。',
        ],
      },
      {
        title: '药品',
        subtitle: '我们提供并确保：',
        description: [
          '在美国进行新药申请（NDA）和仿制药申请（ANDA）提交。',
          '编制关于药物安全性、有效性、标签、生产和质量控制的详细信息以进行NDA提交。',
          'ANDA提交中对参考药物的生物等效性。',
          '在中国进行各种药物类别的NDA申请，包括化学药物、生物制品和传统中药。',
          '利用中国的快速通道为罕见病和儿科药物满足临床需求并推进治疗可及性。',
        ],
      },
      {
        title: '医疗设备',
        subtitle: '我们提供并确保：',
        description: [
          '在美国进行PMA和510(k)申请。',
          '编制关于设备安全性、有效性、标签、生产和质量控制的详细信息以进行PMA申请。',
          '510(k)申请中对参比设备的实质等效性。',
          '在中国进行各种设备类别的医疗设备注册。',
        ],
      },
    ],
    parallaxHeading: '我们服务的领域',
    usaSectionTitle: '美国',
    usaSectionDescription: '在美国市场，我们专注于促进新药申请（NDA）和简化新药申请（ANDA）的提交。我们确保制药公司能够快速有效地提交其新药或现有药物的仿制药申请。对于NDA，我们精心编制关于安全性、有效性、标签、生产工艺和质量控制的全面信息。对于ANDA，我们重点确保在提交中展示与参考药物的生物等效性。我们的目标是支持制药领域的持续评估和改进，帮助公司更快地将安全有效的药物提供给美国各地的患者。',
    chinaSectionTitle: '中国',
    chinaSectionDescription: '在中国市场，我们专注于促进新药申请（NDA）。我们的专业知识确保制药公司能够有效提交其新化学药物、新生物制品、基因和细胞疗法、新疫苗以及首次在中国大陆批准的新中药的申请。值得注意的是，中国在2023年创下了一年内批准新药数量最多的记录——总共104种。这些批准涵盖了广泛的治疗领域，包括肿瘤药物、抗感染药物和中枢神经系统（CNS）药物。此外，我们确保公司能够有效利用罕见病药物和儿科药物的快速通道，满足未满足的临床需求，确保创新治疗迅速到达患者手中。',
    contactHeading: '联系我们',
    contactDescription: '我们随时为您解答任何问题或疑问。无论您是想了解更多关于我们服务的信息，需要支持，或是想提供反馈，请随时与我们联系。',
    contactEmailPrompt: '请给我们发送电子邮件，我们会及时向您通报新的地区和服务范围的扩展情况。',
    contactServiceMarkets: '*目前，我们仅为美国和中国市场的产品提供服务，并提供英语和中文的技术文件翻译。',
    contactAddress: '350 Wireless Blvd.\nHauppauge, NY 11788',
  },
};
