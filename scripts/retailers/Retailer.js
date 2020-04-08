export const RetailerRepresentation = (retailerObject) => {
    return `
    <div class="retailer">
        <h3>${retailerObject.name}</h3>
        <p>
        ${retailerObject.address}
        <br />
        ${retailerObject.city}. ${retailerObject.state} ${retailerObject.zip}
        </p>
    </div>
`
}