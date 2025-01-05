const email = document.getElementById('exampleInputEmail1')
const pass = document.getElementById('exampleInputPassword1')
const password = document.getElementById('exampleInputPassword1')
const main = document.getElementById('main')
const errorElement = document.getElementById('error')

main.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('required')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }

})