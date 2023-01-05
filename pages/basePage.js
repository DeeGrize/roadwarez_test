const {I, accounts} = inject();


class BasePage {
    baseSelectors = {
        fields: {},
        buttons: {},
        footer: {},

    }

    url = {
        dev: {
            clientLogin: accounts.domain.prod + '/client/login',
            passwordResetRequest: accounts.domain.prod + '/client/password-reset-request',
            clientRegister: accounts.domain.dev + '/client/register',
        },
        prod: {
            clientLogin: accounts.domain.prod + '/client/login',
            passwordResetRequest: accounts.domain.prod + '/client/password-reset-request',
            clientRegister: accounts.domain.prod + '/client/register',
        },
    }

    data = {
        incorrectData: 'abracadabra',
        incorrectEmail: 'abracadabra@mail.com',
        incorrectPassword: 'abracadabra',
    }
}

module.exports = new BasePage;
module.exports.BasePage = BasePage;