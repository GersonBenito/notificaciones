// obtener id del boton
const notificarBtn = document.querySelector('.notificar');
const verNotificacionBtn = document.querySelector('.verNotificacion');

// preguntar al usuario si desea activar las mnotifacaciones del navegador
notificarBtn.addEventListener('click', () => {

    // usando la api de noticacion nativa de js
    Notification.requestPermission()
                    .then( result =>{
                        console.log('el resultado es ', result);
                    }).catch(error =>{
                        console.log('error al obtener permisos del usuario', error);
                    })

});

// ver notificaciones aceptados por el usuario
verNotificacionBtn.addEventListener('click', () => {
    // revisar si el usuario acepto la notificacion
    if(Notification.permission === 'granted'){
        // se crear una nueva notifcacion
        const notificacion = new Notification('Hola, Gracias por aceptarlo', { // el titulo puede venir desder una base de datos
            icon: 'test-image.png',
            body: 'Notificacion creado desde JavaScript, por Gerson Benito' // el contenido puede venir desde una base de datos
        });

        // abrir una nueva ventana del navegador cuando el usuario de click sobre la notificacion
        notificacion.onclick = () =>{
            // abrir ventana con el objeto window
            window.open('https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Using_the_Notifications_API');
        }
    }
})