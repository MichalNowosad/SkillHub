namespace SkillHub.Web
{
    public static class StartupExtensions
    {
        public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddControllers();

            return builder.Build();
        }

        public static WebApplication ConfigurePipelines(this WebApplication app)
        {
            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            return app;
        }
    }
}
