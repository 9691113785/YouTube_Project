document.querySelector('#btn-search').addEventListener('click', (e) => {
    e.preventDefault()
    const  search_input = document.querySelector('#box').value
    const api_key = `AIzaSyCuPzvuwFpNUH0vaNQRNwIyWa_t0tjvzJA`
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&q=${search_input}&maxResults=50`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
            const result = JSON.parse(xhr.responseText)
            console.log(result);
            output=``
            result.items.forEach((a) => {
                output += `
                <div id="hide" style="margin:10px; background-color:white; border-radius: 10px; padding:10px;">
                <a href="https://youtube.com/watch?v=${a.id.videoId}"><img style="width:100%" src="${a.snippet.thumbnails.high.url}" /></a>
                <hr>
                <p><b> ${a.snippet.description} </b></p>
                <p style="color: gray;"> ${a.snippet.channelTitle} </p>
                </div>
                `
            })
            document.querySelector('.child-search-div').innerHTML = output
        }
    }
    xhr.send()
})
