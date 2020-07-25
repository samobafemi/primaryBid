class SignUpPage {
  get emailTextField() {
    return cy.get("[type = email]");
  }
  get passwordTextField() {
    return cy.get("[type = password]").eq(0);
  }
  get repeatPasswordTextField() {
    return cy.get("[name = confirmPassword]");
  }
  get submitButton() {
    return cy.get("[type = submit]");
  }
  get errorMessage() {
    return cy.get("span.error");
  }
  signUp(email, password, reapeatPassword) {
    this.emailTextField.clear().type(email);
    this.passwordTextField.clear().type(password);
    this.repeatPasswordTextField.clear().type(reapeatPassword);
    this.submitButton.click();
  }
}
export default new SignUpPage();
