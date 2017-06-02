using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class WidgetStyle : Widget
	{
		public WidgetStyle(string className, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLDivElement() { ClassName = className }, typos)
		{
			
		}
	}
}
