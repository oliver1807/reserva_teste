const { faker } = require('@faker-js/faker')
const { generate }  = require('gerador-validador-cpf')
const LoginPage = require('../pageobjects/login.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const checkoutPage = require('../pageobjects/checkout.page')



describe('Checkout Geral', () => {
    
    beforeEach(async () => {
        await browser.reloadSession()
        await browser.maximizeWindow()
        await browser.url('https://www.usereserva.com/')        
        await LoginPage.acceptCookie()        
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').waitForClickable()    
        await $('div[class="bGGcZJZR7IsEsQjTbspD-html-close-button"]').click()
    })

    it.skip('Checkout com login inicial', async () => {        
        await LoginPage.loginInicial(
            'charlie_chaplin1807@mailsac.com',
            'Ability*3'
            )         
        await CheckoutPage.selProduto()        
        await CheckoutPage.addCart()
        await CheckoutPage.valCepCar('53020-010')
        await CheckoutPage.finishCart()
        await CheckoutPage.goCheckout()
        await CheckoutPage.clickPix()
        await CheckoutPage.checkoutPix()
    })

    it.only('Checkout com login no final', async () => {
        await CheckoutPage.selProduto()
        await CheckoutPage.addCart()  
        await CheckoutPage.verDetCart()          
        await CheckoutPage.aumentarQtdPdp()              
        await CheckoutPage.fecharPdp()      
        await CheckoutPage.validarQtdAvatar(
            "2"
            )
              
        await CheckoutPage.buscaProd(
            "calça"
            )        
        await CheckoutPage.selCalcaJeans()
        await CheckoutPage.addCart()
        await CheckoutPage.validarQtdAvatar(
            "3"
            )                     
        await CheckoutPage.selTenisMasculino()
        await CheckoutPage.addCart()
        await CheckoutPage.validarQtdAvatar(
            "4"
            )  
        await CheckoutPage.verDetCart()
        await CheckoutPage.fnzrCompraMult()
        await LoginPage.logarCheckout(
            'charlie_chaplin1807@mailsac.com'            
        )
        await CheckoutPage.clickPix()
        await CheckoutPage.checkoutPix()        
    })
})

