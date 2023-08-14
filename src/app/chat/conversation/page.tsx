import ChatList from '@/components/chat_components/ChatList'
import Conversation from '@/components/chat_components/Conversation'

const ConversationBody = () => {
  return (
    <div className="flex">
      <ChatList/>
      <div className="">
        <Conversation/>
      </div>
    </div>
  )
}

export default ConversationBody