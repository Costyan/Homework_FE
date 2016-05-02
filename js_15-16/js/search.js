/////////////////// Поиск //////////////////////////////////////////////////////
'use strict';
var myElements = {
  divResult    : '',
  searchQuery  : '',
  searchBtn    : '',
  tmpl         : '',
}
var argsSearch = {
  url         : 'http://ajax.googleapis.com/ajax/services/search/',
  typeSearch  : 'web',
  ver         : '1.0',
  key         : 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg',
  rsz         : '8',
  q           : '',
  callBack    : 'getResult',
  context     : '',
  dataType    : 'jsonp',
  numQuery    : 1,
};


function getResult(jqueruObg, data) {
  myElements.divResult.append(myElements.tmpl(data.results));
};

function searching() {
  myElements.divResult.html('');
  argsSearch.q = myElements.searchQuery.val() || argsSearch.q;
  for (var i = 0; i < argsSearch.numQuery; i++) {
  $.ajax({
    url: argsSearch.url +
         argsSearch.typeSearch +
         '?v=' + argsSearch.ver +
         '&key=' + argsSearch.key +
         '&rsz=' + argsSearch.rsz +
         '&start=' + i*argsSearch.rsz +
         '&q=' + argsSearch.q +
         '&callback=' + argsSearch.callBack +
         '&context=' + argsSearch.context,
    dataType: argsSearch.dataType
  });
  }
};

$(function() {
  myElements.searchQuery = $('.search-query');
  myElements.divResult = $('.result-search');
  myElements.searchBtn = $('.search-btn');
  myElements.searchQuery.focus();
  myElements.tmpl = _.template($('#tmpl-search-result').html());


  myElements.searchQuery.keyup(function(e) {
    if(e.keyCode == 13) searching();
  });

  myElements.searchBtn.click(function() {searching()});
});
