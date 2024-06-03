const url = "https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo";

async function fetchVagons(){
    const response = await fetch(url);
    const {Vagons} = await response.json();

    const vagonCards = Vagons.map(vagon => {
        const vagonCard = document.createElement('div');
        vagonCard.innerHTML = 
        "<p>Vagon Number:" + vagon.VagonNumber + "</p><p>Vagon Type:" + vagon.VagonType + "</p><p>Cargo Name:" + vagon.CargoName + "</p><p>Owner Name:" + vagon.OwnerName + "</p><p>Departure Station Name:" + vagon.DepartureStationName +"</p>";
        return vagonCard;
    });

    const card = document.getElementById('cards');

    vagonCards.forEach(vagonCard => {
        card.appendChild(vagonCard);
    })
}

fetchVagons();