/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from '../../assets/image/appCreative/logo.png';
export const navbar = {
  logoImage: logo,
  navMenu: [
    {
      id: 1,
      label: 'Home',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Game',
      path: '#about',
      offset: '73',
    },
    {
      id: 3,
      label: 'Platform',
      path: '#game',
      offset: '73',
    },
    {
      id: 4,
      label: 'About Us',
      path: '#platform',
      offset: '73',
    },
    {
      id: 5,
      label: 'Our Team',
      path: '#team',
      offset: '73',
    },
    {
      id: 6,
      label: 'Contact Us',
      path: '#contact-us',
      offset: '73',
    },
  ],
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from '../../assets/image/appCreative/key_feature/1.png';
import keyFeature2 from '../../assets/image/appCreative/key_feature/2.png';
import keyFeature3 from '../../assets/image/appCreative/key_feature/3.png';
import keyFeature4 from '../../assets/image/appCreative/key_feature/4.png';

export const keyFeatures = {
  title: 'Product Advantages',
  slogan:
    '',
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: 'Free to Start, Play to Earn',
      description:
        'Combine advantages of Game-as-a-Service and GameFi Leverage tools of web2 & web3 such as social fission, community engagement, IP cross-promotion etc.',
    },
    {
      id: 2,
      icon: keyFeature2,
      title: 'Demographics',
      description:
        'Convert large web2 players into web3 players with scholarship. Our GameFi has more balanced and steady demographics. It aims at long term operating.',
    },
    {
      id: 3,
      icon: keyFeature3,
      title: 'Real NFT Value Increase',
      description:
        'NFT virtual atheletes value will increase, not only because of rarity or fixed attributes. Their practical value will increase. Our AI-powered virtual atheletes\' intelligence level can improve by players coaching.',
    },
    {
      id: 4,
      icon: keyFeature4,
      title: 'Ecosystem for Everyone',
      description:
        'Not just a game, but a Premier League like sports ecosystem. It consists of amateur players, professional clubs, investors, NFT tradcers, tans, brands etc.',
    },
  ],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import chooseThumb from '../../assets/image/appCreative/chooseThumb.png';

export const chooseUs = {
  title: 'AI-Generated Strategy',
  thumb: chooseThumb,
  features: [
    {
      id: 1,
      title: '',
      description:
        'AI can easily generate thousands of styles. Only need to adjust params, rewards and datasets',
    },
    {
      id: 2,
      title: '',
      description:
        'Each AI agent is exclusive (or non-fungible)',
    },
    {
      id: 3,
      title: '',
      description:
        'AI can generate many similar strategy based on a certain strategy. Multiple levels of a strategy style make growth curve smooth',
    },
  ],
};

/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */
import expIcon1 from '../../assets/image/appCreative/experience/1.png';
import expIcon2 from '../../assets/image/appCreative/experience/2.png';
import expIcon3 from '../../assets/image/appCreative/experience/3.png';
import expIcon4 from '../../assets/image/appCreative/experience/4.png';
import videoTheme from '../../assets/image/appCreative/experienceVideo.png';

// Client Logo
import barnbridge from '../../assets/image/appCreative/client_logo/1.png';
import epic from '../../assets/image/appCreative/client_logo/2.png';
import fifa from '../../assets/image/appCreative/client_logo/3.png';
import fluf from '../../assets/image/appCreative/client_logo/4.png';
import fortnite from '../../assets/image/appCreative/client_logo/5.png';
import illuvium from '../../assets/image/appCreative/client_logo/6.png';
import nbaLive from '../../assets/image/appCreative/client_logo/7.png';
import polemos from '../../assets/image/appCreative/client_logo/8.png';
import universe from '../../assets/image/appCreative/client_logo/9.png';
import zombie from '../../assets/image/appCreative/client_logo/10.png';

