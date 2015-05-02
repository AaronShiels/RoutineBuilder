using Newtonsoft.Json;
using System;
using Routine = RoutineBuilder.Core.Models.Routine;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class RoutineModelToEntityMapper : IMapper<Routine, Context.Entities.Routine>
    {
        public Context.Entities.Routine Map(Routine source)
        {
            return new Context.Entities.Routine
            {
                Id = (source.Id == null) ? Guid.NewGuid() : Encoding.DecodeGuid(source.Id),
                Name = source.Name,
                BodySerialized = JsonConvert.SerializeObject(source.Body),
                MetadataSerialized = JsonConvert.SerializeObject(source.Metadata)
            };
        }
    }
}
