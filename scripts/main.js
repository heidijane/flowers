import { getFlowers } from "./flowers/flowerProvider.js";
import { ShowFlowerList } from "./flowers/FlowerList.js";
import { ShowRetailerList } from "./retailers/RetailerList.js";
import { getRetailers } from "./retailers/retailProvider.js";
import { getDistributors } from "./distrubutors/distributorProvider.js";

getFlowers()
    .then(ShowFlowerList)
getRetailers()
    .then(getDistributors)
    .then(ShowRetailerList)