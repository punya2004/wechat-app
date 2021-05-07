import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Chat from './Chat';
import fire, { timestamp } from './base';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


const Hero = ({handleLogout}) => {

 const [input, setInput] = useState("");
 const [messages, setMessages] = useState([]);
 const [userName, setUserName] = useState("");

 useEffect(() => {
  fire
    .firestore()
    .collection('messages')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => (doc.data())))
    })
 }, [] )

 useEffect(() => {
  setUserName(prompt("Please enter the username"))
 },[])

  const handleSendManage = (event) => {
    event.preventDefault();
    let createdAt = timestamp();
    fire.firestore().collection('messages').add({
      message: input,
      username: userName,
      createdAt: createdAt
    })
    setMessages([...messages, {username: userName, text: input}]);
    setInput('');
  }
  return(
    <section className="hero">
      <nav>
        <h2>Welcome {userName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <form className="app_form">
      <FormControl className="app_formcontrol">
        <InputLabel placeholder="Enter a message">Enter a Message</InputLabel>
        <Input className="app_input" value={input} onChange={event => setInput(event.target.value)}/>
      <IconButton
        className="app_btn"
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSendManage}
      >Send
        <SendIcon/>
      </IconButton>
      </FormControl>
      </form>      
      <FlipMove>
        {messages.map(function msg(message) {
          return (
            <Chat username={userName} message={message} />
          )
        })}
      </FlipMove>
    </section>
   )

 }

export default Hero