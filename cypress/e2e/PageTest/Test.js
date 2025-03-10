// Correct Import Paths
import CartPage from "../PageclassFolder/CartPage";
import ProductListingPage from "../PageclassFolder/ProductListingPage";
import CheckoutPage from "../PageclassFolder/CheckoutPage";
import HomePage from "../PageclassFolder/HomePage.js";


describe("Demoblaze Cart Page Tests", () => {
  const cartPage = new CartPage();
  const productListingPage = new ProductListingPage();
  const checkoutPage = new CheckoutPage();
  const homePage = new HomePage();

  beforeEach(() => {
    // Add a product to the cart before each test
    homePage.visit();
    productListingPage.clickProduct("Samsung galaxy s6");
    productListingPage.clickAddToCart();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added");
    });

  });
  
  // Test 1: Cart Functionality
  it("Should validate product details in the cart", () => {
    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
    cartPage.getProductPrice(1).should("contain", "360");
  });

  it("Should remove a product from the cart and verify the total price", () => {
    cartPage.visit();
    cartPage.removeProduct(1);
    cartPage.verifyCartIsEmpty();
  });

  // Test 2: Adding Products to Cart
  it("Should add a product to the cart and verify details", () => {
    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
    cartPage.getProductPrice(1).should("contain", "360");
  });

  it("Should apply filters and add a product to the cart", () => {
    homePage.visit();  
    productListingPage.applyFilter("Phones");
    productListingPage.clickProduct("Samsung galaxy s6");
    productListingPage.clickAddToCart();
cy.wait(2000); // Let the alert process before navigating

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added");
    });

    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
});


  // Test 3: Checkout Navigation
  it("Should navigate to checkout and complete the purchase", () => {
    cartPage.visit();
    cartPage.clickPlaceOrder();

    checkoutPage.fillName("John Doe");
    checkoutPage.fillCountry("USA");
    checkoutPage.fillCity("New York");
    checkoutPage.fillCreditCard("1234567890123456");
    checkoutPage.fillMonth("12");
    checkoutPage.fillYear("2025");
    checkoutPage.clickPurchase();

    checkoutPage.verifyPurchaseSuccess();
  });

  // Test 4: Cart Total Calculations
  it("Should verify the total price updates correctly", () => {
    cartPage.visit();
    cy.wait(4000);
    cartPage.getTotalPrice().should("contain", "360");

    cartPage.removeProduct(1);
    cartPage.verifyCartIsEmpty();
  });

  // Test 5: Responsiveness and Layout
  it("Should test the cart page on different screen sizes", () => {
    // Test on desktop
    cy.viewport(1280, 720);
    cartPage.visit();
    cartPage.getProductName(1).should("be.visible");

    // Test on tablet
    cy.viewport(768, 1024);
    cartPage.visit();
    cartPage.getProductName(1).should("exist").and("be.visible");


    // Test on mobile
    cy.viewport(375, 667);
    cartPage.visit();
    cartPage.getProductName(1).should("be.visible");
  });

  // Test 6: Footer Links
  // it("Should validate footer links for correct redirection", () => {
  //   homePage.visit();
  //   homePage.verifyFooterLink("Home");
  //   homePage.verifyFooterLink("Contact");
  // });
});