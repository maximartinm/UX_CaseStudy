document.addEventListener("DOMContentLoaded", async() =>{
    /////////////// P4 ///////////

    // 1. CAPTURAMOS ELEMENTOS GLOBALES DEL PANEL
    const boton_abrir_panel = document.getElementById("boton_log_in");
    const formulario_panel = document.getElementById("formulario_log_in");
    const boton_cancelar = document.getElementById("boton_cancelar_form");
    const plantilla_correo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Abrir y cerrar el panel entero
    if(boton_abrir_panel){
        boton_abrir_panel.addEventListener("click", () =>{
            formulario_panel.classList.add("activo");
        });
    }

    if(boton_cancelar){
        boton_cancelar.addEventListener("click", () =>{
            formulario_panel.classList.remove("activo");
        });
    }

    // ==========================================
    // 2. LÓGICA DEL FORMULARIO DE LOG-IN
    // ==========================================
    const input_correo_login = document.getElementById("correo_login");
    const input_contrasena_login = document.getElementById("contrasena_login");
    const boton_enviar_login = document.getElementById("boton_enviar_login");

    if(boton_enviar_login){
        boton_enviar_login.addEventListener("click", (e) =>{
            e.preventDefault(); // Para que no se refresque

            // Validamos SOLO correo y contraseña (el login no necesita nombre)
            if (!comprobarCorreo(input_correo_login.value) || 
                !comprobarContrasena(input_contrasena_login.value)) return;

            // Preparamos los datos del formulario de Log-in:
            const formData = new FormData();
            formData.append('email', input_correo_login.value);
            formData.append('password', input_contrasena_login.value);

            // Envío asíncrono a login.php:
            fetch('login.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    formulario_panel.classList.remove("activo");
                    window.location.reload();
                } else {
                    alert("Error al iniciar sesión: " + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // ==========================================
    // 3. LÓGICA DEL FORMULARIO DE REGISTRO
    // ==========================================

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
    function comprobarContrasena(texto){
        if(texto.trim() == ""){
            window.alert("Error: texto vacio.");
            return false;
        }else
            return true;
    }

    // ==========================================
    // LÓGICA DE LAS PESTAÑAS
    // ==========================================
    const tab_login = document.getElementById("tab_login");
    const tab_registro = document.getElementById("tab_registro");
    
    const form_login = document.getElementById("form_solo_login");
    const form_registro = document.getElementById("form_solo_registro");

    if(tab_registro){
        tab_registro.addEventListener("click", () => {
            form_registro.classList.replace("form-oculto", "form-visible");
            form_login.classList.replace("form-visible", "form-oculto");
            
            tab_registro.classList.replace("tab-inactiva", "tab-activa");
            tab_login.classList.replace("tab-activa", "tab-inactiva");
        });
    }

    if(tab_login){
        tab_login.addEventListener("click", () => {
            form_login.classList.replace("form-oculto", "form-visible");
            form_registro.classList.replace("form-visible", "form-oculto");
            
            tab_login.classList.replace("tab-inactiva", "tab-activa");
            tab_registro.classList.replace("tab-activa", "tab-inactiva");
        });
    }
    //Al pulsar el boton Crear Cuenta
    const input_nombre_registro = document.getElementById("nombre_registro");
    const input_correo_registro = document.getElementById("correo_registro");
    const input_contrasena_registro = document.getElementById("contrasena_registro");
    const boton_enviar_registro = document.getElementById("boton_enviar_registro");
    
    if(boton_enviar_registro){
        boton_enviar_registro.addEventListener("click", (e) =>{
            e.preventDefault(); 
                    // Validaciones previas 
            if (!comprobarNombre(input_nombre_registro.value) || 
                !comprobarCorreo(input_correo_registro.value) || 
                !comprobarContrasena(input_contrasena_registro.value)) return;

            const formData = new FormData();
            formData.append('nombre', input_nombre_registro.value);
            formData.append('email', input_correo_registro.value);
            formData.append('password', input_contrasena_registro.value);

            fetch('registro.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    formulario_panel.classList.remove("activo");
                    window.location.reload();
                } else {
                    alert("Error al registrar: " + data.message);
                }
            })
            .catch(error => console.error('Error:', error));


        });
    }

    // Para leer datos sesion:
    async function leerDatosSesion() {
        try {
            const respuesta = await fetch("leerSesion.php");

            if (!respuesta.ok) {
                throw new Error("Error al cargar datos de sesión");
            }

            var usuario = await respuesta.json();

            return usuario;

        } catch (error) {
            console.error("Error en Fetch:", error);
            return false; 
        }
    };


    //// PARA ACTUALIZAR MIS DATOS :
    const formulario_actualizar = document.getElementById("formulario_actualizar_datos");
    const boton_eliminar = document.getElementById("boton_borrar_cuenta");

    if(formulario_actualizar){
        formulario_actualizar.addEventListener("submit", async(e) =>{
            e.preventDefault();

            let usuario = await leerDatosSesion();

            let inputNombre = document.getElementById("edit_nombre").value;
            let inputEmail = document.getElementById("edit_email").value;
            let inputPassword = document.getElementById("edit_password").value;

            if(inputNombre.trim() === "")
                inputNombre = usuario.nombre;
            if(inputEmail.trim() === "")
                inputEmail = usuario.email;
        

            if (!comprobarNombre(inputNombre) || !comprobarCorreo(inputEmail)) {
                return; // Si fallan, detenemos el envío
            }


            // Validamos la contraseña SOLO SI HA ESCRITO ALGO
            if (inputPassword.trim() !== "") 
                if (!comprobarContrasena(inputPassword)) return;

            //Empaquetamos:
            const formData = new FormData();
            formData.append('nombre', inputNombre);
            formData.append('email', inputEmail);
            formData.append('password', inputPassword);



            //fetch
            try {
                const respuesta = await fetch('actualizar_datos.php', {
                    method: 'POST',
                    body: formData
                });

                const data = await respuesta.json();

                if (data.status === 'success') {
                    alert("¡Perfil actualizado con éxito!");
                    window.location.reload(); 
                } else {
                    alert("Error: " + data.message);
                }

            } catch (error) {
                console.error("Error en la petición Fetch:", error);
            }


        });
    }

    //Boton para borrar:
    if(boton_eliminar){
        boton_eliminar.addEventListener("click", async() =>{

            const confirmacion = confirm("¿Estás seguro de que quieres eliminar tu cuenta?");

            if (confirmacion) {
                try{
                    // Hacemos el fetch al nuevo archivo PHP (usamos POST por seguridad, aunque vaya vacío)
                    const respuesta = await fetch('borrar_cuenta.php', { method: 'POST' });
                    const data = await respuesta.json();

                    if (data.status === 'success') {
                        alert("Tu cuenta ha sido eliminada con éxito. Lamentamos verte partir.");
                        // Súper importante: Redirigimos a la portada, porque su sesión ya no existe
                        window.location.href = "index.php"; 
                    } else {
                        alert("Error: " + data.message);
                    }

                } catch (error) {
                    console.error("Error al borrar la cuenta:", error);
                }
            }


        });
    }

    // BORRAR COMENTARIO : 
    const contenedor_comentarios = document.getElementById("contenedor_comentarios");

    if (contenedor_comentarios) {
        contenedor_comentarios.addEventListener("click", async (e) => {
            
            // Comprobamos si el clic se dio en el botón eliminar comentarios
            if (e.target.classList.contains("btn_borrar_comentario")) {
                const id_comentario = e.target.getAttribute("data-id");
                const confirmacion = confirm("¿Estás seguro de que quieres eliminar este comentario?");

                if (confirmacion) {
                    const formData = new FormData();
                    formData.append('id', id_comentario);
                    
                    try {
                        const respuesta = await fetch('borrar_comentario.php', {
                            method: 'POST',
                            body: formData
                        });
                        const data = await respuesta.json();
                        
                        if (data.status === 'success') {
                            // Eliminamos el div completo de la pantalla sin refrescar la página
                            const caja_del_comentario = e.target.closest(".comentario_item");
                            if (caja_del_comentario) {
                                caja_del_comentario.remove();
                            }
                        } else {
                            alert("Error al borrar el comentario: " + data.message);
                        }
                    } catch (error) {
                        console.error("Error al conectar con borrar_comentario.php:", error);
                    } 
                }
            }   
        });
    }

    //Voy a sacar el buscador :
    const buscador_comentarios = document.getElementById("buscador");
    //const contenedor_comentarios

    if(buscador_comentarios){
        buscador_comentarios.addEventListener("input", async(e) =>{
            const texto_buscado = e.target.value;

            //creo el nuevo form
            const formData = new FormData();
            formData.append('buscar', texto_buscado);

            try{
                //Envio asíncrono con fetch
                const respuesta = await fetch('buscador_comentarios.php', {
                    method: 'POST',
                    body: formData
                });

                const data = await respuesta.json();

               //Dibujamos en el panel:
               contenedor_comentarios.innerHTML = "";

               if(data.length === 0){
                    contenedor_comentarios.innerHTML = "<p>No hay comentarios que coincidan con tu búsqueda.</p>";
                    return;
                }

                // Si hay datos los pintamos:
                data.forEach(comentario => {
                    let panel_editado = "";
                    if(comentario.editado_por_moderador == 1){
                        panel_editado = '<small class="aviso-moderador">(Editado por moderador)</small>';
                    }

                    const htmlComentario = `
                            <div class="comentario_item">
                                <div class="controles-moderacion">
                                    <button class="btn_borrar_comentario" data-id="${comentario.id}">🗑️ Eliminar</button>
                                    <a href="editor_comentarios.php?id=${comentario.id}&origen=panel" class="btn_editar_comentario">✏️ Editar</a>
                                </div>

                                <p class="meta-comentario">
                                    <strong>Noticia #${comentario.id_noticia}</strong> | 
                                    👤 ${comentario.nombre} <small>(${comentario.fecha})</small>
                                </p>
                                
                                ${panel_editado}
                                
                                <p class="texto-comentario">${comentario.texto}</p>
                            </div>
                        `;

                    // Inyectamos el bloque en la pantalla (usando la variable correcta)
                    contenedor_comentarios.insertAdjacentHTML('beforeend', htmlComentario);
                });

            }catch(error){
                console.error("Error al conectar con buscar_comentarios.php:", error);
            }


        
        });
    }

    // PARTE GESTOR //////////////////////////
    //Borrar noticia:
    const contenedor_noticias = document.getElementById("contenedor_noticias");

    if (contenedor_noticias) {
        contenedor_noticias.addEventListener("click", async (e) => {
            
            // Comprobamos si el usuario ha hecho clic exactamente en un botón de borrar
            const boton_borrar = e.target.closest(".btn_borrar_noticia");

            if (boton_borrar) {
                e.preventDefault();

                // 1. En lugar de mirar la URL, leemos el ID oculto en el propio botón
                const id_noticia = boton_borrar.getAttribute("data-id");

                // 2. Preguntamos confirmación
                const confirmacion = confirm("¿Estás seguro de que quieres eliminar la noticia #" + id_noticia + "?");

                if (confirmacion) {
                    
                    // 3. Empaquetamos y enviamos a tu PHP existente
                    const formData = new FormData();
                    formData.append('id', id_noticia);

                    try {
                        const respuesta = await fetch('borrar_noticia.php', { 
                            method: 'POST',
                            body: formData
                        });
                       
                        const data = await respuesta.json();

                        if (data.status === 'success') {
                            // 4. ¡Magia visual! Borramos la tarjeta de la noticia de la pantalla al instante sin recargar la página
                            const tarjeta = boton_borrar.closest(".noticia_item");
                            if (tarjeta) {
                                tarjeta.remove();
                            }
                            // Opcional: Mostrar un aviso pequeñito (puedes comentarlo si te molesta)
                            alert("Noticia eliminada del sistema.");       
                        } else {
                            alert("Error del servidor: " + data.message);
                        }
                    } catch (error) {
                        console.error("Error crítico al borrar la noticia:", error);
                    }
                }
            }
        });
    }
    

// ==========================================
    // GUARDAR LA EDICIÓN O CREACIÓN DE LA NOTICIA
    // ==========================================
    const form_editor_noticia = document.getElementById("form_editor_noticia");

    if (form_editor_noticia) {
        form_editor_noticia.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Empaquetamos el form completo (Textos, fotos nuevas y fotos a borrar):
            const formData = new FormData(form_editor_noticia);
            
            // EL TRUCO: Decidimos el archivo PHP de destino leyendo el campo oculto
            const id_noticia_actual = formData.get('id_noticia');
            let url_destino = "";
            
            if (id_noticia_actual && parseInt(id_noticia_actual) > 0) {
                url_destino = "actualizar_noticia.php"; // Si hay ID, actualizamos
            } else {
                url_destino = "crear_noticia.php";      // Si no hay ID o es 0, creamos
            }

            try {
                const respuesta = await fetch(url_destino, {
                    method: 'POST',
                    body: formData
                });

                const data = await respuesta.json();

                if (data.status === "success") {
                    // Mensaje personalizado según lo que hayamos hecho
                    if (url_destino === "crear_noticia.php") {
                        alert("¡Nueva noticia creada y publicada con éxito!");
                        window.location.href = "panel_noticias.php"; // Si la creamos, volvemos al panel
                    } else {
                        alert("Cambios actualizados con éxito.");
                        const origen = formData.get('origen');
                        if (origen === "panel") {
                            window.location.href = "panel_noticias.php";
                        } else {
                            window.location.href = "noticia.php?id=" + id_noticia_actual;
                        }
                    }
                } else {
                    alert("Error: " + data.message);
                }
            } catch (error) {
                console.error("Error al conectar con " + url_destino + ":", error);
                alert("Ocurrió un error al procesar la solicitud.");
            }
        });
    }

    // BUSCADOR NOTICIAS
    const buscadorTitulo = document.getElementById("buscador_titulo");
    const buscadorDesc = document.getElementById("buscador_desc");
    const contenedor = document.getElementById("contenedor_noticias");

    function filtrarNoticias() {
        const t = buscadorTitulo.value;
        const d = buscadorDesc.value;

        fetch(`buscador_noticia.php?titulo=${t}&desc=${d}`)
            .then(res => res.json())
            .then(data => {
                // Limpiamos el contenedor
                contenedor.innerHTML = "";
                
                // Re-dibujamos las noticias encontradas
                data.forEach(noti => {
                    contenedor.innerHTML += `
                        <div class="noticia_item">
                            <h3 class="titulo-noticia-panel">${noti.titulo}</h3>
                            <p>${noti.descripcion.substring(0, 100)}...</p>
                        </div>
                    `;
                });
            });
    }

    if(buscadorTitulo) buscadorTitulo.addEventListener("keyup", filtrarNoticias);
    if(buscadorDesc) buscadorDesc.addEventListener("keyup", filtrarNoticias);
});