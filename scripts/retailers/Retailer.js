export const RetailerRepresentation = (retailerObject, distributorObject) => {
    return `
    <div class="retailer">
        <h3>${retailerObject.name}</h3>
        <p>
        ${retailerObject.address}
        <br />
        ${retailerObject.city}. ${retailerObject.state} ${retailerObject.zip}
        </p>
        <p><span class="bold">Distributor</span> ${distributorObject.name}</p>
    </div>
`
}