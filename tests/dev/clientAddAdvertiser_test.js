const {
    basePage,
    accounts,
    clientRegisterPage,
    clientLoginPage,
} = inject();

Feature('dev client add advertiser');

Scenario('DEV Тест добавление нового advertiser c пустыми полями', {retries: 2}, async ({I}) => {
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

    // Нажимаем на кнопку Create в окне добавления advertiser с пустыми полями
    basePage.clickModalButtonCreate();
    I.see("Name cannot be blank.");
    I.see("Cities of operation cannot be blank.")

}).tag('devClientAddAdvertiser1');

Scenario('DEV Тест добавление нового advertiser c пустым полем Cities of operation', {retries: 2}, async ({I}) => {
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

    // Создаем нового Advertiser
    let AdvertiserName = basePage.getCurrentDate(accounts.newAdvertiser.name);

    // Заполняем поле Advertiser Name
    basePage.enterModalAdvertiserName(AdvertiserName);

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();
    I.dontSee("Name cannot be blank.")
    I.see("Cities of operation cannot be blank.")
}).tag('devClientAddAdvertiser2');

Scenario('DEV Тест добавление нового advertiser c пустым полем Name', {retries: 2}, async ({I}) => {
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

    // Заполняем поле Cities of operation
    basePage.enterModalCitiesOfOperation(accounts.newAdvertiser.citiesOfOperation);
    I.pressKey('Enter');

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();
    I.see("Name cannot be blank.");
    I.dontSee("Cities of operation cannot be blank.");

}).tag('devClientAddAdvertiser3');

Scenario('DEV Тест добавление нового Advertiser', {retries: 2}, async ({I}) => {
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

    // Создаем нового Advertiser
    let AdvertiserName = basePage.getCurrentDate(accounts.newAdvertiser.name);

    // Заполняем поле Advertiser Name
    basePage.enterModalAdvertiserName(AdvertiserName);

    // Заполняем поле Cities of operation
    basePage.enterModalCitiesOfOperation(accounts.newAdvertiser.citiesOfOperation);
    I.pressKey('Enter');

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();

    // Находим нового Advertiser и открываем его
    basePage.findNewAdvertiser(AdvertiserName);

}).tag('devClientAddAdvertiser4');

Scenario('DEV Тест добавление нового Advertiser у старого клиента', {retries: 0}, async ({I}) => {
    // Авторизаци старого клиента
    clientLoginPage.loginClient(
        basePage.url.dev.clientLogin,
        accounts.client.email,
        accounts.client.password
    );

    // Создаем нового Advertiser
    let AdvertiserName = basePage.getCurrentDate(accounts.newAdvertiser.name);

    // Нажимаем на кнопку add new advertiser
    basePage.clickAddNewAdvertiserButton();

    // Заполняем поле Advertiser Name
    basePage.enterModalAdvertiserName(AdvertiserName);

    // Заполняем поле Cities of operation
    basePage.enterModalCitiesOfOperation(accounts.newAdvertiser.citiesOfOperation);
    I.pressKey('Enter');

    // Нажимаем на кнопку Create
    basePage.clickModalButtonCreate();

    // Находим нового Advertiser и открываем его
    basePage.findNewAdvertiser(AdvertiserName);

    I.wait(3);
}).tag('devClientAddAdvertiser5');