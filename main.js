document.querySelectorAll('.accordion-button1').forEach(button => {
    button.addEventListener('click',() => //seleccionamos el id que tiene nuestro botón y le decimos que tipo de evento de ratón tendrá
    {
        const content = button.nextElementSibling;
        button.classList.toggle('accordion-button1-active');
        
        if (button.classList.contains('accordion-button1-active'))
        {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        else
        {
            content.style.maxHeight = 0;
        }
    })
    
});

const button_contacto = document.getElementById('contact');
const container = document.getElementById('container-1');
const button_exit = document.getElementById('exit');
const form = document.getElementById('formulario');
button_contacto.addEventListener('click', () =>
{
   const  right = document.getElementById('subir');
    form.classList.toggle('active');
    container.style.filter = 'blur(2px)';
    right.style.filter = 'blur(2px)';
    container.style.overflowY = 'hidden'
    
    
})

const cerrar = document.getElementById('exit')

cerrar.addEventListener('click',()=>{
    const  right = document.getElementById('subir');
    form.classList.remove("active")
    container.style.filter = 'none';
    right.style.filter = 'none';
   
})

// acá animare el svg para que tenga un efecto de scroll

window.addEventListener('scroll', () => {
    let animacion = document.getElementById('animate-svg');
    let posicion = animacion.getBoundingClientRect().top;
    let tamaño = window.innerHeight/3; // de esta manera tenemos la altura de la pantalla en js totalmente dínamica
    if(posicion < tamaño){
        animacion.style.animation = 'animate2 1.5s ease-in-out'
    }
})