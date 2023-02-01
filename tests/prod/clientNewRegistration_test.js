const {
    basePage,
    accounts,
    clientRegisterPage,
} = inject();

Feature('prod client Registration').retry(2);

Scenario('PROD Тест регистрации нового клиента', async ({I}) => {
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
    clientRegisterPage.clickSignUpForFreeButton();


}).tag('prodClientRegistration');