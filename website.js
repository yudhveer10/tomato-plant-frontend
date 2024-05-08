axios.post('http://localhost:5000/predict', {
    "features": [1, 2, 3, 4] // Example input data
})
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});
