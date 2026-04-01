//nombres de las secciones del sitio web, para el navbar y el footer

// navbar links en ingles
const navBarLinks =[
    {name: 'Home', url: '/en'},
    {name: 'products', url: '/en/products'},
    {name: 'Services', url: '/en/services'},
    {name: 'Contact', url: '/en/contact'},
];



// FOOTER LINKS
// secciones de footer en ingles
const footerLinks =[
    // lista de secciones del footer, cada una con su nombre y url
    {
        section: 'Ecosystem',
        links:[
            { name: 'Documentation', url: '/welcome-to-docs/' },
            { name: 'Tools & Equipment', url: '/products' },
            { name: 'Construction Services', url: '/services' },
        ],
    },
    {
        section: 'Company',
        links:[
            {name: 'About us', url: '/#'},
            {name: 'Blog', url: '/#'},
            {name: 'careers', url: '/#'},
            {name: 'Customer support', url: '/#'},
        ],
    },
];


// link de redes sociales para el footer o navbar
const socialMediaLinks = {
    facebook: '#',
    x: '#',
    google: '#',
    whatssap: '#',
};

export default {
    navBarLinks,
    footerLinks,
    socialMediaLinks,
};