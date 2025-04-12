const mainPage = function () {
    const sample = require("../../framework/sample.json");
    const wait = require("../../framework/commonUtils/waitUtils.js");

    /**
     * this is for selectors for main page
     */
    this.selectors = {
        clickMenuOptions: value => `//a[@class='nav-link'] [contains(text(),'${value}')]`,
        userName: "#loginusername",
        passWord: "#loginpassword",
        loginClick: "//button[contains(text(),'Log in')]",
        welcomeLink:"#nameofuser",

    };

    /**
     * @function dashBoardMenu();
     * @description select any link on dashboard page.
     * @example mainPage.dashBoardMenu();
     */
    this.dashBoardMenu = async function (value) {
        const elem = $(this.selectors.clickMenuOptions(value));
        await elem.waitForDisplayed();
        await elem.click();
    };

    /**
     * @function enterUserName();
     * @description enter user name.
     * @example mainPage.enterUserName();
     */
    this.enterUserName = async function (userId) {
        const elem = $(this.selectors.userName);
        await elem.setValue(userId);
        await elem.clearValue(userId);
        await elem.setValue(userId);
    };

    /**
     * @function enterPassword();
     * @description enter password.
     * @example mainPage.enterPassword();
     */
    this.enterPassword = async function (key) {
        const elem = $(this.selectors.passWord);
        await elem.setValue(key);
        await elem.clearValue(key);
        await elem.setValue(key);
    };

    /**
     * @function clickSignIn();
     * @description click on login button.
     * @example mainPage.clickSignIn();
     */
    this.clickSignIn = async function () {
        const elem = $(this.selectors.loginClick);
        await elem.click();
    };

    /**
     * @function loginToRealm();
     * @description enterCredentials in login page.
     * @example await mainPage.loginToRealm();
     */
    this.loginToRealm = async function (url, id, pass) {
        await browser.url(url);
        await browser.maximizeWindow();
        await this.dashBoardMenu(sample.options.login);
        if (await $(this.selectors.userName).isExisting()) {
            await browser.pause(1000);
            this.enterUserName(id);
        } else {
            await this.selectors.userName.waitForClickable();
            await this.enterUserName(id);
        }
        await this.enterPassword(pass);
        await this.clickSignIn();
        await $(this.selectors.welcomeLink).waitForDisplayed();
        var message = await $(this.selectors.welcomeLink).getText();
        console.log(message);
    };

}
module.exports = new mainPage();