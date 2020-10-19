  import React, { useState, useEffect} from 'react';
  import './App.css';

  import ChatListItem from './components/ChatListItem/index';
  import ChatIntro from './components/ChatIntro/index';
  import ChatWindow from './components/ChatWindow/index';
  import NewChat from './components/NewChat/index';
  import Login from './components/Login/index';

  import DonutLargeIcon from '@material-ui/icons/DonutLarge';
  import ChatIcon from '@material-ui/icons/Chat';
  import MoreVertIcon from '@material-ui/icons/MoreVert';
  import SearchIcon from '@material-ui/icons/Search';

  export default () => {

    const[chatlist, setChatList] = useState([
      {chatId: 1, title: 'Pedrinho', image:'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'},
      {chatId: 2, title: 'Pedrinho', image:'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'},
      {chatId: 3, title: 'Pedrinho', image:'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'},
      {chatId: 4, title: 'Pedrinho', image:'https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg'},
    ]); 
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);

    const [showNewChat, setShowNewChat] = useState(false);

    const handleNewChat = () => {
      setShowNewChat(true);
    }

    const handleLoginData = async (u) =>  {
      let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL
      };

      setUser(newUser);

    }

    if(user === null) {
      return(<Login onReceive={handleLoginData}/>);
    }

    return (
      <div className="app-window">
          <div className="sidebar">
            <NewChat 
              chatlist={chatlist}
              user={user}
              show={showNewChat}
              setShow={setShowNewChat}
            />
            <header>
                <img className="header--avatar" src={user.avatar} alt="" />
                <div className="header--buttons">
                    <div className="header--btn">
                        <DonutLargeIcon style={{color: '#919191'}} />
                    </div>
                    <div onClick={handleNewChat} className="header--btn">
                        <ChatIcon style={{color: '#919191'}} />
                    </div>
                    <div className="header--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </header>

              <div className="search">
                <div className="search--input">
                  <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                  <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                </div>
              </div>
              <div className="chatlist">
                {chatlist.map((item, key)=> (
                    <ChatListItem 
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatlist[key].chatId}
                        onClick={() => setActiveChat (chatlist[key])}
                    /> 
                ))}
              </div>
          </div>
          <div className="contentarea">
              {activeChat.chatId !== undefined && 
                  <ChatWindow
                    user={user}
                  />
              }
              {activeChat.chatId === undefined && 
                  <ChatIntro />
              }      
              
          </div>
      </div>
    );
  }
