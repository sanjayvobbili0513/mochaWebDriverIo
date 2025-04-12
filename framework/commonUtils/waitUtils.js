const waitUtils = function () {

    const sample = require("../../framework/sample.json");

    /**
     * @function sleepUntilTextVisible();
     * @example await waitUtils.sleepUntilTextVisible();
     */
    this.sleepUntilTextVisible = async function (locator, expectedText, sleepTime, errorMessage) {
        const elem = $(locator)
        await browser.waitUntil(async () => await elem.getText === expectedText, {
            timeout: sleepTime,
            timeoutMsg: errorMessage
        })
    };

    /**
     * @function sleepUntilClickable();
     * @description this is to explicitle wait until an element to be clickable.
     * @example waitUtils.sleepUntilClickable();
     */
    this.sleepUntilClickable = async function (locator, timeOut = sample.waits.short) {
        const elem = $(locator);
        await elem.waitForClickable(timeOut)
    };

    /**
     * @function sleepUntilDisplayed();
     * @description this is to explicitle wait until an element is displayed.
     * @example waitUtils.sleepUntilDisplayed();
     */
    this.sleepUntilDisplayed = async function (locator, timeOut = sample.waits.short) {
        const elem = $(locator);
        await elem.waitForDisplayed(timeOut);
    };

    /**
     * @function sleepUntilPresent();
     * @decription this is to wait explicitly until an element is present.
     * @example await waitUtils.sleepUntilPresent();
     */
    this.sleepUntilPresent = async function (locator, timeOut = sample.waits.short) {
        const elem = $(locator);
        await elem.waitForExist(timeOut);
    };
}
module.exports = new waitUtils();