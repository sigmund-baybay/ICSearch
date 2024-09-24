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

    if (type === 'Room') {
        searchBar.placeholder = 'Enter a room...';
        searchBar.setAttribute('list', 'room-list'); 
    } else if (type === 'Faculty') {
        searchBar.placeholder = 'Enter a professor...';
        searchBar.setAttribute('list', 'faculty-list'); 
    }


    document.getElementById('room-button').classList.toggle('active', type === 'Room');
    document.getElementById('faculty-button').classList.toggle('active', type === 'Faculty');
}

function handleSearch(event) {
    event.preventDefault(); 

    const searchValue = document.getElementById('search-bar').value.trim().toLowerCase();
    const replaceValue = document.getElementById('search-bar');

    if (searchValue === '') {
        alert('Please add an input.');
        return;
    }

    if (currentSearchType === 'Room') {
        if (!(searchValue in searchRoom)) { 
            alert('Invalid Room.');
            searchValue.value = '';
            return;
        }
        window.location.href = searchRoom[searchValue];
    } else if (currentSearchType === 'Faculty') {
        if (!(searchValue in searchProf)) { 
            alert('Invalid Professor.');
            replaceValue.value = '';
            return;
        }
        window.location.href = searchProf[searchValue];
    }
    
}
