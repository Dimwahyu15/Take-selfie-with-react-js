import React,{useState} from 'react'
import {storage} from './firebase'
import { ref,uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";


const ProfileUpload = () => {

const history = useHistory();

const [image, setImage] = useState(null);
const [url, setUrl] = useState(null)

const handleImageChange = (e) => {
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
}
console.log(image)

const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
    .then(() => {
        getDownloadURL(imageRef)
        .then((url) => {
            setUrl(url);
        })
        .catch((error) => {
            console.log(error.message, "error getting the image url");
        });
        setImage(null);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

const handleMove = () => {
    history.push("/profile")
    window.location.reload(false);
}

return (
    <div > 
        <div className="relative flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto bg-blue-700 shadow-md lg:max-w-xl flex justify-between ">
        <FontAwesomeIcon className='' onClick={handleMove} icon={faCircleArrowLeft} />
        <h1 className='text-lg font-medium text-white'>Profile</h1>
        <i class="fa-regular fa-user"></i>
        </div>
    </div>

    <div className="relative flex ">
        <div className="w-full p-2 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
            <div class="flex justify-start">
            <span clspanss=" h-32 w-32">
                <img
                src={url}
                class="mx-auto object-cover rounded-lg h-20 w-20 bg-white p-1 " />
            </span>
            <div className="nameProfile ml-2 text-xs ">
                    <h3>Dimas Wahyu Pratama</h3>
                    <p>Finplan.intern@gmail.com</p>
                    <div className="btn mt-2">
                        <input type="file" className='ml-2' onChange={handleImageChange} />
                        <button className='ml-2 bg-blue-700 text-white mt-2 p-1 rounded-lg' onClick={handleSubmit} >Upload Photo</button>
                    </div>
            </div>
            </div>
        </div>
    </div>

    </div>
)
}

export default ProfileUpload
