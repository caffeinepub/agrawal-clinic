import { Button } from "@/components/ui/button";
import { Calendar, Clock, Globe, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "L-303, Tower L, 3rd Floor, Antriksh Golf View-1 Society, Sector 78, Noida, UP 201305",
    sub: "Near 101 Metro Station, Entry from Gate-1",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "085273 12555",
    href: "tel:08527312555",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open Daily",
    sub: "Closes 9 AM Monday · People typically spend 45 min to 4 hrs",
  },
  {
    icon: Globe,
    label: "Appointments",
    value: "ekacare.com",
    href: "https://ekacare.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-clinic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Located in the heart of Sector 78, Noida. Serving Noida and nearby
            areas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                    {detail.label}
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={
                        detail.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        detail.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      data-ocid={`contact.${detail.label.toLowerCase()}.link`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-foreground">
                      {detail.value}
                    </div>
                  )}
                  {detail.sub && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {detail.sub}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              <Button
                asChild
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                data-ocid="contact.book_appointment.button"
              >
                <a
                  href="https://ekacare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                data-ocid="contact.call_now.button"
              >
                <a href="tel:08527312555">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-card bg-secondary/40 h-96 flex flex-col items-center justify-center text-center p-8 relative">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, oklch(0.42 0.12 228) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Agrawal Clinic
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  Antriksh Golf View-1 Society
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Sector 78, Noida, UP 201305
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  data-ocid="contact.directions.button"
                >
                  <a
                    href="https://maps.google.com/?q=Antriksh+Golf+View+1+Sector+78+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