export const experiences = {
  title: 'GameFi Differentiation',
  slogan:
    '',
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: expIcon1,
      title: 'Free to Start, Play to Earn',
      description:
        'Combine advantages of Game-as-a-Service and GameFi Leverage tools of web2 & web3 such as social fission, community engagement, IP cross-promotion etc.',
    },
    {
      id: 2,
      icon: expIcon2,
      title: 'Balanced Demoigraphics',
      description:
        'For some GameFi products, 90%+ participants are investors, which is harmful and risky. Our GameFi has more balanced and steady demographics. It aims at long term operating.',
    },
    {
      id: 3,
      icon: expIcon3,
      title: 'Real FT Value Increase',
      description:
        'NFT virtual atheletes value will increase, not only because of rarity or fixed attributes. Their practical value will increase. Our AI-powered virtual atheletes\' intelligence level can improve by players coaching.',
    },
    {
      id: 4,
      icon: expIcon4,
      title: 'Ecosystem for Everyone',
      description:
        'Not just a game, but a Premier League like sports ecosystem. It consists of amateur players, professional clubs, investors, NFT tradcers, tans, brands etc.',
    },
  ],
  clients: [
    {
      id: 1,
      logo: barnbridge,
      name: 'BarnBridge',
      link: 'https://barnbridge.com/',
    },
    {
      id: 2,
      logo: epic,
      name: 'Epic Game',
      link: 'https://www.epicgames.com/site/en-US/home',
    },
    {
      id: 3,
      logo: fifa,
      name: 'EA FIFA',
      link: 'https://www.ea.com/games/fifa',
    },
    {
      id: 4,
      logo: fluf,
      name: 'Fluf World',
      link: 'https://www.fluf.world/',
    },
    {
      id: 5,
      logo: fortnite,
      name: 'Fortnite',
      link: 'https://www.epicgames.com/fortnite/en-US/home',
    },
    {
      id: 6,
      logo: illuvium,
      name: 'illuvium',
      link: 'https://www.illuvium.io/',
    },
    {
      id: 7,
      logo: nbaLive,
      name: 'NBA Live',
      link: 'https://www.ea.com/games/nba-live/nba-live-19',
    },
    {
      id: 8,
      logo: polemos,
      name: 'Polemos',
      link: 'https://polemos.io/',
    },
    {
      id: 9,
      logo: universe,
      name: 'Universe',
      link: 'https://universe.xyz/',
    },
    {
      id: 10,
      logo: zombie,
      name: 'Plants Vs Zombies',
      link: 'https://www.ea.com/ea-studios/popcap/plants-vs-zombies',
    },
  ],
};

export const projects = {
  title: 'The Industry-Leading Experience',
  slogan:
    '',
  clients: [
    {
      id: 1,
      logo: barnbridge,
      name: 'BarnBridge',
      link: 'https://barnbridge.com/',
    },
    {
      id: 2,
      logo: epic,
      name: 'Epic Game',
      link: 'https://www.epicgames.com/site/en-US/home',
    },
    {
      id: 3,
      logo: fifa,
      name: 'EA FIFA',
      link: 'https://www.ea.com/games/fifa',
    },
    {
      id: 4,
      logo: fluf,
      name: 'Fluf World',
      link: 'https://www.fluf.world/',
    },
    {
      id: 5,
      logo: fortnite,
      name: 'Fortnite',
      link: 'https://www.epicgames.com/fortnite/en-US/home',
    },
    {
      id: 6,
      logo: illuvium,
      name: 'illuvium',
      link: 'https://www.illuvium.io/',
    },
    {
      id: 7,
      logo: nbaLive,
      name: 'NBA Live',
      link: 'https://www.ea.com/games/nba-live/nba-live-19',
    },
    {
      id: 8,
      logo: polemos,
      name: 'Polemos',
      link: 'https://polemos.io/',
    },
    {
      id: 9,
      logo: universe,
      name: 'Universe',
      link: 'https://universe.xyz/',
    },
    {
      id: 10,
      logo: zombie,
      name: 'Plants Vs Zombies',
      link: 'https://www.ea.com/ea-studios/popcap/plants-vs-zombies',
    },
  ],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import Image1 from '../../assets/image/appCreative/feature/slide1.png';
import Image2 from '../../assets/image/appCreative/feature/slide2.png';
import Image3 from '../../assets/image/appCreative/feature/slide3.png';
import Image4 from '../../assets/image/appCreative/feature/slide4.png';
import Image5 from '../../assets/image/appCreative/feature/slide5.png';
import Image6 from '../../assets/image/appCreative/feature/slide6.png';

export const features = {
  title: 'Our Team',
  slogan:
    '',
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: 'Felix Shu',
      description:
        'Founder / CEO, a dedicated blockchain professional with proven experience in the blockchain area and leading a team of technicians',
    },
    {
      id: 2,
      thumbnail: Image2,
      title: 'Quinn Wang',
      description:
        'CTO, a result-driven professional tech leader with proven experience in the blockchain backend',
    },
    {
      id: 3,
      thumbnail: Image3,
      title: 'Harper Li',
      description:
        'Head of Game Studios, has 10+ years of experience in gaming, investment banking, and e-commerce industries',
    },
    {
      id: 4,
      thumbnail: Image4,
      title: 'Ricky Zhang',
      description:
        'Chief Product Officer, has great knowledge of gaming market trends in various regions and experience in top-level IP cross-promotion',
    },
    {
      id: 5,
      thumbnail: Image5,
      title: 'Robin Dong',
      description:
        'Chief AI Scientist, developed the intelligent plasma chemical reaction generator with the Quantomol company',
    },
    {
      id: 6,
      thumbnail: Image6,
      title: 'Leo Liu',
      description:
        'Lead Blockchain Engineer, an expert in the design and implementation of substrate-based blockchains as well as the development of solidity smart contracts',
    },
  ],
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  title: 'Meet our exciting Pricing Plan',
  slogan: 'We designed our pricing plan with affordable price for users',
  pricingFeature: [
    {
      id: 1,
      name: 'Full Access Library',
    },
    {
      id: 2,
      name: 'Multiple user',
    },
    {
      id: 3,
      name: 'Refund Policy',
    },
    {
      id: 4,
      name: 'Google Analytics',
    },
    {
      id: 5,
      name: '24/7 support',
    },
  ],
  pricingItems: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Ultimate Pack',
      price: '35',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
