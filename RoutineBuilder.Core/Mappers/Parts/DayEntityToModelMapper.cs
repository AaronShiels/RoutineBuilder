using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class DayEntityToModelMapper : IMapper<Context.Entities.Day, Model.Day>
    {
        IMapper<Context.Entities.Exercise, Model.Exercise> _exerciseEntityToModelMapper;

        public DayEntityToModelMapper(IMapper<Context.Entities.Exercise, Model.Exercise> exerciseEntityToModelMapper)
        {
            _exerciseEntityToModelMapper = exerciseEntityToModelMapper;
        }

        public Model.Day Map(Context.Entities.Day source)
        {
            return new Model.Day
            {
                Exercises = source.Exercises.Select(_exerciseEntityToModelMapper.Map)
            };
        }
    }
}
