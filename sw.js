self.addEventListener('fetch', function(event) {
  console.log('onfetch: ', event.request.url);
  console.log('event.clientId: ', event.clientId);
  if (/\.jpg$/.test(event.request.url)) {
    console.log('fetch jpg: ' + event.request.url);
    event.respondWith(
      fetch('https://www.google.co.uk/logos/doodles/2014/60th-anniversary-of-the-unveiling-of-the-first-routemaster-bus-4922931108904960.3-hp.gif', {
        mode: 'no-cors'
      })
    );
  }
});
