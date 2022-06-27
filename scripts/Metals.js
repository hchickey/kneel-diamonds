import { getMetals, setMetal } from "./database.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements now use map
    const metalItems = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })
    
    html += metalItems.join("")
    html += "</ul>"

    return html
}

