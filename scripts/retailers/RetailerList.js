import { useRetailers } from "./retailProvider.js"
import { RetailerRepresentation } from "./Retailer.js"
import { useDistributors } from "../distrubutors/distributorProvider.js"

const contentTarget = document.querySelector("#retailerList")

//initial render function
export const ShowRetailerList = () => {
    render()
}

const render = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()

    contentTarget.innerHTML = retailers.map(retailer => {

        //get the distributor for the retailer
        const foundDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

        return RetailerRepresentation(retailer, foundDistributor)

    }).join('')

}