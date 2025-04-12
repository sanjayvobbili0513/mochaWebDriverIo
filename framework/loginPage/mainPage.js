const mainPage = function () {
    const sample = require("../../framework/sample.json")

    /**
     * this is for selectors for main page
     */
    this.selectors = {
        enterCredentials: value => `//input[@name='${value}']`,
        signIn: "//button[contains(@class,'oxd-button')]",

    };

    /**
     * @function credentialsEnter();
     * @example mainPage.credentialsEnter();
     */
    this.credentialsEnter = async function (value, text) {
        const elem = $(this.selectors.enterCredentials(value));
        await elem.waitForDisplayed();
        await elem.clearValue();
        await elem.setValue(text);
    };

    /**
     * @function clickOnLoginButton();
     * @example mainPage.clickOnLoginButton();
     */
    this.clickOnLoginButton = async function () {
        const elem = $(this.selectors.signIn);
        await elem.waitForDisplayed();
        await elem.click();
    };

    /**
     * @function loginToUser();
     * @example mainPage.loginToUser();
     */
    this.loginToUser= async function (url, userId, passKey) {
        await browser.url(url);
        // await browser.maximizeWindow();
        // await browser.pause(sample.waits.short);
        this.credentialsEnter("username",userId);
        // await browser.pause(10000);
        this.credentialsEnter("password", passKey);
        // await browser.pause(10000);
        this.clickOnLoginButton();
    };

}
module.exports = new mainPage();