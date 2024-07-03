(function() {
    const MAX_REFRESHES = 30;
    const MAX_DUPLICATE_TABS = 50;
    const BLOCK_URL = '/blocked.1';
    const RESET_INTERVAL = 15000; // 15 seconds

    // Check if localStorage is supported
    if (typeof(Storage) !== 'undefined') {
        // Function to reset counts
        const resetCounts = () => {
            localStorage.setItem('refreshCount', 0);
            localStorage.setItem('tabCount', 0);
        };

        // Retrieve counts from local storage
        let refreshCount = parseInt(localStorage.getItem('refreshCount')) || 0;
        let tabCount = parseInt(localStorage.getItem('tabCount')) || 0;

        // Increment refresh count
        refreshCount++;
        localStorage.setItem('refreshCount', refreshCount);

        // Check for duplicate tabs by using sessionStorage
        if (sessionStorage.getItem('isDuplicateTab')) {
            tabCount++;
            localStorage.setItem('tabCount', tabCount);
        } else {
            sessionStorage.setItem('isDuplicateTab', true);
        }

        // Redirect if limits are exceeded
        if (refreshCount > MAX_REFRESHES || tabCount > MAX_DUPLICATE_TABS) {
            window.location.href = BLOCK_URL;
        }

        // Reset counts every 15 seconds
        setInterval(resetCounts, RESET_INTERVAL);
    } else {
        console.warn('Local storage is not supported in this browser.');
    }
})();
