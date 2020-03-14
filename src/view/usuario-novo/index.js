import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './usuario-novo.css'
import NavBar from '../../components/navbar'

import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario(){
    const[email, setEmail] = useState ('');
    const[senha, setSenha] = useState ('');
    const[msgTipo, setMsgTipo] = useState ('');
    const[msg, setMsg] = useState ('');
    const[carregando, setCarregando] = useState ('');

    //função do cadastro de novo usuario
    function cadastrar(){
        setCarregando(1);

        setMsgTipo(null);
        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Necessario Email e Senha para realizar o cadastro');
            return;
        }
        //cadastrado correto "sucesso" se n cai no catch
        firebase.auth().createUserWithEmailAndPassword(email , senha).then(resultado=>{
            setCarregando(0);
            setMsgTipo('sucesso')
        }).catch(erro =>{
            setCarregando(0);
            setMsgTipo('erro')
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Essa conta já existe');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é invalido');
                    break;
                default:
                    setMsg('Não foi possivel cadastrar. Tente novamente mais tarde!');
                    break;
            }
        })
    }

    return(
    <>
        <NavBar/>
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email"/>
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha"/>

                
                {
                    carregando ? <div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
                    :
                    <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }

                
                

                {msgTipo === 'sucesso' && <strong>Cadastrado com sucesso</strong>}
                {msgTipo === 'erro' && <span><strong>Erro ao cadastrar</strong> {msg}</span> }
            </form>
        </div>
    </>
    )
}

export default NovoUsuario;