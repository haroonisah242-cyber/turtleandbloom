import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Film, BookOpen, Theater, Gift, GraduationCap, Tv } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";
import heroImage from "@/assets/hero-storytelling.jpg";
import creativeApproachImg from "@/assets/our creative approach.png";

const whatWeMake = [
  {
    icon: Film,
    title: "Film and TV",
    description: "Original scripted and animated stories for global audiences.",
  },
  {
    icon: Tv,
    title: "Children's Content & Animation",
    description: "Joyful, culturally grounded learning through characters and play.",
  },
  {
    icon: Theater,
    title: "Theatre & Immersive Experiences",
    description: "Live storytelling that invites participation, identity and belonging.",
  },
  {
    icon: BookOpen,
    title: "Books and Publishing",
    description: "Stories that live on the page, in classrooms and at home.",
  },
  {
    icon: Gift,
    title: "Creative Gifts & Lifestyle",
    description: "Small objects designed to support creativity, calm and expression.",
  },
  {
    icon: GraduationCap,
    title: "Cultural & Educational Programming",
    description: "Projects that sit at the intersection of art, learning and community impact.",
  },
];

const processSteps = [
  "We research communities before we write.",
  "We centre character and emotional truth.",
  "We test ideas with families and educators.",
  "We design simple products that extend the story beyond the screen or stage.",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-8 leading-tight">
              About Turtle & Bloom
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Turtle & Bloom Media is a UK–Nigeria creative studio producing original film, TV, children's content, books, theatre and immersive storytelling. We exist to bring underrepresented voices into the mainstream through work that is culturally rooted, emotionally tuned and made to last.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
                Why we exist
              </h2>
              <p className="text-xl text-background/80 leading-relaxed font-display italic">
                To expand what the world sees and amplify the voices it rarely hears.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-background/60 mb-4">
                Our Vision
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
                Where we are going
              </h2>
              <p className="text-xl text-background/80 leading-relaxed font-display italic">
                To become a global creative studio that elevates African and diasporan stories through unforgettable, commercially viable and culturally honest intellectual property.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Approach */}
      <section className="pt-0 pb-24 md:pt-0 md:pb-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Creative Approach
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 leading-tight">
                How we think about storytelling
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Everything we create sits at the intersection of culture, imagination, humanity, representation and joy. We build worlds that feel lived in, characters that grow, and experiences that stay with audiences long after the screen fades or the curtain falls.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Our Process
                </p>
                <ul className="space-y-3">
                  {processSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-foreground">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
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
                  src={creativeApproachImg}
                  alt="Our creative approach"
                  className="w-full h-full object-cover mt-0"
                  style={{ marginTop: 0 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-24 md:py-32" style={{ background: '#EDE6D5' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What We Make
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Our formats and mediums
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeMake.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 hover-lift"
              >
                <item.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-display text-xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              The people behind the stories
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-start">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={founderPortrait}
                  alt="Monsurah Alli-Oluwafuyi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-medium mb-2">
                  Monsurah Alli-Oluwafuyi
                </h3>
                <p className="text-accent font-medium mb-6">Founder — The Mansu</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monsurah is proudly a jill of many skills and masters them one at a time. With a diverse background in publishing, writing and arts, Monsurah's work is a blend of bold narrative, emotional depth and advocacy for mental health, gender equality and youth empowerment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She uses storytelling as a tool for social advocacy, healing and cultural awareness. When Monsurah isn't writing for film, curating an art exhibition, brainstorming creative ideas to improve education in Africa, or performing spoken word poetry, she is enjoying cooking for her family.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32" style={{ background: '#EDE6D5' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto">
              Work with Turtle & Bloom
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              We collaborate with purpose driven creatives, studios, schools, cultural institutions, donors and investors who believe storytelling can shape how people see themselves and each other.
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

export default About;
