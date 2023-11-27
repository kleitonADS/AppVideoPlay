export function deleteVideo(nameVideo,artist) {
  const url = `http://localhost:3000/deleteVideo/?name=${nameVideo}&artist=${artist}`;
  window.location.href = url;
};
