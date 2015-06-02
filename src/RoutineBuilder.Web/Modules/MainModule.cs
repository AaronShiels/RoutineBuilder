using Nancy;
using SquishIt.Framework;

namespace RoutineBuilder.Web.Modules
{
    public class MainModule : NancyModule
    {
        public MainModule()
        {
            Get["/"] = _ => View["Index"];

            Get["/{params*}"] = _ => View["Index"];

            Before += ctx => BundleTagRenderingHook(ctx);
        }

        private Response BundleTagRenderingHook(NancyContext ctx)
        {
            ctx.ViewBag.Styles = Bundle.Css().RenderCachedAssetTag("styles");
            ctx.ViewBag.Scripts = Bundle.JavaScript().RenderCachedAssetTag("scripts");
            return null;
        }
    }
}