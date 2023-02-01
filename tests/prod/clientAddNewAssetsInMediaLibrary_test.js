const {
    basePage,
    accounts,
    clientRegisterPage,
    clientLoginPage,
    clientAdvertiserPage,
} = inject();

Feature('prod client add new assets in media library');

Scenario('PROD Тест кнопки + Upload new asset', {retries: 2}, async ({I}) => {
    // Создаем нового клиента
    I.amOnPage(basePage.url.prod.clientRegister);

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

    // Переходим на вкладку Media Library
    clientAdvertiserPage.clickMediaLibraryButton();

    // Нажимаем на кнопку + Upload new asset
    clientAdvertiserPage.clickNewAssetButton();

    // Загружаем новый assets
    clientAdvertiserPage.attachAndUploadAssets();

}).tag('prodAddNewAssetsInMediaLibrary1');