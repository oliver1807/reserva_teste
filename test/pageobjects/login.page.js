

class LoginPage {
    //Elementos login inicial:
    
    get btnAcceptCk () {
        return $('div[id="cookiescript_buttons"]>div')
    }

    get valHora () {
        return $('div[class*="count"]>div>span')
    }
    
    
    get avatarLogin () {
        return $('div[class*="vtex-butto"]>span>div>div')
    }

    get btnInsLogin () {
        return $('div[class*="options"]>ul>li>div[class*="emailPass"]>button')
    }

    get setLogin () {
        return $('div[class*="inputContainer"]>label>div>input')
    }

    get setPass () {
        return $('div[class*="ContainerPass"]>div>label>div>input')
    }

    get btnLogar () {
        return $('div[class*="sendButton"]>button')
    }

    get lkAccount () {
        return $('div[class*="mv4"]>a[href*="profile"]')
    }

    get userNmContent () {
        return $('div[class*="userName"]')
    }


    get cpLoginCheckout () {
        return $('div[class*="client-email"]>input')
    }

    get btnConfMail () {
        return $('div[class*="client-email"]>button')
    }

    get btnLembrete () {
        return $('div[class*="identified"]>button')
    }









    //Elementos login checkout:

    get lkLoginCheckout() {
        return $('div[class*="client"]>input')
    }


    async acceptCookie() {
        await this.btnAcceptCk.waitForClickable()
        await this.btnAcceptCk.click()
    }
    
    async loginInicial(loginUser,passUser){
        await this.avatarLogin.waitForDisplayed()                        
        await (await this.avatarLogin).click()
        await this.btnInsLogin.waitForClickable()
        await this.btnInsLogin.click()
        await this.setLogin.waitForDisplayed()
        await this.setLogin.setValue(loginUser)
        await this.setPass.setValue(passUser)
        await (await this.btnLogar).click()
        await this.btnLogar.waitForDisplayed({reverse:true})
        await this.avatarLogin.waitForDisplayed()                
    }

    async valLogin(name_login){                        
        await this.valHora.waitForDisplayed()
        await this.avatarLogin.waitForDisplayed()        
        await this.avatarLogin.click()        
        await this.lkAccount.waitForDisplayed()
        await this.lkAccount.click()
        await this.userNmContent.waitForDisplayed()
        const userNmLg = this.userNmContent        
        await expect(userNmLg).toHaveTextContaining(name_login)
    }


    async logarCheckout(login_previo){        
        await this.lkLoginCheckout.waitForDisplayed()
        await this.lkLoginCheckout.setValue(login_previo)
        await this.btnConfMail.click()
        await this.btnLembrete.waitForClickable()
        await this.btnLembrete.click()        
    }






}

module.exports = new LoginPage();
