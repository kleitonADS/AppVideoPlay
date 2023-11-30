import fs from "fs-extra"
import { allMusic } from "../web/music-list.js"

export async function deleteVideo(params) {
  try {
    allMusic.forEach((item, index) => {
      if (item.nameVideo === params.name) {
        var filePath = `./video/${params.artist}.mp4`
        fs.remove(filePath)

        var pathCover = `./public/covers/${item.cover}`
        fs.remove(pathCover)

        if (filePath && pathCover) {
          allMusic.splice(index, 1)
        }
      }
    })

    const info = JSON.stringify(allMusic)

    console.log(info)
    fs.writeFileSync(
      "web/music-list.js",
      `export let allMusic = ${info}`,
      null,
      2
    )
  } catch (error) {
    throw new Error(error)
  }
}
