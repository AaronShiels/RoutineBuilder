using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core
{
    public static class CoreParts
    {
        public static Assembly Assembly
        {
            get { return typeof(CoreParts).Assembly; }
        }
    }
}
