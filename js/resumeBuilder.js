<<<<<<< HEAD

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



=======
/* Bio objects */

var bio = {

	"name": "fran lopez",
    "role": "Front end Developez",
    "contacts": 
        {
        "mobile": "666666666",
        "email": "frandevelopez@gmail.com" ,
        "github": "frandman",
        "twitter": "@franjlg",
        "blog": "www.franjlopez.es",
        "location": "Madrid"
            },
    "welcomeMessage": "Wellcome to my interactive resume. I'm looking for oportunities as Front-End Developer.\
                        If you want, you can see my projects on github, and if you like it, give me a call :D\
                        ",
    "skills": ["HTML", "CSS", "jQuery", "Python", "Github"],
    "biopic": "images/fran.jpg",
    "display": function() {

        if ( bio.name 
            && bio.role 
            && bio.biopic 
            && bio.welcomeMessage  
            && bio.contacts.email 
            && bio.contacts.mobile 
            && bio.contacts.twitter 
            && bio.contacts.github
            && bio.contacts.blog
            && bio.contacts.location
            && bio.skills ) {

            var formattedHeaderRole = HTMLheaderRole.replace("%data%", avoidHacking(bio.role));
            $("#header").prepend(formattedHeaderRole);
            var formattedHeaderName = HTMLheaderName.replace("%data%", avoidHacking(bio.name));
            $("#header").prepend(formattedHeaderName);
            var formattedbioPic = HTMLbioPic.replace("%data%", avoidHacking(bio.biopic));
            $("#header").append(formattedbioPic);
            var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", avoidHacking(bio.welcomeMessage));
            $("#header").append(formattedwelcomeMessage);
            var formattedmobile = HTMLmobile.replace("%data%", avoidHacking(bio.contacts.mobile));
            $("#topContacts").append(formattedmobile);
            var formattedemail = HTMLemail.replace("%data%", avoidHacking(bio.contacts.email));
            $("#topContacts").append(formattedemail);
            var formattedtwitter = HTMLtwitter.replace("%data%", avoidHacking(bio.contacts.twitter));
            $("#topContacts").append(formattedtwitter);
            var formattedgithub = HTMLgithub.replace("%data%", avoidHacking(bio.contacts.github));
            $("#topContacts").append(formattedgithub);
            var formattedblog = HTMLblog.replace("%data%", avoidHacking(bio.contacts.blog));
            $("#topContacts").append(formattedblog);
            var formattedlocation = HTMLlocation.replace("%data%", avoidHacking(bio.contacts.location));
            $("#topContacts").append(formattedlocation);
            $("#header").append(HTMLskillsStart);
            for (skill in bio.skills){
                $("#skills").append(HTMLskills.replace("%data%", avoidHacking(bio.skills[skill])));
            }
        }
    }
};

var work = {

    "jobs": [ 

        {
        "employer": "Alcampo",
        "title": "Store manager" ,
        "location": "Zaragoza", 
        "dates": "20010-2011",
        "description": "Store manager at one of the biggest retail companies of Spain" 
            },
        {
        "employer": "Alcampo",
        "title": "Account Manager" ,
        "location": "Zaragoza", 
        "dates": "2011-2012",
        "description": "Account manager for 8 Alcampo stores" 
            },
	    {
        "employer": "Alcampo",
        "title": "Social Media Manager" ,
        "location": "Madrid", 
        "dates": "2013-2015",
        "description": "Head of Social Media department" 
            },
     	{
        "employer": "Gastromedia",
        "title": "Social Media Strategist" ,
        "location": "Madrid", 
        "dates": 2015,
        "description": "I think, plan and build, social media strategies for the company clients." 
            }
        ],

    "display": function() {

        if (work.jobs) {

            for (job in work.jobs) {

                var formattedworkStart = HTMLworkStart;
                $("#workExperience").append(formattedworkStart);
                var formattedworkTitle = HTMLworkTitle.replace("%data%", avoidHacking(work.jobs[job].title));
                var formattedworkEmployer = HTMLworkEmployer.replace("%data%", avoidHacking(work.jobs[job].employer));
                var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedworkLocation = HTMLworkLocation.replace("%data%", avoidHacking(work.jobs[job].location));
                $(".work-entry:last").append(formattedworkLocation);
                var formattedworkDates = HTMLworkDates.replace("%data%", avoidHacking(work.jobs[job].dates));
                $(".work-entry:last").append(formattedworkDates);
                var formattedworkDescription = HTMLworkDescription.replace("%data%", avoidHacking(work.jobs[job].description))
                $(".work-entry:last").append(formattedworkDescription);   
            }
        }
    }
};

