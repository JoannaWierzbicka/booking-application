export const makeRequest = (url, options) => {
    return fetch(url, options)
        .then((response) => {
            return response.json()
                .then((data) => {
                    if(!response.ok) throw {
                        data,
                        code: response.status
                    }
                    return data
                })
        })
}

export default makeRequest