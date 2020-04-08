let retailers = []

export const getRetailers = () => {
    return fetch("http://localhost:3000/retailers")
        .then(response => response.json())
        .then(response => retailers = response)
}

export const useRetailers = () => retailers.slice()