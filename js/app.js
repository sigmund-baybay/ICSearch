let currentSearchType = 'Room';

const searchRoom = {
    "ics mh": "pages/rooms/icsmh.html",
    "ics pc2": "pages/rooms/icspc2.html",
    "ics pc9": "pages/rooms/icspc9.html",
    "ics lh4": "pages/rooms/icslh4.html",
};
const searchProf = {
    "juan miguel j. bawagan": "pages/profs/jjbawagan.html",
    "perico dan b. dionisio": "pages/profs/pbdionisio.html"
}

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

    const searchValue = document.getElementById('search-bar').value.trim().toLowerCase();

    if (searchValue === '') {
        alert('Please add an input.');
        return;
    }

    if (currentSearchType === 'Room') {
        if (!(searchValue in searchRoom)) { 
            alert('Invalid Room.');
            return;
        }
        window.location.href = searchRoom[searchValue];
    } else if (currentSearchType === 'Faculty') {
        if (!(searchValue in searchProf)) { 
            alert('Invalid Professor.');
            return;
        }
        window.location.href = searchProf[searchValue];
    }
    
}
