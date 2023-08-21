'use client'

import { useState } from "react";
import Image from "next/image";
import Avatar from "@/public/chat/avatar-male.png"
import Link from "next/link";

export default function ChatList() {
    
    const [viewMode, setviewMode] = useState('')
    
    return(
        <div className="border-r border-gray-300 lg:col-span-1">

            <ul className="overflow-auto h-[32rem]">
                <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                <li>
                    {/* people/group list */}
                    <Link href="/l/chat/conversation"
                        className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer bg-gray-100 focus:outline-none">
                        <Image className="object-cover w-10 h-10 rounded-full"
                            src={Avatar} alt="username" />
                        <div className="w-full pb-2">
                            <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">Alice</span>
                                <span className="block ml-2 text-sm text-gray-600">2:00 PM</span>
                            </div>
                            <span className="block ml-2 text-sm text-gray-600">I need to go</span>
                        </div>
                    </Link>
                    <Link href="/l/chat/conversation"
                        className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                        <Image className="object-cover w-10 h-10 rounded-full"
                            src={Avatar} alt="username" />
                        <div className="w-full pb-2">
                            <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">Bob</span>
                                <span className="block ml-2 text-sm text-gray-600">12:00 AM</span>
                            </div>
                            <span className="block ml-2 text-sm text-gray-600">Good night</span>
                        </div>
                    </Link>
                    <Link href="/l/chat/conversation"
                        className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                        <Image className="object-cover w-10 h-10 rounded-full"
                            src={Avatar} alt="username" />
                        <div className="w-full pb-2">
                            <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">Polycarp</span>
                                <span className="block ml-2 text-sm text-gray-600">7 june</span>
                            </div>
                            <span className="block ml-2 text-sm text-gray-600">Good Morning</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}