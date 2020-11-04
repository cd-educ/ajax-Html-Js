
$("#btnBuscar").on("click", function(event) {

	$("#imagenes").html("");
	var tag = $("#txtBuscador").val();

	$.ajax({
		url: "https://api.giphy.com/v1/gifs/search",
		data: {
			limit:20,
			api_key: "<API_KEY>",
			q: tag
		},
		success: function( result ) {

			var imagenes = ""
			result.data.forEach(image => {
				imagenes = imagenes + "<img src=\"" + image.images.fixed_height.url + "\">"
			})	

			$( "#imagenes" ).html(imagenes);
			
		},
		error: function (error) {
			console.log(error);
		}
	});

});

