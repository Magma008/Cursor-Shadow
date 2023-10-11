const cursor = document.querySelector(".cursor")
const button = document.querySelector(".button")
const body = document.getElementsByTagName("body")

window.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY - 100}px`
    cursor.style.left = `${e.clientX - 35}px`
})