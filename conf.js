exports.config = {

    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        'browserName': 'chrome',
        //'chromeOptions': {
        //    'args': ['--disable-extensions']
        //},
        'shardTestFiles': 'false',
        'maxInstances': '1'
    }],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    framework: 'jasmine2',
    restartBrowserBetweenTests: true,

    onPrepare: function() {

        browser.ignoreSynchronization=true;

        // var AllureReporter = require('jasmine-allure-reporter');
        // jasmine.getEnv().addReporter(new AllureReporter({
        //     resultsDir: 'allure-results'
        // }));

        // jasmine.getEnv().afterEach(function(done){
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     })
        // });
    },

    specs: [
        'test_exercise.js'
    ],

/*  suites: {

        smoke: ['./TestSuites/smoke/*.spec.js'],
        regression: ['./TestSuites/regression/*.spec.js'],
        selected: [],
    },
*/

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};