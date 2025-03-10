class CheckoutPage {
    fillName(name) {
      cy.get("#name").type(name);
    }
  
    fillCountry(country) {
      cy.get("#country").type(country);
    }
  
    fillCity(city) {
      cy.get("#city").type(city);
    }
  
    fillCreditCard(creditCard) {
      cy.get("#card").type(creditCard);
    }
  
    fillMonth(month) {
      cy.get("#month").type(month);
    }
  
    fillYear(year) {
      cy.get("#year").type(year);
    }
  
    clickPurchase() {
      cy.contains("Purchase").click();
    }
  
    verifyPurchaseSuccess() {
      cy.get(".sweet-alert").should("contain", "Thank you for your purchase!");
    }
  }
  
  export default CheckoutPage;