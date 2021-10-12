const smallCanns = document.querySelectorAll('.canns')
const backGround = document.querySelector('.sec')

// smallCanns.addEventListener('mouseover', function(){
//     // console.log('Hello');
//     backGround.style.background = '#d1272c'
// })
smallCanns.forEach(items => {
    console.log(items);
    items.addEventListener('mouseover', eachItem =>{
        // console.log(eachItem.currentTarget.dataset.id);
        const Id = eachItem.currentTarget.dataset.id 
        const bigCann = document.querySelector('.bigCann')
        if(Id === '1'){
            backGround.style.background = '#fbfdfa'
            bigCann.src = './images/coca-cola-fizzy-classic.png'
        }
        if (Id === '2') {
            backGround.style.background = '#d1272c' 
            bigCann.src = './images/diet-coke-png.png'
        }
        if (Id === '3') {
            backGround.style.background = '#bec2c7' 
            bigCann.src = './images/coke-zero-can-png.png'
        }
    })
});

// Nav Button toggle
const navBtn = document.querySelector('.navBtn')
const navDrop = document.querySelector('.nav')
navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('active')
    navDrop.classList.toggle('active')
})

