const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 30000,

    use: {

        trace: 'on',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    },

    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ]
});