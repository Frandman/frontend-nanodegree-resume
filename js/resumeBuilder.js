/* Bio objects */

var bio={
	"name" : "fran lopez",
    "role" : "Font end Developez",
    "contacts" : {
          "mobile": "666666666",
          "email": "frandevelopez@gmail.com" ,
          "github": "frandman",
          "twitter": "@franjlg",
          "blog": "www.franjlopez.es",
          "location": "Madrid"
      },
    "welcomeMessage": "Wellcome to my interactive resume web page Wellcome to my interactive resume web page Wellcome\
                       to my interactive resume web pageWellcome to my interactive resume web page",
    "skills": ["Front End", "Social Media", "Python", "Management"],
    "biopic": "images/fran.jpg",
    "display": "function taking no parameters"
};

var work={
	    "jobs": [
         {
         "employer": "Alcampo",
         "title": "Store manager" ,
         "location": "Zaragoza", 
         "dates": "2006-2009",
         "description": "Store manager en una de las empresas de distribución más grandes de España" 
            },
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
            "images": ["http://placehold.it/300x200","http://placehold.it/300x200"]
        	},
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "An awesome interactive resume that displays all relevant information about what i've",
            "images": ["http://placehold.it/300x200","http://placehold.it/300x200"]
            },
    	],
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
         "dates": "2009",
         "url": "www.us.es"
            },
        {
         "name": "Escuela Universitaria de Estudios Empresariales",
         "location": "Sevilla",
         "degree": "Bachelor",
         "majors": ["Bussines Administration"],
         "dates": "2006",
         "url": "www.us.es"
            },
        {
         "name": "Czech University of Life Sciences Prague",
         "location": "Prague",
         "degree": "Erasmus",
         "majors": ["Bussines Administration", "English"],
         "dates": "2006",
         "url": "http://www.czu.cz/en/"
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

/* Avoid hacking function */

function avoidHacking(some_string){

	return some_string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* Filling the content */


bio.display = function(){

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

work.display = function() {

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

projects.display = function(){

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

education.display = function() {

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

$("#biopic").addClass("img-responsive");



