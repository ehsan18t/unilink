
import Image from "next/image"
import Avatar from '@/public/chat/avatar-male.png'
import Link from "next/link"

const PeopleList = ({ people } : any) => {
  return (
    <div id="border-group" className=" relative h-screen pt-4 pb-7 pl-3 grid justify-between space-y-2">
        {/* <!-- people --> */}
        <div role="tabpanel" id="panel-2" className="absolute top-0 tab-panel p-6 transition duration-300 visible opacity-100">
            {/* <!-- people 1 --> */}
            <Link href="/l/chat/conversation">
                <li className="border-b-[1px] border-slate-300 [&:last-child]:border-b-0 flex space-x-3 justify-between place-items-center mr-10 pt-3 pb-3 cursor-pointer">
                    <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full" />
                    <div>
                        <p className="  text-sm text-skin-svg">Alice</p>
                        <p className="truncate w-36 text-sx text-skin-text font-light">hi</p>
                    </div>
                    <div className="grid justify-items-end w-40">
                        <div>
                            <p className="skin-sidebarspace-nowrap text-sm text-skin-text font-light">date </p>
                        </div>
                    </div>
                </li>
            </Link>
            <Link href="/l/chat/conversation">
                <li className="border-b-[1px] border-slate-300 [&:last-child]:border-b-0 flex space-x-3 justify-between place-items-center mr-10 pt-3 pb-3 cursor-pointer">
                    <Image src={Avatar} width={45} height={35} alt="avatar" className="rounded-full" />
                    <div>
                        <p className="  text-sm text-skin-svg">Bob</p>
                        <p className="truncate w-36 text-sx text-skin-text font-light">hi</p>
                    </div>
                    <div className="grid justify-items-end w-40">
                        <div>
                            <p className="skin-sidebarspace-nowrap text-sm text-skin-text font-light">date </p>
                        </div>
                    </div>
                </li>
            </Link>
            
            <div className="flex mt-4 text-xs">Please select a people to start conversation</div>
        </div>
    </div>
  )
}

export default PeopleList