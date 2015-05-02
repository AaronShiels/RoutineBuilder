using Nancy;

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