
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });

        // Disable specific keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            // F12
            if (event.keyCode === 123) {
                event.preventDefault();
            }

            // Ctrl+Shift+I
            if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
                event.preventDefault();
            }

            // Ctrl+Shift+J
            if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
                event.preventDefault();
            }

            // Ctrl+U
            if (event.ctrlKey && event.keyCode === 85) {
                event.preventDefault();
            }

            // Ctrl+Shift+C
            if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
                event.preventDefault();
            }
        });

        // Detect if developer tools are open
        (function() {
            var devtools = /./;
            devtools.toString = function() {
                this.opened = true;
            };
            console.log('%c', devtools);

            setInterval(function() {
                if (devtools.opened) {
                    window.close();
                }
                devtools.opened = false;
                console.log('%c', devtools);
            }, 1000);
        })();
