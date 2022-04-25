var aEvents = []


console.log(aEvents);

async function getData() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then(response => response.json())
    .then(json => aEvents.push(...json.eventos))
    console.log(aEvents);
    
   console.log(location);
   var id= location.search.split("?id=").filter(Number)
   var selectedId = Number(id[0])
   console.log(selectedId);
   var fiesta = aEvents.find(function(fiesta){
       return fiesta.id == selectedId
   })
//    var templateHtml =""    
//     toDisplay.map(fiesta =>{
       var  templateHtml=
        `<div class="card">
        <div class="face front">
         <img src="${fiesta.image}">
           <h3>${fiesta.category}</h3>
        </div>
        <div class="face back">
            <h3>${fiesta.name}</h3>
            <p>${fiesta.date} - ${fiesta.place}</p> 
            <p> ${fiesta.description}</p>
            <p> capacidad: ${fiesta.capacity}</p>
            <p> asistencia: ${fiesta.assistance}</p>
            <p> estimado: ${fiesta.estimate}</p>
            <p> precio: $ ${fiesta.price}</p>
            
        </div>
    </div>`
  
    document.querySelector(".impresionTarjeta").innerHTML=templateHtml
  
}

getData()


