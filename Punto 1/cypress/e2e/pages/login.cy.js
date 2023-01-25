

const requiredLoginData = require("../fixtures/loginData.json");

class PageLogin {

    VerifyModalLogin(){
        this.buttonHeaderLogIn();
        this.verifyCopies('h5', requiredLoginData.PageLogin.Title);
        this.verifyCopies('#logInModal > div > div > div.modal-body > form > div:nth-child(1) > label', requiredLoginData.PageLogin.SubtitleOne);
        this.verifyInputs()
        this.verifyCopies('#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label', requiredLoginData.PageLogin.SubtitleTwo);
        this.verifyButtons(1, requiredLoginData.PageLogin.ButtonLogin);
        this.verifyButtons(2, requiredLoginData.PageLogin.ButtonClose);
    }

    VerifyLoginSuccessful(){
        this.LoginUser();
        this.verifyButtonWelcome();
    }

    verifyCopies(etiqueta,copy){
        cy.contains(`${etiqueta}`,`${copy}`)
        .should('be.visible');
    }

    verifyInputs(){
        cy.get('#loginusername').should('be.visible');
    }

    verifyButtons(button,copy){
        if(button==1){
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains(copy)
            .should('be.visible');
        }else if(button==2){
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').contains(copy)
            .should('be.visible');
        }
    }

    verifyButtonWelcome(){
        cy.contains(requiredLoginData.User.Name);
    }

    LoginUser(user,password){
        user = (typeof user !== 'undefined') ?  user : requiredLoginData.User.Name;
        password = (typeof password !== 'undefined') ?  password : requiredLoginData.User.Password;

        this.buttonHeaderLogIn();
        cy.wait(1000);
        cy.get('#loginusername').type(user);
        cy.wait(1000);
        cy.get('#loginpassword').type(password);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

    buttonHeaderLogIn(){
        cy.get("#login2").click();
    }

    buttonHeaderLogOut(){
        
    }
}

export default PageLogin