using Newtonsoft.Json.Serialization;
using System;

namespace RoutineBuilder.Web.Serializer
{
    public class CamelCaseExceptDictionaryContractResolver : CamelCasePropertyNamesContractResolver
    {
        protected override JsonDictionaryContract CreateDictionaryContract(Type objectType)
        {
            var contract = base.CreateDictionaryContract(objectType);

            contract.PropertyNameResolver = propertyName => propertyName;

            return contract;
        }
    }
}