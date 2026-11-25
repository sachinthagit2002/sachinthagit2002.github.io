export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    evidence: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics & Databases',
    description: 'Querying, cleaning, structuring, and interpreting real-world datasets.',
    skills: [
      { name: 'SQL & MySQL', evidence: 'LinkedIn Learning SQL Track (2026) & PetWell360' },
      { name: 'SQL Server (T-SQL)', evidence: 'SportBooking & Cozy Comfort schemas' },
      { name: 'Python (Pandas & NumPy)', evidence: 'Auto Valuate ML preprocessing pipeline' },
      { name: 'Data Cleaning & IQR Filtering', evidence: 'Outlier removal & missing-value imputation' },
      { name: 'Exploratory Data Analysis', evidence: 'Correlation matrices & market distribution analysis' },
      { name: 'Data Visualization (Matplotlib, Seaborn, Recharts)', evidence: 'Model & SHAP visual diagnostics' },
      { name: 'MongoDB', evidence: 'Scraped vehicle dataset & audit storage' },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & Data Science',
    description: 'End-to-end supervised regression modeling, evaluation, and explainability.',
    skills: [
      { name: 'Scikit-learn Pipelines', evidence: 'ColumnTransformer, OHE, StandardScaler' },
      { name: 'Ensemble & Boosting Models', evidence: 'CatBoost, XGBoost, LightGBM, Random Forest' },
      { name: 'Model Evaluation', evidence: 'R², MAE, RMSE, and MAPE comparison' },
      { name: 'Explainable AI (SHAP)', evidence: 'TreeExplainer feature attribution in LKR' },
      { name: 'Web Scraping', evidence: 'Playwright & BeautifulSoup4 marketplace pipelines' },
      { name: 'Hybrid RAG & Retrieval', evidence: 'ChromaDB, BM25, RRF & NLI verification' },
    ],
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Full-stack engineering background supporting production data applications.',
    skills: [
      { name: 'C# & .NET / ASP.NET Core MVC', evidence: 'SportBooking (EF Core 8) & Cozy Comfort' },
      { name: 'JavaScript & React', evidence: 'Auto Valuate frontend & Redux Toolkit' },
      { name: 'Node.js & Express', evidence: 'Auto Valuate REST API & JWT auth' },
      { name: 'PHP', evidence: 'PetWell360 multi-role web modules' },
      { name: 'HTML5 & CSS3 / Tailwind CSS', evidence: 'Responsive web interfaces across projects' },
      { name: 'Java (Android Studio) & Firebase', evidence: 'Academic mobile application development' },
      { name: 'Git, GitHub & Docker', evidence: 'Multi-container Compose orchestration' },
    ],
  },
];

export const LEARNING_INTERESTS: { name: string; note: string }[] = [
  { name: 'Power BI', note: 'Learning Interest — BI dashboards & KPI storytelling' },
  { name: 'Tableau', note: 'Learning Interest — Interactive visual analytics' },
  { name: 'Microsoft Excel (Advanced)', note: 'Learning Interest — Pivot tables & financial modeling' },
  { name: 'Statistical Hypothesis Testing', note: 'Expanding quantitative foundations' },
];
