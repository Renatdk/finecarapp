

var myApp = new Framework7({
    animateNavBackIcon:true,
    
    modalTitle: 'FineCar',
    // Enable Material theme
    material: true,
    
    template7Pages: true, //enable Template7 rendering for pages
    precompileTemplates: true,
    // pushState: true

  });

var user_SCL={}; //user choice list

// Add and init View
var $$ = Dom7;


// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true,

});

moment.locale('ru');

if(!navigator.onLine){
    myApp.alert("Нет доступка к Интернет! Подключитесь к сети и перезапустите приложение!");
}


var pushNotification;

document.addEventListener("deviceready", function(){
    pushNotification = window.plugins.pushNotification;
    
    $$("#app-status-ul").append('<li>registering ' + device.platform + '</li>');
    if ( device.platform == 'android' || device.platform == 'Android' || device.platform == "amazon-fireos" ){
        pushNotification.register(
        successHandler,
        errorHandler,
        {
            "senderID":"730696176510",
            "ecb":"onNotification"
        });
    } else if ( device.platform == 'blackberry10'){
        pushNotification.register(
        successHandler,
        errorHandler,
        {
            invokeTargetId : "replace_with_invoke_target_id",
            appId: "replace_with_app_id",
            ppgUrl:"replace_with_ppg_url", //remove for BES pushes
            ecb: "pushNotificationHandler",
            simChangeCallback: replace_with_simChange_callback,
            pushTransportReadyCallback: replace_with_pushTransportReady_callback,
            launchApplicationOnPush: true
        });
    } else {
        pushNotification.register(
        tokenHandler,
        errorHandler,
        {
            "badge":"true",
            "sound":"true",
            "alert":"true",
            "ecb":"onNotificationAPN"
        });
    };
    
    
});



// if($('#theid').css('display') != 'none'){ 
//   setInterval(sec, 15000);
// } else { 
//   $('#theid').hide('slow'); 
// }
    


