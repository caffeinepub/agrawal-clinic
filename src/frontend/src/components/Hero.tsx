import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : i === Math.ceil(rating)
                  ? "fill-amber-400/50 text-amber-400"
                  : "text-amber-200 fill-amber-200"
            }`}
          />
        ))}
      </div>
      <span className="font-semibold text-foreground">{rating}</span>
      <span className="text-muted-foreground text-sm">({count} reviews)</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 md:pt-20 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-accent/20 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.42 0.12 228), transparent 70%)",
        }}
      />

      <div className="container-clinic relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              General Practitioner • Noida, Uttar Pradesh
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Dr. Amit
              <br />
              <span className="text-primary">Agrawal</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Best general physician in Noida with{" "}
              <strong className="text-foreground">
                20+ years of clinical experience
              </strong>
              . Expert in diabetes, hypertension, and comprehensive medical
              care.
            </p>

            <StarRating rating={4.5} count={302} />

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-hero gap-2"
                data-ocid="hero.book_appointment.button"
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
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold gap-2"
                data-ocid="hero.call_now.button"
              >
                <a href="tel:08527312555">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Sector 78, Noida · Near 101 Metro Station</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src="/assets/generated/clinic-hero.dim_1200x500.jpg"
                alt="Agrawal Clinic - Dr. Amit Agrawal"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="font-bold text-foreground">4.5 / 5</div>
                <div className="text-xs text-muted-foreground">
                  302 Patient Reviews
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl shadow-hero p-4"
            >
              <div className="font-bold text-2xl font-display">20+</div>
              <div className="text-xs opacity-90">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
