import Image from "next/image"
import Avatar from '../../public/user_img/avatar-male.png'
import AttachmentIcon from 'public/chatSvgs/attachment.png'
import '@/styles/chatStyles/msg.css'

const Conversation = () => {
  return (

<div id="container">
  <main className="ml-9">
    <header>
      <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full"></Image>
      <div>
        <h2>other_user first_name last_name</h2>
      </div>
      {/* <form action="{% url 'private_chat' pk=other_user.id %}" method="POST" enctype="multipart/form-data"> */}
    </header>
    <ul id="chat">
      <li className="{% if m.sender == user %} me {% else %} you {% endif %}">
        <div className="entete">
          {/* {% if m.sender == user %} */}
          <h3>date</h3>
          {/* {% endif %} */}
          <h2>sender first_name last_name </h2>
          {/* {% if m.sender != user %} */}
          <h3>date</h3>
        </div>
        <div className="message">
          <div className="font-bold"><a className="underline underline-offset-2 text-teal-800" href="{{m.attachment.url}}"> Attachment </a></div>
        </div>
      </li>
    </ul>
    
    
  </main>
</div>
  
  )
}

export default Conversation