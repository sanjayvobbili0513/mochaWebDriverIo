const mainPage = require("../../framework/loginPage/mainPage.js");
const wait = require("../../framework/commonUtils/waitUtils.js");
const dashBoard = require("../../framework/loginPage/dashBoard.js");
const sample = require("../../framework/sample.json");
const assert = require('chai').assert;
let url = sample.url.storeUrl;
let credentials = sample.credentials.storeUserCredentials;

describe('TC_03_AddProductToCart', async function() {

    it('Step1: Login to store',async function(){
        await mainPage.loginToRealm(url,credentials,credentials);
        console.log(browser.getTitle());
        await expect(browser).toHaveTitle(sample.options.storeTitle);
    });

    it('Step2: Select Product and click on add to cart', async function(){
       const assOne =  await $(dashBoard.selectors.productsSelect("Iphone")).getText();
       console.log(assOne);
       await browser.pause(5000);
       await dashBoard.selectProduct("Iphone");
       await $(dashBoard.selectors.cartAdd).waitForClickable();
       const assTwo = await $("h2").getText();
       console.log(assTwo)
       await assert.equal(assOne,assTwo);
       await dashBoard.addToCart();
    })
})