// function sec() {
//   alert("прошла секунда");
//   location.reload();
// }





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
  $rootScope.registerData={};

  $scope.registration=function(){
    myApp.showIndicator();
    FUser.create($rootScope.registerData,
      function(response){
        $rootScope.goToUserHome($rootScope.registerData.email,$rootScope.registerData.password);
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

fineCarApp.controller('indexController', function($scope, FUser, $rootScope, Cars, washerLogin, Bids, Washers, WasherProfile) {
  
  $scope.loginData={};

   $scope.init = function(){
        if(localStorage.getItem("Interface")=="User"){
            
            FUser.findById({id:localStorage.getItem("$LoopBack$currentUserId")},
                function(response){
                    console.log("user:",response);
                    $rootScope.currentUser = {
                      id:response.id,
                      username:  response.username,
                      email:  response.email,
                      city:  response.city,
                      phone:  response.phone
                    };
                    
                    Cars.find({filter: { where: {driverId: $rootScope.currentUser.id}}}, function(cars) { 
                      $rootScope.userCars = cars;
                      console.log("cars:",cars);
                    },function(err){
                      console.log("err:",err);
                    });
                    
                    $rootScope.showUserBids();
        
                    mainView.router.load({pageName: 'home'});
                    myApp.hideIndicator();
                    
                    myApp.onPageAfterAnimation('home', function (page) {
                         $$('#load-block').css({
                             display: 'none'
                        });
                    });
                   
                },
                function(error){console.log(error)}
                )
            
            // $rootScope.userLogin( localStorage.getItem("currentUser.email"), localStorage.getItem("currentUser.password"));
            
        }else{
            if(localStorage.getItem("Interface")=="Washer"){
                Washers.findById({id:localStorage.getItem("$LoopBack$currentUserId")},
                    function(response){
                        $rootScope.currentWasher = {
                          id: response.id,
                          username:  response.username,
                          email:  response.email,
                          photo:  response.photo,
                        };
                
                        WasherProfile.find({filter: { where: {washerId: $rootScope.currentWasher.id}}}, function(profiles) { 
                          $rootScope.profiles = profiles;
                          console.log("profiles:", profiles);
                        },function(err){
                          console.log("err:",err);
                        });
                        
                        mainView.router.load({pageName: 'choice_profile'});
                        myApp.hideIndicator(); 
                        myApp.onPageAfterAnimation('choice_profile', function (page) {
                             $$('#load-block').css({
                                 display: 'none'
                            });
                        });
                    },
                    function(error){
                        console.log(error);
                    }
                )
            }else{
                // myApp.onPageAfterAnimation('index', function (page) {
                         $$('#load-block').css({
                             display: 'none'
                        });
                    // });
            }     
        }
    };
    
    
    $scope.Login=function(){
        $rootScope.userLogin($scope.loginData.email,$scope.loginData.password);
    };

    $rootScope.goToUserHome=function(e,p){
        if(e){
            $scope.loginData={};
            $scope.loginData.email=e;
            $scope.loginData.password=p;
        }
        
        FUser.login({email: $scope.loginData.email, password: $scope.loginData.password},
              function(response){
                $rootScope.currentUser = {
                  id: response.user.id,
                  tokenId: response.id,
                  username:  response.user.username,
                  email:  response.user.email,
                  city:  response.user.city,
                  phone:  response.user.phone
                };
                
                Cars.find({filter: { where: {driverId: $rootScope.currentUser.id}}}, function(cars) { 
                  $rootScope.userCars = cars;
                  console.log("cars:",cars);
                },function(err){
                  console.log("err:",err);
                });
        
                localStorage.setItem("Interface", "User");
                
                console.log($rootScope.currentUser);
                console.log(response);
                $rootScope.showUserBids();
                
                mainView.router.load({pageName: 'home'});
                console.log("click goToWasherHome");
                  myApp.hideIndicator();
            },
            function(error){
                myApp.alert(error.data.error.message);
                myApp.hideIndicator();
                // console.log(error);
            }
        );
    };

    $rootScope.goToWasherHome=function(){
        mainView.router.load({pageName: 'choice_profile'});  
        console.log("click goToWasherHome");
    };
  
  
  
  $rootScope.userLogin=function(e,p){
    myApp.showIndicator();

    FUser.login({email: e, password: p},
      function(response){
        console.log("user logedin");
        washerLogin(e,p,response);
      },

      function(error){
        // myApp.alert('Неверный Email или Пароль!');
        console.log(error);
        // myApp.alert(error.data.error.message);
        washerLogin(e,p);
        myApp.hideIndicator();
      });
  };
  
    $rootScope.exitUser =function(){
        localStorage.removeItem("userInterface");
        localStorage.removeItem("$LoopBack$accessTokenId");
        localStorage.removeItem("$LoopBack$currentUserId");
        
        localStorage.removeItem("Interface");
    };
    
    $rootScope.exitWasher =function(){
        localStorage.removeItem("washerInterface");
        localStorage.removeItem("$LoopBack$accessTokenId");
        localStorage.removeItem("$LoopBack$currentUserId");
        
        localStorage.removeItem("Interface");
    };
    

});

// create the controller and inject Angular's $scope
fineCarApp.controller('homeController', function($scope, $http, $rootScope, UserBid, userBids, UserCar, Cars, ComplexServices, Bids) {
    // $scope.cars=[];
    //  myApp.showPreloader('Загрузка данных...');
    //  $http.get('https://backfinecar-renatdk.c9.io/api/Cars').success(function(data){
    //     UserCar.cars=data;  
    //     $scope.bids=data.bids;  
    //     $scope.cars=UserCar.cars;  
    //     myApp.hidePreloader();
    //   });
      
    // $scope.cars=UserCar.cars;  
    
    $rootScope.showUserBids= function(){
        myApp.showPreloader('Загрузка данных...');
        Bids.find({filter: { where: {driverId: $rootScope.currentUser.id}}}, 
            function(bids) { 
              $rootScope.UserBids = bids;
              angular.forEach(bids,function(value, key) {
                  value.dateF=moment(value.date).format("D MMM");
                  if(parseInt(value.begin_m)<10){
                        value.begin_m="0"+value.begin_m;  
                  };
                  
              });
              console.log("bids:",bids);
              mainView.router.load({pageName: 'home'});
               myApp.hidePreloader();
            },
            function(err){
              console.log("err:",err);
               myApp.hidePreloader();
            });
        
        
    }
    
    $scope.getParams=function(obj){
      UserBid.name=obj.car_name;
      UserBid.number=obj.car_number;
      UserBid.body_type=obj.body_type;
      console.log(UserBid);
      $rootScope.showServiceList();
    };

    // $scope.UserBids=userBids;

    

    $scope.deleteCar = function(car){
      Cars.deleteById({ id: car.id })
        .$promise
        .then(function() { console.log('deleted'); });
      console.log(car);
    };
    
    
    $rootScope.homeBidFailure= function (id){
      Bids.deleteById({ id: id })
        .$promise
        .then(function() { console.log('deleted');});
    };
});

// create the controller and inject Angular's $scope
fineCarApp.controller('bidController', function($scope, $rootScope, $http, UserBid, UserBids, WasherProfile, Bids, BoxesStatus) {
    
    $scope.UserBid=UserBid;
    
    $rootScope.getBid=function(bid){
      $rootScope.userBid=bid;
      myApp.showIndicator();
      
      Bids.findById({id:bid.id},
        function(response){
            // $rootScope.userBid.washer=response;
            // mainView.router.loadPage({pageName: 'bid'});
            // myApp.hideIndicator();
            
            console.log("BId:",response);
            $rootScope.userBid=response;
            $rootScope.userBid.dateF=moment(response.date).format("D MMM");
            if(parseInt($rootScope.userBid.begin_m)<10){
                        $rootScope.userBid.begin_m="0"+$rootScope.userBid.begin_m;  
                  };
            WasherProfile.findById({id:bid.wProfileId},
                function(response){
                    $rootScope.userBid.washer=response;
                    mainView.router.loadPage({pageName: 'bid'});
                    myApp.hideIndicator();
                    console.log("$rootScope.userBid:",$rootScope.userBid);
                },
                function(err){
                    console.log(err);
                     myApp.hideIndicator();    
                }
            );
        },
        function(err){
            console.log("BId error:",err);
            //  myApp.hideIndicator();    
        });
      
      
    };
    
    $scope.showMap=function(){
      $scope.img="http://static-maps.yandex.ru/1.x/?l=map&size=250,300&pt="+$rootScope.userBid.u_coordinates.lng+","+$rootScope.userBid.u_coordinates.lat+",pm2am~"+$rootScope.userBid.washer.coordinates.lng+","+$rootScope.userBid.washer.coordinates.lat+",pm2bm";
    };

    $rootScope.bidFailure= function (id){
        
    Bids.deleteById({ id: id })
        .$promise
        .then(function() { console.log('deleted'); $rootScope.showUserBids(); });
    };

    // $scope.days=[];
    // $http.get('json/user/time_choice.json').success(function(data){
    //   $scope.days=data.washer_time;  
    // });

    $scope.getParams=function(day,time){
      UserBid.day=day;
      UserBid.time=time;
      console.log(UserBid);
    }; 
    
    $scope.showTimeLine = function(){
        myApp.showIndicator();
        BoxesStatus
        .find({filter:{where:{wProfileId:$rootScope.userBid.wProfileId, date:{ between: [moment().startOf('day'), moment().add(6, 'days').startOf('day')]}}}},
        
        function(response){
        
          console.log("BoxesStatus: ",response);
          
          angular.forEach(response,function(value, key) {
            
            value.formatDate= moment(value.date).format("ddd, L"); 
             console.log("value!->", value);
            angular.forEach(value.data,function(val, ke) {
                
                var canDo=0;                                                        // Проверка на то что заявка "влезит" в указанное время
                var minute=0;
                console.log("val!->", val);
                angular.forEach(val,function(v, k) {
                    if(v.status=="clean" && v.duration>=$rootScope.userBid.duration){
                        canDo=k;
                        minute=v.begin_m;
                        console.log("Подходит!");
                    };
                    val.canDo=canDo;
                    val.minute=minute;
                    console.log("v!->", v);
                });
            });
            $scope.boxesStatus=response;  
            console.log("formateDate:", value.formatDate);
            });
            console.log("boxesStatus:", $scope.boxesStatus); 
            mainView.router.load({pageName: 'bid_time_choice'});
            myApp.hideIndicator();
            
        },
        function(error){console.log("error: ",error); myApp.hideIndicator();}
        );
    };
    
    $scope.getTimeParams= function(date,time,box,minute){
      Bids.findById({id:$rootScope.userBid.id},
        function(response){
            $scope.respBid=response;
            $scope.respBid.date=date;
            $scope.respBid.dateF=moment(date).format("D MMM");
            $scope.respBid.begin_h=parseInt(time.substring(0,2));
            $scope.respBid.begin_m=minute;
            $scope.respBid.box=parseInt(box.replace(/^b/, ""));;
            
            $scope.respBid
                  .$save()
                  .then(function() {
                    $rootScope.getBid($scope.respBid);
                    console.log("$scope.respBid:",$scope.respBid);
                  });
            
            
        },
        function(err){console.log(err)});
        
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
          mainView.router.back();
        },function(err){
          console.log("err:",err);
          mainView.router.back();
        });
      console.log(car);
      
    }
});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceServiceController', function($filter, $scope,$rootScope, $http, UserBid, Services, ComplexServices) {
    
    // $http.get('json/user/choice_service.json').success(function(data){
    //   $scope.userServices=data.services;  
    // });
    
    $rootScope.showServiceList = function(){
        myApp.showIndicator();
         ComplexServices.find({filter: { where: {driverId: $rootScope.currentUser.id}}}).$promise.then(function(response){
        $rootScope.userServices=response;
        myApp.hideIndicator();
      });
    };

    $scope.getParams=function(obj){
      UserBid.services=obj.serviceIds;
      $rootScope.showWashers();
      console.log(UserBid);
    };

    $scope.openAddService = function(){
        $scope.newServiceName="";
        $scope.new_price=0;
        $scope.new_time=0;
        $scope.order = { services: [] };    
        Services.find().$promise.then(function(response){
            console.log(response);
            $scope.services=response;
            mainView.router.load({pageName:"shape_service"});
        });  
    };
    

    
    $scope.order = {
       services: []
    };
    $scope.serviceSum= function(index){
        console.log(index, $scope.services[index]);
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
        
        // if($scope.services[index].group){
        //     var filtered=$scope.services.filter(function (el) {
        //                       return el.group == $scope.services[index].group ;
        //                     });
        //     console.log('filtered',filtered);
        // }
      };

      angular.forEach($scope.order.services, function(value, key) {
        $scope.new_price +=parseFloat(value.price);
        $scope.new_time +=parseFloat(value.time);  
        $scope.title_sum +=value.name+"+"; 
        $scope.serviceIds.push(value);
      });


      console.log( $scope.order.services);
    };

    $scope.addService= function(index){
        myApp.prompt('Введите наименование комплекса услуг:', function (value) {

            $scope.newServiceName=value;
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
                mainView.router.back();
            },function(err){
                myApp.alert(err.data.error.message);  
                myApp.hideIndicator();
                mainView.router.back();
            });
        });
    };

    $scope.deleteUserService = function(service){
      ComplexServices.deleteById({ id: service.id })
        .$promise
        .then(function() { console.log('deleted'); });
    };


});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceWasherController', function($scope, $rootScope, $http, $cordovaGeolocation, getDastance, UserBid, WasherProfile, WasherServices, BoxesStatus) {

  $scope.sorts='km';
  $scope.sort_by =function (val){
    $scope.sorts=val;
  };
  $scope.getClass = function(path) {
    if ($scope.sorts == path) {
      return "button-fill"
    } else {
      return ""
    }
  };
 $scope.geoObject="Определение местоположения...";

  $rootScope.showWashers = function(){
     
      
    myApp.showIndicator();
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      
      $scope.lat  = position.coords.latitude; UserBid.mlat=position.coords.latitude;
      $scope.long = position.coords.longitude; UserBid.mlong=position.coords.longitude;
      
      $scope.geoObject="Координаты определены..."
      
      $http.get('http://geocode-maps.yandex.ru/1.x/?format=json&geocode='+$scope.long+','+$scope.lat).success(function(data){
        $scope.geoCity=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName;  
        $scope.geoObject=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.ThoroughfareName;  
        
      });
        
        $scope.washers=[];
        
        WasherProfile.find({filter: { where: {City: $scope.geoCity}}}, 
            function(WasherProfiles) { 

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
                              if(val.id==wVal.serviceId){
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
                        
                        BoxesStatus
                            .findOne({filter:{where:{wProfileId:value.id, date:moment().startOf('day')}}},
                                function(response){
                                    console.log("response boxStatus:", response);
                                    // angular.forEach(response.data,function(BSval, BSke){
                                    for(var index in response.data) { 
                                        var BSval=response.data[index];
                                        console.log("BSval:",BSval);
                                        if(BSval.b0.time){
                                            if(parseInt(BSval.b0.time.substring(0,2))>=moment().hours()){
                                                    
                                                console.log("BSval",BSval);
                                                
                                                for(var index in BSval) { 
                                                    var attr = BSval[index];
                                                    if(attr.status=="clean" && attr.duration>value.time){
                                                        if(attr.begin_h==moment().hours() && attr.begin_m<moment().minutes()){
                                                            attr.begin_m=moment().minutes();  
                                                        };
                                                        value.boxesStatus=attr;
                                                    };
                                                    console.log("attr:",attr);
                                                };
                                                
                                                if(value.boxesStatus){
                                                    break;
                                                };
                                            };    
                                        };
                                         
                                    };
                                },
                                function(err){console.log("err:",err)}
                            );
                        
                        if(price>0){
                            $scope.washers.push(value);
                        };
                        
                        console.log("wServices:", wServices);
                        myApp.hideIndicator();
                        
                    },function(err){
                            console.log("err:",err);
                    });
                    
                    
                    
                    
                });

                console.log("$scope.washers:",$scope.washers);

            },
            function(err){
                console.log("err:",err);
            }
        );

      // $http.get('json/user/washer_choice.json').then(function(data){
      //   $scope.washers=data.data.washers;
      //   angular.forEach($scope.washers, function(value, key) {
      //     value.km=getDastance.distance(value.lat,value.long,$scope.lat,$scope.long);
      //   }, $scope.washers);
      // });
    
    }, function(err) {
        $scope.geoObject="Местоположение не определено"
        mainView.router.load({pageName:"city_choice"});
      
      myApp.hideIndicator();
    });
  };

    $scope.getParams=function(obj){
      UserBid.washer=obj;
      console.log(UserBid);
      $rootScope.getBoxesStatus();    
    }; 
    
    $scope.showCityMap=function(city){
        mainView.router.load({pageName:"map_place_choice"});
        
        

        DG.then(function () {
            var map={};
            
            map = DG.map('mapuser', {
                center: [49.94299040336361, 82.62276649475099],
                zoom: 13,
            });
            
            marker=DG.marker([49.94299040336361, 82.62276649475099],{
              draggable: true
            }).addTo(map);
                
            marker.on('drag', function(e) {
              var lat = e.target._latlng.lat,
                  lng = e.target._latlng.lng;
              
            //   $$("input#lat").val(lat);
            //   $$("input#long").val(lng);
              
              $rootScope.lat=lat;
              $rootScope.lng=lng;
              
              console.log(lat,lng);

            }); 
        });
        
    };
    
    $scope.setUserPlace = function(){
        console.log("click on setUserPlace");
    };
    
    $rootScope.showWashersFromPlace = function(){
        $scope.lat  = $rootScope.lat;
        $scope.long = $rootScope.lng;
      
      $scope.geoObject="Координаты определены...";
      $http.get('http://geocode-maps.yandex.ru/1.x/?format=json&geocode='+$rootScope.lng+','+$rootScope.lat).success(function(data){

        $scope.geoCity=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName;  
        $scope.geoObject=data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.ThoroughfareName;  
        
        
        console.log("data",data);
      }).then(
                 function(){
                    console.log( $scope.geoObject,$rootScope.lng+','+$rootScope.lat)
                     
                 }
              );
        
        
        
        $scope.washers=[];
        
        
        
        WasherProfile.find({ where: {City: $scope.geoCity}}, 
            function(WasherProfiles) { 

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
                              if(val.id==wVal.serviceId){
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
                        
                        BoxesStatus
                            .findOne({filter:{where:{wProfileId:value.id, date:moment().startOf('day')}}},
                                function(response){
                                    console.log("response boxStatus:", response);
                                    // angular.forEach(response.data,function(BSval, BSke){
                                    for(var index in response.data) { 
                                        var BSval=response.data[index];
                                        console.log("BSval:",BSval);
                                        if(BSval.b0.time){
                                            if(parseInt(BSval.b0.time.substring(0,2))>=moment().hours()){
                                                    
                                                console.log("BSval",BSval);
                                                
                                                for(var index in BSval) { 
                                                    var attr = BSval[index];
                                                    if(attr.status=="clean" && attr.duration>value.time){
                                                        if(attr.begin_h==moment().hours() && attr.begin_m<moment().minutes()){
                                                            attr.begin_m=moment().minutes();  
                                                        };
                                                        value.boxesStatus=attr;
                                                    };
                                                    console.log("attr:",attr);
                                                };
                                                
                                                if(value.boxesStatus){
                                                    break;
                                                };
                                            };    
                                        };
                                         
                                    };
                                },
                                function(err){console.log("err:",err)}
                            );
                        
                        if(price>0){
                            $scope.washers.push(value);
                        };
                        
                        console.log("wServices:", wServices);
                        myApp.hideIndicator();
                        
                    },function(err){
                            console.log("err:",err);
                    });
                    
                    
                    
                    
                });

                console.log("$scope.washers:",$scope.washers);
                mainView.router.load({pageName:"washer_choice"});   
            },
            function(err){
                console.log("err:",err);
            }
        );
     
     
    };
    
    

});

