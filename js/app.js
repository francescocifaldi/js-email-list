let num = prompt('Quante email vuoi generare?')
const container = document.getElementById("email-container")
const btn = document.getElementById("regen")
let emails = []

function generateList(num) {
    container.classList.add("d-none")
    for (let i = 1; i <= num; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                emails.push(res.data.response)
                container.innerHTML += `<li class="form-control">${res.data.response}</li>`
            })
            .catch((err) => {
                console.log('Errore')
            })
            .then(() => {
                if (emails.length == num) {
                    container.classList.remove("d-none")
                }
            })
    }
    console.log(emails)
}

generateList(num);

btn.addEventListener("click", function () {
    container.innerHTML = '';
    emails = []
    num = prompt('Quante email vuoi generare?')
    generateList(num)
})