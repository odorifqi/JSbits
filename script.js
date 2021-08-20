function show(color) {
    let detail = document.getElementById(`${color}Detail`)
    let allDetail = document.getElementsByClassName('detail')
    let hideBtn = document.getElementById('hideBtn')

    for (let i = 0; i < allDetail.length; i++) {
        allDetail[i].classList.add('hidden')
    }
    hideBtn.classList.remove('hidden')
    detail.classList.remove("hidden")
}

function hideAll() {
    let allDetail = document.getElementsByClassName('detail')
    let hideBtn = document.getElementById('hideBtn')

    for (let i = 0; i < allDetail.length; i++) {
        allDetail[i].classList.add('hidden')
    }
    hideBtn.classList.add('hidden')
}

let myCart = []
let prices = {
    "blue": 20,
    "white": 11,
    "black": 33
}
let subTotal = 0

function cart(color) {
    let cartItem = {}
    cartItem['color'] = color
    cartItem['price'] = prices[color]
    myCart.push(cartItem)
    console.log(myCart);

    let cart = document.getElementById('cartInfo')
    cart.innerHTML = output(myCart)

    subTotal += prices[color]

    let sub = document.getElementById('subTotal')
    sub.innerHTML = `subtotal: ${subTotal}`

}

function output(cart) {
    let stringOut = ''
    for (let i = 0; i < cart.length; i++) {
        stringOut += ` item: ${cart[i]['color']} , price:${cart[i]['price']}`
    }
    return stringOut
}

function showCheckout() {
    let form = document.getElementById('myForm')

    form.classList.remove('hidden')
}

function submitForm() {
    let name = document.getElementById('name').value
    let address = document.getElementById('address').value
    let creditNum = document.getElementById('creditNum').value

    alert(`name: ${name}
           address: ${address}
           credit: ${creditNum}
           grand total: ${subTotal}`)

}