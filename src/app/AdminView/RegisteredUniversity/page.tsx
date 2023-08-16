import RecentlyAdded from "@/components/University/RecentlyAdded";
import RegisteredUniversity from "@/components/University/RegisteredUniversity";



export default function Home() {
    return (
        <div className="flex w-11/12 m-auto justify-between">
            <div className="flex flex-col gap-6 w-5/12">
                <div>
                <h1 className="text-3xl mt-10 bg-gray-600 px-11 py-3 text-white rounded-lg text-center">Registered University</h1>
                
                </div>
                <div className="bg-white px-6 rounded-lg shadow-blue-100">
                    <RegisteredUniversity/>
                    <RegisteredUniversity/>
                    <RegisteredUniversity/>
                    <RegisteredUniversity/>
                    <RegisteredUniversity/>
                </div>
                
            </div>
            <div className="">
                <h1 className="text-3xl mt-10 bg-gray-600 px-11 py-3 text-white rounded-lg">Recently Added</h1>
                <RecentlyAdded/>
            </div>

            
        </div>
    ) 
  }