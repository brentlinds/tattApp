const app = {}

app.randomBanner = () => {
    const randomElement = Math.floor(Math.random() * array.length);
    return randomElement;
}

app.bannerArray = [ "banner-1", "banner-2", "banner-3" ]

app.events = () => {
    $("form").on("submit", function (e) {
        // prevents browser default behaviour
        e.preventDefault();
        // creates a variable to hold user's input
        const favething = $("input").val();
        console.log(favething);
        // passing user's input into the function that retrieves their icon
        app.newIcon(favething)
    })
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


app.init = () => {
    app.events();
}

$(function(){
    app.init();

});
