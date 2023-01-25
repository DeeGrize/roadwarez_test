const {BasePage} = require("./basePage");
const {
    I,
    accounts,
    passwordResetRequest,
} = inject();

class ClientLoginPage extends BasePage {
    selectors = {
        rememberMeCheckBox: '//label[@for="loginform-rememberme"]',
        buttons: {
            loginButton: '//button[text()="Login"]',
            forgotPasswordButton: '//a[text()="Forgot password?"]'
        },

        fields: {
            emailField: '//input[@name="LoginForm[username]"]',
            passwordField: '//input[@name="LoginForm[password]"]',
        }
    }

    loginClient(url, clientEmail, clientPassword) {
        I.amOnPage(url)
        I.scrollTo(this.selectors.fields.emailField);
        I.moveCursorTo(this.selectors.fields.emailField);
        I.click(this.selectors.fields.emailField);
        I.fillField(this.selectors.fields.emailField, clientEmail)

        I.scrollTo(this.selectors.fields.passwordField);
        I.moveCursorTo(this.selectors.fields.passwordField);
        I.click(this.selectors.fields.passwordField);
        I.fillField(this.selectors.fields.passwordField, clientPassword);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton);
        I.click(this.selectors.buttons.loginButton);

        I.see("Dashboard")
    }

    loginEmptyFields(url) {
        I.amOnPage(url);
        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);
        I.see('Email cannot be blank.')
        I.see('Password cannot be blank.')
    }

    loginEmptyLoginField(url, clientPassword) {
        I.amOnPage(url);

        I.scrollTo(this.selectors.fields.passwordField);
        I.moveCursorTo(this.selectors.fields.passwordField)
        I.click(this.selectors.fields.passwordField);
        I.fillField(this.selectors.fields.passwordField, clientPassword);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);

        I.see('Email cannot be blank.');
        I.dontSee('Password cannot be blank.');
    }

    loginEmptyPasswordField(url, clientLogin) {
        I.amOnPage(url);

        I.scrollTo(this.selectors.fields.emailField);
        I.moveCursorTo(this.selectors.fields.emailField)
        I.click(this.selectors.fields.emailField);
        I.fillField(this.selectors.fields.emailField, clientLogin);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);

        I.see('Password cannot be blank.');
        I.dontSee('Email cannot be blank.');
    }

    loginIncorrectEmail(url, clientLogin) {
        I.amOnPage(url);

        I.scrollTo(this.selectors.fields.emailField);
        I.moveCursorTo(this.selectors.fields.emailField)
        I.click(this.selectors.fields.emailField);
        I.fillField(this.selectors.fields.emailField, clientLogin);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);

        I.see('Email is not a valid email address.');
    }

    loginUnregisteredEmail(url, clientLogin, clientPassword) {
        I.amOnPage(url);

        I.scrollTo(this.selectors.fields.emailField);
        I.moveCursorTo(this.selectors.fields.emailField)
        I.click(this.selectors.fields.emailField);
        I.fillField(this.selectors.fields.emailField, clientLogin,);

        I.scrollTo(this.selectors.fields.passwordField);
        I.moveCursorTo(this.selectors.fields.passwordField)
        I.click(this.selectors.fields.passwordField);
        I.fillField(this.selectors.fields.passwordField, clientPassword);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);

        I.see('Incorrect email or password.');
    }

    async clickForgotPasswordButton(url) {
        await I.amOnPage(url);
        await I.scrollTo(this.selectors.buttons.forgotPasswordButton);
        await I.moveCursorTo(this.selectors.buttons.forgotPasswordButton)
        await I.click(this.selectors.buttons.forgotPasswordButton);

        let currentUrl = await I.grabCurrentUrl();
        if (currentUrl === this.url.prod.passwordResetRequest) {
            await I.waitInUrl(this.url.prod.passwordResetRequest, 10);
            await I.see('Forgot your password?');
        } else if (currentUrl === this.url.dev.passwordResetRequest) {
            await I.waitInUrl(this.url.dev.passwordResetRequest);
            await I.see('Forgot your password?')
        }
    }

    loginUserWithRememberMe(url, clientLogin, clientPassword) {
        I.amOnPage(url);

        I.scrollTo(this.selectors.fields.emailField);
        I.moveCursorTo(this.selectors.fields.emailField)
        I.click(this.selectors.fields.emailField);
        I.fillField(this.selectors.fields.emailField, clientLogin,);

        I.scrollTo(this.selectors.fields.passwordField);
        I.moveCursorTo(this.selectors.fields.passwordField)
        I.click(this.selectors.fields.passwordField);
        I.fillField(this.selectors.fields.passwordField, clientPassword);

        I.scrollTo(this.selectors.rememberMeCheckBox);
        I.moveCursorTo(this.selectors.rememberMeCheckBox);
        I.uncheckOption(this.selectors.rememberMeCheckBox);
        I.dontSeeCheckboxIsChecked(this.selectors.rememberMeCheckBox);

        I.scrollTo(this.selectors.buttons.loginButton);
        I.moveCursorTo(this.selectors.buttons.loginButton)
        I.click(this.selectors.buttons.loginButton);
    }
}

module.exports = new ClientLoginPage;
module.exports.ClientLogin = ClientLoginPage;