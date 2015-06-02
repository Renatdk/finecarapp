
var myApp = new Framework7({
    animateNavBackIcon:true,

    template7Pages: true, //enable Template7 rendering for pages
 precompileTemplates: true,

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
//     var homeTemplate = $$(page.container).html();
//     var compiledHomeTemplate = Template7.compile(homeTemplate);
//     $$.getJSON('json/user/home.json', function (json) {
//       var html=compiledHomeTemplate(json);      
//        $$(page.container).html(html);
//       myApp.hideIndicator();
//     }); 
// });   



var sort_by="km";
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    
    if(page.name ==='home'){
      myApp.showIndicator();
      $$.getJSON('json/user/home.json', function (json) {
        var html=Template7.templates.homeTemplate(json);  
        $$(page.container).html(html);
        myApp.hideIndicator();
      });
    }; 
    
    if(page.name ==='choice_service'){
      myApp.showIndicator();
      $$.getJSON('json/user/choice_service.json', function (json) {
        var html=Template7.templates.choiceServiceTemplate(json);  
        $$(page.container).html(html);
        myApp.hideIndicator();
        user_SCL=page.query;
        console.log(user_SCL);
      });
    }; 
    

    if (page.name === 'washer_choice') {
          sort_by=page.query.sort_by;
          if(page.query.services){
            user_SCL.services=page.query.services;  
          }
          console.log(user_SCL);
          myApp.showIndicator();
          $$.getJSON('json/user/washer_choice.json', function (json) {
            washers=_.sortBy(json.washers, sort_by);
            var html=Template7.templates.washerChoiceTemplate({washers});      
             $$(page.container).html(html);
             $$(page.container).find(".buttons-row a.active").removeClass('active');
             $$(page.container).find(".buttons-row a#"+sort_by).addClass('active');
            myApp.hideIndicator();
          });
    }
    // Code for Services page
    if (page.name === 'time_choice') {
        myApp.showIndicator();
        console.log(page.query);
        user_SCL=$.extend(user_SCL, page.query);        
        $$.getJSON('json/user/time_choice.json', function (json) {
          var jsonUser= $.extend(json, user_SCL);
          console.log(jsonUser);
          var html=Template7.templates.timeChoiceTemplate(jsonUser);  
          $$(page.container).html(html);
          myApp.hideIndicator();
        });
      };
});
