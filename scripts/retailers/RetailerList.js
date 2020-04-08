import { useRetailers } from "./retailProvider.js"
import { RetailerRepresentation } from "./Retailer.js"
import { useDistributors } from "../distrubutors/distributorProvider.js"
import { useFlowers } from "../flowers/flowerProvider.js"
import { useNurseryDistributors, useNurseryFlowers, useNurseries } from "../nurseries/nurseryProvider.js"

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
    const nurseryDistributors = useNurseryDistributors()
    const nurseryFlowers = useNurseryFlowers()

    contentTarget.innerHTML = retailers.map(retailer => {

        //get the distributor for the retailer
        const foundDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

        //get all the the nurseries for the distributor
        const nurseryRelationships = nurseryDistributors.filter(relationship => relationship.distributorId === retailer.distributorId)
            //convert the relationships to nursery objects
        const foundNurseries = nurseryRelationships.map(relationship => {
            return nurseries.find(nursery => nursery.id === relationship.nurseryId)
        })

        //all the flowers that the retailer can sell
        let sellableFlowers = []

        foundNurseries.forEach(nursery => {
            //get all the flowers for the nursery
            const flowerRelationships = nurseryFlowers.filter(relationship => relationship.nurseryId === nursery.id)

            //convert the relationships into flower data
            const flowersNurserySells = flowerRelationships.map(relationship => {
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