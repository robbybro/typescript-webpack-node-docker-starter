export default (req, res) => {
    return res.send(`
		<!doctype html>
		<html>
			<head>
			<title>Typescript Webpack Node Docker Starter</title>
			<link rel="manifest" href="/manifest.json">
				${
                    process.env.NODE_ENV === 'production'
                        ? '<link rel="stylesheet" href="/bundle.css"></link>'
                        : ''
                }
			</head>
			<body>
				<div id='app'></div>
				<script src='/bundle.js'></script>
			</body>
		</html>
	`);
};
