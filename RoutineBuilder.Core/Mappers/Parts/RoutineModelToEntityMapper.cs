using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class RoutineModelToEntityMapper : IMapper<Model.Routine, Context.Entities.Routine>
    {
        private IMapper<Model.Week, Context.Entities.Week> _weekModelToEntityMapper;

        public RoutineModelToEntityMapper(IMapper<Model.Week, Context.Entities.Week> weekModelToEntityMapper)
        {
            _weekModelToEntityMapper = weekModelToEntityMapper;
        }

        public Context.Entities.Routine Map(Model.Routine source)
        {
            return new Context.Entities.Routine
            {
                Id = Encoding.DecodeGuid(source.Id),
                Name = source.Name,
                ColoursSerialized = JsonConvert.SerializeObject(source.Metadata.Colours),
                Weeks = source.Body.Weeks.Select(_weekModelToEntityMapper.Map).ToList()
            };
        }
    }
}
