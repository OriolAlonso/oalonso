// login funtion
function mostrarAviso() {
    alert("S'ha avisat al Administrador");
    // Aquí Es por agregar lógica adicional para el restabliment de contraseña
    // No implementat en aquesta versio
}
//
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

     user = username.toLowerCase();
    // Comprueba las credenciales sin depender de la lista de empleados
    if (user === 'master' && password === '1') {
        window.location.href = 'HomeE.html';
    } else if ((user === 'jonathan' || user === 'oriol' || user === 'nil') && password === 'Empleat1') {
        window.location.href = 'HomeT.html';
    } else {
        alert('La contrasenya o l\'usuari són incorrectes.');
    }
}
