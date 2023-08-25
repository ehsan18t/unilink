'use client'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  ConversationList,
  Conversation,
  Avatar,
} from '@chatscope/chat-ui-kit-react'

import ico from '@/public/ico.svg'

const ChatList = () => {
  return (
    <ConversationList>
      <Conversation
        name="Lilly"
        lastSenderName="Lilly"
        info="Yes i can do it for you"
      >
        <Avatar
          src="http://127.0.0.1:8000/media/profile_pictures/avatar-male.png"
          name="Lilly"
          status="available"
        />
      </Conversation>

      <Conversation
        name="Joe"
        lastSenderName="Joe"
        info="Yes i can do it for you"
      >
        <Avatar src={ico} name="Joe" status="dnd" />
      </Conversation>

      <Conversation
        name="Emily"
        lastSenderName="Emily"
        info="Yes i can do it for you"
        unreadCnt={3}
      >
        <Avatar src={ico} name="Emily" status="available" />
      </Conversation>

      <Conversation
        name="Kai"
        lastSenderName="Kai"
        info="Yes i can do it for you"
        unreadDot
      >
        <Avatar src={ico} name="Kai" status="unavailable" />
      </Conversation>

      <Conversation
        name="Akane"
        lastSenderName="Akane"
        info="Yes i can do it for you"
      >
        <Avatar src={ico} name="Akane" status="eager" />
      </Conversation>

      <Conversation
        name="Eliot"
        lastSenderName="Eliot"
        info="Yes i can do it for you"
      >
        <Avatar src={ico} name="Eliot" status="away" />
      </Conversation>

      <Conversation
        name="Zoe"
        lastSenderName="Zoe"
        info="Yes i can do it for you"
        active
      >
        <Avatar src={ico} name="Zoe" status="dnd" />
      </Conversation>

      <Conversation
        name="Patrik"
        lastSenderName="Patrik"
        info="Yes i can do it for you"
      >
        <Avatar src={ico} name="Patrik" status="invisible" />
      </Conversation>
    </ConversationList>
  )
}

export default ChatList
