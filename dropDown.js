const selectcountry = document.querySelector('.select-country');
const countryListSearch =document.querySelector('.country-search');
const countryList =document.querySelector('.country-list');
const input =document.querySelector('.input');
selectcountry.addEventListener('click',selected)
let searchValue=''; 

const countries =[
    {
        id:1,country:'INDIA'
    },
    {
        id:2,country:'America'
    },
    {
        id:3,country:'SPAIN'
    },
    {
        id:4,country:'FRANCE'
    },
    {
        id:5,country:'GERMANY'
    },
    {
        id:6,country:'NETHERLANDS'
    },
    {
        id:7,country:'BELGIUM'
    },
    {
        id:8,country:'HOLLAND'
    },
    {
        id:9,country:'SWITZERLAND'
    },
]
function showCountries(country){
    for(let c in country)
        {
        
            const a =document.createElement('p');
            a.innerText=country[c].country;
            countryList.appendChild(a);
        }
}


function selected(){
    countryListSearch.classList.toggle('hide');

}

function handleChange(event){
searchValue=event.target.value;
filterCountry = countries.filter(({country})=>{
   return country.toLowerCase().startsWith(searchValue.toLowerCase())
});
countryList.innerHTML='';
showCountries(filterCountry);
}

input.addEventListener('keyup',handleChange);