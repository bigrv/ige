IgeFilters.sharpen = function (canvas, ctx, originalImage, texture) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(originalImage, 0, 0);

	// Apply the filter and then put the new pixel data
	ctx.putImageData(
		IgeFilters._convolute(
			ctx.getImageData(
				0,
				0,
				canvas.width,
				canvas.height
			),
			[  0, -1,  0,
				-1,  5, -1,
				0, -1,  0 ]
		),
		0,
		0
	);
};