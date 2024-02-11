import express from 'express';

const app = express();
const port = 3311;

const members = [
	{
		id: 1,
		name: "Robert Hammerschmidt"
	},
	{
		id: 2,
		name: "Angela Wasserturm"
	}
];

app.get('/members', (req, res) => {
	res.json(members);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});