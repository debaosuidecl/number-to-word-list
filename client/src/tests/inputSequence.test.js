const puppeteer = require("puppeteer");
//End to End
describe("Tests for sequence input field", () => {
    let browser;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: ["--window-size=1920,1080"]
        })
    })

    afterAll(async () => {
        if (browser) {
            await browser.close()
        }
    })
    it("should not allow symbols and letters in the sequence input and delete one item", async () => {
        try {
            const page = await browser.newPage()
            await page.goto("http://localhost:3000")
            const inputSelector = `._Input_dv37t_2 input`;
            await page.waitForSelector(inputSelector);
            await page.type(inputSelector, "+-942eebbd")
            let actualInputValue = await page.evaluate((inputSelector) => { return document.querySelector(inputSelector).value }, inputSelector)
            expect(actualInputValue).toBe("942")
            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            actualInputValue = await page.evaluate((inputSelector) => { return document.querySelector(inputSelector).value }, inputSelector)
            expect(actualInputValue).toBe("9")
        } catch (error) {
            await browser.close()
        }

    }
    )





})