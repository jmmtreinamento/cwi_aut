
class CwiElements{

    botaoEntrar = ()=>{
        return '[type="submit"]';
    }

    nomeUsuario = ()=>{
        return 'button.profile-link__link > .profile-link__text';
    }

    mensagemDeErro = ()=>{
        return '.input__error__message';
    }

    botaoRecuperarSenha = ()=> {
        return '.login__form__forgot-password';
    }

    inputEmail = ()=>{
        return '[type="email"]';
    }

    inputSenha = ()=>{
        return '#password'
    }

    botaoLogin = () => {
        return '.header__profile-wrapper > :nth-child(2)';
    }

    botaoCadastreSe = ()=>{
        return '.login__form__sign-up__anchor';
    }

    botaoSalvarCadastro = ()=>{
        return '#profile-form-button';
    }

    inputEmailCadastro = ()=>{
        return '#email';
    }

    msgErroInformeEmail = ()=>{
        return '#profile-form > :nth-child(2) > :nth-child(1) > .pristine-error';
    }

//##################################################################################
    inputConfirmarEmailCad = ()=>{
        return '#email-confirm';
    }

    msgErroConfirmarEmail = ()=>{
        return ':nth-child(2) > :nth-child(2) > .pristine-error';
    }

    msgErroInformeSenha = ()=>{
        return ':nth-child(2) > :nth-child(3) > .input-container > .pristine-error';
    }

    msgErroConfirmeSenha = ()=>{
        return ':nth-child(4) > .input-container > .pristine-error';
    }

    inputConfirmarSenha = ()=>{
        return '#password-confirm';
    }

    inputPerfilLinkedin = ()=>{
        return '.profile-form__form__input__container__middle > .input-container.profile-form__form__input__single > .input';
    }

    inputNome = ()=>{
        return '.profile-form__form__input__container__end > :nth-child(1) > .input'
    }

    inputSobrenome = ()=>{
        return '.profile-form__form__input__container__end > :nth-child(2) > .input';
    }

    inputDataNascimento = ()=>{
        return ':nth-child(3) > .input';
    }

    inputCelular = ()=>{
        return ':nth-child(4) > .input';
    }

    inputEstado = ()=>{
        return '#state';
    }

    selecionarEstado = ()=>{
        return ':nth-child(4) > option';
    }

    inputCidade = ()=>{
        return '#city';
    }

    inputCpf = ()=>{
        return '.profile-form__form__cpf__container > .input-container > .input';
    }

    checkReceberAtualizacao = ()=>{
        return '#newsletter';
    }

    checkTermoPrivacidade = ()=>{
        return '#privacy';
    }

}

export default CwiElements
