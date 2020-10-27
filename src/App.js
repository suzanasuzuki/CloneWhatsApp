  import React, { useState, useEffect} from 'react';
  import './App.css';

  import Api from './Api';

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

    const[chatlist, setChatList] = useState([]); 
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
      id: 'vu741YyhAcVNOe4YzGeVYzSigIN2',
      name: 'Suzana Suzuki',
      avatar: 'https://graph.facebook.com/3408107292603682/picture'
    });

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
      await Api.addUser(newUser);
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
