class NewsPage {
  get featuredContent() {
    return cy.contains("Featured Content");
  }
  get allContent() {
    return cy.contains("All Content");
  }
  get filterBy() {
    return cy.get("[data-testid=news-filter-button]");
  }
  get filterPopup() {
    return cy.get("[data-testid = news-filter-popover]");
  }
  get filteredBody() {
    return cy.get("[data-testid=page-body]");
  }
}
export default new NewsPage();
