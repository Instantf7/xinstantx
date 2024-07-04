(function() {
    const logDiv = document.createElement('div');
    logDiv.style.display = 'none';
    document.body.appendChild(logDiv);
    function logToDiv(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        logDiv.appendChild(messageDiv);
    }
    console.log = function(...args) {
        logToDiv(args.join(' '));
    };
    console.error = function(...args) {
        logToDiv(args.join(' '));
    };
    console.warn = function(...args) {
        logToDiv(args.join(' '));
    };
    console.info = function(...args) {
        logToDiv(args.join(' '));
    };
    console.debug = function(...args) {
        logToDiv(args.join(' '));
    };
    console.clear = function() {
        logDiv.innerHTML = '';
    };
    Object.freeze(console);
    Object.defineProperty(window, 'console', {
        configurable: false,
        writable: false,
        value: console
    });
})();
