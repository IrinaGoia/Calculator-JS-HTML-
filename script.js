console.log("");



function buttonClick(button) {
    if(button == 'C') 
    {
      document.getElementById('display').value = '0';
    }
    else if(button =='=') 
    { 
        // funktion 'eval' kann Code interpretieren und ausführen
      document.getElementById('display').value = eval(document.getElementById('display').value);
    }
    else 
    {   // wenn "display" ist leer
        if(document.getElementById('display').value == 0)
        {   
            document.getElementById('display').value = button;

        } else // wenn in "display" gibts schon Zahlen
        {   
            document.getElementById('display').value += button;
        }
    }
  }