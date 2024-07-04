(function() {
  // Block the original function call
  let captchaSuccessBlocked = true;

  // Store the original function
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
  function unblockCaptcha() {
    captchaSuccessBlocked = false;
    console.log('User interaction detected. Captcha unblocked.');
    // Remove event listeners after unblocking
    window.removeEventListener('mousemove', unblockCaptcha);
    window.removeEventListener('touchstart', unblockCaptcha);
    window.removeEventListener('touchmove', unblockCaptcha);
    window.removeEventListener('touchend', unblockCaptcha);
    window.removeEventListener('touchcancel', unblockCaptcha);
  }

  // Detect mouse or touchscreen interaction
  window.addEventListener('mousemove', unblockCaptcha);
  window.addEventListener('touchstart', unblockCaptcha);
  window.addEventListener('touchmove', unblockCaptcha);
  window.addEventListener('touchend', unblockCaptcha);
  window.addEventListener('touchcancel', unblockCaptcha);

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
  console.log('Script loaded. Waiting for user interaction to unblock captcha.');
})();
