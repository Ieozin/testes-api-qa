const { like } = require("pactum-matchers");

module.exports = {
  categorySchema: {
    success: true,
    message: like("category added"),
    data: {
      _id: like(""),
      name: like("Celulares"),
      photo: like("any"),
      createdAt: like("2025-03-06T23:07:54.707Z"),
    },
  },
};
