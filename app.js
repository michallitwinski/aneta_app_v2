var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// Routes
var routes =require('./routes');
//main
app.get('/', routes.start);
//start
//TEST
app.get('/main', routes.main);
app.get('/start', routes.start);
//home
app.get('/niegrzeczna', routes.niegrzeczna);
//movie_page - przekazanie ścieżki z zmienną
app.get('/niegrzeczna/:nr?', routes.niegrzeczna_bielizna);
//Fantazja
app.get('/fantazja', routes.fantazja);
//notFound - pusta strona
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);