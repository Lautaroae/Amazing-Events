
var aEvents = []
var dateActual=""
var futuro =[]
var pasado = []


async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json => aEvents.push(json))

    dateActual= aEvents[0].fechaActual
    futuro.push(...aEvents[0].eventos.filter(item=>item.date>dateActual))
    var tarjetaF=futuro.slice(0,2)

   
    pasado.push(...aEvents[0].eventos.filter(item=>item.date<dateActual))
    var tarjetaP = pasado.slice(0,2)

    

    console.log(dateActual);

    console.log(aEvents);

    displayCard(tarjetaF)
    displayCard2(tarjetaP)
}

getData()

function displayCard(data) {
    var toDisplay=[]

    if (data) {
        toDisplay=[]
        toDisplay.push(...data)
    }
    else{
        toDisplay=[]
        toDisplay.push(...aEvents)
    }
    
  

    var templateHtml =""
    
    toDisplay.map(fiesta =>{
        templateHtml+=
        `<div class="card">
        <div class="face front">
            <img src="${fiesta.image}" alt="">
           <h3>${fiesta.category}</h3>
        </div>

        <div class="face back">
            <h3>${fiesta.name}</h3>
            <p>${fiesta.date}- ${fiesta.place}</p> 
            <p> ${fiesta.description}</p>
            <div class="link">
                <a href="./detalles.html?id=${fiesta.id}">Evento</a>
            </div>
        </div>
    </div>`
    })
    document.querySelector(".impresionTarjeta").innerHTML=templateHtml
}


function displayCard2(data) {
    var toDisplay=[]

    if (data) {
        toDisplay=[]
        toDisplay.push(...data)
    }
    else{
        toDisplay=[]
        toDisplay.push(...aEvents)
    }
    
  

    var templateHtml =""
    
    toDisplay.map(fiesta =>{
        templateHtml+=
        `<div class="card">
        <div class="face front">
            <img src="${fiesta.image}" alt="">
           <h3>${fiesta.category}</h3>
        </div>

        <div class="face back">
            <h3>${fiesta.name}</h3>
            <p>${fiesta.date}- ${fiesta.place}</p> 
            <p> ${fiesta.description}</p>
            <div class="link">
                <a href="./detalles.html?id=${fiesta.id}">Evento</a>
            </div>
        </div>
    </div>`
    })
    document.querySelector(".impresionTarjeta2").innerHTML=templateHtml
}


// oro puro NO BORRAR

// var  eventosAe= []
// var fechaHoy = ""
// var futuro = []

// async function getData2() {
//     await fetch("../AmazingEvents.json")
//     .then(response => response.json())
//     .then(json => eventosAe.push(json))

//     fechaHoy=eventosAe[0].fechaActual

//     futuro.push(...eventosAe[0].eventos.filter(item=>item.date>fechaHoy))
//     var tarjetasF= futuro.slice(0,2)
    
//     console.log(tarjetasF);

//     console.log(futuro);

//     console.log(eventosAe);
//     console.log(fechaHoy);
    
    
// }

// getData2()

// ---------------------------------------
//