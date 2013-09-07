//var serviceURL = "http://localhost:8888/services/";

//urls de resources
var serviceURL = "http://pfm-pre.hol.es/services/";
var logosURL = "http://pfm-pre.hol.es/img/logos/";
var portadasURL = "http://pfm-pre.hol.es/img/portadas/";
var cartelesURL = "http://pfm-pre.hol.es/img/carteles/";
var rutasURL = "img/rutas/";
var markersURL = "img/markers/";
var iconsURL = "img/icons/";

var height_menu = 140;

//funcion para obtener las variables y sus valores de una URL
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}