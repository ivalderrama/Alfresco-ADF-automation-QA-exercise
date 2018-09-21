
describe("Test Exercise", function() {

    afterEach(function () {
        browser.sleep(3000);
    });

    var fs = require('fs');
    var logger = fs.createWriteStream('testExerciseLog.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
    });

    var myDate = new Date().getTime();


    it("Perform Test", function(){

        browser.ignoreSynchronization=true;

        browser.get("http://qaexercise.envalfresco.com/settings");
        browser.sleep(1000);

        // Selecting ECM provider
        element(by.className("mat-select-arrow")).click();
        element(by.id("mat-option-1")).click();

        // Click Apply
        element(by.id("host-button")).click();

        //Navigate to link
        browser.get("http://qaexercise.envalfresco.com/login");
        browser.sleep(1000);

        //Enter username and password
        element(by.id("username")).sendKeys("guest@example.com");
        element(by.id("password")).sendKeys("Password");
        element(by.id("login-button")).click();

        // Navigate to a link
        browser.get("http://qaexercise.envalfresco.com/files");
        browser.sleep(1000);

        // Create a folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.id('adf-folder-name-input')).sendKeys('test_folder'+myDate);
        element(by.id('adf-folder-create-button')).click();
        browser.sleep(1000);

        // Create the same folder
        element(by.css('#document-list-container > adf-upload-drag-area > div > adf-toolbar > mat-toolbar > div > button:nth-child(2)')).click();
        element(by.id('adf-folder-name-input')).sendKeys('test_folder'+myDate);
        element(by.id('adf-folder-create-button')).click();

        // Assert that the overlay still exists
        var myElement = element(by.className('cdk-overlay-pane'));
        expect(myElement.isPresent()).toBeTruthy();

        // element(by.id('cdk-overlay-35')).getText().then(function(text) {
        //     console.log(text);
        //     expect(text).toContain("There's already a folder with this name. Try a different name.");
        //     logger.write(text);
        //     logger.end();
        // });

    });
});
