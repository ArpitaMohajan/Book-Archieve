document.getElementById('error-message').style.display = 'none'
const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = ''
    document.getElementById('error-message').style.display = 'none'
    console.log(searchText)
    if (searchText == '') {

    }
    else {
        const url = `http://openlibrary.org/search.json?q=${searchText}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
            .catch(error => displayError(error))

    }

    const displayError = error => {
        document.getElementById('error-message').style.display = 'block'
    }

    // try {

    //     resultError('error')
    // }
    // catch (err) {
    //     document.getElementById('error-message').innerHTML = err.message;
}
const displaySearchResult = docs => {
    console.log(docs.length)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = ''



    docs.forEach(books => {
        // console.log(books);

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =
            `<div class="card  h-60 text-start w-75" style="bg-gray" >
                <img src=" https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top w-100" alt="...">
                    <div class="card-body text-start">
                        <h5 class="card-title">${books.title}</h5>
                        <h6 class="card-title">${books.author_name}</h6>
                        <h6 class="card-title">${books.first_publish_year}</h6>
                       
                    </div>
        </div> `
        searchResult.appendChild(div);
    })

}
// document.getElementById('button-search').addEventListener('click', function () {
//     cnt++
//     let divData = document.getElementById('button-search')
//     divData.innerHTML = "Number of the downloads:(" + cnt + ")"
// })