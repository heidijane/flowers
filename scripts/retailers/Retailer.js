export const RetailerRepresentation = (retailerObject, distributorObject, nurseries, flowers) => {
        return `
    <div class="retailer">
        <h3>${retailerObject.name}</h3>
        <p>
        ${retailerObject.address}
        <br />
        ${retailerObject.city}. ${retailerObject.state} ${retailerObject.zip}
        </p>
        <p><span class="bold">🏬 Distributor</span> ${distributorObject.name}</p>
        <p>🌱 Distributor sources flowers from ${
            nurseries.map(nursery => {
                return `<span class="bold">${nursery.name}</span>`
            }).join(" and ")
        }</p>
        <p>🌷 Can sell ${
            flowers.map((flower, index) => {
                return `<span class="bold">${index === 0 ? `` : (flowers.length === (index+1) ? `, and` : `, `)} ${flower.color} ${flower.commonName}s</span>`
            }).join("")
        }
        </p>
    </div>
`
}