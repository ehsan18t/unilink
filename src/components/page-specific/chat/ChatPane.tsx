'use client'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { useState } from 'react'
import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  TypingIndicator,
  MessageSeparator,
} from '@chatscope/chat-ui-kit-react'

import ico from '@/public/ico.svg'

const ChatPane = () => {
  const [messageInputValue, setMessageInputValue] = useState('')
  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back />
        <Avatar src={ico} name="Zoe" />
        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
        <ConversationHeader.Actions>
          <VoiceCallButton />
          <VideoCallButton />
          <InfoButton />
        </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList
        typingIndicator={<TypingIndicator content="Zoe is typing" />}
      >
        <MessageSeparator content="Saturday, 30 November 2019" />

        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'single',
          }}
        >
          <Avatar src={ico} name="Zoe" />
        </Message>

        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'single',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'first',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'normal',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'normal',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'last',
          }}
        >
          <Avatar src={ico} name="Zoe" />
        </Message>

        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'first',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'normal',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'normal',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'last',
          }}
        />

        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'first',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'last',
          }}
        >
          <Avatar src={ico} name="Zoe" />
        </Message>
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        value={messageInputValue}
        onChange={(val) => setMessageInputValue(val)}
        onSend={() => setMessageInputValue('')}
      />
    </ChatContainer>
  )
}

export default ChatPane
