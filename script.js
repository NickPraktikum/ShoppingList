const input = document.querySelector('.addInput')
const submitBtn = document.querySelector('.buttonAdd')
const blocks = document.querySelector('.blocks')
const mainBlock = document.querySelector('.mainBlock')

let list = []
const errorBlock = document.createElement('p');
errorBlock.style.cssText = "  color: #fa5041;margin-left: 82px;font-family: 'SF Pro'; font-style: normal;font-weight: 274;font-size: 28px;line-height: 72px;"
mainBlock.appendChild(errorBlock)

submitBtn.addEventListener('click', add)
function refreshList(){
   blocks.innerHTML = ''
   list.forEach((v,i)=>{
     let elem = document.createElement('div')
     let text = document.createElement('p')
     text.textContent = v
     let btn = document.createElement('button')
     btn.innerHTML = `<img src="img/minus.png" alt="minus">`
     blocks.appendChild(elem)
     elem.appendChild(text)
     elem.appendChild(btn)
     input.value = ''
    }) 
    let btnsBlock = blocks.querySelectorAll('button')
  btnsBlock.forEach((v)=>{
    v.addEventListener('click', ()=>{
      let elem = v.parentNode
      let text = elem.querySelector('p').textContent
      let index = list.findIndex((v)=>{
        return v==text
      })
      elem.remove()
      list.splice(index, 1)
    })
  })
  
  
  
  
}
function add(){
  if(input.value.length>0){
    if(list.includes(input.value)){ 
      errorBlock.innerHTML = '*This element already exists!'
    }
    else{
      errorBlock.innerHTML = ''
      list.push(input.value)
    }
  }
  else{
    errorBlock.innerHTML = '*You should enter something!'
  }

  refreshList()
}