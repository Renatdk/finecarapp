
var myApp = new Framework7({
    animateNavBackIcon:true,

    template7Pages: true, //enable Template7 rendering for pages
    precompileTemplates: true,
    // template7Data:{
    //     "page:home":{
    //         "cars": [{
    //             "car_name":"Bentley VER45",
    //             "car_number":"F001AAA"
    //         },
    //         {
    //             "car_name":"Lamborghini Veneno",
    //             "car_number":"F001AAB"
    //         }],
    //        "bids": [{
    //             "car_name":"Bentley VER45",
    //             "car_number":"F001AAA",
    //             "date":"27.05.15",
    //             "time":"14:30"
    //         },
    //         {
    //             "car_name":"Lamborghini Veneno",
    //             "car_number":"F001AAB",
    //             "date":"29.05.15",
    //             "time":"11:30"
    //         }]
    //     }
    // }

});

// Add and init View
var $$ = Dom7;

var homeTemplate = $$('script#home-template').html();
var compiledHomeTemplate = Template7.compile(homeTemplate);

myApp.onPageBeforeInit('home', function (page) {
    // Just execute compiled search template with required content:
    myApp.showIndicator();
    $$.getJSON('json/home.json', function (json) {
      $$(page.container).html(compiledHomeTemplate(json));
      myApp.hideIndicator();
    }); 
});   



//


 $$('#user_home_link').on('click',function(){
  $$.getJSON('json/home.json', function (json) {
    $$.get('pages/user/home.html',{},function (data) {
    var templateString = data;
    var homePageTemplate = Template7.compile(templateString);
    var processed = homePageTemplate(json);
    $$('.homePage').html(processed);
    });  
  });
});


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
 