document.addEventListener("DOMContentLoaded", function () {

   

    const formularioRegistro = document.getElementById("form-registro");

    if (formularioRegistro) {

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const fecha = document.getElementById("fecha");
        const telefono = document.getElementById("telefono");
        const terminos = document.getElementById("terminos");
        const botonRegistro = document.getElementById("btn-registro");
        const mensajeRegistro = document.getElementById("mensaje-registro");

        terminos.addEventListener("change", function () {
            botonRegistro.disabled = !terminos.checked;
        });

        formularioRegistro.addEventListener("submit", function (event) {

            event.preventDefault();

            if (
                nombre.value.trim() === "" ||
                email.value.trim() === "" ||
                password.value.trim() === "" ||
                fecha.value === "" ||
                telefono.value.trim() === ""
            ) {
                mensajeRegistro.textContent =
                    "Por favor, completa todos los campos.";

                return;
            }

            if (!email.checkValidity()) {
                mensajeRegistro.textContent =
                    "Escribe un correo electrónico válido.";

                return;
            }

            if (!terminos.checked) {
                mensajeRegistro.textContent =
                    "Debes aceptar los términos y condiciones.";

                return;
            }

            mensajeRegistro.textContent =
                "Registro realizado correctamente.";

        });
    }


    

    const botonMas = document.getElementById("btn-mas");
    const informacionExtra = document.getElementById("informacion-extra");

    if (botonMas) {

        botonMas.addEventListener("click", function () {

            informacionExtra.classList.toggle("oculto");

            if (informacionExtra.classList.contains("oculto")) {
                botonMas.textContent = "Ver más";
            } else {
                botonMas.textContent = "Ver menos";
            }

        });

    }




    const botonesCarrito =
        document.querySelectorAll(".agregar-carrito");

    const contadorCarrito =
        document.getElementById("contador-carrito");

    let cantidadCarrito = 0;

    botonesCarrito.forEach(function (boton) {

        boton.addEventListener("click", function () {

            cantidadCarrito++;

            if (contadorCarrito) {
                contadorCarrito.textContent = cantidadCarrito;
            }

            alert("Producto agregado al carrito.");

        });

    });




    const productosCarrito =
        document.querySelectorAll(".producto-carrito");

    const totalCarrito =
        document.getElementById("total-carrito");

    function calcularTotal() {

        let total = 0;

        productosCarrito.forEach(function (producto) {

            const precio =
                parseFloat(producto.querySelector(".precio").textContent);

            const cantidad =
                parseInt(producto.querySelector(".cantidad").value) || 0;

            const subtotal = precio * cantidad;

            producto.querySelector(".subtotal").textContent =
                "$" + subtotal.toFixed(2);

            total += subtotal;

        });

        if (totalCarrito) {
            totalCarrito.textContent = total.toFixed(2);
        }

    }

    const cantidades =
        document.querySelectorAll(".cantidad");

    cantidades.forEach(function (input) {

        input.addEventListener("input", calcularTotal);

    });


    

    const formularioBusqueda =
        document.getElementById("form-busqueda");

    if (formularioBusqueda) {

        formularioBusqueda.addEventListener("submit", function (event) {

            event.preventDefault();

            const texto =
                document.getElementById("campo-busqueda").value.trim();

            const resultados =
                document.getElementById("resultados");

            if (texto === "") {

                resultados.innerHTML =
                    "<p>Escribe un producto para realizar la búsqueda.</p>";

                return;
            }

            resultados.innerHTML = `
                <h3>Resultados para la búsqueda de ${texto}</h3>

                <ul>
                    <li>Laptop Pro</li>
                    <li>Audífonos Bluetooth</li>
                    <li>Teclado Mecánico</li>
                    <li>Mouse Gamer</li>
                </ul>
            `;

        });

    }

});