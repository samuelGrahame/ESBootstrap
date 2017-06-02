using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;




namespace ESBootstrap
{
	public class PanelBody : WidgetStyle
	{
		public PanelBody(params Union<string, Widget, HTMLElement>[] typos) : base("panel-body", typos)
		{
			
		}
	}
}
