//Primero esperamos a que lea todo el HTML
document.addEventListener("DOMContentLoaded", async() =>{

    //Añadimos la funcion a la lista.
    //Guardamos el sensor en una variable:
    const sensor = document.getElementById("sensor_panel_comentarios");
    const btn_cerrar = document.getElementById("boton_cerrar_foro");
    const btn_anadir_comentario = document.getElementById("boton_añadir_comentario");
    const btn_canc_comentario = document.getElementById("boton_cancelar_form");
    const btn_enviar_comentario = document.getElementById("boton_enviar_form");


    //Guardo el panel, porque es el que vamos a abrir y el form.
    const panel_comentarios = document.getElementById("panel_comentarios");
    const formulario = document.getElementById("formulario_comentario")

    // Cojo los datos del form.s
    const nombre_form = document.getElementById("nombre_form");
    const comentario_form = document.getElementById("comentario_form");
    const correo_form = document.getElementById("correo_form");
    const plantilla_correo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    //Cojo el cpntenedor
    const contenedor_comentarios = document.getElementById("contenedor_comentarios");

    // HAGO EL JSON :
    let nombres_sustituidos = await cargarLugares();
    console.log(nombres_sustituidos);
    


    //Ya pasamos a los sensores

    sensor.addEventListener("mouseover", () =>{
        //Accedo a la lista de clases del panel y añadimos que lo mueva.
        panel_comentarios.classList.add("abierto");

    });

    btn_cerrar.addEventListener("click", () =>{
        //Accedo a la lista de clases del panel y quitamos que este abierto.
        panel_comentarios.classList.remove("abierto");
    
    });

    //PArte del formulario:
    //Aparezca:
    btn_anadir_comentario.addEventListener("click", () =>{
        formulario.classList.add("formulario_visible");
    });
    //Escondo:
    btn_canc_comentario.addEventListener("click", () =>{
        formulario.classList.remove("formulario_visible");
    });

    //Envio:
    btn_enviar_comentario.addEventListener("click", (e) =>{
        e.preventDefault();//para que no se refresque
        // Validaciones previas 
        if (!comprobarNombre(nombre_form.value) || 
            !comprobarCorreo(correo_form.value) || 
            !comprobarTexto(comentario_form.value)) return;

        // Preparo los datos del formulario
        const formData = new FormData();
        formData.append('id_noticia', document.querySelector('input[name="id_noticia"]').value);
        formData.append('nombre', nombre_form.value);
        formData.append('email', correo_form.value);
        formData.append('texto', comentario_form.value);

        // Envío asíncrono con fetch
        fetch('comentar_ajax.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                //Sino hay ningun comentario y añadimos uno que borre "no hay comentarios"
                const comentariosVacio = document.getElementById("sin_comentarios");
                // Si existe en la pantalla, lo eliminamos directamente
                if (comentariosVacio) {
                    comentariosVacio.remove();
                }

                //P4
                let botonesHTML = ""; // Para los botones de edicion y eliminación.
                if(data.es_moderador){
                    botonesHTML = `
                        <div class="controles-moderacion">
                            <button class="btn_borrar_comentario" data-id="${data.id}">eliminar</button>
                            <button class="btn_editar_comentario" data-id="${data.id}" data-texto="${data.texto}">editar</button>
                        </div>
                    `;
                }

                //  Si se guardó en la BD, lo añadimos visualmente al panel
                const nuevoComentarioHTML = `
                    <div class="comentario_item">
                        ${botonesHTML}
                        <p><strong>${data.nombre}</strong> <small>(${data.fecha})</small></p>
                        <p>${data.texto.replace(/\\r\\n|\r|\n/g, '<br>')}</p>
                    </div>
                `;
                contenedor_comentarios.insertAdjacentHTML('afterbegin', nuevoComentarioHTML);

                //  Limpiar y cerrar formulario
                formulario.reset();
                formulario.classList.remove("formulario_visible");
            } else {
                alert("Error al guardar: " + data.message);
            }
        })
        .catch(error => console.error('Error:', error));

    });

    ///////// PARTE B ////////////////////
    //Voy a hacer las tres comprobaciones aqui y despues se utilizara en la funcion de enviar formulario.
    //Utilizo .trim
    //Comprobación: Nombre.
    function comprobarNombre(nombre){

        if(nombre.trim() == ""){
            window.alert("Error: Nombre vacio.");
            return false;
        }else
            return true;
    }

    //Comprobacion: Correo.
    function comprobarCorreo(correo){
        if(correo.trim() == ""){
            window.alert("Error: Correo vacio.");
            return false;
        }else if(!plantilla_correo.test(correo)){
            window.alert("Error: Correo no valido.");
            return false;
        }else
            return true;
    }

    //Comprobacion: Texto
    function comprobarTexto(texto){
        if(texto.trim() == ""){
            window.alert("Error: texto vacio.");
            return false;
        }else
            return true;
    }

    //////////PARTE C ///////////////
    comentario_form.addEventListener("input", () =>{
        let texto = comentario_form.value;

        //  Recorremos nuestro array de nombres suizos
        nombres_sustituidos.forEach(pueblo => {
            // Creamos una Expresión Regular para cada pueblo
            // "gi" significa: g (global, todas las veces) e i (ignore case, da igual mayúsculas/minúsculas) //////////////const regex = new RegExp("\\b" + pueblo + "\\b",  "gi");
            const regex = new RegExp( pueblo ,  "gi");
            
            // Reemplazamos el pueblo por su versión en MAYÚSCULAS
            texto = texto.replace(regex, (coincidencia) => {
                return coincidencia.toUpperCase();
            });
        });

        // 3. Actualizamos el valor del textarea con los cambios
        comentario_form.value = texto;

    });

    // ///////////// P3 /////////////
        async function cargarLugares() {
        try {
            const respuesta = await fetch("devolver_lugares.php");
            
            if (!respuesta.ok) {
                throw new Error("Error al cargar lugares");
            }

            const datos = await respuesta.json();

            return datos; // Devuelve el array de lugares
        } catch (error) {
            console.error("Error en Fetch:", error);
            return []; // Si hay error, devolvemos un array vacío para que no pete la página
        }
    }

    ////////////FUNCIONALIDAD P4 ////////////////

    //Escucho los clicks dentro de la caja de los comentarios:
    if(contenedor_comentarios){
        contenedor_comentarios.addEventListener("click", async(e) =>{
            //Lógica para borrar los comentarios:
            if(e.target.classList.contains("btn_borrar_comentario")){

                const id_comentario = e.target.getAttribute("data-id");
                const confirmacion = confirm("¿Estás seguro de que quieres eliminar este comentario?");

                if (confirmacion) {
                    const formData = new FormData();
                    formData.append('id', id_comentario);
                    
                    try{
                        // Hacemos el fetch al nuevo archivo PHP (usamos POST por seguridad, aunque vaya vacío)
                        const respuesta = await fetch('borrar_comentario.php', {
                            method: 'POST',
                            body: formData
                        });
                        const data = await respuesta.json();
                        
                        if (data.status === 'success') {
                            // 1. Buscamos el div contenedor de ESTE comentario específico
                            const caja_del_comentario = e.target.closest(".comentario_item");
                            
                            // 2. Lo eliminamos del HTML en tiempo real
                            if (caja_del_comentario) {
                                caja_del_comentario.remove();
                            }
                        } else {
                            alert("Error al borrar: " + data.message);
                        }
                    } catch (error) {
                        console.error("Error al borrar:", error);
                    } 
                }
            }   
                        
        });

    }

    /////////// PARTE GESTOR ////////////
