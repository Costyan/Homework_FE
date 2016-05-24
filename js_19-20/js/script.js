$(function() {
/////////////////// Management of Carousel /////////////////////////////////////
  $('.carousel').jcarousel({});
  var i = 0;
  $('.carousel__jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      if(i <= 0) {
        i++;
        return '<a href="#' + page + '" class="active-carousel"></a>';
      } else {
        i++;
        return '<a href="#' + page + '"></a>';
      }
    }
  });

  $('.carousel__jcarousel-pagination a').click(function() {
    $('.carousel__jcarousel-pagination a').removeClass('active-carousel');
    $(this).addClass('active-carousel');
  });

  $('.service__link').hover(function() {
    var url = $(this).find('div:first-child').css('background-image');
    url = url.substr(0,(url.length-6));
    url += '-hover.png")';
    $(this).find('div:first-child').css('background-image', url);
  }, function() {
    var url1 = $(this).find('div:first-child').css('background-image');
    url1 = url1.substr(0,(url1.length-12));
    url1 += '.png")';
    $(this).find('div:first-child').css('background-image', url1);
  });

/////////////////// Work with LoDash ///////////////////////////////////////////
  $.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(data) {
    var skills = _.union(_.flattenDeep(_.map(data, 'skills'))).sort();

    tmp = _.map(data, 'friends');
    var numFriends = [];
    for (var i = 0; i < tmp.length; i++) {
      numFriends.push(tmp[i].length);
    }
    var names = _.map(data, 'name');
    var result = [];
    for(var i = 0; i < names.length; i++) {
      result.push({name: names[i], numF: numFriends[i]})
    }
    var namesByFriends = _.map(_.orderBy(result,['numF'],['desc']), 'name')

    var friends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name')).sort();

    console.log('Skills:', skills, 'Number of skills:', skills.length);
    console.log('Friends:', friends, 'Number of friends:', friends.length);
    console.log('Names sorted by number friends:', namesByFriends, 'Number of names sorted by number of friends:', namesByFriends.length);
  });
});
