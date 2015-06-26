

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
var fineCarApp = angular.module('fineCarApp', ['fineCarApp.factory','lbServices']);

fineCarApp.config(function(LoopBackResourceProvider) {
 
    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
 
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('https://backfinecar-renatdk.c9.io/api');
  });


fineCarApp.controller('userRegistrationController', function($scope, FUser,$rootScope) {
  $scope.registerData={};

  $scope.registration=function(){
    FUser.create($scope.registerData,
      function(response){
        $scope.userLogin({email: $scope.loginData.email, password: $scope.loginData.password});
        console.log(response);
        mainView.router.load({pageName: 'home'});
      },
      function(response){
        myApp.alert(response.data.error.message);
        console.log("response:",response);        
      }   
    );
  };

});


fineCarApp.controller('indexController', function($scope, FUser, $rootScope, Cars) {

  $scope.loginData={};

  $scope.userLogin=function(){
    myApp.showIndicator();
    FUser.login({email: $scope.loginData.email, password: $scope.loginData.password},
      function(response){
        $rootScope.currentUser = {
          id: response.user.id,
          tokenId: response.id,
          username:  response.user.username,
          email:  response.user.email,
        };
        Cars.find({filter: { where: {driverId: $rootScope.currentUser.id}}}, function(cars) { 
          $rootScope.userCars = cars;
          console.log("cars:",cars);
        },function(err){
          console.log("err:",err);
        });


        console.log($rootScope.currentUser);
        console.log(response);
        mainView.router.load({pageName: 'home'});
        myApp.hideIndicator();
      },
      function(response){
        myApp.alert('Неверное Email или Пароль!');
        console.log(response);
        myApp.hideIndicator();
      });
  };

});



// create the controller and inject Angular's $scope
fineCarApp.controller('homeController', function($scope, $http, UserBid, UserBids, UserCar, Cars) {
    // $scope.cars=[];
    //  myApp.showPreloader('Загрузка данных...');
    //  $http.get('https://backfinecar-renatdk.c9.io/api/Cars').success(function(data){
    //     UserCar.cars=data;  
    //     $scope.bids=data.bids;  
    //     $scope.cars=UserCar.cars;  
    //     myApp.hidePreloader();
    //   });
      
    // $scope.cars=UserCar.cars;  
    
    $scope.getParams=function(obj){
      UserBid.name=obj.car_name;
      UserBid.number=obj.car_number;
      console.log(UserBid);
    };

    $scope.UserBids=UserBids;

    $scope.getBid=function(index){
      UserBid.address=UserBids.bids[index].address;
      UserBid.day=UserBids.bids[index].day;
      UserBid.km=UserBids.bids[index].km;
      UserBid.name=UserBids.bids[index].name;
      UserBid.number=UserBids.bids[index].number;
      UserBid.price=UserBids.bids[index].price;
      UserBid.service=UserBids.bids[index].service;
      UserBid.time=UserBids.bids[index].time;
      UserBid.washer=UserBids.bids[index].washer;
    };

    $scope.deleteCar = function(car){
      Cars.deleteById({ id: car.id })
        .$promise
        .then(function() { console.log('deleted'); });
      console.log(car);
    }
});

// create the controller and inject Angular's $scope
fineCarApp.controller('bidController', function($scope, $http, UserBid, UserBids) {
    
    $scope.UserBid=UserBid;
    
    $scope.showMap=function(){
      $scope.img="http://static-maps.yandex.ru/1.x/?l=map&size=250,300&pt="+UserBid.mlong+","+UserBid.mlat+",pm2am~"+UserBid.wlong+","+UserBid.wlat+",pm2bm";
    };

    $scope.bidFailure= function (){
      var i= UserBids.bids.indexOf(UserBid);
      UserBids.bids.splice(i);
    };

    $scope.days=[];
    $http.get('json/user/time_choice.json').success(function(data){
      $scope.days=data.washer_time;  
    });

    $scope.getParams=function(day,time){
      UserBid.day=day;
      UserBid.time=time;
      console.log(UserBid);
    }; 
});

fineCarApp.controller('addAutoController', function($scope, UserCar, Cars, $rootScope) {

    $scope.addCartData={};
    $scope.addCartData.car_type="passenger";
    
    $scope.doAddCar= function(){
      var car={};
      car.car_name=$scope.addCartData.mark+" "+$scope.addCartData.model;
      car.car_number=$scope.addCartData.number;
      $scope.new_car = Cars.create(car);
      $rootScope.userCars.push($scope.new_car);
      console.log($scope.new_car);
      mainView.router.back();
    }



});



// create the controller and inject Angular's $scope
fineCarApp.controller('choiceServiceController', function($scope, $http, UserBid) {
    $scope.userServices=[];
    $http.get('json/user/choice_service.json').success(function(data){
      $scope.userServices=data.services;  
    });

    $scope.getParams=function(obj){
      UserBid.service=obj.service_description;
      console.log(UserBid);
    };

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
      $scope.title_sum="";
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
        $scope.title_sum +=value.name+"+";  
      });


      console.log( $scope.order.services);
    };

    $scope.addService= function(index){
      if(!$scope.newServiceName){$scope.newServiceName="Mega+"};
      var newService={};
      newService.service_name=$scope.newServiceName;
      newService.service_description=$scope.title_sum;
      newService.service_time=$scope.new_time+"минут";
      newService.service_price=$scope.new_price;
      $scope.userServices.push(newService);
    };


});



