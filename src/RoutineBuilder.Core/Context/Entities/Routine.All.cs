using RoutineBuilder.Core.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context.Entities
{
    public partial class Routine
    {
        public class All : IQuery<Routine>
        {
            public IQueryable<Routine> Filter(IQueryable<Routine> items)
            {
                return items;
            }
        }
    }
}
