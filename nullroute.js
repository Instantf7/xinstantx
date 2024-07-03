(function() {
    const MAX_REFRESHES = 30;
    const MAX_DUPLICATE_TABS = 50;
    const BLOCK_URL = '/blocked.1';
    const RESET_INTERVAL = 15000;
    if (typeof(Storage) !== 'undefined') {
        const resetCounts = () => {
            localStorage.setItem('refreshCount', 0);
            localStorage.setItem('tabCount', 0);
        };
        let refreshCount = parseInt(localStorage.getItem('refreshCount')) || 0;
        let tabCount = parseInt(localStorage.getItem('tabCount')) || 0;
        refreshCount++;
        localStorage.setItem('refreshCount', refreshCount);
        if (sessionStorage.getItem('isDuplicateTab')) {
            tabCount++;
            localStorage.setItem('tabCount', tabCount);
        } else {
            sessionStorage.setItem('isDuplicateTab', true);
        }
        if (refreshCount > MAX_REFRESHES || tabCount > MAX_DUPLICATE_TABS) {
            window.location.href = BLOCK_URL;
        }
        setInterval(resetCounts, RESET_INTERVAL);
    } else {
        console.warn('Local storage is not supported in this browser.');
    }
})();
