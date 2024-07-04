(function() {
  // Block the original function call
  let captchaSuccessBlocked = true;

  // Store the original function
  const originalOnCaptchaSuccess = window.onCaptchaSuccess;

  // Override the function to block execution
  window.onCaptchaSuccess = function(success) {
    if (!captchaSuccessBlocked) {
      originalOnCaptchaSuccess(success);
    }
  };

  // Function to unblock the captcha success function
  function unblockCaptcha() {
    captchaSuccessBlocked = false;
    console.log('User interaction detected. Captcha unblocked.');
    // Remove event listeners after unblocking
    window.removeEventListener('mousemove', unblockCaptcha);
    window.removeEventListener('touchstart', unblockCaptcha);
  }

  // Detect mouse or touchscreen interaction
  window.addEventListener('mousemove', unblockCaptcha);
  window.addEventListener('touchstart', unblockCaptcha);

  // Dummy captcha function to be called on user interaction
  function checkCaptcha() {
    if (!captchaSuccessBlocked) {
      originalOnCaptchaSuccess(true);
    } else {
      console.log('Captcha blocked until user interaction is detected.');
    }
  }

  // Expose checkCaptcha function to be called later
  window.checkCaptcha = checkCaptcha;
})();
