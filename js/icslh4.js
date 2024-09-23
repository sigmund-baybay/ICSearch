document.addEventListener('DOMContentLoaded', () => {
    const images = ['../../src/floorplan/1 Stairs.png', '../../src/floorplan/2 Stairs.png', '../../src/floorplan/3 LH4.png'];
    const titles = ['1st Floor', '2nd Floor', '3rd Floor'];
    let currentIndex = 0;

    function updateImageAndButtons() {
        document.getElementById('floorImage').src = images[currentIndex];
       
        document.querySelector('.floor-count h3').textContent = titles[currentIndex];

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