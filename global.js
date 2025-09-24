const toggleBUTTON = document.getElementById('button-theme-toggle');
const toggleSVG = toggleBUTTON.querySelector('svg');
const togglePATH = toggleSVG.querySelector('path')


const cookiesOPEN = document.getElementById('button-cookie-open');
const cookiesCLOSE = document.getElementById('button-cookie-close');
const sourcecodeOPEN = document.getElementById('button-sourcecode');
const popupOverlay = document.getElementById('popup');
const cookieOverlay = document.getElementById('cookies-popup');
const redirectOVERLAY = document.getElementById('are-you-sure-popup');
const redirectURL = document.getElementById('areyousure-url')
const redirectCONFIRM = document.getElementById('button-areyousure-openurl')
const redirectCANCEL = document.getElementById('button-areyousure-nevermind')
const body = document.body;
let currentURL = "https://www.google.com"
// Theme
const icons = {
  moon: "M600-640 480-760l120-120 120 120-120 120Zm200 120-80-80 80-80 80 80-80 80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z",
  sun: "M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!prefersDark) {
    body.classList.remove('dark-mode')
    togglePATH.setAttribute('d', icons.sun)
}

function setURL(URL) {
  currentURL = URL;
  redirectURL.textContent = URL;
}

toggleBUTTON.addEventListener('click', () => {
  if (!body.classList.contains('dark-mode')) {
    body.classList.add('dark-mode');
    togglePATH.setAttribute('d', icons.moon)
  } else {
    body.classList.remove('dark-mode');
    togglePATH.setAttribute('d', icons.sun)
  }
});

// Cookies Pop-up
cookiesOPEN.addEventListener('click', () => {
  cookieOverlay.style.display = 'flex'; 
  popupOverlay.classList.add('visible')
});

cookiesCLOSE.addEventListener('click', () => {
  cookieOverlay.style.display = 'none'; 
  popupOverlay.classList.remove('visible')
});


// Cookies Pop-up
sourcecodeOPEN.addEventListener('click', () => {
  redirectOVERLAY.style.display = 'flex'; 
  setURL('https://www.github.com/codedmoth/codedmoth.github.io')
  popupOverlay.classList.add('visible')
});

redirectCONFIRM.addEventListener('click', () => {
  window.location.href = currentURL;
})

redirectCANCEL.addEventListener('click', () => {
    redirectOVERLAY.style.display = 'none'; 
    popupOverlay.classList.remove('visible')
})

window.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
      cookieOverlay.style.display = 'none'; 
      redirectOVERLAY.style.display = 'none';
      popupOverlay.classList.remove('visible')
      setURL('https://www.google.com/?failed_to_load_url')
  }
});