// Import branding logos
import ibox from '../assets/png/projects/logos/ibox.png'
import skincare from '../assets/png/projects/logos/skincare.png'
import tecktak from '../assets/png/projects/logos/tecktak.png'
import cactus from '../assets/png/projects/logos/cactus.png'
import richesse from '../assets/png/projects/logos/richesse.png'

// Import website design images
import cryptoaibotswebsite from '../assets/png/projects/site/cryptoaibotswebsite.png'
import kidoraMobile from '../assets/png/projects/site/mobile/31.png'

// Import social media post images
import chicken from '../assets/png/projects/postes/chicken.png'
import german from '../assets/png/projects/postes/german.png'
import letscook from '../assets/png/projects/postes/letscook.png'
import tacoslovers from '../assets/png/projects/postes/tacoslovers.png'
import larose1 from '../assets/png/projects/postes/larose1.jpg'
import larose2 from '../assets/png/projects/postes/larose2.jpg'

// Import print design images
import magazine1 from '../assets/png/projects/prints/MAGAZINE1.png'
import magazine2 from '../assets/png/projects/prints/MAGAZINE2.png'
import magazine3 from '../assets/png/projects/prints/MAGAZINE3.png'
import magazine4 from '../assets/png/projects/prints/MAGAZINE4.png'
import magazine5 from '../assets/png/projects/prints/MAGAZINE5.png'
import magazine6 from '../assets/png/projects/prints/MAGAZINE6.png'

// Import category section images
import brandingImage from '../assets/png/sections/logoidentite.png'
import socialMediaImage from '../assets/png/sections/postes.png'
import webDesignImage from '../assets/png/sections/websites.png'
import printDesignImage from '../assets/png/sections/printables.png'

// Category sections for homepage showcase
export const categorySections = [
    {
        id: 'branding',
        title: 'Logo & Brand Identity',
        description: 'Crafting memorable brand stories through logos, typography, and complete brand identities.',
        image: brandingImage,
        route: '/branding',
        tabs: ['Logos', 'Brand Guidelines', 'Stationery', 'Packaging']
    },
    {
        id: 'social-media',
        title: 'Social Media Posts',
        description: 'Vibrant visuals for Instagram, Facebook, and digital campaigns designed to engage.',
        image: socialMediaImage,
        route: '/social-media',
        tabs: ['Instagram Posts', 'Facebook Banners', 'Ad Campaigns', 'Story Templates']
    },
    {
        id: 'web-design',
        title: 'Web & Mobile UI/UX',
        description: 'Beautiful, intuitive websites and mobile app experiences.',
        image: webDesignImage,
        route: '/web-design',
        tabs: ['E-commerce', 'Landing Pages', 'Portfolio Sites', 'Mobile UI']
    },
    {
        id: 'print-design',
        title: 'Print Design',
        description: 'Elegant print materials including brochures, posters, and business cards.',
        image: printDesignImage,
        route: '/print-design',
        tabs: ['Brochures & Flyers', 'Posters', 'Business Cards', 'Magazines']
    },
]

