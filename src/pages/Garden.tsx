import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Play, ExternalLink, Mail } from "lucide-react";
import moovProducts from "@/assets/move.png";
import kidDuaLove from "@/assets/kids dua love.png";
import tibboFrog from "@/assets/tibbo-frog.jpg";
import hamzasSuitcase from "@/assets/hamzas-suitcase.jpg";
import numFunAfrica from "@/assets/num-fun-africa.jpg";
import talkingShoes from "@/assets/talking-shoes.jpg";

const projects = [
  {
    id: "moov",
    title: "MOOV: Creative Wellness",
    subtitle: "Small rituals and tools to help people reconnect with imagination and calm.",
    description: "MOOV is Turtle & Bloom's creative wellness brand. It offers small rituals and simple tools to unblock, play and build steady creative habits. Through chapbooks, affirmation cards, art prints and workshops, MOOV makes creativity feel gentle, possible and joyful again.",
    image: moovProducts,
    format: "Products, workshops and digital resources",
    themes: ["Creativity", "Wellness", "Mindfulness", "Self-expression"],
    goals: "Help adults and young people build a gentle creative practice that lasts.",
    cta: { label: "Shop TheMOOVBook™", link: "/shop", external: false },
    contact: "themoovbook@turtleandbloom.com",
  },
  {
    id: "kid-dua-love",
    title: "Kid Dua Love",
    subtitle: "A joyful faith-based web series for children aged 5 to 11.",
    description: "Kid Dua Love presents relatable Muslim characters and gentle life lessons. Episodes are short, playful and designed for families and classrooms. Built around music, humour and relatable characters, it reflects the everyday realities of African and diasporan Muslim children.",
    image: kidDuaLove,
    format: "Web series (YouTube)",
    themes: ["Faith", "Identity", "Community", "Play"],
    goals: "Make Islamic learning lively, relatable and accessible to diasporan families.",
    cta: { label: "Watch on YouTube", link: "https://youtube.com/@kiddualove", external: true },
    contact: "hello@turtleandbloom.com",
  },
  {
    id: "tibbo",
    title: "Tibbo The Flippy Frog",
    subtitle: "An immersive theatre musical about identity and belonging for diasporan children.",
    description: "Tibbo is a live theatre musical and immersive show about identity, friendship and feeling at home in two worlds. It gives children the chance to see themselves on stage and to celebrate small acts of courage.",
    image: tibboFrog,
    format: "Immersive theatre musical touring schools in the UK, Nigeria and beyond",
    themes: ["Identity", "Friendship", "Confidence", "Cultural belonging"],
    goals: "Give children the chance to see themselves on stage and to celebrate small acts of courage.",
    cta: { label: "Book a School Performance", link: "/contact", external: false },
    contact: "hello@turtleandbloom.com",
  },
  {
    id: "hamza",
    title: "Hamza's Suitcase",
    subtitle: "An animated short about displacement, grief and hope.",
    description: "Hamza's Suitcase explores how a child holds memory, loss and resilience. The film is crafted to spark empathy and conversations in classrooms and families. It aims to submit to Oscar-qualifying festivals and create resources for educators and impact partners.",
    image: hamzasSuitcase,
    format: "Animated short aimed at festival and impact circuits",
    themes: ["Displacement", "Grief", "Healing", "Hope"],
    goals: "Submit to Oscar-qualifying festivals and create resources for educators and impact partners.",
    cta: { label: "Collaborate With Us", link: "/contact", external: false },
    status: "In development",
    contact: "hello@turtleandbloom.com",
  },
  {
    id: "num-fun",
    title: "NUM Fun Africa",
    subtitle: "A live-action numeracy show that makes maths fun and confidence-building.",
    description: "Hosted by the Turtle and Bloom Professor Coco, NUM Fun Africa blends sketches, songs and game segments to remove maths anxiety for early learners. It aims to improve numeracy and support teachers and families with engaging learning tools.",
    image: numFunAfrica,
    format: "Terrestrial TV across African markets plus classroom resources",
    themes: ["Numeracy", "Confidence", "Humour", "Education"],
    goals: "To make mathematics fun, accessible and fear-free for African children.",
    cta: { label: "Partner on Distribution", link: "/contact", external: false },
    contact: "hello@turtleandbloom.com",
  },
  {
    id: "talking-shoes",
    title: "Talking Shoes",
    subtitle: "A magazine and immersive exhibit sharing lives through the shoes people have walked in.",
    description: "Talking Shoes collects first-person stories connected to footwear and translates them into a printed magazine and a sensory exhibition. Visitors can donate shoes that support displaced communities.",
    image: talkingShoes,
    format: "Magazine and exhibition",
    themes: ["Identity", "Migration", "Everyday lives", "Social impact"],
    goals: "Create a platform for real stories and send donated shoes to vulnerable communities.",
    cta: { label: "Pitch or Contribute", link: "/contact", external: false },
    contact: "hello@turtleandbloom.com",
  },
];

const Garden = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              The Garden
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-8 leading-tight">
              Welcome to The Garden
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore the stories that grow Turtle & Bloom across film, theatre, children's content, publishing and creative products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.status && (
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs uppercase tracking-wider">
                          {project.status}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <h2 className="font-display text-3xl md:text-4xl font-medium mb-3" style={{ color: '#373324' }}>
                      {project.title}
                    </h2>
                    <p className="text-lg font-medium mb-6" style={{ color: '#AD6B19' }}>
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Format</p>
                        <p className="text-foreground">{project.format}</p>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Themes</p>
                        <div className="flex flex-wrap gap-2">
                          {project.themes.map((theme) => (
                            <span
                              key={theme}
                              className="px-3 py-1 text-sm"
                              style={{ color: '#000000', background: '#EDE6D5' }}
                            >
                              {theme}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Goals</p>
                        <p className="text-foreground">{project.goals}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      {project.cta.external ? (
                        <Button asChild variant="hero" size="lg">
                          <a href={project.cta.link} target="_blank" rel="noopener noreferrer">
                            <Play size={16} />
                            {project.cta.label}
                          </a>
                        </Button>
                      ) : (
                        <Button asChild variant="hero" size="lg" style={{ background: '#373324', color: '#EDE6D5' }}>
                          <Link to={project.cta.link} style={{ color: '#EDE6D5' }}>
                            {project.cta.label}
                            <ArrowRight size={16} />
                          </Link>
                        </Button>
                      )}
                      <a
                        href={`mailto:${project.contact}`}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail size={16} />
                        {project.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
              Partner with us
            </h2>
            <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto">
              Want to see the full slate or discuss co-development, distribution, education partnerships or impact collaborations? Reach out and we will share the package.
            </p>
            <Button asChild variant="heroOutline" size="xl" className="border-background text-background hover:bg-background hover:text-foreground">
              <Link to="/contact">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Garden;
