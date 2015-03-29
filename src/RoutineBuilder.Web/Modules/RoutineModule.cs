using Nancy;
using RoutineBuilder.Core;
using RoutineBuilder.Core.Context;
using RoutineBuilder.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoutineBuilder.Web.Modules
{
    public class RoutineModule : NancyModule
    {
        public RoutineModule(IRoutineBuilderDbContext db)
            : base("/routine")
        {
            Get["/list"] = _ =>
            {
                var routineIds = db.Query(new Routine.All())
                                   .Select(r => r.Id)
                                   .ToList()
                                   .Select(id => Encoding.EncodeGuid(id))
                                   .ToArray();

                return Response.AsJson(routineIds);
            };

            Get["/{routineId}"] = _ =>
            {
                var routineId = Encoding.DecodeGuid(_.routineId);
                var routine = db.Query(new Routine.ById(routineId)).SingleOrDefault();

                if (routine == null)
                    return new Response();

                var response = (Response)routine.Data;
                response.ContentType = "application/json";

                return response;
            };
        }
    }
}