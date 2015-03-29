using Nancy.TinyIoc;
using RoutineBuilder.Core.Context;
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
            container.Register<IRoutineBuilderDbContext>(new RoutineBuilderDbContext());
        }
    }
}