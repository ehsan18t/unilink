'use client'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { Sidebar, ExpansionPanel } from '@chatscope/chat-ui-kit-react'

const SideBar = () => {
  return (
    <Sidebar position="right">
      <ExpansionPanel open title="INFO">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
      <ExpansionPanel title="LOCALIZATION">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
      <ExpansionPanel title="MEDIA">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
      <ExpansionPanel title="SURVEY">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
      <ExpansionPanel title="OPTIONS">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </ExpansionPanel>
    </Sidebar>
  )
}

export default SideBar
