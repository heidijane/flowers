let flowers = []

export const getFlowers = () => {
    return fetch("http://localhost:3000/flowers")
        .then(response => response.json())
        .then(response => flowers = response)
}

export const useFlowers = () => flowers.slice()