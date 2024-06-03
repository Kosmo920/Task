const url = "https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo"

async function fetchVagons(){
    const response = await fetch(url);
    const {Vagons} = await response.json();
    console.log(Vagons);
}

fetchVagons()
