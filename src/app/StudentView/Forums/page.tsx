import Forum from "@/components/Forum/Forum";


export default function Home() {
    return (
        <div>
            <div className="flex items-center border border-current rounded-lg p-2 w-1/2 mx-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow px-2 py-1 focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
            </div>

            <Forum/>
            <Forum/>
            <Forum/>

            
        </div>
    ) 
  }