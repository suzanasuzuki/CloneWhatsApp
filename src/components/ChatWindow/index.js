import React from 'react';
import './style.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="" />
                    <div className="chatWindow--name">Pedrinho</div>
                </div>
                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                            <SearchIcon style={{color: '#9919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                            <AttachFileIcon style={{color: '#9919191'}} />
                    </div>
                    <div className="chatWindow--btn">
                            <MoreVertIcon style={{color: '#9919191'}} />
                    </div>
                </div>
                
            </div>
            <div className="chatWindow--body">

            </div>
            <div className="chatWindow--footer">

            </div>
        </div>
    )
}