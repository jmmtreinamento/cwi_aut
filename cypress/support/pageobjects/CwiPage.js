/// <reference types="Cypress" />

import CwiElements from "../elements/CwiElements";

const cwiElements = new CwiElements();
const url = Cypress.config("baseUrl");
const email = Cypress.config("email");
const emailCadastro = Cypress.config("emailCadastro");
const senha = Cypress.config("senha");
const usuario = Cypress.config("usuario");

class CwiPage {
    //Acessa o site em teste
    acessarSite() {
        cy.visit(url);
    }

    //Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(cwiElements.botaoLogin()).click();
    }

    //Informa email
    informarEmail(email) {
        cy.get(cwiElements.inputEmail()).type(email);
    }

    //Informar senha
    informarSenha(senha) {
        cy.get(cwiElements.inputSenha()).type(senha);
    }

    //Autentica usuário válido
    loginSucesso() {
        cy.get(cwiElements.inputEmail()).type(email);
        cy.get(cwiElements.inputSenha()).type(senha);
        cy.get(cwiElements.botaoEntrar()).click();
    }

    //Retornar nome do usuario
    retornoNomeUsuario() {
        cy.get(cwiElements.nomeUsuario()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal(usuario);
        });
    }

    //Clica no botão entrar para verificar validar o usuario
    clicarBotaoEntrar() {
        cy.get(cwiElements.botaoEntrar()).click();
    }

    //Recebe mensagem de erro
    receberMensagemDeErro() {
        cy.get(cwiElements.mensagemDeErro()).should(
            "contain",
            "Usuário ou senha inválidos."
        );
    }

    //Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        //cy.get(cwiElements.botaoRecuperarSenha()).should('contain','Esqueceu sua senha?');
        cy.get(cwiElements.botaoRecuperarSenha()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Esqueceu sua senha?");
        });
    }

    //Acessar pagina de cadastro
    clicarBotaoCadastreSe() {
        cy.get(cwiElements.botaoCadastreSe()).click();
    }

    //Informar email do cadastro
    informarEmailCadastro() {
        cy.get(cwiElements.inputEmailCadastro()).type(emailCadastro);
    }

    //Salvar cadastro
    clicarBotaoSalvarCadastro() {
        cy.get(cwiElements.botaoSalvarCadastro()).click();
    }

    //Visualizar mensagem de Campo obrigatório no input Email
    msgErroEmailObrigatorio() {
        cy.get(cwiElements.msgErroInformeEmail()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Campo obrigatório");
        });
    }

    //Confirmando email
    informarConfirmarEmailCad() {
        cy.get(cwiElements.inputConfirmarEmailCad()).type(emailCadastro);
    }

    //Visualizar mensagem de Campo obrigatório no input Confimar Email
    msgErroConfirmagEmail() {
        cy.get(cwiElements.msgErroConfirmarEmail()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Campo obrigatório");
        });
    }

    //Visualizar mensagem de Campo obrigatório no input Senha
    msgErroInformarSenha() {
        cy.get(cwiElements.msgErroInformeSenha()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Campo obrigatório");
        });
    }

    //Informar senha da pagina de cadastro
    informarSenhaCad() {
        cy.get(cwiElements.inputSenha()).type(senha);
    }

    //Confirmar senha da página de cadastro
    confirmarSenha() {
        cy.get(cwiElements.inputConfirmarSenha()).type(senha);
    }

    //Visualizar mensagem de Campo obrigatório no input Senha
    msgErroConfirmagSenha() {
        cy.get(cwiElements.msgErroInformeSenha()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Campo obrigatório");
        });
    }

    //Visualizar mensagem de Campo obrigatório no input Confirmar Senha
    msgErroConfirmagSenha() {
        cy.get(cwiElements.msgErroConfirmeSenha()).then(($text) => {
            const msg = $text.text().trim();
            expect(msg).to.equal("Campo obrigatório");
        });
    }

    //Salva um cadastro com sucesso
    cadastroSucesso() {
        cy.get(cwiElements.inputPerfilLinkedin()).type(Cypress.config("perfilLinkedin"));
        cy.get(cwiElements.inputNome()).type(Cypress.config("nomeCadastro"));
        cy.get(cwiElements.inputSobrenome()).type(Cypress.config("sobrenome"));
        cy.get(cwiElements.inputDataNascimento()).type(Cypress.config("data_nasc"));
        cy.get(cwiElements.inputCelular()).type(Cypress.config("celular"));
        cy.get(cwiElements.inputEstado()).select(Cypress.config("estado"));
        cy.get(cwiElements.inputCidade()).select(Cypress.config("cidade"));
        cy.get(cwiElements.inputCpf()).type(Cypress.config("cpf"));
        cy.get(cwiElements.checkReceberAtualizacao()).check();
        cy.get(cwiElements.checkTermoPrivacidade()).check();
        //cy.get(cwiElements.botaoSalvarCadastro()).click(); 
    }
}

export default CwiPage;
