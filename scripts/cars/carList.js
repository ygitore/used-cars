import { Car } from "./car.js";
import { useCars } from "./carDataProvider.js";


const contentTarget = document.querySelector('.carList')
const eventhub = document.querySelector('#container')
export const carList = () => {
    const cars = useCars()
    const carArray = cars.map(car => {
        return Car(car)
    })
    const combinedCarArray = carArray.join("")
    contentTarget.innerHTML = combinedCarArray
}
eventhub.addEventListener('manufacturerChosen', Event=> {
    // Get all the cars
    const cars = useCars()
    // Filter out the cars that are of the same make as what was chosen
    const filteredCars = cars.filter(eachCar => {
        if(eachCar.make === Event.detail.make)
        {
            return true
        }
        return false
    })
      // Convert each object in the filtered array to a string
    const carString = filteredCars.map(eachFilteredCar=>{
        return Car(eachFilteredCar)
    })
    contentTarget.innerHTML = carString.join("")
    
})