// create the controller and inject Angular's $scope
fineCarApp.controller('choiceTimeController', function($scope,$rootScope, $http, UserBid, BoxesStatus, UserBids) {
  $scope.days=[];
  
  $rootScope.getBoxesStatus= function(){
    
    myApp.showIndicator();
    
    $scope.boxesStatus={};
    
    BoxesStatus
    .find({filter:{where:{wProfileId:UserBid.washer.id, date:{ between: [moment().startOf('day'), moment().add(6, 'days').startOf('day')]}}}},
    
    function(response){
    
        console.log("BoxesStatus: ",response);
      
        //   angular.forEach(response,function(value, key) {
        for(var index in response) {
            var value=response[index];  
            value.formatDate= moment(value.date).format("ddd, L"); 
            console.log("value!->", value);
            angular.forEach(value.data,function(val, ke) {
                
                // if(val.b0.time && parseInt(val.b0.time.substring(0,2))<parseInt(moment().format("h"))+1){
                //     // value.splice(key,1); 
                //     delete value[key];
                //     console.log("time<",val);
                // }else{
                    var canDo=0;                                                        // Проверка на то что заявка "влезит" в указанное время
                    var minute=0;
                    console.log("val!->", val);
                    // angular.forEach(val,function(v, k) {
                    for(var index in val){
                     var v = val[index];
                        if(v.status=="clean" && v.duration>=UserBid.washer.time){
                            canDo=index;
                            minute=v.begin_m;
                            console.log("Подходит!");
                        };
                        if(val.b0.time){
                            if(parseInt(val.b0.time.substring(0,2))<moment().hours() && moment(value.date).isSame(moment(), 'day')){
                                canDo=0;
                            };    
                        };
                        if(moment(value.date).isSame(moment(), 'day')){
                            if(val.b0.time && val[canDo]){
                                if(parseInt(val.b0.time.substring(0,2))==moment().hours() && val[canDo].begin_m<moment().minutes()){
                                      val[canDo].begin_m=moment().minutes();
                                      if(val[canDo].duration<UserBid.washer.time+moment().minutes()-val[canDo].begin_m){
                                        canDo=0;  
                                      };
                                };

                            };    
                        };
                        
                                                    
                        if(val[canDo] && val[canDo].begin_m<10){
                            val[canDo].begin_m="0"+parseInt(val[canDo].begin_m);
                        };
                        
                        val.canDo=canDo;
                        val.minute=minute;
                        console.log("v!->", v);
                    };    
                // };
            });
            // };
            $scope.boxesStatus=response;  
            console.log("formateDate:", value.formatDate);
        // });
         };
        console.log("boxesStatus:", $scope.boxesStatus); 
        myApp.hideIndicator();
        
    },
    function(error){console.log("error: ",error); myApp.hideIndicator();}
    );
    
  
  };
  
  
//   $http.get('json/user/time_choice.json').success(function(data){
//     $scope.days=data.washer_time;  
//   });
  
  $scope.UserBid=UserBid;

  $scope.getParams=function(date,item){
      UserBid.date=date;
      UserBid.dateF=moment(date).format("D MMM");
      UserBid.item=item;
      console.log(UserBid);
    }; 
  
});

