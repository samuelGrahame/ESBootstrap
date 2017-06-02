using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public class Viewport : Widget
    {
        public Viewport(string width = "device-width", string initial_scale = "1", string maximum_scale = "1", string user_scalable = "") : base(new HTMLMetaElement() { Name = "viewport" }, null)
        {
            SetContent(width, initial_scale, maximum_scale, user_scalable);
        }

        public void SetContent(string width = "device-width", string initial_scale = "1", string maximum_scale = "1", string user_scalable = "")
        {
            this.SetAttribute("content", $"width={width}, initial-scale=1{(user_scalable == "no" ? ", user-scalable=no" : "")}");
        }

        public string GetContent()
        {
            return this.GetAttribute("content");
        }
    }
}
