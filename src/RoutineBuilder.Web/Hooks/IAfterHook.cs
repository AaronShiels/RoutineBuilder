using Nancy;
using System.Threading.Tasks;

namespace RoutineBuilder.Web.Hooks
{
    public interface IAfterHook
    {
        Task<Response> After(NancyContext ctx);
    }
}
