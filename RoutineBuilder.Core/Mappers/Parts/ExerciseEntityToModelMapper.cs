using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class ExerciseEntityToModelMapper : IMapper<Context.Entities.Exercise, Model.Exercise>
    {
        public Model.Exercise Map(Context.Entities.Exercise source)
        {
            return new Model.Exercise
            {
                Name = source.Name,
                Description = source.Description
            };
        }
    }
}
