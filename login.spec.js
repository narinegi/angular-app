import LoginPage from '../../pageObjects/LoginPage.js';

describe("Login with Page Object Model", () => {
    const loginPage = new LoginPage();

    beforeEach(() =>{
        loginPage.navigateToLogin();
    })

    it('should successfully login', () => {
        const userData = {
            email: 'narineilnytska@gmail.com',
            password: 'TestNG@001'
        }

        loginPage.getLoginButton().contains('Log In').should('be.disabled');
        loginPage.fillInLoginForm(userData);
        loginPage.getLoginButton().contains('Log In').should('be.enabled');
        loginPage.toggleCheckbox();
        loginPage.getCheckedIcon().should('be.visible').and('exist');
        loginPage.getLoginButton().contains('Log In').click();
        cy.wait(5000);
        loginPage.navigateToDashboard();
        loginPage.getDashboard().should('be.visible');
    })
});

describe("Login with Custom Commands", () => {

    beforeEach(() =>{
        cy.visit('auth/login');
    })

    it('should successfully login', () => {
        const userData = {
            email: 'narineilnytska@gmail.com',
            password: 'TestNG@001'
        }

        cy.getLoginButton().should('be.disabled');
        cy.fillLoginForm(userData);
        cy.getLoginButton().should('be.enabled');
        cy.setLoginCheckbox();
        cy.getLoginButton().click();
        cy.wait(5000);
        cy.url().should('include', '/pages/dashboard');
        cy.get('div.content').should('be.visible');
    })
})