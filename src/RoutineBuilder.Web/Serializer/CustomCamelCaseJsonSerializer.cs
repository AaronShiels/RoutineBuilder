using Newtonsoft.Json;

namespace RoutineBuilder.Web.Serializer
{
    public class CustomCamelCaseJsonSerializer : JsonSerializer
    {
        public CustomCamelCaseJsonSerializer()
        {
            ContractResolver = new CamelCaseExceptDictionaryContractResolver();
            Formatting = Formatting.None;
        }
    }
}