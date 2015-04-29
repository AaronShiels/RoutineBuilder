using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Model
{
    public class Week
    {
        public IEnumerable<Day> Days { get; set; }
    }
}
