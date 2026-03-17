import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  public type ClinicInfo = {
    name : Text;
    doctorName : Text;
    address : Text;
    phone : Text;
    hours : Text;
  };

  public type Service = {
    name : Text;
    description : Text;
  };

  public type Review = {
    reviewerName : Text;
    rating : Nat8;
    comment : Text;
  };

  module Service {
    public func compare(service1 : Service, service2 : Service) : Order.Order {
      Text.compare(service1.name, service2.name);
    };
  };

  module Review {
    public func compareByRating(review1 : Review, review2 : Review) : Order.Order {
      Nat8.compare(review1.rating, review2.rating);
    };
  };

  var clinicInfo : ClinicInfo = {
    name = "Agrawal Clinic";
    doctorName = "Dr. Amit Agrawal";
    address = "123 Main St, City";
    phone = "123-456-7890";
    hours = "9am - 5pm";
  };

  let services = Map.empty<Text, Service>();
  let reviews = Map.empty<Text, Review>();

  public query ({ caller }) func getClinicInfo() : async ClinicInfo {
    clinicInfo;
  };

  public query ({ caller }) func getServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func getReviews() : async [Review] {
    reviews.values().toArray();
  };

  public shared ({ caller }) func updateClinicInfo(newInfo : ClinicInfo) : async () {
    clinicInfo := newInfo;
  };

  public shared ({ caller }) func addService(service : Service) : async () {
    if (services.containsKey(service.name)) {
      Runtime.trap("Service already exists");
    };
    services.add(service.name, service);
  };

  public shared ({ caller }) func removeService(serviceName : Text) : async () {
    if (not services.containsKey(serviceName)) {
      Runtime.trap("Service does not exist");
    };
    services.remove(serviceName);
  };

  public shared ({ caller }) func addReview(reviewId : Text, review : Review) : async () {
    if (reviews.containsKey(reviewId)) {
      Runtime.trap("Review already exists");
    };
    reviews.add(reviewId, review);
  };

  public shared ({ caller }) func removeReview(reviewId : Text) : async () {
    if (not reviews.containsKey(reviewId)) {
      Runtime.trap("Review does not exist");
    };
    reviews.remove(reviewId);
  };

  public query ({ caller }) func getReviewsByRating() : async [Review] {
    reviews.values().toArray().sort(Review.compareByRating);
  };
};
