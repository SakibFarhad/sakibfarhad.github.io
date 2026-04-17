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

/** Public contact & profile URLs (aligned with CV). */
export const contactInfo = {
  email: 'sakib.ibne.farhad@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/sakibfarhad',
  githubUrl: 'https://github.com/SakibFarhad',
  stackOverflowUrl: 'https://stackoverflow.com/users/6342106/sakib-farhad',
};

export const siteMeta = {
  name: 'Md. Sakib Ibne Farhad',
  shortName: 'Sakib',
  role: 'SRE / DevOps Engineer',
  yearsExperience: '8+',
  email: contactInfo.email,
  headline:
    'SRE / DevOps engineer with 8+ years in AWS, Kubernetes, Terraform, and CI/CD—focused on reliable, automated, production-grade systems.',
  bio: `SRE / DevOps engineer with 8+ years of experience in AWS cloud infrastructure, DevOps, and MLOps systems. Skilled in Kubernetes, Terraform, and CI/CD automation, with a strong focus on scalable, reliable platforms. I work to improve reliability, automate deployments, and operate distributed systems at scale—in QA through production.`,
  location: 'Dhaka, Bangladesh',
  phone: '+880 1715062452',
  /** E.164-style dial string for tel: links */
  phoneTel: '+8801715062452',
  focus: 'AWS · Kubernetes · Terraform · CI/CD · observability',
  /** Shown in the home hero “Stack” line */
  stackSummary: 'Kubernetes · Terraform · Python · Go',
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
    title: 'Reliability at scale',
    text: 'AWS across QA, staging, and production—with monitoring, alerting, and practices aligned to the Well-Architected Framework.',
  },
  {
    title: 'Automation first',
    text: 'Terraform for infrastructure, solid CI/CD (GitLab, Jenkins, Bitbucket Pipelines), and Ansible where it fits.',
  },
  {
    title: 'Platforms & ML ops',
    text: 'Kubernetes/OpenShift, containers, and experience with ML-related workloads including SageMaker, RAG pipelines, and AI agents.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud platforms',
    items: ['AWS (EKS, ECS, EC2, S3, RDS, Lambda, SQS, Route53)'],
  },
  {
    title: 'Containers',
    items: ['Kubernetes', 'Docker', 'OpenShift'],
  },
  {
    title: 'Infrastructure as code',
    items: ['Terraform', 'Ansible'],
  },
  {
    title: 'CI/CD',
    items: ['GitLab CI/CD', 'Jenkins', 'Bitbucket Pipelines'],
  },
  {
    title: 'Monitoring & observability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
  },
  {
    title: 'Programming',
    items: ['Python', 'Go', 'Java'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'Redis'],
  },
  {
    title: 'Messaging',
    items: ['Kafka', 'ActiveMQ', 'VerneMQ'],
  },
  {
    title: 'Systems',
    items: ['Linux (*NIX)', 'VMware', 'KVM'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Site Reliability Engineer',
    company: 'IQVIA',
    location: 'Remote',
    period: 'Dec 2024 – Present',
    highlights: [
      'Managed AWS infrastructure across QA, staging, and production for high availability and reliability.',
      'Built and maintained Infrastructure as Code with Terraform to standardize and scale cloud environments.',
      'Automated CI/CD pipelines to improve deployment consistency and reduce manual effort.',
      'Implemented monitoring and alerting with Prometheus, Grafana, ELK, and CloudWatch.',
      'Deployed and operated AI/ML workloads including SageMaker, RAG pipelines, and AI agents.',
      'Strengthened security using IAM best practices and the AWS Well-Architected Framework.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'TigerIT Bangladesh Ltd.',
    location: 'Bangladesh',
    period: 'Sep 2019 – Dec 2024',
    highlights: [
      'Designed and maintained CI/CD pipelines to improve deployment speed and reliability.',
      'Managed Kubernetes and Docker-based environments for scalable microservices.',
      'Built and operated distributed data platforms using Hadoop, Hive, HBase, Druid, and Kudu.',
      'Implemented high-availability setups with HAProxy and keepalived.',
      'Maintained observability with ELK, Prometheus, and Grafana.',
      'Automated provisioning and configuration with Ansible.',
      'Supported real-time systems using WebRTC technologies (Jitsi, Janus Gateway).',
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
    period: 'May 2015 – Jul 2017',
    highlights: [
      'Developed financial analytics applications using Python and Java.',
      'Deployed applications on AWS EC2 with RDS (PostgreSQL).',
      'Implemented caching with Redis and messaging with MQTT.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'MSc in Computer Science and Engineering',
    school: 'United International University',
  },
  {
    degree: 'BSc in Electrical and Electronic Engineering',
    school: 'North South University',
  },
];

export const activities: string[] = [
  'Open to relocation and international opportunities (Canada).',
  'Experience working in remote and cross-functional teams.',
  'Strong focus on automation, scalability, and system reliability.',
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
      'Public code, experiments, and tooling on GitHub. For SRE/DevOps collaboration, roles involving AWS, Kubernetes, and Terraform, or Canada relocation—reach out via LinkedIn or email.',
    tags: ['Terraform', 'Kubernetes', 'AWS', 'Open to opportunities'],
    repoUrl: contactInfo.githubUrl,
  },
];
