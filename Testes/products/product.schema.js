const { like } = require("pactum-matchers");

module.exports = {
  productSchema: {
    success: true,
    message: "product added",
    data: {
      categories: like(["6543a21b1c9d440001abc124"]),
      photos: like(["https://exemplo.com/camiseta-bonita.jpg"]),
      visible: true,
      additionalDetails: [],
      _id: like("67ca29e06d232b1312a9cd5b"),
      name: like("Camiseta EBAC"),
      price: like(159.99),
      quantity: like(50),
      description: like("Camiseta 100% algodão"),
      popular: like(true),
      specialPrice: like(159.99),
      createdAt: like("2025-03-06T23:04:00.887Z"),
    },
  },
};
