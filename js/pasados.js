var aEvents = []
var dateActual=""
var pasado = []
var eventos=[]
var categorias =[]
var categoriasFiltradas =[]
var val1=""
var val2=""
var eventosPorSelector = []
var arrayFiltrado = []

async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json => aEvents.push(json))
    

    eventos= aEvents[0].eventos
    console.log(eventos);
    dateActual= aEvents[0].fechaActual

    categorias.push(...eventos.map(categoria=>categoria.category))
    var limpiarCategory =new Set(categorias)
    categoriasFiltradas=[...limpiarCategory]
    console.log(categorias);
    console.log(limpiarCategory);
    var tarjetaImpresa=""

    var selector = document.querySelector("#selector")
    categoriasFiltradas.map(cat1=>{
        tarjetaImpresa+=`
        <option value="${cat1}">${cat1}</option>
        `
    })
    selector.innerHTML=tarjetaImpresa

    pasado.push(...aEvents[0].eventos.filter(item=>item.date<dateActual))
    var tarjetaP = pasado.slice(0,24)

    console.log(dateActual);
    console.log(aEvents);    
    displayCard(tarjetaP)
}
getData()

function selectorCategorias(event) {
    val1 = event.target.value
    if (val2!=="") {
        arrayFiltrado=eventos.filter(evento=>evento.name.toLowerCase().includes(val2.toLowerCase()))
        eventosPorSelector = arrayFiltrado.filter(evento=>evento.category==val1)
        displayCard(eventosPorSelector)
    }else{
        eventosPorSelector= eventos.filter(evento=>evento.category==value)
        displayCard(eventosPorSelector)
    }
}
document.querySelector("#selector").addEventListener("change",selectorCategorias)

function search(event) {
    val2 = event.target.value
    if (val1 !== "") {
        
    eventosPorSelector = eventos.filter(eventos=>eventos.category== val1)
    arrayFiltrado = eventosPorSelector.filter(eventos=>eventos.name.toLowerCase().includes(val2.toLowerCase()))

    displayCard(arrayFiltrado)

    }else{
        arrayFiltrado =eventos.filter(eventos=>eventos.name.toLowerCase().includes(val2.toLowerCase()))
        displayCard(arrayFiltrado)
    }
    
}
document.querySelector("#searchInput").addEventListener("keyup",search)





function displayCard(data) {
   
    var templateHtml =""    
    data.map(fiesta =>{
        templateHtml+=
        `<div class="card">
        <div class="face front">
            <img src="${fiesta.image}" alt="">
           <h3>${fiesta.category}</h3>
        </div>
        <div class="face back">
            <h3>${fiesta.name}</h3>
            <p>${fiesta.date} - ${fiesta.place}</p> 
            <p> ${fiesta.description}</p>
            <div class="link">
                <a href="./detalles.html?id=${fiesta.id}">Evento</a>
            </div>
        </div>
    </div>`
    })
    document.querySelector(".impresionTarjeta").innerHTML=templateHtml
}