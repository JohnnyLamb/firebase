var app = angular.module('scheduleApp',['firebase']);

app.controller('mainController', function($scope,$firebase){
  var ref = new Firebase("https://vivid-heat-7394.firebaseio.com/days");
  var fb = $firebase(ref);
  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope,'days');
  $scope.reset = function(){
    fb.$set({
      monday:{
        name:'Monday',
        slots:{
          0900:{
            time:'9:00am',
            booked:false
          },
          0110:{
            time:'11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      wednesday: {
        name: 'wednesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });
  };
});
