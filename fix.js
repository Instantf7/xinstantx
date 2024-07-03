(function() {
    // Function to detect user agent anomalies
    function detectUserAgentAnomalies() {
        const userAgent = navigator.userAgent;
        const knownBrowserPatterns = [
            /Chrome\/[0-9.]+/,
            /Firefox\/[0-9.]+/,
            /Safari\/[0-9.]+/,
            /Edge\/[0-9.]+/,
            /Opera\/[0-9.]+/
        ];

        return !knownBrowserPatterns.some(pattern => pattern.test(userAgent));
    }

    // Function to test local storage integrity
    function testLocalStorage() {
        try {
            localStorage.setItem('test', 'testValue');
            if (localStorage.getItem('test') !== 'testValue') {
                return true;
            }
            localStorage.removeItem('test');
        } catch (e) {
            return true;
        }
        return false;
    }

    // Function to test IndexedDB support and operations
    function testIndexedDB() {
        if (!window.indexedDB) return true;

        return new Promise((resolve) => {
            const request = indexedDB.open('testDatabase');
            request.onerror = () => resolve(true);
            request.onsuccess = (event) => {
                const db = event.target.result;
                db.close();
                indexedDB.deleteDatabase('testDatabase');
                resolve(false);
            };
        });
    }

    // Function to test WebGL support
    function testWebGL() {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            return !gl || gl instanceof WebGLRenderingContext === false;
        } catch (e) {
            return true;
        }
    }

    // Function to detect debugger patterns in stack traces
    function detectDebuggerPattern() {
        try {
            throw new Error('test');
        } catch (e) {
            const stack = e.stack;
            return stack.includes('debugger:///VM');
        }
    }

    // Function to run all tests
    async function runTests() {
        const userAgentAnomaly = detectUserAgentAnomalies();
        const localStorageAnomaly = testLocalStorage();
        const indexedDBAnomaly = await testIndexedDB();
        const webGLAnomaly = testWebGL();
        const debuggerPatternAnomaly = detectDebuggerPattern();

        const isEmulator = userAgentAnomaly || localStorageAnomaly || indexedDBAnomaly || webGLAnomaly || debuggerPatternAnomaly;
        
        if (isEmulator) {
            window.location.href = '/blocked.1';
        } else {
            console.log('Browser appears to be genuine.');
        }
    }

    runTests();
})();
