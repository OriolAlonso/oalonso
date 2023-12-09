var savedEmployees = [];

        // Llama a la función para cargar empleados cuando la página se carga
        $(document).ready(function () {
            loadSavedEmployees();
        });

        // Función para cargar los empleados guardados en la lista
        function loadSavedEmployees() {
            var storedEmployees = localStorage.getItem('savedEmployees');
            if (storedEmployees) {
                savedEmployees = JSON.parse(storedEmployees);
                updateEmployeeListHome();
            }
        }

        // Función para agregar un empleado a la lista
        function addEmployeeToHome(empleat) {
            var employeeHTML = "<div class='Empleat object-info' data-id='" + empleat.id + "'>" +
                "<h4>" + empleat.nom + "</h4>" +
                "<p>" + empleat.departament + "</p>" +
                "<i class='fas fa-trash eliminar' title='Esborra empleat'></i>" +
                "</div>";

            $("#activitats-container").append(employeeHTML);
        }

        // Función para actualizar la lista de empleados en HomeE.html
        function updateEmployeeListHome() {
            // Añade todos los empleados
            savedEmployees.forEach(function (empleat) {
                addEmployeeToHome(empleat);
            });
        }

        // Elimina empleado al hacer clic en la papelera
        $("#activitats-container").on("click", ".eliminar", function () {
            var empleatId = $(this).parent().data("id");

            // Encuentra el índice del empleado por su id
            var index = savedEmployees.findIndex(function (empleat) {
                return empleat.id === empleatId;
            });

            if (index !== -1) {
                // Elimina al empleado del arreglo
                savedEmployees.splice(index, 1);

                // Actualiza el almacenamiento local
                localStorage.setItem("savedEmployees", JSON.stringify(savedEmployees));

                // Elimina el elemento del DOM
                $(this).parent().remove();
            }
        });
