using Microsoft.Owin;
using Owin;
using SignalRDemo;

[assembly: OwinStartup(typeof(Startup))]

namespace SignalRDemo
{
    public class Startup
    {
        public static void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}