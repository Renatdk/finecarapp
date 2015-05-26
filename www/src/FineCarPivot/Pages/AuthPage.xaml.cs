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
    public partial class AuthPage : PhoneApplicationPage
    {
        public AuthPage()
        {
            InitializeComponent();
        }

        private void ButtonLogOn(object sender, RoutedEventArgs e)
        {
            string login = authLogin.Text;
            string pass = authPass.Text;

            if ((login != "ivan") && (pass != "1"))
            {
                MessageBox.Show("Неверный логин и пароль.");
            }
            else
            {
                App.ChangePage("mainPage.xaml");
            }

        }
    }
}