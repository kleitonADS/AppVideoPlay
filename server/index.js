import cors from "cors"
import express from "express"
import bodyParser from "body-parser";
import { savefile } from "./saveFile.js";
import multer from "multer";


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "cover") {
      cb(null, "./public/covers")
    }else{
      cb(null, "./video")
    }
    
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })


app.post(
  "/uploadfiles",
  upload.fields([
    { name: "cover", maxCount: 100 },
    { name: "Video", maxCount: 1000 },
  ]),
  async function (req, res)  {
    try {
       await savefile(req.body, req.files)
        return res.json({ message: "Successfully uploaded files" })
    } catch (error) {
      console.log(error)
      return res.json({ message: "Error Add the Video" })
    }

   
  
   
  }
),
  app.listen(3000, () => {
    console.log(`Server started...`)
  })
