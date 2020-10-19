import React from 'react';
import Api from '../../Api';
import './style.css';

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        
        if(result) {
            onReceive(result.user);
        } else {
            alert ("Erro!");
        }
    }
    return (
        <div className="Login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}