const boldBTN = document.querySelector("#bold-btn")
const underlineBtn = document.querySelector("#underline-btn")
const italicBtn = document.querySelector("#italic-btn")
const colorBtn = document.querySelector("#color-btn")


boldBTN.addEventListener('click', () => {
    document.execCommand("bold")
})

underlineBtn.addEventListener('click', () => {
    document.execCommand("underline")
})

italicBtn.addEventListener('click', () => {
    document.execCommand("italic")
})

colorBtn.addEventListener('input', () => {
    document.execCommand("foreColor", false, colorBtn.value)
})



