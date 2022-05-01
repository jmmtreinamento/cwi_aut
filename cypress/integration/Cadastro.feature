
Feature: Verificar botões da tela de login

    Background: Acessar o site CWI
        Given acesso ao site CWI
        And eu acessar a pagina de login
        And acessa a pagina de cadastro

    @scenarioum
    Scenario: Salvar cadastro com todos os campos vazios
        When clico no botao salvar cadastro
        Then visualizo a mensagem de erro no input email

    @scenariodois
    Scenario: Salvar cadastro não corfirmando email
        And informo um email
        When clico no botao salvar cadastro
        Then visualizo a mensagem de erro no input confirmar email

    @scenariotres
    Scenario: Salvar cadastro não informando senha
        And informo um email
        And cofirmo email
        When clico no botao salvar cadastro
        Then visualizo a mensagem de erro no input senha
    
    @scenariotres
    Scenario: Salvar cadastro não confirmando senha
        And informo um email
        And cofirmo email
        And informo uma senha
        When clico no botao salvar cadastro
        Then visualizo a mensagem de erro no input confirmar senha

    @testefinal
    Scenario: Realizar cadastro com sucesso
        And informo um email
        And cofirmo email
        And informo uma senha
        And confirmo a senha
        When salvo o cadastro
        Then usuario e cadastrado com sucesso