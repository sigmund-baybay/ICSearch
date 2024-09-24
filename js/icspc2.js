document.addEventListener('DOMContentLoaded', () => {
    const images = ['../../src/floorplan/1 Stairs.png', '../../src/floorplan/2 PC2.png'];
    const titles = ['1st Floor', '2nd Floor'];
    let currentIndex = 0;

    function updateImageAndButtons() {
        document.getElementById('floorImage').src = images[currentIndex];
        document.querySelector('.floor-count h3').textContent = titles[currentIndex];
    }

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentIndex > 0) 
            currentIndex--;
        else 
            currentIndex = images.length-1;
        updateImageAndButtons();
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentIndex < images.length - 1) 
            currentIndex++;
        else
            currentIndex = 0;
        updateImageAndButtons();
    });
});