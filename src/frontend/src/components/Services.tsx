import { Skeleton } from "@/components/ui/skeleton";
import {
  Droplets,
  Heart,
  Stethoscope,
  Thermometer,
  Weight,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useServices } from "../hooks/useQueries";

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"];

const serviceIcons: Record<string, React.ReactNode> = {
  "General Medicine": <Stethoscope className="w-6 h-6" />,
  "Diabetes Management": <Droplets className="w-6 h-6" />,
  "Fever & Gastritis": <Thermometer className="w-6 h-6" />,
  Hypertension: <Heart className="w-6 h-6" />,
  "Thyroid & Weight Management": <Weight className="w-6 h-6" />,
  "Emergency Care": <Zap className="w-6 h-6" />,
};

const iconColors = [
  "bg-blue-50 text-blue-600",
  "bg-teal-50 text-teal-600",
  "bg-red-50 text-red-500",
  "bg-pink-50 text-pink-600",
  "bg-indigo-50 text-indigo-600",
  "bg-amber-50 text-amber-600",
];

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-clinic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Treat
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Our Medical Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs, delivered
            with expertise and compassion.
          </p>
        </motion.div>

        {isLoading ? (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-44 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(services ?? []).map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 border border-border group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${iconColors[i % iconColors.length]}`}
                >
                  {serviceIcons[service.name] ?? (
                    <Stethoscope className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
