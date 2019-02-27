function fetchResults(searchQuery) {
    const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    fetch(endpoint)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const results = data.query.search;
            console.log(results);
            document.getElementById("loadedPage").innerText = results;
        })
        .catch(error => console.error(error));
}

fetchResults("gazprom");
