//js
function dateToday() {
    let today = new Date()
    console.log(today);

    document.getElementById('date-today').innerText = today;
}

dateToday()
document.getElementById('search-btn').addEventListener('click', getResult)


function getResult() {
    clear();

    const activeCase = document.getElementById('active-case');
    const todayCases = document.getElementById('today-case');
    const todayDeath = document.getElementById('today-death');
    const totalDeath = document.getElementById('total-death');
    const oneDeathPerPeople = document.getElementById('one-death-per-people');
    const todayRecovered = document.getElementById('today-recovered');
    const oneCasePerPeople = document.getElementById('one-case-per-people');
    const oneTestPerPeople = document.getElementById('one-test-per-people');
    const totalRecovered = document.getElementById('total-recovered');


    let countryName = document.getElementById('country-name').value;
    countryName = countryName.toUpperCase();

    fetch(`https://corona.lmao.ninja/v2/countries/${countryName}`)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            const flag = data.countryInfo.flag;


            document.getElementById('country-flag').innerHTML += `
            : <span style="color: royalblue;">${countryName}</span>
            <img src="${flag}" alt="country flag" style="width: 50px;">
            `;

            activeCase.innerHTML += `
            <span class="bg-primary p-1 text-white rounded">${data.active}</span>
            `;

            todayCases.innerHTML += `
            <span class="bg-warning p-1 rounded">${data.todayCases}</span>
            `;

            todayDeath.innerHTML += `
            <span class="bg-danger p-1 text-white rounded">${data.todayDeaths}</span>
            `;

            totalDeath.innerHTML += `
            <span class="bg-danger p-1 text-white rounded">${data.deaths}</span>
            `;

            oneDeathPerPeople.innerHTML += `
            <span class="bg-info p-1 text-white rounded">${data.oneDeathPerPeople}</span>
            `;

            todayRecovered.innerHTML += `
            <span class="bg-success p-1 text-white rounded">${data.todayRecovered}</span>
            `;

            oneCasePerPeople.innerHTML += `
            <span class="bg-info p-1 text-white rounded">${data.oneCasePerPeople}</span>
            `;

            oneTestPerPeople.innerHTML += `
            <span class="bg-info p-1 text-white rounded">${data.oneTestPerPeople}</span>
            `;

            totalRecovered.innerHTML += `
            <span class="bg-success p-1 text-white rounded">${data.recovered}</span>
            `;


        })
}

function clear() {
    document.getElementById('country-flag').innerHTML = '';
    document.getElementById('active-case').innerHTML = '';
    document.getElementById('today-case').innerHTML = '';
    document.getElementById('today-death').innerHTML = '';
    document.getElementById('total-death').innerHTML = '';
    document.getElementById('one-death-per-people').innerHTML = '';
    document.getElementById('today-recovered').innerHTML = '';
    document.getElementById('one-case-per-people').innerHTML = '';
    document.getElementById('one-test-per-people').innerHTML = '';
    document.getElementById('total-recovered').innerHTML = '';
}
