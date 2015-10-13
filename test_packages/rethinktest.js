var r = require('rethinkdb');

var port = 28015;
if (process.argv[2]) {port = process.argv[2]}

r.connect({ host: 'localhost', port: port }, function(err, conn) {
  if (err) {throw err}
  r.db('test').tableCreate('tv_shows').run(conn, function(err, res) {
    if (err) {throw err}
    console.log(res);
    r.table('tv_shows').insert({ name: 'Star Trek TNG' }).run(conn, function(err, res)
    {
      if(err) {throw err}
      console.log(res);
    });
  });
});
