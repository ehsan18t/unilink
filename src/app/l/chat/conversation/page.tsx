import ChatList from '@/components/chat/ChatList'
import Conversation from '@/components/chat/Conversation'

const ConversationBody = () => {
  return (
    <div className="flex">
      <ChatList/>
      <div>
        <Conversation/>
      </div>
    </div>
  )
}

export default ConversationBody