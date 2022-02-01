self.addEventListener("push",(event)=>{
    const msg = JSON.parse(event.body.text());
    event.waitUntil(
    self.ServiceWorkerRegistration.showNotification(msg.title,{body:msg.text}));
});
