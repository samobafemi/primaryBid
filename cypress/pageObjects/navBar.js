class NavBar {
  get aboutUsLink() {
    return cy.get("[data-testid= navigation]").contains("About Us");
  }
  get faqsLink() {
    return cy.get("[data-testid= navigation]").contains("FAQs");
  }
  get newsLink() {
    return cy.get("[data-testid= navigation]").contains("News");
  }
  get signUp() {
    return cy.get("[data-testid= navigation]").contains("Sign up");
  }
}
export default new NavBar();
