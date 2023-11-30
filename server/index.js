import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import { saveFile } from "./saveFile.js"
import multer from "multer"
import { deleteVideo } from "./deleteVideo.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "cover") {
      cb(null, "./public/covers")
    } else {
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
  async function (req, res) {
    try {
      await saveFile(req.body, req.files)
      const message = "videoAdd"
      return res.redirect("http://localhost:5173/?" + message)
    } catch (error) {
      console.log(error)
      const messageError = "ErrorAdd"
      return res.redirect("http://localhost:5173/?" + messageError)
    }
  }
),
  app.get("/deleteVideo", async function (req, res) {
    try {
      await deleteVideo(req.query)
      const message = "videoDeleted"
      return res.redirect("http://localhost:5173/?" + message)
    } catch (error) {
      console.log(error)
      const messageError = "ErrorDelete"
      return res.redirect("http://localhost:5173/?" + messageError)
    }
  }),
  app.listen(3000, () => {
    console.log(`Server started...`)
  })
