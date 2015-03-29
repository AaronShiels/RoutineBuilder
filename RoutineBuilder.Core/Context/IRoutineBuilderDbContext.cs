using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Context
{
    public interface IRoutineBuilderDbContext
    {
        IQueryable<T> Query<T>(IQuery<T> query) where T : class;
    }
}
