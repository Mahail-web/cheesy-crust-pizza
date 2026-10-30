export interface MenuItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  size?: string;
  category: "Pizza" | "Side";
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

/**
 * Official assignment menu source of truth.
 * Do not introduce additional products, prices, discounts, or promotions.
 */
export const OFFICIAL_MENU: MenuItem[] = [
  {
    id: "large-pepperoni-pizza",
    name: "Large Pepperoni Pizza",
    price: 15,
    formattedPrice: "$15",
    size: "Large",
    category: "Pizza",
    description:
      "A delicious pizza topped with classic pepperoni, melted mozzarella cheese, and rich tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Large Pepperoni Pizza with melted mozzarella cheese and classic pepperoni slices",
    badge: "Classic Favourite",
  },
  {
    id: "medium-veggie-pizza",
    name: "Medium Veggie Pizza",
    price: 12,
    formattedPrice: "$12",
    size: "Medium",
    category: "Pizza",
    description:
      "A colourful vegetarian pizza loaded with fresh vegetables, mozzarella cheese, and delicious tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Medium Veggie Pizza loaded with colorful vegetables and melted mozzarella",
    badge: "Vegetarian",
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    price: 5,
    formattedPrice: "$5",
    category: "Side",
    description:
      "Golden, freshly baked garlic bread with a delicious garlic flavour.",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Golden freshly baked garlic bread slices with herbs",
    badge: "Freshly Baked Side",
  },
];

