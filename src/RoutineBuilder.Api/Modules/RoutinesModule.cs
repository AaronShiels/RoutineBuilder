using Nancy;
using System.Threading.Tasks;

namespace RoutineBuilder.Api.Modules
{
    public class RoutinesModule : NancyModule
    {
        public RoutinesModule() : base("/api/routines")
        {
            Get["/", true] = async (ctx, ct) => await GetRoutines();
        }

        private async Task<Response> GetRoutines()
        {
            var testRoutines = new[]
            {
                new { Id = "ab", Name = "Strong Lifts 5x5"},
                new { Id = "cd", Name = "Mad Cow" },
                new { Id = "ef", Name = "Stupid Yoga" }
            };

            return Response.AsJson(testRoutines);
        }
    }
}