

var myApp = new Framework7({
    animateNavBackIcon:true,

    template7Pages: true, //enable Template7 rendering for pages
    precompileTemplates: true

});

var user_SCL={}; //user choice list

// Add and init View
var $$ = Dom7;


// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});


//- One group, title, three buttons
$$('.ac-2').on('click', function () {
    var buttons1 = [
        {
            text: '14:30 30м',      
        }
    ];
    var buttons2 = [        
        {
            text: 'Создать',
            onClick: function () {
                mainView.router.loadPage('pages/washer/new_bid.html');
            }
        }
    ];
    var buttons3 = [
        {
            text: 'Отмена',
            color: 'red'
        }
    ];
    
    var groups = [buttons1, buttons2, buttons3];
    myApp.actions(groups);
});
 
//- Two groups
$$('.ac-3').on('click', function () {
    var buttons1 = [
        {
            text: '14:30 30м Mitsubishi Galand F123AAA',
            label: true
        }
    ];
    var buttons2 = [
        {
            text: 'Сеанс',
            label: true
        },
        {
            text: 'Запустить',
        },
        {
            text: 'Завершить',
        },
        {
            text: 'Переместить',
            onClick: function () {
                mainView.router.loadPage('pages/washer/bid_move.html');
            }
        },
        {
            text: 'Отказ',
        }
    ];
    var buttons3 = [
        {
            text: 'Отмена',
            color: 'red'
        }
    ];
    
    var groups = [buttons1, buttons2, buttons3];
    myApp.actions(groups);
});
 
//- Three groups
$$('.ac-4').on('click', function () {
    var buttons1 = [
        {
            text: '14:30 30м  BMW X5 A001FFF',
            label: true
        }
    ];
    var buttons2 = [
        {
            text: 'Переместить',
            onClick: function () {
                mainView.router.loadPage('pages/washer/bid_move.html');
            }
        },
        {
            text: 'Отказ',
        }
    ];
    var buttons3 = [
        {
            text: 'Отмена',
            color: 'red'
        }
    ];
    
    var groups = [buttons1, buttons2, buttons3];
    myApp.actions(groups);
});
 



// myApp.onPageInit('choice_service', function (page) {
//     myApp.showIndicator();
//     user_SCL=page.query;
//     console.log(page.query);
//     var homeTemplate = $$(page.container).html();
//     var compiledHomeTemplate = Template7.compile(homeTemplate);

//     $$.getJSON('json/user_package_of_services.json', function (json) {
//       var html=compiledHomeTemplate(json);      
//        $$(page.container).html(html);
//       myApp.hideIndicator();
//     }); 
// });   
// myApp.onPageInit('home', function (page) {
//     myApp.showIndicator();
//     console.log("home");
//     var homeTemplate = $$(page.container).html();
//     var compiledHomeTemplate = Template7.compile(homeTemplate);
//     $$.getJSON('json/user/home.json', function (json) {
//       var html=compiledHomeTemplate(json);      
//        $$(page.container).html(html);
//       myApp.hideIndicator();
//     }); 
// });   



// var sort_by="km";
// $$(document).on('pageBeforeInit', function (e) {
//     var page = e.detail.page;
    
//     if(page.name ==='home'){
//       myApp.showIndicator();
//       $$.getJSON('json/user/home.json', function (json) {
//         var html=Template7.templates.homeTemplate(json);  
//         console.log("html");
//         $$(page.container).find('.page-content').html(html);
//         myApp.hideIndicator();
//       });
//     }; 
    
//     if(page.name ==='choice_service'){
//       myApp.showIndicator();
//       $$.getJSON('json/user/choice_service.json', function (json) {
//         var html=Template7.templates.choiceServiceTemplate(json);  
//         $$(page.container).find('.page-content').html(html);
//         myApp.hideIndicator();
//         user_SCL=page.query;
//         console.log(user_SCL);
//       });
//     }; 
    

//     if (page.name === 'washer_choice') {
//           sort_by=page.query.sort_by;
//           if(page.query.services){
//             user_SCL.services=page.query.services;  
//           }
//           console.log(user_SCL);
//           myApp.showIndicator();
//           $$.getJSON('json/user/washer_choice.json', function (json) {
//             washers=_.sortBy(json.washers, sort_by);
//             var html=Template7.templates.washerChoiceTemplate({washers});      
//              $$(page.container).find('.page-content').html(html);
//              $$(page.container).find(".buttons-row a.active").removeClass('active');
//              $$(page.container).find(".buttons-row a#"+sort_by).addClass('active');
//             myApp.hideIndicator();
//           });
//     }
//     // Code for Services page
//     if (page.name === 'time_choice') {
//         myApp.showIndicator();
//         console.log(page.query);
//         user_SCL=$.extend(user_SCL, page.query);        
//         $$.getJSON('json/user/time_choice.json', function (json) {
//           var jsonUser= $.extend(json, user_SCL);
//           console.log(jsonUser);
//           var html=Template7.templates.timeChoiceTemplate(jsonUser);  
//           $$(page.container).find('.page-content').html(html);
//           myApp.hideIndicator();
//         });
//       };
// });

// create the module and name it scotchApp
var fineCarApp = angular.module('fineCarApp', ['fineCarApp.factory']);


// create the controller and inject Angular's $scope
fineCarApp.controller('homeController', function($scope, $http) {
    $scope.cars=[];
    $http.get('json/user/home.json').success(function(data){
      $scope.cars=data.cars;  
      $scope.bids=data.bids;  
    });
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.getEvent=function(obj){
     console.log(obj.target.attributes.name.value);
     console.log(obj.target.attributes.number.value);
    }


    myApp.onPageBeforeInit('home', function (page) {
     console.log(page.query);
    });   
});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceServiceController', function($scope, $http) {
    $scope.services=[];
    $http.get('json/user/choice_service.json').success(function(data){
      $scope.services=data.services;  
    });
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    myApp.onPageBeforeInit('choice_service', function (page) {
     console.log(page.query);
    });   
});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceWasherController', function($scope, $http, $cordovaGeolocation, getDastance) {

    $scope.sorts='km';
    $scope.sort_by =function (val){
      $scope.sorts=val;
    };
    $scope.getClass = function(path) {
      if ($scope.sorts == path) {
        return "active icon-right ion-ios-arrow-thin-down"
      } else {
        return ""
      }
    };

  myApp.onPageBeforeInit('washer_choice', function (page) {
         
    $scope.geoObject="Определение местоположения..."
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;
      $scope.geoObject="Координаты определены..."
      $http.get('http://geocode-maps.yandex.ru/1.x/?format=json&geocode='+$scope.long+','+$scope.lat).success(function(data){
        $scope.geoObject=data.response.GeoObjectCollection.featureMember[0].GeoObject.name;  
      });
      $http.get('json/user/washer_choice.json').then(function(data){
        $scope.washers=data.data.washers;
        angular.forEach($scope.washers, function(value, key) {
          value.km=getDastance.distance(value.lat,value.long,$scope.lat,$scope.long);
        }, $scope.washers);

      });
    
    }, function(err) {
      // error
    });

   console.log(page.query);
   console.log($scope.washers);
  });
});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceTimeController', function($scope, $http) {
    $scope.days=[];
    $http.get('json/user/time_choice.json').success(function(data){
      $scope.days=data.washer_time;  
    });
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    myApp.onPageBeforeInit('choice_service', function (page) {
     console.log(page.query);
    });   
});



fineCarApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

fineCarApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});