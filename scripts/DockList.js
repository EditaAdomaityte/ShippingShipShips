import { getDocks, getHaulers,} from "./database.js";


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML +=`<li data-type="docks"
                        data-id="${dock.id}"
                        data-name="${dock.location}"
                        >${dock.location} can hold ${dock.volume} million tons of cargo</li>`
        // Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent)=>{
        const dockClicked=clickEvent.target
        if (dockClicked.dataset.type === "docks"){
            const dockID=dockClicked.dataset.id
            const dockName=dockClicked.dataset.name
            const haulers=getHaulers()
            const docks=getDocks()
            let loadingStatus=`${dockName} is currently unloading nothing`
            // Check if there is a hauler unloading at the dock
            for (const dock of docks){
                if (parseInt(dockID) === dock.id){
                    for (const hauler of haulers){
                        if (dock.id === hauler.dockId) {
                            loadingStatus=`The ${dock.location} dock is currently unloading ${hauler.name}`;
                        break;
                        }
                    }
                break;}
            }window.alert(loadingStatus);
        }
        
    }
)