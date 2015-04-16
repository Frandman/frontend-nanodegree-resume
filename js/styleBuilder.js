

/* Loading jQuery*/
$('body').prepend('<script src"js/bootstrap.min.js"></script>');

/* Load Google Fonts*/
$('body').prepend('<link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" >');

/* Container*/
$('#main').addClass('container');

/* Role is important*/
$('#header span:first').replaceWith( '<h2 id="position">'+bio.role+'</h2>' );

/* Wrapping in rows */
$('.biopic, .welcome-message, #skillsH3, #skills').wrapAll('<div class="row"></div>');
$('#name, #position').wrapAll('<div class="row nameRole"><div class="col-xs-12 col-sm-6 col-sm-offset-6 text-right"></div></div>');

/* Adding row class*/

$('#projects, .project-entry, #workExperience  h2, .work-entry').addClass('row');
$('#topContacts').addClass('row');
$('#mapDiv, #mapDiv h2, map').addClass('row');
$('#letsConnect').addClass('row');
$('#education, .education-entry, #education  h2, #education h3, .education-entry').addClass('row');

/* Columns */
$('#topContacts li').addClass('col-xs-12 col-sm-4');
$('.welcome-message, #skillsH3, #skills').wrapAll('<div class="col-xs-12 col-sm-6"></div>')
$('.biopic').wrap('<div class="col-xs-12 col-sm-6"></div>');
$('.project-entry img').wrap('<div class="col-xs-12 col-sm-6"></div>');

/* Making all images responsive */
$('img').addClass('img-responsive');

/* Adding id's ir order to get rid of some borders*/
$('h2.row, h3.row').attr('id', 'no-border');

/* color classes dosn't make sense anymore, let's change it*/
$('span.white-text').addClass('gray-text').removeClass('white-text');
$('span.orange-text').addClass('blue-text').removeClass('orange-text');

/* I don´t need the <hr>*/
$('hr').remove();

 /* Adding links to contacts */
$('#topContacts li:nth-child(2) span:nth-child(2)').wrap('<a href="mailto:'+bio.contacts.email+'"></a>');
$('#topContacts li:nth-child(3) span:nth-child(2)').wrap('<a href="https://twitter.com/franjlg"></a>');
$('#topContacts li:nth-child(4) span:nth-child(2)').wrap('<a href="https://github.com/Frandman"></a>');
$('#topContacts li:nth-child(5) span:nth-child(2)').wrap('<a href="http://franjlopez.es/"></a>');
$('#topContacts li:nth-child(6) span:nth-child(2)').wrap('<a href="https://www.google.es/maps/place/Madrid/"></a>');








