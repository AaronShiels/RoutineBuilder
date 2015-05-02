using System.Collections.Generic;

namespace RoutineBuilder.Core.Models
{
    public class Week
    {
        public Week(IEnumerable<Day> days)
        {
            Days = days;
        }

        public IEnumerable<Day> Days { get; set; }
    }
}
