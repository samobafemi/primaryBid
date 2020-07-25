import { testData } from "../pageObjects/index";
class BasePage {
  visit() {
    return cy.visit(testData.Url, {
      auth: {
        username: testData.User1.username,
        password: testData.User1.password,
      },
    });
  }
  getUrl() {
    return cy.url();
  }
}
export default new BasePage();
