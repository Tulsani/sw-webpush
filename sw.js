self.addEventListener("push",(event)=>{
    const msg = event.stopImmediatePropagation.json();
    self.ServiceWorkerRegistration.showNotification(msg.title,{body:MessageChannel.text});
})