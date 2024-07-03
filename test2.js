let humanInteractionDetected = false;

        function onHumanInteraction() {
            humanInteractionDetected = true;
        }

        function onCaptchaSuccess(response) {
            if (response && humanInteractionDetected) {
                document.cookie = "ad-tracker=$client_ip; SameSite=Lax; path=/; Secure";
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                document.getElementById("error-message").style.display = "block";
            }
        }

        function onCaptchaError(error) {
            document.getElementById("error-message").style.display = "block";
        }
        window.addEventListener('mousemove', onHumanInteraction);
        window.addEventListener('touchstart', onHumanInteraction);
