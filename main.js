
const link=document.querySelector(".list")
const op=document.querySelector(".icon")
const cl=document.querySelector(".close")
const bac=document.querySelector(".back")

op.addEventListener("click", () => {
    link.classList.add("active")
    op.classList.add("active")
    cl.classList.add("active")
    bac.classList.add("active")
})
cl.addEventListener("click", () => {
    link.classList.remove("active")
    op.classList.remove("active")
    cl.classList.remove("active")
    bac.classList.remove("active")
})

bac.addEventListener("click", () => {
    link.classList.remove("active")
    op.classList.remove("active")
    cl.classList.remove("active")
    bac.classList.remove("active")
})