export const projectsData = [
    // Branding & Visual Identity (category: 0)
    {
        id: 1,
        projectName: 'iBox',
        projectDesc: 'Modern website design with clean interface and user-friendly navigation.',
        tags: ['Branding', 'Visual Identity'],
        code: '',
        demo: '',
        image: ibox,
        type: 'branding',
        category: 0 // Branding & Visual Identity
    },
    {
        id: 2,
        projectName: 'Skincare',
        projectDesc: 'Elegant skincare brand website with beautiful product showcase.',
        tags: ['Branding', 'Visual Identity'],
        code: '',
        demo: '',
        image: skincare,
        type: 'branding',
        category: 0 // Branding & Visual Identity
    },
    {
        id: 3,
        projectName: 'TechTak',
        projectDesc: 'Technology company website with modern design and responsive layout.',
        tags: ['Branding', 'Visual Identity'],
        code: '',
        demo: '',
        image: tecktak,
        type: 'branding',
        category: 0 // Branding & Visual Identity
    },
    {
        id: 13,
        projectName: 'Cactus',
        projectDesc: 'Branding logo exploration for Cactus.',
        tags: ['Branding', 'Logo'],
        code: '',
        demo: '',
        image: cactus,
        type: 'branding',
        category: 0
    },
    {
        id: 14,
        projectName: 'Richesse',
        projectDesc: 'Branding logo exploration for Richesse.',
        tags: ['Branding', 'Logo'],
        code: '',
        demo: '',
        image: richesse,
        type: 'branding',
        category: 0
    },
    // Social Media Graphics (category: 1)
    {
        id: 4,
        projectName: 'Chicken',
        projectDesc: 'Appetizing social media post for chicken restaurant promotion.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: chicken,
        type: 'social',
        category: 1 // Social Media Graphics
    },
    {
        id: 5,
        projectName: 'German Courses/Cool Food',
        projectDesc: 'Traditional German food social media post design.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: german,
        type: 'social',
        category: 1 // Social Media Graphics
    },
    {
        id: 6,
        projectName: 'Let\'s Cook',
        projectDesc: 'Engaging cooking recipe social media post.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: letscook,
        type: 'social',
        category: 1 // Social Media Graphics
    },
    {
        id: 7,
        projectName: 'Tacos Lovers',
        projectDesc: 'Vibrant taco restaurant social media post design.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: tacoslovers,
        type: 'social',
        category: 1 // Social Media Graphics
    },
    {
        id: 15,
        projectName: 'La Rose Concept 1',
        projectDesc: 'Social post concept for La Rose.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: larose1,
        type: 'social',
        category: 1
    },
    {
        id: 16,
        projectName: 'La Rose Concept 2',
        projectDesc: 'Social post concept for La Rose.',
        tags: ['Social Media', 'Post'],
        code: '',
        demo: '',
        image: larose2,
        type: 'social',
        category: 1
    },
    // Web Design (category: 2)
    {
        id: 8,
        projectName: 'Crypto AI Bots Website',
        projectDesc: 'Modern responsive website design for Crypto AI Bots.',
        tags: ['Web Design', 'UI/UX'],
        code: '',
        demo: '',
        image: cryptoaibotswebsite,
        type: 'web',
        category: 2 // Web Design
    },
    {
        id: 17,
        projectName: 'Kidora (Kindergarten App)',
        projectDesc: 'Mobile app UI mockups for Kidora kindergarten app.',
        tags: ['Mobile', 'UI/UX'],
        code: '',
        demo: '',
        image: kidoraMobile,
        type: 'web',
        category: 2 // Web & Mobile
    },
    // Print Design (category: 3)
    {
        id: 9,
        projectName: 'Magazine Layout 1',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine1,
        type: 'print',
        category: 3 // Print Design
    },
    {
        id: 10,
        projectName: 'Magazine Layout 2',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine2,
        type: 'print',
        category: 3 // Print Design
    },
    {
        id: 11,
        projectName: 'Magazine Layout 3',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine3,
        type: 'print',
        category: 3 // Print Design
    },
    {
        id: 12,
        projectName: 'Magazine Layout 4',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine4,
        type: 'print',
        category: 3 // Print Design
    },
    {
        id: 18,
        projectName: 'Magazine Layout 5',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine5,
        type: 'print',
        category: 3
    },
    {
        id: 19,
        projectName: 'Magazine Layout 6',
        projectDesc: 'Editorial design layout for magazine spread.',
        tags: ['Print', 'Magazine'],
        code: '',
        demo: '',
        image: magazine6,
        type: 'print',
        category: 3
    }
]

// Helper function to get random projects for preview
export const getRandomProjects = (count = 3) => {
    const shuffled = [...projectsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Helper function to get projects by type
export const getProjectsByType = (type) => {
    return projectsData.filter(project => project.type === type);
}

// Helper function to get projects by category index
export const getProjectsByCategory = (categoryIndex) => {
    return projectsData.filter(project => project.category === categoryIndex);
}

// Helper function to get category by id
export const getCategoryById = (id) => {
    return categorySections.find(category => category.id === id);
}


