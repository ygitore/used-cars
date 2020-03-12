import { useManufacturers } from "./ManufacturerDataProvider.js"
import {Manufacturer} from './Manufacturer.js'

const contentTarget = document.querySelector('.manufacturerList')
const eventhub = document.querySelector('#container')

contentTarget.addEventListener('change', EventChange => {
    if(EventChange.target.classList.contains("manufacturerDropdown")){
        const manufaturChosen = new CustomEvent('manufacturerChosen', {
            detail: {
                make: EventChange.target.value
            }
        })
        eventhub.dispatchEvent(manufaturChosen)
    }
})

export const ManufacturerList = () => {
    const manufacturerList = useManufacturers()
    const manufacturerHtml = manufacturerList.map(eachManufacturer => {
        return Manufacturer(eachManufacturer)
    })
    contentTarget.innerHTML = `
        <select class = "manufacturerDropdown">
            ${manufacturerHtml.join("")}
        </select>
    `
}