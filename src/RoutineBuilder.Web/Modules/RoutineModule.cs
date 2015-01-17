using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Modules
{
    public class RoutineModule : NancyModule
    {
        public RoutineModule()
        {
            Get["/"] = _ => View["Index"];
        }
    }
}