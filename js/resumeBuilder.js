/* Bio objects */

var bio={
	"name" : "Fran lopez",
    "role" : "Font end Developez",
    "contacts" : {
          "mobile": "652849781",
          "email": "frandevelopez@gmail.com" ,
          "github": "frandman",
          "twitter": "@franjlg",
          "blog": "www.franjlopez.es",
          "location": "Madrid"
      },
    "welcomeMessage": "Wellcome to my interactive resume web page",
    "skills": ["Front End", "Social Media", "Python", "Management"],
    "biopic": "images/fry.jpg",
    "display": "function taking no parameters"
};

var education= {

	    "schools": [
	    {
         "name": "Facultad de ciencias Economicas y Empresariales",
         "location": "Sevilla",
         "degree": "Master",
         "majors": ["Bussines Administration"],
         "minors": ["Financial Accounting", "Audit"],
         "dates": 2009,
         "url": "www.us.es"
     		},
     	{
         "name": "Escuela Universitaria de Estudios Empresariales",
         "location": "Sevilla",
         "degree": "Bachelor",
         "majors": ["Bussines Administration"],
         "dates": 2006,
         "url": "www.us.es"
     		}
     	],

    "onlineCourses": [
         {
         	"title": "Introduction to Computer Science",
         	"school": "MIT",
         	"date": "2013",
         	"url": "www.edx.com"
         	},
         {
         	"title": "Front End Developer",
         	"school": "Udacity",
         	"date": "integer (date finished)",
         	"url": "www.udacity.com"
         	}
         ],
    "display": "function taking no parameters"

};

var work={
	    "jobs": [
	    {
         "employer": "Alcampo",
         "title": "Social Media Manager" ,
         "location": "Madrid", 
         "dates": "2006-2009",
         "description": "Social Media manager en una de las empresas de distribución más grandes de España" 
     		},
     	{
         "employer": "Gastromedia",
         "title": "Social Media Strategist" ,
         "location": "Madrid", 
         "dates": "2015",
         "description": "Social media Strategist en una pequeña agencia especializada en Gastronomía" 
     		}
     	],
    "display": "function taking no parameters"

};

var projects={
    	"projects": [
        {
        	"title": "Interactive Resume",
            "dates": "2015",
            "description": "An awesome interactive resume that displays all relevant information about what i've",
            "images": ["http://placekitten.com/350/350","http://placekitten.com/350/350"]
        	},
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "An awesome interactive resume that displays all relevant information about what i've",
            "images": ["http://placekitten.com/350/350","http://placekitten.com/350/350"]
            },
    	],
    	"display": "function taking no parameters"
};

/* Avoid hacking function */

function avoidHacking(some_string){

	return some_string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Variable formatting */

var formattedHeaderName = HTMLheaderName.replace("%data%", avoidHacking(bio.name));
var formattedHeaderRole = HTMLheaderRole.replace("%data%", avoidHacking(bio.role));

var formattedcontactGeneric = HTMLcontactGeneric;
var formattedmobile = HTMLmobile.replace("%data%", avoidHacking(bio.contacts.mobile));
var formattedemail = HTMLemail.replace("%data%", avoidHacking(bio.contacts.email));
var formattedtwitter = HTMLtwitter.replace("%data%", avoidHacking(bio.contacts.twitter));
var formattedgithub = HTMLgithub.replace("%data%", avoidHacking(bio.contacts.github));
var formattedblog = HTMLblog.replace("%data%", avoidHacking(bio.contacts.blog));
var formattedlocation = HTMLlocation.replace("%data%", avoidHacking(bio.contacts.location));

var formattedbioPic = HTMLbioPic.replace("%data%", avoidHacking(bio.biopic));
var formattedwelcomeMsg = HTMLwelcomeMsg;

var formattedskillsStart = HTMLskillsStart;
var formattedskills = HTMLskills;

var formattedworkStart = HTMLworkStart;
var formattedworkEmployer = HTMLworkEmployer;
var formattedworkTitle = HTMLworkTitle;
var formattedworkDates = HTMLworkDates;
var formattedworkLocation = HTMLworkLocation;
var formattedworkDescription = HTMLworkDescription;

var formattedprojectStart = HTMLprojectStart;
var formattedprojectTitle = HTMLprojectTitle;
var formattedprojectDates = HTMLprojectDates;
var formattedprojectDescription = HTMLprojectDescription;
var formattedprojectImage = HTMLprojectImage;

var formattedschoolStart = HTMLschoolStart;
var formattedschoolName = HTMLschoolName ;
var formattedschoolDegree = HTMLschoolDegree;
var formattedschoolDates = HTMLschoolDates;
var formattedschoolLocation = HTMLschoolLocation;
var formattedschoolMajor = HTMLschoolMajor;

var formattedonlineClasses = HTMLonlineClasses;
var formattedonlineTitle = HTMLonlineTitle;
var formattedonlineSchool = HTMLonlineSchool;
var formattedonlineDates = HTMLonlineDates;
var formattedonlineURL = HTMLonlineURL;

/* Filling the content */

$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);
$("#header").append(formattedbioPic);

	
$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedblog);
$("#topContacts").append(formattedlocation);

if(bio.skills){

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills){

		$("#header").append(HTMLskills.replace("%data%", avoidHacking(bio.skills[skill])));

	}
}

