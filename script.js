class User {
  constructor(name, surname, birthday, passport, phone_number, email) {
      this.name = name
      this.surname = surname
      this.birthday = birthday
      this.passport = passport
      this.phone_number = phone_number
      this.email = email
  }
}

const userList = []


function serializeForm(formNode) {
const { elements } = formNode
const data = Array.from(elements)
  .filter((item) => !!item.name)
  .map((element) => {
    const { name, value } = element

    return { name, value }
  })

console.log(data)
}


function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(form)
  console.log("Отправка!")
  const user = new User (document.querySelector("#name").value, 
  document.querySelector("#surname").value, 
  document.querySelector("#birthday").value, 
  document.querySelector("#passport").value, 
  document.querySelector("#phone_number").value, 
  document.querySelector("#email").value)
  userList.push(user)
  console.log(userList)
}

form = document.querySelector(".form_start")
form.addEventListener("submit", handleFormSubmit)


function toggleLoader() {
const loader = document.getElementById('loader')
loader.classList.toggle('hidden')
}




