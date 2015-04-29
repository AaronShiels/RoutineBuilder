using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class RoutineEntityToModelMapper : IMapper<Context.Entities.Routine, Model.Routine>
    {
        private IMapper<Context.Entities.Week, Model.Week> _weekEntityToModelMapper;

        public RoutineEntityToModelMapper(IMapper<Context.Entities.Week, Model.Week> weekEntityToModelMapper)
        {
            _weekEntityToModelMapper = weekEntityToModelMapper;
        }

        public Model.Routine Map(Context.Entities.Routine source)
        {
            return new Model.Routine
            {
                Id = Encoding.EncodeGuid(source.Id),
                Name = source.Name,
                Description = string.Empty,
                Metadata = new Model.Metadata
                {
                    Colours = JsonConvert.DeserializeObject<Dictionary<string, string>>(source.ColoursSerialized)
                },
                Body = new Model.Body
                {
                    Weeks = source.Weeks.Select(_weekEntityToModelMapper.Map)
                }
            };
        }
    }
}
