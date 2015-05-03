using Nancy.TinyIoc;
using Newtonsoft.Json;
using RoutineBuilder.Core;
using RoutineBuilder.Web.Serializer;

namespace RoutineBuilder.Web.Configuration
{
    public static class CompositionConfig
    {
        public static void RegisterExports(TinyIoCContainer container)
        {
            container.Register<JsonSerializer, CustomCamelCaseJsonSerializer>();
            container.AutoRegister(new[] { CoreParts.Assembly },
                t => t.Namespace.Contains(".Parts"));
        }
    }
}