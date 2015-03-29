using RoutineBuilder.Core.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Entities
{
    public class Routine
    {
        public Guid Id { get; set; }
        public string Data { get; set; }

        public class ById : IQuery<Routine>
        {
            private readonly Guid _id;

            public ById(Guid id)
            {
                _id = id;
            }

            public IQueryable<Routine> Filter(IQueryable<Routine> items)
            {
                return items.Where(i => i.Id == _id);
            }
        }

        public class All : IQuery<Routine>
        {
            public IQueryable<Routine> Filter(IQueryable<Routine> items)
            {
                return items;
            }
        }
    }
}
