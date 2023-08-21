import ChatList from '@/components/chat/ChatList'
import React from 'react'

const ChatLayout = ({children,}:{
    children : React.ReactNode
}) => {
    return (
        <div className="container mx-auto">
            <div className="min-w-full  border rounded lg:grid lg:grid-cols-3">
                <ChatList/>
                {children}
            </div>
        </div>
    );
}

export default ChatLayout