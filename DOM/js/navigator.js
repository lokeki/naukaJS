// navigator udostepnia inf na temat klienta, w tym przypadku przegladarki internetowej

//navigator.userAgent // jest to ciag, ktr jest z kazdym zadaniem http przesylany do serwera, identyfikuje platforme i przegladarke

// sprawdzamy czy przegladarka to Chrome
var isChrome = navigator.userAgent.match(/chrome/i);

console.log("Nazwa aplikacji: " + navigator.appName);

console.log("Wersja aplikacji: " + navigator.appVersion);

console.log("Ciag User-Agent: " + navigator.userAgent);

console.log("Platforma systemowa: " + navigator.platform);

console.log("jezyk przegladarki: " + navigator.language);

console.log("Status online: " + navigator.onLine);