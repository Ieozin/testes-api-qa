const { spec, request } = require("pactum");
const { like, string } = require("pactum-matchers");

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

  it("Deve criar uma categoria com sucesso", async () => {
    const response = await spec()
      .post("/api/addCategory")
      .withHeaders("authorization", token)
      .withJson({
        name: "Celulares",
        photo: "any",
      })
      .expectStatus(200)
      .expectJsonMatch({
        success: true,
        message: "category added",
        data: {
          _id: like(""),
          name: string("Celulares baratos"),
          photo: string("any"),
          createdAt: string("2025-03-05T22:48:17.646Z"),
          
        },
      });

    categoryId = response.body.data._id;
  });

  it("Deve editar uma categoria existente com sucesso", async () => {
    await spec()
      .put(`/api/editCategory/${categoryId}`)
      .withHeaders("authorization", token)
      .withJson({
        name: "Celulares baratos",
        photo: "any",
      })
      .expectStatus(200)
      .expectJsonMatch({
        success: true,
        message: "category updated",
      });
  });

  it("Deve excluir uma categoria existente com sucesso", async () => {
    await spec()
      .delete(`/api/deleteCategory/${categoryId}`)
      .withHeaders("authorization", token)
      .expectStatus(200)
      .expectJsonMatch({
        success: true,
        message: "category deleted",
      });
  });
});
