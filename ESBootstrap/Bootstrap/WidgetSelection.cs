using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class WidgetSelection : Widget
	{
		public WidgetSelection(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLDivElement() { ClassName = "selection" }, typos)
		{
			
		}
	}
}
