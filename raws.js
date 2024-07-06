document.addEventListener('DOMContentLoaded', (event) => {
            function showButton() {
                let button = document.getElementById("proceedButton");
                button.style.display = "inline-block";
                window.removeEventListener('mousemove', showButton);
                window.removeEventListener('keydown', showButton);
                window.removeEventListener('touchstart', showButton);
            }
            window.addEventListener('mousemove', showButton);
            window.addEventListener('keydown', showButton);
            window.addEventListener('touchstart', showButton);
        });
