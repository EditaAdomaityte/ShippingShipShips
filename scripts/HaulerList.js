import { getHaulers, getShippingShips } from "./database.js";

export const HaulerList = () =>{
    const haulers=getHaulers()

    let haulerListHTML="<ul>"

    for (const hauler of haulers){
        haulerListHTML+=`<li
            data-type="hauler"
            data-id=${hauler.id}
            >${hauler.name}</li> `
    }


    haulerListHTML+="</ul>"
    return haulerListHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const haulerClicked=clickEvent.target
          // Was a hauler list item clicked?
            if (haulerClicked.dataset.type === "hauler"){
             // Get the id of the hauler clicked
                const haulerId=haulerClicked.dataset.id
                // Start a counter variable at 0
                    let shipCounter=0
                // Iterate all of the shipping ships
                const shipShips=getShippingShips()
                for (const ship of shipShips) {
                     // Does the haulerId foreign key match the id?
                    if (parseInt(haulerId) === ship.haulerId){
                      
                    // Increase the counter by 1
                     shipCounter++
                    }
                }
                window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
            }
        }

)
