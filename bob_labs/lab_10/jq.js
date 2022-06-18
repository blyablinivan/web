let serverName = "https://usersdogs.dmytrominochkin.cloud";
let dogsArray;
let dogBlocks = document.getElementsByClassName("dog-block");
let closeButton = document.getElementById("closeButton");
$(document).ready(function() {
    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dogsArray = data;
        console.log(data);
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

       
        $(".dog-photo").css({'height': '150px'});
        $('.dog-block').width('50%').css({'margin-left': '100px'});
        return data;
    })
    .then((array) => {
        for (let i = 0; i < dogBlocks.length; i++) {
            dogBlocks[i].onclick = function(e) {
                $(".modal").width('20%').css({'margin-left': '40%'});
                $(".modal-dog-photo").attr("src", serverName+array[i].dogImage).height('220px');
                $("#modalDogName").text(array[i].title);
                $(".modalDogSex").text(array[i].sex);
                $(".modalDogAge").text(array[i].age);   
                $(".modalDogPersonality").text(array[i].description);
                $(".modal").show();
            }
            closeButton.onclick = function(element) {
                $(".modal").hide();
            }
            
            $(document).mouseup(function (e) {
                if ($(e.target).closest(".modal").length === 0) {
                    $(".modal").hide();
                }
            });
        }

        
        
    })
    
})



