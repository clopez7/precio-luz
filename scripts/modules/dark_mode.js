export function setMode( mode, currentTariff ){
    if( mode == 'light') {
        if ( currentTariff == 'valle') {
            horaValle( false );
        }else if (currentTariff == 'llana' ){
            horaLlana( false );
        } else if (currentTariff == 'punta' ){
            horaPunta( false );
        }
    }else if ( mode == 'dark') {
        document.getElementById("mensaje-horario").style.color = "white";
        var x = document.getElementsByClassName("dark-mode-message");
        x[0].style.color = "white";
        var y = document.getElementsByTagName("p");
        y[0].style.color = "white";

        if ( currentTariff == "punta" ){
            horaPunta( true );
        } else if ( currentTariff  == "valle"){
            horaValle( true );
        } else if ( currentTariff == "llana" ) {
            horaLlana( true );
        }
    }

    function horaLlana( d ){
        setTariffMessage('Es hora llana!')
        if ( d ){
            setBackgroundColor('#4d4019')
        }else{
            setBackgroundColor(yellow)
            
            var x = document.getElementsByTagName("p");
            var y = document.getElementsByTagName("h1");
            x[0].style.color = 'black'
            y[0].style.color = 'black'
        }
    }

    function horaValle( d ){
        setTariffMessage('Es hora valle!')
        if ( d ){
            setBackgroundColor('#194d19')

        }else{
            setBackgroundColor('green')
        }
    }

    function horaPunta( d ){
        setTariffMessage('Es hora punta!')
        if ( d ){
            setBackgroundColor('#4d1919')
        }else{
            setBackgroundColor('red')
            
        }
    }

    function setBackgroundColor( c ){
        document.getElementById("contenedor-principal").style.backgroundColor = c;
        var y = document.getElementsByTagName("footer");
        y[0].style.color = c;

    }
}

function setTariffMessage ( m ){
    document.getElementById("mensaje-horario").innerHTML = m
}