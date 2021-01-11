# The-Gooble-Box
- Gooble-Box.surge.sh
## App Title: The Gooble Box
## App Description: 
- A Rick and Morty character generator that will list 6 characters, displaying their names and 3-5
random episodes they have been in.
## API: https://rickandmortyapi.com/documentation/#rest
## API Snippet:
```{
"id": 6,
"name": "Abadango Cluster Princess",
"status": "Alive",
"species": "Alien",
"type": "",
"gender": "Female",
"origin": {
"name": "Abadango",
"url": "https://rickandmortyapi.com/api/location/2"
},
"location": {
"name": "Abadango",
"url": "https://rickandmortyapi.com/api/location/2"
},
"image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
"episode": [
"https://rickandmortyapi.com/api/episode/27"
],
"url": "https://rickandmortyapi.com/api/character/6",
"created": "2017-11-04T19:50:28.250Z"
},
{
"id": 7,
"name": "Abradolf Lincler",
"status": "unknown",
"species": "Human",
"type": "Genetic experiment",
"gender": "Male",
"origin": {
"name": "Earth (Replacement Dimension)",
"url": "https://rickandmortyapi.com/api/location/20"
},
"location": {
"name": "Testicle Monster Dimension",
"url": "https://rickandmortyapi.com/api/location/21"
},
"image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
"episode": [
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11"
],
"url": "https://rickandmortyapi.com/api/character/7",
"created": "2017-11-04T19:59:20.523Z"
}
```

## Wireframes: https://wireframe.cc/PsT1sX
#### MVP:
- Create generate button to display 6 random characters
- Display character names and 3-5 episodes they have appeared in.
- Display images of character
#### Post-MVP:
- Create a full list of itemized episodes to access at any point
- Create mobile view
- Add animation or gif

## Goals

| Day | Deliverable | Status
|---|---| ---|
|Monday, 6/8| Map out project - Project approval | Completed
|Tuesday, 6/9| Create Core HTML and Basic CSS | Completed
|Wednesday, 6/10| Set up Api. Creat code for generating random images and character information | Completed
|Thursday, 6/11| Advanced CSS and clean up code to ensure functionaily | Completed
|Friday, 6/12| Debugging | Completed
|Monday, 6/15| Present project | Completed

## Priority Matrix: https://wireframe.cc/3bh19E

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| HTML | M | 3hr| 3hrs | 3hrs |
| Basic CSS | M | 3hrs| 3hrs | 3hrs |
| Set up API functionaily | M | 4hrs | 5hrs | 5hrs |
| Create code to generate random charcters| H | 4hrs | 2hrs | 2hrs |
| Set parameters to random characters | M | 2hrs | 5hrs | 5hrs |
| Display results | H | 3hrs | 2hrs | 2hrs |
| Set to reset characters on clicking generate again | H | 3hrs | 1hrs | 1hrs |
| Advanced CSS | L | 4hrs | 4hrs | 3hrs |
| Add animation or gif | L | 2hrs | 2hrs | 2hrs |
| Style mobile view | L | 4hrs | 4hrs | 4hrs |
| Total | H | 32hrs| 31hrs | 31hrs |

## Code Snippet
```
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
    let loader = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(loader);
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
```

## Change Log
- The episodes endpoint had a lot of imcomplete data, so I ended up making a page just for the episodes.
- 6 characters looked too empty, changed to 9 characters.
