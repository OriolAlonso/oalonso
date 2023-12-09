  // validar valores
  let gmailValidator = 0;
  let nameValidator = 0;
  //recargar web
  function reloadPage(){
    location.reload();
  }
  // variable para la visivilidad
  let formVisible = false;

  // Formulari0
  function toggleLanguageForm() {
      const form = document.getElementById('formulari');
      formVisible = !formVisible;
      form.style.display = formVisible ? 'block' : 'none';
  }

  //funcion para cambiar leguage 
    $(document).ready(function () {
      $('#applyButton').click(function () {
          // Obtenim el valor de la llengua seleccionada
          var selectedLanguage = $('#language').val();

          // Redirigim a la pàgina corresponent segons la llengua
          switch (selectedLanguage) {
              case 'angles':
                  // window.location.href = 'OriolAlonsoAngles.html';
                  break;
              case 'espanol':
                  // window.location.href = 'OriolAlonsoCastella.html';
                  break;
              case 'catala':
                  window.location.href = 'OriolAlonsoCatala.html';
                  break;
              default:
                  // Pàgina per defecte si no es selecciona cap llengua vàlida
                  window.location.href = 'pagina_defecte.html';
          }
      });
  });
  function showMenu() {
    var menuTitles = document.getElementById("menu_titles");
    menuTitles.classList.toggle("show");
}

  //Menu idiomas
  function showMenuI(){
    let el = document.getElementById("titles_burger");
    let displayStyle = window.getComputedStyle(el).getPropertyValue("display");
    if(displayStyle === "none"){
      el.style.display="flex";
      return;
    }
    el.style.display="none";
  }

  $(document).ready(function() {
    // Aquest codi s'executarà quan la pàgina s'hagi carregat completament
    // Pots animar els elements aquí
    $("#menu").fadeIn(1000); // apareix lentament en 1 segon
    $("#Home").fadeIn(1500); // apareix lentament en 1.5 segons
    $("#AboutMe").fadeIn(2000); // apareix lentament en 2 segons
    // Continua afegint altres elements segons necessitis
  });

  // Función para validar los campos del formulario
function validateForm() {
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
  // Enviar el correo electrónico utilizando algún servicio de backend o API de correo
  // Aquí puedes añadir el código para enviar el correo electrónico, pero esto requeriría un servicio de backend o una API de correo electrónico.

  // Restablecer los campos a valores vacíos
  nameField.value = '';
  emailField.value = '';
  messageField.value = '';
  // Todos los campos son válidos
  alert('Mensaje enviado');
  return true;
}