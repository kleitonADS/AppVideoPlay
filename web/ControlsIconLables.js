export function chooseLables() {
  const contentList = document.querySelector(".wrapper-list")
  const buttonLirycs = document.querySelector(".button-header-player")
  contentList.classList.toggle("list-active")
  buttonLirycs.classList.toggle("active")
}
