import React from 'react'

const Profile = () => {
  return (
    <div className="container">
      <div className="relative flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto bg-blue-700 shadow-md lg:max-w-xl ">
          
        </div>
      </div>

        <div className="relative flex ">
        <div className="w-full p-2 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
          <div class="flex justify-start">
          <span clspanss=" h-32 w-32">
            <img alt="Photo by aldi sigun on Unsplash"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              class="mx-auto object-cover rounded-lg h-20 w-20 bg-white p-1" />
          </span>
            <div className="nameProfile ml-2 text-xs ">
              <h3>Dimas Wahyu Pratama</h3>
              <p>Finplan.intern@gmail.com</p>
              <div className="btn mt-2">
                  <button>Take Photo</button>
                  <button className='ml-2'>Upload Photo</button>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* content */}
        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
          <h1 className='ml-2 mb-2'>Logic Test</h1>
        <div className="w-full p-6 m-auto bg-blue-700 rounded-md shadow-md lg:max-w-xl ">
        </div>
        </div>

      
    </div>

      
  )
}

export default Profile
