myApp.service('PhrasesService', function($http) {
  var sv = this;


  sv.addToPhrasebook = function(newPhrases) {
    console.log('in service sending:', newPhrases);
    return $http({
      method: 'POST',
      url: '/phrasebook',
      data: newPhrases
    }).then(function(response) {
      console.log('back from addToPhrasebook:', response);
    }); // end $http
  }; // end addToPhrasebook

  sv.getPhrasebook = function() {
    console.log('in service, getPhrasebook');
    return $http({
      method: 'GET',
      url: '/phrasebook'
    }).then(function(response) {
      console.log('in service back from server with:', response);
      sv.data = response.data;
    }); // end $http
  }; // end getPhrasebook

  sv.getAllPhrases = function() {
    console.log('in service, getPhrasebook');
    return $http({
      method: 'GET',
      url: '/phrasebook/allPhrases'
    }).then(function(response) {
      console.log('in service back from server with:', response);
      sv.data = response.data;
    }); // end $http
  }; // end getPhrasebook

  sv.deletePhrases = function(id) {
    return $http({
      method: 'DELETE',
      url: '/phrasebook/' + id,
    }).then(function(response) {
      return response;
    }); // end $http
  }; // end deletePhrases

  sv.updatePhrases = function(newPhrases) {
    return $http({
      method: 'PUT',
      url: '/phrasebook/' + newPhrases._id,
      data: newPhrases
    }).then(function(response) {
      console.log('back from updatePhrases:', response);
    }); // end $http
  }; // end updatePhrases

  sv.addToFavorites = function(id) {
    console.log('in service sending:', id);
    return $http({
      method: 'PUT',
      url: '/phrasebook/favorite/' + id,
    }).then(function(response) {
      console.log('back from addToFavorites:', response);
    }); // end $http
  }; // end addToFavorites


  sv.getFavorites = function() {
    console.log('in service, getFavorites');
    return $http({
      method: 'GET',
      url: '/phrasebook/favorite/',
    }).then(function(response) {
      console.log('in service back from server with:', response);
      sv.data = response.data.favorites;
    }); // end $http
  }; // end getFavorites

  sv.deleteFavorites = function(id) {
    console.log('in service, deleteFavorites');
    return $http({
      method: 'PUT',
      url: '/phrasebook/favorite/remove/' + id,
    }).then(function(response) {
      console.log('back from deleteFavorites', response);
      return response;
    }); // end $http
  }; // end deleteFavorites

  sv.translateFavoritesEs = function(id) {
    console.log('in service, translateFavoritesEs');
    return $http({
      method: 'GET',
      url: '/phrasebook/translate/spanish/' + id,
    }).then(function(response) {
      console.log('back from translateFavoritesEs', response);
      return response;
    });
  }; // end translateFavoritesEs


  sv.translateFavoritesEn = function(id) {
    console.log('in service, translateFavoritesEn');
    return $http({
      method: 'GET',
      url: '/phrasebook/translate/english/' + id,
    }).then(function(response) {
      console.log('back from translateFavoritesEn', response);
      return response;
    });
  }; // end translateFavoritesEn


}); // end service
