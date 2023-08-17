import Image from "next/image"
import Avatar from "@/public/chat/avatar-male.png"
import '@/styles/chat/msg.css'

const EmptyState = () => {
  return (

<div id="container">
  <main className="">
    <header className="w-96 h-96">
      
      <div className="flex justify-center content-center">
        <h2 className="">Select a group or people to start conversation.</h2>
      </div>
    </header>
    
    
  </main>
</div>
  
  )
}

export default EmptyState