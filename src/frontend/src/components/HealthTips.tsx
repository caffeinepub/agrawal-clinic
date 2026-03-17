import { Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const tips = [
  {
    title: "Stay on top of your health",
    body: "Managing diabetes, BP & thyroid conditions requires more than just medication — it's about regular follow-ups and consistent monitoring for your well-being.",
    date: "Jan 2026",
  },
  {
    title: "Regular diagnostic tests save lives",
    body: "Regular diagnostic tests can be your best ally in the fight against diseases. Prevention is better than cure — early detection makes all the difference.",
    date: "Jan 2026",
  },
  {
    title: "Preventive checkups for busy professionals",
    body: "Preventive health checkups are crucial, especially for those caught up in the fast-paced world of work. Don't let a hectic schedule come at the cost of your well-being.",
    date: "Dec 2025",
  },
];

export default function HealthTips() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-clinic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            Health Insights
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Health Tips from Dr. Agrawal
          </h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Stay informed with the latest health advice from our clinic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="text-white/50 text-xs font-medium mb-3 uppercase tracking-widest">
                {tip.date}
              </div>
              <h3 className="font-semibold text-white text-lg mb-3 leading-snug">
                {tip.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {tip.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
