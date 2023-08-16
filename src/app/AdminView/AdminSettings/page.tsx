"use client";
import { useState } from 'react';



export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Perform image upload logic here
      console.log('Uploading image:', selectedImage);
    } else {
      console.log('No image selected.');
    }
  };
    return (
       <div>
        <h1 className='text-5xl font-bold mb-10 text-center'>Admin Settings</h1>
        <div className='flex justify-between w-3/4 m-auto px-11 py-6 border-2 border-slate-300  rounded-2xl'>
            <div className='w-9/12'>
               <div className='flex items-center gap-5 py-6'>
                 <label htmlFor="" className='text-2xl'>Admin Name: </label>
                 <input type="text" className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id="" />
               </div>
               <div className='flex items-center gap-5 py-6'>
               <label htmlFor="" className='text-2xl'>Email : </label>
                 <input type="email"  className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'  name="" id="" />
               </div>
               <div className='flex items-center gap-5 py-6'>
                <label htmlFor="" className='text-2xl'>Password : </label>
                 <input type="password"  className='w-6/12  border border-gray-300 px-2 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' name="" id="" />
               </div>
            </div>
             
            <div className='w-3/12'>
                 <div>
                 <input type="file" accept="image/*" onChange={handleImageChange} />
                  {previewImage && <img src={previewImage} alt="Preview" />}
                  <div className='flex justify-center w-9/12 m-auto'>
                  <button className='bg-blue-400 text-white px-5 py-4 text-xl rounded-2xl my-8' onClick={handleUpload}>Upload</button>
                  </div>
                 
                </div>

            </div>
            
        </div>
        <div className='flex justify-end w-9/12 m-auto'>
            <button className='bg-blue-400 text-white px-5 py-4 text-xl rounded-2xl my-8'>Save Changes</button>
        </div>
            
       </div>
    ) 
  }
