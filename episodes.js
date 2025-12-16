var episodesContainer = document.getElementById("episodes");

const getEpisodes = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/2993/episodes');
  const episodesData = await response.json();

  for (var i = 0; i < episodesData.length; i++) {
    episodesContainer.innerHTML += 
    `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card rounded-4 p-2 h-100 st-card">
          <img src="${episodesData[i].image?.medium || 'images/not-released.png'}"
          height="200">
          <div class="card-body d-flex flex-column text-center">
            <div class="card-title text-danger fw-semibold fs-5">${episodesData[i].name}</div>
            <div class="card-text text-light" style="text-align:justify;">${episodesData[i].summary || ' '}</div>
          </div>
        </div>
      </div>
    `;
  }
}

getEpisodes();