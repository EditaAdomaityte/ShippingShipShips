import { HaulerList } from "./HaulerList.js"
import { ShippingShipList } from "./ShippingShipList.js"
import { DockList } from "./DockList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${ShippingShipList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML