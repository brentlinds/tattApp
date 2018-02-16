const app = {}

app.randomBanner = (bannerWord) => {
    let bannerArray = ["banner-1", "banner-2", "banner-3"]
    let randomIndex = Math.floor(Math.random() * bannerArray.length);
    let rando = bannerArray[randomIndex]
    $("form").on('submit', function() {
        $('.banner').switchClass("banner", rando, 1000, "easeInOutQuad");

    // $('div.banner').switchClass('banner', rando, 1000, "easeInOutQuad");
    // .delay$('#example').arctext({ radius: 300 });
})
$('div.banner p#example').text(bannerWord + " 4lyfe till I die everyday")
}

app.newIcon = (query) => {
    return $.ajax({
        url: "https://noun-project-proxy.herokuapp.com/v1",
        method: 'GET',
        data: {
            url: `icons/${query}`,
            params: JSON.stringify({
                
            })
        }
    }).then(function (response) {
        // console.log(response);
        // create variable to randomize the object selected out of the returned array
        const random = response.icons[Math.floor(Math.random() * response.icons.length)]
        // console.log(random);
        let image = random.preview_url;
        console.log(image);
        $(".results").html(`<img src= ${image}>`);
        // $("#demo1").text(" 4lyfe")
        
    });
}

app.events = () => {
    $("form").on("submit", function (e) {
        // prevents browser default behaviour
        e.preventDefault();
        // creates a variable to hold user's input
        const favething = $("input").val();
        if(favething !== "") {
        // $('input').val("");
        // passing user's input into the function that retrieves their icon
        $('.loader').show().delay(3000).fadeOut();
        app.newIcon(favething);
        app.randomBanner(favething);}
    })
}

app.init = () => {
    app.events();
}

$(function(){
    app.init();

});

// // Instantiate `CircleType` with an HTML element.
// const circleType = new CircleType(document.getElementById('demo1'));

// // Set the text radius and direction. Note: setter methods are chainable.
// circleType.radius(150).dir(-1);


        $().ready(function() {
            $('#example').arctext({ radius: 500 });
        });
