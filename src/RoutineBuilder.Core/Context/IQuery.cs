using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context
{
    public interface IQuery<T> where T : class
    {
        IQueryable<T> Filter(IQueryable<T> items);
    }
}
