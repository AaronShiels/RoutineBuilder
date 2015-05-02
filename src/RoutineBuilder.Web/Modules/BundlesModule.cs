using Nancy;
using SquishIt.Framework;
using System.IO;
using System.Text;

namespace RoutineBuilder.Web.Modules
{
    public class BundlesModule : NancyModule
    {
        public BundlesModule()
            : base("/bundles")
        {
            Get["/js/{name}"] = _ => CreateResponse(Bundle.JavaScript().RenderCached((string)_.name), SquishIt.Framework.Configuration.Instance.JavascriptMimeType);

            Get["/css/{name}"] = _ => CreateResponse(Bundle.Css().RenderCached((string)_.name), SquishIt.Framework.Configuration.Instance.CssMimeType);
        }

        private Response CreateResponse(string content, string contentType)
        {
            return Response
                .FromStream(() => new MemoryStream(Encoding.UTF8.GetBytes(content)), contentType)
                .WithHeader("Cache-Control", "max-age=45");
        }
    }
}