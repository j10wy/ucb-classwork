const mysql = require('mysql');

var dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'top_songsDB'
});

function qArtist() {
	var sql = 'SELECT song FROM Top5000 WHERE `artist`="Coolio"';
	// Connect and query
	dbConnection.query(sql, function (error, results) {
		if (error) {
			throw error
		};
		console.log(typeof results);
	});
	dbConnection.end();
}
``
function qJoin() {
	var sql = `SELECT top_5000_songs.artist, top_5000_songs.song, top_3000_albums.artist, 
	top_3000_albums.album, top_3000_albums.year
	FROM top_3000_albums
	INNER JOIN top_5000_songs ON top_5000_songs.artist = top_3000_albums.artist
	WHERE top_5000_songs.year = top_3000_albums.year
	LIMIT 10;`;
	// Connect and query
	dbConnection.query(sql, function (error, results) {
		if (error) {
			throw error
		};
		console.log(JSON.stringify(results, null, 2));
	});
	dbConnection.end();
}

qJoin();


