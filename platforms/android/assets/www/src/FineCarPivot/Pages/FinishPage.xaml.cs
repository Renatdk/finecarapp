using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;

namespace FineCarPivot.Pages
{
    public partial class FinishPage : PhoneApplicationPage
    {
        public FinishPage()
        {
            InitializeComponent();
        }

        private void btnEnd_Click_1(object sender, RoutedEventArgs e)
        {
            App.ChangePage("mainPage.xaml");
        }
    }
}