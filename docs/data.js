const caseStudies = [
    // Classic Case Studies
    {
        title: "Building an Enterprise Product: Yammer's Development Methodology",
        description: "Jason Shah, product manager at Yammer, shares aspects of Yammer's product development methodology.",
        url: "https://www.youtube.com/watch?v=N8wdRZDv0ks",
        category: "Classic Case Studies",
        source: "youtube.com"
    },
    {
        title: "Product Hunt's Rise",
        description: "How Product Hunt grew from a simple email list to a thriving product discovery platform.",
        url: "https://medium.com/@theunixbeard/product-hunt-s-rise-d49249a1a2c0",
        category: "Classic Case Studies",
        source: "medium.com"
    },
    {
        title: "Facebook Analysis and Study",
        description: "Comprehensive analysis of Facebook's advertising products and platform strategy.",
        url: "http://www.slideshare.net/misteroo/facebook-analysis-and-study/17-Facebook_is_offering_new_advertisingproducts",
        category: "Classic Case Studies",
        source: "slideshare.net"
    },
    {
        title: "The Twitter Case Study",
        description: "The Twitter Case Study from the Dimensions of Strategy Series.",
        url: "http://www.thetwittercasestudy.com/the-case-study.html",
        category: "Classic Case Studies",
        source: "thetwittercasestudy.com"
    },
    {
        title: "Early Google Case Study",
        description: "Analysis of Google's early product strategy and market positioning.",
        url: "http://www.slideshare.net/ashwin_sharma/google-case-study",
        category: "Classic Case Studies",
        source: "slideshare.net"
    },
    {
        title: "Amazon Case Study",
        description: "How Amazon built an e-commerce empire through customer obsession and innovation.",
        url: "http://www.ecommerce-digest.com/amazon-case-study.html",
        category: "Classic Case Studies",
        source: "ecommerce-digest.com"
    },
    {
        title: "Apple iPod Case Study",
        description: "How Apple revolutionized the music industry with the iPod.",
        url: "http://www.ecommerce-digest.com/apple-ipod-case-study.html",
        category: "Classic Case Studies",
        source: "ecommerce-digest.com"
    },
    {
        title: "Netflix Case Study",
        description: "Netflix's transformation from DVD rentals to streaming dominance.",
        url: "http://www.ecommerce-digest.com/netflix-case-study.html",
        category: "Classic Case Studies",
        source: "ecommerce-digest.com"
    },

    // Growth & Viral Strategies
    {
        title: "How Spotify Became #1 Music Streaming Platform",
        description: "How Spotify used personalization, freemium model, and data-driven recommendations to dominate music streaming.",
        url: "https://www.theproductfolks.com/product-management-blog/how-spotify-became-1-music-streaming-platform-product-case-study",
        category: "Growth & Viral Strategies",
        source: "theproductfolks.com"
    },
    {
        title: "Spotify Case Study: Innovation, Strategy & Growth",
        description: "Deep dive into Spotify's marketing strategy, viral campaigns, and audience insights that drove global growth.",
        url: "https://www.youngurbanproject.com/spotify-case-study/",
        category: "Growth & Viral Strategies",
        source: "youngurbanproject.com"
    },
    {
        title: "Airbnb's Product-Market Fit Journey",
        description: "How Airbnb pivoted from tech-first to human-centered design, including the famous photo quality improvement story.",
        url: "https://soreno.ai/articles/product-management-case-studies",
        category: "Growth & Viral Strategies",
        source: "soreno.ai"
    },
    {
        title: "Airbnb & Spotify: Case Studies in Localization",
        description: "How both companies adapted products for international markets with localized trust mechanisms and pricing.",
        url: "https://www.gleef.eu/blog/airbnb-spotify-case-studies-in-the-art-of-effective-localization",
        category: "Growth & Viral Strategies",
        source: "gleef.eu"
    },
    {
        title: "Uber's MVP Journey: Key Lessons for Startups",
        description: "How Uber's simple black car hailing app in San Francisco evolved into a global transportation platform.",
        url: "https://www.classicinformatics.com/blog/mvp-for-startup-success",
        category: "Growth & Viral Strategies",
        source: "classicinformatics.com"
    },
    {
        title: "How Slack Went from 0 to $1B Valuation in 8 Months",
        description: "Slack's explosive growth through freemium model, word-of-mouth, and customer obsession.",
        url: "https://www.theproductfolks.com/product-management-blog/how-slack-went-from-0-to-1b-valuation-in-just-8-months-a-blueprint-for-rapid-success",
        category: "Growth & Viral Strategies",
        source: "theproductfolks.com"
    },
    {
        title: "Slack's Product Strategy: Learnings from Rapid Ascent",
        description: "How Slack's customer-focused approach and freemium pricing led to viral enterprise adoption.",
        url: "https://www.productplan.com/learn/slack-product-strategy/",
        category: "Growth & Viral Strategies",
        source: "productplan.com"
    },
    {
        title: "Instagram's Pivot from Burbn to Photo Sharing",
        description: "How ruthless prioritization and focus on a single feature transformed a location app into a photo-sharing giant.",
        url: "https://soreno.ai/articles/product-management-case-studies",
        category: "Growth & Viral Strategies",
        source: "soreno.ai"
    },
    {
        title: "Dropbox MVP Success Story",
        description: "How a simple demo video and viral referral program drove Dropbox's explosive early growth.",
        url: "https://www.maxiomtech.com/mvp-success-stories/",
        category: "Growth & Viral Strategies",
        source: "maxiomtech.com"
    },
    {
        title: "TikTok's Viral Growth Loop",
        description: "Understanding how TikTok's algorithm and viral content loops fueled global user acquisition.",
        url: "https://productschool.com/blog/product-strategy/growth-loops",
        category: "Growth & Viral Strategies",
        source: "productschool.com"
    },
    {
        title: "Zoom's Product Usage Loop",
        description: "How Zoom's frictionless meeting invites created powerful network effects for growth.",
        url: "https://productschool.com/blog/product-strategy/growth-loops",
        category: "Growth & Viral Strategies",
        source: "productschool.com"
    },
    {
        title: "WhatsApp Product Strategy: 9 Commandments",
        description: "How WhatsApp's simplicity and focus replaced SMS globally.",
        url: "https://medium.com/lohono-stays-by-isprava/9-product-strategy-commandments-6993a76e8e5d",
        category: "Growth & Viral Strategies",
        source: "medium.com"
    },

    // Product-Led Growth
    {
        title: "Duolingo Case Study: How Gamification Made Learning Addictive",
        description: "Deep dive into streaks, XP points, leaderboards, and the psychology behind 113M monthly active users.",
        url: "https://www.youngurbanproject.com/duolingo-case-study/",
        category: "Product-Led Growth",
        source: "youngurbanproject.com"
    },
    {
        title: "Duolingo's Gamification Strategy",
        description: "How Duolingo uses behavioral design to drive retention without relying on paid ads.",
        url: "https://trophy.so/blog/duolingo-gamification-case-study",
        category: "Product-Led Growth",
        source: "trophy.so"
    },
    {
        title: "How Duolingo Gamified Monthly Active Users",
        description: "Lessons in habit formation and the Hooked Model applied to language learning.",
        url: "https://www.thepmrepo.com/articles/how-duolingo-gamified-monthly-active-users-lessons-in-habit-formation",
        category: "Product-Led Growth",
        source: "thepmrepo.com"
    },
    {
        title: "Pinterest's International Growth Strategy",
        description: "How changing 'Pin It' to 'Save' and other localization efforts drove global retention.",
        url: "https://cpoclub.com/product-management/product-management-case-study/",
        category: "Product-Led Growth",
        source: "cpoclub.com"
    },
    {
        title: "LinkedIn's UGC Growth Loop",
        description: "How collaborative articles created a self-sustaining content loop for user acquisition.",
        url: "https://zeda.io/blog/product-management-case-studies",
        category: "Product-Led Growth",
        source: "zeda.io"
    },
    {
        title: "How Notion Achieves 95% Organic Traffic",
        description: "Community-led growth, user testimonials, and product-led strategies at Notion.",
        url: "https://productify.substack.com/p/how-notion-achieves-95-organic-traffic",
        category: "Product-Led Growth",
        source: "productify.substack.com"
    },
    {
        title: "Beyond Product-Led Growth: Notion and Figma",
        description: "Why PLG alone might not be enough and alternative strategies from two leading products.",
        url: "https://www.mindtheproduct.com/beyond-product-led-growth-diversifying-strategies-with-notion-and-figma/",
        category: "Product-Led Growth",
        source: "mindtheproduct.com"
    },
    {
        title: "Figma's Real-Time Collaboration",
        description: "How Figma's accessibility and real-time features created organic growth among designers.",
        url: "https://www.mindtheproduct.com/beyond-product-led-growth-diversifying-strategies-with-notion-and-figma/",
        category: "Product-Led Growth",
        source: "mindtheproduct.com"
    },

    // Tech Giants & Innovation
    {
        title: "Apple's Design Thinking and Innovation",
        description: "How Steve Jobs instilled design thinking principles that led to the iPhone revolution.",
        url: "https://juanfernandopacheco.com/2025/03/innovation-at-apple-a-design-thinking-case-study/",
        category: "Tech Giants & Innovation",
        source: "juanfernandopacheco.com"
    },
    {
        title: "Apple iPhone Case Study: Redefining Mobile",
        description: "How Apple combined phone, iPod, and internet communicator to create a new category.",
        url: "https://www.productleadership.com/blog/product-management-case-studies/",
        category: "Tech Giants & Innovation",
        source: "productleadership.com"
    },
    {
        title: "Tesla's EV Strategy and Innovation",
        description: "How Tesla disrupted automotive with high-performance EVs, direct sales, and charging infrastructure.",
        url: "https://www.productleadership.com/blog/product-management-case-studies/",
        category: "Tech Giants & Innovation",
        source: "productleadership.com"
    },
    {
        title: "Tesla's Product-Design and Blame-Avoidance Strategies",
        description: "Academic study on how Tesla changed public perception of sustainable innovations.",
        url: "https://onlinelibrary.wiley.com/doi/10.1111/jpim.12732",
        category: "Tech Giants & Innovation",
        source: "onlinelibrary.wiley.com"
    },
    {
        title: "Microsoft Teams vs Slack: Distribution Beats Features",
        description: "How Microsoft's bundling strategy overtook Slack in daily users by 2020.",
        url: "https://zeda.io/blog/product-management-case-studies",
        category: "Tech Giants & Innovation",
        source: "zeda.io"
    },
    {
        title: "Amazon Prime's Retention Strategy",
        description: "How Prime transformed from shipping perk to 200M+ subscriber ecosystem.",
        url: "https://soreno.ai/articles/product-management-case-studies",
        category: "Tech Giants & Innovation",
        source: "soreno.ai"
    },
    {
        title: "Google's MVP Philosophy vs Apple's Polish",
        description: "Comparing product strategy approaches between tech giants.",
        url: "https://www.toughtongueai.com/blog/product-strategy-case-studies",
        category: "Tech Giants & Innovation",
        source: "toughtongueai.com"
    },

    // Fintech & Payments
    {
        title: "Stripe's Developer-First API Strategy",
        description: "How prioritizing developer experience and easy integration created a FinTech giant.",
        url: "https://profwurzer.com/revolutionizing-digital-payments/",
        category: "Fintech & Payments",
        source: "profwurzer.com"
    },
    {
        title: "Stripe Business Breakdown & Founding Story",
        description: "Comprehensive analysis of Stripe's growth to $1 trillion+ TPV.",
        url: "https://research.contrary.com/company/stripe",
        category: "Fintech & Payments",
        source: "research.contrary.com"
    },
    {
        title: "Shopify Balance: Building Financial Services",
        description: "How Shopify used Stripe to build embedded financial services for merchants.",
        url: "https://stripe.com/customers/shopify",
        category: "Fintech & Payments",
        source: "stripe.com"
    },
    {
        title: "Robinhood's Rise in Fintech",
        description: "How commission-free trading and gamified UX disrupted traditional brokerages.",
        url: "https://www.zyanza.com/post/case-study-the-rise-of-robinhood-in-the-fintech-industry",
        category: "Fintech & Payments",
        source: "zyanza.com"
    },
    {
        title: "Top 25 FinTech Case Studies",
        description: "Comprehensive collection featuring Square, Robinhood, Stripe, Coinbase, and Revolut.",
        url: "https://digitaldefynd.com/IQ/fintech-case-studies/",
        category: "Fintech & Payments",
        source: "digitaldefynd.com"
    },
    {
        title: "How Fintech Apps Achieved Product-Market Fit",
        description: "Case studies on Revolut, Cash App, Robinhood, and Chime's structured product processes.",
        url: "https://vocal.media/01/case-study-how-successful-fin-tech-apps-achieved-product-market-fit",
        category: "Fintech & Payments",
        source: "vocal.media"
    },
    {
        title: "Being a PM in Fintech",
        description: "Framework for product managers operating in heavily regulated fintech environments.",
        url: "https://productify.substack.com/p/case-study6-being-a-pm-in-fintech",
        category: "Fintech & Payments",
        source: "productify.substack.com"
    },

    // B2B SaaS & Enterprise
    {
        title: "Atlassian's Product-Led Growth",
        description: "How Jira and Confluence drove organic adoption with minimal sales efforts.",
        url: "https://editorialge.com/saas-case-studies/",
        category: "B2B SaaS & Enterprise",
        source: "editorialge.com"
    },
    {
        title: "HubSpot's Inbound Marketing Revolution",
        description: "How HubSpot created value through content and multi-product strategy.",
        url: "https://editorialge.com/saas-case-studies/",
        category: "B2B SaaS & Enterprise",
        source: "editorialge.com"
    },
    {
        title: "HubSpot Multi-Product Strategy",
        description: "Analysis of how multi-product expansion drove HubSpot's 10-year success.",
        url: "https://www.meritechcapital.com/blog/multi-product-considerations-and-a-hubspot-case-study",
        category: "B2B SaaS & Enterprise",
        source: "meritechcapital.com"
    },
    {
        title: "Salesforce's Cloud CRM Pioneer Story",
        description: "How Salesforce disrupted on-premises software with subscription-based cloud CRM.",
        url: "https://editorialge.com/saas-case-studies/",
        category: "B2B SaaS & Enterprise",
        source: "editorialge.com"
    },
    {
        title: "Product Management in B2B: Enterprise Users Case Study",
        description: "How B2B product discovery differs when buyers aren't the users.",
        url: "https://prodbee.com/b2b-product-case-study/",
        category: "B2B SaaS & Enterprise",
        source: "prodbee.com"
    },

    // Consumer Apps & Engagement
    {
        title: "Peloton Case Study: Personalization, Community, and Growth",
        description: "How data-driven personalization and community features drove 96% retention.",
        url: "https://www.tacticone.co/blog/peloton-personalization-community-and-growth",
        category: "Consumer Apps & Engagement",
        source: "tacticone.co"
    },
    {
        title: "Peloton's AI-Based Product Strategy",
        description: "How Peloton Guide uses computer vision and ML for personalized fitness.",
        url: "https://www.linkedin.com/pulse/ai-based-product-strategy-peloton-case-study-dr-iris-yuster",
        category: "Consumer Apps & Engagement",
        source: "linkedin.com"
    },
    {
        title: "Peloton's Hardware-as-a-Service Model",
        description: "How subscription bundling transformed Peloton's business model.",
        url: "https://www.circuly.io/blog/how-peloton-built-a-business-around-hardware-as-a-service",
        category: "Consumer Apps & Engagement",
        source: "circuly.io"
    },
    {
        title: "Headspace Product Case Study",
        description: "Personalization, AI stress detection, and retention strategies for mindfulness apps.",
        url: "https://www.linkedin.com/pulse/product-case-study-headspace-medha-singh-y4idc",
        category: "Consumer Apps & Engagement",
        source: "linkedin.com"
    },
    {
        title: "Headspace vs Calm: Mindful Competition",
        description: "Comparative analysis of product strategies in the meditation app market.",
        url: "https://fernfortuniversity.com/essay/marketing_case/headspace-vs-calm-mindful-competition-331",
        category: "Consumer Apps & Engagement",
        source: "fernfortuniversity.com"
    },
    {
        title: "DoorDash Retention Case Study",
        description: "Analyzing cart value optimization and retention in food delivery.",
        url: "https://www.product5x.com/case-studies/doordash-retention",
        category: "Consumer Apps & Engagement",
        source: "product5x.com"
    },

    // Marketplace & Platform Strategies
    {
        title: "Uber Product Case Study",
        description: "Understanding two-sided marketplace dynamics and stakeholder management.",
        url: "https://www.linkedin.com/pulse/uber-product-case-study-ashutosh-tripathi-nwmlc",
        category: "Marketplace & Platform Strategies",
        source: "linkedin.com"
    },
    {
        title: "Uber Product Execution: Canceled Rides",
        description: "Analyzing product execution challenges in ride-hailing metrics.",
        url: "https://toddlewandowski.medium.com/product-execution-case-study-canceled-rides-at-uber-f28299ddf219",
        category: "Marketplace & Platform Strategies",
        source: "medium.com"
    },
    {
        title: "How Digital Disruptors Transformed Industries",
        description: "How Airbnb, Tesla, and Uber used software innovation to disrupt traditional industries.",
        url: "https://www.cloudbees.com/blog/digital-disruptors-how-airbnb-tesla-and-uber-used-software-innovation-transform",
        category: "Marketplace & Platform Strategies",
        source: "cloudbees.com"
    },

    // Case Study Collections
    {
        title: "50 Product Management Case Studies",
        description: "Curated collection from Netflix, Uber, Amazon, Airbnb, and more.",
        url: "https://www.producthunt.com/products/50-product-management-case-studies",
        category: "Case Study Collections",
        source: "producthunt.com"
    },
    {
        title: "10 Product Management Case Studies for 2025",
        description: "Deep-dive case studies from top companies with lessons for modern PMs.",
        url: "https://soreno.ai/articles/product-management-case-studies",
        category: "Case Study Collections",
        source: "soreno.ai"
    },
    {
        title: "20 Product Management Case Studies",
        description: "Detailed analysis of product strategies from leading global companies.",
        url: "https://digitaldefynd.com/IQ/product-management-case-studies/",
        category: "Case Study Collections",
        source: "digitaldefynd.com"
    },
    {
        title: "7 Product Management Case Studies to Live and Learn By",
        description: "Curated case studies with practical lessons for product managers.",
        url: "https://airfocus.com/blog/7-product-management-case-studies-to-live-and-learn-by/",
        category: "Case Study Collections",
        source: "airfocus.com"
    },
    {
        title: "Product Management Case Studies Deep Dive",
        description: "Comprehensive analysis of Instagram, Slack, Pinterest, and more.",
        url: "https://www.theproductfolks.com/product-management-blog/case-studies-for-product-management-a-deep-dive",
        category: "Case Study Collections",
        source: "theproductfolks.com"
    },
    {
        title: "How Top Companies Solved Complex PM Challenges",
        description: "Strategic frameworks and lessons from solving real product challenges.",
        url: "https://www.productleadership.com/blog/how-top-companies-solved-complex-challenges-product-management-case-studies/",
        category: "Case Study Collections",
        source: "productleadership.com"
    },
    {
        title: "Product Strategy Case Studies: Apple, Netflix, Meta, Spotify & Amazon",
        description: "Understanding strategic calculations behind major product decisions.",
        url: "https://www.toughtongueai.com/blog/product-strategy-case-studies",
        category: "Case Study Collections",
        source: "toughtongueai.com"
    }
];

// Get unique categories with counts
const categories = [...new Set(caseStudies.map(cs => cs.category))];
const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = caseStudies.filter(cs => cs.category === cat).length;
    return acc;
}, {});
