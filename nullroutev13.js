(function() {
    function onInputDetected() {
        setTimeout(() => {
            onCaptchaSuccess(true);
        }, 1000);
        window.removeEventListener('mousemove', onInputDetected);
        window.removeEventListener('touchstart', onInputDetected);
    }
    window.addEventListener('mousemove', onInputDetected);
    window.addEventListener('touchstart', onInputDetected);
})();
