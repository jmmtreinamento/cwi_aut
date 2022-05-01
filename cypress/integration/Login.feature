Feature: Autenticar usuário

    Background: Acessar o site CWI
        Given acesso ao site CWI
        When eu acessar a pagina de login

    @scenarioum
    Scenario: Visualizar opção de recuperar senha esquecida
        Then devo visualizar o botao de recuperar senha

    @scenariodois
    Scenario Outline: Autenticar usuários inválidos
        And informo <email> invalido
        And informo <senha> invalida
        And clico no botao Entrar
        Then deve retornar uma mensagem de erro

        Examples:
            | email                  | senha      |
            | acessar@email.com.br   | vouacessar |
            | segundafeira@gmail.com | segunda123 |
            | teste@teste.com        | teste      |
            | login@com.br           | login123   |

    @scenariotres
    Scenario: Realizar login com sucesso
        And acesso a pagina principal
        Then realizar login