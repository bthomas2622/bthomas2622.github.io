
var data = "%data%";
var bio = {
    "name": "Ben Thomas",
    "role": "Network Design Engineer and Front End Meddler",
    "contacts": {
        "email": "bthomas2622@gmail.com",
        "mobile": "678-463-1402",
        "github": "bthomas2622",
        "location": "Atlanta, GA"
    },
    "bioPic": "mugshot.jpg",
    "welcomeMessage": "Welcome to my resume!",
    "skills": [
        "Microsoft Office",
        "VBA",
        "Visio",
        "MATLAB",
        "Java and Javascript",
        "HTML and CSS",
        "Adobe Photoshop/Premiere",
        "Audacity",
        "Six Sigma and Agile Methodology",
        "CREO Pro Engineer",
        "AutoCAD"
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, "Ben Thomas");
    var formattedRole = HTMLheaderRole.replace(data, "Network Design Engineer and Front End Web Meddler");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedBioPic = HTMLbioPic.replace(data, "mugshot.jpg");
    $("#header").append(formattedBioPic); 
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcome); 

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }   
    }
};


bio.display();

var work = {
    "jobs": [{
            "employer": "AT&T",
            "title": "Network Design Engineer",
            "location": "Lenox Park, GA",
            "dates": "June 2014 - Present",
            "description": "Interface across AT&T Labs and engineering teams to author process documentation ensuring network readiness in support of First Field Applications for emerging technologies and legacy equipment decommissioning"
        },
        {
            "employer": "Calphalon",
            "title": "Kitchen Electrics R&D Intern",
            "location": "Sandy Springs, GA",
            "dates": "Summer 2012, Summer 2013",
            "description": "Responsibilities included: thermal data acquisition, PID control term optimization, RTD placement, Pro Engineer 3D modeling, 80/20 aluminum test fixture design and assembly, benchmarking plan development, equipment testing and reporting"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Interactive Resume",
            "dates": "Oct 2015",
            "description": "Built online resume by writing JS script that combined personal information with HTML and CSS templates to generate resume. Required knowledge of basic JavaScript syntax including objects, loops, and funcitons in additon to JQUERY DOM manipulation",
            "images": [
            ]
        }
    ]
};

var education = {
    "schools": [{
            "name": "Georgia Tech",
            "dates": "2010-2014", //change to integer?
            "location": "Atlanta, GA",
            "degree": [
                "BSME"
            ],
            "major": "Mechanical Engineering",
            "url": "http://www.gatech.edu/"
        },
        {
            "name": "South Forsyth High School",
            "dates": "2006-2010", //change to integer?
            "location": "Cumming, GA",
            "degree": [
                "HS Diploma"
            ],
            "major": "N/A",
            "url": "TBD"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com/"
        }
    ]
};

education.display = function () {
    for (var school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        console.log(formattedSchoolMajor);
        if (formattedSchoolMajor.includes("Mechanical Engineering")){
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (course in education.onlineCourses){
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};


education.display();

work.display = function () {
    for (var job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle); //:last means you specifically want to append

        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates); 

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription); 
    }
};

work.display();

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;

//     logClicks(x,y);
// });

// function inName(name) {
//     name = bio.name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//     return name[0] + " " + name[1];
// };

// $('#main').append(internationalizeButton);


projects.display = function() {
    for (var index in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[index].title);
        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[index].images.length > 0) {
            for (image in projects.projects[index].images) {
                var formattedImage = HTMLprojectImage.replace(data, projects.projects[index].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);