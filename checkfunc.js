(function() {
    const REDIRECT_URL = "/blocked.1";
    const MAX_DUPLICATE_COUNT = 10;
    const TIME_FRAME = 30000;
    const now = Date.now();
    let timestamps = localStorage.getItem('duplicateTimestamps');
    if (timestamps) {
        timestamps = JSON.parse(timestamps);
    } else {
        timestamps = [];
    }
    timestamps = timestamps.filter(timestamp => now - timestamp < TIME_FRAME);
    timestamps.push(now);
    localStorage.setItem('duplicateTimestamps', JSON.stringify(timestamps));
    if (timestamps.length > MAX_DUPLICATE_COUNT) {
        window.location.href = REDIRECT_URL;
    }
})();
