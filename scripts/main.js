import { getFlowers } from "./flowers/flowerProvider.js";
import { ShowFlowerList } from "./flowers/FlowerList.js";
import { ShowRetailerList } from "./retailers/RetailerList.js";
import { getRetailers } from "./retailers/retailProvider.js";

getFlowers()
    .then(ShowFlowerList)
getRetailers()
    .then(ShowRetailerList)