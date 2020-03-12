export const Car = (carObject) =>{
    return `
        <section class="car">
            <div>Make: ${carObject.make}</div>
            <div>Model: ${carObject.model}</div>
            <div>Year:${carObject.year}</div>
            <div>Body: ${carObject.body}</div>
            <div>Color: ${carObject.color}</div>    
        </section>
    `
}