$.ajax({
    "method": "GET",
    "url": "http://localhost/assignment_backend/api/fetch",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "$2y$10$c1aPWd41DDEDVnsl9E58aeaL.hMHOThloXLsEXwrpbctkOU/hrMem"
    },
    beforeSend: function() {
        $('.loader-outer').show();
    },
    success: function(response, textStatus, xhr) {
        $('.loader-outer').hide();
        if(xhr.status == 200){
// $.ajax(settings).done(function(response) {

        for (resp of response) {
            name = resp.name;
            address = resp.address;
            image = resp.image;
            id = resp.id;
            uptreks = `<div class="col-xs-6 col-sm-4 col-md-3" id="card">
        <img src="${image}" class="trek-bg" alt="">
            <div class="white">
                <h2 >${name}</h2>
                <div class="where">
                    <img src="destination.png" alt="">
                        <h4>${address}</h4>
                </div>
                <div class="fixed-info">
                    <div class="extra-info">
                        <div class="col-xs-7">
                            <button class="detail-btn">
                               <img src="detail-btn.png" id="${id}" onclick="detail(this)">                        </button>
                        </div>
                    </div>
                </div>
        </div>
</div>`;

            $('.future-treks > div.row').append(uptreks);
        }

}},
        error: function() {
            console.log('error');
        }
    });
function detail(element){
    localStorage.setItem('_id', element.id);
    top.location.href = 'hotelDetail.php';
}


