import Price from "./Price.js";
import Reviews from "./Reviews.js";

class Product extends Price {
  constructor(
    amazonChoice,
    amazonPrime,
    asin,
    bestSeller,
    price,
    reviews,
    score,
    sponsored,
    thumbnail,
    title,
    url
  ) {
    super(
      price.before_price,
      price.currency,
      price.current_price,
      price.discounted,
      price.savings_amount,
      price.savings_percent
    );
    this.amazonChoice = amazonChoice;
    this.amazonPrime = amazonPrime;
    this.asin = asin;
    this.bestSeller = bestSeller;
    this.reviews = new Reviews(reviews.rating, reviews.total_reviews); // Instancia de Reviews
    this.score = score;
    this.sponsored = sponsored;
    this.thumbnail = thumbnail;
    this.title = title;
    this.url = url;
  }
}

export { Product };
