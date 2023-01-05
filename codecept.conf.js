exports.config = {
    tests: 'tests/*_test.js',
    output: './output',
    helpers: {
        Playwright: {
            show: true,
            restart: true,
            browser: 'chromium',
            windowSize: '1440x900',
            waitForNavigation: 'networkidle0',
            waitForAction: 1000,
            video: true,
            keepVideoForPassedTests: true,
        },
        FileSystem: {},
    },

    multiple: {
        combo: {
            browsers: [
                {browser: 'firefox'},
                {browser: 'webkit'},
                {browser: 'chromium'}
            ]
        }
    },

    include: {
        I: './steps_file.js',
        accounts: './accounts.json',
        basePage: './pages/basePage.js',
        clientLogin: './pages/clientLoginPage.js',
        passwordResetRequest: './pages/passwordResetRequestPage.js'
    },
    bootstrap: null,
    name: 'roadwarez_test',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
    }
}