const bottles = document.querySelectorAll('.bottles')
bottles.forEach(function(item){
    // console.log(item);
    // item.addEventListener('click', function(cannID){
    //     // console.log(a.currentTarget.dataset.id);
    //     const id = cannID.currentTarget.dataset.id
    //     const mainPep = document.querySelector('.bigCann')
    //     if (id === '1') {
    //         mainPep.src = './images/pepsi001.png'
    //         bgColor.style.background = '#0062be'
    //     }
    //     if (id === '2') {
    //         mainPep.src = './images/pepsi002.png'
    //         bgColor.style.background = '#e60c2c'
    //     }
    //     if (id === '3') {
    //         mainPep.src = './images/pepsi003.png'
    //         bgColor.style.background = '#1e1e1e'
    //     }
    // })
    item.addEventListener('mouseover', function(colorID){
        // console.log(colorID.currentTarget.dataset.id);
        const id = colorID.currentTarget.dataset.id
        const bgColor = document.querySelector('.sec')
        const mainPep = document.querySelector('.bigCann')
        if (id === '1') {
            bgColor.style.background = '#0062be'
            mainPep.src = './images/pepsi001.png'
        }
        if (id === '2') {
            bgColor.style.background = '#e60c2c'
            mainPep.src = './images/pepsi002.png'
        }
        if (id === '3') {
            bgColor.style.background = '#1e1e1e'
            mainPep.src = './images/pepsi003.png'
        }
    })
})

//Navigation Toggle
const navToggle = document.querySelector('.navToggle')
const dropNav = document.querySelector('.dropNav')
Nav(navToggle, dropNav)
// navToggle.addEventListener('click', function(){
//     navToggle.classList.toggle('active')
// })

function Nav(a, b){
    a.addEventListener('click', function(){
        a.classList.toggle('active')
        b.classList.toggle('active')
    })
}