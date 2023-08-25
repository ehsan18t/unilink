'use client'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { useState } from 'react'
import ChatList from '@/components/page-specific/chat/ChatList'
import ChatPane from '@/components/page-specific/chat/ChatPane'
import SideBar from '@/components/page-specific/chat/SideBar'
import { MainContainer, Sidebar, Search } from '@chatscope/chat-ui-kit-react'

const Page = () => {
  return (
    <div
      style={{
        height: '100%',
        position: 'relative',
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ChatList />
        </Sidebar>
        <ChatPane />
        <SideBar />
      </MainContainer>
    </div>
  )
}

export default Page
