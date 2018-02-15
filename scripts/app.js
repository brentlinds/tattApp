const app = {}

app.randomBanner = (bannerWord) => {
    let bannerArray = ["banner-1", "banner-2", "banner-3"]
    let randomIndex = Math.floor(Math.random() * bannerArray.length);
    let rando = bannerArray[randomIndex]
    $('div.banner').addClass(rando);
    $('div.banner').html(`<p>${bannerWord}</p>`)
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
        // $('input').val("");
        // passing user's input into the function that retrieves their icon
        $('.loader').show().delay(3000).fadeOut();
        app.newIcon(favething);
        app.randomBanner(favething);
    })
}

app.init = () => {
    app.events();
}

$(function(){
    app.init();

});
