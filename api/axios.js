const axios = require('axios');

export function getAxios() {
    // Make a request for a user with a given ID
    axios.get('https://reqres.in/api/posts')
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
}

export function postAxios() {
    axios.post('https://reqres.in/api/posts', {
        title: 'React Hooks POST Request Example'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}