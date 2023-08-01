function isBrowserEmulator() {
  const emulatorPatterns = [
    'Chrome-Lighthouse',
    'PhantomJS',
    'HeadlessChrome',
    'Edge WebDriver',
    'Selenium',
    'Playwright',
    // Add more patterns as needed based on your knowledge.
  ];

  const userAgent = navigator.userAgent.toLowerCase();

  for (const emulatorPattern of emulatorPatterns) {
    if (userAgent.includes(emulatorPattern.toLowerCase())) {
      return true;
    }
  }

  return false;
}

function redirectIfEmulator() {
  if (isBrowserEmulator()) {
    window.location.href = '/444xInstantfastxdead';
  }
}

// Call the redirect function when the page loads
redirectIfEmulator();
