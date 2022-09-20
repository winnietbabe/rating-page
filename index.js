const main = document.querySelector('.main')
const thankyou = document.querySelector('.thankyou')
const submitButton = document.getElementById('submit')
const btnSubmit = document.getElementById('rateSubmit')
// console.log(btnSubmit)
// const rating = document.getElementById('rating')
const rates = document.querySelectorAll("li")


submitButton.addEventListener( "click", () => {
    thankyou.classList.remove("hidden")
    main.style.display = "none"

})

btnSubmit.addEventListener( "click", () =>{
    thankyou.classList.add("hidden")
    main.style.display = "block"
    

})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        console.log(rate.innerText)
        rating.innerHTML = rate.innerHTML
    })
})
