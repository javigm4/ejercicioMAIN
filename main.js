import { Product } from "./Products";

const pData = {
  products: [
    {
      amazonChoice: false,
      amazonPrime: true,
      asin: "B087623TMW",
      bestSeller: false,
      price: {
        before_price: 0,
        currency: "USD",
        current_price: "399.00",
        discounted: false,
        savings_amount: 0,
        savings_percent: 0,
      },
      reviews: {
        rating: 4.6,
        total_reviews: 73,
      },
      score: "335.80",
      sponsored: false,
      thumbnail:
        "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
      title:
        "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
      url: "https://www.amazon.com/dp/B087623TMW",
    },
  ],
};

const p1 = new Product(
  pData.products[0].title,
  pData.products[0].url,
  pData.products[0].thumbnail,
  pData.products[0].score,
  pData.products[0].price.current_price,
  pData.products[0].reviews.total_reviews
);

const p1Array = [
  p1.title,
  p1.url,
  p1.thumbnail,
  p1.score,
  p1.price,
  p1.reviews,
];

const productList = document.createElement("ul");

p1Array.forEach((item) => {
  const li = document.createElement("li");
  const p = document.createAttribute("p");
  productList.appendChild(li);
  li.appendChild(p);
  p.textContent = item;
});

// Luego agregar productList al DOM
document.body.appendChild(productList);
