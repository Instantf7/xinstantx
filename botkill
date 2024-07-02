
        (function() {
            const maxRefreshes = 30;
            const storageKey = 'pageRefreshCount';

            // Get the stored refresh count from localStorage
            let refreshData = JSON.parse(localStorage.getItem(storageKey)) || { count: 0 };

            // Increment the refresh count
            refreshData.count += 1;

            // Store the updated refresh data in localStorage
            localStorage.setItem(storageKey, JSON.stringify(refreshData));

            // Check if the number of page refreshes exceeds the maxRefreshes
            if (refreshData.count > maxRefreshes) {
                window.location.href = '/blocked.1';
            }
        })();
