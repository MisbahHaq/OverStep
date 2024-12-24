// Function to change the main image when a thumbnail is clicked
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src; // Update the source of the main image
  }
  