// Borrar noticia:
    const boton_borrar_noticia = document.getElementById("btn_borrar_noticia");

    if (boton_borrar_noticia) {
        boton_borrar_noticia.addEventListener("click", async (e) => {
            e.preventDefault();

            // 1. Leemos el ID directamente de la barra de direcciones del navegador
            const parametros_url = new URLSearchParams(window.location.search);
            const id_noticia = parametros_url.get('id');

            // 2. Comprobación de seguridad por si acaso
            if (!id_noticia) {
                alert("Error: No se pudo encontrar el número de la noticia en la URL.");
                return; 
            }

            // 3. Preguntamos confirmación
            const confirmacion = confirm("¿Estás seguro de que quieres eliminar la noticia #" + id_noticia + "?");

            if (confirmacion) {
                
                // 4. Empaquetamos y enviamos
                const formData = new FormData();
                formData.append('id', id_noticia);

                try {
                    const respuesta = await fetch('borrar_noticia.php', { 
                        method: 'POST',
                        body: formData
                    });
                   
                    const data = await respuesta.json();

                    if (data.status === 'success') {
                        alert("La noticia ha sido eliminada con éxito.");       
                        window.location.href = "index.php"; 
                    } else {
                        // Si da error aquí, recuerda revisar las Claves Foráneas de la Base de Datos
                        alert("Error del servidor: " + data.message);
                    }
                } catch (error) {
                    console.error("Error crítico al borrar la noticia:", error);
                }
            }
        });
    }

});