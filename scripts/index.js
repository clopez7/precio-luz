import * as tariffCalculator from './modules/tariff_calculator.js'
import * as darkMode from './modules/dark_mode.js'

var darkModeStatus
var currentTariff

try{
    //Fetch current tariff
    currentTariff = tariffCalculator.getCurrentTariff()
    //Apply default mode of tariff
    darkMode.setMode( "dark", currentTariff )
} catch(err) {
    setTariffMessage("Error interno de la aplicacion") 
}

//Handle Dark Mode Button
document.getElementById("darkMode").addEventListener("click", function() {
    if( !darkModeStatus ){
        darkMode.setMode( "dark", currentTariff  )
        darkModeStatus = true
    }else{
        darkMode.setMode( "light", currentTariff  )
        darkModeStatus = false
    }
});

