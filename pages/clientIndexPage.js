const {BasePage} = require("./basePage");
const {I, accounts} = inject();

class ClientIndexPage extends BasePage {
    selectors = {
        buttons: {

        }
    }

}

module.exports = new ClientIndexPage;
module.exports.ClientIndexPage = ClientIndexPage;