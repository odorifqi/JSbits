function sum(obj, obj2) {
    let input = document.getElementById(obj).value;
    const inputArr = input.split(",")

    const arrint = []
    inputArr.forEach((i) => {
        arrint.push(parseInt(i))
    });


    let sum = arrint.reduce((t, v) => {
        return t + v
    })

    document.getElementById(obj2).innerHTML = sum + " kg"

}

function total() {
    let h = parseInt(document.getElementById('h').innerHTML)
    let l = parseInt(document.getElementById('l').innerHTML)
    let m = parseInt(document.getElementById('m').innerHTML)

    if (Number.isNaN(h + l + m)) {
        document.getElementById('total').innerHTML = "Please fill all form!"
    } else {
        document.getElementById('total').innerHTML = h + l + m + " kg"

    }
}

function factorial(f) {
    let val = 1
    for (let i = 1; i < f; i++) {
        val = val * (i + 1)
    }
    console.log(`val = ${val}`);
}

function tanggal() {
    let tanggal = new Date();
    const months = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];
    const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', ' Kamis', 'Jumat', 'Sabtu']

    document.getElementById('tanggalNow').innerHTML = ` Tanggal:  <strong>${day[tanggal.getDay()]},
                                                                          ${tanggal.getDate()}  
                                                                          ${months[tanggal.getMonth()]} 
                                                                          ${tanggal.getFullYear()} </strong>`
}
//custom jumlah pihak
//harga perKG
//pembagian pemilik-petani
//hasil total
//hasil per pihak