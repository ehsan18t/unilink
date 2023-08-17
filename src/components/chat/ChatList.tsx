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
        <div className="flex w-auto ml-36 overflow-hidden">
            <div className="rounded-2xl ml-32 shadow-skin-shadow bg-skin-sidebar  pt-2 overflow-y-scroll scrollbar">
                {/* <!-- Tab bar --> */}
                <div role="tablist" aria-label="tabs" className="relative mr-4  w-max mx-auto h-12 grid grid-cols-2 items-center  rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
                    <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"></div>
                    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1"  className={`focus-within:shadow-lg ${viewMode=='group' || viewMode == '' ? 'bg-blue-500' : ''}  relative block h-full px-6 tab rounded-full`}
                        onClick={()=>setviewMode('group')}
                    >
                        <span className="text-gray-800">Study Group</span>
                    </button>
                    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2"  className={`focus-within:shadow-lg ${viewMode=='people' ? 'bg-blue-500' : ''} relative block h-full px-6 tab rounded-full`}
                        onClick={()=>setviewMode('people')}
                    >
                        <span className="text-gray-800">People</span>
                    </button>
                </div>

                {viewMode === 'group' || viewMode === '' ? <GroupList groups={'group'} /> : <PeopleList people={'people'} />}
                
            </div>
            
        </div >
    )
}