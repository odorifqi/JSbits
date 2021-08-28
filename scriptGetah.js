function sum(obj, obj2) {
    let input = document.getElementById(obj).value;
    let inputArr = input.split(",")

    let arrint = []
    inputArr.forEach((i) => {
        arrint.push(parseInt(i))
    });

    let sum = arrint.reduce((t, v) => {
        return t + v
    })

    document.getElementById(obj2).innerHTML = sum

}

function total() {
    let h = parseInt(document.getElementById('h').innerHTML)
    let l = parseInt(document.getElementById('l').innerHTML)
    let m = parseInt(document.getElementById('m').innerHTML)

    document.getElementById('total').innerHTML = h + l + m
}