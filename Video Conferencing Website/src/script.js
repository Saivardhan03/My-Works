const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (stream) {
        localVideo.srcObject = stream;

    })
    .catch(function (error) {
        console.error('getUserMedia error:', error);
    });