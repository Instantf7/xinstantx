let captchaInteracted = false;
        function enableCaptchaInteraction() {
            document.querySelector('.h-captcha').addEventListener('mouseover', () => {
                captchaInteracted = true;
            });

            document.querySelector('.h-captcha').addEventListener('touchstart', () => {
                captchaInteracted = true;
            });
        }
        function onCaptchaSuccess(response) {
            if (response && captchaInteracted) {
                document.cookie = `ad-tracker=${$client_ip}; SameSite=Lax; path=/; Secure`;
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                document.getElementById('error-message').innerText = 'Please interact with the captcha.';
                document.getElementById('error-message').style.display = 'block';
            }
        }
        window.onload = () => {
            enableCaptchaInteraction();
        };
