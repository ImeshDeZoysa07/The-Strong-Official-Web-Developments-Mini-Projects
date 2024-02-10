document.getElementById('loadButton').addEventListener('click', function() {
    var imageUrl = document.getElementById('textBox').value;
    if (imageUrl) {
      // Open a new page
      window.open('new_page.html', '_blank');
      // Store image URL in sessionStorage
      sessionStorage.setItem('imageUrl', imageUrl);
    } else {
      alert('Please enter an image URL');
    }
  });
  