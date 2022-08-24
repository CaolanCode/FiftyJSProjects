const progress = document.getElementById('progress')  // progress div
const prev = document.getElementById('prev')          // prev button
const next = document.getElementById('next')          // next button
const circles = document.querySelectorAll('.circle')  // circle div's

let currentActive = 1

next.addEventListener('click' , () => {   // listener on next button
  currentActive++                         // +1 to circles active

  if(currentActive > circles.length){     
    currentActive = circles.length
  }

  update()                                  
})

prev.addEventListener('click' , () => {   // listener on prev button
  currentActive--                         // -1 to circles active
 
  if(currentActive < 1){
    currentActive = 1
  }

  update()
})

function update(){
  circles.forEach((circle, idx) => {
    if(idx < currentActive){
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')  // select all active classes

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'  // style for progress div as progress bar

  if(currentActive === 1){                        
    prev.disabled = true
  } else if(currentActive === circles.length){
    next.disabled = true
  } else{
    prev.disabled = false
    next.disabled = false
  }
}