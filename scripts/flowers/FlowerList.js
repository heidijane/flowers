import { useFlowers } from "./flowerProvider.js"
import { FlowerRepresentation } from "./Flower.js"

const contentTarget = document.querySelector("#flowerList")

//initial render function
export const ShowFlowerList = () => {
    render()
}

const render = () => {
    const flowers = useFlowers()

    contentTarget.innerHTML = flowers.map(flower => {
        return FlowerRepresentation(flower)
    }).join('')

}