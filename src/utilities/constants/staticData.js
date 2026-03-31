export const stepsData = [
    {
        id: 1,
        stepNumber: "01",
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required to get started.",
        icon: "user"
    },
    {
        id: 2,
        stepNumber: "02",
        title: "Choose Products",
        description: "Browse our catalog and select the tools that fit your needs.",
        icon: "box"
    },
    {
        id: 3,
        stepNumber: "03",
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
        icon: "rocket"
    }
];

export const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        duration: "Month",
        isPopular: false,
        buttonText: "Get Started Free",
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
    },
    {
        id: 2,
        name: "Pro",
        tagline: "Best for professionals",
        price: 29,
        duration: "Month",
        isPopular: true,
        badge: "Most Popular",
        buttonText: "Start Pro Trial",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
    },
    {
        id: 3,
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        duration: "Month",
        isPopular: false,
        buttonText: "Contact Sales",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
    },
];