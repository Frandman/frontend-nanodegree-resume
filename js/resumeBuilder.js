

//Información de contacto//

//Objeto Bio//

var bio={
	"name": "Fran Lopez", 
	"role":"Front end Developez", 
	"picture": "images/fry.jpg",
	"contacs":{
		"twitter":"franjlg",
		"github":"frandman",
		"email":"frandevelopez@gmail.com",
		"location":"Madrid"
		},
	"skills": ["Front End", "Python", "Social Media Strategist", "Administration"]
	};

// Dot notation to add data to bio object//

bio.work={
	"position":"Social Media Strategist",
	"ciudad":"Madrid",
	"empresa":"Gastromedia",
	"antigëdad": 1
};


// Bracket notation to add data to bio object//

bio["education"]={
	"estudios":"Administracion empresas",
	"grado": "Licenciatura",
	"centro": "Universidad de Sevilla"
};

//Uso de helper.js para formatear los datos de la bio//

var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedTwitter=HTMLtwitter.replace("%data%", bio.twitter);
var formattedBiopic=HTMLbioPic.replace("%data%",bio.picture);
var formattedWorkTitle=HTMLworkTitle.replace("%data%",bio.work.position);

//Inyección de Html en la web, de los datos preformateados de la bio//

$("#header").prepend(formattedBiopic);
$("#header").append(formattedName);
$("#workExperience").append();
$("#header").append(formattedRole);
$("#letsConnect").append(formattedTwitter);





