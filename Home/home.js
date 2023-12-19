
// Function to load and insert HTML content
function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(content => {
      document.getElementById(elementId).innerHTML = content;
    });
}

// Load the header, feature, and footer
loadHTML('../common/header.html', 'header');
loadHTML('./cover.html', 'cover');
loadHTML('../Common/feature.html', 'feature');
loadHTML('../common/footer.html', 'footer');