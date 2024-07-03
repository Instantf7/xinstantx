const MAX_ATTEMPTS = 50;
        const BLOCK_TIME = 5 * 60 * 1000; // 5 minutes

        function getCookie(name) {
            let value = "; " + document.cookie;
            let parts = value.split("; " + name + "=");
            if (parts.length === 2) return parts.pop().split(";").shift();
        }

        function setCookie(name, value, minutes) {
            let expires = "";
            if (minutes) {
                let date = new Date();
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
        }

        function trackAttempts() {
            let attempts = parseInt(getCookie("refresh_attempts") || "0");
            let blocked = getCookie("blocked");

            if (blocked) {
                window.location.href = "/blocked.1";
                return;
            }

            if (attempts >= MAX_ATTEMPTS) {
                setCookie("blocked", "true", BLOCK_TIME / 60000);
                window.location.href = "/blocked.1";
                return;
            }

            setCookie("refresh_attempts", attempts + 1, 5);
        }

        trackAttempts();

        function onCaptchaSuccess(response) {
            if (response) {
                document.cookie = "ad-tracker=" + encodeURIComponent("$client_ip") + "; SameSite=Lax; path=/; Secure";
                setCookie("refresh_attempts", "0", -1); // Reset attempts
                setCookie("blocked", "", -1); // Clear block
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }
