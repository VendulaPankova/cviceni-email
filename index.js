function goodbye(name)
{ const elClosing = document.querySelector(".email__closing")
    elClosing.textContent = `S pozdravem ${name}`
 }

 goodbye("Pavel Ovesný")


function fillSubject(subject)
 { const elSubject = document.querySelector(".email__subject")
    elSubject.textContent = subject
 }
fillSubject("Žádost o práci")

function fillBody(body)
 { const elBody = document.querySelector(".email__body")
    elBody.textContent = body
 }
fillBody("Toto je ukázkový text pro tělo e-mailu.")

function goodbye(name) {
    const closingElement = document.querySelector('.email__closing');
    closingElement.textContent = `S pozdravem ${name}`;
  }
  function fillBody(body, name) {
    const bodyElement = document.querySelector('.email__body');
    bodyElement.textContent = body;
    
    goodbye(name);
  }
