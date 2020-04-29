$(document).ready(function() {
  $.get("/api/getGigs")
    .then((response) => {
      renderResults(response);
    })
    .catch((err) => console.log(err));

  function renderResults(gigs) {
    // gigObjects = []; //empty the array var for modals
    $(".search .results").empty(); // Clear the container if populated.
    console.log(gigs);

    if (gigs.length > 0) {
      gigs.forEach((gig) => {
        let card = `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${gig.title}</h5><h6 class="card-subtitle mb-2 text-muted">${gig.category}</h6><p class="card-text">${gig.description}</p><a href="" class="card-link">Apply</a></div></div>`;

        $(".search .results").append(card);
      });
    }
  }
});
