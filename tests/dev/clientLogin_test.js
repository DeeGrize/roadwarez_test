const {
    basePage,
    accounts,
    clientLoginPage
} = inject();

Feature('dev client login').retry(2);

Scenario('DEV Тест авторизации с пустыми полями Login/Password', ({I}) => {
    clientLoginPage.loginEmptyFields(basePage.url.dev.clientLogin);
}).tag('devClientLogin1');

Scenario('DEV Тест авторизации с пустым полем Login', ({I}) => {
    clientLoginPage.loginEmptyLoginField(
        basePage.url.dev.clientLogin,
        accounts.client.password);
}).tag('devClientLogin2');

Scenario('DEV Тест авторизации с пустым полем Password', ({I}) => {
    clientLoginPage.loginEmptyPasswordField(
        basePage.url.dev.clientLogin,
        accounts.client.email);
}).tag('devClientLogin3');

Scenario('DEV Тест авторизации с невалидным email', ({I}) => {
    clientLoginPage.loginIncorrectEmail(
        basePage.url.dev.clientLogin,
        basePage.data.incorrectData);
}).tag('devClientLogin4');

Scenario('DEV Тест авторизации с незарегистрированым email', ({I}) => {
    clientLoginPage.loginUnregisteredEmail(
        basePage.url.dev.clientLogin,
        basePage.data.incorrectEmail,
        accounts.client.password);
}).tag('devClientLogin5');

Scenario('DEV Тест кнопки forgot password', async ({I}) => {
    await clientLoginPage.clickForgotPasswordButton(basePage.url.dev.clientLogin);
}).tag('devClientLogin6');

Scenario('DEV Тест авторизации пользователя с неактивным чекбоксом remember me', async ({I}) => {
    await clientLoginPage.loginUserWithRememberMe(
        basePage.url.dev.clientLogin,
        accounts.client.email,
        accounts.client.password);
}).tag('devClientLogin7');



