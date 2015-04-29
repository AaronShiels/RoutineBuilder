using Nancy.TinyIoc;
using RoutineBuilder.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Configuration
{
    public static class CompositionConfig
    {
        public static void RegisterExports(TinyIoCContainer container)
        {
            container.AutoRegister(new[] { CoreParts.Assembly },
                t => t.Namespace.Contains(".Parts"));
        }
    }
}