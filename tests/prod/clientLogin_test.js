const {
    basePage,
    accounts,
    clientLoginPage
} = inject();

Feature('prod client login').retry(2);

Scenario('PROD Тест авторизации с пустыми полями Login/Password', ({I}) => {
    clientLoginPage.loginEmptyFields(basePage.url.prod.clientLogin);
}).tag('prodClientLogin1');

Scenario('PROD Тест авторизации с пустым полем Login', ({I}) => {
    clientLoginPage.loginEmptyLoginField(
        basePage.url.prod.clientLogin,
        accounts.client.password);
}).tag('prodClientLogin2');

Scenario('PROD Тест авторизации с пустым полем Password', ({I}) => {
    clientLoginPage.loginEmptyPasswordField(
        basePage.url.prod.clientLogin,
        accounts.client.email);
}).tag('prodClientLogin3');

Scenario('PROD Тест авторизации с невалидным email', ({I}) => {
    clientLoginPage.loginIncorrectEmail(
        basePage.url.prod.clientLogin,
        basePage.data.incorrectData);
}).tag('prodClientLogin4');

Scenario('PROD Тест авторизации с незарегистрированым email', ({I}) => {
    clientLoginPage.loginUnregisteredEmail(
        basePage.url.prod.clientLogin,
        basePage.data.incorrectEmail,
        accounts.client.password);
}).tag('prodClientLogin5');

Scenario('PROD Тест кнопки forgot password', async ({I}) => {
    await clientLoginPage.clickForgotPasswordButton(basePage.url.prod.clientLogin);
}).tag('prodClientLogin6');

Scenario('PROD Тест авторизации пользователя с неактивным чекбоксом remember me', async ({I}) => {
    await clientLoginPage.loginUserWithRememberMe(
        basePage.url.prod.clientLogin,
        accounts.client.email,
        accounts.client.password);
}).tag('prodClientLogin7');



