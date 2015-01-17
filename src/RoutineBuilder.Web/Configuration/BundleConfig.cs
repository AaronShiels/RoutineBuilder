using Nancy;
using Nancy.Bootstrapper;
using SquishIt.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Configuration
{
    public static class BundleConfig
    {
        public static void RegisterBundlePipeline(IPipelines pipelines)
        {
            RegisterBundles();
            pipelines.BeforeRequest += ctx => RegisterPipeline(ctx);
        }

        private static void RegisterBundles()
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
                .Add("~/Scripts/App/")
                .WithMinifier<SquishIt.Framework.Minifiers.JavaScript.MsMinifier>()
                .AsCached("scripts", "~/bundles/js/scripts");
        }

        private static Response RegisterPipeline(NancyContext ctx)
        {
            ctx.ViewBag.Styles = Bundle.Css().RenderCachedAssetTag("styles");
            ctx.ViewBag.Scripts = Bundle.JavaScript().RenderCachedAssetTag("scripts");
            return null;
        }
    }
}