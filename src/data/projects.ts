export interface ProjectBenchmark {
  model: string;
  mae: string;
  rmse: string;
  mape: string;
  r2: string;
  isBest?: boolean;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  year: string;
  featured?: boolean;
  repoUrl: string;
  summary: string;
  problem: string;
  objectives: string[];
  datasetInfo?: string;
  processSteps?: string[];
  contribution: string;
  features: string[];
  technologies: string[];
  benchmarks?: ProjectBenchmark[];
  benchmarkDatasetNote?: string;
  uiScreenshot?: { src: string; caption: string };
  screenshots?: { src: string; caption: string }[];
  repoScopeNote?: string;
  visualType: 'ml-pipeline' | 'mvc-booking' | 'pet-web' | 'mobile-app' | 'microservices';
}

export const PROJECTS: Project[] = [
  {
    id: 'auto-valuate',
    number: '01',
    name: 'Auto Valuate',
    subtitle: 'AI-Powered Used Car Price Prediction System for the Sri Lankan Market',
    category: 'Data Science Final-Year Project (CS6P05ES)',
    year: '2026',
    featured: true,
    repoUrl: 'https://github.com/sachinthagit2002/car_project.git',
    summary:
      'An end-to-end machine learning, explainable AI, and full-stack valuation platform built on real-world Sri Lankan used vehicle listings scraped from ikman.lk and riyasewana.com.',
    problem:
      'Used car pricing in Sri Lanka fluctuates heavily due to import policies, brand demand, mileage, vehicle condition, and regional market differences—leaving buyers and sellers without transparent, data-backed price benchmarks.',
    objectives: [
      'Collect and clean real-world Sri Lankan vehicle listings via automated web scraping.',
      'Engineer automotive domain features and remove statistical outliers per brand, model, and year.',
      'Benchmark multiple regression estimators (CatBoost, Random Forest, XGBoost, Gradient Boosting, Extra Trees) using MAE, RMSE, MAPE, and R².',
      'Provide transparent LKR feature-level explanations using SHAP values and live comparable market calibration.',
      'Deliver predictions through an interactive React + Node.js + Python Flask web application.',
    ],
    datasetInfo:
      '655 cleaned vehicle listings (131 held-out test records) scraped across Jun 2026 – Nov 2026 from ikman.lk and riyasewana.com, covering 25+ attributes (11 numerical and 13 categorical engineered features) with grouped IQR outlier filtering and log1p target transformation.',
    processSteps: [
      'Scraping & Normalization: Playwright (ikman.lk) + BeautifulSoup4 (riyasewana.com) respecting robots.txt and deduplicating records into MongoDB.',
      'Preprocessing & Feature Engineering: Derived vehicle_age, registration_age, mileage_per_year, brand_popularity, model_avg_price, district_price_factor, and premium_variant_indicator.',
      'Modeling & Monotonic Constraints: Trained and compared 5+ tree and boosting estimators on log1p(price) with monotonic constraints on mileage, age, and prior owners.',
      'Explainability & Safety: TreeExplainer/KernelExplainer SHAP contributions converted to LKR deviations, Mahalanobis out-of-distribution (OOD) detection, plus an optional Hybrid RAG + NLI guardrail verification layer.',
    ],
    contribution:
      'Designed and implemented the complete multi-service architecture: Python Flask ML microservice, Playwright/BeautifulSoup scraping pipelines, feature engineering & model benchmarking workflow, SHAP explainability integration, Node.js/Express JWT backend, and React/Redux/Recharts frontend.',
    features: [
      'Automated web scraping pipeline (ikman.lk & riyasewana.com) with deduplication & audit reports',
      'Multi-model ML comparison automatically selecting the lowest-MAPE estimator (CatBoost)',
      'SHAP Explainable AI waterfall breakdown showing positive/negative LKR feature impacts',
      'Live market price calibration & seller asking-price deal badge (Best Deal to Overpriced)',
      'Mahalanobis distance out-of-distribution (OOD) warning for unusual vehicle inputs',
      'Hybrid RAG comparable search (ChromaDB BGE-Small + BM25 + RRF + Cross-Encoder) with NLI audit logs',
    ],
    technologies: [
      'Python',
      'Flask',
      'Pandas & NumPy',
      'Scikit-learn',
      'CatBoost',
      'XGBoost',
      'LightGBM',
      'SHAP',
      'Playwright & BeautifulSoup4',
      'ChromaDB & BM25',
      'React & Redux Toolkit',
      'Recharts & Tailwind CSS',
      'Node.js & Express',
      'MongoDB',
      'Docker Compose',
    ],
    benchmarks: [
      {
        model: 'CatBoost',
        mae: 'LKR 1,236,548',
        rmse: 'LKR 2,602,236',
        mape: '8.17%',
        r2: '0.9480',
        isBest: true,
      },
      {
        model: 'XGBoost',
        mae: 'LKR 1,178,964',
        rmse: 'LKR 2,731,069',
        mape: '9.02%',
        r2: '0.9427',
      },
      {
        model: 'Extra Trees',
        mae: 'LKR 1,434,226',
        rmse: 'LKR 3,877,632',
        mape: '9.26%',
        r2: '0.8845',
      },
      {
        model: 'Random Forest',
        mae: 'LKR 1,235,742',
        rmse: 'LKR 2,684,551',
        mape: '9.31%',
        r2: '0.9446',
      },
      {
        model: 'Gradient Boosting',
        mae: 'LKR 1,190,301',
        rmse: 'LKR 2,793,770',
        mape: '9.48%',
        r2: '0.9400',
      },
    ],
    benchmarkDatasetNote:
      'Verified from ml-service/model_metadata.json in the repository (655 cleaned records, 131 test samples, trained 2026-11-19).',
    uiScreenshot: {
      src: '/images/projects/autovaluate-ui.jpg',
      caption: 'AutoValuate Web Application — Price Predictor & Market Index Interface',
    },
    screenshots: [
      {
        src: '/images/projects/autovaluate-model-comparison.png',
        caption: 'Verified Model MAPE Comparison generated by model_pipeline.py (CatBoost 8.17% lowest MAPE)',
      },
      {
        src: '/images/projects/autovaluate-correlation-heatmap.png',
        caption: 'Feature Correlation Matrix across price, year, mileage, engine capacity & derived features',
      },
    ],
    visualType: 'ml-pipeline',
  },
  {
    id: 'sportbooking',
    number: '02',
    name: 'Community Sports Facilities Booking System',
    subtitle: 'Full-Stack Municipal Sports Council Reservation & Payment Portal',
    category: 'Data & Web Development Academic Project',
    year: '2026',
    repoUrl: 'https://github.com/sachinthagit2002/sportbooking.git',
    summary:
      'An ASP.NET Core 8.0 MVC web application engineered for a municipal sports council to handle facility scheduling, slot conflict detection, Stripe Sandbox payments, member reviews, and administrative analytics.',
    problem:
      'Manual municipal facility scheduling leads to double-booked time slots, fragmented payment tracking, and slow handling of public inquiries.',
    objectives: [
      'Build a normalized SQL Server schema using Entity Framework Core Code-First migrations.',
      'Prevent double bookings through automated time-slot availability and overlap checks.',
      'Integrate Stripe Sandbox checkout with LKR pricing display and printable receipts.',
      'Support role-based dashboards for Administrators, Staff, and Members with automated unit tests.',
    ],
    contribution:
      'Implemented the 9-controller MVC architecture, 5 scoped service interfaces, EF Core Identity role system, Stripe payment workflow, ERD/Data Dictionary/SQL analytical queries, and 17 xUnit automated tests.',
    features: [
      '3-tier role-based authentication (Admin, Staff, Member) via ASP.NET Core Identity',
      'Hourly availability grid (7:00 AM – 10:00 PM) with real-time booking conflict prevention',
      'Stripe.net 45.3.0 checkout integration with LKR/USD test settlement & printable receipts',
      'Member review system restricted to confirmed/completed bookings with Staff/Admin moderation',
      'Customer inquiry submission and Staff/Admin reply management workflow',
      '17 xUnit automated tests covering booking conflicts, review eligibility, and inquiry validation',
    ],
    technologies: [
      'C#',
      'ASP.NET Core 8.0 MVC',
      'Entity Framework Core 8.0',
      'SQL Server',
      'ASP.NET Identity',
      'Stripe.net 45.3.0',
      'Bootstrap & jQuery',
      'xUnit',
    ],
    visualType: 'mvc-booking',
  },
  {
    id: 'petwell360',
    number: '03',
    name: 'PetWell360',
    subtitle: 'Full-Stack Pet Care, Veterinary Appointments & Lost Pet Platform',
    category: 'Software Engineering Group Project (CSE5015)',
    year: '2025',
    repoUrl: 'https://github.com/sachinthagit2002/final-web-project.git',
    summary:
      'A multi-role PHP and MySQL web application connecting pet owners, veterinary staff, administrators, and pet dealerships across appointments, lost-pet geolocation tracking, ad moderation, and online shopping.',
    problem:
      'Pet owners needed a unified portal to schedule veterinary slots without clashes, report missing pets with map coordinates, and browse verified pet services.',
    objectives: [
      'Design a relational MySQL database (petwell360) linking users, pets, appointments, ads, and feedback.',
      'Provide dynamic time-slot checking to avoid duplicate veterinary appointment bookings.',
      'Enable lost-pet reporting with image uploads and interactive Leaflet.js map pins.',
      'Support dealership ad submissions with administrative approval and user management.',
    ],
    contribution:
      'Contributed to the PHP/MySQL backend modules, relational database structure (8 tables), role-based dashboards, and web frontend workflows.',
    features: [
      '4 user roles (Pet Owner, Dealership, Staff, Admin) with dedicated dashboards',
      'Veterinary appointment booking with live booked-slot checking (get_booked_slots.php)',
      'Lost pet reporting with image upload validation and Leaflet.js latitude/longitude mapping',
      'Dealership pet advertisement workflow with Admin pending/approved moderation',
      'Online pet supply catalog, shopping cart, and checkout order processing',
      'Customer rating and feedback portal reviewed by Staff and Admin',
    ],
    technologies: ['PHP 8', 'MySQL / MariaDB', 'HTML5', 'CSS3', 'JavaScript', 'Leaflet.js'],
    visualType: 'pet-web',
  },
  {
    id: 'cozy-comfort',
    number: '04',
    name: 'Cozy Comfort',
    subtitle: 'Multi-Tier Blanket Supply Chain & Order Automation Architecture',
    category: 'Software Development Academic Project',
    year: '2025',
    repoUrl: 'https://github.com/sachinthagit2002/Cozy-comfort.git',
    summary:
      'A distributed .NET 9 microservices and Blazor solution modeled across Manufacturer, Distributor, and Seller tiers to automate blanket inventory tracking, stock reservations, and multi-stage order fulfillment.',
    problem:
      'Manual coordination across manufacturers, distributors, and retail sellers causes stock visibility gaps, delayed replenishment, and order tracking errors.',
    objectives: [
      'Separate supply chain responsibilities into independent API services with database-per-service isolation.',
      'Track raw product materials, reserved stock, reorder points, and automated restock quantities.',
      'Enforce role-based authentication across Admin, Manufacturer, Distributor, Seller, and API Service roles.',
    ],
    contribution:
      'Designed the multi-database SQL Server schemas (ManufacturerDB, DistributorDB, SellerDB), EF Core code-first migrations, and .NET microservices solution structure.',
    features: [
      '3-service solution structure: Manufacturer.API, Distributor.API, Seller.API + Shared & BlazorApp',
      '3 isolated SQL Server databases with EF Core 9.0.6 migrations and audit columns',
      'Automated stock thresholds (MinStockLevel, ReorderPoint, ReorderQuantity, ReservedStock)',
      'End-to-end order tracking from CustomerOrders through SellerDistributorOrders to ManufacturerOrders',
      'BCrypt password hashing and numeric role-based authorization across tiers',
    ],
    technologies: ['C#', '.NET 9', 'Entity Framework Core 9', 'Blazor', 'SQL Server (T-SQL)', 'BCrypt'],
    repoScopeNote:
      'Repository note: GitHub currently hosts the .sln solution file and complete SQL Server schema/seed scripts for all 3 databases; C# project folders are pending upload.',
    visualType: 'microservices',
  },
  {
    id: 'city-cycle',
    number: '05',
    name: 'City Cycle Mobile Application',
    subtitle: 'Android Cycle Rental & Mobility Application',
    category: 'Mobile Application Development Project',
    year: '2025',
    repoUrl: 'https://github.com/sachinthagit2002/city-cycle.git',
    summary:
      'An Android mobile application project for urban bicycle rentals, configured with Android Studio, Gradle Kotlin DSL, AndroidX, Java, and Firebase integration per academic coursework.',
    problem:
      'Commuters and campus users need a streamlined mobile experience to browse available bicycles and manage rental activity on the go.',
    objectives: [
      'Structure a modern AndroidX application using Gradle Kotlin DSL.',
      'Integrate Java-based Android screens with Firebase backend services for user and rental data.',
    ],
    contribution:
      'Built during Higher Diploma mobile application coursework using Android Studio, Java, and Firebase.',
    features: [
      'Gradle Kotlin DSL project configuration with AndroidX enabled',
      'Designed for Android mobile cycle rental workflows (per academic project & CV)',
      'Planned/configured for Java & Firebase backend connectivity',
    ],
    technologies: ['Android Studio', 'Java', 'Gradle (Kotlin DSL)', 'AndroidX', 'Firebase'],
    repoScopeNote:
      'Repository note: GitHub currently contains the top-level Gradle wrapper and project skeleton; the app/ source module has not yet been pushed to the remote repository.',
    visualType: 'mobile-app',
  },
];
