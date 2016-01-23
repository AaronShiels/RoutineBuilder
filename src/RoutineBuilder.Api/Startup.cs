using Microsoft.Owin;
using Owin;
using RoutineBuilder.Api.Configuration;

[assembly: OwinStartup(typeof(RoutineBuilder.Api.Startup))]
namespace RoutineBuilder.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.UseNancy();            
            app.UseWebAppFileServer();
        }
    }
}