// create the controller and inject Angular's $scope
fineCarApp.controller('sendBidController', function($scope, UserBid, UserBids, userBids, $rootScope, Bids) {
  $scope.UserBid=UserBid;
  
  $scope.showMap=function(){
    $scope.img="http://static-maps.yandex.ru/1.x/?l=map&size=250,300&pt="+UserBid.mlong+","+UserBid.mlat+",pm2am~"+UserBid.washer.coordinates.lng+","+UserBid.washer.coordinates.lat+",pm2bm";
  };


  $scope.pushBid=function(){
    var x={};
    x.name=$scope.UserBid.name;
    x.day=$scope.UserBid.day;
    x.dayF=moment($scope.UserBid.day).format("ddd, L"); 
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
    // userBids.bids.push(x);
    console.log(UserBid);
    console.log(UserBids);
   
    var sendBid ={};
    // sendUserBid.begin_h=$scope.UserBid.time.substring(0,2);
    // sendBid.begin_m="00";
    // sendBid.duration=$scope.UserBid.washer.time;
    // sendBid.price=$scope.UserBid.washer.price;
    // sendBid.car_name=$scope.UserBid.name;
    // sendBid.car_number=$scope.UserBid.number;
    // sendBid.user_phone=$rootScope.currentUser.phone;
    // sendBid.driverId=$rootScope.currentUser.id;
    // sendBid.wProfileId=$scope.UserBid.washer.id;
    // sendBid.date=$scope.UserBid.day;
    
    
    sendBid.price=UserBid.washer.price;
    sendBid.date=UserBid.date;
    sendBid.begin_h=parseInt(UserBid.item[UserBid.item.canDo].begin_h);
    sendBid.begin_m=parseInt(UserBid.item[UserBid.item.canDo].begin_m);
    sendBid.duration=UserBid.washer.time;
    sendBid.end_h=sendBid.begin_h+moment.duration(sendBid.duration, 'minutes').hours();
    sendBid.end_m=moment.duration(sendBid.duration, 'minutes').minutes();
    sendBid.box=parseInt(UserBid.item.canDo.replace("b", ""));
    sendBid.user_phone=$rootScope.currentUser.phone;
    sendBid.user_car=UserBid.name;
    sendBid.user_car_number=UserBid.number;
    sendBid.u_coordinates=UserBid.mlat+','+UserBid.mlong;
    sendBid.status="user_bid";
    sendBid.driverId=$rootScope.currentUser.id;
    sendBid.wProfileId=UserBid.washer.id;
    sendBid.services=UserBid.washer.services;
    sendBid.car_type=UserBid.body_type;
    
    Bids.create(sendBid, function(ub) { 
        //   userBids.push(ub);
            userBids.bids.push(ub);
            console.log("ub:",ub);
            $rootScope.showUserBids(); 
        },function(err){
            console.log("err:",err);
            mainView.router.loadPage({pageName: 'index'});
        });
        
        
    
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
        $scope.newProfile.boxCount=1;

        var posOptions = {timeout: 100000, enableHighAccuracy: false};
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
        
        var week = ['пн','вт','ср','чт','пт','сб','вс'];
        var calendarTable = {};
        
        
        for(var t=0; t<=24; t++){
            
            if(t<10){t="0"+t;}
            calendarTable['t'+t]={};
              
            for(var d=0; d<=7; d++){
                
                calendarTable['t'+t]['d'+d]={};
                
                if(d==0){
                    if(t<9){
                        calendarTable['t'+t]['d'+d].duration=t+'-'+'0'+(parseInt(t)+1)+":00";
                    }else{
                        calendarTable['t'+t]['d'+d].duration=t+'-'+(parseInt(t)+1)+":00";    
                    }
                    
                };
                if(d>0 && 6>d){
                    if(t>8 && 13>t){
                        calendarTable['t'+t]['d'+d].class="colored";
                    } 
                    
                    if(t>13 && 18>t){
                        calendarTable['t'+t]['d'+d].class="colored";
                    }
                    
                }
            };
        };

        console.log('calendarTable:', calendarTable);
        $scope.calendarTable=calendarTable;
  };

    $scope.calendarColorClass = function(t,d){
        if(d)
        
        if($scope.calendarTable[t][d].class!="colored"){
           $scope.calendarTable[t][d].class="colored";
        }else{
            $scope.calendarTable[t][d].class="";
        };
        console.log("colored click",$scope.calendarTable[t][d]);
    };
    
    $scope.allInTime = function(t){
        console.log("$scope.calendarTable[t]",$scope.calendarTable[t]);
        
        var count=0;
         for(var d=1; d<=7; d++){
            if($scope.calendarTable[t]['d'+d].class=='colored'){
                count++;     
            }; 
         };
        
        
        if(count<7){
            for(var d=1; d<=7; d++){
                $scope.calendarTable[t]['d'+d].class='colored';
            };
        }else{
            for(var d=1; d<=7; d++){
                $scope.calendarTable[t]['d'+d].class='';
            };
        }
    };
    
    $scope.allInDay = function(d){
        
        var count=0;
        
        for(var t=0; t<=24; t++){
            
            if(t<10){t="0"+t;}
            
            console.log("t",t);
            
            if($scope.calendarTable['t'+t][d].class=='colored'){
                count++;
            };
            
            if(t<10){t=parseInt(t)};            
        };
        
        for(var t=0; t<=24; t++){
            
            if(t<10){t="0"+t;}
            
            if(count<24){
                $scope.calendarTable['t'+t][d].class='colored';
            }else{
                $scope.calendarTable['t'+t][d].class='';
            };
     
            if(t<10){t=parseInt(t)};            
        };
    };
    
  $scope.showMap = function(){

    var map;
   mainView.router.load({pageName:"map_washer"});
    DG.then(function () {
        
        map = DG.map('mapwasher', {
                            center: [$scope.lat, $scope.long],
                            zoom: 16,
                        });
        
        
        // map.locate({setView: true, watch: true})
        //             .on('locationfound', function(e) {
        //                 $scope.lat=e.latitude;
        //                 $scope.lng=e.longitude;
        //                 marker=DG.marker([e.latitude, e.longitude],{draggable: true}).addTo(map);
                        

        //                 }); 
                        
        //             })
        //             .on('locationerror', function(e) {
        //                 console.log(e);
        //                 alert("Location access denied.");
        //             });

        marker=DG.marker([$scope.lat, $scope.long],{draggable: true}).addTo(map);
                        
                           
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
    $scope.newProfile.washerId=$rootScope.currentWasher.id;
    WasherProfile.create($scope.newProfile, function(response) { 
        $scope.profiles.push(response);
        console.log("response:",response);
      },function(err){
        console.log("err:",err);
      });
    mainView.router.back();
  };

  $scope.setCurrentWProfile = function(profile){
    $rootScope.currentWProfile=profile;
    console.log("set profile", profile);
    var header = {};
    
    var open=parseInt($rootScope.currentWProfile.openH);
    var close=parseInt($rootScope.currentWProfile.closeH);
    var boxCount=$rootScope.currentWProfile.boxCount;
    var boxTable={};
    
   
             
    
    moment.locale('ru'); 
    var today=moment().startOf('day').tz('Asia/Almaty');
    
    $rootScope.currentWProfile.currentDate=today;
    
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
        
     
      };
     

    };


    $rootScope.BoxTable = boxTable; 
    $rootScope.showItems();

    // MQTT begin
        
        // Create a client instance
        var mqttProfileId="profileId"+Math.random()*1000000;
        client = new Paho.MQTT.Client("test.mosquitto.org", 8080,  mqttProfileId);
        // client = new Paho.MQTT.Client("mosquitto-renatdk.c9.io", 1884,  mqttProfileId);
        
        // set callback handlers
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;
        
        // connect the client
        client.connect({onSuccess:onConnect});
        
        
        // called when the client connects
        function onConnect() {
          // Once a connection has been made, make a subscription and send a message.
          console.log("onConnect");
          client.subscribe("hello");
          message = new Paho.MQTT.Message("Hello");
          message.destinationName = "/World";
          client.send(message); 
        }
        
        // called when the client loses its connection
        function onConnectionLost(responseObject) {
          if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:"+responseObject.errorMessage);
            myApp.addNotification({
                title: 'FineCar',
                message: "onConnectionLost:"+responseObject.errorMessage
            });
          }
        }
        
       
        
        // called when a message arrives
        function onMessageArrived(message) {
            console.log("onMessageArrived:"+message.payloadString);
            var getMessage=message.payloadString.split("&");
            if(getMessage[0]=="probando"){
                    myApp.addNotification({
                        title: 'FineCar',
                         message: "Подключено к серверу оповещений!"
                    });   
                }else{
                    if(getMessage[2]==$rootScope.currentWProfile.id){
                        if(getMessage[3]=="Удален!"){
                            myApp.addNotification({
                                title: 'FineCar',
                                message: "Заявка удалена! Дата: "+moment(getMessage[0]).format("D MMM")+" Время: "+getMessage[1]
                            });      
                        }else{
                            myApp.addNotification({
                                title: 'FineCar',
                                message: "Новая заявка! Дата: "+moment(getMessage[0]).format("D MMM")+" Время: "+getMessage[1]
                            });
                        }
                    };
            }
        }
        
    // MQTT end


  };

});

