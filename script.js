// common js
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => { control.addEventListener('click', e => {e.preventDefault()})})
// End of common js



// cube
let x = 0
let y = 20
let z = 0
let bool = true
let interval

const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.left-y-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x}deg) rotatey(${y -= 20}deg) rotateZ(${z}deg)`
})
document.querySelector('.right-y-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x}deg) rotatey(${y += 20}deg) rotateZ(${z}deg)`
})
document.querySelector('.top-z-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x}deg) rotatey(${y}deg) rotateZ(${z -= 20}deg)`
})
document.querySelector('.bottom-z-control').addEventListener('click', () => {
     cube.style.transform = `rotateX(${x}deg) rotatey(${y}deg) rotateZ(${z += 20}deg)`
})



const playPause = () => {
    if (bool) {

     interval = setInterval(() => {
        cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
    }, 100)
} else { 
    clearInterval(interval)
    }
}  

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause() 
})
document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause() 
})

// End of cube



// slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) { 
    const div = document.createElement('div'); 
    div.style.backgroundImage = `url('/slideshow/section-1-bg-${i}.jpg')`;
i === 1 && div.classList.add('change');


    document.querySelector('.slideshow').appendChild(div);
}
}
slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1


const slideshow = () => {
    setInterval(() => {
        a++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')

        if(a < divs.length) {
  div.nextElementSibling.classList.add('change')
} else {
  divs[0].classList.add('change')
  a = 1
}

    }, 2000)
}
    slideshow()
// End of slideshow 

// // section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight/2) {
        section3Content.classList.add('change')

    }
})
// End of section 3


// section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')


let axisY = 0
let axisX = 0


const hideControls = () => {
    if(axisY === -280) {
        watchTopControl.classList.add('hidecontrol') 

    

    } else {
         watchTopControl.classList.remove('hidecontrol') 

    }
    if(axisY === 280) {
        watchBottomControl.classList.add('hidecontrol') 

    

    } else {
         watchBottomControl.classList.remove('hidecontrol') 

    }
    if(axisX === 280) {
        watchRightControl.classList.add('hidecontrol') 

    

    } else {
         watchRightControl.classList.remove('hidecontrol') 

    }
    if(axisX === -280) {
        watchLeftControl.classList.add('hidecontrol') 

    

    } else {
         watchLeftControl.classList.remove('hidecontrol') 

    }

}




watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControls()
})
watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControls()
})
watchRightControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX += 70}rem`
    hideControls()
})
watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX -= 70}rem`
    hideControls()
})



// End of section 4
