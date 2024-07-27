console.log('hola')
let boton = document.querySelector('#button');
let alerta = document.querySelector('#pet-type');
let dog = false; //variable que rastrea el alerta a dog
// MANEJO DE LOS LIKES DE PEPPER, BRUCE Y OSCAR
let petbtn = ['#btn','#btn1','#btn2']

//ELIMINAR BOTON
boton.addEventListener('click',function (evento){
    boton.remove();
})

//ALERTA
alerta.addEventListener('click', function() {
    let selectedOption = alerta.options[alerta.selectedIndex].value;
    if (selectedOption === 'Dog' && !dog) {
        alert('This page says You are looking for a: Dog');
        dog = true;
    }
});

//incrementa likes!
petbtn.forEach(button => {
    let btn = document.querySelector(button); // Cambia buttonId por button
    btn.addEventListener('click', function() {
        let x = this.previousElementSibling;
        let count = parseInt(x.innerText.replace(/[^0-9]/g, '')) || 0;
        x.innerText = `${count + 1} petting(s)`;
    });
});

