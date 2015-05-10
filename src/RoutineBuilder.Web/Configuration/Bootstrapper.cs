using Magnum.Extensions;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.TinyIoc;
using Newtonsoft.Json;
using RoutineBuilder.Core;
using RoutineBuilder.Core.Container;
using RoutineBuilder.Web.Serializer;
using System.Linq;

namespace RoutineBuilder.Web.Configuration
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            StaticConfiguration.DisableErrorTraces = false;
            BundleConfig.RegisterBundlePipeline(pipelines);
        }

        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);

            container.Register<JsonSerializer, CustomCamelCaseJsonSerializer>();

            IoCConventions.FromAssemblies(new[] { CoreParts.Assembly }, t => t.Namespace.Contains(".Parts"))
                          .Where(cd => new[] { LifeTime.PerApplication, LifeTime.PerInstance }.Contains(cd.LifeTime))
                          .Each(cd =>
                          {
                              switch(cd.LifeTime)
                              {
                                  case LifeTime.PerApplication:
                                      container.Register(cd.RegistrationType, cd.ImplementationType).AsSingleton();
                                      break;
                                  case LifeTime.PerInstance:
                                      container.Register(cd.RegistrationType, cd.ImplementationType).AsMultiInstance();
                                      break;
                              }
                          });
        }

        protected override void ConfigureRequestContainer(TinyIoCContainer container, NancyContext context)
        {
            base.ConfigureRequestContainer(container, context);

            IoCConventions.FromAssemblies(new[] { CoreParts.Assembly }, t => t.Namespace.Contains(".Parts"))
                          .Where(cd => cd.LifeTime == LifeTime.PerRequest)
                          .Each(cd =>
                          {
                              container.Register(cd.RegistrationType, cd.ImplementationType).AsSingleton();
                          });
        }

        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            nancyConventions.StaticContentsConventions.AddDirectory("fonts");
        }
    }
}