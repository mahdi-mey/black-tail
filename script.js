const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
const circles = document.querySelectorAll('.circle')

if (!isTouchDevice) {

const coords = {
    x: 0,
    y: 0
}

circles.forEach((circle, ) => {
    circle.x = 0
    circle.y = 0
})

document.addEventListener('mousemove', e => {
    coords.x = e.clientX
    coords.y = e.clientY

})

function animateCircle() {
    let x = coords.x
    let y = coords.y

    circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px'
        circle.style.top = y - 12 + 'px'

        circle.style.scale = (circles.length - index) / 10

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0];

        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3

    })
    requestAnimationFrame(animateCircle)
}

animateCircle()
} else {
    circles.forEach(circle => {
        circle.style.display = 'none'
    })
    alert('The animation is not supported on touch devices.');
}