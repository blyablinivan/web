


$(document).ready(function() {
    let serverName = "https://usersdogs.dmytrominochkin.cloud";
let dogsArray;
let dogBlocks = document.getElementsByClassName("dog-block");
let closeButton = document.getElementsByClassName("adopt-me-text");
let dogPhoto = document.getElementsByClassName('dog-photo');
let modal = document.getElementsByClassName('modal');
let modalDogPhoto = document.getElementsByClassName('modal-dog-photo');
    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dogsArray = data;
        return data;
    })
    .then((data) => {
        
        const div = document.createElement('div');
        div.innerHTML = data.map(data => {
            return `<div class="dog-block">
                <div class="dog-image">
            <img src="${serverName}${data.dogImage}" class="dog-photo">
        </div>
        <div class="info-about-dog">
            <div class="dog-name">
                <p>${data.title}</p>
            </div>
            <div class="dog-sex">
                <p>${data.sex}</p>
            </div>
        </div>
        </div>`
        }).join('');
        document.getElementById('container').append(div);

       
        
        return data;
    })
    .then((array) => {
        console.log(array);
        let modalDogName = document.getElementById('modalDogName').innerHTML;
        let modalDogSex = document.getElementsByClassName('modalDogSex').innerHTML;
        let modalDogAge = document.getElementsByClassName('modalDogAge').innerHTML;
        let modalDogPersonality = document.getElementsByClassName('modalDogPersonality').innerHTML;
       
            dogBlocks.onclick = function() {
                console.log(this.id);_
                // modalDogPhoto[i].src = serverName+array[i].dogImage;
                // modalDogName[i] = array[i].title;
                // dogBlocks[i].modalDogSex = array[i].sex;
                // dogBlocks[i].modalDogAge = array[i].age;
                // dogBlocks[i].modalDogPersonality = array[i].description;
                // modal[i].style.display = "block";
            };

    

        closeButton.onclick = function() {   
            modal[i].style.display = "none";
        }

        
        
    })
    
})



