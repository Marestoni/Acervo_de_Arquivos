import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

import {useSelector, useDispatch} from 'react-redux';

function NavBar(){

  const dispatch = useDispatch();  
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Acervo</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-ellipsis-v text-white"></i>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">    

                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    {
                        useSelector(state => state.usuarioLogado)>0 ? //verifica se usuario ta logado
                    <>
                        <li className="nav-item"><Link className="nav-link" to="">Publicações</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="">Minhas Publicações</Link></li> 
                        <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li> 
                        <li className="nav-item"><Link className="nav-link" onClick={()=> dispatch({type: 'LOG_OUT'})}>Sair</Link></li>
                                                                
                    </>
                    ://se n ele só mostra esses itens abaixo
                    <>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    </>
                    
                    }
                </ul>
            </div>
    </nav>
    )
}

export default NavBar;