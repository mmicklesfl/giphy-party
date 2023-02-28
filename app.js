const $gifContainer = $("#gif-container");
const $searchInput = $("#search-gif");


$("form").on("submit", async function(evt) {
    evt.preventDefault();

    let searchTerm = $searchInput.val();
  $searchInput.val("");
  
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

function addGif(res) {
    if (res.data && res.data.length > 0) {
        const randomGif = Math.floor(Math.random() * res.data.length);
        const $newGif = $("<img>", {
            src: res.data[randomGif].images && res.data[randomGif].images.original && res.data[randomGif].images.original.url,
            width: 250
        });      
        $gifContainer.append($newGif);
    }
}

  $("#clear").on("click", function() {
    $gifContainer.empty();
  });
  

  