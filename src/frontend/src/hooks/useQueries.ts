import { useQuery } from "@tanstack/react-query";
import type { Review, Service } from "../backend.d";
import { useActor } from "./useActor";

export const STATIC_SERVICES: Service[] = [
  {
    name: "General Medicine",
    description:
      "Comprehensive primary care for all ages, from routine check-ups to complex diagnoses.",
  },
  {
    name: "Diabetes Management",
    description:
      "Expert diabetes care with personalized treatment plans and lifestyle guidance.",
  },
  {
    name: "Fever & Gastritis",
    description:
      "Accurate diagnosis and effective relief for infections, digestive issues, and acute illnesses.",
  },
  {
    name: "Hypertension",
    description:
      "Structured treatment plans and monitoring for blood pressure management.",
  },
  {
    name: "Thyroid & Weight Management",
    description:
      "Holistic care combining thyroid treatment with personalized weight management strategies.",
  },
  {
    name: "Emergency Care",
    description:
      "Prompt and reliable care for urgent medical conditions with continuous monitoring.",
  },
];

export const STATIC_REVIEWS: Review[] = [
  {
    reviewerName: "AMIT PANDEY",
    comment: "Good man good place. Very good doctor God bless them all.",
    rating: 5,
  },
  {
    reviewerName: "Vernita Jain",
    comment: "Dr diagnosed the problem accurately and gave proper treatment.",
    rating: 5,
  },
  {
    reviewerName: "Shweta Pandey",
    comment: "Money minded not service oriented.",
    rating: 2,
  },
];

export function useServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return STATIC_SERVICES;
      const result = await actor.getServices();
      return result.length > 0 ? result : STATIC_SERVICES;
    },
    enabled: !!actor && !isFetching,
    placeholderData: STATIC_SERVICES,
  });
}

export function useReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return STATIC_REVIEWS;
      const result = await actor.getReviews();
      return result.length > 0 ? result : STATIC_REVIEWS;
    },
    enabled: !!actor && !isFetching,
    placeholderData: STATIC_REVIEWS,
  });
}
