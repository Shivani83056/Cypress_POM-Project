class CartPage {
    visit() {
      cy.visit("https://www.demoblaze.com/cart.html");
    }
  
    getProductName(productIndex) {
      return cy.get(`tbody tr:nth-child(${productIndex}) td:nth-child(2)`);
    }
  
    getProductPrice(productIndex) {
      return cy.get(`tbody tr:nth-child(${productIndex}) td:nth-child(3)`);
    }
  
    getTotalPrice() {
      return cy.get("#totalp");
    }
  
    removeProduct(productIndex) {
      cy.get(`tbody tr:nth-child(${productIndex}) a`).click();
    }
  
    clickPlaceOrder() {
      cy.contains("Place Order").click();
    }
  
    verifyCartIsEmpty() {
      cy.get("tbody tr").should("not.exist");
    }
  
    verifyFooterLink(linkText) {
      cy.contains(".footer a", linkText).click();
      cy.url().should("include", linkText.toLowerCase());
    }
  }
  
  export default CartPage;