var projects = {

    "projects": [

        {
        "title": "Css grid framework",
        "dates": 2015,
        "description": "A simple, but effective, self made framework",
        "images": ["http://placehold.it/300x200","http://placehold.it/300x200"]
            },
        {
        "title": "Interactive Resume",
        "dates": 2015,
        "description": "An awesome interactive resume that displays all relevant information about what i've made",
        "images": ["http://placehold.it/300x200","http://placehold.it/300x200"]
            },
        ], 
    "display": function(){

        if (projects.projects){

            for (project in projects.projects) {

                $("#projects").append(HTMLprojectStart);
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", avoidHacking(projects.projects[project].title));
                $(".project-entry:last").append(formattedprojectTitle);
                var formattedprojectDates = HTMLprojectDates.replace("%data%", avoidHacking(projects.projects[project].dates));
                $(".project-entry:last").append(formattedprojectDates);
                var  formattedprojectDescription = HTMLprojectDescription.replace("%data%", avoidHacking(projects.projects[project].description));
                $(".project-entry:last").append(formattedprojectDescription);
                if (projects.projects[project].images.length > 0) {
                    for (image in projects.projects[project].images) {
                        var  formattedprojectImage = HTMLprojectImage.replace("%data%", avoidHacking(projects.projects[project].images[image]));
                        $(".project-entry:last").append(formattedprojectImage);
                    }
                }
            }
        }
    }
};

var education = {

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
            },
        {
        "name": "Czech University of Life Sciences Prague",
        "location": "Prague",
        "degree": "Erasmus",
        "majors": ["Bussines Administration", "English"],
        "dates": 2006,
        "url": "http://www.czu.cz/en/"
            }
        ],

    "onlineCourses": [

        {
        "title": "Introduction to Computer Science",
        "school": "MIT",
        "date": 2013,
        "url": "www.edx.com"
            },
        {
        "title": "Front End Developer",
        "school": "Udacity",
        "date": 2015,
        "url": "www.udacity.com"
            }
        ],

    "display": function() {

        if (education.schools.length > 0) {

            for ( school in education.schools) {

                $("#education").append(HTMLschoolStart);
                var formattedschoolName = HTMLschoolName.replace("%data%", avoidHacking(education.schools[school].name));
                var formattedschoolDegree = HTMLschoolDegree.replace("%data%", avoidHacking(education.schools[school].degree));
                var formattedNameDegree = formattedschoolName + formattedschoolDegree;
                $(".education-entry:last").append(formattedNameDegree);
                var formattedschoolDates= HTMLschoolDates.replace("%data%", avoidHacking(education.schools[school].dates));
                $(".education-entry:last").append(formattedschoolDates);
                var formattedschoolLocation = HTMLschoolLocation.replace("%data%", avoidHacking(education.schools[school].location));
                $(".education-entry:last").append(formattedschoolLocation);

                for ( major in education.schools[school].majors ){
                    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", avoidHacking(education.schools[school].majors[major]));
                    $(".education-entry:last").append(formattedschoolMajor);

                }     
            }
        }

        if ( education.onlineCourses.length > 0){

            $("#education").append(HTMLonlineClasses);

            for (course in education.onlineCourses) {

                $("#education").append(HTMLschoolStart);
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", avoidHacking(education.onlineCourses[course].title));
                var formattedonlineSchol = HTMLonlineSchool.replace("%data%", avoidHacking(education.onlineCourses[course].school));
                var formattedtitleschool = formattedonlineTitle+formattedonlineSchol
                $(".education-entry:last").append(formattedtitleschool);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", avoidHacking(education.onlineCourses[course].date));
                $(".education-entry:last").append(formattedonlineDates);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", avoidHacking(education.onlineCourses[course].url));
                $(".education-entry:last").append(formattedonlineURL);

            }
        }
    }
};

/* Avoid hacking function */

function avoidHacking(data){

	return data.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Filling the content */

bio.display();
work.display();
projects.display();
education.display();

//$("#main").prepend(internationalizeButton);

function inName() {

    var firstName = bio.name.split(" ")[0];
    var lastName = bio.name.split(" ")[1];
    return firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase() + " "+ lastName.toUpperCase();
}

$("#mapDiv").append(googleMap);

/* Display blocks */

      if(document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('topContacts').style.backgroundColor = '#000000'    ;
      }
      if(document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('work-entry').length === 0) {
        document.getElementById('workExperience').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('project-entry').length === 0) {
        document.getElementById('projects').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('education-entry').length === 0) {
        document.getElementById('education').style.backgroundColor = '#000000';
      }
      if(document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('letsConnect').style.backgroundColor = '#000000';
      }
      if(document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.backgroundColor = '#000000';
      }
>>>>>>> 10e64e9aa38f87a422007d2709fb2291bcc7c01b
