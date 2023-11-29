import { adobe, amazon, asana, coca, discover, evernote, google, laptop, microsoft, nike, paypal, shopify, spotify, uber, user1, user2, user3 } from "@/public/images/images";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface companyData {
    id : number;
    name : string;
    image : any;
}

interface commitmentData{
    value : string,
    content : string,
}

interface workSection{
    image : any,
    title : string,
}

interface worksData {
    title : string,
    content : string,
    image : any
}

interface clientsData {
    name : string,
    post : string,
    content : string,
    image : any
}

interface accordian {
    title : string,
    content : string,
}

interface navbarData {
    title : string,
    link :string,
}

interface footers {
    title : string,
    link : string,
}

export const company : companyData[] =[
    {
        id : 1,
        name : 'Spotify',
        image : spotify
    },
    {
        id : 2,
        name :'Google',
        image : google
    },
    {
        id : 3,
        name : 'Microsoft',
        image : microsoft
    },
    {
        id : 4, 
        name : 'Uber',
        image : uber
    },
    {
        id : 5,
        name : 'Shopify',
        image : shopify
    },
    {
        id  : 6,
        name : 'Evernote',
        image : evernote
    },
    {
        id : 7 ,
        name : 'Adobe',
        image : adobe
    },
    {
        id : 8,
        name : 'PayPal',
        image : paypal,
    },
    {
        id : 9 ,
        name : 'Amazon',
        image : amazon
    },
    {
        id : 10, 
        name : 'Asana',
        image : asana
    }
] 

export const commitment : commitmentData[] =[
    {
        value : '245%',
        content : 'More revenues for the brand'
    },
    {
        value : '130K+',
        content : 'Audiences reached '
    },
    {
        value : '50+',
        content : 'brands trust us'
    },
    {
        value : '24+',
        content : 'Worldwide awards'
    },
]

export const works : worksData[] =[
    {
        title : 'Discovery',
        content : 'We meet with you to learn about your business, your goals, and your target audience.',
        image : discover
    },
    {
        title : 'Strategy',
        content : 'We develop a customized marketing strategy that is based on your unique needs and goals.',
        image : discover
    },
    {
        title : 'Execution',
        content : 'We execute our strategy using the latest digital marketing tools and techniques.',
        image : discover
    },
    {
        title : 'Measurement',
        content : 'We track the results of our campaigns so that we can make adjustments as needed.',
        image : discover
    },
]

export const OurWork : workSection[] =[
    {
        image : laptop,
        title : 'Apple',
    },
    {
        image : coca,
        title : 'Coca-Cola',
    },
    {
        image : nike,
        title : 'Nike',
    },
]

export const clients : clientsData[] = [
    {
        name : 'Amelia Joseph',
        post : 'Chief Manager',
        content : 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
        image : user1
    },
    {
        name : 'Amelia Joseph',
        post : 'Chief Manager',
        content : 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, its got to be Embrace!',
        image : user2
    },
    {
        name : 'Jacob Joshua',
        post : 'Chief Manager',
        content : 'Embrace really nails it! Creative brilliance, approachable style. They re the partners you want—artistry meets strategy. Thrilled with what they achieved!"',
        image : user3
    },
    {
        name : 'Jacob Joshua',
        post : 'Chief Manager',
        content : 'Embrace really nails it! Creative brilliance, approachable style. They re the partners you want—artistry meets strategy. Thrilled with what they achieved!"',
        image : user3
    },
    
]

export const accordians : accordian[] =[
    {
        title : 'How do i sign up for the project?',
        content : 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze.'
    },
    {
        title : 'What thing that i should prepare before starting?',
        content : 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze.'
    },
    {
        title : 'Does my company need help for marketing advices?',
        content : 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze.'
    },
  
]

export const footer : footers[] = [
    {
        title : 'Work With Us',
        link : '/WorkWithUs'
    },
    {
        title : 'Advertise With Us',
        link : '/WorkWithUs'
    },
    {
        title : 'Support Us',
        link : '/WorkWithUs'
    },
    {
        title : 'Business Advices',
        link : '/WorkWithUs'
    },
    {
        title : 'Private Coaching',
        link : '/private'
    },
    {
        title : 'Our Work',
        link : '/WorkWithUs'
    },
    {
        title : 'Our Team',
        link : '/WorkWithUs'
    },
    {
        title : 'Our Commitment',
        link : '/WorkWithUs'
    },
    {
        title : 'About Us',
        link : '/WorkWithUs'
    },
    {
        title : 'Our Team',
        link : '/WorkWithUs'
    },
    {
        title : 'Our Commitment',
        link : '/WorkWithUs'
    },
]

export const navbar : navbarData[] = [
    {
        title : 'How it Works',
        link : '#strategy'
    },
    {
        title : 'Our Work',
        link : '#works'
    },
    {
        title : 'Team',
        link : '#team'
    },
    {
        title : 'Testmonials',
        link : '#testmonials'
    },
]
