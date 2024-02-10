function search() {
    var searchTerm = document.getElementById("searchBox").value;
    // Redirect to search page with the search term as query parameter
    window.location.href = "search.php?q=" + encodeURIComponent(searchTerm);
  }
  