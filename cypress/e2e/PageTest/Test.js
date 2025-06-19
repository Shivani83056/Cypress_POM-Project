// Correct Import Paths
import CartPage from "../PageclassFolder/CartPage";
import ProductListingPage from "../PageclassFolder/ProductListingPage";
import CheckoutPage from "../PageclassFolder/CheckoutPage";
import HomePage from "../PageclassFolder/HomePage";

describe("Demoblaze Cart Page Tests", () => {
  const cartPage = new CartPage();
  const productListingPage = new ProductListingPage();
  const checkoutPage = new CheckoutPage();
  const homePage = new HomePage();

  const addProductToCart = (productName = "Samsung galaxy s6") => {
    homePage.visit();
    productListingPage.clickProduct(productName);
    productListingPage.clickAddToCart();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added");
    });

    cy.wait(1000); // Let the alert process before moving on
  };

  // Test 1: Cart Functionality
  it("Should validate product details in the cart", () => {
    addProductToCart();
    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
    cartPage.getProductPrice(1).should("contain", "360");
  });

  it("Should remove a product from the cart and verify the cart is empty", () => {
    addProductToCart();
    cartPage.visit();
    cartPage.removeProduct(1);
    cartPage.verifyCartIsEmpty();
  });

  // Test 2: Adding Products to Cart
  it("Should add a product to the cart and verify details", () => {
    addProductToCart();
    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
    cartPage.getProductPrice(1).should("contain", "360");
  });

  it("Should apply filters and add a product to the cart", () => {
    homePage.visit();
    productListingPage.applyFilter("Phones");
    productListingPage.clickProduct("Samsung galaxy s6");
    productListingPage.clickAddToCart();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added");
    });

    cy.wait(1000);
    cartPage.visit();
    cartPage.getProductName(1).should("contain", "Samsung galaxy s6");
  });

  // Test 3: Checkout Navigation
  it("Should navigate to checkout and complete the purchase", () => {
    addProductToCart();
    cartPage.visit();
    cartPage.clickPlaceOrder();

    checkoutPage.fillName("Shivani");
    checkoutPage.fillCountry("India");
    checkoutPage.fillCity("Satna");
    checkoutPage.fillCreditCard("1234567890123456");
    checkoutPage.fillMonth("12");
    checkoutPage.fillYear("2025");
    checkoutPage.clickPurchase();

    checkoutPage.verifyPurchaseSuccess();
  });

  // Test 4: Cart Total Calculations
  it("Should verify the total price updates correctly", () => {
    addProductToCart();
    cartPage.visit();
    cy.wait(1000);
    cartPage.getTotalPrice().should("contain", "360");

    cartPage.removeProduct(1);
    cartPage.verifyCartIsEmpty();
  });

  // Test 5: Responsiveness and Layout
  it("Should test the cart page on different screen sizes", () => {
    const viewports = [
      { label: "desktop", width: 1280, height: 720 },
      { label: "tablet", width: 768, height: 1024 },
      { label: "mobile", width: 375, height: 667 },
    ];

    viewports.forEach((viewport) => {
      cy.viewport(viewport.width, viewport.height);
      addProductToCart();
      cartPage.visit();
      cartPage.getProductName(1).should("be.visible");
    });
  });

  // Test 6: Footer Links (optional - uncomment when implemented)
  // it("Should validate footer links for correct redirection", () => {
  //   homePage.visit();
  //   homePage.verifyFooterLink("Home");
  //   homePage.verifyFooterLink("Contact");
  // });
});
