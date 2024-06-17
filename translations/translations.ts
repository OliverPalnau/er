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
  },
};
