import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './login.css'

import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';

function Login(){

    const[email, setEmail] = useState ('');
    const[senha, setSenha] = useState ('');
    
    const dispatch = useDispatch();



    //função usada para verificar os dados de login, utilizando firebase/auth
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado=>{
            alert('deu certo')
            setTimeout(() => {
                dispatch({type: 'LOG_IN', usuarioEmail: email})
            }, 2000);
            
        }).catch(erro=>{
            alert('Não foi possivel logar: '+erro)
        });

        
    }
    


    return(
    <div className="login-content d-flex align-intems-center">

        {
            useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/'/> : null
        }


        <form className="form-signin mx-auto">
            <div className="text-center mb-4">
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weitght-bold">Login</h1>    
            </div>

            
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />   
            <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
         

            <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>

            <div className="opcoes-login mt-5">
                <a href="#" className="mx-2">Recuperar senha</a>
                <Link to='novousuario' className="mx-2">Quero cadastrar</Link>
            </div>
            <p class="mt-5 mb-3 text-muted text-center">&copy; Marestoni</p>
        </form>
    </div>
    )
}
export default Login;