using Nancy;
using System.Threading.Tasks;

namespace RoutineBuilder.Web.Hooks
{
    public interface IBeforeHook
    {
        Task<Response> Before(NancyContext ctx);
    }
}
