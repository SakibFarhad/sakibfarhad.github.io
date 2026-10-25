export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period?: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  credentialId: string;
}

/** Public contact & profile URLs (aligned with CV). */
export const contactInfo = {
  email: 'sakib.ibne.farhad@gmail.com',
  portfolioUrl: 'https://web.sakibfarhad.dev',
  linkedInUrl: 'https://www.linkedin.com/in/sakibfarhad',
  githubUrl: 'https://github.com/SakibFarhad',
  stackOverflowUrl: 'https://stackoverflow.com/users/6342106/sakib-farhad',
};

export const siteMeta = {
  name: 'Md Sakib Ibne Farhad',
  shortName: 'Sakib',
  role: 'SRE / DevOps Engineer / Cloud Engineer',
  yearsExperience: '8+',
  email: contactInfo.email,
  headline:
    'DevOps and Site Reliability Engineer with 8+ years supporting production infrastructure, cloud platforms, Kubernetes, and automated delivery.',
  bio: `DevOps and Site Reliability Engineer with 8+ years of experience supporting production infrastructure, cloud platforms, Kubernetes environments, and automated delivery pipelines. Hands-on experience with AWS, Terraform, Ansible, Docker, Linux, Python, Bash, CI/CD, monitoring, and incident response. Experienced in production operations, infrastructure modernization, observability, security practices, and cross-functional collaboration. Interested in building reliable, secure infrastructure for AI/LLM workloads and continuously improving engineering productivity through automation.`,
  location: 'Regina, Saskatchewan, Canada',
  focus: 'AWS · Kubernetes · Terraform · CI/CD · observability · AI infrastructure',
  /** Shown in the home hero “Stack” line */
  stackSummary: 'AWS · Kubernetes · Terraform · Ansible · Python · Bash',
};

export const socialLinks: SocialLink[] = [
  { icon: 'fab fa-github', href: contactInfo.githubUrl, label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: contactInfo.linkedInUrl, label: 'LinkedIn' },
  { icon: 'fab fa-stack-overflow', href: contactInfo.stackOverflowUrl, label: 'Stack Overflow' },
  { icon: 'fab fa-facebook', href: 'https://www.facebook.com/md.sakib.ibne.farhad', label: 'Facebook' },
  { icon: 'fab fa-reddit', href: 'https://www.reddit.com/user/sakib_farhad', label: 'Reddit' },
];

