const {
    basePage,
    accounts,
    clientRegisterPage,
} = inject();

Feature('prod client Registration').retry(2);

Scenario('PROD Тест регистрации нового клиента', async ({I}) => {
    I.amOnPage(basePage.url.prod.clientRegister);

    let email = basePage.getCurrentDate(accounts.client.email);
    let password = accounts.client.password;
    let firstName = basePage.getCurrentDate(accounts.client.firstName);
    let lastName = basePage.getCurrentDate(accounts.client.lastName);
    let company = basePage.getCurrentDate(accounts.client.company);

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