const express = require('express');
const request = require('request');
const querystring = require('querystring');

// config
const client_id = '';
const secret = '';
const port = 3000;
const server_url = `http://localhost:${port}`;
const redirect_uri = `${server_url}/callback`;
const redirect_to = 'http://localhost:4200/';

// settings
const app = express();
const deezerConnect = 'https://connect.deezer.com';
const scopes = 'basic_access listening_history manage_library email';
const encodedClient = Buffer.from(`${client_id}:${secret}`).toString('base64');

app.use(express.static('./'));

//! 1) Authorize
app.get('/login', function(req, res) {
	res.redirect(`${deezerConnect}/oauth/auth.php?` +
							'&app_id=' + client_id +
							'&perms=' + encodeURIComponent(scopes) +
							'&redirect_uri=' + encodeURIComponent(redirect_uri));

});

//! 2) Get authorization_code
app.get('/callback', function(req, res) {
	if (req.query && (!req.query.error && req.query.code)) {
		// Configure the request
		const options = {
			url: `${deezerConnect}/oauth/access_token.php?app_id=${client_id}&secret=${secret}&code=${req.query.code}`,
			method: 'POST'
		};

		// 3) Get the token!
		request(options, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				const access_token = querystring.parse(body).access_token;
				res.redirect(`${redirect_to}?t=${access_token}`);
			} else {
				console.log('Error!', error, body);
				res.redirect(`${server_url}/errorWithToken.html`);
			}
		});

	} else {
		res.redirect(`${server_url}/errorWithAuthAccess.html`);
	}
});

app.listen(port, () => console.log(`\nListening port: ${port}!`));
