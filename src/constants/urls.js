const baseURL = 'https://jsonplaceholder.typicode.com'
const baseURLCars = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars : {
      base: cars,
      byId : (id) => `${cars}/${id}`
    },
    users : "/users",
    comments : "/comments"
}

export {baseURL,urls,baseURLCars}