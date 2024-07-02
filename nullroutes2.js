(function() {
            const maxRefreshes = 30;
            const maxTabs = 20;
            const storageKey = 'pageActivityCount';
            let activityData = JSON.parse(localStorage.getItem(storageKey)) || { refreshCount: 0, tabCount: 0, tabId: Math.random().toString(36).substring(2) };
            activityData.refreshCount += 1;
            localStorage.setItem(storageKey, JSON.stringify(activityData));
            if (activityData.refreshCount > maxRefreshes) {
                window.location.href = '/blocked.1';
            }
            if (!sessionStorage.getItem('tabId')) {
                sessionStorage.setItem('tabId', activityData.tabId);
                activityData.tabCount += 1;
                localStorage.setItem(storageKey, JSON.stringify(activityData));
            }
            if (activityData.tabCount > maxTabs) {
                window.location.href = '/blocked.1';
            }
            window.addEventListener('unload', function () {
                let activityData = JSON.parse(localStorage.getItem(storageKey));
                activityData.tabCount -= 1;
                localStorage.setItem(storageKey, JSON.stringify(activityData));
            });
        })();
