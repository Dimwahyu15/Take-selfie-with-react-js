import React, { useEffect, useRef, useEffect } from "react";

function App() {

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
    <div >
      <div className="bg-slate-300 flex "> 
      <h1 className="text-4xl" >take selfie with react js</h1>
      </div>
      <container className="">   
        <video className="w-2/4" ref={videoRef}></video>
        <button onClick={takePicture} className="bg-slate-300 w-screen h-10">Take Selfie</button>
        <canvas ref={photoRef}>
        </canvas>
        <button onClick={clearImage} className="bg-slate-300 w-screen h-10">Clear</button>
      </container>
    </div>
  );
}

export default App;
