'use client'

import { useState } from "react";
import Image from "next/image";
import Avatar from "@/public/chat/avatar-male.png"
import PeopleList from "@/components/chat/PeopleList";
import GroupList from "@/components/chat/GroupList";
import '@/styles/chat/styles.css'

export default function ChatList() {
    
    const [viewMode, setviewMode] = useState('')
    
    return(
        <div className="container mx-auto">
            <div className="min-w-full  border rounded lg:grid lg:grid-cols-3">
                <div className="border-r border-gray-300 lg:col-span-1">
                    
                    <ul className="overflow-auto h-[32rem]">
                        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
                        <li>
                            <a
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
                            </a>
                            <a
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
                            </a>
                            <a
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
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:col-span-2 lg:block">
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                            <Image className="object-cover w-10 h-10 rounded-full"
                                    src={Avatar} alt="username" />
                            <span className="block ml-2 font-bold text-gray-600">Alice</span>
                        </div>
                        <div className="relative w-full p-6 overflow-y-auto h-[25rem]">
                            <ul className="space-y-2">
                                <li className="flex justify-start">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span className="block">Hi</span>
                                    </div>
                                </li>
                                <li className="flex justify-end">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span className="block">Hiiii</span>
                                    </div>
                                </li>
                                <li className="flex justify-end">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span className="block">how are you?</span>
                                    </div>
                                </li>
                                <li className="flex justify-start">
                                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                            
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>

                            <input type="text" placeholder="Type here.."
                                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message" required />
                            
                            <button type="submit">
                                <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}