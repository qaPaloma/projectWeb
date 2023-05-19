Feature('Login');

//Dado que o usuário esteja na tela de inicial do sistema
//E acesse a tela de login
//Quando informar os dados para logar
//Então deve ser apresentado a tela de usuário logado

Scenario('Login com sucesso', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'palomarodrigues.ds@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
    I.click('.swal2-actions')

}).tag('@loginSuccess')

//Dado que o usuário esteja na tela de inicial do sistema
//E acesse a tela de login
//Quando o usuário digitar apenas o E-mail para logar
//Então deve ser apresentada a mensagem “Senha inválida.”

Scenario('Tentando Logar digitando apenas o e-mail', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'paloma@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}).tag('@loginJustEmail')

//Dado que o usuário esteja na tela de inicial do sistema
//E acesse a tela de login
//Quando clicar em “Login” sem digitar usuário e senha
//Então deve ser apresentada a mensagem “E-mail inválido.”

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('@loginEmpty')

//Dado que o usuário esteja na tela de inicial do sistema
//E acesse a tela de login
//Quando o usuário digitar apenas a Senha para logar
//Então deve ser apresentada a mensagem “E-mail inválido.”

Scenario('Tentando logar digitando apenas a senha', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('@loginJustPassword')