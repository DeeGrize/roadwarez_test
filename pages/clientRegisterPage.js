const {BasePage} = require("./basePage");
const {
    I,
    accounts,
} = inject();

class ClientRegisterPage extends BasePage {
    selectors = {
        buttons: {
            signUpForFreeButton: '//button[text()="Sign Up for free"]'
        },
        fields: {
            email: '//input[@placeholder="Email"]',
            password: '//input[@placeholder="Password"]',
            confirmPassword: '//input[@placeholder="Password Confirmation"]',
            firstName: '//input[@placeholder="First Name"]',
            lastName: '//input[@placeholder="Last Name"]',
            company: '//input[@placeholder="Company"]'
        },
    }

    enterEmail(email) {
        I.scrollTo(this.selectors.fields.email);
        I.moveCursorTo(this.selectors.fields.email);
        I.click(this.selectors.fields.email);
        I.fillField(this.selectors.fields.email, email)
    }

    enterPassword(password) {
        I.scrollTo(this.selectors.fields.password);
        I.moveCursorTo(this.selectors.fields.password);
        I.click(this.selectors.fields.password);
        I.fillField(this.selectors.fields.password, password);
    }

    enterConfirmPassword(password) {
        I.scrollTo(this.selectors.fields.confirmPassword);
        I.moveCursorTo(this.selectors.fields.confirmPassword);
        I.click(this.selectors.fields.confirmPassword);
        I.fillField(this.selectors.fields.confirmPassword, password);
    }

    enterFirstName(firstName) {
        I.scrollTo(this.selectors.fields.firstName);
        I.moveCursorTo(this.selectors.fields.firstName);
        I.click(this.selectors.fields.firstName);
        I.fillField(this.selectors.fields.firstName, firstName);
    }

    enterLastName(lastName) {
        I.scrollTo(this.selectors.fields.lastName);
        I.moveCursorTo(this.selectors.fields.lastName);
        I.click(this.selectors.fields.lastName);
        I.fillField(this.selectors.fields.lastName, lastName);
    }

    enterCompany(company) {
        I.scrollTo(this.selectors.fields.company);
        I.moveCursorTo(this.selectors.fields.company);
        I.click(this.selectors.fields.company);
        I.fillField(this.selectors.fields.company, company);
    }

    async clickSignUpForFreeButton() {
        I.scrollTo(this.selectors.buttons.signUpForFreeButton);
        I.moveCursorTo(this.selectors.buttons.signUpForFreeButton);
        I.click(this.selectors.buttons.signUpForFreeButton);
        let currentUrl = await I.grabCurrentUrl();
        if (currentUrl === this.url.dev.clientIndex) {
            I.waitInUrl(this.url.dev.clientIndex, 10);
        } else if (currentUrl === this.url.prod.clientIndex){
            I.waitInUrl(this.url.prod.clientIndex)
        }
        I.see('Dashboard');
    }
}

module.exports = new ClientRegisterPage;
module.exports.ClientRegisterPage = ClientRegisterPage;