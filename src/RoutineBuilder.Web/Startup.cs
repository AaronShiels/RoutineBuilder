using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(RoutineBuilder.Web.Startup))]

namespace RoutineBuilder.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseNancy();
        }
    }
}
