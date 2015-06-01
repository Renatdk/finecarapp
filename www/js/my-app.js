
var myApp = new Framework7({
    animateNavBackIcon:true,

    template7Pages: true, //enable Template7 rendering for pages
    precompileTemplates: true,

});

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
 

myApp.onPageInit('home', function (page) {
    myApp.showIndicator();
    var homeTemplate = $$(page.container).html();
    var compiledHomeTemplate = Template7.compile(homeTemplate);

    $$.getJSON('json/home.json', function (json) {
      var html=compiledHomeTemplate(json);      
       $$(page.container).html(html);
      myApp.hideIndicator();
    }); 
});   


myApp.onPageInit('choice_service', function (page) {
    myApp.showIndicator();
    var homeTemplate = $$(page.container).html();
    var compiledHomeTemplate = Template7.compile(homeTemplate);

    $$.getJSON('json/user_package_of_services.json', function (json) {
      var html=compiledHomeTemplate(json);      
       $$(page.container).html(html);
      myApp.hideIndicator();
    }); 
});   
 
var sort_by="km";

myApp.onPageInit('washer_choice', function (page) {

  if (page.query.sort_by){
    console.log(sort_by=page.query.sort_by);
  }

  myApp.showIndicator();
  var homeTemplate = $$(page.container).html();
  var compiledHomeTemplate = Template7.compile(homeTemplate);
  console.log("page.context",page.query);

  $$.getJSON('json/user/washer_choice.json', function (json) {
    washers=json;
    washers=_.sortBy(json.washers, sort_by);
    var html=compiledHomeTemplate({washers});      
     $$(page.container).html(html);
     $$(page.container).find(".buttons-row a.active").removeClass('active');
     $$(page.container).find(".buttons-row a#"+sort_by).addClass('active');
    myApp.hideIndicator();
  });

});   