import { useRetailers } from "./retailProvider.js"
import { RetailerRepresentation } from "./Retailer.js"
import { useDistributors } from "../distrubutors/distributorProvider.js"
import { useFlowers } from "../flowers/flowerProvider.js"
import { useNurseries } from "../nurseries/nurseryProvider.js"

const contentTarget = document.querySelector("#retailerList")

//initial render function
export const ShowRetailerList = () => {
    render()
}

const render = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const flowers = useFlowers()
    const nurseries = useNurseries()

    contentTarget.innerHTML = retailers.map(retailer => {

        //get the distributor for the retailer
        const foundDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

        //convert the relationships to nursery objects
        const foundNurseries = foundDistributor.nurseryDistributors.map(relationship => {
            return nurseries.find(nursery => nursery.id === relationship.nurseryId)
        })

        //all the flowers that the retailer can sell
        let sellableFlowers = []

        foundNurseries.forEach(nursery => {

            //convert the relationships into flower data
            const flowersNurserySells = nursery.nurseryFlowers.map(relationship => {
                return flowers.find(flower => flower.id === relationship.flowerId)
            })

            sellableFlowers = sellableFlowers.concat(flowersNurserySells)
        })

        //remove duplicate flowers from array
        sellableFlowers = sellableFlowers.filter((flower, index) => {
            return sellableFlowers.indexOf(flower) >= index
        })

        return RetailerRepresentation(retailer, foundDistributor, foundNurseries, sellableFlowers)

    }).join('')

}