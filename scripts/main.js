import { getFlowers } from "./flowers/flowerProvider.js";
import { ShowFlowerList } from "./flowers/FlowerList.js";

getFlowers()
    .then(ShowFlowerList)