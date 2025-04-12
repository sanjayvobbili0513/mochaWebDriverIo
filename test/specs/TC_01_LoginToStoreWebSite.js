const mainPage = require("../../framework/loginPage/mainPage.js");
const wait = require("../../framework/commonUtils/waitUtils.js");
const sample = require("../../framework/sample.json");
let url = sample.url.storeUrl;
let credentials = sample.credentials.storeUserCredentials;


describe("TC_01_LoginToStoreWebSite", async function(){

    it('Step1: Navigate to URL and enter credentials', async function () {
        await mainPage.loginToRealm(url,credentials,credentials);
        console.log(browser.getTitle());
        await expect(browser).toHaveTitle(sample.options.storeTitle);
    });
})