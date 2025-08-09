self.addEventListener("install", (event) => {
  console.log("Almacenando archivos en cache");
  const WU = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log("Service Worker installed");
        resolve();
      }, 1000);
      self.skipWaiting();
    } catch (error) {
      reject(error);
    }
  });
  event.waitUntil(WU);
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker recibiendo una solicitud");
  console.log(event.request.url);
});

self.addEventListener("sync", (event)=>{
    console.log(event)
});

self.addEventListener("push", (event)=>{
    console.log("Push notificacion recevied", event)
})