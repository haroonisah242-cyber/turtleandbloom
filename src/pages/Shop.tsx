import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ShoppingBag, Heart, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import shopChapbook from "@/assets/shop-chapbook.jpg";
import shopNotesJar from "@/assets/shop-notes-jar.jpg";
import shopArtPrints from "@/assets/shop-art-prints.jpg";
import shopTote from "@/assets/shop-tote.jpg";
import shopCards from "@/assets/shop-cards.jpg";
import moovProducts from "@/assets/move.png";

interface Product {
  id: string;
  name: string;
  description: string;
  whyItHelps?: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  comingSoon?: boolean;
}

const products: Product[] = [
  {
    id: "chapbook",
    name: "MOOV Chapbook",
    description: "A6 chapbook with 30 creative prompts, affirmations and line art to colour.",
    whyItHelps: "Gentle prompts to start a daily creative habit.",
    price: 12.99,
    image: shopChapbook,
    category: "Books",
    inStock: true,
  },
  {
    id: "notes-jar",
    name: "MOOV Notes-in-a-Jar",
    description: "Tiny creative prompts for daily five-minute play.",
    whyItHelps: "Perfect for busy people who want to keep a creative practice.",
    price: 18.99,
    image: shopNotesJar,
    category: "Gifts",
    inStock: true,
  },
  {
    id: "art-prints",
    name: "MOOV Art Prints",
    description: "Minimalist line-art prints for studios, classrooms and bedrooms.",
    price: 24.99,
    image: shopArtPrints,
    category: "Art",
    inStock: true,
  },
  {
    id: "tote-bag",
    name: "MOOV Tote Bag",
    description: "Canvas tote designed for makers who like to keep making.",
    price: 19.99,
    image: shopTote,
    category: "Merch",
    inStock: true,
  },
  {
    id: "affirmation-cards",
    name: "MOOV Affirmation Cards",
    description: "A deck of creativity-boosting cards to inspire clarity and courage.",
    price: 15.99,
    image: shopCards,
    category: "Cards",
    inStock: false,
    comingSoon: true,
  },
];

const categories = ["All", "Books", "Cards", "Art", "Gifts", "Merch"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const { toast } = useToast();

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product?.inStock) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const toggleWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        toast({
          title: "Removed from wishlist",
          description: `${product?.name} has been removed from your wishlist.`,
        });
        return prev.filter((id) => id !== productId);
      }
      toast({
        title: "Added to wishlist",
        description: `${product?.name} has been added to your wishlist.`,
      });
      return [...prev, productId];
    });
  };

  const joinWaitlist = (productName: string) => {
    toast({
      title: "Joined waitlist",
      description: `We'll notify you when ${productName} is available.`,
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                TheMOOVBook™ Shop
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
                A creative wellness brand for dreamers, makers and people rebuilding their creative lives.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                MOOV helps people reconnect with imagination through chapbooks, cards, prints and small workshops. It is a toolkit for quieter creative lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={moovProducts}
                alt="MOOV: Creative Wellness"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          {/* Cart indicator */}
          {cartCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed top-24 right-4 md:right-8 z-40 bg-foreground text-background px-4 py-3 flex items-center gap-3 shadow-lg"
            >
              <ShoppingBag size={20} />
              <span className="font-medium">{cartCount} items</span>
              <Button
                variant="heroOutline"
                size="sm"
                className="border-background text-background hover:bg-background hover:text-foreground ml-2"
                onClick={() => {
                  toast({
                    title: "Checkout coming soon",
                    description: "Full e-commerce functionality will be available soon.",
                  });
                }}
              >
                Checkout
              </Button>
            </motion.div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 transition-colors ${
                        wishlist.includes(product.id)
                          ? "bg-terracotta text-terracotta-foreground"
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart size={18} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>
                  </div>

                  {/* Coming soon badge */}
                  {product.comingSoon && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-wider">
                      Coming Soon
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-xl font-medium">
                      {product.name}
                    </h3>
                    <span className="text-lg font-medium">
                      £{product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-2">
                    {product.description}
                  </p>
                  
                  {product.whyItHelps && (
                    <p className="text-sm text-accent italic mb-4">
                      {product.whyItHelps}
                    </p>
                  )}

                  {product.comingSoon ? (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => joinWaitlist(product.name)}
                    >
                      Join Waitlist
                    </Button>
                  ) : (
                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingBag size={16} />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                MOOV Creative Workshops
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
                Small, intimate sessions that unlock expression and build practice.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join us for in-person workshops in the UK designed to help you reconnect with your creative self. These sessions are gentle, guided and perfect for anyone looking to build a sustainable creative practice.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Enquire About Workshops
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-cream p-8 md:p-12"
            >
              <h3 className="font-display text-2xl font-medium mb-6">
                Wholesale & Partnerships
              </h3>
              <p className="text-muted-foreground mb-6">
                For wholesale orders, workshop partnerships or curriculum licensing, get in touch with our team.
              </p>
              <a
                href="mailto:themoovbook@turtleandbloom.com"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Mail size={18} />
                themoovbook@turtleandbloom.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
