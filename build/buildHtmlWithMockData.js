const renderer = require('../src/renderer.js');
const data = require('../src/data/dummyData.json');

renderer
	.renderHtml(data, { validationLevel: 'strict' })
	.then((data) => console.log(data))
	.catch((error) => console.log(error.message));
