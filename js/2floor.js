document.addEventListener('DOMContentLoaded', () => {
    const images = ['../../src/floorplan/1 Stairs.png', '../../src/floorplan/2 MH.png'];
    let currentIndex = 0;

    function updateImageAndButtons() {
        document.getElementById('floorImage').src = images[currentIndex];

        document.getElementById('prevButton').disabled = (currentIndex === 0);
        document.getElementById('nextButton').disabled = (currentIndex === images.length - 1);
    }

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImageAndButtons();
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImageAndButtons();
        }
    });

    updateImageAndButtons();
});
