import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'home'
    },
    {
        id: 2,
        href: '#about',
        text: 'about'
    },
    {
        id: 3,
        href: '#services',
        text: 'services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'tours'
    },
];

export const socialLinks = [
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook',
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter',
    },
    {
        id: 3,
        href: 'https://www.twitter.com',
        icon: 'fab fa-squarespace',
    },
];

export const service = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: `Saving money is crucial for financial security and achieving goals.
        By budgeting, cutting expenses, and seeking deals, we can make our money go 
        further. It requires discipline, but the long-term benefits are worth it. Start 
        saving today for a brighter future.`,
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: `Endless hiking is a liberating adventure in nature. It takes us to
        breathtaking landscapes, tests our limits, and rejuvenates our soul.
        Embrace the journey, embrace the outdoors.`,
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: `Experience amazing comfort that surpasses expectations.
        From luxurious accommodations to personalized service, every detail
        is designed to enhance your relaxation and well-being. Indulge in the
        extraordinary and discover a world of unparalleled comfort.`,
    },
];

export const tours = [
    {
        id: 1,
        img: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: `Embark on a captivating Tibet adventure and discover
        spiritual enlightenment amidst breathtaking landscapes.`,
        country: 'China',
        days: '6 days',
        cost: 'from $2100',
        icon: 'fas fa-map',
    },
    {
        id: 2,
        img: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        text: `Discover the best of Java's ancient temples, volcanic
        landscapes, vibrant culture, and natural beauty in one unforgettable journey.`,
        country: 'indonesia',
        days: '11 days',
        cost: 'from $1400',
        icon: 'fas fa-map',
    },
    {
        id: 3,
        img: tour3,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        text: `Experience the highlights of Kenya's wildlife, 
        stunning landscapes, and vibrant culture in an unforgettable adventure.`,
        country: 'kenya',
        days: '20 days',
        cost: 'from $3300',
        icon: 'fas fa-map',
    },
    {
        id: 4,
        img: tour4,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        text: `Explore the dynamic charm of Hong Kong, where 
        East meets West in a vibrant fusion of culture, cuisine, and skyline.`,
        country: 'hong kong',
        days: '8 days',
        cost: 'from $5000',
        icon: 'fas fa-map',
    },
];