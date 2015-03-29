using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Modules
{
    public class MainModule : NancyModule
    {
        public MainModule()
        {
            Get["/"] = _ => View["Index"];

            Get["/{params*}"] = _ => View["Index"];
        }
    }
}