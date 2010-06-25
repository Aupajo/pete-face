$().ready(function() {
  $("#twitter-messages").tweet({
    username: "Aupajo",
		count: 5,		
    join_text: "<a href='http://twitter.com/Aupajo'>Pete</a> wrote",
    avatar_size: 40,
    loading_text: "Loading tweets&hellip;"
	});
	
	$('#nav a').click(function() {
	  showSection($(this).attr('href'));
	  return false;
	});
	
	showSection($('#nav li:first-child a').attr('href'));
});

function showSection(section) {
  $('.section').hide();
  $('#nav a').removeClass('selected');
  $('#nav a[href=' + section + ']').addClass('selected');
  $(section).show();
}