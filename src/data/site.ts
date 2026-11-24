export const profile = {
  name: 'Harsh Antarkar', 
  role: 'AI & Data Science engineer',
  tagline:
    'B.E. in Artificial Intelligence & Data Science. I build machine learning and agentic systems, and write about what I learn.',
  photo: '/images/photo.png', // file lives in public/images/; paths are from the site root, not your disk
  resume: '/resume.pdf', // file lives in public/ 
  email: 'anterharsh@gmail.com', 
  linktree: 'https://linktr.ee/harribhaupotter',
};

export type Social = { label: string; href: string; icon: string; handle?: string };

export const socials: Social[] = [
  { label: 'LeetCode', href: 'https://leetcode.com/u/harribhaupotter/', icon: 'simple-icons:leetcode' }, 
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-antarkar/', icon: 'simple-icons:linkedin' },
  { label: 'GitHub', href: 'https://github.com/harribhaupotter', icon: 'simple-icons:github' },
  { label: 'Instagram', href: 'https://www.instagram.com/harribhaupotter/', icon: 'simple-icons:instagram' },
  { label: 'X', href: 'https://x.com/harribhaupotter', icon: 'simple-icons:x' },
  { label: 'Medium', href: 'https://medium.com/@harribhaupotter', icon: 'simple-icons:medium' },
];

export const sections = [
  { id: 'about', label: 'About me', icon: 'lucide:user' },
  { id: 'skills', label: 'Tech stack', icon: 'lucide:cpu' },
  { id: 'projects', label: 'Projects', icon: 'lucide:folder-open' },
  { id: 'experience', label: 'Experience', icon: 'lucide:briefcase' },
  { id: 'certifications', label: 'Certifications', icon: 'lucide:award' },
  { id: 'learning', label: 'Learning now', icon: 'lucide:book-open' },
  { id: 'connect', label: "Let's connect", icon: 'lucide:mail' },
] as const;

export const projectCategories = [
  { id: 'ml', label: 'Machine learning' },
  { id: 'agentic', label: 'Agentic' },
  { id: 'fullstack', label: 'Full stack' },
  { id: 'cv', label: 'Computer vision' },
  { id: 'mlops', label: 'MLOps' },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]['id'];

export type Project = {
  title: string;
  summary: string;
  categories: ProjectCategory[];
  stack: string[];
  github?: string;
  demo?: string;
  /** e.g. '/images/projects/my-project.png' (put the file in public/images/projects/). Missing file → folder icon. */
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    title: 'Admeme', 
    summary: 'Agentic workflow for automated meme campeigns, generates memes using popular templets, scores the generated memes for virality using a finetuned VLM',
    categories: ['ml', 'agentic'],
    stack: ['n8n', 'Lora', 'RAG', 'python(unsloth)', 'FASTapi'],
    github: 'https://github.com/harribhaupotter/Admeme',
    thumbnail: '/images/projects/admeme.png',
  },
  {
    title: 'Observer AI',
    summary: 'AI-powered SRE platform automating proactive PR observability checks and reactive incident resolution. MCP integrations for autonomous infrastructure orchestration and decision-based remediation',
    categories: ['agentic', 'mlops'],
    stack: ['MCP', 'FAISS', 'Python', 'GitHub Actions'],
    github: 'https://github.com/harribhaupotter/Observe-AI',
    thumbnail: '/images/projects/observer-ai.png',
  },
  {
    title: 'Asset Intelligence Copilot',
    summary: 'An AI-powered oilfield operations copilot that translates natural-language queries into typed data-tool callsacross 600 wells and four years of production, inspection, downtime, and spill records. A role-aware chat interface with cited answers, interactive status cards, tables, charts, maps, private conversation memory, and shared feedback workflows for operational decision-making',
    categories: ['agentic'],
    stack: ['Python', 'LangGraph', 'SQLite', 'Gemma', 'Next.js'],
    github: 'https://github.com/harribhaupotter/Oil-field-copilot',
    thumbnail: '/images/projects/asset-copilot.png',
  },
  {
    title: 'Drona Kavach',
    summary: 'A real-time drone-threat monitoring dashboard with live webcam frame capture, aerial object detection, and network traffic analysis for threat identification. ',
    categories: ['ml', 'cv'],
    stack: ['OpenCV', 'YOLO', 'PyTorch', 'FASTapi', ' TypeScript'],
    github: 'https://github.com/harribhaupotter/drona-kavach',
    thumbnail: '/images/projects/drona-kavach.png',
  }
];

export const journey = [
  { year: '2004', label: 'Born' },
  { year: '2009', label: 'School' },
  { year: '2020', label: '10th' },
  { year: '2022', label: '12th' },
  { year: '2026', label: 'B.E.' },
];

