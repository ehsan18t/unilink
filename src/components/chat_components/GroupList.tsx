
import Image from "next/image";
import Avatar from '../../public/user_img/avatar-male.png'

const GroupList = ({ groups } : any) => {
  return (
    <div id="border-group" className="relative h-screen pt-4 pb-7 pl-3 grid justify-between space-y-2">
        {/* <!-- people --> */}
        <div role="tabpanel" id="panel-2" className="absolute top-0 tab-panel p-6 transition duration-300 visible opacity-100">
            {/* <!-- people 1 --> */}
            <li className="border-b-[1px] border-slate-300 [&:last-child]:border-b-0 flex space-x-3 justify-between place-items-center mr-10 pt-3 pb-3 cursor-pointer">
                {/* <img className="rounded-full w-8 h-8" src="{% if u.profile_picture %} {{u.profile_picture.url}}  {% else %} {% static 'img/avatar/avatar-male.png' %} {% endif %}" alt="People image" /> */}
                <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full" />
                <div>
                    <p className="  text-sm text-skin-svg">Operating System</p>
                    <p className="truncate w-36 text-sx text-skin-text font-light">hi</p>
                </div>
                <div className="grid justify-items-end w-40">
                    <div>
                        <p className="skin-sidebarspace-nowrap text-sm text-skin-text font-light">date </p>
                    </div>
                </div>
            </li>
            <li className="border-b-[1px] border-slate-300 [&:last-child]:border-b-0 flex space-x-3 justify-between place-items-center mr-10 pt-3 pb-3 cursor-pointer">
                {/* <img className="rounded-full w-8 h-8" src="{% if u.profile_picture %} {{u.profile_picture.url}}  {% else %} {% static 'img/avatar/avatar-male.png' %} {% endif %}" alt="People image" /> */}
                <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full" />
                <div>
                    <p className="  text-sm text-skin-svg">Software Engineering</p>
                    <p className="truncate w-36 text-sx text-skin-text font-light">hi</p>
                </div>
                <div className="grid justify-items-end w-40">
                    <div>
                        <p className="skin-sidebarspace-nowrap text-sm text-skin-text font-light">date </p>
                    </div>
                </div>
            </li>
            <li className="border-b-[1px] border-slate-300 [&:last-child]:border-b-0 flex space-x-3 justify-between place-items-center mr-10 pt-3 pb-3 cursor-pointer">
                {/* <img className="rounded-full w-8 h-8" src="{% if u.profile_picture %} {{u.profile_picture.url}}  {% else %} {% static 'img/avatar/avatar-male.png' %} {% endif %}" alt="People image" /> */}
                <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full" />
                <div>
                    <p className="  text-sm text-skin-svg">Economics</p>
                    <p className="truncate w-36 text-sx text-skin-text font-light">hi</p>
                </div>
                <div className="grid justify-items-end w-40">
                    <div>
                        <p className="skin-sidebarspace-nowrap text-sm text-skin-text font-light">date </p>
                    </div>
                </div>
            </li>
        </div>
    </div>
  )
}

export default GroupList