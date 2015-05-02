using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoutineBuilder.Core.Mappers
{
    public interface IMapper<in TFrom, out TTo>
    {
        TTo Map(TFrom source);
    }
}
