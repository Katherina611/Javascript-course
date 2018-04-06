document.getElementById('button1').addEventListener('click', loadTxt);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadJSONAPI);


//load txt
function loadTxt(){
    fetch('data.txt')
        .then(response => response.text())
        .then(data => document.getElementById('result').innerHTML = data)
        .catch(error => console.log(error))
}
//load and print JSON
function loadJSON(){
    fetch('employees.json')
        .then(response =>response.json())
        .then(data => {
            let html = '';
            data.forEach(employee=> {
                html += `
                <li>${employee.name} - ${employee.job}</li>
                `;
            });
            //insert into the HTML
            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.log(error))
}
//prints the response from a REST API
function loadJSONAPI(){
    fetch('https://picsum.photos/list')
        .then(response => response.json())
        .then(images =>{
            let html = '';
            images.forEach(image =>{
                html += `
                    <li>
                        <a target = '_blank' href="${image.post_url}">View image</a>
                        ${image.author}
                    </li>
                `;
            });
            //insert into the HTML
            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.log(error))


}
