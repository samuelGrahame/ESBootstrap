using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;


namespace ESBootstrap
{
	public class Heading : Widget
	{
		public Heading(HeadingType ht, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLHeadingElement(ht), typos)
		{
            
        }
        public bool ModalTitle
        {
            get { return GetClassTrue("modal-title"); }
            set
            {
                SetClassTrue("modal-title", value);
            }
        }

    }
}
