$(document).ready(() => {
  let location = "";
  // let loading = false;

  // show loading screen when ajax request is sent
  $(document).ajaxSend(() => {
    $(".loading").show();
  });

  // search event when search button is click
  $(".volunteer-search-bttn").click(() => {
    location = $(".volunteer-location-input").val();
    searchEvents(location);
  });

  // search event when enter key is pressed
  $(".volunteer-location-input").on("keypress", (event) => {
    location = event.target.value;

    if (event.key === "Enter") {
      searchEvents(location);
    }
  });

  // handle search s
  function searchEvents(location) {
    if (location) {
      let url = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?keywords=volunteer&t=Next+30+Days&include=links&app_key=dSgcPNSbCFTGkjzg&location=${location}`;

      $.ajax({
        url: url,
        method: "GET",
      }).then((response) => {
        $(".loading").hide(); // hide loading screen

        let events = JSON.parse(response).events;

        if (events === null) {
          alert("No event found in this area please try again");
        } else {
          events = events.event; // target the events array

          console.log(events);

          events.map((event) => {
            let card = `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${event.title}</h5><h6 class="card-subtitle mb-2 text-muted">${event.city_name}</h6><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="${event.url}" class="card-link">Learn More</a></div></div>`;

            $(".volunteer-response").append(card);
          });
        }
      });
    } else {
      alert("please enter location");
    }
  }
});
