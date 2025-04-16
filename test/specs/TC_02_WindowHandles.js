const waitUtils = require("../../framework/commonUtils/waitUtils");
const sample = require("../../framework/sample.json");

describe('TC_02_WindowHandles.js', async function () {
    
    it("Step1: Navigate to url", async function () {
        await browser.url(sample.url.rahulShettyLoginPage);
        browser.pause(sample.waits.veryshort);
    });

    it('Step2: click on the link to another window', async function () {
        await $("//a[@class='blinkingText']").click();
    });

    it('Step3: window handling and performing actions', async function () {
        const windows = await browser.getWindowHandles();
        console.log(windows);
        await browser.pause(5000);
        await browser.switchToWindow(windows[1]);
        await browser.pause(5000);
        console.log(await $("h1").getText());
        await browser.closeWindow();
        await browser.switchToWindow(windows[0]);
        console.log(await browser.getTitle());
    })
})