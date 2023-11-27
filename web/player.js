import { allMusic } from "./music-list.js"


// Const
const wrapper = document.querySelector(".wrapper-play")
const musicImg = wrapper.querySelector(".img-cover")
const musicName = wrapper.querySelector(".name")
const musicArtist = wrapper.querySelector(".artist")
const playPauseBtn = wrapper.querySelector(".play-pause")
const prevBtn = wrapper.querySelector("#prev")
const nextBtn = wrapper.querySelector("#next")
const mainAudio = document.querySelector("#main-audio")
const progressArea = wrapper.querySelector(".progress-area")
const progressBar = progressArea.querySelector(".progress-bar")
console.log(mainAudio)
let musicIndex = Math.floor(Math.random() * allMusic.length + 1)
// const isMusicPaused = true;


const ul = document.querySelector(".list-all-songs")

for (let i = 0; i < allMusic.length; i++) {
  const video = allMusic[i]
  const li = document.createElement("li")
  li.innerHTML = `<div class="content-img-cover">
        <img src="./covers/${video.cover}" alt="cover-video" >
       </div>
       <div class="content-title">
        <h1>${video.nameVideo}</h1>
        <h2>${video.artist}</h2>
       </div>
       <div class="content-bt-play">
        <button class="bt-play" type="button" onClick="EditVideo(${video.nameVideo});">
        <img src="./file-edit-line.svg" alt="play list video" >
       </button>
       </div>
       <div class="content-bt-delete">
         <button class="bt-delete" type="button" onClick="deleteVideo('${video.nameVideo}','${video.artist}')"><img src="./deletebin.svg" alt="play list video"  ></button>
       </div>`

  ul.appendChild(li);
};


