axios.get('https://hex-escape-room.herokuapp.com/api/news/v1/data')
.then((res) => {
    let data = res.data.articles;
    data.forEach((item) => {
        item.publishedAt = (moment.tz(item.publishedAt, item.iana)).format('YYYY-MM-DD HH:mm:ss');//24小時制
    }

    );

    axios.post('https://hex-escape-room.herokuapp.com/api/news/v1/data', { "data": data })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.dir(error)
        })

})
.catch((error) => {
    console.dir(error)
})