using Microsoft.AspNet.SignalR;

namespace SignalRDemo
{
    public class PopupCommunicationHub : Hub
    {
        public void SendToken(string clientId, string token)
        {
            Clients.Client(clientId).sendToken(token);
        }
    }
}