let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:3000/nurseries?_embed=nurseryFlowers")
        .then(response => response.json())
        .then(response => nurseries = response)
}

export const useNurseries = () => nurseries.slice()