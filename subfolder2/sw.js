self.addEventListener('fetch', function(event) {
  console.log('subpage2 onfetch: ', event.request.url);
  if (/\.jpg$/.test(event.request.url)) {
    console.log('subpage2 fetch jpg: ' + event.request.url);
    event.respondWith(
      fetch('https://www.google.co.uk/logos/doodles/2014/60th-anniversary-of-the-unveiling-of-the-first-routemaster-bus-4922931108904960.3-hp.gif', {
        mode: 'no-cors'
      })
    );
  }
});
