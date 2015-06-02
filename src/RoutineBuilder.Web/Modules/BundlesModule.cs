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
            Get["/js/{name}"] = _ => ServeJavaScript(_.name);

            Get["/css/{name}"] = _ => ServeCss(_.name);
        }

        private Response ServeJavaScript(string name)
        {
            return CreateResponse(Bundle.JavaScript().RenderCached(name), SquishIt.Framework.Configuration.Instance.JavascriptMimeType);
        }

        private Response ServeCss(string name)
        {
            return CreateResponse(Bundle.Css().RenderCached(name), SquishIt.Framework.Configuration.Instance.CssMimeType);
        }

        private Response CreateResponse(string content, string contentType)
        {
            return Response
                .FromStream(() => new MemoryStream(Encoding.UTF8.GetBytes(content)), contentType)
                .WithHeader("Cache-Control", "max-age=45");
        }
    }
}