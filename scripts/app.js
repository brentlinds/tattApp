const app = {}

app.randomBanner = (bannerWord) => {
    let bannerArray = ["banner-1", "banner-2", "banner-3", "banner-4", "banner-5", "banner-6"]
    let randomWords = ["4 life", "I heart", "or die"]
    let randomIndex = Math.floor(Math.random() * bannerArray.length);
    let randomWordIndex = Math.floor(Math.random() * randomWords.length);
    let rando = bannerArray[randomIndex]
        $(".banner").removeClass("banner");
        $(".bannerall").addClass(rando);

    // .delay$('#example').arctext({ radius: 300 });
// })
$('div.bannerall').text(bannerWord + randomWords[randomWordIndex])
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
