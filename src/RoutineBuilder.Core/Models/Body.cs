using System.Collections.Generic;

namespace RoutineBuilder.Core.Models
{
    public class Body
    {
        public Body(IEnumerable<Week> weeks)
        {
            Weeks = weeks;
        }

        public IEnumerable<Week> Weeks { get; set; }
    }
}
