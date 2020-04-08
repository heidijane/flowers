import { useRetailers } from "./retailProvider.js"
import { RetailerRepresentation } from "./Retailer.js"

const contentTarget = document.querySelector("#retailerList")

//initial render function
export const ShowRetailerList = () => {
    render()
}

const render = () => {
    const retailers = useRetailers()

    contentTarget.innerHTML = retailers.map(retailer => {
        return RetailerRepresentation(retailer)
    }).join('')

}