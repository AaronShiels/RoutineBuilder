using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace RoutineBuilder.Web.Configuration
{
    public class CustomJsonSerializer : JsonSerializer
    {
        public CustomJsonSerializer()
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver();
            Formatting = Formatting.Indented;
        }
    }
}