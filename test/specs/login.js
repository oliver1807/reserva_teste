const LoginPage = require('../pageobjects/login.page')

// npx wdio run wdio.conf.js

describe.skip('Logins gerais', () => {
    
    beforeEach(async () => {        
        await browser.reloadSession()
        await browser.maximizeWindow()
        await browser.url('https://www.usereserva.com/')        
        await LoginPage.acceptCookie()
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').waitForClickable()    
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').click()
    })    

    it('Login inicial', async () => {        
        await LoginPage.loginInicial(
            'charlie_chaplin1807@mailsac.com',
            'Ability*3'
            )
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').waitForClickable()    
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').click()    

        await LoginPage.valLogin(
            'Charlie!'
            )    
    })


})