window.addEventListener("load", () => {
  loadMusic(musicIndex)

  function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].nameVideo
    musicArtist.innerText = allMusic[indexNumb - 1].artist
    musicImg.src = `/video/${allMusic[indexNumb - 1].video}.mp4`
    // musicImg.src = `assets/cover/${allMusic[indexNumb -1 ].img}.jpg`;
    mainAudio.src = `/video/${allMusic[indexNumb - 1].video}.mp4`
  }

  function playMusic() {
    wrapper.classList.add("paused")
    // musicImg.classList.add("rotate")
    playPauseBtn.innerHTML = `<img src="public/pause-line.svg" alt="Play" srcset="">`

    musicImg.play()
    mainAudio.play()
  }

  function pauseMusic() {
    wrapper.classList.remove("paused")
    musicImg.classList.remove("rotate")
    // playPauseBtn.innerHTML = `<img src="assets/img/play-fill.svg" alt="Play" srcset="">`
    playPauseBtn.innerHTML = `<img src="public/play-fill.svg" alt="Play" >`
    mainAudio.pause()
    musicImg.pause()
  }

  function prevMusic() {
    musicIndex--
    musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex)
    loadMusic(musicIndex)
    playMusic()
  }

  function nextMusic() {
    musicIndex++
    musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex)
    loadMusic(musicIndex)
    playMusic()
  }

  playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused")
    isMusicPlay ? pauseMusic() : playMusic()
  })

  prevBtn.addEventListener("click", () => {
    prevMusic()
  })

  nextBtn.addEventListener("click", () => {
    prevMusic()
  })

  mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progressBar.style.width = `${progressWidth}%`

    let musicCurrentTime = wrapper.querySelector(".current-timer"),
      musicDuration = wrapper.querySelector(".max-duration")

    mainAudio.addEventListener("loadeddata", () => {
      let mainAdDuration = mainAudio.duration
      let totalMin = Math.floor(mainAdDuration / 60)
      let totalSec = Math.floor(mainAdDuration % 60)
      if (totalSec < 10) {
        totalSec = `0${totalSec}`
      }
      musicDuration.innerText = `${totalMin}:${totalSec}`
    })

    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)

    if (currentSec < 10) {
      currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`
  })

  progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth
    let clickedOffSetX = e.offsetX
    let songDuration = mainAudio.duration

    mainAudio.currentTime = (clickedOffSetX / progressWidth) * songDuration
    playMusic()
  })

  mainAudio.addEventListener("ended", () => {
    nextMusic()
  })

  // efeito

  let noise = new SimplexNoise()
  const area = document.getElementById("visualiser")
  // const label = document.getElementById("label")

  area.addEventListener("click", () => {
    console.log(mainAudio)
    if (mainAudio.paused) {
      mainAudio.play()
    } else {
      mainAudio.pause()
    }
  })

  startVis()

  // function clearScene() {
  //   const canvas = area.firstElementChild
  //   area.removeChild(canvas)
  // }

  function startVis() {
    const context = new AudioContext()
    const src = context.createMediaElementSource(musicImg)
    const analyser = context.createAnalyser()
    src.connect(analyser)
    analyser.connect(context.destination)
    analyser.fftSize = 512
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 100
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(300, 320)
    //   renderer.setClearColor("#ffffff");
    renderer.setClearColor(0x000000, 0)

    area.appendChild(renderer.domElement)
    const geometry = new THREE.IcosahedronGeometry(20, 3)
    const material = new THREE.MeshBasicMaterial({
      color: "#FFFFFF",
      wireframe: true,
    })
    const sphere = new THREE.Mesh(geometry, material)

    const light = new THREE.DirectionalLight("#FFFF00", 0.8)
    light.position.set(0, 50, 100)
    scene.add(light)
    scene.add(sphere)

    window.addEventListener("resize", () => {
      renderer.setSize(280, 320)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })

    function render() {
      analyser.getByteFrequencyData(dataArray)

      const lowerHalf = dataArray.slice(0, dataArray.length / 2 - 1)
      const upperHalf = dataArray.slice(
        dataArray.length / 2 - 1,
        dataArray.length - 1
      )

      const lowerMax = max(lowerHalf)
      const upperAvg = avg(upperHalf)

      const lowerMaxFr = lowerMax / lowerHalf.length
      const upperAvgFr = upperAvg / upperHalf.length

      sphere.rotation.x += 0.001
      sphere.rotation.y += 0.003
      sphere.rotation.z += 0.005

      WarpSphere(
        sphere,
        modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8),
        modulate(upperAvgFr, 0, 1, 0, 4)
      )
      requestAnimationFrame(render)
      renderer.render(scene, camera)
    }

    function WarpSphere(mesh, bassFr, treFr) {
      mesh.geometry.vertices.forEach(function (vertex, i) {
        var offset = mesh.geometry.parameters.radius
        var amp = 5
        var time = window.performance.now()
        vertex.normalize()
        var rf = 0.00001
        var distance =
          offset +
          bassFr +
          noise.noise3D(
            vertex.x + time * rf * 4,
            vertex.y + time * rf * 6,
            vertex.z + time * rf * 7
          ) *
            amp *
            treFr *
            2
        vertex.multiplyScalar(distance)
      })
      mesh.geometry.verticesNeedUpdate = true
      mesh.geometry.normalsNeedUpdate = true
      mesh.geometry.computeVertexNormals()
      mesh.geometry.computeFaceNormals()
    }
    render()
  }

  //helper functions
  function fractionate(val, minVal, maxVal) {
    return (val - minVal) / (maxVal - minVal)
  }

  function modulate(val, minVal, maxVal, outMin, outMax) {
    var fr = fractionate(val, minVal, maxVal)
    var delta = outMax - outMin
    return outMin + fr * delta
  }

  function avg(arr) {
    var total = arr.reduce(function (sum, b) {
      return sum + b
    })
    return total / arr.length
  }

  function max(arr) {
    return arr.reduce(function (a, b) {
      return Math.max(a, b)
    })
  }

  // fimm
})
