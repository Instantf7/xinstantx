(function() {
  // Function to check if the device supports touch
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  // Only proceed if the device is not a touch device
  if (!isTouchDevice()) {
    // Block the original function call
    let captchaSuccessBlocked = true;

    // Ensure that onCaptchaSuccess is defined
    if (typeof window.onCaptchaSuccess !== 'undefined') {
      const originalOnCaptchaSuccess = window.onCaptchaSuccess;

      // Override the function to block execution
      window.onCaptchaSuccess = function(success) {
        if (!captchaSuccessBlocked) {
          console.log('Captcha success unblocked, calling original function.');
          originalOnCaptchaSuccess(success);
        } else {
          console.log('Captcha blocked.');
        }
      };

      // Function to unblock the captcha success function
      function unblockCaptcha(event) {
        captchaSuccessBlocked = false;
        console.log('User interaction detected:', event.type);
        // Remove event listeners after unblocking
        window.removeEventListener('mousemove', unblockCaptcha);
      }

      // Detect mouse interaction
      window.addEventListener('mousemove', unblockCaptcha);

      // Dummy captcha function to be called on user interaction
      function checkCaptcha() {
        if (!captchaSuccessBlocked) {
          console.log('Captcha is now unblocked. Calling onCaptchaSuccess.');
          originalOnCaptchaSuccess(true);
        } else {
          console.log('Captcha blocked until user interaction is detected.');
        }
      }

      // Expose checkCaptcha function to be called later
      window.checkCaptcha = checkCaptcha;

      // Initial logging for debugging
      console.log('Script loaded on desktop. Waiting for user interaction to unblock captcha.');
    } else {
      console.error('onCaptchaSuccess is not defined.');
    }
  } else {
    console.log('Touch device detected. Captcha script will not run.');
  }
})();
