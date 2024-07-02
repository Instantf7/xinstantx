(function () {
    const maxRefreshes = 30;
    const resetThreshold = 60;
    const storageKey = 'pageRefreshCount';
    let refreshData = JSON.parse(localStorage.getItem(storageKey)) || { count: 0 };
    refreshData.count += 1;
    if (refreshData.count >= resetThreshold) {
        refreshData.count = 0;
    }
    localStorage.setItem(storageKey, JSON.stringify(refreshData));

    if (refreshData.count > maxRefreshes) {
        setCookie('blocked', 'true', 5);
        window.location.href = '/blocked.1';
    }
    if (getCookie('blocked') === 'true') {
        window.location.href = '/blocked.1';
    }
})();
(function () {
    const maxTabs = 15;
    const tabKey = 'pageTabCount';
    let tabData = JSON.parse(localStorage.getItem(tabKey)) || { count: 0 };
    tabData.count += 1;
    localStorage.setItem(tabKey, JSON.stringify(tabData));
    if (tabData.count > maxTabs) {
        setCookie('blocked', 'true', 5); // Block for 5 minutes
        window.location.href = '/blocked.1';
    }
    window.addEventListener('beforeunload', function () {
        tabData.count -= 1;
        localStorage.setItem(tabKey, JSON.stringify(tabData));
    });
    if (getCookie('blocked') === 'true') {
        window.location.href = '/blocked.1';
    }
})();
