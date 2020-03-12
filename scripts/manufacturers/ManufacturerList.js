import { useManufacturers } from "./ManufacturerDataProvider.js"
import {Manufacturer} from './Manufacturer.js'

const contentTarget = document.querySelector('.manufacturerList')

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