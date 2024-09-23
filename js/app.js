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

    // Get the search value, trim whitespace, and remove spaces
    const searchValue = document.getElementById('search-bar').value.trim().replace(/\s+/g, "").toLowerCase();

    if (searchValue === '') {
        alert('Please add an input.');
        return;
    }

    if (currentSearchType === 'Room') {
        window.location.href = `pages/rooms/${searchValue}.html`;
    } else if (currentSearchType === 'Faculty') {
        window.location.href = `pages/profs/${searchValue}.html`;
    }
}