fineCarApp.controller('washerServicesController', function($scope, WasherProfile, Services, $rootScope, WasherServices) {
 
 $rootScope.showService= function(){
    mainView.router.loadPage({pageName: 'washer_service'});
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
  };

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

fineCarApp.controller('washerMenuController', function($scope, WasherProfile, Services, $rootScope, WasherServices){
});

fineCarApp.controller('washerHomeController', function($scope, $http, $rootScope, washerLogin, Washers, Bids, BoxesStatus, WasherServices, WasherMans) {
  
    
    $scope.getTimeLineClass = function(path) {
        if (moment($rootScope.currentWProfile.currentDate).format("D MMM") == path.name) {
          return "button-fill"
        } else {
          return ""
        }
      };
    
    $scope.setCurrentDate = function(date){
        $rootScope.currentWProfile.currentDate=date.date;
        console.log("currentDate:", $rootScope.currentWProfile.currentDate);
        $rootScope.showItems();
      };
      
    $scope.cleanItems = function(){
          var open=parseInt($rootScope.currentWProfile.openH);
          var close=parseInt($rootScope.currentWProfile.closeH);
          var boxCount=$rootScope.currentWProfile.boxCount;
          
          for(var t=open; t<=close; t++){
            t<10 ? to="t0"+t : to="t"+t; 
            
            for(var b=1; b<=boxCount; b++){
              bo="b"+b;
              $rootScope.BoxTable[to][bo]={};
              console.log('b->t,b',to,bo);
            }
            console.log('t->t,b',to,bo);
          };
          
          console.log("$scope.cleanItems->",$rootScope.BoxTable);
      };
      
    $rootScope.showItems = function(){
        
        myApp.onPageInit('washer_home', function (page) {
            function sec() {
                var pixels=(moment().hours()-$rootScope.currentWProfile.openH)*60+moment().minutes()+41;
                $$('.time_line').css('margin-top', pixels+'px');
                $$('.time_line').css('visibility', 'visible');
                $$('.time_line span').text(moment().format('HH:mm:ss'));
            }
            setInterval(sec, 1000);  
        });   
    
        
        
        $scope.dateLine =[];
        
        for(var i=0;i<7;i++ ){                                                                                                                          
          var date={};
          
          date.date=moment().add(i, 'days').startOf('day').tz("Asia/Almaty");
          date.name=moment().add(i, 'days').format("D MMM"); 
          if(moment($rootScope.currentWProfile.currentDate).format("D MMM")==date.name){console.log(date.name)};
          $scope.dateLine.push(date);      
        };
    
        console.log('dateLine',$scope.dateLine, 'currentDate',$rootScope.currentWProfile.currentDate);
        
        $scope.cleanItems();
        
        Bids.find({filter: { where: {wProfileId: $rootScope.currentWProfile.id, date: $rootScope.currentWProfile.currentDate}}}, function(bids) { 
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
            
          console.log('$rootScope.BoxTable',$rootScope.BoxTable);
            
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
    
            $scope.timeBoxes[b]=boxes;
            
          };  
           console.log("timeBoxes", $scope.timeBoxes);  
            
            $rootScope.timeMoveBoxes={};                                              // Создаем слепок состояния боксов при каждом изменении
                
            
                
          angular.forEach($scope.BoxTable, function(value, t) {
            $rootScope.timeMoveBoxes[t]={};
            
            angular.forEach(value, function(val, b) {
      
                if(parseInt(b.substr(1))==0){                                         // Добавляем линию времени в timeMoveBoxes
                    $rootScope.timeMoveBoxes[t][b]=val;
                };
        
                  
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
          
                        if(v.duration<60){                                                // Если временные блоки менее 60 минут.
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
          
          
          var boxesStatus={};
          
          BoxesStatus.findOne({filter: { where: {wProfileId: $rootScope.currentWProfile.id, date: $rootScope.currentWProfile.currentDate}}}, function(bs) { 
            
            $scope.boxesStatus=bs;
            console.log("boxesStatus:", $scope.boxesStatus);
            
            $scope.boxesStatus.data=$rootScope.timeMoveBoxes;
    
            $scope.boxesStatus.$save();
            
          },function(err){
            
            boxesStatus.date=$rootScope.currentWProfile.currentDate;
            boxesStatus.wProfileId=$rootScope.currentWProfile.id;
            boxesStatus.data=$rootScope.timeMoveBoxes;
            
            BoxesStatus.create(boxesStatus,
              function(bs){console.log(bs)},
              function(err){
                myApp.addNotification({
                  title: 'FineCar',
                  message: 'Ошибка синхранизации заявок с базой данных: '+err});
                console.log(err);
            });
            console.log("get bs err:",err);
          });
    
            
            
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
      
    $scope.serviceSumEdit= function(index){
        
        console.log("click serviceSum");
        $scope.eItem.duration=0;
        $scope.eItem.price=0;
        
        var i=0;
        
        if($scope.wServices[index].isChecked==true){
          var i=$scope.eItem.services.indexOf($scope.wServices[index]);
          $scope.eItem.services.splice(i,1);
          $scope.wServices[index].isChecked=false;
        }else{
          $scope.wServices[index].index=index;
          $scope.eItem.services.push($scope.wServices[index]);
          $scope.wServices[index].isChecked=true;
        };
        
        $scope.isServiceChecked = function(index){
            if($scope.wServices[index].isChecked){
                return "icon-checked-filled"
            }else{
                return ""
            }
        };
        
        console.log('$scope.order.services',$scope.eItem.services);
        angular.forEach($scope.eItem.services, function(value, key) {
          $scope.eItem.price +=parseFloat(value.price);
          $scope.eItem.duration +=parseFloat(value.duration);  
        console.log("duration", value.duration, "price:", value.price);
            
        });
        
         if($scope.eItem.duration>$scope.eItem.maxDuration){
            myApp.alert("Превышена максимальная длительность!<br/>"+$scope.eItem.duration+"мин > "+$scope.eItem.maxDuration+" мин");
        };
        
        
      };
    
    $scope.rangeChange = function(){
        var rangeDataAdd=$scope.minuteAddToTime($scope.newOrderData.rangeData,$scope.newOrderData.startTimeH,$scope.newOrderData.startTimeM);
        $scope.newOrderData.setTimeH=rangeDataAdd.hour;
        $scope.newOrderData.setTimeM=rangeDataAdd.minute;
      }; 
    
    $scope.bidMove = function(t,b,id){
        
        $scope.fromMoveItem =  $rootScope.BoxTable[t][b];
        
        $scope.moveTable={};
        
        angular.forEach($rootScope.timeMoveBoxes, function(value, tc) {
          $scope.moveTable[tc]={};
          angular.forEach(value,function(val,bc){
            $scope.moveTable[tc][bc]=$rootScope.timeMoveBoxes[tc][bc];
            if ($rootScope.timeMoveBoxes[tc][bc].status == "clean" && $rootScope.timeMoveBoxes[tc][bc].duration > $rootScope.BoxTable[t][b].duration){ 
             
             $scope.moveTable[tc][bc].move_status = "can_accommodate";
             if($rootScope.BoxTable[tc][bc].status=='queue'){
               $scope.moveTable[tc][bc].move_status = "clean";
             };
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
      
    $scope.doMove = function(t,b){
    
        console.log("moveItemы:", $scope.moveItem);
        myApp.showIndicator();
        
        Bids.findById({ id: $scope.fromMoveItem.id },
          function(response){
            console.log('response',response);
            
            $scope.moveItem=response;
            $scope.moveItem.begin_h=parseInt(t.substr(1));
            $scope.moveItem.begin_m=$rootScope.timeMoveBoxes[t][b].begin_m;
            $scope.moveItem.box=parseInt(b.substr(1));
            $scope.moveItem.end_h=parseInt(t.substr(1))+moment.duration($scope.moveItem.duration,"m").hours();
            $scope.moveItem.end_m=moment.duration($scope.moveItem.duration,"m").minutes();
            
            $scope.moveItem
              .$save()
              .then(function() {
                $scope.showItems();
                mainView.router.back();
              });
            
            var box='b'+$scope.fromMoveItem.box;                                                                          // удаляем из предыдущей позиции.  
            var time=$scope.fromMoveItem.begin_h<10 ? 't0'+$scope.fromMoveItem.begin_h : 't'+$scope.fromMoveItem.begin_h;
            $scope.BoxTable[time][box]={};
            myApp.hideIndicator();
          },
          function(err){
            console.log('error',err);
            myApp.hideIndicator();
          }).$promise;
        
        console.log("item:",$scope.moveItem);
        
      };
    
    $scope.closeModal=function(){
        myApp.closeModal();
      };
    
    $scope.rangeEditChange = function(){
        var rangeDataAdd=$scope.minuteAddToTime($scope.editOrderData.rangeData,$scope.editOrderData.startTimeH,$scope.editOrderData.startTimeM);
        $scope.editOrderData.setTimeH=rangeDataAdd.hour;
        $scope.editOrderData.setTimeM=rangeDataAdd.minute;
      }; 
    
    $scope.editItem= function(t,b,id){
        
        $scope.eItem=$rootScope.BoxTable[t][b];
        console.log($scope.eItem);
        
        t1=parseInt(t.substr(1));
        t1++;
        if(t1<10){t1="t0"+t1}else{t1="t"+t1};
        console.log("t1:",t1);
        
        if(t1 && $rootScope.timeMoveBoxes[t1][b].status=="clean"){
            $scope.eItem.maxDuration=$scope.eItem.duration+$rootScope.timeMoveBoxes[t1][b].duration;
        }else{
            $scope.eItem.maxDuration=$scope.eItem.duration;
        }
        
        console.log("$scope.editItem",$scope.eItem);
        
        console.log("edit item",$scope.eItem);
        
        WasherServices.find({filter: { where: {wProfileId: $rootScope.currentWProfile.id}}}, function(wServices) { 
            $scope.wServices = wServices;
              
            angular.forEach($scope.wServices, function(value, key) {
                if($scope.eItem.car_type=="passenger"){
                    value.price=value.price1;
                };
                if($scope.eItem.car_type=="pikup"){
                    value.price=value.price2;
                };
                if($scope.eItem.car_type=="miniven"){
                  value.price=value.price3;
                };  
                for(var index in $scope.eItem.services){
                    var item=$scope.eItem.services[index];
                    if(value.id==item.id){
                        
                        value.isChecked=true;  
                    
                        $scope.isServiceChecked = function(key){
                            if($scope.wServices[key].isChecked){
                                console.log("$scope.wServices[key].isChecked",$scope.wServices[key].isChecked);
                                return "icon-checked-filled"
                            }else{
                                return ""
                            }
                        };  
                    }
                };
             });
              
            console.log("wServices:",$scope.wServices);
            mainView.router.loadPage({pageName: 'washer_edit_bid'});
            },function(err){
                console.log("err:",err);
            });  
    
        
        
        $scope.car_type=$scope.eItem.car_type;
       
        $scope.carType =function (val){
          $scope.car_type=val;
          
          if(val=="passenger"){
            angular.forEach($scope.wServices, function(value, key) {
               value.price=value.price1;
            });
          };
          
          if(val=="pikup"){
            angular.forEach($scope.wServices, function(value, key) {
               value.price=value.price2;
            });
          };
          
          if(val=="miniven"){
            angular.forEach($scope.wServices, function(value, key) {
               value.price=value.price3;
            });
          };
          
          
        };
        $scope.getClass = function(path) {
          if ($scope.car_type == path) {
            return "button-fill"
          } else {
            return ""
          }
        };
        
        
        // var to = parseInt(t.substr(1))<10 ? 't0' : 't'; 
        // $scope.editOrderData={};  
        // $scope.editOrderData.id=$scope.eItem.id;
        // $scope.editOrderData.setTimeH=$scope.eItem.begin_h;
        // $scope.editOrderData.setTimeM=$scope.eItem.begin_m;
        // $scope.editOrderData.startTimeH=$rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))-1)][b].begin_h ? $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))-1)][b].begin_h : $rootScope.timeMoveBoxes[t][b].begin_h;
        // $scope.editOrderData.startTimeM=$rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))-1)][b].begin_m ? $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))-1)][b].begin_m : $rootScope.timeMoveBoxes[t][b].begin_m;
        
        // to = (parseInt(t.substr(1))+1)<10 ? 't0' : 't'; 
        
        // $scope.editOrderData.endTimeH=$rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)] && $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)][b].end_h ? $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)][b].end_h : $rootScope.timeMoveBoxes[t][b].end_h;
        // $scope.editOrderData.endTimeM=$rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)] && $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)][b].end_m ? $rootScope.timeMoveBoxes[to+(parseInt(t.substr(1))+1)][b].end_m : $rootScope.timeMoveBoxes[t][b].end_m;
        // console.log(to+(parseInt(t.substr(1))+1));
        // $scope.editOrderData.duration=$scope.eItem.duration;
        // $scope.editOrderData.car_number=$scope.eItem.user_car_number;
        // $scope.editOrderData.tel=$scope.eItem.user_phone;
        // $scope.new_price=$scope.eItem.price;
        // $scope.new_time= $scope.eItem.duration;
        // $scope.order.services= $rootScope.BoxTable[t][b].services;
        // console.log($rootScope.BoxTable[t][b].services);
        // $scope.editOrderData.maxDinamicDuration=0;
        
      };    
    
    $scope.doEditItem = function(){
       
       console.log("doEditItem:",$scope.eItem);
        myApp.showIndicator();
        
        Bids.findById({ id: $scope.eItem.id },
          function(response){
            console.log('response',response);
            
    
            $scope.editingItem=$scope.eItem;
            $scope.editingItem.car_type=$scope.car_type;
            $scope.editingItem
              .$save()
              .then(function() {
                $scope.showItems();
                mainView.router.back();
              });
              
            console.log("editing item:",$scope.editingItem);
            myApp.hideIndicator();
          },
          function(err){
            console.log('error',err);
            myApp.hideIndicator();
          }).$promise;
        
        
        
       
       
        // angular.forEach($scope.boxes, function(value, key) {
        //   angular.forEach(value,function(val,k){
        //     if (parseInt(val.id) == $scope.editOrderData.id){ 
        //       var pushItem={};
        //       var item={};
        //       item.id=$scope.editOrderData.id+'1';
        //       item.status="queue";
        //       item.duration=$scope.editOrderData.duration;
        //       item.start_time_h=$scope.editOrderData.setTimeH;
        //       item.start_time_m=$scope.editOrderData.setTimeM;
        //       console.log(val);
        //       pushItem.mainVal=item;
        //         console.log($scope.editOrderData.rangeData,$scope.editOrderData.maxDinamicDuration);
                
        //           var item3={};
        //           item3.id=$scope.editOrderData.id+'2';
        //           item3.status="clean";
        //           item3.duration=$scope.editOrderData.rangeData;
        //           item3.start_time_h=$scope.editOrderData.startTimeH;
        //           item3.start_time_m=$scope.editOrderData.startTimeM;
        //           pushItem.leftItem=item3;
        //           // if(item3.duration>0){console.log(k);if(k==0){value.splice(k,0,item3)}else{value.splice(k-1,0,item3)}}; //Добавляем item в список
        //           var item4={};
        //           item4.id=$scope.editOrderData.id+'3';
        //           item4.status="clean";
        //           item4.duration=$scope.editOrderData.maxDinamicDuration-$scope.editOrderData.rangeData;
        //           var rangeDataToHM=$scope.minuteAddToTime($scope.editOrderData.duration,$scope.editOrderData.setTimeH,$scope.editOrderData.setTimeM)
        //           item4.start_time_h=rangeDataToHM.hour;
        //           item4.start_time_m=rangeDataToHM.minute;
                  
        //           pushItem.rightItem=item4;
        //           // if(value[k+1] && value[k+1].status=="clean"){
        //           //   value.splice(k+1,1);// Удаляем пустую заявку
        //           // };
    
        //           if(value[k-1] && value[k-1].status=="clean" && value[k+1] && value[k+1].status=="clean"){//если есть пустые с обеих сторон
        //             if(value[k-1] && value[k-1].status=="clean"){
        //               item3.start_time_h=value[k-1].start_time_h;
        //               item3.start_time_m=value[k-1].start_time_m;
        //               value[k-1]=pushItem.leftItem;
        //             };
        //               value[k]=pushItem.mainVal;
    
        //             if(value[k+1] && value[k+1].status=="clean"){
        //               value[k+1]=pushItem.rightItem;
        //             };
    
        //             if(value[k+1] && value[k+1].duration==0){
        //               value.splice(k+1,1);// Удаляем пустую заявку k+1
        //             };
    
        //             if(value[k-1] && value[k-1].duration==0){
        //               value.splice(k-1,1);// Удаляем пустую заявку k-1
        //             };
    
        //           }else{
        //             if(value[k-1] && value[k-1].status=="clean"){//если есть пустая с лева
        //               item3.start_time_h=value[k-1].start_time_h;
        //               item3.start_time_m=value[k-1].start_time_m;
        //               value[k-1]=pushItem.leftItem;
        //               value[k]=pushItem.mainVal;
        //               value.splice(k+1,0,pushItem.rightItem);
        //               if(value[k-1] && value[k-1].duration==0){
        //                 value.splice(k-1,1);// Удаляем пустую заявку k-1
        //               };
    
        //             }else{
        //               if(value[k+1] && value[k+1].status=="clean"){ //если есть пустая с права
        //                 value[k]=pushItem.mainVal;
        //                 value[k+1]=pushItem.rightItem;
        //                 value.splice(k,0,pushItem.leftItem);
                      
        //                 if(value[k+2] && value[k+2].duration==0){
        //                   value.splice(k+2,1);// Удаляем пустую заявку k+1
        //                 };
        //               };
        //             };
        //           }
        //         // };
        //       // }
        //     }
        //   });
        // });
      
          
      }

    $scope.serviceSumNew= function(index){
    
    console.log("click serviceSum");
    $scope.nItem.duration=0;
    $scope.nItem.price=0;
    
    var i=0;
    
    if($scope.wServices[index].isChecked==true){
      var i=$scope.nItem.services.indexOf($scope.wServices[index]);
      $scope.nItem.services.splice(i,1);
      $scope.wServices[index].isChecked=false;
    }else{
      $scope.wServices[index].index=index;
      $scope.nItem.services.push($scope.wServices[index]);
      $scope.wServices[index].isChecked=true;
    };
    
    $scope.isServiceChecked = function(index){
        if($scope.wServices[index].isChecked){
            return "icon-checked-filled"
        }else{
            return ""
        }
    };
    
    console.log('$scope.order.services',$scope.nItem.services);
    angular.forEach($scope.nItem.services, function(value, key) {
      $scope.nItem.price +=parseFloat(value.price);
      $scope.nItem.duration +=parseFloat(value.duration);  
    console.log("duration", value.duration, "price:", value.price);
        
    });
    
    if($scope.nItem.duration>$scope.nItem.maxDuration){
        myApp.alert("Превышена максимальная длительность!<br/>"+$scope.nItem.duration+"мин > "+$scope.nItem.maxDuration+" мин");
    };
    
    
  };

    $scope.newItem =function(t,b,date,m){
    
    $scope.nItem=$rootScope.timeMoveBoxes[t][b];
    $scope.nItem.maxDuration=$rootScope.timeMoveBoxes[t][b].duration;
    
    if($scope.nItem.begin_h==moment().hours() && $rootScope.currentWProfile.currentDate==moment().startOf('day')){
        $scope.nItem.minutes=moment().minutes();
        $scope.nItem.maxDuration=$rootScope.timeMoveBoxes[t][b].duration-moment().minutes();
    };
    
    $scope.nItem.box=parseInt(b.substr(1));
    
    
    
    console.log("nItem",$scope.nItem);
    $scope.newOrderData={};
    $scope.nItem.services = [];
  
    // $scope.newOrderData.rangeData=0;    
    // $scope.new_price=0;
    // $scope.new_time=0;


    
    // $scope.newOrderData.maxDuration=$rootScope.timeMoveBoxes[t][b].duration;
    // $scope.newOrderData.maxDinamicDuration=$rootScope.timeMoveBoxes[t][b].duration;
    // $scope.newOrderData.startTimeH=$rootScope.timeMoveBoxes[t][b].begin_h;
    // $scope.newOrderData.startTimeM=$rootScope.timeMoveBoxes[t][b].begin_m;

    // $scope.newOrderData.endTimeH=$rootScope.timeMoveBoxes[t][b].end_h;
    // $scope.newOrderData.endTimeM=$rootScope.timeMoveBoxes[t][b].end_m;
    // $scope.newOrderData.setTimeH=$rootScope.timeMoveBoxes[t][b].begin_h;
    // $scope.newOrderData.setTimeM=$rootScope.timeMoveBoxes[t][b].begin_m;
    // $scope.newOrderData.date=$rootScope.currentWProfile.currentDate;
    // $scope.newOrderData.box=parseInt(b.substr(1));
    
    // if($scope.BoxTable[t][b].status=="queue"){
    //   myApp.addNotification({
    //     title: 'FineCar',
    //     message: 'В один часовой промежуток, можно создать только одну заявку. Выберите другой бокс.'
    //  });
    // }
    // else{
      WasherServices.find({filter: { where: {wProfileId: $rootScope.currentWProfile.id}}}, function(wServices) { 
          $scope.wServices = wServices;
          
          angular.forEach($scope.wServices, function(value, key) {
            value.price=value.price1;
          });
          
          console.log("wServices:",$scope.wServices);
          mainView.router.loadPage({pageName: 'washer_new_bid'});
           
        },function(err){
          console.log("err:",err);
        });  
    // };
    
    $scope.car_type='passenger';
    $scope.carType =function (val){
      console.log(' click carType');
      $scope.car_type=val;
      
      if(val=="passenger"){
        angular.forEach($scope.wServices, function(value, key) {
          value.price=value.price1;
        });
      };
      
      if(val=="pikup"){
        angular.forEach($scope.wServices, function(value, key) {
          value.price=value.price2;
        });
      };
      
      if(val=="miniven"){
        angular.forEach($scope.wServices, function(value, key) {
          value.price=value.price3;
        });
      };
      
      
    };
    $scope.getClass = function(path) {
      if ($scope.car_type == path) {
        return "button-fill"
      } else {
        return ""
      }
    };
    
  };  

    $scope.doNewItem = function() {

        var item =$scope.nItem;   
        item.status="queue";
        // item.duration=$scope.new_time;
        // item.begin_h=$scope.dateTime.hours;
        // item.begin_m=$scope.dateTime.minutes;
        item.date=$scope.currentWProfile.currentDate;
        var endTime=$scope.minuteAddToTime(item.duration,item.begin_h, item.begin_m);
        item.end_h=endTime.hour;
        item.end_m=endTime.minute;
        // item.box=$scope.dateTime.box;
        // item.user_phone=$scope.newOrderData.phone;
        // item.user_car_number=$scope.newOrderData.car_number;
        item.wProfileId=$scope.currentWProfile.id;
        // item.price=$scope.new_price;
        // item.services=$scope.order.services;
        item.car_type=$scope.car_type;
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
        mainView.router.back();
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
    };

    $scope.checkWasherMans = function(index){
        
        if($scope.washerMans[index].isChecked==true){
            var i=$scope.iItem.services.indexOf($scope.washerMans[index]);
            $scope.iItem.washermans.splice(i,1);
            $scope.washerMans[index].isChecked=false;
        }else{
            $scope.washerMans[index].index=index;
            $scope.iItem.washermans.push($scope.washerMans[index]);
            $scope.washerMans[index].isChecked=true;
        };   
        
        $scope.isWasherManChecked = function(index){
            if($scope.washerMans[index].isChecked){
                return "icon-checked-filled"
            }else{
                return ""
            };
        };
    };

    $scope.goItemToBox = function (t,b,id){
      
        $scope.iItem=$scope.BoxTable[t][b];
        $scope.iItem.washermans=[];
           
        $scope.washerMans={};
        // $rootScope.showWasherMans = function(){
            
        WasherMans.find({filter:{where:{'wProfileId':$rootScope.currentWProfile.id}}},
            function(response){
                console.log("nWasherMans response:", response);
                $scope.washerMans=response;
                mainView.router.load( {pageName: 'washer_in_box_bid'});
            },
            function(error){
                console.log("WasherMan create error:");
                myApp.addNotification({
                    title: 'FineCar',
                    message: "Ошибка: "+error.data.error.message
                });
            }
        );
        // };
  };
    
    $scope.doGoItemToBox = function(){
        
        console.log("doGoItemToBox:",$scope.iItem);
        myApp.showIndicator();
        
        Bids.findById({ id: $scope.iItem.id },
          function(response){
            console.log('response',response);
            
    
            $scope.editingItem=$scope.iItem;
            $scope.editingItem.status="in_box";
            $scope.editingItem
              .$save()
              .then(function() {
                $scope.showItems();
                mainView.router.back();
              });
              
            console.log("editing item:",$scope.editingItem);
            myApp.hideIndicator();
          },
          function(err){
            console.log('error',err);
            myApp.hideIndicator();
          }).$promise;
    }; 

    $scope.finishBid = function(t,b,id){
        
        $scope.fItem=$scope.BoxTable[t][b];
        console.log("finished:",$scope.fItem);
        myApp.showIndicator();
        
        Bids.findById({ id: $scope.fItem.id },
          function(response){
            console.log('response',response);
            
    
            $scope.finishedItem=$scope.fItem;
            $scope.finishedItem.status="finish";
            $scope.finishedItem
              .$save()
              .then(function() {
                // $scope.showItems();
              });
              
            console.log("finished item:",$scope.editingItem);
            myApp.hideIndicator();
          },
          function(err){
            console.log('error',err);
            myApp.hideIndicator();
          }).$promise;
    }; 
    
    $scope.boxItemClick = function(status,t,b,id) {
     
    myApp.pickerModal('.'+status);

    $scope.delete = function() {
     console.log(id);
      $scope.deleteItem(t,b,id);
      $scope.closeModal();
    };

    $scope.move = function() {
      $scope.bidMove(t,b,id);
      $scope.closeModal();
    };

    $scope.new = function() {
      // $scope.newOrder(id);
      $scope.newItem(t,b);
      $scope.closeModal();
    };

    $scope.edit = function() {
      $scope.editItem(t,b,id);
      $scope.closeModal();
    };
    
    $scope.toBox = function() {
      $scope.goItemToBox(t,b,id);
      $scope.closeModal();
    };
    
    $scope.finish = function() {
      $scope.finishBid(t,b,id);
      $scope.closeModal();
    };

  };
});

fineCarApp.controller('washerMansController', function($scope, $rootScope, WasherMans){
    
    $scope.washerMans={};
    
    $rootScope.showWasherMans = function(){
        
        WasherMans.find({filter:{where:{'wProfileId':$rootScope.currentWProfile.id}}},
            function(response){
                console.log("nWasherMans response:", response);
                $scope.washerMans=response;
                mainView.router.load({pageName: 'washermans_edit'});
            },
            function(error){
                console.log("WasherMan create error:");
                myApp.addNotification({
                title: 'FineCar',
                message: "Ошибка: "+error.data.error.message
            });
            }
        );
    };
    
    $scope.newWasherMan = function(){
        $scope.nWasherMan = {};
        mainView.router.load({pageName: 'washerman_add'});
    };
    
    $scope.doNewWasherMan = function(){
        
        myApp.showIndicator();
        
        $scope.nWasherMan.wProfileId=$rootScope.currentWProfile.id;
        $scope.nWasherMan.active=true;
        
        WasherMans.create($scope.nWasherMan,
            function(response){
                console.log("nWasherMan response:", response);
                $scope.showWasherMans();
                mainView.router.back();
                myApp.hideIndicator();
            },
            function(error){
                console.log("WasherMan create error:", error, $scope.nWasherMan);
                myApp.addNotification({
                    title: 'FineCar',
                    message: "Ошибка: "+error.data.error.message
                });
                myApp.hideIndicator();
            }
        );
        
    };
    
    $scope.editWasherMan = function(washerMan){
        $scope.eWasherMan=washerMan;
        mainView.router.load({pageName: 'washerman_edit'});
    };
    
    $scope.doEditWasherMan = function(){
        
        myApp.showIndicator();
        
        WasherMans.findById({id:$scope.eWasherMan.id},
            function(response){
                $scope.rWaserMan=$scope.eWasherMan;
                
            $scope.rWaserMan
                .$save()
                .then(function() {
                    mainView.router.back();
                    myApp.hideIndicator();
                });    
            },
            function(error){
                myApp.addNotification({
                    title: 'FineCar',
                    message: "Ошибка: "+error.data.error.message
                });
                myApp.hideIndicator();
            } 
        );
    };
    
    $scope.blockWasherMan = function(washerMan){
        
        myApp.showIndicator();
        
        WasherMans.findById({id:washerMan.id},
            function(response){
                $scope.rWaserMan=response;
                $scope.rWaserMan.active=false;
                
            $scope.rWaserMan
                .$save()
                .then(function() {
                    $rootScope.showWasherMans();
                    myApp.hideIndicator();
                });    
            },
            function(error){
                myApp.addNotification({
                    title: 'FineCar',
                    message: "Ошибка: "+error.data.error.message
                });
                myApp.hideIndicator();
            } 
        );
    };
    
    $scope.unblockWasherMan = function(washerMan){
       
        myApp.showIndicator();
        
        WasherMans.findById({id:washerMan.id},
            function(response){
                $scope.rWaserMan=response;
                $scope.rWaserMan.active=true;
                
            $scope.rWaserMan
                .$save()
                .then(function() {
                    $rootScope.showWasherMans();
                    myApp.hideIndicator();
                });    
            },
            function(error){
                myApp.addNotification({
                    title: 'FineCar',
                    message: "Ошибка: "+error.data.error.message
                });
                myApp.hideIndicator();
            } 
        );
    };
    
    $scope.deleteWasherMan = function(washerMan){
        
        myApp.showIndicator();
        
        WasherMans.deleteById({ id: washerMan.id })
            .$promise
            .then(function() { 
                console.log('deleted'); 
                myApp.hideIndicator();
            });
    };
    
});

fineCarApp.controller('bidsListController', function($scope, $rootScope, Bids){
    
    $scope.newBidList = {};
    
    $scope.bidList = {};
    
    $rootScope.showBidList = function (){
        
        Bids.find({filter:{where:{wProfileId:$rootScope.currentWProfile.id}}},
            function(response){$scope.bidList=response; mainView.router.load({pageName:"washer_bids"})},
            function(error){console.log("bid find error:",error)}
        );
        
    };
});

