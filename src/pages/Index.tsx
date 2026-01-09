import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
// import heroImage from "@/assets/Hero.png";
import HeroSlider from "@/components/HeroSlider";
import whyImg from "@/assets/ac2.jpg";
import moveImg from "@/assets/move.png";
import vectorImg from "@/assets/Vector.png";
import moovProducts from "@/assets/moov-products.jpg";
import movePng from "@/assets/move.png";
import kidDuaLove from "@/assets/kid-dua-love.jpg";
import kidsDuaLovePng from "@/assets/kids dua love.png";
import tibboFrog from "@/assets/tibbo-frog.jpg";
import hamzasSuitcase from "@/assets/hamzas-suitcase.jpg";
import numFunAfrica from "@/assets/num-fun-africa.jpg";
import talkingShoes from "@/assets/talking-shoes.jpg";

const featuredProjects = [
  {
    id: "moov",
    title: "MOOV: Creative Wellness",
    subtitle: "Creative tools and small rituals designed to help people reconnect with imagination and calm.",
    image: movePng,
    cta: "Shop TheMOOVBook™",
    link: "/shop",
  },
  {
    id: "kid-dua-love",
    title: "Kid Dua Love",
    subtitle: "Faith-based learning made joyful, playful and familiar.",
    image: kidsDuaLovePng,
    cta: "Watch on YouTube",
    link: "https://youtube.com/@kiddualove",
    external: true,
  },
];

const allProjects = [
  {
    id: "tibbo",
    title: "Tibbo The Flippy Frog",
    subtitle: "An immersive theatre musical about identity and belonging for diasporan children.",
    image: tibboFrog,
  },
  {
    id: "hamza",
    title: "Hamza's Suitcase",
    subtitle: "An animated short about displacement, grief and hope.",
    image: hamzasSuitcase,
  },
  {
    id: "num-fun",
    title: "NUM Fun Africa",
    subtitle: "A live-action numeracy show that makes maths fun and confidence-building.",
    image: numFunAfrica,
  },
  {
    id: "talking-shoes",
    title: "Talking Shoes",
    subtitle: "A magazine and immersive exhibit sharing lives through the shoes people have walked in.",
    image: talkingShoes,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Listen",
    description: "We begin with community, research and lived experience.",
  },
  {
    step: "02",
    title: "Create",
    description: "We build characters, worlds and formats that feel honest and emotionally grounded.",
  },
  {
    step: "03",
    title: "Launch",
    description: "We release work with care, clarity and long-term cultural ambition.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Announcement Bar Section */}
      <section className="w-full flex flex-col items-center bg-white pt-10 pb-2 mt-24">
        <img src={vectorImg} alt="Turtle & Bloom Logo" className="w-[700px] max-w-full h-auto mb-2 mx-auto transition-transform duration-500 ease-in-out hover:scale-105 turtle-bounce" style={{ cursor: 'pointer' }} />
        <div className="hidden md:flex justify-center items-center border-2 border-blue-500 rounded-sm px-2 py-1 w-fit gap-8 mt-2">
          <div className="flex items-center gap-1">
            <img src={vectorImg} alt="vector" className="w-4 h-4" />
            <span className="text-[11px] text-[#373324] tracking-wide">FREE SHIP ORDER OVER $100</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={vectorImg} alt="vector" className="w-4 h-4" />
            <span className="text-[11px] text-[#373324] tracking-wide">CREATIVE WELLNESS</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={vectorImg} alt="vector" className="w-4 h-4" />
            <span className="text-[11px] text-[#373324] tracking-wide">ISLAMIC CHILDREN'S WEB SERIES</span>
          </div>
        </div>
      </section>
      {/* Hero Section with Slider and Overlayed Content */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Slider */}
        <HeroSlider />
        {/* Sticky Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="flex flex-col items-center w-full max-w-2xl mx-4 pointer-events-auto sticky top-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-white text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-medium leading-tight mb-8 text-center"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85), 0 1px 0 #000' }}
            >
              Stories that expand what the world sees
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 w-full max-w-sm items-center"
            >
              <Button asChild variant="hero" size="xl" className="w-full transition-opacity duration-700 pointer-events-auto opacity-100">
                <Link to="/garden">
                  Explore projects
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="w-full border-white text-white bg-white/20 hover:bg-white/40 hover:text-foreground transition-opacity duration-700 pointer-events-auto opacity-100">
                <Link to="/shop">
                  Shop TheMOOVBook™
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What We Do
            </p>
            <h2
              className="font-display text-3xl md:text-5xl font-semibold mb-8"
              style={{ color: '#5E6F60', letterSpacing: '-0.01em', lineHeight: 1.1, textShadow: 'none', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
            >
              We create original stories and experiences designed to travel across formats and generations.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Turtle & Bloom develops character-led intellectual property across screen, stage, page and product. Our work begins with culture, grows through craft, and lives on through audiences who finally feel recognised.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32" style={{ background: '#EDE6D5' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Featured Projects
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              From our studio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                  <img
                    src={project.id === 'moov' ? moveImg : project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.subtitle}
                </p>
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-muted-foreground transition-colors"
                  >
                    <Play size={16} />
                    {project.cta}
                  </a>
                ) : (
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-muted-foreground transition-colors"
                  >
                    {project.cta}
                    <ArrowRight size={16} />
                  </Link>
                )}
              </motion.article>
            ))}
          </div>

          {/* More Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/garden#${project.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-display text-lg font-medium mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.subtitle}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/garden">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
              How We Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium">
              Every story follows a simple path.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <span className="text-6xl md:text-7xl font-display font-light text-background/20 mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-4">
                  {step.title}
                </h3>
                <p className="text-background/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Turtle & Bloom */}
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
                Why Turtle & Bloom
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-tight">
                When stories fail to reflect people accurately, confidence and belonging suffer.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We exist to change that by creating work that children, families and communities can recognise themselves in without explanation.
              </p>
              <p className="text-lg font-display italic text-accent">
                We make foundations, not trends. Our stories are built to bloom with the passage of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={whyImg}
                  alt="Storytelling that matters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 md:p-8 max-w-[200px]">
                <Sparkles className="mb-2" size={24} />
                <p className="text-sm font-medium">
                  Stories that shift culture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-24 md:py-32" style={{ background: '#EDE6D5' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Work With Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 max-w-3xl mx-auto leading-tight">
              We collaborate with creatives, cultural partners, schools, funders and organisations who believe in meaningful storytelling.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              If you are developing a project, seeking culturally grounded IP, or looking to partner on distribution, education or impact, we would love to hear from you.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
