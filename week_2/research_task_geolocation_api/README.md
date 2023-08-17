# 📌 Geolocation API

### Geolocation API:

-   The HTML Geolocation API is used to get the geographical position of a user.
-   Since this can compromise privacy, the position is not available unless the user approves it.
-   The JavaScript Geolocation API provides access to geographical location data associated with a user's device. This can be determined using GPS, WIFI, IP Geolocation and so on.
-   To protect the user's privacy, it requests permission to locate the device. If the user grants permission, you will gain access to location data such as latitude, longitude, altitude, and speed. You'll also get the accuracy of the acquired location data and the approximate time when the position was acquired.

---

### Using:

> Simple:

```js
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
}
```

---

### Browser compatibility:

-   [Geolocation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#browser_compatibility)

---

### Resources:

-   [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#browser_compatibility)
-   [W3Schools](https://www.w3schools.com/html/html5_geolocation.asp)
-   [freeCodeCamp](https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/)