// create the controller and inject Angular's $scope
fineCarApp.controller('addServiceController', function($scope, $http) {
    

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
    x.mlat=$scope.UserBid.mlat;
    x.mlong=$scope.UserBid.mlong;
    x.wlat=$scope.UserBid.wlat;
    x.wlong=$scope.UserBid.wlong;
    UserBids.bids.push(x);
    console.log(UserBid);
    console.log(UserBids);
  }
});


fineCarApp.controller('washerHomeController', function($scope, $http ) {
  
   function getDecimal(num) {
    var str = "" + num;
    var zeroPos = str.indexOf(".");
    if (zeroPos == -1) return 0;
    str = str.slice(zeroPos);
    return +str;
  };
  
  $scope.minuteToHour = function(minutes){
    var hour=0;
    var minute=0;
    hour=Math.floor(minutes/60);
    minute=parseFloat(getDecimal(minutes/60))*60;
    return{
      hour:hour,
      minute:minute
    }
  };

  $scope.minuteAddToTime = function(minutes,time_h,time_m){
    var hour=0;
    var minute=0;
    minutes=parseInt(minutes)+parseInt(time_m);
    hour=Math.floor(minutes/60)+parseInt(time_h);
    minute=Math.round(parseFloat(getDecimal(minutes/60))*60);
    if (minute<10){minute="0"+minute};
    if (hour<10){hour="0"+hour};
    return{
      hour:hour,
      minute:minute
    }
  }

  $scope.boxes=[];
  
  $http.get('json/user/bids.json').success(function(data){
    $scope.boxes=data;  
  });
//- One group, title, three buttons

  $scope.deleteItem =function(id){
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
        if (parseInt(val.id) == parseInt(id)){
          
          var item={};
          item.id=val.id;
          item.status="clean";
          item.duration=""+val.duration;
          item.start_time_h=val.start_time_h;
          item.start_time_m=val.start_time_m;
          console.log(val);
          value.splice(k,1); //Удаляем зявку из списка
          value.splice(k,0,item); //Добавляем item в список
          console.log($scope.boxes);

          if(value[k+1] && value[k+1].status=="clean"){
            item.duration=parseInt(value[k+1].duration)+parseInt(item.duration);
            value.splice(k+1, 1);
          };

          if(value[k-1] && value[k-1].status=="clean"){
            item.duration=parseInt(value[k-1].duration)+parseInt(item.duration);
            item.start_time_h=value[k-1].start_time_h;
            item.start_time_m=value[k-1].start_time_m;
            value.splice(k-1,1);
          }
        };
      });
    });
  mainView.router.refreshPage() 
    $$('#key').html(id);
  };

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
    $scope.title_sum="";
    $scope.newOrderData.rangeData=0;
    $scope.newOrderData.setTimeH=$scope.newOrderData.startTimeH;
    $scope.newOrderData.setTimeM=$scope.newOrderData.startTimeM;   

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
      $scope.title_sum +=value.name+"+";  
    });
  };

  $scope.rangeChange = function(){
    var rangeDataAdd=$scope.minuteAddToTime($scope.newOrderData.rangeData,$scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM);
    $scope.newOrderData.setTimeH=rangeDataAdd.hour;
    $scope.newOrderData.setTimeM=rangeDataAdd.minute;
  }; 

  // Open the login modal
  $scope.newOrder = function(id) {
    $scope.newOrderData={};
    $scope.order = {
      services: []
    };
    $scope.newOrderData.rangeData=0;    
    $scope.newOrderData.id=id;
    $scope.order_price=0;
    $scope.order_time=0;
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
        if (parseInt(val.id) == parseInt(id)){ 
          console.log(val);
          $scope.newOrderData.maxDuration=val.duration;
          $scope.newOrderData.maxDinamicDuration=val.duration;
          $scope.newOrderData.startTimeH=val.start_time_h;
          $scope.newOrderData.startTimeM=val.start_time_m;
          var beginTime=$scope.minuteAddToTime(val.duration,val.start_time_h,val.start_time_m);
          $scope.newOrderData.endTimeH=beginTime.hour;
          $scope.newOrderData.endTimeM=beginTime.minute;
          $scope.newOrderData.setTimeH=val.start_time_h;
          $scope.newOrderData.setTimeM=val.start_time_m;
        }
      });
    });   
    mainView.router.reloadPage({pageName: 'washer_new_bid'}); 
  };

  $scope.bidMove = function(id){
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
        if (parseInt(val.id) == parseInt(id)){ 
          $scope.moveItem=value[k];
          console.log($scope.moveItem);
        };
      });
    });
    mainView.router.loadPage({pageName: 'bid_move'});
  };

 $scope.boxItemClick = function(status,id) {
   console.log(id);

   var buttons1 = [
        {
            text: 'Создать',
            onClick: function () {
                $scope.newOrder(id);
            }
        }
    ];
    var buttons2 = [
        {
            text: 'Удалить',
            onClick: function () {
                $scope.deleteItem(id);
            }
        },
        {
            text: 'Переместить',
            onClick: function () {
               $scope.bidMove(id);
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

    var buttons4 = [
        {
            text: 'Удалить',
            onClick: function () {
                $scope.deleteItem(id);
            }
        }
    ];
    
    if(status=="queue"){
      var groups = [buttons2, buttons3];
      myApp.actions( groups);
    };
    if(status=="canceled"){
      var groups = [buttons1, buttons4, buttons3];
      myApp.actions(groups);
    };
    if(status=="clean"){
      var groups = [buttons1, buttons3];
      myApp.actions(groups);
    };
 };

})