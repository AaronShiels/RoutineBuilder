using Newtonsoft.Json;
using RoutineBuilder.Core.Models;
using Routine = RoutineBuilder.Core.Models.Routine;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class RoutineEntityToModelMapper : IMapper<Context.Entities.Routine, Routine>
    {
        public Routine Map(Context.Entities.Routine source)
        {
            return new Routine
            {
                Id = Encoding.EncodeGuid(source.Id),
                Name = source.Name,
                Description = string.Empty,
                Metadata = JsonConvert.DeserializeObject<Metadata>(source.MetadataSerialized),
                Body = JsonConvert.DeserializeObject<Body>(source.BodySerialized)
            };
        }
    }
}
