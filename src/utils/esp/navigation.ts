//nombres de las secciones del sitio web, para el navbar y el footer

// navbar links en español
const navBarLinks =[
    {name: 'Home', url: '/'},
    {name: 'Productos', url: '/products'},
    {name: 'Servicios', url: '/services'},
    {name: 'Contactanos', url: '/contact'},
];



// FOOTER LINKS
// secciones de footer en español
const footerLinks =[
    // lista de secciones del footer, cada una con su nombre y url
    {
        section: 'Ecosystem',
        links:[
            { name: 'Documentacion', url: '/welcome-to-docs/' },
            { name: 'Tools & Equipment', url: '/products' },
            { name: 'Servicios de construccion', url: '/services' },
        ],
    },
    {
        section: 'Compañia',
        links:[
            {name: 'Conocenos', url: '/#'},
            {name: 'Blog', url: '/#'},
            {name: 'Carreras', url: '/#'},
            {name: 'Soporte al cliente', url: '/#'},
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