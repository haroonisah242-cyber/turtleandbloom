import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";

const projectTypes = [
  "Film & TV",
  "Children's Content",
  "Theatre",
  "Publishing",
  "Creative Products",
  "Education Partnership",
  "Distribution",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    projectType: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      organisation: "",
      email: "",
      projectType: "",
      message: "",
      budget: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-6 leading-tight">
              Work with us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We collaborate with creatives, cultural partners, schools, donors, investors and brands who want stories with purpose. Tell us about your project, invite us to pitch, or ask about licensing, distribution and partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24" style={{ background: '#EDE6D5' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-medium mb-8">
                Get in touch
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    General Enquiries
                  </p>
                  <a
                    href="mailto:hello@turtleandbloom.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail size={18} />
                    hello@turtleandbloom.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    MOOV Partnerships
                  </p>
                  <a
                    href="mailto:themoovbook@turtleandbloom.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail size={18} />
                    themoovbook@turtleandbloom.com
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="flex items-center gap-3 text-foreground">
                    <MapPin size={18} />
                    UK & Nigeria
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-cream">
                <h3 className="font-display text-lg font-medium mb-4">
                  What we're looking for
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Co-production partners</li>
                  <li>• Distribution collaborations</li>
                  <li>• Educational institutions</li>
                  <li>• Impact partners</li>
                  <li>• Funders and investors</li>
                  <li>• Brand partnerships</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-background p-8 md:p-12">
                <h2 className="font-display text-2xl font-medium mb-8">
                  Tell us about your project
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="organisation" className="block text-sm font-medium mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Brief Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell us about your project or how you'd like to collaborate..."
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range (Optional)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., £10,000 - £50,000"
                    className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
