const url = "https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo";

async function fetchVagons() {
    const response = await fetch(url);
    const { Vagons } = await response.json();
    return Vagons;
}

async function displayVagons(vagons) {
    const card = document.getElementById('cards');
    card.innerHTML = '';
    const vagonCards = vagons.map(vagon => {
        const vagonCard = document.createElement('div');
        vagonCard.innerHTML =
            "<p>Vagon Number: " + vagon.VagonNumber + "</p>" +
            "<p>Vagon Type: " + vagon.VagonType + "</p>" +
            "<p>Cargo Name: " + vagon.CargoName + "</p>" +
            "<p>Owner Name: " + vagon.OwnerName + "</p>" +
            "<p>Departure Station Name: " + vagon.DepartureStationName + "</p>";
        return vagonCard;
    });

    vagonCards.forEach(vagonCard => {
        card.appendChild(vagonCard);
    });
}

async function sortByNumber() {
    const vagons = await fetchVagons();
    vagons.sort((a, b) => a.VagonNumber - b.VagonNumber);
    displayVagons(vagons);
}

async function sortByStation() {
    const vagons = await fetchVagons();
    vagons.sort((a, b) => a.DepartureStationName.localeCompare(b.DepartureStationName));
    displayVagons(vagons);
}

async function search() {
    const input = document.getElementById('filterInput');
    const searchValue = input.value;
    const vagons = await fetchVagons();
    const filteredVagons = vagons.filter(vagon => vagon.VagonNumber.includes(searchValue));

    displayVagons(filteredVagons);
}

fetchVagons().then(displayVagons);