$(document).ready(function() {
  $.get("/api/getGigs")
    .then((response) => {
      renderResults(response);
    })
    .catch((err) => console.log(err));

  function renderResults(gigs) {
    $(".search .results").empty(); // Clear the container if populated.

    if (gigs.length > 0) {
      gigs.forEach((gig) => {
        let card = `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${gig.title}</h5><h6 class="card-subtitle mb-2 text-muted">${gig.category}</h6><p class="card-text">${gig.description}</p><button class="card-link apply-bttn">Apply</button></div></div>`;

        $(".search .results").append(card);
      });
    } else {
      ("no gigs yet");
    }

    $(".apply-bttn").click(function() {
      alert("apllied");
    });
  }
});
