const {
    basePage,
    accounts,
    clientLogin
} = inject();

Feature('prod client login').retry();

Scenario('PROD Тест авторизации с пустыми полями Login/Password', ({I}) => {
    clientLogin.loginEmptyFields(basePage.url.prod.clientLogin);
}).tag('prodClientLogin1');

Scenario('PROD Тест авторизации с пустым полем Login', ({I}) => {
    clientLogin.loginEmptyLoginField(
        basePage.url.prod.clientLogin,
        accounts.client.password);
}).tag('prodClientLogin2');

Scenario('PROD Тест авторизации с пустым полем Password', ({I}) => {
    clientLogin.loginEmptyPasswordField(
        basePage.url.prod.clientLogin,
        accounts.client.login);
}).tag('prodClientLogin3');

Scenario('PROD Тест авторизации с невалидным email', ({I}) => {
    clientLogin.loginIncorrectEmail(
        basePage.url.prod.clientLogin,
        basePage.data.incorrectData);
}).tag('prodClientLogin4');

Scenario('PROD Тест авторизации с незарегистрированым email', ({I}) => {
    clientLogin.loginUnregisteredEmail(
        basePage.url.prod.clientLogin,
        basePage.data.incorrectEmail,
        accounts.client.password);
}).tag('prodClientLogin5');

Scenario('PROD Тест кнопки forgot password', async ({I}) => {
    await clientLogin.clickForgotPasswordButton(basePage.url.prod.clientLogin);
}).tag('prodClientLogin6');

Scenario('PROD Тест авторизации пользователя с неактивным чекбоксом remember me', async ({I}) => {
    await clientLogin.loginUserWithRememberMe(
        basePage.url.prod.clientLogin,
        accounts.client.login,
        accounts.client.password);
}).tag('prodClientLogin7');



