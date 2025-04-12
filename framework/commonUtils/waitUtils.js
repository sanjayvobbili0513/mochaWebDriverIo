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
}
module.exports = new waitUtils();