// Get the modal element by its id
var modal = document.getElementById("myModal");

// Get the image element inside the modal by its class
var modalImg = document.getElementById("modalImage");


// Global variables to track current image index and array of image sources
var currentImageIndex = 0;
var imageSources = [
    "./Images/1 (5).jpg",
    "./Images/1 (6).jpg",
    "./Images/1 (7).jpg",
    "./Images/1 (8).jpg",
    "./Images/1 (9).jpg",
    "./Images/1.jpg",
    "./Images/1 (1).jpg",
    "./Images/1 (2).jpg",
    "./Images/1 (3).jpg",
    "./Images/1 (4).jpg",
    "./Images/1 (10).jpg",
    "./Images/1 (11).jpg",
    "./Images/1 (12).jpg",
    "./Images/1 (13).jpg",
    "./Images/1 (14).jpg",
    "./Images/1 (15).jpg",
    "./Images/1 (16).jpg",
    "./Images/1 (17).jpg",
    "./Images/1 (18).jpg",
    "./Images/1 (19).jpg"
];

// Function to open the modal with clicked image
function openModal(imageSrc, index) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    currentImageIndex = index;
    // Updates the Nav buttons based on what image its on
    updateNavButtons();
    document.body.classList.add('modal-open');
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
}

// Function to show the previous image
function prevImage() {
    // Makes the current image index update by going back 1 index
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    // Updates the image based on the new index 
    modalImg.src = imageSources[currentImageIndex];
    updateNavButtons();
}

// Function to show the next image
function nextImage() {
    // Makes the current image index update by going foward 1 index
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    // Updates the image based on the new index 
    modalImg.src = imageSources[currentImageIndex];
    updateNavButtons();
}

// Function to update navigation buttons based on current image index
function updateNavButtons() {
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');

    // Shows/hides previous button based on current image index
    if (currentImageIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    // Shows/Hides next button based on current image index
    if (currentImageIndex === imageSources.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}
