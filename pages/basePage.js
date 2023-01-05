const {I, accounts} = inject();


class BasePage {
    baseSelectors = {
        fields: {},
        buttons: {},
        footer: {},

    }

    url = {
        dev: {
            clientLogin: accounts.domain.dev + '/client/login',
            passwordResetRequest: accounts.domain.dev + '/client/password-reset-request',
            clientRegister: accounts.domain.dev + '/client/register',
            clientIndex: accounts.domain.dev + '/client/index',
        },
        prod: {
            clientLogin: accounts.domain.prod + '/client/login',
            passwordResetRequest: accounts.domain.prod + '/client/password-reset-request',
            clientRegister: accounts.domain.prod + '/client/register',
            clientIndex: accounts.domain.prod + '/client/index',
        },
    }

    data = {
        incorrectData: 'abracadabra',
        incorrectEmail: 'abracadabra@mail.com',
        incorrectPassword: 'abracadabra',
    }

    getCurrentDate(userInfo) {
        function currentData(number) {
            let data = number;
            if (data < 10) {
                data = '0' + data;
            }
            return data;
        }

        let date = currentData(new Date().getDate()) + ''
            + currentData((new Date().getMonth() + 1)) + '' +
            new Date().getFullYear() + '' +
            currentData(new Date().getHours()) + '' +
            currentData(new Date().getMinutes()) + '' +
            setTimeout(function () {
                new Date().getSeconds()
            }, 1000);
        if (userInfo.includes('@')) {
            let arr = userInfo.split('@');
            return arr[0] + '+' + date + '@' + arr[1];
        }
        return userInfo + date;
    }

}

module.exports = new BasePage;
module.exports.BasePage = BasePage;