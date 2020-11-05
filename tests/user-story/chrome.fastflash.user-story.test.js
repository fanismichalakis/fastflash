var fs = require('fs');
const url = 'http://localhost:8080'

const {By, Key} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

describe('fastflash renders', () => {
    beforeEach(() => {
        require('geckodriver');
        browser =  new webdriver.Builder().forBrowser('chrome').build()
    })

    afterEach(async () => {
        await browser.quit()
    })

    test('it renders', async () => {
        await browser.get(url)
        const title = await browser.getTitle()
        expect(title).toBe('client')
    }, 20000)


    test('card has been shown', async () => {
        await browser.get(url)
        await new Promise(r => setTimeout(r, 3000));
        const recto= await browser.findElement(By.id('card-details')).getText();
        await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 3000));
        const verso= await browser.findElement(By.id('card-details')).getText()
        const traduction=verso.split('\n')[1];
        expect(recto).toBe('dog');
        expect(traduction).toBe('chien');
    }, 30000)
    test('card has been flipped', async () => {
        await browser.get(url)
        await new Promise(r => setTimeout(r, 2000));
        await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 2000));
        await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 2000));
        const recto= await browser.findElement(By.id('card-details')).getText()
        expect(recto).toBe('cat');
    }, 30000)

})