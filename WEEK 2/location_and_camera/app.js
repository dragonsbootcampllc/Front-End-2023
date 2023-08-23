var cameraOn = false;
var microphoneOn = false;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}

function toggleCamera() {
    if (!cameraOn) {
        startCamera();
    } else {
        stopCamera();
    }
}

function startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                var videoElement = document.getElementById('videoElement');
                videoElement.srcObject = stream;
                cameraOn = true;
                var cameraIcon = document.getElementById('cameraIcon');
                cameraIcon.classList.remove('icon-off');
                cameraIcon.classList.add('icon-on');
            })
            .catch(function (error) {
                console.log("Unable to access camera: " + error);
            });
    } else {
        console.log("Camera access is not supported by this browser.");
    }
}

function stopCamera() {
    var videoElement = document.getElementById('videoElement');
    videoElement.srcObject.getTracks().forEach(function (track) {
        track.stop();
    });
    cameraOn = false;
    var cameraIcon = document.getElementById('cameraIcon');
    cameraIcon.classList.remove('icon-on');
    cameraIcon.classList.add('icon-off');
}

function toggleMicrophone() {
    if (!microphoneOn) {
        startMicrophone();
    } else {
        stopMicrophone();
    }
}

function startMicrophone() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                var audioElement = document.getElementById('audioElement');
                audioElement.srcObject = stream;
                microphoneOn = true;
                var microphoneIcon = document.getElementById('microphoneIcon');
                microphoneIcon.classList.remove('icon-off');
                microphoneIcon.classList.add('icon-on');
            })
            .catch(function (error) {
                console.log("Unable to access microphone: " + error);
            });
    } else {
        console.log("Microphone access is not supported by this browser.");
    }
}

function stopMicrophone() {
    var audioElement = document.getElementById('audioElement');
    audioElement.srcObject.getTracks().forEach(function (track) {
        track.stop();
    });
    microphoneOn = false;
    var microphoneIcon = document.getElementById('microphoneIcon');
    microphoneIcon.classList.remove('icon-on');
    microphoneIcon.classList.add('icon-off');
}
