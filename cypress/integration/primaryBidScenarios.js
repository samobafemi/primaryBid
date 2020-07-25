/// <reference types="Cypress" />
import {
  DataHelper,
  BasePage,
  NavBar,
  NewsPage,
  SignUpPage,
  testData,
} from "../pageObjects/index";

describe("PrimaryBid Test Suites", function () {
  beforeEach(function () {
    BasePage.visit();
  });
  // The ‘About Us’ link in the header navigates to the ‘About Us’ page
  it("Validate about us link in the header", function () {
    NavBar.aboutUsLink.click();
    BasePage.getUrl().should("contain", "about");
  });
  // The ‘FAQs’ link in the header navigates to the ‘Frequently Asked Questions’ page
  it("Validate FAQs link in the header", function () {
    NavBar.faqsLink.click();
    BasePage.getUrl().should("contain", "faqs");
  });
  // The ‘News’ link in the header navigates to the ‘News’ page
  it("Validate News link in the header", function () {
    NavBar.newsLink.click();
    BasePage.getUrl().should("contain", "news");

    // The news page contains news items for ‘Featured Content’
    NewsPage.featuredContent.should("exist").and("be.visible");

    // The news page contains news items for ‘All Content’
    NewsPage.allContent.should("exist").and("be.visible");

    // The ‘All Content’ section can be filtered to ‘Webinar'
    NewsPage.filterBy.trigger("mouseover");
    NewsPage.filterPopup
      .invoke("show")
      .find(
        "[data-testid=news-filter-checkbox-Webinar] > .pb_news_filter__checkbox_iEUe"
      )
      .wait(2000)
      .click();
    NewsPage.filteredBody.should("contain", "Webinar");
  });
  // The ‘Sign Up’ button in the header navigates to the ‘Sign up' page
  it("Validate Sign Up button in the header", function () {
    NavBar.signUp.click();
    BasePage.getUrl().should("contain", "signup");

    // Test data submitted to the sign up form navigates to the user details page
    SignUpPage.signUp(
      DataHelper.getRandomEmail(),
      testData.SignUpPassword,
      testData.SignUpPassword
    );
    BasePage.getUrl().should("contain", "/personal-details?step=2");
  });
  // The ‘Sign Up’ page validates that the passwords entered must match
  it("Sign up with password not matching", function () {
    NavBar.signUp.click();
    BasePage.getUrl().should("contain", "signup");
    SignUpPage.signUp(
      DataHelper.getRandomEmail(),
      testData.SignUpPassword,
      testData.wrongPassword
    );
    SignUpPage.errorMessage
      .should("exist")
      .and("contain", "Passwords do not match");
  });
  // The ‘Sign Up’ page requires a valid email address
  it("Sign up with invalid email address", function () {
    NavBar.signUp.click();
    BasePage.getUrl().should("contain", "signup");
    SignUpPage.signUp(
      testData.invalidEmail,
      testData.SignUpPassword,
      testData.SignUpPassword
    );
    SignUpPage.errorMessage
      .should("exist")
      .and("contain", "The email you have entered is not valid");
  });
});
