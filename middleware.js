export default (req, res) => {
    return res.send(`
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
				<title>Typescript Webpack Node Docker Starter</title>
				${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/bundle.css"></link>' : ''}
			</head>
			<body>
				<div id='app'></div>
				<script src='/bundle.js'></script>
			</body>
		</html>
	`);
};
