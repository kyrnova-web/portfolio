// ============================================================
// PORTFOLIO DATA — Single source of truth
// All content is based on Karuppasamy's actual experience.
// ============================================================

export const personal = {
  name: 'Karuppasamy',
  title: 'Frontend Developer & Digital Marketer',
  label: 'Frontend Developer',
  sublabel: 'Digital Marketing Fundamentals',
  tagline: 'I build clean, responsive web experiences that are easy to use.',
  bio: 'Frontend-focused developer with practical experience in responsive web development, React, JavaScript, HTML, CSS, Bootstrap, Git, GitHub, and UI implementation. I enjoy turning ideas and designs into clear, accessible interfaces while continuing to build depth in frontend engineering.',
  phone: '+91-6381118159',
  email: 'Karthicdev220@gmail.com',
  linkedin: 'https://www.linkedin.com/in/karuppasamy-k-459661294/',
  github: 'https://github.com/kyrnova-web',
  location: 'Valparai, Tamil Nadu',
};

export const highlights = [
  {
    label: 'Frontend Focus',
    description: 'React, JavaScript, HTML, CSS, and responsive UI development',
  },
  {
    label: 'UI Thinking',
    description: 'Clean layouts, readable typography, and practical user flows',
  },
  {
    label: 'Teaching Experience',
    description: 'Six months guiding students through frontend concepts',
  },
  {
    label: 'Version Control',
    description: 'Comfortable using Git and GitHub for project workflow',
  },
];

export const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Web Design'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva', 'Adobe Photoshop'],
  },
  {
    category: 'Embedded & IoT',
    skills: ['Arduino', 'Microcontrollers', 'Sensors', 'Embedded Programming', 'GPS', 'GSM', 'IoT Applications'],
  },
  {
    category: 'Digital Marketing',
    skills: [
      'Digital Marketing Fundamentals',
      'SEO Fundamentals',
      'Social Media Marketing',
      'Content Marketing',
      'Paid Advertising Fundamentals',
      'Email Marketing',
      'WhatsApp Marketing',
    ],
  },
];

export const experience = [
  {
    role: 'Trainer',
    company: 'Techy Toper Institute',
    location: 'Tenkasi',
    duration: '6 Months',
    type: 'Training / Teaching',
    responsibilities: [
      'Delivered practical sessions on HTML, CSS, JavaScript, React, and Bootstrap.',
      'Guided students through frontend concepts, exercises, and project development.',
      'Supported learners with debugging, code understanding, and technical problem-solving.',
      'Explained web development topics clearly through hands-on examples.',
    ],
  },
];

export const internship = {
  role: 'Embedded Systems & IoT Intern',
  company: 'IPCS Global',
  location: 'Tirunelveli',
  duration: 'Internship',
  description:
    'Completed internship training in Embedded Systems and IoT with hands-on exposure to microcontrollers, sensors, embedded programming, and IoT-based application development.',
  skills: ['Microcontrollers', 'Sensors', 'Embedded Programming', 'IoT Applications'],
};

export const projects = [
  {
    id: 'iot-fire-detection',
    title: 'IoT-Based Fire Detection & Alert System',
    subtitle: 'EMBEDDED SYSTEMS / IoT / ARDUINO / GPS / GSM',
    description:
      'Developed a fire detection and alert system using Arduino to detect fire hazards and trigger an audio alarm. Integrated GPS and GSM modules to identify the fire location and send emergency SMS alerts for real-time notification.',
    highlights: [
      'Real-time fire detection through sensor input',
      'GPS-based location identification',
      'Emergency SMS alerts using GSM',
      'Audio alarm for immediate notification',
    ],
    technologies: ['Arduino Uno', 'Fire Sensor', 'GPS Module', 'GSM Module', 'Buzzer / Alarm'],
    category: 'Embedded Systems / IoT',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'vision-sign-language',
    title: 'Vision-Based Sign Language Translator',
    subtitle: 'COMPUTER VISION / AI / PYTHON',
    description:
      'A real-time sign language recognition system that uses a webcam, MediaPipe and OpenCV to detect hand gestures, classify signs, and convert recognized gestures into text and speech.',
    highlights: [
      'Real-time hand gesture detection',
      '21-point hand landmark tracking',
      'Gesture classification',
      'Text output',
      'Text-to-speech audio output',
      'Webcam-based interaction'
    ],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Pyttsx3', 'Visual Studio Code'],
    category: 'Computer Vision / AI',
    flow: ['Webcam', 'Hand Detection', 'Landmark Tracking', 'Gesture Classification', 'Text', 'Speech'],
    githubUrl: '#',
    liveUrl: '#',
    reportUrl: '#'
  },
];

export const education = [
  {
    degree: 'B.E. Electronics and Communication Engineering',
    institution: 'S. Veerasamy Chettiar College of Engineering and Technology',
    location: 'Puliyangudi, Tamil Nadu',
    duration: '2022 – 2026',
    status: 'Degree program',
  },
];

export const courses = [
  {
    title: 'Frontend Development Course',
    provider: 'Techy Toper Institute',
    location: 'Tenkasi',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Web Development'],
    description:
      'Practical frontend course covering modern web fundamentals, React, Bootstrap, and responsive interface development.',
  },
  {
    title: 'Digital Marketing Course',
    provider: 'IRDM',
    location: 'Coimbatore',
    topics: [
      'Social Media Marketing',
      'SEO Fundamentals',
      'Email Marketing',
      'WhatsApp Marketing',
      'Content Marketing',
      'Paid Advertising Fundamentals',
      'AI Marketing',
      'Website Marketing',
      'Mobile Marketing',
      'Influencer Marketing',
    ],
    description:
      'Foundational training in digital marketing channels and concepts, used as a supporting skill alongside frontend development.',
  },
];

export const services = [
  {
    title: 'Responsive Website Development',
    description:
      'Clean, responsive websites built with HTML, CSS, JavaScript, React, and Bootstrap.',
    tags: ['Responsive UI', 'HTML', 'CSS', 'React'],
  },
  {
    title: 'Frontend Development',
    description:
      'Frontend features and interface sections with reusable components and maintainable structure.',
    tags: ['JavaScript', 'Components', 'GitHub'],
  },
  {
    title: 'React UI Development',
    description:
      'React-based UI implementation with thoughtful layout, spacing, and interaction states.',
    tags: ['React', 'JSX', 'UI States'],
  },
  {
    title: 'Landing Page Development',
    description:
      'Focused landing pages that present information clearly and work well across devices.',
    tags: ['Landing Page', 'Bootstrap', 'Performance'],
  },
  {
    title: 'Website UI Implementation',
    description:
      'Turning references or Figma-style layouts into polished browser-ready interfaces.',
    tags: ['Figma', 'CSS Grid', 'Flexbox'],
  },
  {
    title: 'Basic Website SEO Support',
    description:
      'Foundational page structure, metadata, and content clarity support for small websites.',
    tags: ['SEO Basics', 'Metadata', 'Content'],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
