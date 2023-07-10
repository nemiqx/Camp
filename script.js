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
}

form = document.querySelector(".form_start")
form.addEventListener("submit", handleFormSubmit)


function toggleLoader() {
  const loader = document.getElementById('loader')
  loader.classList.toggle('hidden')
}

async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(event.target)

  toggleLoader()

  const response = await sendData(data)

  toggleLoader()
}


async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(event.target)

  toggleLoader()
  const { status } = await sendData(data)
  toggleLoader()

  if (status === 200) {
    onSuccess(event.target)
  }
}

function onSuccess(formNode) {
  alert('Ваша заявка отправлена!')
  formNode.classList.toggle('hidden')
}


