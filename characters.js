var contents = document.getElementById("characters");

const getCharacters = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/2993/cast');
  const characterData = await response.json();

  for (var i = 0; i < characterData.length; i++) {
    const name = characterData[i].character.name;
    const img = characterData[i].character.image.medium;
    const actor = characterData[i].person.name;
    contents.innerHTML +=
      `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card rounded-4 p-2 h-100 st-card">
        <img src="`+ img +`">
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title text-danger fw-semibold">`+ name +`</h5>
          <div class="card-text text-light">Played by `+ actor +`</div>
        </div>
      </div>
    </div>
   `;
  }
}

getCharacters();