
$('body').prepend('<script src"js/bootstrap.min.js"></script>');
$('#main').addClass('container');
$('#header span:first').replaceWith( '<h2 id="position">'+bio.role+'</h4>' );
$('#name, #position').wrapAll('<div class="row nameRole"><div class="col-xs-12 col-sm-6 col-sm-offset-6 text-right"></div></div>');
$('ul').addClass('list-inline');
$('hr').remove();
$('#topContacts').addClass('row');
$('#topContacts li').addClass('col-xs-12 col-sm-4');
$('img').addClass('img-responsive');
$('.biopic, .welcome-message, #skillsH3, #skills').wrapAll('<div class="row"></div>');
$('.biopic').addClass('col-xs-12 col-sm-6');
$('#projects, .project-entry, #workExperience  h2, .work-entry').addClass('row');
$('.project-entry img').wrap('<div class="col-xs-12 col-sm-6"></div>');
$('#education, .education-entry, #education  h2, #education h3, .education-entry').addClass('row');
$('#mapDiv, #mapDiv h2, map').addClass('row');
$('#letsConnect').addClass('row');




