
Feature: Verificar botões da tela de login

    Background: Acessar o site CWI
        Given acesso ao site CWI
        And eu acessar a pagina de login
        And acessa a pagina de cadastro



    @testefinal
    Scenario: Realizar cadastro com sucesso
        And informo um email
        And cofirmo email
        And informo uma senha
        And confirmo a senha
        When salvo o cadastro
        Then usuario e cadastrado com sucesso