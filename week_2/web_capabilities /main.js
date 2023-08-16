// ********************************************************** //
// ************************ Location ************************ //
// ********************************************************** //

// ! Variables for Location
const locationBtn = document.querySelector(".location-btn");
const locationIconOn = document.querySelector(".location-icon-on");
const locationIconOff = document.querySelector(".location-icon-off");
const locationIconDone = document.querySelector(".location-btn .icon-done");
const locationIconClose = document.querySelector(".location-btn .icon-close");
const locationMessage = document.querySelector(".location-message");
const locationOutputMessage = document.querySelector(
    ".location-output-message"
);
const locationOutputContent = document.querySelector(
    ".location-output-content"
);
const locationOutputLatitudeValue = document.querySelector(
    ".location-output-latitude-value"
);
const locationOutputLongitudeValue = document.querySelector(
    ".location-output-longitude-value"
);
const locationLink = document.querySelector(".location-link");
const locationLastUpdateValue = document.querySelector(
    ".location-last-update-value"
);

// ! getLocation function
const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        // ! Success
        (location) => {
            // ! Hide and show icons
            locationIconOn.classList.remove("hidden");
            locationIconDone.classList.remove("hidden");
            locationIconOff.classList.add("hidden");
            locationIconClose.classList.add("hidden");

            // ! Show message for 3 seconds
            locationMessage.classList.add("text-green-500");
            locationMessage.textContent = "✔ Location found";
            clearLocationsMessage();

            // ! Show output
            locationOutputMessage.classList.add("hidden");
            locationOutputContent.classList.remove("hidden");

            // ! Get location data
            const latitude = location.coords.latitude;
            const longitude = location.coords.longitude;

            // ! Set location data
            locationOutputLatitudeValue.textContent = ` ${latitude}`;
            locationOutputLongitudeValue.textContent = ` ${longitude}`;
            locationLink.href = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            locationLastUpdateValue.textContent = ` ${new Date(
                location.timestamp
            )}`;
        },
        // ! Error
        (error) => {
            // ! Hide and show icons
            locationIconOff.classList.remove("hidden");
            locationIconClose.classList.remove("hidden");
            locationIconOn.classList.add("hidden");
            locationIconDone.classList.add("hidden");

            // ! Show message for 3 seconds
            locationMessage.classList.add("text-red-500");
            locationMessage.textContent = `❌ ${error.message}`;
            console.log(error);
            clearLocationsMessage();

            // ! Hide output
            locationOutputMessage.classList.remove("hidden");
            locationOutputContent.classList.add("hidden");
        },
        { enableHighAccuracy: true }
    );
};

if ("geolocation" in navigator) {
    /* geolocation is available */
    getLocation(); // ! Get location on page load
    locationBtn.addEventListener("click", getLocation); // ! Get location on button click
} else {
    /* geolocation IS NOT available */
    locationMessage.textContent = "geolocation is not available"; // ! Show message
}

// ! Clear message after 3 seconds Function
function clearLocationsMessage() {
    setTimeout(() => {
        locationMessage.classList.remove("text-green-500", "text-red-500");
        locationMessage.textContent = "";
    }, 3000);
}

// ********************************************************** //
// ************************* Camera ************************* //
// ********************************************************** //

// ! Variables for Camera
const videocamBtn = document.querySelector(".videocam-btn");
const videocamIconOn = document.querySelector(".videocam-icon-on");
const videocamIconOff = document.querySelector(".videocam-icon-off");
const videocamIconDone = document.querySelector(".videocam-btn .icon-done");
const videocamIconClose = document.querySelector(".videocam-btn .icon-close");
const videocamMessage = document.querySelector(".videocam-message");
const videoOutputMessage = document.querySelector(".video-output-message");
const videoOutputContent = document.querySelector(".video-output-content");
const video = document.querySelector("video");
const videoControlBtn = document.querySelector(".video-control");

let stream = null;

const getVideo = async () => {
    // ! Success
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });

        if ("srcObject" in video) {
            video.srcObject = stream;
        } else if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
        } else {
            video.src = (window.URL || window.webkitURL).createObjectURL(
                stream
            );
        }

        videoOutputMessage.classList.add("hidden");
        videoOutputContent.classList.remove("hidden");

        video.play();
        videoControlBtn.textContent = "Stop";

        // ! Hide and show icons
        videocamIconOn.classList.remove("hidden");
        videocamIconDone.classList.remove("hidden");
        videocamIconOff.classList.add("hidden");
        videocamIconClose.classList.add("hidden");

        // ! Show message for 3 seconds
        videocamMessage.classList.add("text-green-500");
        videocamMessage.textContent = "✔ Video Cam found";
        clearVideoCamMessage();
    } catch (error) {
        // ! Error
        // ! Hide and show icons
        videocamIconOff.classList.remove("hidden");
        videocamIconClose.classList.remove("hidden");
        videocamIconOn.classList.add("hidden");
        videocamIconDone.classList.add("hidden");

        // ! Show message for 3 seconds
        videocamMessage.classList.add("text-red-500");
        videocamMessage.textContent = `❌ ${error.message}`;
        clearVideoCamMessage();

        videoOutputMessage.classList.remove("hidden");
        videoOutputContent.classList.add("hidden");
    }
};

if (navigator.mediaDevices) {
    /* mediaDevices is available */
    getVideo(); // ! Get video on page load
    videocamBtn.addEventListener("click", getVideo); // ! Get video on button click
} else {
    videocamMessage.textContent = "mediaDevices is not available"; // ! Show message
}

videoControlBtn.addEventListener("click", () => {
    if (videoControlBtn.textContent === "Stop") {
        video.pause();
        videoControlBtn.textContent = "Play";
    } else if (videoControlBtn.textContent === "Play") {
        video.play();
        videoControlBtn.textContent = "Stop";
    }
});

// ! Clear message after 3 seconds Function
function clearVideoCamMessage() {
    setTimeout(() => {
        videocamMessage.classList.remove("text-green-500", "text-red-500");
        videocamMessage.textContent = "";
    }, 3000);
}
