const {BasePage} = require("./basePage");
const {I, accounts} = inject();

class PasswordResetRequestPage extends BasePage {
    selectors = {
        buttons: {
            backButton: '//a[text()="Back"]'
        }
    }

}

module.exports = new PasswordResetRequestPage;
module.exports.PasswordResetRequest = PasswordResetRequestPage;