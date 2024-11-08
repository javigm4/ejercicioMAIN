class Price {
  constructor(
    before_price,
    currency,
    current_price,
    discounted,
    savings_amount,
    savings_percent
  ) {
    this.before_price = before_price;
    this.currency = currency;
    this.current_price = current_price;
    this.discounted = discounted;
    this.savings_amount = savings_amount;
    this.savings_percent = savings_percent;
  }
}
export { Price };
