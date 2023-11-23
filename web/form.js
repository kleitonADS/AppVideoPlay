import { server } from "./server.js"
// import axios from "axios"

const file = document.getElementById("form-data")
console.log(file)


// file.addEventListener("submit", submitForm)

// function submitForm(e) {
//   e.preventDefault()

// console.log(file)
 
//   // const nameVideo = document.getElementById("nameVideo")
//   // const nameArtist = document.getElementById("nameArtist")
//   // const cover = document.getElementById("newCoverFile")
//   //  const videoForm = document.getElementById("newVideoFile")
 
//   // const formData = new FormData()
//   // formData.append("song", nameVideo.value)
//   // formData.append("artist", nameArtist.value)
//   // formData.append("cover", cover.value)
//   // formData.append("video", videoForm.value)
// //   formData = {
// //   file: {
// //     value: file.buffer,
// //     options: {
// //       filename: file.originalname,
// //       contentType: file.mimetype,
// //     },
// //   },
// // }



  

//   // console.log(formData)
 
//   // server
//   //   .post("/uploadfiles", file)
//   //   .then((res) => console.log(res))
//   //   .catch((err) => ("Error occured", err))
// }