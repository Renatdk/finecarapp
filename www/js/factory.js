angular.module('fineCarApp.factory',['lbServices'])
.factory('UserBid', function() {
  return {
      car : 'anonymous',
      number :  'anonymous'
  };
})
.factory('userBids', function() {
  return {
      bids : []
  };
})
.factory('UserCar', function() {
  return {
      cars : []
  };
})
.factory('washerLogin', function(Washers, $rootScope, WasherProfile) {
  return function(e,p,user){
    myApp.showIndicator();

    Washers.login({email: e, password: p},
      function(response){
        $rootScope.currentWasher = {
          id: response.user.id,
          tokenId: response.id,
          username:  response.user.username,
          email:  response.user.email,
          photo:  response.user.photo,
        };

        WasherProfile.find({filter: { where: {washerId: $rootScope.currentWasher.id}}}, function(profiles) { 
          $rootScope.profiles = profiles;
          console.log("profiles:", profiles);
        },function(err){
          console.log("err:",err);
        });
        
        if(user){
          mainView.router.load({pageName: 'choiceProfileType'});  
        }else{
          mainView.router.load({pageName: 'choice_profile'});  
        };
        
        localStorage.setItem("Interface", "Washer");
        console.log(response);
        myApp.hideIndicator();
      },

      function(response){
        if(!user){
          myApp.alert('Неверный Email или Пароль!');  
        };
        console.log(response);
        myApp.hideIndicator();
      });
  };  
})
.factory('getDastance', function() {
  return {
      distance: function(fa,la,fb,lb){
    
    // Перевод координаты в радианы
    var lat1 = fa*Math.PI/180;
    var lat2 = fb*Math.PI/180;
    var long1 = la*Math.PI/180;
    var long2 = lb*Math.PI/180;

    // косинусы и синусы широт и разницы долгот
    var cl1 = Math.cos(lat1);
    var cl2 = Math.cos(lat2);
    var sl1 = Math.sin(lat1);
    var sl2 = Math.sin(lat2);
    var delta = long2 - long1;
    var cdelta = Math.cos(delta);
    var sdelta = Math.sin(delta);

    // вычисление длины большого круга
    var y = Math.sqrt(Math.pow(cl2*sdelta,2)+Math.pow(cl1*sl2-sl1*cl2*cdelta,2));
    var x = sl1*sl2+cl1*cl2*cdelta;

    //
    var ad = Math.atan2(y, x);
    var earthRadius = 6372.795;//км
    var dist = (ad * earthRadius).toFixed(2);

    return dist;
  }
  };
})
 .factory('$cordovaGeolocation', ['$q', function ($q) {

    return {
      getCurrentPosition: function (options) {
        var q = $q.defer();

        navigator.geolocation.getCurrentPosition(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return q.promise;
      },

      watchPosition: function (options) {
        var q = $q.defer();

        var watchID = navigator.geolocation.watchPosition(function (result) {
          q.notify(result);
        }, function (err) {
          q.reject(err);
        }, options);

        q.promise.cancel = function () {
          navigator.geolocation.clearWatch(watchID);
        };

        q.promise.clearWatch = function (id) {
          navigator.geolocation.clearWatch(id || watchID);
        };

        q.promise.watchID = watchID;

        return q.promise;
      },

      clearWatch: function (watchID) {
        return navigator.geolocation.clearWatch(watchID);
      }
    };
  }])

.directive('checklistModel', ['$parse', '$compile', function($parse, $compile) {
  // contains
  function contains(arr, item, comparator) {
    if (angular.isArray(arr)) {
      for (var i = arr.length; i--;) {
        if (comparator(arr[i], item)) {
          return true;
        }
      }
    }
    return false;
  }

  // add
  function add(arr, item, comparator) {
    arr = angular.isArray(arr) ? arr : [];
      if(!contains(arr, item, comparator)) {
          arr.push(item);
      }
    return arr;
  }  

  // remove
  function remove(arr, item, comparator) {
    if (angular.isArray(arr)) {
      for (var i = arr.length; i--;) {
        if (comparator(arr[i], item)) {
          arr.splice(i, 1);
          break;
        }
      }
    }
    return arr;
  }

  // http://stackoverflow.com/a/19228302/1458162
  function postLinkFn(scope, elem, attrs) {
    // compile with `ng-model` pointing to `checked`
    $compile(elem)(scope);

    // getter / setter for original model
    var getter = $parse(attrs.checklistModel);
    var setter = getter.assign;
    var checklistChange = $parse(attrs.checklistChange);

    // value added to list
    var value = $parse(attrs.checklistValue)(scope.$parent);


  var comparator = angular.equals;

  if (attrs.hasOwnProperty('checklistComparator')){
    comparator = $parse(attrs.checklistComparator)(scope.$parent);
  }

    // watch UI checked change
    scope.$watch('checked', function(newValue, oldValue) {
      if (newValue === oldValue) { 
        return;
      } 
      var current = getter(scope.$parent);
      if (newValue === true) {
        setter(scope.$parent, add(current, value, comparator));
      } else {
        setter(scope.$parent, remove(current, value, comparator));
      }

      if (checklistChange) {
        checklistChange(scope);
      }
    });
    
    // declare one function to be used for both $watch functions
    function setChecked(newArr, oldArr) {
        scope.checked = contains(newArr, value, comparator);
    }

    // watch original model change
    // use the faster $watchCollection method if it's available
    if (angular.isFunction(scope.$parent.$watchCollection)) {
        scope.$parent.$watchCollection(attrs.checklistModel, setChecked);
    } else {
        scope.$parent.$watch(attrs.checklistModel, setChecked, true);
    }
  }

  return {
    restrict: 'A',
    priority: 1000,
    terminal: true,
    scope: true,
    compile: function(tElement, tAttrs) {
      if (tElement[0].tagName !== 'INPUT' || tAttrs.type !== 'checkbox') {
        throw 'checklist-model should be applied to `input[type="checkbox"]`.';
      }

      if (!tAttrs.checklistValue) {
        throw 'You should provide `checklist-value`.';
      }

      // exclude recursion
      tElement.removeAttr('checklist-model');
      
      // local scope var storing individual checkbox model
      tElement.attr('ng-model', 'checked');

      return postLinkFn;
    }
  };
}])


// .factory('socket', function(LoopBackAuth){
//     //Creating connection with server
//     var socket = io.connect('http://backfinecar-renatdk.c9.io');
 
//     //This part is only for login users for authenticated socket connection between client and server.
//     //If you are not using login page in you website then you should remove rest piece of code..
//     var id = LoopBackAuth.accessTokenId;
//     var userId = LoopBackAuth.currentUserId;
//     socket.on('connect', function(){
//         socket.emit('authentication', {id: id, userId: userId });
//         socket.on('authenticated', function() {
//             // use the socket as usual
//             console.log('User is authenticated');
//         });
//     });
//   return socket;
     
// })

// .factory('PubSub', function (socket) {
//     var container =  [];
//     return {
//         subscribe: function(options, callback){
//             if(options){
//                 var collectionName = options.collectionName;
//                 var modelId = options.modelId;
//                 var method = options.method;
//                 if(method === 'POST'){
//                     var name = '/' + collectionName + '/' + method;
//                     socket.on(name, callback);
//                 }
//                 else{
//                     var name = '/' + collectionName + '/' + modelId + '/' + method;
//                     socket.on(name, callback);
//                 }
//                 //Push the container..
//                 this.pushContainer(name);
//             }else{
//                 throw 'Error: Option must be an object';
//             }
//         }, //end subscribe
 
//         pushContainer : function(subscriptionName){
//             container.push(subscriptionName);
//         },
 
//         //Unsubscribe all containers..
//         unSubscribeAll: function(){
//             for(var i=0; i<container.length; i++){
//                 socket.removeAllListeners(container[i]);   
//             }
//             //Now reset the container..
//             container = [];
//         }
 
//     };
// });