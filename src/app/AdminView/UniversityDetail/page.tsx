import Image from "next/image";

export default function Home() {
    return (
        <div>
            
            <div className="w-11/12  flex items-center m-auto my-10 justify-between">
                <div className="w-3/12">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
                        alt="Description"
                        width={500}
                        height={300}
                        className="w-11/12"
                    />
                </div>
                <div className="w-8/12 m-auto ">
                    <h1 className="text-xl font-bold text-red-500">Bangladesh University of Engineering and Technology</h1>
                    <p className="mb-8 text-sm"><span className="font-bold text-blue-600 ">Aka:</span> BUET </p>
                    <p className="mb-3"><span className="font-bold text-blue-600">Location:</span>: Polashi, Dhaka , Bangladesh</p>
                    <p className="mb-3"><span className="font-bold text-blue-600">Established:</span> 1947</p>
                    <p className="mb-3"><span className="font-bold text-blue-600">Type:</span> Engineering</p>
                    <p className="mb-3"><span className="font-bold text-red-600">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam eaque quae deserunt aperiam rem corrupti natus amet veniam saepe.</p>
                    <p className="mb-3"><span className="font-bold text-blue-600">Vc:</span> Professor Satya Proshad Mojumder</p>
                    <p className="mb-3"><span className="font-bold text-blue-600">Email:</span> buet.register@buet.ac.bd</p>
                </div>
            </div>
            <hr className=' border-slate-700'/>

            <div className='flex gap-6 justify-end mt-5'>
                <button className='px-8 py-4 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-500'>Approve</button>
                <button className='px-8 py-4 text-white bg-red-600 rounded-lg text-lg hover:bg-red-500'>Reject</button>
            </div>
            
        </div>
    ) 
  }