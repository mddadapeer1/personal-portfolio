import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all'
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  }
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);
export const PROJECTS = [
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Redfin-DataAnalytics-ETL/main/arch.png',
    title: 'Redfin-DataAnalytics-ETL',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Amazon S3'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(BACKEND_SKILLS, 'Snowflake'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS Redshift'),
    ],
    description:
      'The goal of this project is to design and implement a robust ETL (Extract, Transform, Load) pipeline that ingests data from the Redfin data source, applies necessary transformations to clean and structure the data, and then loads it into a server for further analysis and utilization',
    repoLink: 'https://github.com/SAI-MOHAN-B/Redfin-DataAnalytics-ETL',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Reddit-DataEngineering-Pipeline/refs/heads/main/RedditDataEngineering.png',
    title: 'Reddit Data Engineering Pipeline',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Amazon S3'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(FRONTEND_SKILLS, 'AWS Glue'),
      getSkillByLabel(BACKEND_SKILLS, 'AWS Redshift'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'), 
    ],
    description:
      'This project delivers an end-to-end data pipeline solution designed to extract, transform, and load (ETL) Reddit data into an Amazon Redshift data warehouse. It integrates multiple tools and services, including Apache Airflow for orchestration, Celery for distributed task management, PostgreSQL for intermediate storage, Amazon S3 for data storage, AWS Glue for data transformation, Amazon Athena for querying, and Redshift for warehousing',
    repoLink: 'https://github.com/SAI-MOHAN-B/Reddit-DataEngineering-Pipeline',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/FootballDataEngineering/main/arc/system_architecture.png',
    title: 'Football Data Engineering',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Apache Airflow'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
      getSkillByLabel(BACKEND_SKILLS, 'Azure DataBricks'),
    ],
    description:
      'An end-to-end data engineering pipeline that fetches data from Wikipedia, cleans and transforms it with Apache Airflow and saves it on Azure Data Lake. Other processing takes place on Azure Data Factory, Azure Synapse and Tableau. ',
    repoLink: 'https://github.com/SAI-MOHAN-B/FootballDataEngineering',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://raw.githubusercontent.com/SAI-MOHAN-B/Capstone-Project-Lakehouse-Platform-Implementation/main/architecture/Screenshot%202024-09-19%20at%204.25.41%E2%80%AFPM.png',
    title: 'Data Lakehouse-Platform-Implementation',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'python'),
      getSkillByLabel(FRONTEND_SKILLS, 'Spark'),
      getSkillByLabel(BACKEND_SKILLS, 'Azure'),

    ],
    description: 'This project implemented a real-time Lakehouse Platform in Azure, featuring distinct development, testing, and production environments. The platform supports both batch and streaming data workflows, ensuring scalability and flexibility for diverse data processing requirements. The architecture follows the Medallion approach, decoupling data ingestion from data processing to enhance modularity and reusability of components',
    repoLink: 'https://github.com/SAI-MOHAN-B/Capstone-Project-Lakehouse-Platform-Implementation',
    sourceLink: '',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
