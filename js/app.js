let currentSearchType = 'Room';

function setSearchType(type) {
    currentSearchType = type;
    const searchBar = document.getElementById('search-bar');
    const roomButton = document.getElementById('room-button');
    const facultyButton = document.getElementById('faculty-button');

    if (type === 'Room') {
        searchBar.placeholder = 'Enter a room...';
        roomButton.classList.add('active');
        facultyButton.classList.remove('active');
    } else {
        searchBar.placeholder = 'Enter faculty name...';
        roomButton.classList.remove('active');
        facultyButton.classList.add('active');
    }
}

function handleSearch(event) {
    event.preventDefault(); 

    const searchValue = document.getElementById('search-bar').value;

    if (searchValue.trim() === '') {
        alert('Please add an input.');
        return;
    }

    if (currentSearchType === 'Room') {
        window.location.href = 'searchValue';
    } else if (currentSearchType === 'Faculty') {

        window.location.href = 'searchValue';
    }
}