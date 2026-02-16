import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  starbucks,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Data Science Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: html, // Replace with python icon
  },
  {
    name: "TensorFlow",
    icon: css, // Replace with tensorflow icon
  },
  {
    name: "PyTorch",
    icon: javascript, // Replace with pytorch icon
  },
  {
    name: "JavaScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Spring Boot",
    icon: redux, // Replace with spring boot icon
  },
  {
    name: "Flask",
    icon: tailwind, // Replace with flask icon
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: nodejs, // Replace with mysql icon
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Apache Kafka",
    icon: figma, // Replace with kafka icon
  },
  {
    name: "Apache Spark",
    icon: threejs, // Replace with spark icon
  },
];

const experiences = [
  {
    title: "Technology Intern",
    company_name: "SURE ProEd (AICTE Partnership)",
    icon: starbucks, // Replace with SURE ProEd/internship icon
    iconBg: "#383E56",
    date: "December 2024 - June 2025",
    points: [
      "Selected for 6-month intensive internship program by SURE ProEd NGO in partnership with AICTE",
      "Completed 4 months of project-based training with daily sessions led by experienced corporate mentors",
      "Developed and delivered 4 mini-projects during training phase, evaluated for technical proficiency",
      "Working on socially relevant capstone project addressing real-world problems with external evaluation",
      "Participated in community service activities demonstrating social responsibility and leadership",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Manikanta demonstrates exceptional proficiency in AI/ML development with a strong foundation in data science.",
    name: "Academic Mentor",
    designation: "Professor",
    company: "KL University",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His ability to work with large datasets and implement complex ML pipelines is impressive for an undergraduate student.",
    name: "Project Supervisor",
    designation: "Technical Lead",
    company: "Research Lab",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Manikanta's proactive approach to learning and problem-solving makes him a valuable team member in any technical project.",
    name: "Team Collaborator",
    designation: "Senior Developer",
    company: "Tech Community",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Real-Time Stock Market Prediction Pipeline",
    description:
      "AI/ML system using TensorFlow and PyTorch with LSTM neural networks achieving 85-90% accuracy. Engineered Kafka/Spark pipeline processing 5,000+ events/min with automated ML retraining using Airflow.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
      {
        name: "spark",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Explainable Heart Disease Prediction",
    description:
      "ML Analytics Platform using Scikit-learn with Random Forest and KNN models on 10,000+ patient records. Implemented SHAP framework for model explainability and comprehensive data analysis.",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "shap",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
      {
        name: "matplotlib",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Employee Performance Analytics",
    description:
      "ML-Powered KPI System with Random Forest model achieving 88% accuracy. Automated ETL pipelines processing 10,000+ HR records weekly with Power BI dashboards and anomaly detection.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
