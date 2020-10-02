$(document).ready(function () {
    $.ajax({
        "method": "POST",
        "url": "http://localhost/blog/api/details",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "id": Number(localStorage.getItem('_id'))
        }),
        beforeSend: function() {
            $('.loader-outer').show();
        },
        success: function(response, textStatus, xhr) {
            $('.loader-outer').hide();
            if(xhr.status == 200){
                document.querySelector('.trek-pagination>h2').innerHTML =
                    `Restaurant > ${response[0].name} > <span> Details</span>`;

                document.querySelector('.trek-place-detail h1').textContent =response[0].name;
                document.querySelector('#location').innerHTML =
                    `<span>Location: </span> ${response[0].address}`;
                response[0].menu.forEach(myFunction);

                function myFunction(item) {
                    document.getElementById("menu").innerHTML += item.food + ":  ₹ " + item.price + "<br>";
                }
                document.querySelector('.time h3').innerHTML =
                    `<span>Phone: </span> ${response[0].mobile}`;
                document.querySelector('#email').innerHTML =
                    `<span>Email: </span> ${response[0].email}`;
                document.querySelector('.eventDetails p').innerHTML =
                    `<span>Hotel Details: </span> ${response[0].description}`;
                document.getElementById("trip_image").src= response[0].image;
            }
            else{
                alert("some error occured");
            }



        },
        error: function() {
            console.log('error');
        }
    });
})

