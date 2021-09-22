const bottles = document.querySelectorAll('.bottles')
bottles.forEach(function(item){
    // console.log(item);
    // console.log(id+1);
    item.addEventListener('click', function(a){
        const Bigpepsi = document.querySelector('.pepsi')
        const section = document.querySelector('.sec')
        // console.log(a.currentTarget.dataset.id);
        const id = a.currentTarget.dataset.id
        // console.log("hello");
        if(id === '1'){
            Bigpepsi.src = "images/pepsi001.png"
            section.style.background = '#0062be'
            // console.log('Hello');
        }
        if (id === '2') {
            Bigpepsi.src = "images/pepsi002.png"
            section.style.background = '#e60c2c'
        }
        if (id === '3' ) {
            Bigpepsi.src = "images/pepsi003.png"
            section.style.background = '#1e1e1e'
        }
    })
})