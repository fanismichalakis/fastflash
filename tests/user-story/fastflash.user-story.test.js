var fs = require('fs');
const url = 'http://localhost:8080'

const {By, Key} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

describe('fastflash renders', () => {
    beforeEach(() => {
        require('geckodriver');
        browser =  new webdriver.Builder().forBrowser('firefox').build()
    })

    afterEach(async () => {
        await browser.quit()
    })

    test('it renders', async () => {
        await browser.get(url)
        const title = await browser.getTitle()
        expect(title).toBe('fastflash')
    }, 20000)

})