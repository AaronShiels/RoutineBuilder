using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace RoutineBuilder.Api.Configuration
{
    public static class StaticFiles
    {
        private const string _webApplicationRoot = @"./app";
        private const string _defaultFile = "index.html";

        public static IAppBuilder UseWebAppFileServer(this IAppBuilder app)
        {
            var physicalFileSystem = new PhysicalFileSystem(_webApplicationRoot);
            var options = new FileServerOptions
            {
                EnableDefaultFiles = true,
                FileSystem = physicalFileSystem
            };
            options.StaticFileOptions.FileSystem = physicalFileSystem;
            options.StaticFileOptions.ServeUnknownFileTypes = true;
            options.DefaultFilesOptions.DefaultFileNames = new[] { _defaultFile };

            return app.UseFileServer(options);
        }
    }
}