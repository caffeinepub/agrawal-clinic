import { BadgeCheck, Clock, Heart, Users } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: Clock, label: "20+ Years", sublabel: "Clinical Experience" },
  { icon: Users, label: "10,000+", sublabel: "Patients Treated" },
  { icon: BadgeCheck, label: "Expert", sublabel: "Diabetologist" },
  { icon: Heart, label: "Trusted", sublabel: "Emergency Care" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-clinic">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/60 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl text-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                About the Doctor
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                Dr. Amit Agrawal
              </h2>
              <p className="text-muted-foreground mt-1">
                MBBS · General Physician & Diabetologist
              </p>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              Dr. Amit Agrawal is recognized as the best general physician in
              Noida, offering comprehensive medical care with over 20 years of
              clinical experience. He is also regarded as the best diabetologist
              in Noida, providing expert diabetes management with personalized
              treatment and lifestyle guidance.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Known for his prompt and accurate diagnoses, Dr. Agrawal
              specializes in managing fever, gastritis, hypertension, thyroid
              disorders, and weight management. As a trusted emergency doctor in
              Noida, he provides reliable urgent medical care with continuous
              monitoring.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "General Medicine",
                "Diabetes Care",
                "Hypertension",
                "Thyroid",
                "Gastritis",
                "Emergency Care",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
