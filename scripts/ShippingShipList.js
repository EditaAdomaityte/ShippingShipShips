import { getShippingShips, getHaulers } from "./database.js";

export const ShippingShipList = () =>{
    let ShipsHTML="<ul>"
    const shippingShips=getShippingShips()
    for (const ship of shippingShips){
        ShipsHTML+=`<li data-type="ship"
                        data-haulerId="${ship.haulerId}"
                        
                        > ${ship.name} </li>`
    }

    ShipsHTML+= "</ul>"
    return ShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const shipClicked=clickEvent.target
        if (shipClicked.dataset.type === "ship"){
            const shipHaulerId=shipClicked.dataset.haulerid
            const haulers=getHaulers()
            for (const hauler of haulers) {
                if(parseInt(shipHaulerId) === hauler.id){
                    window.alert(`${shipClicked.innerText} is being hauled by ${hauler.name}`)}
                
            }
        }
    }
)
