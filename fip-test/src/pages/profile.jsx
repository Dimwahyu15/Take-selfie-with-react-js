import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const Profile = (props) => {

const history = useHistory(); 

const handleMove = () => {
  history.push("/profileUpload")
  window.location.reload(false);
}

const handleMoveC = () => {
  history.push("/change")
  window.location.reload(false);
}


  return (
    <div className="container">
      <div className="relative flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto bg-blue-700 shadow-md lg:max-w-xl flex justify-between">
        <FontAwesomeIcon className='' icon={faCircleArrowLeft} />
        <h1 className='text-lg font-medium text-white'>Profile</h1>
        <i class="fa-regular fa-user"></i>
        </div>
      </div>

        <div className="relative flex ">
          <div className="w-full p-2 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
              <div class="flex justify-start">
                <span clspanss=" h-32 w-32">
                  <img
                    src={props.url}
                    class="mx-auto object-cover rounded-lg h-20 w-20 bg-white p-1" />
                </span>
                <div className="nameProfile ml-2 text-xs ">
                      <h3>Dimas Wahyu Pratama</h3>
                      <p>Finplan.intern@gmail.com</p>
                      <div className="btn mt-2">
                          <button className='bg-blue-700 text-white rounded-lg p-1' onClick={handleMoveC}>Take Photo</button>
                          <button className='ml-2 bg-yellow-300 rounded-lg p-1' onClick={handleMove}>Upload Photo</button>
                      </div>
                </div>
              </div>
          </div>
        </div>

        {/* content */}
        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
          <h1 className=' w-full p-6 m-auto rounded-md  lg:max-w-xl'>Logic Test</h1>
        <div className="w-full p-6 m-auto bg-blue-700 rounded-md shadow-md lg:max-w-xl flex justify-center text-white ">
        <a target="_blank" className='font-medium' href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Soal 1</a>
        </div>
        </div>

        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
        <div className="w-full p-6 m-auto bg-blue-700 rounded-md shadow-md lg:max-w-xl flex justify-center text-white">
        <a target="_blank" className='font-medium'  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Soal 2</a>
        </div>
        </div>

        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
        <div className="w-full p-6 m-auto bg-blue-700 rounded-md shadow-md lg:max-w-xl flex justify-center text-white ">
        <a target="_blank" className='font-medium'  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Soal 3</a>
        </div>
        </div>

        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
        <div className="w-full p-6 m-auto bg-blue-700 rounded-md shadow-md lg:max-w-xl flex justify-center text-white">
        <a target="_blank" className='font-medium'  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Soal 4</a>
        </div>
        </div>

      
    </div>

      
  )
}

export default Profile
