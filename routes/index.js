var zawartoscNiegrzeczna = require('../niegrzeczna_zawartosc.json');

//main
exports.main = function(req,res){

    res.render('main', {
        title : "Aplikacja Anety",
    });
};
//start
exports.start = function(req, res){

    res.render('start', {
        title : "Aplikacja Anety",
    });
};
//niegrzeczna - strona główna
exports.niegrzeczna = function(req,res){

    var zawartoscN = zawartoscNiegrzeczna.niegrzecznaT;

    res.render('niegrzeczna', {
        title : "Nigrzeczna",
        n_zawartosc : zawartoscN
    });
};
//strony z bielizną - przekazanie ścieżki z zmienną
exports.niegrzeczna_bielizna = function(req,res){

    var bielizna_nr = req.params.nr;
    var zawartoscN = zawartoscNiegrzeczna.niegrzecznaT;

    if (bielizna_nr >= 1 && bielizna_nr <= 6){
        var bielizna = zawartoscN[bielizna_nr-1];
        var title = bielizna.title;
        var link = bielizna.main_characters;
        var next = parseInt(bielizna_nr)+1;
        var link_next = "/niegrzeczna/"+next;
        var text_linku ="KLIKNIJ LINK BY PRZEJŚĆ DALEJ";
        if(next >= 7){
            link_next = "/fantazja";
            text_linku = "KLIKNIJ BY PRZEJŚĆ DO FANTAZJI";
        };

        res.render('niegrzeczna_bielizna', {
            title : title,
            n_zawartosc : zawartoscN,
            movie : bielizna,
            link : link,
            link_next : link_next,
            text_linku : text_linku
        });
    }else{
        res.render('notFound', {
            n_zawartosc : zawartoscN,
            title : "This is not the page you are looking for"
        });
    }   
};
//fantazja
exports.fantazja = function(req, res){
    var zawartoscN = zawartoscNiegrzeczna.niegrzecznaT;
    res.render('fantazja', {
        title : "Fantazja",
        n_zawartosc : zawartoscN
    });
};
//notFound - pusta strona
exports.notFound = function(req, res){
    var zawartoscN = zawartoscNiegrzeczna.niegrzecznaT;
    res.render('notFound', {
        n_zawartosc : zawartoscN,
        title : "To nie jest strona, której szukasz!"
    });
};