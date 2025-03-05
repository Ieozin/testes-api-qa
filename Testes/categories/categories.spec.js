const { spec, request } = require("pactum");

request.setBaseUrl("http://lojaebac.ebaconline.art.br");

let token;
let categoryId;

describe("Testes de categorias", () => {
  before(async () => {
    token = await spec()
      .post("/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123",
      })
      .returns("data.token");
  });

  it("Cria categoria", async () => {
    const response = await spec()
      .post("/api/addCategory")
      .withHeaders("authorization", token)
      .withJson({
        name: "Celulares",
        photo: "any",
      })
      .expectStatus(200);

    categoryId = response.body.data._id;
  });

  it("Edita categoria", async () => {
    await spec()
      .put(`/api/editCategory/${categoryId}`)
      .withHeaders("authorization", token)
      .withJson({
        name: "Celulares baratos",
        photo: "any",
      })
      .expectStatus(200);
  });

  it("Deleta categoria", async () => {
    await spec()
      .delete(`/api/deleteCategory/${categoryId}`)
      .withHeaders("authorization", token)
      .expectStatus(200);
  });

  after(async () => {
    await spec()
      .delete(`/api/deleteCategory/${categoryId}`)
      .withHeaders("authorization", token);
  });
});
