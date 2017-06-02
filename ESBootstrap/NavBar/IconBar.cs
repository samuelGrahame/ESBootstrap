using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ESBootstrap
{
	public class IconBar : Widget
	{
		public IconBar() : base(new HTMLSpanElement() { ClassName = "icon-bar" })
		{

		}
	}
}
