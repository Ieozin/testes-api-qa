const { spec, request } = require("pactum");
const { like } = require("pactum-matchers");
const { productSchema } = require("./product.schema");

request.setBaseUrl("http://lojaebac.ebaconline.art.br");

let token;
let productId;

describe("Testes de produtos", () => {
  before(async () => {
    token = await spec()
      .post("/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123",
      })
      .returns("data.token");
  });

  it("Deve criar um produto com sucesso", async () => {
    const response = await spec()
      .post("/api/addProduct")
      .withHeaders("authorization", token)
      .withJson({
        name: "Camiseta EBAC",
        price: 159.99,
        quantity: 50,
        categories: ["6543a21b1c9d440001abc124"],
        description: "Camiseta 100% algodão",
        photos: ["https://exemplo.com/camiseta-bonita.jpg"],
        popular: true,
        visible: true,
      })
      .expectStatus(200)
      .expectJsonMatch(productSchema);

    productId = response.body.data._id;
  });

  it("Deve editar um produto existente com sucesso", async () => {
    await spec()
      .put(`/api/editProduct/${productId}`)
      .withHeaders("authorization", token)
      .withJson({
        name: "Iphone 16 Pro",
        price: 5500.0,
      })
      .expectStatus(200)
      .expectJsonMatch({
        success: true,
        message: "product updated",
      });
  });

  it("Deve deletar um produto existente com sucesso", async () => {
    await spec()
      .delete(`/api/deleteProduct/${productId}`)
      .withHeaders("authorization", token)
      .expectStatus(200)
      .expectJsonMatch({
        success: true,
        message: "product deleted",
      });
  });
});
