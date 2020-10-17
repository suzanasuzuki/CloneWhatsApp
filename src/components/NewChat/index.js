import React, {useState}  from 'react';
import './style.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([

        {id: 123, avatar: 'https://i.imgur.com/I80W1Q0.png', name: 'Pedro H.'},
        {id: 123, avatar: 'https://i.imgur.com/I80W1Q0.png', name: 'Pedro H.'},
        {id: 123, avatar: 'https://i.imgur.com/I80W1Q0.png', name: 'Pedro H.'},
        {id: 123, avatar: 'https://i.imgur.com/I80W1Q0.png', name: 'Pedro H.'},
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}