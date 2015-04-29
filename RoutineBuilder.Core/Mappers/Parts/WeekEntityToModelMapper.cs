using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers.Parts
{
    public class WeekEntityToModelMapper : IMapper<Context.Entities.Week, Model.Week>
    {
        private IMapper<Context.Entities.Day, Model.Day> _dayEntityToModelMapper;

        public WeekEntityToModelMapper(IMapper<Context.Entities.Day, Model.Day> dayEntityToModelMapper)
        {
            _dayEntityToModelMapper = dayEntityToModelMapper;
        }

        public Model.Week Map(Context.Entities.Week source)
        {
            return new Model.Week
            {
                Days = source.Days.Select(_dayEntityToModelMapper.Map)
            };
        }
    }
}
