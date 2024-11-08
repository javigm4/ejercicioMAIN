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
  pData.products[0].amazonChoice,
  pData.products[0].amazonPrime,
  pData.products[0].asin,
  pData.products[0].bestSeller,
  pData.products[0].price,
  pData.products[0].reviews,
  pData.products[0].score,
  pData.products[0].sponsored,
  pData.products[0].thumbnail,
  pData.products[0].title,
  pData.products[0].url
);

const productList = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = p1.amazonChoice;
productList.appendChild(li1);

// Luego agregar productList al DOM
document.body.appendChild(productList);
