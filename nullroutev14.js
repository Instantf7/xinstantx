(function() {
    let inputDetected = false;
    let captchaSolved = false;

    function checkConditions() {
        if (inputDetected && captchaSolved) {
            // Run your code here
            setTimeout(() => {
                onCaptchaSuccess(true);
            }, 1000);
        }
    }

    function onInputDetected() {
        inputDetected = true;
        checkConditions();
        // Remove the event listeners after detection
        window.removeEventListener('mousemove', onInputDetected);
        window.removeEventListener('touchstart', onInputDetected);
    }

    function onCaptchaSuccess(solved) {
        if (solved) {
            captchaSolved = true;
            checkConditions();
        }
    }

    // Add event listeners for mouse and touchscreen
    window.addEventListener('mousemove', onInputDetected);
    window.addEventListener('touchstart', onInputDetected);

    // Hook into Hcaptcha success (this depends on your Hcaptcha implementation)
    hcaptcha.on('success', function() {
        onCaptchaSuccess(true);
    });
})();
