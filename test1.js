function onCaptchaSuccess(response) {
            if (response) {
                document.cookie = "ad-tracker=$client_ip; SameSite=Lax; path=/; Secure";
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }

        document.addEventListener('mousemove', showCaptcha);
        document.addEventListener('touchstart', showCaptcha);

        function showCaptcha() {
            document.getElementById('captcha-container').style.display = 'block';
            document.removeEventListener('mousemove', showCaptcha);
            document.removeEventListener('touchstart', showCaptcha);
        }
