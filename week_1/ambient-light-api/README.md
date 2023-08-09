# Ambient Light Sensor API

<img src="https://www.excelitas.com/sites/default/files/2019-05/PD_Excelitas-Ambient-Light-Sensors_Rev1_800x624px.png" width="240" />

### Ambient Light Sensor API:

-   returns the current light level or illuminance of the ambient light around the hosting device.
-   is part of Sensor APIs (are a set of interfaces built to a common design that expose device sensors in a consistent way to the web platform)
-   normally built-in with the device's camera.
-   To use this sensor, the user must grant permission to the `'ambient-light-sensor'` device sensor through the Permissions API

---

### First approach:

> The first approach to supporting light intensity sensor on the Web - as a standalone API - was implemented in Firefox back in 2013. Since then the specification was rewritten to make use of the new **Generic Sensors API**. This flavor, as of early 2020, is only experimentally implemented in Google Chrome, behind the "Generic Sensor Extra Classes" flag.

---

### Using:

```js
if ("AmbientLightSensor" in window) {
    const sensor = new AmbientLightSensor();
    sensor.addEventListener("reading", (event) => {
        console.log("Current light level:", sensor.illuminance);
    });
    sensor.addEventListener("error", (event) => {
        console.log(event.error.name, event.error.message);
    });
    sensor.start();
}
```

---

### Notes:

-   `AmbientLightSensor` doesn't have own methods. However, it inherits methods from its parent interfaces, `Sensor` and `EventTarget`
-   `AmbientLightSensor` doesn't have own events. However, it inherits events from its parent interface, `Sensor`

---

### Browser compatibility:

> Unfortunately, most browsers do not support this sensor, but it can currently be turned on in modern (and experimental) versions of the Chrome browser, but it is not automatic and must be enabled

-   [ambient light - can i use](https://caniuse.com/ambient-light)
-   [ambient light - MDN](https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor#browser_compatibility)

---

### Resources:

-   [MDN](https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor)
-   [Can i use](https://caniuse.com/ambient-light)
-   [what web can do](https://whatwebcando.today/ambient-light.html)
