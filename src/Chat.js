import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Chat = forwardRef (({message, username}, ref) => {
  const isUser =  username === message.userName
    return (
      <div ref={ref} className={`message ${isUser && "message_user"}`}>
        <Card className={isUser ? "message_usercard" : "guest_usercard"}>
          <CardContent>
            <Typography
              color="white"
              variant="h5"
              component="h2"
            >
              {!isUser && `${message.username || 'Unknown User'}:`} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
})

export default Chat
