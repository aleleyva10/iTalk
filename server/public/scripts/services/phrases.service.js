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

  sv.deletePhrases = function(id) {
    return $http({
      method: 'DELETE',
      url: '/phrasebook/' + id,
    }).then(function() {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function() {
        swal(
          'Deleted!',
          'Your phrase has been deleted.',
          'success'
        ).catch(swal.noop);
      });
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
      swal(
        'Good job!',
        'Phrase added to Favorites!',
        'success'
      );
    }); // end $http
  }; // end addToFavorites


  sv.getFavorites = function() {
    console.log('in service, getFavorites');
    return $http({
      method: 'GET',
      url: '/phrasebook/favorite/',
    }).then(function(response) {
      console.log('in service back from server with:', response);
      sv.data = response.data;
    }); // end $http
  }; // end getFavorites

  sv.deleteFavorites = function(id) {
    console.log('in service, deleteFavorites');
    return $http({
      method: 'PUT',
      url: '/phrasebook/favorite/remove/' + id,
    }).then(function(response) {
      console.log('back from deleteFavorites', response);
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false
      }).then(function() {
        swal(
          'Deleted!',
          'Your phrase has been deleted.',
          'success'
        );
      }, function(dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
              'Cancelled',
              'Your favorite phrase is safe :)',
              'error'
            )
            .catch(swal.noop);
        }
      });
    }); // end $http
  }; // end deleteFavorites


}); // end service
