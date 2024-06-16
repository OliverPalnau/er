type Translations = {
    [key: string]: {
      contact: string;
      areasWeServe: string;
      globalPharma: string;
      heroDescription: string;
    };
  };
  
  export const translations: Translations = {
    en: {
      contact: 'CONTACT',
      areasWeServe: 'Areas We Serve',
      globalPharma: 'Global Pharma Made Fast & Simple',
      heroDescription: 'Looking to penetrate new markets with your medical products or devices? We are your end-to-end regulatory partners from initial idea to market approval and throughout your product\'s entire lifecycle.',
    },
    zh: {
      contact: '联系我们',
      areasWeServe: '我们服务的领域',
      globalPharma: '全球医药 快速与简单',
      heroDescription: '希望用您的医疗产品或设备开拓新市场？我们是您的端到端监管伙伴，从最初的构想到市场批准以及产品的整个生命周期。',
    },
  };
  