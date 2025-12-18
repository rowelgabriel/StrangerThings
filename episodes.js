const episodesContainer = document.getElementById("episodes");
const seasonLinks = document.querySelectorAll(".page-link");

let episodesData = [];
let currentSeason = 1;

const getEpisodes = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/2993/episodes');
  episodesData = await response.json();
  displayEpisodes(currentSeason);
}

const displayEpisodes = (season) => {
  episodesContainer.innerHTML = "";
  currentSeason = season;

  const seasonEpisodes = episodesData.filter(ep => ep.season === season);

  for (let i = 0; i < seasonEpisodes.length; i++) {
    const title = seasonEpisodes[i].name;
    const img = seasonEpisodes[i].image?.medium || 'images/not-released.png';
    const summary = seasonEpisodes[i].summary || ' ';

    episodesContainer.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card rounded-4 p-2 h-100 st-card">
          <img src="`+ img + `" height="200">
          <div class="card-body d-flex flex-column text-center">
            <div class="card-title text-danger fw-semibold fs-5">`+ title + `</div>
            <div class="card-text text-light" style="text-align:justify;">`+ summary + `</div>
          </div>
        </div>
      </div>
    `;
  }
  updateActivePage();
}

const updateActivePage = () => {
  seasonLinks.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.textContent.includes(currentSeason)) {
      link.parentElement.classList.add("active");
    }
  });
}

seasonLinks.forEach((link, index) => {
  link.onclick = () => {
    displayEpisodes(index + 1);
  };
});

getEpisodes();