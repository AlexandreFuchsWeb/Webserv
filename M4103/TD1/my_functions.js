addEventListener("load", init);

// Initialisation de toutes mes fonctions
function init() {
  defTitre1();
  defTitre2();
  defTitre3();
  defTitre4();
  inverseTexte();
  datemodif();
  unroll();
  var nbrecherche = document.getElementsByName("nbRecherche")[0];
  document.getElementById("date_modif").addEventListener("click", majNbJours);
  majHorloge1();
  majGrafH();
  majHorloge2();
  majNbJours();
  swapcolor();
  find();
  window.setInterval(majHorloge1,1000);
  window.setInterval(majGrafH,1000);
  console.log(nbrecherche.value);
}


function defTitre1() {
  var h1 = document.getElementById("titre");
  if (h1)
    document.title = h1.innerText;
}

function defTitre2() {
  1
  var h2 = document.getElementsByTagName("h2");
  if (h2 && h2.length > 0)
    document.title = h2.item(0).innerText
}

function defTitre3() {
  h2 = document.getElementsByTagName("h2");
  if (h2 && h2.length > 0)
    document.title = h2.item(h2.length - 1).innerText;
  else
    document.title = document.getElementsByName("author").item(0).attributes["content"].nodeValue;
}

function defTitre4() {
  var firstOrLast = document.getElementsByClassName("firstOrLast");
  if (firstOrLast && firstOrLast.length > 0)
    document.title = firstOrLast.length % 2 == 0 ? firstOrLast.item(0).innerText : firstOrLast.item(firstOrLast.length - 1).innerText;
  else
    document.title = document.getElementsByName("author").item(0).attributes["content"].nodeValue;
}

function inverseTexte() {
  var p = document.getElementsByTagName("p");
  if (p && p.length >= 2) {
    for (i = 0; i < p.length; i += 2) {
      var tmp = p.item(i).innerHTML;
      p.item(i).innerHTML = p.item(i + 1).innerHTML;
      p.item(i + 1).innerHTML = tmp;
    }
  }
}

function datemodif() {
  var date_modif = document.getElementById("date_modif");
  var author = document.getElementsByName("author");
  var date = new Date(document.lastModified);2
  date_modif.innerText = "Dernière modif le " + GetDay(date.getDay()) + " " + ('0' + date.getDate()).slice(-2) + " " + GetMonth(date.getMonth()) + " " + date.getFullYear() + " " + " par " + author.item(author.count).attributes["content"].nodeValue; + "."
}
function majNbJours() {
  var target = new Date(2018,6,19,0,0,0,0);
  var now = Date.now();

  var result =  Math.ceil((target.valueOf() - now)/ (1000 * 3600 * 24));

  var dateCount = document.getElementById("dateCount");
  dateCount.innerText = dateCount.innerText.replace("xxx", result);

  if(result <= 1){
    dateCount.innerText = dateCount.innerText.replace("jours", "jour");
  }
}

function majHorloge1(){
  var now = new Date(Date.now());
  document.getElementById("horloge1").innerText = now.getHours() + ":" + ('0' + now.getMinutes()).slice(-2) + ":" + ('0' +now.getSeconds()).slice(-2);
}

function majHorloge2(){
  var now = new Date(Date.now());
  document.getElementById("horloge2").innerText = now.getHours() + ":" + ('0' + now.getMinutes()).slice(-2) + ":" + ('0' +now.getSeconds()).slice(-2);
  window.setTimeout(majHorloge2,1000);
}

function majGrafH() {
  var grafHorloge = document.getElementById("grafHorloge");
  var now = new Date(Date.now());
  var string = now.getHours() + ":" + ('0' + now.getMinutes()).slice(-2) + ":" + ('0' +now.getSeconds()).slice(-2)
  grafHorloge.innerHTML = "";
  for(var i = 0; i < string.length; i++){
    if(string[i] == ":"){
      grafHorloge.innerHTML += ":";
    }
    else{
      grafHorloge.innerHTML += "<img src=\" images/" + string[i] + ".gif\" alt =\"" + string[i] + "\">";
    }
  }
}
function swapcolor(){
  var input = document.querySelector("input");
  if(input.value != "" && isNaN(input.value)){
    input.setAttribute("class","rouge");
  }else if(input.value == ""){
    input.setAttribute("class","blanc");
  }else{
    input.setAttribute("class","vert");
  }
}

function unroll(i){
  var menu = document.getElementById("menu");
  var lis = menu.children;

  //Initialisation
  for(var j=0; j<lis.length; j++){
    var listStyle = lis[j].getAttribute("style");
    if(listStyle == null){
      lis[j].setAttribute("style","list-style-image: url('images/plus.gif');");
    }
  }

  if(i!=-1){
    listStyle = lis[i].getAttribute("style");
    if(listStyle.valueOf() == "list-style-image: url('images/plus.gif');"){
      lis[i].setAttribute("style","list-style-image: url('images/minus.gif');");
      ul = lis[i].firstElementChild;
      ul.setAttribute("style","display: block;");
    }else{
      lis[i].setAttribute("style","list-style-image: url('images/plus.gif');");
      ul = lis[i].firstElementChild;
      ul.setAttribute("style","display: none;");
    }
  }
}

function find(){

  var mot = document.querySelectorAll("input")[1].value;
  var nbrecherche = document.getElementsByName("nbRecherche")[0].value;

  if(nbrecherche=='0'){
    var text = document.querySelector("body").innerText;
    text.replace(mot, "yeah");//"<spam class=\"rech\">"+mot+"</spam>");
    console.log("nice ");
    console.log(text);
    console.log(mot);
  }

  document.getElementsByName("nbRecherche")[0].setAttribute("value","1");
  nbrecherche = document.getElementsByName("nbRecherche")[0].value;

}
//on rajoute les bases

function GetMonth(month) {
  switch (month) {
    case 0:
      return "janvier"
      break;
    case 1:
      return "février"
      break;
    case 2:
      return "mars"
      break;
    case 3:
      return "avril"
      break;
    case 4:
      return "mai"
      break;
    case 5:
      return "juin"
      break;
    case 6:
      return "juillet"
      break;
    case 7:
      return "août"
      break;
    case 8:
      return "septembre"
      break;
    case 9:
      return "octobre"
      break;
    case 10:
      return "novembre"
      break;
    case 11:
      return "décembre"
      break;

  }
};

function GetDay(day) {
  switch (day) {
    case 0:
      return "dimanche";
      break;
    case 1:
      return "lundi";
      break;
    case 2:
      return "mardi";
      break;
    case 3:
      return "mercredi";
      break;
    case 4:
      return "jeudi";
      break;
    case 5:
      return "vendredi";
      break;
    case 6:
      return "samedi";
      break;
    default:
      return "";
  }
};


