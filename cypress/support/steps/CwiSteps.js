
import CwiPage from '../pageobjects/CwiPage';

const cwiPage = new CwiPage;

/*
And("acesso a pagina principal", ()=>{
    cwiPage.loginSucesso();
});

And("informo {} invalido", (email)=>{
    cwiPage.informarEmail(email);
});

And("informo {} invalida", (senha)=>{
    cwiPage.informarSenha(senha);
});

And("clico no botao Entrar", ()=>{
    cwiPage.clicarBotaoEntrar();
});

Then("devo visualizar o botao de recuperar senha", ()=>{
    cwiPage.visualizarBotaoRecuperarSenha();
});

Then("realizar login", ()=>{
    cwiPage.retornoNomeUsuario();
});

Then("deve retornar uma mensagem de erro", ()=>{
    cwiPage.receberMensagemDeErro();
});


*/

Given("acesso ao site CWI", ()=>{
    cwiPage.acessarSite();
});

When("eu acessar a pagina de login", ()=>{
    cwiPage.clicarBotaoPaginaLogin();
});

And("acessa a pagina de cadastro", ()=>{
    cwiPage.clicarBotaoCadastreSe();
});

And("informo um email", (email)=>{
    cwiPage.informarEmailCadastro(email);
});

When("clico no botao salvar cadastro", ()=>{
    cwiPage.clicarBotaoSalvarCadastro();
});

Then("visualizo a mensagem de erro no input email", ()=>{
    cwiPage.msgErroEmailObrigatorio();
});

And("cofirmo email", (emailCadastro)=>{
    cwiPage.informarConfirmarEmailCad(emailCadastro);
});

Then("visualizo a mensagem de erro no input confirmar email", ()=>{
    cwiPage.msgErroConfirmagEmail();
});

Then("visualizo a mensagem de erro no input senha", ()=>{
    cwiPage.msgErroInformarSenha();
});

And("informo uma senha", ()=>{
    cwiPage.informarSenhaCad();
});

Then("visualizo a mensagem de erro no input confirmar senha", ()=>{
    cwiPage.msgErroConfirmagSenha();
});

And ("confirmo a senha", ()=>{
    cwiPage.confirmarSenha();
});

When("salvo o cadastro", ()=>{
    cwiPage.cadastroSucesso();
})

Then("usuario e cadastrado com sucesso", ()=>{
    
});
