let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:3000/nurseries")
        .then(response => response.json())
        .then(response => nurseries = response)
}

export const useNurseries = () => nurseries.slice()

//get the relationships between the nurseries and the distributors
let nurseryDistributors = []

export const getNurseryDistributors = () => {
    return fetch("http://localhost:3000/nurseryDistributors")
        .then(response => response.json())
        .then(response => nurseryDistributors = response)
}

export const useNurseryDistributors = () => nurseryDistributors.slice()


//get the relationships between the flowers and the nurseries
let nurseryFlowers = []

export const getNurseryFlowers = () => {
    return fetch("http://localhost:3000/nurseryFlowers")
        .then(response => response.json())
        .then(response => nurseryFlowers = response)
}

export const useNurseryFlowers = () => nurseryFlowers.slice()