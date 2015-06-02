using Nancy;
using System.Threading.Tasks;

namespace RoutineBuilder.Web.Hooks
{
    public interface IErrorHook
    {
        Task<Response> Error(NancyContext ctx);
    }
}