import reviewer1 from '../../assets/image/appCreative/client/client-avatar-1.jpg';
import reviewer2 from '../../assets/image/appCreative/client/client-avatar-2.jpg';
import reviewer3 from '../../assets/image/appCreative/client/client-avatar-3.jpg';

export const testimonial = {
  title: 'What Are Partners Saying About US',
  slogan: '',
  reviews: [
    {
      id: 1,
      description:
        'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 2,
      description:
        '@redqteam is great for creating with landing pages within minutes! It then actually takes less time…',
      avatar: reviewer2,
      name: 'Gavin Park',
      designation: 'CEO at Orbital',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 3,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },

    {
      id: 4,
      description:
        'Whenever I need to create a new cool ecommerce site for clients @redqteam is my solution is the best agency. We are super excited about it. profitable and make it cool with fast loading experience & it make the site more customizable & fluent.',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 5,
      description:
        'We are really excited that we have got a brand new landing page after getting this template we are able to use our most used e-commerce for your branding site to make a profitable and make it cool with fast loading experience.',
      avatar: reviewer1,
      name: 'Jonathan Taylor',
      designation: 'CEO at Creativex',
      twitterProfile: 'https://twitter.com/redqinc',
    },
    {
      id: 6,
      description:
        'Whenever I need to create a new cool ecommerce site for clients, @redqteam is my solution is the best agency. ',
      avatar: reviewer3,
      name: 'Betty Norton',
      designation: 'Freelance Designer',
      twitterProfile: 'https://twitter.com/redqinc',
    },
  ],
};

/* ------------------------------------ */
// Available Store data section
/* ------------------------------------ */
import availableThumb from '../../assets/image/appCreative/contactUs.png';

export const availableStore = {
  title: 'Contact Us',
  description:
    '',
  thumb: availableThumb,
  numberPrefix: [
    {
      label: '+13',
      value: '13',
    },
    {
      label: '+14',
      value: '14',
    },
    {
      label: '+15',
      value: '15',
    },
    {
      label: '+16',
      value: '16',
    },
    {
      label: '+17',
      value: '17',
    },
    {
      label: '+18',
      value: '18',
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  title: 'Frequently Ask Question',
  slogan: 'What are you looking for and find the solution on our FAQ page',
  faqs: [
    {
      id: 1,
      question: 'Which domain should I purchase?',
      answer:
        "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result",
    },
    {
      id: 2,
      question: 'Can I upgrade or downgrade my web hosting plan',
      answer:
        'The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.',
    },
    {
      id: 3,
      question: 'How do I upgrade the storage capacity of my hosting plan?',
      answer:
        'Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.',
    },
    {
      id: 4,
      question: 'What are some tips when choosing a name?',
      answer:
        'Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.',
    },
    {
      id: 5,
      question: 'What is in Motion Hosting’s uptime rate?',
      answer:
        'Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install',
    },
    {
      id: 6,
      question: 'What if I need help choosing the right domain?',
      answer:
        'Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.',
    },
    {
      id: 7,
      question: 'Learn from community on Brandwagon',
      answer:
        'Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.',
    },
  ],
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import footerLogo from '../../assets/image/appCreative/footerLogo.png';

export const footerWidget = {
  logo: footerLogo,
  siteName: 'TinPlayers',
  siteUrl: '#',
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={twitter} />,
      name: 'twitter',
      link: 'https://twitter.com/tinplayers',
    },
  ],
  aboutUs: {
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
      {
        id: 3,
        url: '#',
        text: 'About Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
      },
    ],
  },
  ourInformation: {
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '#',
        text: 'Site Map',
      },
    ],
  },
  myAccount: {
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media',
      },
      {
        id: 3,
        url: '#',
        text: 'Directories',
      },
      {
        id: 4,
        url: '#',
        text: 'Permissions',
      },
    ],
  },
};
