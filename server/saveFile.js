import fs from "fs"
import { allMusic } from "../web/music-list.js"

export async function saveFile(data, files) {
  console.log("Salvando o video...")
  try {
    const VideoName = files["Video"][0].filename.replace(".mp4", "")

    const inputObj = {
      nameVideo: data.nameVideo,
      artist: data.artist,
      cover: files["cover"][0].filename,
      video: VideoName,
    }

    allMusic.push(inputObj)
    const info = JSON.stringify(allMusic)
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
