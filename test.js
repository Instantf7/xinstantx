 function onCaptchaSuccess(response) {
            if (response) {
                document.cookie = "ad-tracker=$client_ip; SameSite=Lax; path=/; Secure";
                setTimeout(() => {
                    window.location.reload();
                }, 1000); // Delay to show that CAPTCHA was successful
            }
        }

        function showCaptcha() {
            document.getElementById('captcha-container').style.display = 'block';
            window.removeEventListener('mousemove', showCaptcha);
            window.removeEventListener('touchstart', showCaptcha);
        }

        window.addEventListener('mousemove', showCaptcha);
        window.addEventListener('touchstart', showCaptcha);
