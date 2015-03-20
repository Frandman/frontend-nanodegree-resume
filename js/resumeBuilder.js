
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

/* Bio Information */


var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* Contact information */

var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);
var formattedTwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

/* Bio Pic */

var formattedbioPic=HTMLbioPic.replace("%data%",bio.biopic);

    $("#header").append(formattedbioPic);

/* Skills */


if ( bio.skills.length > 0 ){
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){
        var formattedSkill=HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    } 
}

/* Work information */

work.display = function (){

    if(work.jobs.length > 0){

        for ( job in work.jobs ){

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job]["employer"]);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
            var formattedworkDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedworkLocation= HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
            var formattedworkDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description)
            $(".work-entry:last").append(formattedEmployer+formattedworkTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkLocation);
            $(".work-entry:last").append(formattedworkDescription);
        }
    }
}
work.display();

projects.display= function (){

    if(projects.projects.length > 0){

        for ( project in projects.projects ){

            $("#projects").append(HTMLprojectStart);

            var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project]["title"]);
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project]["dates"]);
            var formattedDescription= HTMLprojectDescription.replace("%data%",projects.projects[project]["description"]);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            for (image in projects.projects[project]["images"]){
                console.log(projects.projects[project]["images"][image]);
            var formattedImages= HTMLprojectImage.replace("%data%",projects.projects[project]["images"][image]);
            $(".project-entry:last").append(formattedImages);
            }
        }
    }
}
projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(){
    var name=bio.name.split(" ");
    name=name[0]+" "+name[1].toUpperCase();
    document.getElementById("name").innerHTML=name;
    console.log(name);
}

$("#mapDiv").append(googleMap);  
/*
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

if (work.jobs.length > 0 ){
    $("#header").append(HTMLskillsStart);
    var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
     var formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
     var formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
*/



