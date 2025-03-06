# Testes de API QA

Um repositório de automação de testes de API desenvolvido como parte do módulo da EBAC. Aqui, validamos os endpoints de categorias e produtos, garantindo que a API funcione conforme esperado.

## Visão Geral

Este projeto tem como objetivo automatizar os testes de API utilizando PactumJS, Mocha e Mochawesome. Os testes englobam:

- **Categorias:** criação, edição e exclusão.
- **Produtos:** adição, edição e deleção.

Também incluímos validações de contrato para garantir que as respostas da API estejam de acordo com os padrões esperados.

## Tecnologias Utilizadas

- **Node.js**
- **PactumJS**: para a automação dos testes.
- **Mocha**: framework de testes.
- **Mochawesome**: para gerar relatórios detalhados.
- **ESLint & Prettier**: para manter a consistência e qualidade do código.

## Estrutura do Projeto

```plaintext
├── Testes
│   ├── categories
│   │   ├── categories.spec.js
│   │   └── category.schema.js
│   └── products
│       ├── products.spec.js
│       └── product.schema.js
├── node_modules
├── pactum.setup.js
├── package.json
└── README.md
```

Contribuição 🤝
Encontrou um problema ou tem uma sugestão? Sinta-se à vontade para:

Abrir uma issue

Propor melhorias via Pull Request

Licença ⚖️
Este projeto está sob licença MIT.

Desenvolvido com ☕ por Leonardo martins

Agradecimentos especiais à equipe da EBAC pelo suporte durante o curso!
