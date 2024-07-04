(function() {
  // Block the original function
  let captchaSuccessBlocked = true;
  
  // Store the original function
  const originalOnCaptchaSuccess = window.onCaptchaSuccess;

  // Override the function to block execution
  window.onCaptchaSuccess = function(success) {
    if (!captchaSuccessBlocked) {
      originalOnCaptchaSuccess(success);
    }
  };

  // Function to unblock and execute the original function
  function unblockAndExecute() {
    captchaSuccessBlocked = false;
    originalOnCaptchaSuccess(true);
  }

  // Detect mouse or touchscreen interaction
  window.addEventListener('mousemove', unblockAndExecute, { once: true });
  window.addEventListener('touchstart', unblockAndExecute, { once: true });

  // Timeout to initially block the function
  setTimeout(() => {
    window.onCaptchaSuccess(false);
  }, 1000);
})();
