export interface BusinessInfo {
  name: string;
  tagline: string;
  businessType: string;
  currency: string;
  currencyCode: string;
  location: string;
  phone: string;
  email: string;
  deliveryTime: string;
  openingHours: string;
  orderingMethod: string;
  fictionalNotice: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "Cheesy Crust Pizza",
  tagline: "Freshly Baked. Perfectly Cheesy. Always Delicious.",
  businessType: "Pizza restaurant and takeaway shop",
  currency: "$",
  currencyCode: "USD",
  location: "123 Main Street, New York, NY",
  phone: "+1 212 555 0148",
  email: "hello@cheesycrust.example",
  deliveryTime: "30–45 minutes",
  openingHours: "Monday–Sunday, 11:00 AM–10:00 PM",
  orderingMethod: "Customer inquiries and demonstration orders through the website.",
  fictionalNotice:
    "Demonstration Notice: Address, contact details, and ordering capabilities on this website are fictional demonstration information created for an educational AI assignment.",
};

export interface BrandHighlight {
  title: string;
  description: string;
  iconName: "leaf" | "flame" | "sparkles";
}

export const BRAND_HIGHLIGHTS: BrandHighlight[] = [
  {
    title: "Fresh Ingredients",
    description: "Crisp vegetables, rich tomato sauce, and quality toppings prepared daily.",
    iconName: "leaf",
  },
  {
    title: "Perfectly Baked Crust",
    description: "Golden, airy on the inside, and baked to crispy perfection in our ovens.",
    iconName: "flame",
  },
  {
    title: "Delicious Flavours",
    description: "Generous melted mozzarella and balanced seasoning in every single slice.",
    iconName: "sparkles",
  },
];

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Delicious Ingredients",
    description: "Thoughtfully selected ingredients that bring out authentic pizza shop taste.",
  },
  {
    title: "Freshly Prepared Food",
    description: "Made to order with care so your meal arrives hot and satisfying.",
  },
  {
    title: "Generous Cheese Toppings",
    description: "Loaded with melted mozzarella cheese for that signature cheesy pull.",
  },
  {
    title: "Friendly Customer Service",
    description: "Warm, cheerful, and family-friendly service—online and in our shop.",
  },
  {
    title: "Convenient Delivery",
    description: "Reliable local delivery within an estimated 30–45 minute window.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What pizzas do you offer?",
    answer: "We currently offer Large Pepperoni Pizza and Medium Veggie Pizza.",
  },
  {
    question: "How much does the Large Pepperoni Pizza cost?",
    answer: "It costs $15.",
  },
  {
    question: "How much does the Medium Veggie Pizza cost?",
    answer: "It costs $12.",
  },
  {
    question: "Do you offer garlic bread?",
    answer: "Yes, Garlic Bread is available for $5.",
  },
  {
    question: "How long does delivery take?",
    answer: "Estimated delivery time is 30–45 minutes.",
  },
  {
    question: "Do you offer free items?",
    answer: "No, we do not offer free items.",
  },
  {
    question: "What are your opening hours?",
    answer: "We are open every day from 11:00 AM to 10:00 PM.",
  },
  {
    question: "Where are you located?",
    answer: "We are located at 123 Main Street, New York, NY.",
  },
  {
    question: "How can I contact you?",
    answer: "Call +1 212 555 0148 or email hello@cheesycrust.example.",
  },
];

