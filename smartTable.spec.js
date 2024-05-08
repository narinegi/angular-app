import SmartTablePage from '../../pageObjects/SmartTablePage.js';

describe("Smart Table", () => {
    const smartTablePage = new SmartTablePage();

    beforeEach(() =>{
        smartTablePage.navigateToSmartTable();
    })

    it('should create a new user', () => {
        smartTablePage.getAddButton().click();
        smartTablePage.getNewRow().should('exist').and('be.visible');

        const inputValues = ['700', 'Emma', 'Tom', 'Tommy', 'emmat@gmail.com', '33'];
        smartTablePage.enterInputValues(inputValues);
        smartTablePage.getSaveButton().click();

        smartTablePage.verifyNewlyCreatedUser(inputValues);
    });

    it('should edit a user', () => {
        const updateValues = ['007', 'Test', 'est', 'Te', 'e', '1'];

        smartTablePage.getChosenRow().within(() => {
            smartTablePage.getEditButton().click();
            smartTablePage.editExistingUser(updateValues);
            smartTablePage.getEditSaveButton().click();
        });

        smartTablePage.verifyEditedUser(updateValues);
    });
})