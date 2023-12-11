let player;

function fetchVideo() {
    const videoId = document.getElementById('videoIdInput').value;

    if (videoId) {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            initializePlayer(videoId);
        }
    } else {
        alert('Please enter a YouTube Video ID.');
    }
}

function initializePlayer(videoId) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can add custom logic here if needed
}

// Handle API load error
function onYouTubeIframeAPIReady() {
    if (typeof YT === 'undefined' || !YT.loaded) {
        console.error('YouTube API failed to load.');
    }
}
