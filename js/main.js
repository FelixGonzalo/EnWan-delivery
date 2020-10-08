window.addEventListener('load',()=>{
    // filtro de aliados
    const grid = new Muuri('.grid', {
        layout: {
            rounding: false
        }
    });

    // filtro de aliados
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
    const enlaces = document.querySelectorAll('#aliados__categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (evento)=> {
            evento.preventDefault();
            enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
            evento.target.classList.add('activo');
            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        })
    });

    // Muestra informacion del aliado
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento)=>{
        elemento.addEventListener('click', ()=>{
            const ruta = elemento.getAttribute('src');
            const categoria = elemento.parentNode.parentNode.dataset.categoria;
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src=ruta;
            document.querySelector('#overlay p').innerHTML=descripcion;
            document.querySelector('#overlay h3').innerHTML=categoria;
        })
    });

    // cierra la informacion del aliado
    document.querySelector('#btn-cerrar').addEventListener(('click'),()=>{
        overlay.classList.remove('activo');
    });
    overlay.addEventListener(('click'),(evento)=>{
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
});

