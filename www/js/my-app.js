

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
fineCarApp.controller('homeController', function($scope, $http, UserBid, UserBids, UserCar) {
    $scope.cars=[];
    $http.get('json/user/home.json').success(function(data){
      UserCar.cars=data.cars;  
      $scope.bids=data.bids;  
      $scope.cars=UserCar.cars;  
    });
      
    $scope.cars=UserCar.cars;  
    
    $scope.getParams=function(obj){
      UserBid.name=obj.target.attributes.name.value;
      UserBid.number=obj.target.attributes.number.value;
      console.log(UserBid);
    };

    $scope.UserBids=UserBids;
});

fineCarApp.controller('addAutoController', function($scope, UserCar) {

    $scope.addCartData={};
    $scope.addCartData.car_type="passenger";
    
    $scope.doAddCar= function(){
      var car={};
      car.car_name=$scope.addCartData.mark+" "+$scope.addCartData.model;
      car.car_number=$scope.addCartData.number;
      UserCar.cars.push(car);
      console.log(UserCar);
      mainView.router.back();
    }

});



// create the controller and inject Angular's $scope
fineCarApp.controller('choiceServiceController', function($scope, $http, UserBid) {
    $scope.services=[];
    $http.get('json/user/choice_service.json').success(function(data){
      $scope.services=data.services;  
    });

    $scope.getParams=function(obj){
      UserBid.service=obj.service_description;
      console.log(UserBid);
    };

});



// create the controller and inject Angular's $scope
fineCarApp.controller('addServiceController', function($scope, $http) {
    $scope.services=[];
    $http.get('json/user/services.json').success(function(data){
      $scope.services=data.services;  
    });
 
  $scope.order = {
     services: []
  };
    $scope.serviceSum= function(index){
      $scope.new_price=0;
      $scope.new_time=0;
      var i=0;
      if($scope.services[index].isChecked==true){
        var i=$scope.order.services.indexOf($scope.services[index]);
        $scope.order.services.splice(i,1);
        $scope.services[index].isChecked=false;
      }else{
        $scope.services[index].index=index;
        $scope.order.services.push($scope.services[index]);
        $scope.services[index].isChecked=true;
      };

      angular.forEach($scope.order.services, function(value, key) {
        $scope.new_price +=parseFloat(value.price);
        $scope.new_time +=parseFloat(value.time);  
        $scope.title_sum +=parseFloat(value.name);  
      });


      console.log( $scope.order.services);
    };


});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceWasherController', function($scope, $http, $cordovaGeolocation, getDastance, UserBid) {

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
   $scope.geoObject="Определение местоположения..."

  myApp.onPageBeforeInit('washer_choice', function (page) {
         
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.lat  = position.coords.latitude; UserBid.mlat=position.coords.latitude;
      $scope.long = position.coords.longitude; UserBid.mlong=position.coords.longitude;
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
  });

  $scope.getParams=function(obj){
      UserBid.washer=obj.name;
      UserBid.address=obj.address;
      UserBid.price=obj.price;
      UserBid.km=obj.km;
      UserBid.wlat=obj.lat;
      UserBid.wlong=obj.long;
      console.log(UserBid);
    }; 

});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceTimeController', function($scope, $http, UserBid) {
    $scope.days=[];
    $http.get('json/user/time_choice.json').success(function(data){
      $scope.days=data.washer_time;  
    });
    $scope.UserBid=UserBid;

  $scope.getParams=function(day,time){
      UserBid.day=day;
      UserBid.time=time;
      console.log(UserBid);
    }; 
  
});

// create the controller and inject Angular's $scope
fineCarApp.controller('sendBidController', function($scope, UserBid, UserBids) {
  $scope.UserBid=UserBid;
  
  $scope.showMap=function(){
    $scope.img="http://static-maps.yandex.ru/1.x/?l=map&size=250,300&pt="+UserBid.mlong+","+UserBid.mlat+",pm2am~"+UserBid.wlong+","+UserBid.wlat+",pm2bm";
  };


  $scope.pushBid=function(){
    var x={};
    x.name=$scope.UserBid.name;
    x.day=$scope.UserBid.day;
    x.time=$scope.UserBid.time;
    x.address=$scope.UserBid.address;
    x.km=$scope.UserBid.km;
    x.number=$scope.UserBid.number;
    x.price=$scope.UserBid.price;
    x.service=$scope.UserBid.service;
    x.time=$scope.UserBid.time;
    x.washer=$scope.UserBid.washer;
    UserBids.bids.push(x);
    console.log(UserBid);
    console.log(UserBids);
  }
});
