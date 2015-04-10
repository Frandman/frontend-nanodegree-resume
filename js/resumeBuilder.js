
/* Variable formatting */

var formattedHeaderName = HTMLheaderName.replace("%data%", "Fran Lopez");
var formattedHeaderRole = HTMLheaderRole.replace("%data%","Front-End Developer");

var formattedcontactGeneric = HTMLcontactGeneric;
var formattedmobile = HTMLmobile;
var formattedemail = HTMLemail;
var formattedtwitter = HTMLtwitter;
var formattedgithub = HTMLgithub;
var formattedblog = HTMLblog;
var formattedlocation = HTMLlocation;

var formattedbioPic = HTMLbioPic;
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

/* Bio objects */


var bio={
	"name" : "Fran Lopez",
    "role" : "Font end Developez",
    "contacts" : {
          "mobile": "652849781",
          "email": "frandevelopez@gmail.com" ,
          "github": "frandman",
          "twitter": "@franjlg", 
          "location": "Madrid"
      },
    "welcomeMessage": "Wellcome to my interactive resume web page",
    "skills": ["Front End", "Social Media", "Python", "Management"],
    "biopic": "images/fry.jpg",
    "display": "function taking no parameters"
	};

var education={

	    "schools": [
	    {
         "name": "Facultad de ciencias Economicas y Empresariales",
         "location": "Sevilla",
         "degree": "Licenciatura",
         "majors": ["array", "of", "strings"],
         "dates": 2009,
         "url": "www.us.es"
     		},
     	{
         "name": "Escuela Universitaria de Estudios Empresariales",
         "location": "Sevilla",
         "degree": "Diplomado",
         "majors": ["array", "of", "strings"],
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

/* Filling the content */

$("#header").append(formattedHeaderName);
$("#header").append(formattedHeaderRole);
