using SkillHub.Web;

var builder = WebApplication.CreateBuilder(args);
var app = builder
    .ConfigureServices()
    .ConfigurePipelines();

await app.RunAsync();
