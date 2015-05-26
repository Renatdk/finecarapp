using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using FineCarPivot.Model;

namespace FineCarPivot.Pages
{
    public partial class CarWashPage : PhoneApplicationPage
    {
        private int selectTimeCount = 0;
        private FinishPage finishPage;
        public CarWashPage()
        {
            InitializeComponent();
            finishPage = new FinishPage();
            CustomDataProvider db = new CustomDataProvider();
            int row = 0;
            

            foreach (var item in db.GetOrganization())
            {
                organizationGrid.RowDefinitions.Add(new RowDefinition() { Height = new GridLength(30) });
                TextBlock title = new TextBlock
                {
                    Text = item.Name + " по " + item.Adres,
                    Style = App.Current.Resources["Header2"] as Style
                };

                Grid.SetRow(title,row);
                Grid.SetColumnSpan(title,4);
                organizationGrid.Children.Add(title);
                
                row++;
                organizationGrid.RowDefinitions.Add(new RowDefinition() { Height = new GridLength(110) });
                int column = 0;
                int countTimeWork = 0;
                foreach (var itemTime in item.timeWork)
	            {
                    
                    if (column == 4 || countTimeWork == item.timeWork.Count())
                    {
                        column = 0;
                        row++;
                        organizationGrid.RowDefinitions.Add(new RowDefinition() { Height = new GridLength(110)});
                    }

                    Button btn = new Button()
                    {
                        Content = itemTime.Hour + ":" + itemTime.Minute,
                        FontSize = 25,
                        Style = Application.Current.Resources["ButtonDarkGray"] as Style,
                        Tag = new Organization { ID = item.ID, Name = item.Name, Adres = item.Adres, timeWork = new List<TimeWork>() { new TimeWork { Hour = itemTime.Hour, Minute = itemTime.Minute } } },
                        Height = 110,
                        Width = 110
                    };

                    btn.Click += btn_Click;
                    Grid.SetRow(btn, row);
                    Grid.SetColumn(btn, column);
                    organizationGrid.Children.Add(btn);

                    column++;
                    countTimeWork++;
	            }
                row++;
            }
        }

        void btn_Click(object sender, RoutedEventArgs e)
        {

            var ogr = (Organization)(sender as Button).Tag;
            if ((sender as Button).Style == Application.Current.Resources["ButtonDarkGray"] as Style)
            {
                selectTimeCount++;
                organizationNameText.Text = ogr.Name + " по " + ogr.Adres;
                selectTime.Content = ogr.timeWork[0].Hour + ":" + ogr.timeWork[0].Minute;

                finishPage.organizationNameText.Text = ogr.Name + " по " + ogr.Adres;
                finishPage.selectTime.Content = ogr.timeWork[0].Hour + ":" + ogr.timeWork[0].Minute;

                (sender as Button).Style = Application.Current.Resources["ButtonDarkGrayChecked"] as Style;
            }
            else
            {
                selectTimeCount--;
                (sender as Button).Style = Application.Current.Resources["ButtonDarkGray"] as Style;
            }
        }

        private void btnDateToday_Click_1(object sender, RoutedEventArgs e)
        {
            btnDateToday.Style = Application.Current.Resources["ButtonDarkGrayChecked"] as Style;
            btnDateTomorrow.Style = Application.Current.Resources["ButtonDarkGray"] as Style;
        }

        private void btnDateTomorrow_Click_1(object sender, RoutedEventArgs e)
        {
            btnDateToday.Style = Application.Current.Resources["ButtonDarkGray"] as Style;
            btnDateTomorrow.Style = Application.Current.Resources["ButtonDarkGrayChecked"] as Style;
        }

        private void CheckBox_Checked_1(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                carcass.Visibility = System.Windows.Visibility.Visible;
                finishPage.carcass.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                carcass.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.carcass.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_2(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                trunk.Visibility = System.Windows.Visibility.Visible;
                finishPage.trunk.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                trunk.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.trunk.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_3(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                salon.Visibility = System.Windows.Visibility.Visible;
                finishPage.salon.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                salon.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.salon.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_4(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                wax.Visibility = System.Windows.Visibility.Visible;
                finishPage.wax.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                wax.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.wax.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_5(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                blackened.Visibility = System.Windows.Visibility.Visible;
                finishPage.blackened.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                blackened.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.blackened.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_6(object sender, RoutedEventArgs e)
        {
            if ((sender as CheckBox).IsChecked == true)
            {
                spot.Visibility = System.Windows.Visibility.Visible;
                finishPage.spot.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                spot.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.spot.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void CheckBox_Checked_7(object sender, RoutedEventArgs e)
        {
            otherTextEnd.Text = otherText.Text;
            if ((sender as CheckBox).IsChecked == true)
            {
                other.Visibility = System.Windows.Visibility.Visible;
                finishPage.other.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                other.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.other.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void PivotItem_ManipulationCompleted_1(object sender, System.Windows.Input.ManipulationCompletedEventArgs e)
        {
            if (selectTimeCount > 0)
            {
                timeGrid.Visibility = System.Windows.Visibility.Visible;
                btnSave.Visibility = System.Windows.Visibility.Visible;

                finishPage.timeGrid.Visibility = System.Windows.Visibility.Visible;
                finishPage.btnEnd.Visibility = System.Windows.Visibility.Visible;
            }
            else
            {
                timeGrid.Visibility = System.Windows.Visibility.Collapsed;
                btnSave.Visibility = System.Windows.Visibility.Collapsed;

                finishPage.timeGrid.Visibility = System.Windows.Visibility.Collapsed;
                finishPage.btnEnd.Visibility = System.Windows.Visibility.Collapsed;
            }
        }

        private void btnSave_Click_1(object sender, RoutedEventArgs e)
        {
            App.ChangePage("FinishPage.xaml");
        }

       
    }
}