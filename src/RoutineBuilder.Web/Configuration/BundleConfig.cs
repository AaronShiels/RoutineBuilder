using SquishIt.Framework;

namespace RoutineBuilder.Web.Configuration
{
    public static class BundleConfig
    {
        public static void RegisterBundles()
        {
            Bundle.Css()
                .Add("~/Content/bootstrap.css")
                .Add("~/Content/font-awesome.css")
                .Add("~/Content/site.css")
                .WithMinifier<SquishIt.Framework.Minifiers.CSS.YuiMinifier>()
                .AsCached("styles", "~/bundles/css/styles");

            Bundle.JavaScript()
                .Add("~/Scripts/jquery-2.1.3.js")
                .Add("~/Scripts/bootstrap.js")
                .Add("~/Scripts/angular.js")
                .Add("~/Scripts/angular-route.js")
                .Add("~/Scripts/angular-ui/ui-bootstrap.js")
                .Add("~/Scripts/app/")
                .Add("~/Scripts/app/home/")
                .Add("~/Scripts/app/view/")
                .Add("~/Scripts/app/services/")
                .WithMinifier<SquishIt.Framework.Minifiers.JavaScript.MsMinifier>()
                .AsCached("scripts", "~/bundles/js/scripts");
        }
    }
}