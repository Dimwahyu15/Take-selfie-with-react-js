import React, { useEffect, useRef } from "react";

const Change = () => {

let videoRef = useRef(null);
let  photoRef = useRef(null);

//get accses to user webcamera

const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
    video:true
    })
    .then((stream) => {
    // attach the stream to the video tag
    let video = videoRef.current;
    video.srcObject = stream;

    video.play()
    })
    .catch((error) => {
    console.log(error)
    })


}

//take picture of user

const takePicture = () =>{
    //width and height
    let width = 500;
    let height = width / (16/9);

    let photo = photoRef.current;

    let video = videoRef.current;

    //set the photo width and height 
    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext('2d')
    ctx.drawImage(video,0,0,photo.width,photo.height);


}

//clear image

const clearImage = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext('2d');
    ctx.clearRect(0,0,photo.width,photo.height)
}



useEffect(() => {
    getUserCamera()
}, [videoRef])

return (
    <div>
        <div className="relative flex flex-col justify-center  overflow-hidden ">
        <div className="w-full p-6 m-auto bg-blue-700 shadow-md lg:max-w-xl ">

        </div>
    </div>

      {/*  */}

        <div className="relative flex flex-col justify-center min-h-4/6 overflow-hidden my-5">
            <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-xl ">
            <video className="w-full rounded-lg mb-3" ref={videoRef}></video>
            <button onClick={takePicture} className="bg-slate-300 w-full h-10 rounded-lg bg-teal-600 text-white">Take Selfie</button>
            <canvas ref={photoRef}>
            </canvas>
            <button onClick={clearImage} className="bg-slate-300 w-full h-10 rounded-lg bg-teal-600 text-white">Clear</button>
            <button className="bg-slate-300 w-full h-10 mt-2 rounded-lg bg-teal-600 text-white">Import from galery</button>
            </div>
        </div>
    </div>
    )
}

export default Change
