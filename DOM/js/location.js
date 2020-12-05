// location

console.log(window.location);

/*
mamy tutaj kilka metod np. reload, ktora pozwoli nam odswiazyc strone, dokladnie tak samo jak gdybysmy wcisneli ten przycisk.
Czyli jezeli uzyjemy location reload, to zostanie ona odswiezona

Protokol HTTP.

Dzieki temu mozemy na przyklad sprawdzic czy jestesmy na stronie bezpiecznej gdzie bedzie HTTPS czy jestesmy na HTTP.

No i to jest rowniez ciekawe i w wielu aplikacjach wykorzystywane, ze tym hashem będziemy mogli manipulowac, gdybysmy na stronie, mieli jakis element div np. z identyfikatorem hej, to jezeli do adresu cos takiego dodamy, to jestesmy przenoszeni do tego wlasnie diva.

I wlasnie, jezeli odwolamy sie do lacation hash i ustawimy go sobie na jakis inny, to jezeli na stronie

jakis element bedzie mial taki identyfikator, to do niego bez problemu przeskoczymy.

*/