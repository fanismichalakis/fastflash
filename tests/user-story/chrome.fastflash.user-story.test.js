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



    })

})