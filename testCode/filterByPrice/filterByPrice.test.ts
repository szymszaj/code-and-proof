import {
  products,
  filterByPrice,
  calculateProductValue,
  sortByValueDescending,
  formatProducts,
} from "./filterByPrice";

describe("products array", () => {
  it("should contain 5 products", () => {
    expect(products).toHaveLength(5);
  });

  it('should contain a product named "Laptop" with price 1000 and quantity 5', () => {
    expect(products).toContainEqual({
      name: "Laptop",
      price: 1000,
      quantity: 5,
    });
  });

  it('should contain a product named "Mouse" with price 25 and quantity 20', () => {
    expect(products).toContainEqual({ name: "Mouse", price: 25, quantity: 20 });
  });

  it('should contain a product named "Keyboard" with price 50 and quantity 10', () => {
    expect(products).toContainEqual({
      name: "Keyboard",
      price: 50,
      quantity: 10,
    });
  });

  it('should contain a product named "Monitor" with price 200 and quantity 3', () => {
    expect(products).toContainEqual({
      name: "Monitor",
      price: 200,
      quantity: 3,
    });
  });

  it('should contain a product named "USB Cable" with price 10 and quantity 15', () => {
    expect(products).toContainEqual({
      name: "USB Cable",
      price: 10,
      quantity: 15,
    });
  });
});

describe("filterByPrice", () => {
  it("should filter products by minimum price", () => {
    const result = filterByPrice(products, 20);
    expect(result).toEqual([
      { name: "Laptop", price: 1000, quantity: 5 },
      { name: "Mouse", price: 25, quantity: 20 },
      { name: "Keyboard", price: 50, quantity: 10 },
      { name: "Monitor", price: 200, quantity: 3 },
    ]);
  });

  it("should return all products if minPrice is 0", () => {
    expect(filterByPrice(products, 0)).toEqual(products);
  });

  it("should return empty array if minPrice is very high", () => {
    expect(filterByPrice(products, 10_000)).toEqual([]);
  });
});

describe("calculateProductValue", () => {
  it("should calculate value for each product", () => {
    const result = calculateProductValue([
      { name: "A", price: 2, quantity: 3 },
      { name: "B", price: 10, quantity: 1 },
    ]);
    expect(result).toEqual([
      { name: "A", value: 6 },
      { name: "B", value: 10 },
    ]);
  });
});

describe("sortByValueDescending", () => {
  it("should sort products by value descending", () => {
    const input = [
      { name: "A", value: 2 },
      { name: "B", value: 10 },
      { name: "C", value: 5 },
    ];
    const result = sortByValueDescending(input);
    expect(result).toEqual([
      { name: "B", value: 10 },
      { name: "C", value: 5 },
      { name: "A", value: 2 },
    ]);
  });
});

describe("formatProducts", () => {
  it("should format products as strings", () => {
    const input = [
      { name: "A", value: 2 },
      { name: "B", value: 10 },
    ];
    expect(formatProducts(input)).toEqual(["A: $2", "B: $10"]);
  });
});

describe("processedProducts", () => {
  it("should return products filtered (min price 20), valued, sorted and formatted", () => {
    const filtered = filterByPrice(products, 20);
    const valued = calculateProductValue(filtered);
    const sorted = sortByValueDescending(valued);
    const formatted = formatProducts(sorted);

    expect(formatted).toEqual([
      "Laptop: $5000",
      "Mouse: $500",
      "Keyboard: $500",
      "Monitor: $600",
    ]);
  });
});
