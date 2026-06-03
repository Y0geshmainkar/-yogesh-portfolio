import { createSlice } from '@reduxjs/toolkit'

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    personal: {
      name: 'Yogesh Mainkar',
      title: 'Frontend Developer',
      email: 'yogeshmainkar111@gmail.com',
      phone: '+91 7411904296',
      location: 'Belgaum, Karnataka',
      linkedin: 'https://www.linkedin.com/in/yogesh-mainkar-250473214',
      github: 'https://github.com/Y0geshmainkar',
      summary:
        '4+ years of experience as a Frontend Developer with expertise in React.js, Vue.js 3, TypeScript, and SCSS/SASS. Proven track record building reusable component libraries, integrating third-party APIs, and delivering responsive, WCAG-accessible UIs. Experienced with Redux, REST APIs, CI/CD pipelines, and cloud tools (Azure, AWS).',
    },
    skills: [
      { label: 'Languages', value: 'TypeScript | JavaScript (ES6+) | HTML5 | CSS3 | SCSS/SASS' },
      { label: 'Frameworks', value: 'React.js (Hooks) | Vue.js 3 (Composition API) | Redux | Bootstrap 5' },
      { label: 'API', value: 'Axios | REST APIs | Interceptor Pattern' },
      { label: 'Tools', value: 'Azure DevOps | Azure Cloud | Git | Vite | VS Code' },
      { label: 'CI/CD', value: 'Multi-environment Deployment | Feature Branch Strategy' },
      { label: 'Other', value: 'WCAG Accessibility | ARIA | Responsive Design | UI/UX Collaboration' },
    ],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'NTT Data Services',
        period: '2022 – 2024',
        bullets: [
          'Developed and integrated new features in Platea, a banking modernization platform, using React.js; built reusable components and front-end libraries for scalable UI architecture',
          'Integrated third-party APIs including Jumio (KYC, ID Verification & SSN Validation), Real-Time Payments, VolPay, FedNow/Finzly, Akoya Account Aggregation, and Marqeta Cards',
          'Collaborated with backend teams using Jira, Git, AWS services, and Postman',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Globe Life',
        period: 'May 2024 – June 2026',
        location: 'Bangalore, Karnataka',
        bullets: [
          'Built a large-scale insurance self-service web application from scratch, serving 1000+ active policyholders across 7 divisions; engineered reusable components optimized for cross web platforms',
          'Built PCI-compliant payment flows integrating CyberSource Flex Microform for credit card tokenization; implemented bank draft and AutoPay management',
          'Optimized components for maximum performance; built PWA with service worker, lazy loading, and cache management',
          'Delivered WCAG-compliant accessible UI; collaborated with UI/UX designers to translate wireframes into high-quality interfaces',
          'Maintained multi-environment CI/CD pipeline (dev/qa/stg/prod)',
        ],
      },
    ],
    awards: [
      { title: 'Making A Difference Award – Emerging Talent', org: 'NTT Data Services', date: 'Oct 2025' },
      { title: 'STAR Performance Award – Teamwork', org: 'NTT Data Services', date: 'Mar 2023' },
    ],
  },
  reducers: {},
})

export default portfolioSlice.reducer
