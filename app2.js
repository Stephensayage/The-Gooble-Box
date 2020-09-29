const charDiv = document.getElementById('char-container');

async function displayAllEpisodes() {
  const urlAll = "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36"
  const response = await axios.get(`${urlAll}`);
  const allEps = response.data


  allEps.forEach((episode) => {
    charDiv.innerHTML += `
    <div id="char-id">
    <div id="char-content">
    <p class="id-num">Id: ${episode.id}</p>
    <p id="gen-ep"><span class="span">Episode:</span> ${episode.episode}</p>
    <p id="gen-name"><span class="span">Name:</span> ${episode.name}</p>
    <p id="gen-species"><span class="span">Air Date:</span> ${episode.air_date}</p>
    <img class="logo" src="https://i.imgur.com/gMRuI2T.png">
    </div>
    </div>
        `
  });

}
displayAllEpisodes();