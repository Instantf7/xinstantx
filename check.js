
        function onCaptchaSuccess(response) {
            if (response) {
                document.cookie = "ad-tracker=" + $client_ip + "; SameSite=Lax; path=/; Secure";
                localStorage.removeItem("refreshCount");
                localStorage.removeItem("tabCount");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }

        function trackPageRefresh() {
            let refreshCount = parseInt(localStorage.getItem("refreshCount")) || 0;
            refreshCount++;
            localStorage.setItem("refreshCount", refreshCount);

            if (refreshCount > 50) {
                localStorage.setItem("blocked", "true");
                localStorage.setItem("blockTime", Date.now());
                window.location.href = "/blocked.1";
            }
        }

        function trackTabDuplication() {
            let tabCount = parseInt(localStorage.getItem("tabCount")) || 0;
            tabCount++;
            localStorage.setItem("tabCount", tabCount);

            if (tabCount > 30) {
                localStorage.setItem("blocked", "true");
                localStorage.setItem("blockTime", Date.now());
                window.location.href = "/blocked.1";
            }
        }

        function checkBlocked() {
            const blocked = localStorage.getItem("blocked");
            const blockTime = parseInt(localStorage.getItem("blockTime"));

            if (blocked === "true" && blockTime) {
                const currentTime = Date.now();
                const elapsedTime = currentTime - blockTime;

                if (elapsedTime < 5 * 60 * 1000) {
                    window.location.href = "/blocked.1";
                } else {
                    localStorage.removeItem("blocked");
                    localStorage.removeItem("blockTime");
                }
            }
        }

        function initializeTracking() {
            checkBlocked();
            trackPageRefresh();
            window.addEventListener("storage", trackTabDuplication);
        }

        // Initialize on page load
        initializeTracking();
