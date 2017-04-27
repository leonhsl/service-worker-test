self.addEventListener('fetch', function(event) {
  console.log('url clicked: ', event.request.url);
  console.log('clients.matchAll() started');
  clients.matchAll().then((clients) => { console.log('Got clients[0].type: ' + clients[0].type); });
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      fetch('https://www.google.co.uk/logos/doodles/2014/60th-anniversary-of-the-unveiling-of-the-first-routemaster-bus-4922931108904960.3-hp.gif', {
        mode: 'no-cors'
      })
    );
  }
});
