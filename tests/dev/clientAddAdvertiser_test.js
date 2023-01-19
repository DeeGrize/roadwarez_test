const {
    basePage,
    accounts,
    clientRegisterPage,
} = inject();

Feature('dev client add advertiser').retry(2);

Before(async ({I}) => {

    // Создаем нового клиента
    I.amOnPage(basePage.url.dev.clientRegister);

    let email = basePage.getCurrentDate(accounts.newClient.email);
    let password = accounts.newClient.password;
    let firstName = basePage.getCurrentDate(accounts.newClient.firstName);
    let lastName = basePage.getCurrentDate(accounts.newClient.lastName);
    let company = basePage.getCurrentDate(accounts.newClient.company);

    // Заполняем поле email
    clientRegisterPage.enterEmail(email);

    // Заполняем поле password
    clientRegisterPage.enterPassword(password);

    // Заполняем поле confirm password
    clientRegisterPage.enterConfirmPassword(password);

    // Заполняем поле first name
    clientRegisterPage.enterFirstName(firstName);

    // Заполняем поле last name
    clientRegisterPage.enterLastName(lastName);

    // Заполняем поле company
    clientRegisterPage.enterCompany(company);

    // Нажимаем на кнопку Sign Up for free
    await clientRegisterPage.clickSignUpForFreeButton();

    // Нажимаем на кнопку add new advertiser
    basePage.clickAddNewAdvertiserButton();

});

Scenario('DEV Тест добавление нового advertiser c пустыми полями', async ({I}) => {

    // Нажимаем на кнопку Create в окне добавления advertiser с пустыми полями
    basePage.clickModalButtonCreate();
    I.see("Name cannot be blank.");
    I.see("Cities of operation cannot be blank.")

}).tag('devClientAddAdvertiser1');

Scenario('DEV Тест добавление нового advertiser c пустым полем Cities of operation', async ({I}) => {

    // Создаем нового Advertiser
    let AdvertiserName = basePage.getCurrentDate(accounts.newAdvertiser.name);

    // Заполняем поле Advertiser Name
    basePage.enterModalAdvertiserName(AdvertiserName);

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();
    I.dontSee("Name cannot be blank.")
    I.see("Cities of operation cannot be blank.")
}).tag('devClientAddAdvertiser2');

Scenario('DEV Тест добавление нового advertiser c пустым полем Name', async ({I}) => {

    // Заполняем поле Cities of operation
    basePage.enterModalCitiesOfOperation(accounts.newAdvertiser.citiesOfOperation);
    I.pressKey('Enter');

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();
    I.see("Name cannot be blank.");
    I.dontSee("Cities of operation cannot be blank.");

}).tag('devClientAddAdvertiser3');