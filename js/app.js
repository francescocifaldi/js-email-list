const num = prompt('Quante email vuoi generare?')
const container = document.getElementById("email-container")
const btn = document.getElementById("regen")
let emails = []

generateList = function () {
    for (let i = 0; i < num; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                emails.push(res.data.response)
                const newLi = document.createElement("li")
                newLi.innerText = `${res.data.response}`
                container.append(newLi)
            })
            .catch((err) => {
                console.log('Errore')
            })
    }
}

generateList();

console.log(emails)