// funcion dela parte de el empleado pestaña home
function returnToLogin() {
    window.location.href = 'login.html'; // Canvia a la pàgina de login
}

// funcion dela parte de Modificacion del empleado a la pestaña home
function returnToHomeT() {
    window.location.href = 'HomeT.html'; // Canvia a la pàgina de home
}

function redirectToMR() {
    window.location.href = 'MR.html'; // Canvia a la pàgina de MR.html
}

// funcion dela parte de el empleado 

// Funció per amagar o mostrar formularis
function toggleForm(formId) {
    // Amaga tots els altres formularis /perque quedi mes bonic/
    $("[id^='formulari']").not("#" + formId).slideUp();
    
    // Mostra o amaga el formulari actual
    $("#" + formId).slideToggle();
}

// Resta del teu codi $(document).ready
$(document).ready(function () {
    window.addEventListener('message', function (event) {
        if (event.data.action === 'updateNews') {
            updateNews();
        }
    });
    var maxObjects = 4;
    var currentIndex = 0;

    function updateVisibility() {
        $(".object-info").hide(); // Amaga tots els objectes

        // Mostra els objectes en el rang actual
        for (var i = currentIndex; i < currentIndex + maxObjects; i++) {
            $(".object-info:eq(" + i + ")").show();
        }
    }

    function scrollList(direction) {
        currentIndex += direction;

        // Verifica si s'ha superat el límit superior o inferior
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > $(".object-info").length - maxObjects) {
            currentIndex = $(".object-info").length - maxObjects;
        }

        updateVisibility();
    }

    // Inicialitza la visibilitat inicial
    updateVisibility();

    // Configura els esdeveniments dels botons de navegació
    $("#scroll-up").click(function () {
        scrollList(-1);
    });

    $("#scroll-down").click(function () {
        scrollList(1);
    });
});

//formulari per cambiar empleat
$("#creaNoticia").click(function () {
    var seccio = $("#seccio").val();
    var titol = $("#titol").val();
    var textNoticia = $("#textNoticia").val();

    if (titol && textNoticia) {
        var data = new Date().getTime();

        var news = { titol: titol, text: textNoticia, data: data };
        savedNews[seccio].push(news);
        localStorage.setItem("news", JSON.stringify(savedNews));

        appendNews(news, seccio, true); // Posa true per indicar que s'ha creat una nova activitat o hora

        $("#titol").val("");
        $("#textNoticia").val("");
    }
});

//formulari per canviar empleat a MR.html
$("#creaNoticiaModificar").click(function () {
    creaNoticia('formulariModificar'); // Utilitza directament el nom del formulari
    var seccio = $("#" + formId + " #seccioModificar").val();
    var titol = $("#" + formId + " #titolModificar").val();

    if (seccio && titol) {
        var data = new Date().getTime();
        var news = { titol: titol, data: data };

        if (seccio === "secundari") {
            news.text = $("#" + formId + " #textNoticiaModificar").val();
        }

        savedNews[seccio].push(news);
        localStorage.setItem("news", JSON.stringify(savedNews));

        if (formId === "formulariModificar") {
            // Si estem modificant, elimina l'entrada anterior
            var index = $("#" + formId + " .modificar").data("index");
            savedNews[seccioModificar].splice(index, 1);
            updateNews(); // Actualitza la vista
        }

        appendNews(news, seccio, true); // Posa true per indicar que s'ha creat una nova activitat o hora
        
        // Afegeix la següent línia per actualitzar la vista de HomeT.html
        window.opener.updateNews();
    }
});



// Funció per gestionar la modificació d'activitats o hores
function modificarActivitatHora() {
    $(".activitat-hora .modificar").click(function () {
        var seccio = $(this).data("seccio");
        var index = $(this).closest("article").index();

        // Obtenir l'activitat o hora actual
        var activitatHora = savedNews[seccio][index];

        // Omplir el formulari amb les dades actuals
        $("#seccio").val(seccio);
        $("#titol").val(activitatHora.titol);
        $("#textNoticia").val(activitatHora.text);

        // Eliminar l'activitat o hora actual
        savedNews[seccio].splice(index, 1);
        localStorage.setItem("news", JSON.stringify(savedNews));

        // Actualitzar la vista
        updateNews();

        // Mostrar el formulari per a la modificació
        $("#formulari").slideDown();
    });
}
// Inicialitzar la funcionalitat de modificació
modificarActivitatHora();

