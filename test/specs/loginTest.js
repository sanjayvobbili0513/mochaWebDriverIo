const mainPage = require("../../framework/loginPage/mainPage.js");
const wait = require("../../framework/commonUtils/waitUtils.js");
const sample = require("../../framework/sample.json");
let url = sample.url.orangeUrl;
let userName = sample.credentials.orangeUserId;
let password = sample.credentials.orangePassWord;

describe("Login in to Rahul Shetty Acadamy url", async function(){
    it('Step1: Navigate to Url and enter Credentials', async function (){
        await mainPage.loginToUser(url,userName,password);
        await browser.pause(10000);
    });
    it('step2: check some thing', async function () {
        const elem = $("//span[contains(text(),'')]");
        await elem.waitForDisplayed();
        let text =await browser.elem.getText();
        console.log(text);
        await wait.sleepUntilTextVisible($("#idvalue"), "something special", sample.waits.medium,"this is to send message in the error log");
    })
})