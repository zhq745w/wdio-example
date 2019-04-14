exports.config = {
  runner: 'local',
  specs: [
    './app/specs/*.js'
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--headless',
        '-window-size=1200,800'
      ]
    }
  }],
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://github.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-ui-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }
  ]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  // Хуки.
  afterTest: () => {
    browser.takeScreenshot()
  }
}
