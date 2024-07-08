const vwhole = document.querySelector(".vwhole")
const whole = document.querySelector(".whole")
const hide = document.querySelector(".hide")
const dahel = document.querySelector(".dahel")

vwhole.addEventListener("click",() => {
    whole.style.display = "flex"    
    dahel.style.display = "none"
})

hide.addEventListener("click",() => {
    whole.style.display = "none"
    dahel.style.display = "block"
})