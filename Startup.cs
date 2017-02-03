using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;

using Training4Developers.Interfaces;
using Training4Developers.Data;

using DataModels = Training4Developers.Data.Models;

namespace WidgetsApp
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
            .AddEnvironmentVariables();
                        
            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection");

            // SQLite DbContext
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlite(connectionString));
            services.AddMvc();

            // maps the interface to the concrete class to be injected
            services.AddScoped<IWidgetRepo, WidgetRepo>();
        }

        public void SeedNewDatabase(IApplicationBuilder app) {
        using (var context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>()) {

            if (context.Database.EnsureCreated()) {

            context.AddRange(
                new DataModels.Widget {
                Name = "Red Small Widget", Description = "A red small widget.", Color = "red",
                Size = "small", Quantity = 4, Price = 3.45M
                },

                new DataModels.Widget {
                Name = "Blue Medium Widget", Description = "A blue medium widget.",
                Color = "blue", Size = "medium", Quantity = 6, Price = 2.75M
                },

                new DataModels.Widget {
                Name = "Orange Large Widget", Description = "A orange large widget.",
                Color = "orange", Size = "large", Quantity = 10, Price = 13.65M
                },

                new DataModels.Widget {
                Name = "Yellow Small Widget", Description = "A yellow small widget.",
                Color = "yellow", Size = "small", Quantity = 3, Price = 9.55M
                }
            );

            context.SaveChanges();
            }
        }
        }        

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            SeedNewDatabase(app);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvc(routes => {
                // if no route matches, use the default route, with the following values
                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
                // return home controller index action for client-side routes
                routes.MapRoute("spa-fallback", "{*anything}", new { controller = "Home", action = "Index" });
            });
        }
    }
}
