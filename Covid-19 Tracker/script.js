
const searchForm = document.querySelector('form');
const searchFormGroup = document.querySelector('.form-group')
const cases = document.querySelector('.cases')
const formrow = document.querySelector('.form-row')

 


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchCity = e.target.querySelector('input').value
    console.log(searchCity)
    fetchAPI();
});

 function fetchAPI() {
    const searchCity= document.querySelector('input').value
    // const baseURL = `https://covid-api.mmediagroup.fr/v1/cases?country=${searchCity}`;
    fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${searchCity}` )
        .then((response) => {
        return response.json();
        })
        .then(( data) => {
            console.log(data);
                document.getElementById("confirmed").innerHTML = data.All.confirmed ;
                document.getElementById("recovered").innerHTML = data.All.recovered ;
                document.getElementById("deaths").innerHTML = data.All.deaths ;

})
fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${searchCity}` )
.then((response) => {
return response.json();
})
.then(( data) => {
    console.log(data);
    document.getElementById("newly_confirmed").innerHTML = data.All.people_vaccinated ;
    document.getElementById("new_death").innerHTML = data.All.population ;
    document.getElementById("new_recover").innerHTML = data.All.updated ;

})

}


// fetch(`https://api.covid19india.org/state_district_wise.json    ` )
// .then((response) => {
// return response.json();
// })
// .then(( data) => {
//     console.log(data);
//     document.getElementById("new").innerHTML = data.Puducherry.districtData.Puducherry.active ;

// })

// function generateHTML(results){

//     const showcases ='';
//     results.map(result => {
//         showcases +=   `
//                                 <div class="card-body">
//                                     <h5 class="card-title">${result.data.All}</h5>
//                                     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="card-link">Card link</a>
//                                     <a href="#" class="card-link">Another link</a>
//                                 </div>`
//     })
//     document.getElementById("card-body").innerHTML = showcases;

// }







// fetch('https://covid-api.mmediagroup.fr/v1/cases')
// .then((response) => {
//   return response.json();
// })
// .then(( data) => {
//     console.log(data);
//     document.getElementById("active").innerHTML = data.India.Delhi.deaths ;

// })














