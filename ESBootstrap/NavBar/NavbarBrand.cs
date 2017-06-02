using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class NavbarBrand : WidgetClickable
	{
		public NavbarBrand(string href = string.Empty, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLAnchorElement() { ClassName = "navbar-brand" }, typos)
		{
			if(!string.IsNullOrWhiteSpace(href))
				this.Content.As<HTMLAnchorElement>().Href = href;
		}
	}
}
