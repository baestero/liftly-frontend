describe("Login com mock", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="home-description"]').should(
      "contain",
      "Mais peso, mais séries, mais evolução."
    );
    cy.get('[data-cy="home-btn"]').click();
    cy.location("pathname").should("eq", "/login");
  });
  it("deve simular login com sucesso", () => {
    cy.intercept("POST", "/users/auth", {
      statusCode: 200,
      body: { token: "fake-jwt-token" },
    }).as("loginRequest");

    cy.intercept("GET", "/users/validate", {
      statusCode: 200,
      body: { message: "Token válido" },
    }).as("validateToken");

    cy.intercept("GET", "/users/me", {
      statusCode: 200,
      body: {
        id: 1,
        username: "baestero3",
        email: "baestero3@email.com",
      },
    }).as("getUser");

    cy.get('[data-cy="login-user"]').type("teste-login");
    cy.get('[data-cy="login-password"]').type("123");
    cy.get('[data-cy="login-btn-entrar"]').click();

    cy.wait("@loginRequest").then(() => {
      cy.window().then((win) => {
        expect(win.localStorage.getItem("token")).to.eq("fake-jwt-token");
      });
    });

    cy.wait("@validateToken");
    cy.wait("@getUser");

    cy.location("pathname").should("eq", "/dashboard");
    cy.get('[data-cy="header-user"]').should("contain", "Olá baestero3");
  });
});
