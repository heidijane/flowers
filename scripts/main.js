import { getFlowers } from "./flowers/flowerProvider.js";
import { ShowFlowerList } from "./flowers/FlowerList.js";
import { ShowRetailerList } from "./retailers/RetailerList.js";
import { getRetailers } from "./retailers/retailProvider.js";
import { getDistributors } from "./distrubutors/distributorProvider.js";
import { getNurseries, getNurseryDistributors, getNurseryFlowers } from "./nurseries/nurseryProvider.js";

getFlowers()
    .then(ShowFlowerList)
getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryDistributors)
    .then(getNurseryFlowers)
    .then(ShowRetailerList)