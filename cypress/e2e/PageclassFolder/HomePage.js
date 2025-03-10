class HomePage {
    visit() {
      cy.visit("https://www.demoblaze.com");
    }
  
    verifyFooterLink(linkText) {
      cy.contains(".footer a", linkText).click();
      cy.url().should("include", linkText.toLowerCase());
    }
  }
  
  export default HomePage;