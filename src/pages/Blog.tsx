import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Clock, Tag } from "lucide-react";
import heroImage from "@/assets/hero-storytelling.jpg";
import kidDuaLove from "@/assets/kid-dua-love.jpg";
import tibboFrog from "@/assets/tibbo-frog.jpg";
import hamzasSuitcase from "@/assets/hamzas-suitcase.jpg";
import moovProducts from "@/assets/move.png";

const blogPosts = [
  {
    id: "culturally-rooted-characters",
    title: "Why culturally rooted characters matter in children's media",
    excerpt: "When stories fail to reflect people accurately, confidence and belonging suffer. We explore why representation in children's content goes beyond aesthetics.",
    image: heroImage,
    category: "Creative Inspiration",
    readTime: "6 min read",
    date: "December 15, 2025",
    featured: true,
  },
  {
    id: "moov-practice-rituals",
    title: "The MOOV practice: five small rituals that unlock play",
    excerpt: "Discover simple, daily creative practices that help you reconnect with imagination and build lasting creative habits.",
    image: moovProducts,
    category: "Tips for Creatives",
    readTime: "4 min read",
    date: "December 8, 2025",
  },
  {
    id: "making-kid-dua-love",
    title: "Making Kid Dua Love: research notes and classroom reactions",
    excerpt: "Behind the scenes of creating a faith-based web series that resonates with diasporan Muslim children and their families.",
    image: kidDuaLove,
    category: "Behind the Scenes",
    readTime: "8 min read",
    date: "November 28, 2025",
  },
  {
    id: "touring-with-tibbo",
    title: "Touring with Tibbo: bringing theatre into primary schools",
    excerpt: "What happens when an immersive theatre show about identity and belonging visits schools across the UK and Nigeria.",
    image: tibboFrog,
    category: "Behind the Scenes",
    readTime: "5 min read",
    date: "November 15, 2025",
  },
  {
    id: "hamzas-suitcase-adapting",
    title: "Hamza's Suitcase: adapting trauma for young audiences with care",
    excerpt: "How we approach sensitive topics like displacement and grief in animated content for children.",
    image: hamzasSuitcase,
    category: "Creative Inspiration",
    readTime: "7 min read",
    date: "November 5, 2025",
  },
  {
    id: "character-led-ip",
    title: "How to build a character-led IP that travels across formats",
    excerpt: "Lessons from developing stories that work across film, theatre, publishing and products.",
    image: heroImage,
    category: "Tips for Creatives",
    readTime: "10 min read",
    date: "October 22, 2025",
  },
];

const categories = [
  "All",
  "Creative Inspiration",
  "Behind the Scenes",
  "Tips for Creatives",
  "Turtle & Bloom Updates",
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              The Creative Bloom
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Creative inspiration, behind the scenes and tools for makers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm bg-secondary hover:bg-muted transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-wider">
                  Featured
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {featuredPost.date}
                </p>
                <Button variant="hero" size="lg">
                  Read Article
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 group-hover:text-muted-foreground transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {post.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
              Subscribe for updates and workshop dates
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              Get creative inspiration, behind-the-scenes stories and news about upcoming MOOV workshops delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-transparent border border-background/30 text-background placeholder:text-background/50 focus:outline-none focus:border-background transition-colors"
              />
              <Button type="submit" variant="heroOutline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
