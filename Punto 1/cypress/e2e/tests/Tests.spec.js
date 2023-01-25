import PageLogin from "../pages/login.cy";
import PageProducts from "../pages/products.cy";

const pageLogin = new PageLogin();
const pageProducts = new PageProducts();

describe("Prueba Tecnica NEORIS", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.clearAllCookies();
        cy.clearAllLocalStorage(); 
    })

    it("Verificación del modal de Log In.", () => {
        pageLogin.VerifyModalLogin();
    });

    it("Realizar Log In exitoso", () => {
        pageLogin.VerifyLoginSuccessful();
    });

    it("Agregar dos productos al carrito", () => {
        pageProducts.AddProductCartTest();
    });

    it("Visualizar carrito", () => {
        pageProducts.ViewCartTest();
    });

    it("Completar formulario de compra", () => {
        pageProducts.CompletePurchaseFormTest();
    });

    it("Finalizar la compra", () => {
        pageProducts.CheckOutPurchase();
    });

    afterEach(() => {

    });
});
