

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
    myApp.showIndicator();
    FUser.create($scope.registerData,
      function(response){
        $scope.userLogin( $scope.registerData.email, $scope.registerData.password);
        console.log(response);
      },
      function(response){
        myApp.alert(response.data.error.message);
        console.log("response:",response);        
        myApp.hideIndicator();
      }   
    );
  };

});


fineCarApp.controller('indexController', function($scope, FUser, $rootScope, Cars, washerLogin) {
  
  $scope.loginData={};
  $scope.loginData.email="renatd.k@gmail.com";
  $scope.loginData.password="123456";

  $scope.Login=function(){
    $rootScope.userLogin($scope.loginData.email,$scope.loginData.password);
  };

  $scope.wLogin=function(){
    washerLogin($scope.loginData.email,$scope.loginData.password);
  };
  
  $rootScope.userLogin=function(e,p){
    myApp.showIndicator();

    FUser.login({email: e, password: p},
      function(response){
        $rootScope.currentUser = {
          id: response.user.id,
          tokenId: response.id,
          username:  response.user.username,
          email:  response.user.email,
          city:  response.user.city,
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
        myApp.alert('Неверный Email или Пароль!');
        console.log(response);
        myApp.hideIndicator();
      });
  };

});



// create the controller and inject Angular's $scope
fineCarApp.controller('homeController', function($scope, $http, $rootScope, UserBid, UserBids, UserCar, Cars, ComplexServices) {
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
      UserBid.body_type=obj.body_type;
      console.log(UserBid);
      myApp.showIndicator();
      ComplexServices.find({filter: { where: {driverId: $rootScope.currentUser.id}}}).$promise.then(function(response){
        $rootScope.userServices=response;
        myApp.hideIndicator();
      });
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
    $scope.addCartData.body_type="passenger";
    
    $scope.doAddCar= function(){
      var car={};
      car.car_name=$scope.addCartData.mark+" "+$scope.addCartData.model;
      car.car_number=$scope.addCartData.number;
      car.body_type=$scope.addCartData.body_type;
      Cars.create(car, function(cars) { 
          $rootScope.userCars.push(car);
          console.log("cars:",cars);
        },function(err){
          console.log("err:",err);
          mainView.router.loadPage({pageName: 'index'});
        });
      console.log(car);
      mainView.router.back();
    }
});



// create the controller and inject Angular's $scope
fineCarApp.controller('choiceServiceController', function($scope,$rootScope, $http, UserBid, Services, ComplexServices) {
    
    // $http.get('json/user/choice_service.json').success(function(data){
    //   $scope.userServices=data.services;  
    // });

    $scope.getParams=function(obj){
      UserBid.services=obj.serviceIds;
      $rootScope.showWashers();
      console.log(UserBid);
    };

    Services.find().$promise.then(function(response){
      console.log(response);
      $scope.services=response;
    });
    // $http.get('json/user/services.json').success(function(data){
    //   $scope.services=data.services;  
    // });
 
    $scope.order = {
       services: []
    };
    $scope.serviceSum= function(index){
      $scope.new_price=0;
      $scope.new_time=0;
      $scope.title_sum="";
      $scope.serviceIds=[];
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
        $scope.serviceIds.push(value.id);
      });


      console.log( $scope.order.services);
    };

    $scope.addService= function(index){
      if(!$scope.newServiceName){$scope.newServiceName="Mega+"};
      var newService={};
      newService.name=$scope.newServiceName;
      newService.description=$scope.title_sum;
      newService.time=$scope.new_time;
      newService.price=$scope.new_price;
      newService.serviceIds=$scope.serviceIds;

      myApp.showIndicator();
      ComplexServices.create(newService).$promise.then(function(response){
        $scope.userServices.push(newService);
        console.log("response:", response);
        myApp.hideIndicator();
      },function(err){
        console.log(err);  
        myApp.hideIndicator();
      });
    };

    $scope.deleteUserService = function(service){
      ComplexServices.deleteById({ id: service.id })
        .$promise
        .then(function() { console.log('deleted'); });
    };


});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceWasherController', function($scope, $rootScope, $http, $cordovaGeolocation, getDastance, UserBid, WasherProfile, WasherServices) {

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
 $scope.geoObject="Определение местоположения...";

  $rootScope.showWashers = function(){
    
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
        
        $scope.washers=[];
        WasherProfile.find({filter: { where: {City: $rootScope.currentUser.city}}}, function(WasherProfiles) { 

          angular.forEach(WasherProfiles, function(value, key) {
            value.services=[];
            value.km=getDastance.distance(value.coordinates.lat,value.coordinates.lng,$scope.lat,$scope.long);

            WasherServices.find({filter: { where: {wProfileId: value.id}}}, function(wServices) { 
              var price = 0;
              var time = 0;
              var names = "";
              var count = 0;
              angular.forEach(UserBid.services, function(val, k) {
                angular.forEach(wServices, function(wVal, wK) {
                  if(val==wVal.serviceId){
                    value.services.push(wVal);

                    if(UserBid.body_type=="passenger"){price += wVal.price1};
                    if(UserBid.body_type=="pikup"){price += wVal.price2};
                    if(UserBid.body_type=="miniven"){price += wVal.price3};
                    
                    time += wVal.duration;
                    names += " "+wVal.name;
                    count +=1;
                  };
                });
                value.price=price;
                value.time=time;
                value.names=names;
                value.count=count;
              });
              if(price>0){
                $scope.washers.push(value);
              };
              console.log("wServices:", wServices);
            },function(err){
              console.log("err:",err);
            });


          });



          console.log("$scope.washers:",$scope.washers);

        },function(err){
          console.log("err:",err);
        });

      // $http.get('json/user/washer_choice.json').then(function(data){
      //   $scope.washers=data.data.washers;
      //   angular.forEach($scope.washers, function(value, key) {
      //     value.km=getDastance.distance(value.lat,value.long,$scope.lat,$scope.long);
      //   }, $scope.washers);
      // });
    
    }, function(err) {
      // error
    });
  };

  $scope.getParams=function(obj){
      UserBid.washer=obj;
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
    $scope.img="http://static-maps.yandex.ru/1.x/?l=map&size=250,300&pt="+UserBid.mlong+","+UserBid.mlat+",pm2am~"+UserBid.washer.coordinates.lng+","+UserBid.washer.coordinates.lat+",pm2bm";
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

fineCarApp.controller('washerRegistrationController', function($scope, $http, Washers, $rootScope, washerLogin, $cordovaGeolocation, WasherProfile) {
  
  $scope.registerData={};

  $scope.registration=function(){
    myApp.showIndicator();
    Washers.create($scope.registerData,
      function(response){
        washerLogin( $scope.registerData.email, $scope.registerData.password);
        console.log(response);
      },
      function(response){
        myApp.alert(response.data.error.message);
        console.log("response:",response);        
        myApp.hideIndicator();
      }   
    );
  };

  $scope.getPhoto = function(){
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
        $scope.registerData.photo=imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

  };

  $scope.newProfile={};

  $scope.addWasherProfile = function(){
    $scope.newProfile.openH="00";
    $scope.newProfile.closeH="24";

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;
      $http.get('http://geocode-maps.yandex.ru/1.x/?format=json&geocode='+$scope.long+','+$scope.lat).success(function(data){
        $scope.newProfile.City=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName;  
        $scope.newProfile.Street=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.ThoroughfareName;  
      });
    }, function(err) {
      // error
    });
  };



  $scope.showMap = function(){

    var map;

    DG.then(function () {
        map = DG.map('mapwasher', {
            center: [$scope.lat, $scope.long],
            zoom: 16,
        });
        
        marker=DG.marker([$scope.lat, $scope.long],{
          draggable: true
        }).addTo(map);

        marker.on('drag', function(e) {
          var lat = e.target._latlng.lat,
              lng = e.target._latlng.lng;
          
          $$("input#lat").val(lat);
          $$("input#long").val(lng);
          
          console.log(e.target._latlng.lat,e.target._latlng.lng);
          console.log($scope.newProfile.lat,$scope.newProfile.long);
        }); 
    });
      
  };

  $scope.setCoord = function(){
    $scope.newProfile.coordinates=$$("input#lat").val()+","+$$("input#long").val();
    console.log("coor:",$scope.newProfile.coordinates);
    $http.get('http://geocode-maps.yandex.ru/1.x/?format=json&geocode='+$$("input#long").val()+','+$$("input#lat").val()).success(function(data){
        $scope.newProfile.City=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName;  
        $scope.newProfile.Street=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.ThoroughfareName;  
    
      });
    
    mainView.router.back();
  };

  $scope.addProfile = function (){
    console.log($scope.newProfile);
    WasherProfile.create($scope.newProfile, function(response) { 
        $scope.profiles.push($scope.newProfile);
        console.log("response:",response);
      },function(err){
        console.log("err:",err);
      });
    mainView.router.back();
  };

  $scope.setCurrentWProfile = function(profile){
    $rootScope.currentWProfile=profile;

    var header = {};
    
    var open=parseInt($rootScope.currentWProfile.openH);
    var close=parseInt($rootScope.currentWProfile.closeH);
    var boxCount=$rootScope.currentWProfile.boxCount;
    var boxTable={};
    
    var today=moment();
    
    $rootScope.currentWProfile.currentDate=today.format("YYYY-MM-DD");
    
    for(var t=open-1; t<=close; t++){
      if(t<10){
        t="0"+t;
      }
      boxTable['t'+t]={};
      
      for(var b=0; b<=boxCount; b++){
        boxTable['t'+t]['b'+b]={};

        if(b==0){
          boxTable['t'+t]['b'+b].class='border_right';
        };
        
        if(b==0 && t>=open){
          boxTable['t'+t]['b'+b].time=t+":00";
        };

        if(b>0 && t<open){
          boxTable['t'+t]['b'+b].boxHeader='Бокс ' + b;
        };
        
        console.log('t:',t,'b:',b);
     
      };
     

    };
    console.log(boxTable);
    
    $rootScope.showItems();
    
    $rootScope.BoxTable = {
                            't0':{'b0':{"class":"border_right"},'b1':{"boxHeader":"Бокс1"},'b2':{"boxHeader":"Бокс2"},'b3':{"boxHeader":"Бокс3"}, 'b4':{"boxHeader":"Бокс4"}},
                            't8':{'b0':{"class":"border_right"},'b1':{x:2},'b2':{x:1},'b3':{x:2},'b4':{x:2}},
                            't9':{'b0':{"class":"border_right"},'b1':{x:2},'b2':{x:1},'b3':{x:2},'b4':{x:2}}
                          };
    $rootScope.BoxTable = boxTable; 


  };

});

