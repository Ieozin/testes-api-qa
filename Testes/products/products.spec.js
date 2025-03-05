const { spec, request } = require("pactum");

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

  it("Cria produto", async () => {
    const response = await spec()
      .post("/api/addProduct")
      .withHeaders("authorization", token)
      .withJson({
        name: "Iphone 16",
        price: 5000.0,
        quantity: 500,
        categories: "Celular",
        description: "Celular Iphone com 128gb",
        photos: "any",
        popular: 10,
        visible: true,
        location: "any",
        additionalDetails: "6gb De RAM",
        specialPrice: 4500.0,
      })
      .expectStatus(200);

    productId = response.body.data._id;
  });

  it("Edita produto", async () => {
    await spec()
      .put(`/api/editProduct/${productId}`)
      .withHeaders("authorization", token)
      .withJson({
        name: "Iphone 16 Pro",
        price: 5500.0,
      })
      .expectStatus(200);
  });

  it("Deleta produto", async () => {
    await spec()
      .delete(`/api/deleteProduct/${productId}`)
      .withHeaders("authorization", token)
      .expectStatus(200);
  });
});
