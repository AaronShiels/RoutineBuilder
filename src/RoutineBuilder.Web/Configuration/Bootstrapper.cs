using Nancy;
using Nancy.Bootstrapper;
using Nancy.Bootstrappers.Mef2;
using Newtonsoft.Json;
using RoutineBuilder.Core;
using RoutineBuilder.Web.Serializer;
using System.Composition;
using System.Collections.Generic;
using System.Composition.Convention;
using System.Reflection;
using Alt.Composition;
using Nancy.Responses;

namespace RoutineBuilder.Web.Configuration
{
    public class Bootstrapper : CompositionContextNancyBootstrapper
    {
        protected override void ApplicationStartup(CompositionContext container, IPipelines pipelines)
        {
            StaticConfiguration.DisableErrorTraces = false;
            BundleConfig.RegisterBundles();
        }

        protected override string PerRequestBoundary
        {
            get { return Boundaries.DataConsistency; }
        }

        protected override void ConfigureCompositionConventions(ConventionBuilder conventions)
        {
            conventions.ForTypesMatching(x => x.IsPublic &&
                                              x.Namespace != null &&
                                              x.Namespace.Contains(".Parts"))
                       .ExportInterfaces();

            conventions.ForType<CustomCamelCaseJsonSerializer>().Export<JsonSerializer>();
        }

        protected override void ConfigureCompositionAssemblies(IList<Assembly> assemblies)
        {
            assemblies.Add(typeof(Bootstrapper).Assembly);
            assemblies.Add(CoreParts.Assembly);
        }

        private NancyInternalConfiguration StripDefautSerializer(NancyInternalConfiguration config)
        {
            config.Serializers.Remove(typeof(DefaultJsonSerializer));
            return config;
        }

        protected override NancyInternalConfiguration InternalConfiguration
        {
            get
            {
                return StripDefautSerializer(base.InternalConfiguration);
            }
        }
    }
}