fineCarApp.controller('washerServicesController', function($scope, WasherProfile, Services, $rootScope, WasherServices) {
 

  myApp.onPageBeforeInit('washer_service', function (page) {
    WasherServices.find({filter: { where: {wProfileId: $rootScope.currentWProfile.id}}}, function(wServices) { 
          $scope.wServices = wServices;
          console.log("wServices:",wServices);
        },function(err){
          console.log("err:",err);
        });

    Services.find().$promise.then(function(response){
      console.log(response);
      $scope.services=response;
    });
  
  });

  $scope.setServiceChoice=function(service){
    $scope.addWasherService={};

    $scope.addWasherService.name=service.name;
    $scope.addWasherService.description=service.description;
    $scope.addWasherService.shotDescription=service.short_description;
    $scope.addWasherService.serviceId=service.id;
    $scope.addWasherService.wProfileId=$rootScope.currentWProfile.id;

    console.log($scope.addWasherService);
  };

  $scope.createWasherService=function(){
    WasherServices.create($scope.addWasherService,
      function(response){
        $scope.wServices.push($scope.addWasherService);
        console.log(response);
        mainView.router.back();
      },
      function(response){
        console.log("response:",response);  
        myApp.alert(response.data.error.message);

      }   
    );
  };


});



fineCarApp.controller('washerHomeController', function($scope, $http, $rootScope, washerLogin, Washers, Bids) {
  

  // $scope.addItemToTable = function(t,b){
  //   $rootScope.BoxTable.t9.b3.duration="60";
  //   $rootScope.BoxTable.t9.b3.status="queue";
  // };
  
  // $scope.addItemToBox = function(t,b){
  //   console.log(t,b);
  //   if(t!='t0'+parseInt($rootScope.currentWProfile.openH)-1 && b!='b0'){
  //     $rootScope.BoxTable[t][b].duration="60";
  //     $rootScope.BoxTable[t][b].status="queue";
  //   }
  // };
  
  
  $rootScope.showItems = function(){
    
    Bids.find({filter: { where: {wProfileId: $rootScope.currentWProfile.id, date: $rootScope.currentWProfile.currentDate}}}, function(bids) { 
          // $rootScope.userCars = cars;
          console.log("bids:",bids);
          
        angular.forEach(bids, function(value, key) {
          var t='t'+value.begin_h;
          if(value.begin_h<10){t='t0'+value.begin_h;};
          var b='b'+ value.box;
          
          $rootScope.BoxTable[t][b]=value;
          if(moment.duration(value.duration,"m").hours()==0){
            $rootScope.BoxTable[t][b].duration_hm=moment.duration(value.duration,"m").minutes()+'мин';  
          }else{
            $rootScope.BoxTable[t][b].duration_hm=moment.duration(value.duration,"m").hours()+"ч "+moment.duration(value.duration,"m").minutes()+'мин';  
          }
        });
        
        $scope.timeBoxes={};
        
      console.log($rootScope.currentWProfile.boxCount);
      for(var i=1; i<=$rootScope.currentWProfile.boxCount; i++){

        var b="b"+i;
        console.log(b);
        
        var boxes=[];
        
        var box={};
        box.begin_h=$rootScope.currentWProfile.openH;
        box.begin_m=0;
        var t=parseInt($rootScope.currentWProfile.openH)-1;
       
        angular.forEach($rootScope.BoxTable, function(value, key) {

            if(value[b].box>0){
              box.end_h=value[b].begin_h;
              box.end_m=value[b].begin_m;  
              
              box.duration=(box.end_h-box.begin_h)*60+box.end_m-box.begin_m;
              box.status="clean";
              boxes.push(box);
              
              box={};
              box.begin_h=value[b].begin_h;
              box.begin_m=value[b].begin_m;
              box.end_h=value[b].end_h;
              box.end_m=value[b].end_m;
              box.duration=(box.end_h-box.begin_h)*60+box.end_m-box.begin_m;
              box.status="queue";
              boxes.push(box);
              
              box={};
              box.begin_h=value[b].end_h;
              box.begin_m=value[b].end_m;
            }
            
        });
        
        box.end_h=$rootScope.currentWProfile.closeH;
        box.end_m=0; 
        box.duration=(box.end_h-box.begin_h)*60+box.end_m-box.begin_m;
        box.status="clean";
        
        boxes.push(box);
        console.log("boxes:",boxes);
        $scope.timeBoxes[b]=boxes;
        
      };  
       console.log("timeBoxes", $scope.timeBoxes);  
        
      $rootScope.timeMoveBoxes={};
        
      angular.forEach($scope.BoxTable, function(value, t) {
        $rootScope.timeMoveBoxes[t]={};
        angular.forEach(value, function(val, b) {
          
          if(parseInt(b.substr(1))==0){                                         // Добавляем линию времени в timeMoveBoxes
            $rootScope.timeMoveBoxes[t][b]=val;
          };
          
          console.log(b);  
          
          if(parseInt(t.substr(1))==$rootScope.currentWProfile.openH-1){        // Добавляем шапку в timeMoveBoxes
            $rootScope.timeMoveBoxes[t][b]=val;
          };
          
          
          angular.forEach($scope.timeBoxes[b], function(v, k) {
            var timeBox={};
            if(v.begin_h<=parseInt(t.substr(1))){
              timeBox.begin_h=parseInt(t.substr(1));
              timeBox.begin_m=0;
              timeBox.duration=(v.end_h-parseInt(t.substr(1)))*60+v.end_m;
              
              if(v.begin_h==parseInt(t.substr(1))){                            // Если t=x m!=0 т.е. если блок начинаеться не с начала часа 00.
                timeBox.begin_m=v.begin_m;
              };
  
              if(v.duration<60){                                                // Если временные блоки менее 60 минут. И если их несколько.
                timeBox.duration=v.duration;    
              };
            
              timeBox.end_h=v.end_h;
              timeBox.end_m=v.end_m;
              timeBox.status=v.status;
              $rootScope.timeMoveBoxes[t][b]=timeBox;
            };
          });
          
          
        });  
      });
      
      console.log("MoveBoxes:", $rootScope.timeMoveBoxes);  
        
    },function(err){
      console.log("err:",err);
    });
    
    
      
    
   

  };

  $scope.showImage = function(){
    var image = document.getElementById('washerImage');
    image.src = "data:image/jpeg;base64," + $rootScope.currentWasher.photo;    
    console.log("click");
    console.log($rootScope.currentWasher.photo);

  };
   

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

  // $scope.deleteItem =function(id){
  //   angular.forEach($scope.boxes, function(value, key) {
  //     angular.forEach(value,function(val,k){
  //       if (parseInt(val.id) == parseInt(id)){
          
  //         var item={};
  //         item.id=val.id;
  //         item.status="clean";
  //         item.duration=""+val.duration;
  //         item.start_time_h=val.start_time_h;
  //         item.start_time_m=val.start_time_m;
  //         console.log(val);
  //         value.splice(k,1); //Удаляем зявку из списка
  //         value.splice(k,0,item); //Добавляем item в список
  //         console.log($scope.boxes);

  //         if(value[k+1] && value[k+1].status=="clean"){
  //           item.duration=parseInt(value[k+1].duration)+parseInt(item.duration);
  //           value.splice(k+1, 1);
  //         };

  //         if(value[k-1] && value[k-1].status=="clean"){
  //           item.duration=parseInt(value[k-1].duration)+parseInt(item.duration);
  //           item.start_time_h=value[k-1].start_time_h;
  //           item.start_time_m=value[k-1].start_time_m;
  //           value.splice(k-1,1);
  //         }
  //       };
  //     });
  //   });
  // myApp.closeModal();
  // };

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

    var beginTimeLength=$scope.newOrderData.maxDuration-$scope.new_time;
    beginTimeLength=$scope.minuteAddToTime(beginTimeLength,$scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM);
    $scope.newOrderData.endTimeH=beginTimeLength.hour;
    $scope.newOrderData.endTimeM=beginTimeLength.minute;  
    $scope.newOrderData.maxDinamicDuration=$scope.newOrderData.maxDuration-$scope.new_time;

    console.log("max:",$scope.newOrderData.maxDuration,"order",$scope.new_time)

    if(parseInt($scope.newOrderData.maxDuration)<$scope.new_time){
      myApp.confirm("Всего" +$scope.newOrderData.maxDuration+"мин. Удалить последний?",
       "Превышен лимит по времени," +$scope.new_time+"мин!"
       
      ,function() {
        
         var lastItem=$scope.order.services.pop();
         $scope.order_price-=parseFloat(lastItem.price);
         $scope.new_time -=parseFloat(lastItem.time);  
         $scope.newOrderData.maxDinamicDuration=$scope.newOrderData.maxDuration-$scope.new_time;
         var beginTimeLength=$scope.newOrderData.maxDuration-$scope.new_time;
         beginTimeLength=$scope.minuteAddToTime(beginTimeLength,$scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM);
         $scope.newOrderData.endTimeH=beginTimeLength.hour;
         $scope.newOrderData.endTimeM=beginTimeLength.minute;  
       },function(){
         $scope.newOrderData.endTimeH=$scope.newOrderData.startTimeH;
         $scope.newOrderData.endTimeM=$scope.newOrderData.startTimeM; 
         $scope.newOrderData.maxDinamicDuration=0;
       }
     );
    };
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
    $scope.new_time=0;
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
    mainView.router.loadPage({pageName: 'washer_new_bid'});
  };

   $scope.doNewOrder = function() {

    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
        if (parseInt(val.id) == $scope.newOrderData.id){ 
          
          var item={};
          item.id=$scope.newOrderData.id+'1';
          item.status="queue";
          item.duration=$scope.new_time;
          item.start_time_h=$scope.newOrderData.setTimeH;
          item.start_time_m=$scope.newOrderData.setTimeM;
          console.log(val);
          value.splice(k,1); //Удаляем зявку из списка
          value.splice(k,0,item); //Добавляем item в список

          if(item.duration<$scope.newOrderData.maxDuration){
            if($scope.newOrderData.rangeData==$scope.newOrderData.maxDinamicDuration){
              var item1={};
              item1.id=$scope.newOrderData.id+'2';
              item1.status="clean";
              item1.duration=$scope.newOrderData.rangeData;
              item1.start_time_h=$scope.newOrderData.startTimeH;
              item1.start_time_m=$scope.newOrderData.startTimeM;
              console.log(1);
              if(value[k-1].status=="clean"){
                value[k-1].duration=parseInt(value[k-1].duration)+parseInt(item1.duration);
              }else{
                value.splice(k,0,item1); //Добавляем item в список
              }
            };

            if($scope.newOrderData.rangeData==0){
              var item1={};
              item1.id=$scope.newOrderData.id+'2';
              item1.status="clean";
              item1.duration=$scope.newOrderData.maxDuration-$scope.new_time;
              
              console.log($scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM);
              console.log(item1.duration);
              
              var t = moment($scope.newOrderData.startTimeH,"h").add($scope.newOrderData.startTimeM,"m").add(parseInt(item.duration),"m");
              console.log(2);
              
              item1.start_time_h=t.get("h");
              
              if(t.get("m")<10){
                item1.start_time_m="0"+t.get("m");  
              }else{
                item1.start_time_m=t.get("m");
              };

              if(value[k+1].status=="clean"){
                value[k+1].start_time_h=item1.start_time_h;
                value[k+1].start_time_m=item1.start_time_m;
                value[k+1].duration=parseInt(value[k+1].duration)+parseInt(item1.duration);
              }else{
                value.splice(k+1,0,item1); //Добавляем item в список
              }
            };

            if($scope.newOrderData.rangeData>0 && $scope.newOrderData.rangeData<$scope.newOrderData.maxDinamicDuration){
              var item1={};
              item1.id=$scope.newOrderData.id+'2';
              item1.status="clean";
              item1.duration=$scope.newOrderData.rangeData;
              item1.start_time_h=$scope.newOrderData.startTimeH;
              item1.start_time_m=$scope.newOrderData.startTimeM;
              console.log(3);
              if(value[k-1].status=="clean"){
                value[k-1].duration=parseInt(value[k-1].duration)+parseInt(item1.duration);
              }else{
                value.splice(k,0,item1); //Добавляем item в список
              }

              var item2={};
              item2.id=$scope.newOrderData.id+'3';
              item2.status="clean";
              item2.duration=$scope.newOrderData.maxDuration-$scope.new_time-$scope.newOrderData.rangeData;
              var sumDuration=parseInt($scope.newOrderData.rangeData)+parseInt(item.duration);
              console.log(sumDuration);
              var rangeDataToHM=$scope.minuteAddToTime(sumDuration,$scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM)
              item2.start_time_h=rangeDataToHM.hour;
              item2.start_time_m=rangeDataToHM.minute;
               if(value[k+1].status=="clean"){
                value[k+1].start_time_h=item2.start_time_h;
                value[k+1].start_time_m=item2.start_time_m;
                value[k+1].duration=parseInt(value[k+1].duration)+parseInt(item2.duration);
              }else{
                value.splice(k+2,0,item2); //Добавляем item в список
              }
            };
          }
        }
      });
    });
  };

  $scope.bidMove = function(t,b){
    
    $scope.moveTable={};
    
    angular.forEach($rootScope.timeMoveBoxes, function(value, tc) {
      $scope.moveTable[tc]={};
      angular.forEach(value,function(val,bc){
        $scope.moveTable[tc][bc]=$rootScope.timeMoveBoxes[tc][bc];
        if ($rootScope.timeMoveBoxes[tc][bc].status == "clean" && $rootScope.timeMoveBoxes[tc][bc].duration > $rootScope.BoxTable[t][b].duration){ 
         $scope.moveTable[tc][bc].move_status = "can_accommodate";
        }
        else{
          $scope.moveTable[tc][bc].move_status = "clean";
        };
        
      });
    });
    
    console.log("t,b:",t,b);
    console.log("duration:",$rootScope.BoxTable[t][b].duration);
    
    console.log("moveTable:",$scope.moveTable);
    mainView.router.loadPage({pageName: 'bid_move'});
  };
  
  $scope.doOrderMove = function(id){
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
       if (parseInt(val.id) == id){

        var item={};
        item.id=id+'1';
        item.status="queue";
        item.duration=$scope.moveItem.duration;
        item.start_time_h=val.start_time_h;
        item.start_time_m=val.start_time_m;
        
        if(item.duration<val.duration){
          var item1={};
          item1.id=id+'2';
          item1.status="clean";
          item1.duration=val.duration-item.duration;
          var itemDurationL=$scope.minuteAddToTime(item1.duration,val.start_time_h,val.start_time_m);
          item1.start_time_h=itemDurationL.hour;
          item1.start_time_m=itemDurationL.minute;
        }

        console.log(val);
        value.splice(k,1); //Удаляем зявку из списка
        value.splice(k,0,item); //Добавляем item в список
        if(item1){value.splice(k+1,0,item1)}
        $scope.deleteItem($scope.moveItem.id);
        };
      });
    });
    mainView.router.back();
  };

  $scope.closeModal=function(){
    myApp.closeModal();
  };

  $scope.editOrder= function(id){
    $scope.editOrderData={};  
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
       if (parseInt(val.id) == id){
        console.log(val.duration);
        
        $scope.editOrderData.id=val.id;
        $scope.editOrderData.setTimeH=val.start_time_h;
        $scope.editOrderData.setTimeM=val.start_time_m;
        $scope.editOrderData.startTimeH=val.start_time_h;
        $scope.editOrderData.startTimeM=val.start_time_m;
        $scope.editOrderData.endTimeH=val.start_time_h;
        $scope.editOrderData.endTimeM=val.start_time_m;
        $scope.editOrderData.duration=val.duration;
        $scope.editOrderData.maxDinamicDuration=0;

        if(value[k+1] && value[k+1].status=="clean"){
         var t=$scope.minuteAddToTime(value[k+1].duration, val.start_time_h, val.start_time_m);
         $scope.editOrderData.endTimeH=t.hour;
         $scope.editOrderData.endTimeM=t.minute;
         $scope.editOrderData.maxDinamicDuration=value[k+1].duration;
         $scope.editOrderData.rangeData=0;
        };

        if(value[k-1] && value[k-1].status=="clean"){
          $scope.editOrderData.startTimeH=value[k-1].start_time_h;
          $scope.editOrderData.startTimeM=value[k-1].start_time_m;
          $scope.editOrderData.maxDinamicDuration=value[k-1].duration;
          $scope.editOrderData.rangeData=value[k-1].duration;

          if(value[k+1] && value[k+1].status=="clean"){
            $scope.editOrderData.startTimeH=value[k-1].start_time_h;
            $scope.editOrderData.startTimeM=value[k-1].start_time_m;
            var t=$scope.minuteAddToTime(value[k+1].duration, val.start_time_h, val.start_time_m);
            $scope.editOrderData.endTimeH=t.hour;
            $scope.editOrderData.endTimeM=t.minute;
            $scope.editOrderData.maxDinamicDuration=parseInt(value[k+1].duration)+parseInt(value[k-1].duration);
            $scope.editOrderData.rangeData=value[k-1].duration;
          };
        };
       };
      });
    });
    mainView.router.loadPage({pageName: 'washer_edit_bid'});
  };

  $scope.rangeEditChange = function(){
    var rangeDataAdd=$scope.minuteAddToTime($scope.editOrderData.rangeData,$scope.editOrderData.startTimeH,$scope.editOrderData.startTimeM);
    $scope.editOrderData.setTimeH=rangeDataAdd.hour;
    $scope.editOrderData.setTimeM=rangeDataAdd.minute;
  }; 

  $scope.doEditOrder = function(){
    angular.forEach($scope.boxes, function(value, key) {
      angular.forEach(value,function(val,k){
        if (parseInt(val.id) == $scope.editOrderData.id){ 
          var pushItem={};
          var item={};
          item.id=$scope.editOrderData.id+'1';
          item.status="queue";
          item.duration=$scope.editOrderData.duration;
          item.start_time_h=$scope.editOrderData.setTimeH;
          item.start_time_m=$scope.editOrderData.setTimeM;
          console.log(val);
          pushItem.mainVal=item;
            console.log($scope.editOrderData.rangeData,$scope.editOrderData.maxDinamicDuration);
            
              var item3={};
              item3.id=$scope.editOrderData.id+'2';
              item3.status="clean";
              item3.duration=$scope.editOrderData.rangeData;
              item3.start_time_h=$scope.editOrderData.startTimeH;
              item3.start_time_m=$scope.editOrderData.startTimeM;
              pushItem.leftItem=item3;
              // if(item3.duration>0){console.log(k);if(k==0){value.splice(k,0,item3)}else{value.splice(k-1,0,item3)}}; //Добавляем item в список
              var item4={};
              item4.id=$scope.editOrderData.id+'3';
              item4.status="clean";
              item4.duration=$scope.editOrderData.maxDinamicDuration-$scope.editOrderData.rangeData;
              var rangeDataToHM=$scope.minuteAddToTime($scope.editOrderData.duration,$scope.editOrderData.setTimeH,$scope.editOrderData.setTimeM)
              item4.start_time_h=rangeDataToHM.hour;
              item4.start_time_m=rangeDataToHM.minute;
              
              pushItem.rightItem=item4;
              // if(value[k+1] && value[k+1].status=="clean"){
              //   value.splice(k+1,1);// Удаляем пустую заявку
              // };

              if(value[k-1] && value[k-1].status=="clean" && value[k+1] && value[k+1].status=="clean"){//если есть пустые с обеих сторон
                if(value[k-1] && value[k-1].status=="clean"){
                  item3.start_time_h=value[k-1].start_time_h;
                  item3.start_time_m=value[k-1].start_time_m;
                  value[k-1]=pushItem.leftItem;
                };
                  value[k]=pushItem.mainVal;

                if(value[k+1] && value[k+1].status=="clean"){
                   value[k+1]=pushItem.rightItem;
                };

                if(value[k+1] && value[k+1].duration==0){
                  value.splice(k+1,1);// Удаляем пустую заявку k+1
                };

                if(value[k-1] && value[k-1].duration==0){
                  value.splice(k-1,1);// Удаляем пустую заявку k-1
                };

              }else{
                if(value[k-1] && value[k-1].status=="clean"){//если есть пустая с лева
                  item3.start_time_h=value[k-1].start_time_h;
                  item3.start_time_m=value[k-1].start_time_m;
                  value[k-1]=pushItem.leftItem;
                  value[k]=pushItem.mainVal;
                  value.splice(k+1,0,pushItem.rightItem);
                  if(value[k-1] && value[k-1].duration==0){
                    value.splice(k-1,1);// Удаляем пустую заявку k-1
                  };

                }else{
                  if(value[k+1] && value[k+1].status=="clean"){ //если есть пустая с права
                    value[k]=pushItem.mainVal;
                    value[k+1]=pushItem.rightItem;
                    value.splice(k,0,pushItem.leftItem);
                  
                    if(value[k+2] && value[k+2].duration==0){
                      value.splice(k+2,1);// Удаляем пустую заявку k+1
                    };
                  };
                };
              }
            // };
          // }
        }
      });
    });
  }

  $scope.boxItemClick = function(status,t,b,id) {
    
   myApp.pickerModal('.'+status);

   $scope.delete = function() {
     console.log(id);
      $scope.deleteItem(t,b,id);
      $scope.closeModal();
    };

    $scope.move = function() {
      $scope.bidMove(t,b);
      $scope.closeModal();
    };

    $scope.new = function() {
      // $scope.newOrder(id);
      $scope.newItem(t,b);
      $scope.closeModal();
    };

    $scope.edit = function() {
      $scope.editOrder(id);
      $scope.closeModal();
    };

  };
  
  $scope.newItem =function(t,b,date,m){
    
    $scope.newOrderData={};
    $scope.order = {
      services: []
    };
    $scope.newOrderData.rangeData=0;    
    $scope.order_price=0;
    $scope.new_time=0;


    
    $scope.newOrderData.maxDuration=$rootScope.timeMoveBoxes[t][b].duration;
    $scope.newOrderData.maxDinamicDuration=$rootScope.timeMoveBoxes[t][b].duration;
    $scope.newOrderData.startTimeH=$rootScope.timeMoveBoxes[t][b].begin_h;
    $scope.newOrderData.startTimeM=$rootScope.timeMoveBoxes[t][b].begin_m;

    $scope.newOrderData.endTimeH=$rootScope.timeMoveBoxes[t][b].end_h;
    $scope.newOrderData.endTimeM=$rootScope.timeMoveBoxes[t][b].end_m;
    $scope.newOrderData.setTimeH=$rootScope.timeMoveBoxes[t][b].begin_h;
    $scope.newOrderData.setTimeM=$rootScope.timeMoveBoxes[t][b].begin_m;
    $scope.newOrderData.date=$rootScope.currentWProfile.currentDate;
    $scope.newOrderData.box=parseInt(b.substr(1));;
    
    if($scope.BoxTable[t][b].status=="queue"){
      myApp.addNotification({
        title: 'FineCar',
        message: 'В один час можно создавать только одну заявку.'
     });
    }
    else{
      mainView.router.loadPage({pageName: 'washer_new_bid'});      
    };
    
  };


   $scope.doNewItem = function() {

    var item ={};   
    item.status="queue";
    item.duration=$scope.new_time;
    item.begin_h=$scope.newOrderData.setTimeH;
    item.begin_m=$scope.newOrderData.setTimeM;
    item.date=$scope.newOrderData.date;
    var endTime=$scope.minuteAddToTime(item.duration,item.begin_h, item.begin_m);
    item.end_h=endTime.hour;
    item.end_m=endTime.minute;
    item.box=$scope.newOrderData.box;
    item.user_phone=$scope.newOrderData.phone;
    item.user_car_number=$scope.newOrderData.car_number;
    item.wProfileId=$scope.currentWProfile.id;

    Bids.create(item, function(items) { 
          // $rootScope.userCars.push(car);
          console.log("items:",items);


          var t='t'+items.begin_h;
          if(items.begin_h<10){t='t0'+items.begin_h;};
          var b='b'+ items.box;
          
          $rootScope.showItems();
        },function(err){
          console.log("err:",err);
          // mainView.router.loadPage({pageName: 'index'});
        });
     $rootScope.showItems();    
      console.log(item);
  };
  
  $scope.deleteItem = function(t,b,id){
    console.log(id);
      Bids.deleteById({ id: id })
        .$promise
        .then(function() { 
          console.log('deleted'); 
          $rootScope.BoxTable[t][b]={};
        });
      console.log($rootScope.BoxTable[t][b]);
    }

});
