const canvas = document.querySelector('#background')
const ctx = canvas.getContext('2d')

// const a = document.querySelectorAll('a')

const ctx2 = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// let body = document.body,
//     html = document.documentElement;

// let pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
//     html.clientHeight, html.scrollHeight, html.offsetHeight );


let x,y = undefined
let hovered = []

const colors = [
    '#B8B8FF',
    '#FF8E72',
    '#FF8C42',
    '#8EE3EF',
    '#BAA5FF',
    '#56E39F',
    '#E7CFCD',
    '#10FFCB',
    '#FBD87F',
    '#B5F8FE'
]

window.addEventListener('mousemove', (e) => {
    hovered = document.querySelectorAll('.canvas-hover:hover')
    const mosuePosition = [e.x, e.y]
    
    x = mosuePosition[0]
    y = mosuePosition[1]

    let mulX, mulY = null

    if(mosuePosition[0] > 0 && mosuePosition[0] < (canvas.width * 0.5)){
        mulX = -1
    }else{
        mulX = 1
    }

    if(mosuePosition[1] > 0 && mosuePosition[1] < (canvas.height * 0.5)){
        mulY = -1
    }else{
        mulY = 1
    }

    // do the update
    for(let i = 0; i < 3; i++){
        back.forEach(b => b.mouseMove(mulX * 0.03, mulY * 0.025))
    }

})

let oldScroll = 0

window.addEventListener('scroll', () => {

    let multiplier = 1

    if(oldScroll - scrollY < 0 ){

        oldScroll = scrollY
        multiplier = -1

    }else{

        oldScroll = scrollY

    }

    back.forEach(b => b.update(multiplier * 1.5))
})

class Square{
    constructor(l, color){
        this.x = Math.floor(Math.random() * (50  + (canvas.width - 50)) - (50))
        this.y = Math.floor(Math.random() * (50  + (canvas.height)) - (50))
        this.w = l
        this.h = l
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    update(val){
        this.y = this.y + val
    }

    mouseMove(valX, valY){
        this.x = this.x + valX
        this.y = this.y  + valY
    }
}

class Circle {
    constructor(r){
        this.x = Math.floor(Math.random() * (50  + (canvas.width - 50)) - (50))
        this.y = Math.floor(Math.random() * (50  + (canvas.height - 50)) - (50))
        this.r = r
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r, 0 , 2 * Math.PI)
        ctx.fill()
    }

    update(val){
        this.y = this.y + val
    }

    mouseMove(valX,valY){
        this.x = this.x + valX
        this.y = this.y  + valY
    }
}

let back = []

for (let i = 0; i < 5; i++) {
    back.push(new Square(90, '#6DECAF'))
    back.push(new Circle(80))
}


function animate(){

    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx2.clearRect(0,0, canvas.width, canvas.height)

    back.forEach( b => b.draw())

    if(hovered.length > 0){
        const X = Math.floor(hovered[0].getBoundingClientRect().left)
        const Y = Math.floor(hovered[0].getBoundingClientRect().top)
        const W = hovered[0].offsetWidth
        const H = hovered[0].offsetHeight        

        ctx2.fillStyle = '#6DECAF'
        ctx2.fillRect(X, Y, W,H)
    }else{
        ctx2.fillStyle = '#6DECAF'
        ctx2.beginPath()
        ctx2.arc(x,y,25, 0 , 2 * Math.PI)
        ctx2.fill()
    }
    requestAnimationFrame(animate)
}

animate()
