//  -----------------------------------------      FETCH API (JSON DATA)      -----------------------------------------------
function getDetails(){
fetch("productsData.json")
.then(function(response){
    return response.json();
})
.then(function(productDetails){
    let placeholder = document.querySelector("#data-output")

    let out = "";
    for(let data of productDetails){
        out += `
            <tr>
                <td style="border: 1px solid black; padding: 10px;">${data.id}</td>
                <td style="border: 1px solid black; padding: 10px;"><img style="height: 100px;width: 100px;" src='${data.image}'></td>
                <td style="border: 1px solid black;">${data.title}</td>
                <td style="border: 1px solid black; padding: 10px;">${data.price}</td>
                <td style="border: 1px solid black; padding: 10px;">${data.category}</td>
            </tr>
        `
    }
    placeholder.innerHTML = out;
})
}
