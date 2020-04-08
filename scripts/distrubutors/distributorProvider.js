let distributors = []

export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
        .then(response => response.json())
        .then(response => distributors = response)
}

export const useDistributors = () => distributors.slice()