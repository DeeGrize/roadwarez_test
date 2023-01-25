const {I, accounts} = inject();


class BasePage {
    baseSelectors = {

        addNewAdviserModal: '//div[@id="advertiser-modal-new"]//div[@class="modal-content"]',

        fields: {
            modalAdvertiserName: '//input[@placeholder="Advertiser Name"]',
            modalCitiesOfOperation: '//input[@placeholder="Cities of operation"]'
        },
        buttons: {
            logo: '//a[@class="logo_menu"]',
            createNewCampaignButton: '//button[@class="btn btn-primary btn-block"]',
            dashboardButton: '//span[text()="Dashboard"]',
            bagListButton: '//span[text()="Bag List"]',
            activeCampaignsButton: '//span[text()="Active Campaigns"]',
            addNewAdvertiserButton: '//span[text()="add new advertiser"]',
            modalButtonCreate: '//button[text()="Create"]'
        },
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

    clickAddNewAdvertiserButton() {
        I.scrollTo(this.baseSelectors.buttons.addNewAdvertiserButton);
        I.moveCursorTo(this.baseSelectors.buttons.addNewAdvertiserButton);
        I.click(this.baseSelectors.buttons.addNewAdvertiserButton);
        I.seeElement(this.baseSelectors.addNewAdviserModal);
    }

    clickModalButtonCreate() {
        I.scrollTo(this.baseSelectors.buttons.modalButtonCreate);
        I.moveCursorTo(this.baseSelectors.buttons.modalButtonCreate);
        I.click(this.baseSelectors.buttons.modalButtonCreate);
    }

    enterModalAdvertiserName(advertiserName) {
        I.scrollTo(this.baseSelectors.fields.modalAdvertiserName);
        I.moveCursorTo(this.baseSelectors.fields.modalAdvertiserName);
        I.click(this.baseSelectors.fields.modalAdvertiserName);
        I.fillField(this.baseSelectors.fields.modalAdvertiserName, advertiserName)
    }

    enterModalCitiesOfOperation(city) {
        I.scrollTo(this.baseSelectors.fields.modalCitiesOfOperation);
        I.moveCursorTo(this.baseSelectors.fields.modalCitiesOfOperation);
        I.click(this.baseSelectors.fields.modalCitiesOfOperation);
        I.fillField(this.baseSelectors.fields.modalCitiesOfOperation, city)
    }

    findNewAdvertiser(advertiserName) {
        I.click(advertiserName);
        I.see("My campaigns");
        I.see("No active campaign");
        I.see("Let’s make some noise and create a new campaign");
    }

}

module.exports = new BasePage;
module.exports.BasePage = BasePage;