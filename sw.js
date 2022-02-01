self.addEventListener("push",(event)=>{
    const msg = JSON.parse(event.data.text());
    event.waitUntil(
    self.registration.showNotification(msg.title,{body:msg.text}));
});
