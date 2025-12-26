import type { iProjects } from '@/types/featuredProjects.types';

export const featuredProjects: iProjects[] = [
  {
    title: 'OLANEC',
    description: '🔭 Andean Lakes Observatory.',
    tags: ['PostgreSQL', 'Express', 'React', 'Tailwind CSS'],
    //updated: true,
    url: 'https://olanec.vercel.app/',
    githubUrl: 'https://github.com/aaandrangom/olanec',
    icon: 'https://res.cloudinary.com/dfg9b8dtx/image/upload/v1766767050/olanec-logo_wbh4nb.png'
  },
  {
    title: 'CanchasYa!',
    description: '⚽️ A platform to book sports fields.',
    tags: ['Turso', 'Express', 'React', 'Tailwind CSS'],
    url: 'https://canchasya.vercel.app/',
    githubUrl: 'https://github.com/aaandrangom/canchasya',
    icon: 'https://res.cloudinary.com/dfg9b8dtx/image/upload/v1766767531/canchasya-logo_1_xnc63p.png'
  },
  {
    title: 'SIGDECE',
    description: '✍️ Manages DECE student records and counseling data.',
    tags: ['SQLite', 'GO', 'Wails', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aaandrangom/sigdece',
    icon: 'https://res.cloudinary.com/dfg9b8dtx/image/upload/v1766767777/sigdece-logo_hkeqho.png'
  },
];
