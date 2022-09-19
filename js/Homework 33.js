let img = document.querySelector('.img')
let btns = document.querySelectorAll('.btncolor')

let computers = {
    White: "./img/1.png",
    SpaceGrey: "./img/2.png",

}

let colors = {
    White: "White",
    SpaceGrey: "Space Grey",

}

let costs = {
    White: "1.999",
    SpaceGrey: "2.599",
}

let color = document.querySelector('.part-3-right-color')
let cost = document.querySelector('.part-3-right-cost')

btns.forEach(btn => {
    btn.onclick = () => {

        let key = btn.innerHTML
        img.src = computers[key]

        let key_2 = btn.innerHTML
        color.innerHTML = colors[key_2]

        btns.forEach(btn => {
            btn.classList.remove('btn-white')
        });
        btn.classList.add('btn-white')
    }
})

let btns_bot = document.querySelectorAll('.btn')

btns_bot.forEach(btn => {
    btn.onclick = () => {
        btns_bot.forEach(btn => {
            btn.classList.remove('active')
        });
        btn.classList.add('active')

        if ( btn.classList.contains(200) ) {
            cost.innerHTML = "$2,199"
        }
        else if ( btn.classList.contains(600) ) {
            cost.innerHTML = "$2,599"
        }
        else if ( btn.classList.contains(1200) ) {
            cost.innerHTML = "$3,199"
        }
        else {
            cost.innerHTML = "$1.999"
        }

    }
});