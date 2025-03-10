class ProductListingPage {
  
    clickProduct(productName) {
      cy.contains(productName).click();
    }
  
    clickAddToCart() {
      cy.contains("Add to cart").click();
    }
  
    applyFilter(category) {
      cy.contains(".list-group-item", category).click();
    }
  }
  
  export default ProductListingPage;