export const introduction =
  'Hey, I am Harsh Antarkar, an AI & Data Science graduate from VESIT, Mumbai, with hands-on experience in both AI automation for ERP softwares and applied AI development. My core focus sits at the intersection of Machine Learning, Generative AI, and agentic systems, where I love turning complex ideas into practical, intelligent software.Through my projects and internships, I have built multimodal AI platforms, retrieval pipelines, and multi-agent copilots using Python, PyTorch, LangGraph, FastAPI, Qdrant, and SQL. I thrive on picking up new technologies quickly and shipping reliable tools that tackle real-world challenges.'; 

export const education = [
  { level: '10th', detail: 'P.Jog · (2020) · 90%' }, 
  { level: '12th', detail: 'P.Jog Jr.college · (2022) · 60%' },
  { level: 'B.E. Artificial Intelligence & Data Science', detail: 'Vivekanand Education Societys Institute of Technology · 2026 · 7.7' },
];

export const leadership = [
  { title: 'GDSC member', tags: [ 'Management', 'Event management', 'Team Work'] },
  { title: 'Hackathon Team lead', tags: ['Leadership', 'Management', 'Collaboration', 'Team leadership'] },
  { title: 'Gov. Hackathon', tags: ['Team Collaboration', 'Business presentation', 'Public speaking','Networking'] },
];

export const skills = [
  { group: 'Languages', icon: 'lucide:code', items: ['Python','Go','Rust','Java','JavaScript','SQL'] },
  { group: 'Machine learning', icon: 'lucide:brain', items: ['PyTorch', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'OpenCV'] },
  { group: 'Gene/Agentic AI', icon: 'lucide:sparkles', items: ['LangChain','LangGraph', 'Hugging Face', 'RAG', 'Agents', 'Prompting'] },
  { group: 'Dev tools & technologies', icon: 'lucide:wrench', items: ['Git', 'Docker', 'Linux', 'MLflow', 'Kubernetes'] },
  { group: 'Database', icon: 'lucide:database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'Backend / System design', icon: 'lucide:server', items: ['FastAPI', 'Node.js', 'REST', 'Queues', 'Caching'] },
]; 

export const experience = [
  { role: 'AI intern', org: 'Infosys', period: 'December 2025 – February 2026', details: 'Developed an AI-powered scientific terminology explainer using LLM APIs to generate structured, multi-level explanations (basic, intermediate, advanced). Implemented preprocessing of technical input text and evaluated responses for clarity, contextual accuracy, and domain relevance.' }, 
  { role: 'IT intern', org: 'Energy in motion', period: 'June 2026 – September 2026', details: 'Supported a greenfield SAP S/4HANA implementation across MM, PP, FI, SD, and QM, analyzing business processes, master data dependencies, and migration requirements.  Explored AI-driven solutions to address real-world data migration challenges, including data cleansing, standardization, validation, and mapping legacy data to SAP master data structures.' },
];

export const learningNow = ['Guardrails', 'tmux', 'Math behind ML'];

export const certifications = [
  { name: 'Agentic AI', issuer: 'Deeplearning.AI', learnings: 'Autonomous multi-step agents in raw Python: reflection, tool use, planning and multi-agent patterns, plus evals and cost/latency tuning.', link: 'https://www.deeplearning.ai/certificates/efc5489b-53de-43de-bcfc-737163aba933?usp=sharing' }, 
  { name: 'Safe and reliable AI via guardrails', issuer: 'Deeplearning.AI', learnings: 'Production-safe LLM apps: custom validators against hallucinations and PII leaks, plus pre-built guards from the Guardrails AI hub.', link: 'https://www.deeplearning.ai/accomplishments/f6364a80-b98d-49c4-b629-3d13407c3067?accomplishmentId=f6364a80-b98d-49c4-b629-3d13407c3067&usp=sharing' },
  { name: 'AWS Academy Graduate - AWS Academy Cloud Developing', issuer: 'Amazon Web Services (AWS)', learnings: 'Building and deploying cloud-native apps on AWS with S3, DynamoDB, IAM, API Gateway, Lambda and Step Functions.', link: 'https://www.credly.com/badges/35f72354-2a10-4435-8fc7-76de880ef9d5' },
  { name: 'Data Parallelism: How to Train Deep Learning Models on Multiple GPUs', issuer: 'NVIDIA', learnings: 'Scaling PyTorch training across GPUs with DDP and NCCL, while tuning SGD and batch size to keep single-GPU accuracy.', link: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.nvidia.com%2Fcertificates%3Fid&urlhash=Z1wa&mt=efH9WRkMPplOY9rW7Y7F78zSiSeEC2mZSSohCe84hy_D8hdgomcZZRtkMbS8SMeXjWVz8WH4p54jrcT6LRE8kdaIQ_-QdMkPqWvElDd9KY6HJtf7TOeuOfoKQGpPHqtP68UNx6h3gfMIU-r-99pk5oFaMd3ajT6UPrl5Y44mYk4R27GAi1_4dORzJgyx&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BnByHjI9oT%2FymvvO6ZpiCHg%3D%3D' },
];
