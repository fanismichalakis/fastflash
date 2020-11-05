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
        await new Promise(r => setTimeout(r, 5000));
        const card= await browser.findElement(By.id('card-details'))
        const cardText = await card.getText();
        expect(cardText).toBe('dog')
    }, 25000)

    test('card has been turned', async () => {
        await browser.get(url)
        await new Promise(r => setTimeout(r, 5000));
        const recto= await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 5000));
        const verso= await browser.findElement(By.id('card-details')).getText()
        const traduction=verso.split('\n')[1];
        expect(traduction).toBe('chien');
    }, 25000)
    test('card has been changed', async () => {
        await browser.get(url)
        await new Promise(r => setTimeout(r, 5000));
        const recto= await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 5000));
        const verso= await browser.findElement(By.id('card-details')).click();
        await new Promise(r => setTimeout(r, 5000));
        const new_card=await browser.findElement(By.id('card-details')).getText();
        expect(new_card).toBe('cat');
    }, 25000)

    /*test('card has been shown', async () => {
        await browser.get(url)

        const recto= await browser.findElement(By.css('card')).getText();
        await browser.findElement(findElement(By.css('card'))).click();
        const verso= await browser.findElement(findElement(By.css('card'))).getText()
        const traduction=verso.split('\n')[1];
        if(recto=="dog"){
            //expect(traduction).toBe('chien');
        }
        else{
            expect(traduction).toBe('dog');
        }



    })*/
})