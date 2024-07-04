(function() {
    function onCaptchaSuccessWrapper() {
        setTimeout(() => {
            onCaptchaSucess(true);
        }, 1000);
    }

    function detectInputMethod() {
        let inputMethodDetected = false;

        // Check for mouse movement
        function mouseMoveHandler() {
            inputMethodDetected = true;
            onCaptchaSuccessWrapper();
            removeEventListeners();
        }

        // Check for touchscreen
        function touchStartHandler() {
            inputMethodDetected = true;
            onCaptchaSuccessWrapper();
            removeEventListeners();
        }

        function removeEventListeners() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('touchstart', touchStartHandler);
        }

        // Add event listeners
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('touchstart', touchStartHandler);

        // Fallback to execute the function if no input is detected within a reasonable time
        setTimeout(() => {
            if (!inputMethodDetected) {
                onCaptchaSuccessWrapper();
                removeEventListeners();
            }
        }, 10000); // Adjust the fallback timeout as needed
    }

    detectInputMethod();
})();
