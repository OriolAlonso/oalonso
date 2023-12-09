// Variables para validar
let gmailValidator = 0;
let nameValidator = 0;
//Recargar Página Web
function reloadPage(){
  location.reload();
}
//Menu hamburguesa
function showMenu(){
  let el = document.getElementById("titles_burger");
  let displayStyle = window.getComputedStyle(el).getPropertyValue("display");
  if(displayStyle === "none"){
    el.style.display="flex";
    return;
  }
  el.style.display="none";
}

// Función para validar los campos del formulario
function validateForm() {
  alert("No disponible por el momento")
  return;
  // Obtiene los valores de los campos del formulario
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('mensaje');

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

   // Condiciones para verificar si los campos están vacíos
   if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
    return false;
  }
  // Validar el formato de correo electrónico
  if (email.indexOf('@') === -1) {
    alert('Por favor, utiliza un formato de correo electrónico válido (debe contener "@").');
    return false;
  }
  // Restablecer los campos a valores vacíos
  nameField.value = '';
  emailField.value = '';
  messageField.value = '';
  // Todos los campos son válidos
  alert('Mensaje enviado');
  return true;
}
