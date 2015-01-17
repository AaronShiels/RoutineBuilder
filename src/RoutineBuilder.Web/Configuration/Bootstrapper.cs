using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Configuration
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(Nancy.TinyIoc.TinyIoCContainer container, Nancy.Bootstrapper.IPipelines pipelines)
        {
            BundleConfig.RegisterBundlePipeline(pipelines);

            base.ApplicationStartup(container, pipelines);
        }

        protected override void ConfigureApplicationContainer(Nancy.TinyIoc.TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);
        }
    }
}