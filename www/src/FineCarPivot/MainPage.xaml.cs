using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using FineCarPivot.Resources;

namespace FineCarPivot
{
    public partial class MainPage : PhoneApplicationPage
    {
        public MainPage()
        {
            InitializeComponent();
            //DataContext = App.ViewModel;
            App.ChangePage("AuthPage.xaml");
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            if (!App.ViewModel.IsDataLoaded)
            {
                App.ViewModel.LoadData();
            }
        }

        private void LayoutRoot_Loaded(object sender, RoutedEventArgs e)
        {
            App.ChangePage("AuthPage.xaml");
        }
    }
}