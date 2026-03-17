import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ClinicInfo {
    hours: string;
    name: string;
    address: string;
    phone: string;
    doctorName: string;
}
export interface Service {
    name: string;
    description: string;
}
export interface Review {
    reviewerName: string;
    comment: string;
    rating: number;
}
export interface backendInterface {
    addReview(reviewId: string, review: Review): Promise<void>;
    addService(service: Service): Promise<void>;
    getClinicInfo(): Promise<ClinicInfo>;
    getReviews(): Promise<Array<Review>>;
    getReviewsByRating(): Promise<Array<Review>>;
    getServices(): Promise<Array<Service>>;
    removeReview(reviewId: string): Promise<void>;
    removeService(serviceName: string): Promise<void>;
    updateClinicInfo(newInfo: ClinicInfo): Promise<void>;
}
