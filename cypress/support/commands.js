// support/commands/urls.js
Cypress.Commands.add("setUrls", () => {
  Cypress.env("apiUrl", "https://viacep.com.br/ws/08253000/json/");
});