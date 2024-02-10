<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Results</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <h2>Search Results</h2>
  <?php
    $searchTerm = $_GET['q'];
    // Assuming the search term is used to load an image, here we'll just display the search term
    echo "<p>You searched for: " . htmlspecialchars($searchTerm) . "</p>";
  ?>
  <!-- Placeholder for the image loading -->
  <img src="Imesh Udayanga_7/cat.jpg" alt="Search Result Image">
  <img src="Imesh Udayanga_7/dog.jpg" alt="Search Result Image">
</div>
</body>
</html>
