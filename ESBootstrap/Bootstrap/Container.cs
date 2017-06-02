using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public class Container : WidgetStyle
    {
        public Container(params Union<string, Widget, HTMLElement>[] typos) : base("container", typos)
        {
            
        }

        public bool Fluid
        {
            get { return GetClassTrue("container-fluid"); }
            set
            {
                SetClassTrue("container", !value);
                SetClassTrue("container-fluid", value);
            }
        }
    }
}
