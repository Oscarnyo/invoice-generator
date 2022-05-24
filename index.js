const washbtn = document.getElementById("wash-btn")
const mowbtn = document.getElementById("mow-btn")
const pullbtn = document.getElementById("pull-btn")
let additem = document.querySelector(".additem")
let addprice = document.getElementById("addprice")
let tolAmount = document.getElementById("total-amt")
const resetBtn = document.getElementById("reset-btn")
const payment = document.getElementById("payment-options")

let items = []
let totalAmount = 0

 function remove(e) {
  items.shift()
  let element = e.target
  element.parentElement.remove()
  
  if (element.id === 'remove1') {
            washbtn.disabled = false
            subtract(10)
    } else if (element.id === 'remove2') {
            mowbtn.disabled = false
            subtract(20)
    } else {
            pullbtn.disabled = false
            subtract(30)
    }
    
    if (!items.length) {
        payment.style.visibility = 'hidden' } 
  
}


function washAdd() {    
    add(10, washbtn, 'Wash Car', 1, '$10')
}

function mowAdd() {   
    add(20, mowbtn, 'Mow Lawn', 2, '$20')
}

function weedsAdd() {
    add(30, pullbtn, 'Pull Weeds', 3, '$30')
}

function add(n, el, type, seq, price) {  
    items.push(`${type} <button class="remove-buttons" id="remove${seq}" onclick="remove(event)"> remove </button> <span>${price}</span> `) 
    
    addItems(items)    
    payment.style.visibility = 'visible'  
    totalAmount += n
    tolAmount.textContent = `$${totalAmount}`         
    el.disabled = true    
}

function addItems(arr) {    
        const invoiceItem = document.createElement('li') //create list for the tasks
        const invoiceItemTotal = document.createElement('li') //create list for price of each task
        invoiceItemTotal.textContent = ""
        for (let i = 0; i < arr.length; i++) {                                          
            invoiceItem.innerHTML = arr[i]
            addprice.append(invoiceItem)              
    }
}

function subtract(n) {
    totalAmount -= n
    tolAmount.textContent = `$${totalAmount}`
}

function sendInvoice() {
    totalAmount = 0
    //disable the button so that it can't be clicked again.
    washbtn.disabled = false
    mowbtn.disabled = false
    pullbtn.disabled = false
    tolAmount.textContent = `$${totalAmount}`   
    payment.style.visibility = 'hidden'
    //check if the element exists on the page and then remove it
    for (i=1; i<4; i++){
        if (document.contains(document.getElementById(`remove${i}`))) {
            document.getElementById(`remove${i}`).parentElement.remove();            
        }        
    }    
}