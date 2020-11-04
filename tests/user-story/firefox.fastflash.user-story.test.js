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
        expect(title).toBe('client')
    }, 20000)

    test('first card is here', async () => {
        await browser.get(url)
        const card= await browser.findElement(By.id('card-details')).getText();
        console.log(card);
        expect(card).toBe('manger');
    }, 15000)
    test('card has been shown', async () => {
        await browser.get(url)
        const recto= await browser.findElement(By.id('card-details')).click();
        const verso= await browser.findElement(By.id('card-details')).getText()
        const traduction=verso.split('\n')[1];
        expect(traduction).toBe('eat');
    }, 15000)
    test('card has been flipped', async () => {
        await browser.get(url)
        const recto= await browser.findElement(By.id('card-details')).click();
        const verso= await browser.findElement(By.id('card-details')).click();
        const new_card=await browser.findElement(By.id('card-details')).getText();
        expect(new_card).toBe('bouger');
    }, 15000)
})