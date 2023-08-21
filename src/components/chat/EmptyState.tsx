import Image from "next/image"
import Avatar from "@/public/chat/avatar-male.png"

const EmptyState = () => {
  return (
    <div className="hidden lg:col-span-2 lg:block">
      <div className="w-full">
        <div className="h-full mt- flex items-center justify-center">
          Please select a chat to start conversation.
        </div>
      </div>
    </div>
  )
}

export default EmptyState