
// Function to load and insert HTML content
function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(content => {
      document.getElementById(elementId).innerHTML = content;
    });
}

// Load the header and footer
loadHTML('../../Common/header.html', 'header');
loadHTML('../Banner/banner.html', 'banner')
loadHTML('../../common/footer.html', 'footer');