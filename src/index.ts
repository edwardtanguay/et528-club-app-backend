import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3311;

const members = [
	{
		id: "28jj21",
		name: "Robert Hammerschmidt"
	},
	{
		id: "ii34ja",
		name: "Angela Wasserturm"
	}
];

app.get('/members', (req, res) => {
	res.json(members);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});