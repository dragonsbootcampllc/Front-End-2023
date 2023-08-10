## Can I use:
#### yes I use it for next browser:
1. Chrome from V.7 to V.118
2. Edge from V.12 to V.115
3. Chrome from V.7 to V.118
4. *Safari **Can't***
5. Opera from V.15 to V.101
6. IE V.11
7. Chrome for Android V.115
8. Safari on iOS from V.4.2 to V.17
9. Samsung Internet from V.4 to V.21
10. *Opera Mini **Can't***
11. Opera Mobile from V.12 to V.73
12. UC Browser for Android V.15.5
13. Android Browser from V.3 to V.115
14. Firefox for Android V.115
15. QQ Browser V.13.1
16. Baidu Browser V.13.18
17. KaiOS Browser from V.2.5 to V.3.1

[**Resource 1**](https://caniuse.com/deviceorientation)

***It's available for nearly **91.5%** users***
## Usage:
There are two JavaScript events that handle orientation information.
- The first one is the [***DeviceOrientationEvent***](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent), which is sent when the accelerometer detects a change to the orientation of the device. By receiving and processing the data reported by these orientation events, it's possible to interactively respond to rotation and elevation changes caused by the user moving the device. It has some properties:
1. **DeviceOrientationEvent.absolute**: A boolean that indicates whether or not the device is providing orientation data absolutely.
2. **DeviceOrientationEvent.alpha**: A number representing the motion of the device around the **z** axis, express in degrees with values *ranging from 0 (inclusive) to 360 (exclusive)*.
3. **DeviceOrientationEvent.beta**: A number representing the motion of the device around the **x** axis, express in degrees with values *ranging from -180 (inclusive) to 180 (exclusive)*.
4. **DeviceOrientationEvent.gamma**: A number representing the motion of the device around the **y** axis, express in degrees with values *ranging from -90 (inclusive) to 90 (exclusive)*.
5. **DeviceOrientationEvent.webkitCompassHeading**: A number represents the difference between the motion of the device around the z axis of the world system and the direction of the north, express in degrees with *values ranging from 0 to 360*.
6. **DeviceOrientationEvent.webkitCompassAccuracy**: The accuracy of the compass means that the deviation is positive or negative. *It's usually 10*.

- The second event is the [***DeviceMotionEvent***](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent), which is sent when a change in acceleration was added. It is different from the *DeviceOrientationEvent* because it is listening for changes in acceleration as opposed to orientation. Sensors that are commonly capable of detecting *DeviceMotionEvent* include sensors in laptops to protect moving storage devices. *DeviceOrientationEvent* is more commonly found in mobile devices. It has some properties:
1. **DeviceMotionEvent.acceleration**: An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in m/s².
2. **DeviceMotionEvent.accelerationIncludingGravity**: An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in m/s².
3. **DeviceMotionEvent.rotationRate**: An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is expressed in degrees per seconds.
4. **DeviceMotionEvent.interval**: A number representing the interval of time, in milliseconds, at which data is obtained from the device.

[**Resource 2**](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
