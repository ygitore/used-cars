import { Car } from "./car.js";
import { useCars } from "./carDataProvider.js";


const contentTarget = document.querySelector('.carList')

export const carList = () => {
    const cars = useCars()
    const carArray = cars.map(car => {
        return Car(car)
    })
    const combinedCarArray = carArray.join("")
    contentTarget.innerHTML = combinedCarArray
}
