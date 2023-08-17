import Image from "next/image"
import Avatar from "@/public/chat/avatar-male.png"
import '@/styles/chat/msg.css'

const Conversation = () => {
  return (

<div id="container">
  <main className=" h-48">
    <header>
      <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full"></Image>
      <div>
        <h2 className=" mt-2">Bob</h2>
      </div>
    </header>
    <ul id="chat">
      <li className="me">
        <div className="entete">
          <h2>Alice </h2>
        </div>
        <div className="message">
          Hi
          {/* <div className="font-bold"><a className="underline underline-offset-2 text-teal-800" href="m.attachment.url"> Attachment </a></div> */}
        </div>
      </li>

      <li className="you">
        <div className="entete">
          <h2>Bob</h2>
        </div>
        <div className="message">
          Hello
          {/* <div className="font-bold"><a className="underline underline-offset-2 text-teal-800" href="m.attachment.url"> Attachment </a></div> */}
        </div>
      </li>
      
      
      
    </ul>
    <footer>
      
        <textarea name="message" placeholder="Type your message"></textarea>
        <span className="flex">
          {/* <label htmlFor="file-upload" className="rounded-full p-3 bg-gray-100 hover:bg-gray-200 cursor-pointer h-5 w-5" > <Image alt="" src={AttachmentIcon} width={30} height={30}/>  </label> */}
            <label htmlFor="fileInput" className="mr-4 cursor-pointer">
                <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
                </svg>
            </label>
          <input id="fileInput" className="invisible"type="file" name="attachment" />
          <span  className=" mr-16 rounded-full p-3 bg-gray-100 hover:bg-gray-200" id="uploadFile"></span>
          <input className="rounded-md pr-3 bg-gray-100 hover:bg-gray-200 cursor-pointer" type="submit" name="click" value="Send" />
          
        </span>
    </footer>
    
  </main>
</div>
  
  )
}

export default Conversation