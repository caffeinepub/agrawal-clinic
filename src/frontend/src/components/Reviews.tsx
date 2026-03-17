import { Skeleton } from "@/components/ui/skeleton";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { useReviews } from "../hooks/useQueries";

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted fill-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { data: reviews, isLoading } = useReviews();

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-clinic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Patient Feedback
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= 4
                      ? "fill-amber-400 text-amber-400"
                      : "fill-amber-400/50 text-amber-400"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-foreground">4.5</span>
            <span className="text-muted-foreground text-sm">
              based on 302 reviews
            </span>
          </div>
        </motion.div>

        {isLoading ? (
          <div
            className="grid md:grid-cols-3 gap-6"
            data-ocid="reviews.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-48 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {(reviews ?? []).map((review, i) => (
              <motion.div
                key={`${review.reviewerName}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`reviews.item.${i + 1}`}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-card transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {review.reviewerName}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Verified Patient
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
