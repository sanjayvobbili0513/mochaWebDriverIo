describe('this is first test ', async function(){

    it('step1: Navigate to the url', async function (){
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(browser.getTitle());
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"));
        await browser.$("#username").setValue("rahulshettyAccadamy");
        await browser.pause(2000);
        // await browser.$("#username").clearValue();
        await browser.$("//input[@id='password']").setValue("this is the password")
        await browser.pause(1000);
        await browser.$("#signInBtn").click();
        await browser.waitForDisplayed()
    });
})