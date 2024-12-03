const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id:1, name: "Cunami", dockId: 1},
        {id:2, name: "Hammer", dockId: 2},
        {id:3, name: "Hamster", dockId: 4},
        
    ],
    shippingShips: [
        {id:1, name: "Esso Atlantic", haulerId:1 },
        {id:2, name: "Prairial", haulerId:3 },
        {id:3, name: "Palais Royal", haulerId:1 },
        {id:4, name: "Rivoli", haulerId:3 },
        {id:5, name: "Ever Acer", haulerId:2 },
        {id:6, name: "Nissei Maru", haulerId:1 },
        {id:7, name: "HMM Rotterdam", haulerId:2 },
        {id:8, name: "CMA CGM Trocadero", haulerId:1 }
    ]
}

export const getDocks = () => {
    return database.docks.map(dock =>({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler =>({...hauler}))
}

export const getShippingShips = () =>{
    return database.shippingShips.map(shippingShip=>({...shippingShip}))
}