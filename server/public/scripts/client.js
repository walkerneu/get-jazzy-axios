function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
    }

    axios({
        method: "GET",
        url: '/song'
    })
        .then(function (response) {
        let songsFromServer = response.data;
        let songContent = document.querySelector('#songTableBody');
        for (let song of songsFromServer) {
            songContent.innerHTML += `
            <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
        }
    }).catch(function (error) {
        console.log(error);
        alert('Something bad happened! Check the console for more details.')
    })

function onSongClick (event){
    event.preventDefault();
    let songName = document.getElementById("songTitleInput").value;
    let artistName = document.getElementById("artistNameInput").value;
    let songObject = {
                        title: songName,
                        artist: artistName
                    };
    console.log(songObject);
    document.getElementById("songTitleInput").value = '';
    document.getElementById("artistNameInput").value = '';
    axios({
        method: 'POST',
        url: '/song',
        data: songObject
    }).then((response) => {
        let songs = response.data
    })
}

function renderValues () {
    
}


onReady();
