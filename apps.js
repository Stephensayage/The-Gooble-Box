const button = document.getElementById('generate');
const charDiv = document.getElementById('char-container');
const gifDiv = document.getElementById('gif');
// -------------------------------------------------------------
// remove div functions
function removePeople() {
  const removeDiv = document.querySelector('#char-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
function removeGif() {
  const removeDiv = document.querySelector('#gif')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
function removeBar() {
  const removeDiv = document.querySelector('#bar-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
// -------------------------------------------------------------

// Generate random character numbers to API
function getRandomChar(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// -------------------------------------------------------------
// load gif and append
function loadGif() {
  const portal = document.createElement('img')
  portal.classList = "portal"
  portal.src = "https://media.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif";
  gifDiv.append(portal);
}
// -------------------------------------------------------------
// Loading bar function
let i = 0;
function loadingBar() {
  if (i == 0) {
    i = 1;
    const bar = document.createElement("div");
    bar.classList = "load"
    bar.innerHTML = "Goobling..."
    document.getElementById('bar-container').append(bar)
    document.getElementById('bar-container').style.display = "inline";
    let width = 1;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById('bar-container').style.display = "none";
        removeGif();
      } else {
        width++;
        bar.style.width = width + "%";
      }
    }
  }
}
// -------------------------------------------------------------


button.addEventListener('click', async () => {
  const url = `https://rickandmortyapi.com/api/character/${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)},${getRandomChar(591)}`
  const response = await axios.get(`${url}`)
  const chars = response.data



  loadGif();

  removeBar();
  loadingBar();

  removePeople();

  setTimeout((loadChars) => {
    chars.map((character) => {
      const fixEp = character.episode.map(function (r) {
        r.replace('https://rickandmortyapi.com/api/', '')
        if (character.episode.length > 4) {
          return null;
        } else {
          return r.replace('https://rickandmortyapi.com/api/', '')
        }
      })

      charDiv.innerHTML += `
    <div id="char-id">
    <img id="gen-img" src=${character.image}>
    <div id="char-content">
    <p class="id-num">Id: ${character.id}</p>
    <p id="gen-name"><span class="span">Name:</span> ${character.name}</p>
    <p id="gen-species"><span class="span">Species:</span> ${character.species}</p>
    <p id="gen-origin"><span class="span">Origin:</span> ${character.origin.name}</p>
    <p id="gen-location"><span class="span">Last Known Location:</span> ${character.location.name}</p>
    <p id="gen-ep"><span class="span">Episodes:</span> <br> ${fixEp}</p>
    <img class="logo" src="https://i.imgur.com/gMRuI2T.png">
    </div>
    </div>
    `
    })
  }, 2000);
})

