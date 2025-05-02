const textareaE1 = docunment.getElementById("textarea")
const totalCounterE1 = docunment.getElementById("total-counter")
textareaE1.addEventListener("keyup",()=>{ updateCounter()})

  function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length
  }

