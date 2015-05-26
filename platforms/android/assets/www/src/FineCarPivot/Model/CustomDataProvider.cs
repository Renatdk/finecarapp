using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FineCarPivot.Model
{
    class CustomDataProvider
    {
        public List<Organization> GetOrganization()
        {
            List<Organization> orgCollect = new List<Organization>() { 
                new Organization
                {
                    ID = 1,
                    Name = "Автомойка",
                    Adres = "ул. Ленина, 44",
                    timeWork = new List<TimeWork>() { 
                        new TimeWork{Hour = "09", Minute = "00"},
                        new TimeWork{Hour = "09", Minute = "30"},
                        new TimeWork{Hour = "10", Minute = "00"},
                        new TimeWork{Hour = "10", Minute = "30"},
                        new TimeWork{Hour = "11", Minute = "00"},
                        new TimeWork{Hour = "11", Minute = "30"},
                        new TimeWork{Hour = "12", Minute = "00"},
                        new TimeWork{Hour = "12", Minute = "30"}
                    }
                },
                new Organization
                {
                    ID = 2,
                    Name = "Автомойка",
                    Adres = "ул. Сидорова, 22",
                    timeWork = new List<TimeWork>() { 
                        new TimeWork{Hour = "09", Minute = "00"},
                        new TimeWork{Hour = "09", Minute = "30"},
                        new TimeWork{Hour = "10", Minute = "00"},
                        new TimeWork{Hour = "10", Minute = "30"},
                        new TimeWork{Hour = "11", Minute = "00"},
                        new TimeWork{Hour = "11", Minute = "30"},
                        new TimeWork{Hour = "12", Minute = "00"},
                        new TimeWork{Hour = "12", Minute = "30"}
                    }
                }
            };

            return orgCollect;
        }
    }

    public class Organization
    {
        public int ID { set; get; }
        public string Name { set; get; }
        public string Adres { set; get; }
        public List<TimeWork> timeWork { set; get; }
    }

    public class TimeWork 
    {
        public string Hour { set; get; }
        public string Minute { set; get; }
    }

    
}
