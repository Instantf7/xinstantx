let mouseClicked = false;
        let touchDetected = false;

        function onCaptchaSuccess(response) {
            if (response) {
                document.cookie = "ad-tracker=$client_ip; SameSite=Lax; path=/; Secure";
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }

        document.addEventListener('click', () => {
            mouseClicked = true;
            checkInteractions();
        });

        document.addEventListener('touchstart', () => {
            touchDetected = true;
            checkInteractions();
        });

        function checkInteractions() {
            if (mouseClicked && touchDetected) {
                document.getElementById('hcaptcha-wrapper').style.display = 'block';
            }
        }
