const {BasePage} = require("./basePage");
const {
    I,
    accounts,
    passwordResetRequest,
} = inject();

class ClientLoginPage extends BasePage {
    selectors = {
        buttons: {},
        fields: {},
    }
}

module.exports = new ClientLoginPage;
module.exports.ClientLogin = ClientLoginPage;