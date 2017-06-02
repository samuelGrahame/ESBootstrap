using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
	public class NavbarHeader : WidgetStyle
	{
		public NavbarHeader(params Union<string, Widget, Bridge.Html5.HTMLElement>[] typos) : base("navbar-header", typos)
		{

		}
	}
}