export const highlights = [
  {
    title: 'Production reliability',
    text: 'Production and non-production operations, SLOs, incident response, root cause analysis, and operational readiness.',
  },
  {
    title: 'Infrastructure automation',
    text: 'Terraform, Ansible, and GitLab CI/CD for repeatable provisioning and delivery across environments.',
  },
  {
    title: 'Modern platforms',
    text: 'Kubernetes and AWS operations, platform modernization, and infrastructure support for ML pipelines, RAG ingestion, and AI agents.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & infrastructure',
    items: ['AWS EC2', 'EKS', 'ECS', 'IAM', 'S3', 'VPC', 'CloudWatch', 'Lambda', 'RDS', 'SQS', 'Route 53'],
  },
  {
    title: 'Containers & orchestration',
    items: ['Kubernetes', 'Docker', 'Cluster administration', 'Application deployments', 'Infrastructure troubleshooting'],
  },
  {
    title: 'Infrastructure as code',
    items: ['Terraform', 'Ansible', 'Reusable automation', 'Environment provisioning'],
  },
  {
    title: 'CI/CD & source control',
    items: ['GitLab CI/CD', 'Jenkins', 'GitHub Actions', 'CircleCI', 'Argo CD', 'Git'],
  },
  {
    title: 'Monitoring & reliability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'SLI/SLO monitoring', 'Alerting', 'Incident response', 'Root cause analysis'],
  },
  {
    title: 'Scripting & operating systems',
    items: ['Python', 'Bash', 'Linux/Unix', 'Windows Server', 'Automation and operational tooling'],
  },
  {
    title: 'Databases & data platforms',
    items: ['PostgreSQL', 'MySQL', 'MongoDB Atlas', 'DynamoDB', 'Snowflake', 'Amazon RDS', 'Redis'],
  },
  {
    title: 'Security & networking',
    items: ['IAM', 'Vulnerability scanning', 'SonarQube', 'DNS', 'TCP/IP', 'Access controls', 'SAML', 'OAuth 2.0'],
  },
  {
    title: 'AI infrastructure & collaboration',
    items: ['ML pipeline infrastructure', 'Amazon SageMaker exposure', 'RAG ingestion workflows', 'AI agents', 'MCP servers', 'Jira', 'ServiceNow', 'Confluence', 'Runbooks'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Site Reliability Engineer',
    company: 'IQVIA',
    location: 'Remote',
    period: 'Dec 2024 – Jul 2026',
    highlights: [
      'Supported production and non-production enterprise analytics environments across AWS, including EKS, ECS, IAM, networking, and cloud monitoring.',
      'Managed infrastructure provisioning and configuration through Terraform, Ansible, and GitLab CI/CD across development, QA, pilot, and production environments.',
      'Served as a primary technical owner for the Orchestrated Analytics (OA) platform, supporting service reliability, SLOs, upgrades, operational readiness, and production troubleshooting.',
      'Supported Kubernetes and application upgrades, including blue-green deployment approaches to reduce deployment risk and service disruption.',
      'Built and maintained observability practices using Prometheus, Grafana, ELK Stack, and CloudWatch.',
      'Participated in a 24/7 production on-call rotation, coordinated incident bridge calls, performed root cause analysis, and maintained operational runbooks.',
      'Contributed to migrating a legacy .NET application with Windows API dependencies from bare-metal infrastructure toward Kubernetes on AWS EKS.',
      'Supported Snowflake and Amazon S3 data platform modernization and infrastructure for machine-learning pipelines, RAG ingestion, AI agents, and MCP-based workloads.',
      'Applied security and quality controls using IAM, Docker image scanning, SonarQube, and infrastructure security practices.',
      'Collaborated with engineering and business stakeholders using Jira, ServiceNow, and Confluence to resolve recurring operational issues and improve service delivery.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'TigerIT Bangladesh Ltd.',
    location: 'Bangladesh',
    period: '2019 – 2024',
    highlights: [
      'Automated provisioning and configuration of on-premises infrastructure using Ansible, supporting Kubernetes deployments across 65 physical servers in two data centres.',
      'Supported containerized applications and Kubernetes operations, including deployment troubleshooting, service availability, and infrastructure maintenance.',
      'Built and maintained automation and deployment workflows using scripting, Git, and configuration-management practices.',
      'Supported high-availability PostgreSQL environments, replication, PgBouncer connection pooling, and database failover procedures.',
      'Troubleshot Linux systems, network connectivity, DNS, application dependencies, and production infrastructure issues.',
      'Worked with identity and access technologies including Active Directory, Kerberos, SAML, and OAuth 2.0.',
      'Contributed to operational documentation, incident resolution, and disaster recovery readiness for enterprise and government-facing services.',
    ],
  },
  {
    role: 'Embedded System Engineer',
    company: 'AplombTechBD Ltd.',
    location: 'Bangladesh',
    period: 'Nov 2017 – Aug 2019',
    highlights: [
      'Developed an IoT monitoring system with an Angular frontend and Java backend.',
      'Built custom embedded Linux OS for production devices.',
      'Implemented industrial communication protocols (ModBus, RS485, KNX).',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'GACS Capital Management',
    location: 'Remote',
    period: 'May 2016 – Jul 2017',
    highlights: [
      'Developed financial analytics applications using Python and Java.',
      'Deployed applications on AWS EC2 with RDS (PostgreSQL).',
      'Implemented caching with Redis and messaging with MQTT.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science and Engineering',
    school: 'United International University · Assessed by WES as Master of Science',
  },
  {
    degree: 'Bachelor of Science in Electrical and Electronics Engineering',
    school: 'North South University · Assessed by WES as Bachelor of Science',
  },
];

export const activities: string[] = [
  'Interested in building reliable, secure infrastructure for AI/LLM workloads.',
  'Focused on improving engineering productivity through automation.',
  'Experienced in cross-functional incident coordination and technical documentation.',
];

export const certifications: CertificationItem[] = [
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    date: 'September 2026',
    credentialId: '9EAA71A6CC8A8048',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    date: 'August 2026',
    credentialId: '3721419486B35333',
  },
  {
    name: 'CompTIA Network+ ce',
    date: 'October 2026',
    credentialId: 'COMP001023132519',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'This portfolio site',
    description:
      'Personal site built with Angular and Bootstrap, deployed to GitHub Pages with automated builds—same rigor I apply to pipeline and release hygiene in day-to-day work.',
    tags: ['Angular', 'GitHub Pages', 'GitHub Actions', 'CI/CD'],
    url: 'https://web.sakibfarhad.dev',
    repoUrl: 'https://github.com/SakibFarhad/sakibfarhad.github.io',
  },
  {
    title: 'GitHub & infrastructure work',
    description:
      'Public code, experiments, and tooling on GitHub related to infrastructure, automation, and cloud-native platforms.',
    tags: ['Terraform', 'Kubernetes', 'AWS', 'Automation'],
    repoUrl: contactInfo.githubUrl,
  },
];
