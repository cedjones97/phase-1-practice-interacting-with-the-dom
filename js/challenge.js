element = document.querySelector('#counter')
let a = element.innerHTML
let timer = setInterval(function(){element.innerHTML = a++}, 1000)


const plus = document.querySelector('#plus')
plus.addEventListener('click', () =>{
     a++;
     console.log(a)
})

const minus = document.querySelector('#minus')
minus.addEventListener('click', () =>{
    if(a > 0){
        a--;
    } console.log(a)
})
let heartClicks = 0
 const heartBtn = document.querySelector('#heart')
    heartBtn.addEventListener('click', () =>{
    const string = `I liked ${a} seconds ${heartClicks++} times`
    const heartLi = document.createElement('li')
    const likesClass = document.querySelector('.likes')
    heartLi.append(string)
    likesClass.appendChild(heartLi)
 
})
const pause = document.querySelector('#pause')
pause.addEventListener('click', () =>{ 
    
    if(pause.innerText === 'pause'){
    clearInterval(timer)
    pause.innerText = 'resume'
    } else {
        pause.innerText = 'pause'
        timer = setInterval(function(){element.innerHTML = a++}, 1000)
    }
})

const commentList = document.querySelector('#list.comments')
const submitBtn = document.querySelector('#submit')
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentLi = document.createElement('li')
    const commentBox = document.querySelector('#comment-input').value
    commentLi.innerText = commentBox
   commentList.appendChild(commentLi)
})