import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className="chat__headerInfo">

                </div>
            </div>
            <div className="chat__body"></div>
            <div className="chat__footer"></div>
        </div>
    )
}

export default Chat
