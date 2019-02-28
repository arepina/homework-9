function fetchResults(searchQuery) {
    const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    fetch(endpoint)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const results = data.query.search;
            console.log(results);
            document.getElementById('empty').innerHTML = "";
            document.getElementById("dataTable").innerHTML = "";
            if(results.length === 0){
                document.getElementById('empty').innerHTML = 'No data found!';
            }else {
                for (var i = 0; i < results.length; i++) {
                    var table = document.getElementById("dataTable");
                    var rowCount = table.rows.length;
                    var row = table.insertRow(rowCount);
                    var cell1 = row.insertCell(0);
                    cell1.innerHTML = results[i].title;

                    var cell2 = row.insertCell(1);
                    cell2.innerHTML = results[i].snippet;
                }
            }
        })
        .catch(error => {
            console.error(error)
        });
}