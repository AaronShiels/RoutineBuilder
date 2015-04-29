using Nancy;
using RoutineBuilder.Core;
using RoutineBuilder.Core.Context;
using RoutineBuilder.Core.Mappers;
using RoutineBuilder.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RoutineEntity = RoutineBuilder.Core.Context.Entities.Routine;

namespace RoutineBuilder.Web.Modules
{
    public class RoutineModule : NancyModule
    {
        public RoutineModule(IRoutineBuilderDbContext db, IMapper<RoutineEntity, Routine> routineEntityToModelMapper)
            : base("/routine")
        {
            Get["/list"] = _ =>
            {
                var routineList = db.Query(new RoutineEntity.All())
                                   .Select(r => new { r.Id, r.Name })
                                   .ToDictionary(r => Encoding.EncodeGuid(r.Id), r => r.Name);

                return Response.AsJson(routineList);
            };

            Get["/{routineId}"] = _ =>
            {
                var routineId = Encoding.DecodeGuid(_.routineId);
                var routine = db.Query(new RoutineEntity.ById(routineId))
                                .ToList()
                                .Select(routineEntityToModelMapper.Map)
                                .SingleOrDefault();

                if (routine == null)
                    return new Response();

                return Response.AsJson(routine);
            };
        }
    }
}