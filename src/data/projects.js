const notPubliclyAvailableLink = './not-publicly-available.html';

export const projects = [
  {
    title: 'Anchor Eye',
    year: '2022 - 2023',
    image: {
      src: './projects/anchor-eye.jpg',
      alt: 'Anchor Eye pisciculture monitoring and growth prediction robot prototype',
      width: 384,
      height: 512,
      fit: 'contain',
    },
    technologies: ['AI', 'Image Processing', 'Arduino', 'Firebase', 'Dart', 'IoT', 'Data Analysis'],
    description:
      'A computer vision and AI-based cost-effective pisciculture monitoring and growth prediction robot.',
    links: [{ label: 'Demo', href: 'https://www.youtube.com/watch?v=YU9aNx9gCw0' }],
  },
  {
    title: 'UVC Purge',
    year: '2020 - 2021',
    image: {
      src: './projects/uvc-purge.jpg',
      alt: 'UVC Purge disinfection robot prototype',
      width: 384,
      height: 512,
      fit: 'contain',
    },
    technologies: ['Arduino', 'Python', 'JavaScript', 'IoT'],
    description:
      'A novel cost-effective disinfection robot for combating the COVID-19 pandemic.',
    links: [{ label: 'Demo', href: 'https://www.youtube.com/watch?v=i0J4vlHoixo' }],
  },
  {
    title: 'Aurora-X',
    year: 'Completed',
    image: {
      src: './projects/aurora-x.jpg',
      alt: 'Aurora-X human-assistive robot for space exploration missions',
      width: 1280,
      height: 1024,
    },
    technologies: ['ROS', 'C++', 'OpenCV', 'Space Robotics', 'Human-Assistive Robot'],
    description:
      'A human-assistive robot for space exploration missions, presented as a completed robotics project.',
    links: [{ label: 'Video', href: 'https://youtu.be/8F-JkxO275Y?si=T64Ppdh6PoS1zHIj' }],
  },
  {
    title: 'Maverick',
    year: 'Completed',
    image: {
      src: './projects/maverick.jpg',
      alt: 'Maverick human-assistive rover for space exploration',
      width: 1280,
      height: 853,
    },
    technologies: ['ROS', 'OpenCV', 'RF', 'Space Robotics', 'Human-Assistive Rover'],
    description:
      'A human-assistive rover built to support scientists in space exploration; competed at the Anatolian Rover Challenge in Ankara, Turkiye, where the team became 1st runner-up.',
    links: [{ label: 'Video', href: 'https://youtu.be/_K_r7M9CmSc?si=o0vj311YW2CkjQ3e' }],
  },
  {
    title: 'Celeste-1',
    year: 'Video Demo',
    image: {
      src: './projects/celeste-1.jpg',
      alt: 'Celeste-1 project video thumbnail',
      width: 480,
      height: 360,
    },
    technologies: ['Robotics', 'Rover Project', 'Demonstration Video'],
    description:
      'A robotics project documented through a public demonstration video.',
    links: [{ label: 'Video', href: 'https://youtu.be/3Vwe1gCi4no?si=a_fc6WY-ckZnxt39' }],
  },
  {
    title: 'Phoenix 3.0',
    year: 'Video Demo',
    image: {
      src: './projects/phoenix-3.jpg',
      alt: 'Phoenix 3.0 project video thumbnail',
      width: 480,
      height: 360,
    },
    technologies: ['Robotics', 'Rover Project', 'Demonstration Video'],
    description:
      'A Phoenix-series robotics project documented through a public demonstration video.',
    links: [{ label: 'Video', href: 'https://youtu.be/yR9W6UbRY_k?si=whOt0iscbf_IeaXF' }],
  },
  {
    title: 'Phoenix 2.0',
    year: 'Video Demo',
    image: {
      src: './projects/phoenix-2.jpg',
      alt: 'Phoenix 2.0 project video thumbnail',
      width: 480,
      height: 360,
    },
    technologies: ['Robotics', 'Rover Project', 'Demonstration Video'],
    description:
      'A Phoenix-series robotics project documented through a public demonstration video.',
    links: [{ label: 'Video', href: 'https://youtu.be/wBwTMOv7OeM?si=gLTdooxx_LF7yBPg' }],
  },
  {
    title: 'Phoenix',
    year: 'Video Demo',
    image: {
      src: './projects/phoenix.jpg',
      alt: 'Phoenix project video thumbnail',
      width: 480,
      height: 360,
    },
    technologies: ['Robotics', 'Rover Project', 'Demonstration Video'],
    description:
      'A Phoenix robotics project documented through a public demonstration video.',
    links: [{ label: 'Video', href: 'https://youtu.be/0ezyJEdleQM?si=PkOI_7Yynx9ZsLxo' }],
  },
  {
    title: 'DengueVision',
    year: '2023',
    image: {
      src: './projects/denguevision.jpg',
      alt: 'DengueVision Bangladesh dengue case prediction heatmap interface',
      width: 512,
      height: 193,
      fit: 'contain',
    },
    technologies: ['ML', 'Python', 'Dash Framework', 'Data Analysis'],
    description:
      'An AI-powered outbreak oracle developed from the perspective of Bangladesh.',
    links: [{ label: 'Not Publicly Available', href: notPubliclyAvailableLink }],
  },
  {
    title: 'Heatmap Generation from Feet Pressure',
    year: '2022',
    image: {
      src: './projects/feet-pressure-heatmap.jpg',
      alt: 'Feet pressure heatmap scan visualization',
      width: 1600,
      height: 1429,
      fit: 'contain',
    },
    technologies: ['Python', 'Arduino', 'Pressure Sensors', 'IoT'],
    description:
      'An IoT-based project to monitor feet pressure distribution using pressure sensors integrated with shoes.',
    links: [{ label: 'Not Publicly Available', href: notPubliclyAvailableLink }],
  },
  {
    title: 'Evaluating Agriculture Mobile Applications',
    year: '2022',
    image: {
      src: './projects/agriculture-mobile-usability.svg',
      alt: 'Visual thumbnail for agriculture mobile application usability evaluation project',
      width: 1280,
      height: 800,
    },
    technologies: ['HCI', 'SUS', 'HE'],
    description:
      'A usability evaluation and redesign study of agriculture mobile applications in Bangladesh for illiterate and semi-literate users.',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ICCIT68739.2025.11491675' }],
  },
  {
    title: 'Automatic Watering System',
    year: '2022',
    image: {
      src: './projects/automatic-watering-system.svg',
      alt: 'Visual thumbnail for automatic watering system project',
      width: 1280,
      height: 800,
    },
    technologies: ['Arduino', 'IoT Sensors', 'Embedded Automation'],
    description:
      'A gardening automation tool using temperature, humidity, soil moisture, and rain sensors to detect when plants need water.',
    links: [{ label: 'GitHub', href: 'https://github.com/ArnabSircar/Automatic-Watering-System' }],
  },
  {
    title: 'MIST Research Hub',
    year: 'Current',
    image: {
      src: './projects/mist-research-hub.svg',
      alt: 'MIST Research Hub archive and research portal thumbnail',
      width: 1280,
      height: 800,
    },
    technologies: ['Research Archive', 'Academic Portal', 'Thesis Repository', 'Research Papers'],
    description:
      'An archive of thesis and research papers by MIST undergraduate and postgraduate students. It acts as a portal for research enthusiasts to connect and currently sits as a child project of MIST CSE Archive.',
    links: [{ label: 'GitHub', href: 'https://github.com/MdRashidUlIslam612001/MIST-Research-Hub' }],
  },
];
