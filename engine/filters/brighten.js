IgeFilters.brighten = function (canvas, ctx, originalImage, texture) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(originalImage, 0, 0);

	// Apply the filter and then put the new pixel data
	ctx.putImageData(
		IgeFilters._brighten(
			ctx.getImageData(
				0,
				0,
				canvas.width,
				canvas.height
			),
			texture
		),
		0,
		0
	);
};

IgeFilters._brighten = function (imageData, texture) {
	var arr,
		arrCount,
		i, adjustment = texture.data('IgeFilters.brighten.value');

	arr = imageData.data;
	arrCount = arr.length;

	for (i = 0; i < arrCount; i += 4) {
		arr[i] += adjustment;
		arr[i + 1] += adjustment;
		arr[i + 2] += adjustment;
	}

	return imageData;
};