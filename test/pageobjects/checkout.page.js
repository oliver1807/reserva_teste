class CheckoutPage {
    
    //Tela Inicial
    
    get lkHome () {
        return $('div[class*="pr0"]>header>a')
    }
    
    get qtdItemAvatar () {
        return $('div[class*="minicart"]')
    }    

    get menuMasculino () {
        return $('nav[class*="rsv"]>ul>div>li>a')
    }


    
    
    
    //Elementos produto carrossel:

    get prod3 () {
        return $('div[aria-label="3 of 20"]>div>section>a')
    }

    
    get textTamanho () {
        return $('div[class*="sizebay"]>div>button')
    }
    
    get btnAddCard () {
        return $('div[class*="product__add"]>div>h2>button')
    }

    get lerNumCart () {
        return $('span[class*="mini"]>span')
    }


    //Inspeções pdp:

    

    get lbVerCep () {
        return $('div[class*="postal"]>span>label[class*="cep"]')
    }

    get verTotal () {
        return $('div[class*="accord"]>table>tfoot>tr>td')
    }    

    get lkCepCart () {
        return $('div[class*="shipping-input"]>div>div>input')
    }

    get btnConfCep () {
        return $('div[class*="input--shi"]>div>div>div>div')
    }

    get lkEntrega () {
        return $('div[class*="shipping shipping"]>span')
    }    
    

    get aumItemCar () {
        return $('div[class*="flex un"]>button[class*="br--right"]')
    }

    get totalizador () {
        return $('div[class*="footer__dis"]>div[class*="total total"]')
    }

    get btnVerCart () {
        return $('div[class*="pa4"]>button[class*="vtex"]')
    }

    get btnClsPdp () {
        return $('div[class*="drawer-0"]>button')
    }

    get btnFinishCart() {
        return $('div[class="minicart-footer__area"]>a')
    }


    //Busca por produto filtro

    get cpBuscaFiltro () {
        return $('div[class*="vtex-input"]>input')
    }

    get opCalcaJeans () {
        return $('ol>li>a[href*="calça jeans"]')
    }

    get selCalcaCar () {
        return $('div[id*="gallery"]>div>section[class*="summary-2"]>a')
    }

    
    get opcaoCalcado () {
        return $('div>li[class*="list"]>a[href="/calcados"]')
    }

    get opCalcMasc () {
        return $('div[class*="categoria"]>img[alt="Masculino"]')
    }

    get selTenis () {
        return $('div[id*="gallery"]>div>section>a')
    }


    //inspeções de preenchimento do onboarding durante checkout:

    get cpInfoEmail () {
        return $('div[class*="client-email"]>input')
    }

    get btnCfEmail () {
        return $('button[id*="client-pre"]')
    }

    get cpFirstName () {
        return $('input[id*="client-first"]')
    }

    get cpLastName () {
        return $('input[id*="client-last"]')
    }    

    get cpCpf () {
        return $('input[id="client-document"]')
    }

    get cpPhone () {
        return $('input[id="client-phone"]')
    }

    get cpBirthday () {
        return $('input[id="client-birthday"]')
    }

    get btnConfUserData () {
        return $('p[class*="submit"]>button')
        
    }

    get inputCepCheckout () {
        return $('div[class*="add"]>p>input')
    }

    get shipInformation () {
        return $('div[class*="leanShipping"]>div')
    }

    get btnGoPay () {
        return $('p[class*="btn-go"]>button')
    }

    get btnFinishCheckout () {
        return $('div[class="box-step"]>p>button[class*="btn-success"]')
    }

    get addressSumary () {
        return $('div[class*="address-summary"]')
    }

    get inputShipNumber () {
        return $('p[class*="ship-number"]>input')
    }
    
    
    //Tela de pagamento
    
    get btnGoCheckout () {
        return $('div[class*="clearfix pull"]>span[class="btn-place-order-wrapper"]>a')
    }

    get btnPix () {
        return $('a[data-name="Pix"]')
    }

    get btnFinishPix () {
        return $('p[class*="payment-submit"]>button')
    }

    get pixStep1 () {
        return $('div[class*="pix-step1"]')
    }
    

    get cpInfPix () {
        return $('div[class="VTEX-PIX__container-info-description"]')
    }

    get mailCheckout () {
        return $('p[class="client-profile-email"]>span')
    }

    
    //Funções na Home:    

    async selProduto(){        
        await this.prod3.scrollIntoView()
        await this.prod3.click()        
    }

    async validarQtdAvatar(qtdatual) {        
        await this.qtdItemAvatar.waitForDisplayed()
        const qtdCar = this.qtdItemAvatar
        await expect(qtdCar).toHaveTextContaining(qtdatual)
    }

    async buscaProd(roupa) {
        await this.cpBuscaFiltro.waitForDisplayed()
        await this.cpBuscaFiltro.setValue(roupa)
    }

    async selCalcaJeans() {
        await this.opCalcaJeans.waitForDisplayed()
        await this.opCalcaJeans.click()
        await this.selCalcaCar.waitForDisplayed()
        await this.selCalcaCar.click()
    }

    async selTenisMasculino() {
        await this.opcaoCalcado.waitForDisplayed()        
        await this.opcaoCalcado.click()
        await this.opCalcMasc.waitForDisplayed()
        await this.opCalcMasc.click()
        await this.selTenis.waitForDisplayed()
        await this.selTenis.click()
    }

    
    
    
    // Funções PDP:
    
    async addCart(){        
        const lerTextTamanho = this.textTamanho
        expect(lerTextTamanho).toHaveTextContaining('Descubra seu tamanho')
        await this.btnAddCard.waitForClickable()        
        await this.btnAddCard.click()        
    }

    async verDetCart(){
        await this.btnVerCart.waitForClickable()
        await this.btnVerCart.click()
    }

    
    async valCepCar(cep) {
        const cepCarrinho = this.lbVerCep
        expect(cepCarrinho).toHaveTextContaining(cep)
    }   

    async aumentarQtdPdp() {                        
        await this.aumItemCar.waitForClickable()
        await this.aumItemCar.click()        
    }

    async fecharPdp() {
        await this.btnClsPdp.waitForClickable()
        await this.btnClsPdp.click()
    }


    /////////////////////////////////////////////////

    async goCheckout(){                                        
        const lerTotal = this.verTotal
        expect(lerTotal).toHaveTextContaining('Total')
        await this.btnGoCheckout.waitForClickable()        
        await this.btnGoCheckout.click()        
    }
    
    async checkoutPix() {                
        
        await this.btnPix.waitForClickable()
        await (await this.btnPix).click()        
        await this.pixStep1.waitForDisplayed()
        const textopix1 = this.pixStep1
        await expect(textopix1).toHaveTextContaining('Aperte em Finalizar compra para gerar o código QR')
        /* await this.btnFinishPix.waitForClickable()
        await this.btnFinishPix.click() */
        await this.btnFinishPix.waitForClickable()
        await this.btnFinishPix.click()
        await this.cpInfPix.waitForDisplayed()        
        const textopix2 = this.cpInfPix
        await expect(textopix2).toHaveTextContaining('Abra o app do seu banco no celular, escolha Pix e aponte a câmera para o código')        
    }

    async addCartOnboarding(resContCep) {
        
        const cep = ([
            '06726486',
            '13050010',            
            '11701390',
            '37026550',
            '28020307'
            ])
        
        await this.btnAddCard.waitForClickable()
        await this.btnAddCard.click()                  
        /* await this.lkCepCart.waitForDisplayed()
        await this.lkCepCart.scrollIntoView()
        await this.lkCepCart.setValue(cep[resContCep])
        await (await this.btnConfCep).click()
        await this.lkEntrega.waitForDisplayed() */
               
    }

    async seguirCheckout(mailUser){
        await this.btnGoCheckout.waitForClickable()
        await this.btnGoCheckout.click()
        await this.cpInfoEmail.waitForDisplayed()
        await this.cpInfoEmail.setValue(mailUser)
        await this.btnCfEmail.click()        
    }

    async onboardingClient(fstName,lstName,cpfUser,phoneUser,dayBirth,monthBirth,yearBirth,contCep,houseNumber,userMail){
        
        const cep = ([
            '06726486',
            '13050010',            
            '11701390',
            '37026550',
            '28020307'
            ])
        
        await this.cpFirstName.waitForDisplayed()
        await this.cpCpf.setValue(cpfUser)        
        await this.cpFirstName.setValue(fstName)
        await this.cpLastName.setValue(lstName)        
        await this.cpPhone.setValue(phoneUser)        
        await this.cpBirthday.setValue(dayBirth+'""'+monthBirth+'""'+yearBirth)
        await this.btnConfUserData.click()        
        await this.inputCepCheckout.setValue(cep[contCep])
        const textBtn1 = this.btnGoPay        
        await expect(textBtn1).toHaveTextContaining('IR PARA O PAGAMENTO')
        await this.shipInformation.waitForDisplayed()
        await this.inputShipNumber.waitForDisplayed()        
        await this.addressSumary.waitForDisplayed()
        await this.btnFinishCheckout.waitForClickable()     
        await this.inputShipNumber.setValue(houseNumber)   
        await this.btnFinishCheckout.click()  
        const textMail = this.mailCheckout
        await expect(textMail).toHaveTextContaining(userMail)                    
    }

    async clickPix(){
        await this.btnPix.waitForClickable()
        await this.btnPix.click()  
    }
    
    async fnzrCompraMult() {        
        await this.btnFinishCart.waitForClickable()
        await this.btnFinishCart.click()
        await this.btnGoCheckout.waitForClickable()
        await this.btnGoCheckout.click()
    }

    
}

module.exports = new CheckoutPage();