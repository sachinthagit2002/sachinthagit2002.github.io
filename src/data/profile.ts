export interface ProfileInfo {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  location: string;
  email: string;
  mobile: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  website: string;
  heroIntro: string;
  aboutParagraphs: string[];
  careerInterests: string[];
  cvPdfPath: string;
  cvDocxPath: string;
  languages: { name: string; note: string }[];
}

export const PROFILE: ProfileInfo = {
  name: 'Sachintha Danuka Karunathilaka',
  shortName: 'Sachintha Danuka',
  initials: 'SD',
  title: 'Aspiring Data Analyst | Data Science Undergraduate',
  location: 'Kegalle, Sri Lanka',
  email: 'sachinthadanukak@gmail.com',
  mobile: '+94 70 509 7471',
  github: 'https://github.com/sachinthagit2002',
  githubHandle: 'sachinthagit2002',
  linkedin: 'https://www.linkedin.com/in/sachintha-karunathilaka-643108376/',
  website: 'https://sachinthadanuka.com',
  heroIntro:
    'I am a Data Science undergraduate with a background in Computing and Software Engineering. I am interested in data analytics, machine learning, and transforming data into meaningful insights. I enjoy building practical technology solutions and continuously improving my technical skills.',
  aboutParagraphs: [
    'I am currently pursuing a BSc (Hons) Data Science top-up degree awarded by London Metropolitan University, building directly on my Higher Diploma in Computing and Software Engineering from Cardiff Metropolitan University (2023–2025).',
    'Starting out in Computing and Software Engineering taught me how to design relational databases, structure backend APIs, and ship full-stack web and mobile applications. As I progressed through academic projects, I became increasingly drawn to the data behind those applications—how messy real-world records are cleaned, modeled, queried, and turned into actionable decisions.',
    'My final-year Data Science project, Auto Valuate, brings these two worlds together: scraping real-world Sri Lankan vehicle marketplace listings, engineering domain-specific features, benchmarking multiple regression models, applying SHAP for explainability, and integrating everything into a usable web platform.',
    'I am actively seeking Data Analyst internships and graduate opportunities where I can contribute strong SQL, Python, data cleaning, and software engineering fundamentals while growing within an experienced analytics team.',
  ],
  careerInterests: [
    'Data analysis & interpretation',
    'Data cleaning & preprocessing',
    'Database management & SQL',
    'Data visualization & reporting',
    'Python-based data analysis',
    'Machine learning & predictive analytics',
    'Extracting insight from real-world datasets',
    'Practical full-stack data products',
  ],
  cvPdfPath: '/cv/Sachintha-Danuka-Karunathilaka-CV.pdf',
  cvDocxPath: '/cv/Sachintha-Danuka-Karunathilaka-CV.docx',
  languages: [
    { name: 'Sinhala', note: 'Native / Fluent' },
    { name: 'English', note: 'Professional Working Proficiency (The Language Key, 2024)' },
  ],
};
