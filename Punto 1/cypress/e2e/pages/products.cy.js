import PageLogin from "../pages/login.cy";


const pageLogin = new PageLogin();

const requiredProductsData = require("../fixtures/products.json");

class PageProducts {

    AddProductCartTest(){
        pageLogin.LoginUser();
        this.AddProduct(1);
        this.AddProduct(2);
        this.buttonHeaderCart();
        this.deleteProductCart();
        this.deleteProductCart();
    }

    AddProductsCart(){
        pageLogin.LoginUser();
        this.AddProduct(1);
        this.AddProduct(2);
    }

    ViewCartTest(){
        this.AddProductsCart();
        this.buttonHeaderCart();
        this.VerifyProductAttributes();
        this.deleteProductCart();
        this.deleteProductCart();
    }

    CompletePurchaseFormTest(){
        this.AddProductsCart();
        this.buttonHeaderCart();
        this.VerifyProductAttributes();
        this.ButtonPlaceOrder();
        this.ValidateFormPlaceOrder();
        this.WritteFormPlaceOrder()
        this.ButtonPlaceOrderModalClose();
        this.deleteProductCart();
        this.deleteProductCart();
    }

    CheckOutPurchase(){
        this.AddProductsCart();
        this.buttonHeaderCart();
        this.VerifyProductAttributes();
        this.ButtonPlaceOrder();
        this.ValidateFormPlaceOrder();
        this.WritteFormPlaceOrder()
        this.ButtonPlaceOrderModalPurchase();
        this.ValidatePurchaseSuccessful();
    }

    VerifyProductAttributes(){
        this.VerifyTitle(requiredProductsData.Products[0].title);
        this.VerifyPrice(requiredProductsData.Products[0].price);

        this.VerifyTitle(requiredProductsData.Products[1].title);
        this.VerifyPrice(requiredProductsData.Products[1].price);

        this.VerifyTotalPrice(requiredProductsData.TotalPrice);
    }

    AddProduct(product){
        cy.wait(1000);
        cy.get(`:nth-child(${product}) > .card > .card-block > .card-title > .hrefch`).click();
        cy.wait(1000);
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#nava > img').click();
    }

    buttonHeaderCart(){
        cy.get('#cartur').click();
    }

    deleteProductCart(){
        cy.wait(2000);
        cy.contains('Delete').click();
        cy.wait(500);
    }

    VerifyImagen(urlImagen){
        cy.get('img').should('have.attr','src',`${urlImagen}`);
    }

    VerifyTitle(title){
        cy.contains(`${title}`).should('be.visible');
    }

    VerifyPrice(price) {
        cy.contains(`${price}`).should('be.visible');
    }

    VerifyTotalPrice(TotalPrice) {
        cy.get('#totalp').contains(`${TotalPrice}`).should('be.visible');
    }

    ButtonPlaceOrder(){
        cy.get('.col-lg-1 > .btn').should('be.visible').click();
    }

    ButtonPlaceOrderModalPurchase(){
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

    ButtonPlaceOrderModalClose(){
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
    }

    ValidateFormPlaceOrder(){
        this.ValidateFormPlaceOrderBeVisible('#orderModalLabel');
        this.ValidateFormPlaceOrderBeVisible('#totalm');
        this.ValidateFormPlaceOrderBeVisible('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible('#orderModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible(':nth-child(4) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible(':nth-child(5) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible(':nth-child(6) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible(':nth-child(7) > .form-control-label');
        this.ValidateFormPlaceOrderBeVisible('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
        this.ValidateFormPlaceOrderBeVisible('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary');
    }

    ValidateFormPlaceOrderBeVisible(label){
        cy.get(`${label}`).should('be.visible');
    }

    WritteAllFormPlaceOrder(etiqueta, text){
        cy.get(`${etiqueta}`).type(`${text}`);
    }

    WritteFormPlaceOrder(){
        this.WritteAllFormPlaceOrder('#name', requiredProductsData.PagePlaceOrder.Name);
        this.WritteAllFormPlaceOrder('#country', requiredProductsData.PagePlaceOrder.Country);
        this.WritteAllFormPlaceOrder('#city', requiredProductsData.PagePlaceOrder.City);
        this.WritteAllFormPlaceOrder('#card', requiredProductsData.PagePlaceOrder.CredidCard);
        this.WritteAllFormPlaceOrder('#month', requiredProductsData.PagePlaceOrder.Month);
        this.WritteAllFormPlaceOrder('#year', requiredProductsData.PagePlaceOrder.Year);
    }

    ValidatePurchaseSuccessful(){
        this.ValidatePurchaseSuccessfulCopys('.sa-success');
        this.ValidatePurchaseSuccessfulCopys('.sweet-alert > h2');
        this.ValidatePurchaseSuccessfulCopys('.lead');
        this.ValidatePurchaseSuccessfulCopys('.confirm');
    }

    ValidatePurchaseSuccessfulCopys(etiqueta){
        cy.get(`${etiqueta}`).should("be.visible");
    }

}

export default PageProducts