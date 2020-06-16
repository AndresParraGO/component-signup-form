

const $form = document.getElementById('form')


const renderWarning = message => {
  const el = document.createElement('span')
  el.classList.add('warning-span')
  el.textContent = message
  return el
}

const validateInput = (input, message, formGroup) => {
  // Añadir borde y mensaje
  if (input.value === '') {
    formGroup.appendChild(renderWarning(message))

    input.classList.add('input-error')
    input.setAttribute('placeholder', '')
    input.nextElementSibling.style.display = 'block'
  } else {
    input.nextElementSibling.style.display = 'none'
  }
}


$form.addEventListener('submit', e => {
  e.preventDefault()

  const name = e.target.name,
        lastName = e.target.lastname,
        email = e.target.email,
        password = e.target.password



  // Remover clases
  if (name.className = 'input-error') name.classList.remove('input-error')
  if (lastName.className = 'input-error') lastName.classList.remove('input-error')
  if (email.className = 'input-error') email.classList.remove('input-error')
  if (password.className = 'input-error') password.classList.remove('input-error')


  const input = document.querySelectorAll('.form-group')

  const $warnings = $form.querySelectorAll('span.warning-span')
  $warnings.forEach(el => {
    el.textContent = ''
  })


  // Validate Inputs
  validateInput(name, 'First Name cannot be empty', input[0])
  validateInput(lastName, 'Last Name cannot be empty', input[1])
  validateInput(email, 'Looks like this is not an email', input[2])
  validateInput(password, 'Password cannot be empty', input[3])

})