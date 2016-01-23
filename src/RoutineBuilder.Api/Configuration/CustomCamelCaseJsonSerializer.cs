using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;

namespace RoutineBuilder.Api.Configuration
{
    public class CustomCamelCaseJsonSerializer : JsonSerializer
    {
        public CustomCamelCaseJsonSerializer()
        {
            ContractResolver = new CamelCaseExceptDictionaryContractResolver();
            Formatting = Formatting.None;
        }

        private class CamelCaseExceptDictionaryContractResolver : CamelCasePropertyNamesContractResolver
        {
            protected override JsonDictionaryContract CreateDictionaryContract(Type objectType)
            {
                var contract = base.CreateDictionaryContract(objectType);
                contract.PropertyNameResolver = propertyName => propertyName;

                return contract;
            }
        }
    }
    
}