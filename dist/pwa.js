(() => {
  const install=document.querySelector('#pwaInstall'),status=document.querySelector('#pwaStatus'),update=document.querySelector('#pwaUpdate');
  let promptEvent=null,registration=null,reloading=false;
  const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
  const supported=()=>window.isSecureContext&&/^https?:$/.test(location.protocol)&&'serviceWorker' in navigator;
  const showStatus=()=>{status.textContent=!supported()?'Installation disponible depuis une adresse HTTPS.':!navigator.onLine?'Hors connexion · données conservées sur cet appareil':standalone()?'Application installée · données locales':'Application web · données locales';install.classList.toggle('hide',standalone());};
  window.addEventListener('online',showStatus);window.addEventListener('offline',showStatus);
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;});
  window.addEventListener('appinstalled',()=>{promptEvent=null;showStatus();install.classList.add('hide');});
  install.onclick=async()=>{if(promptEvent){const event=promptEvent;promptEvent=null;await event.prompt();await event.userChoice;return;}document.querySelector('#pwaInstructions').textContent=!supported()?'Une PWA ne s’installe pas en ouvrant directement index.html. Publiez les fichiers de l’archive sur un hébergement HTTPS, puis ouvrez cette adresse dans votre navigateur.':/iPad|iPhone|iPod/.test(navigator.userAgent)?'Sur iPhone ou iPad : ouvrez cette adresse dans Safari, touchez Partager, puis « Sur l’écran d’accueil » et « Ajouter ».':'Sur Android : ouvrez le menu de Chrome puis « Installer l’application » ou « Ajouter à l’écran d’accueil ». Sur ordinateur : utilisez l’icône d’installation dans la barre d’adresse de Chrome ou Edge. Si le navigateur ne propose pas l’installation, créez un raccourci depuis son menu.';document.querySelector('#pwaHelp').showModal();};
  document.querySelector('#pwaClose').onclick=()=>document.querySelector('#pwaHelp').close();
  update.onclick=()=>{if(registration?.waiting)registration.waiting.postMessage({type:'SKIP_WAITING'});};
  showStatus();if(!supported())return;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloading)return;reloading=true;location.reload();});
  window.addEventListener('load',async()=>{try{registration=await navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'});const offer=()=>{if(registration.waiting&&navigator.serviceWorker.controller)update.classList.remove('hide');};offer();registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'){offer();if(!navigator.serviceWorker.controller)status.textContent='Application prête pour un usage hors connexion sur cet appareil.';}});});}catch{status.textContent='Mode en ligne · préparation hors connexion indisponible. Vous pouvez continuer à utiliser Horizon.';}});
})();
