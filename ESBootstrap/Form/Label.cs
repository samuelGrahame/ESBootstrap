using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class Label : Widget
	{
		public Label(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLLabelElement() { ClassName = "control-label" }, typos)
		{
			
		}
		
		public bool SourceOnly
		{
			get { return GetClassTrue("sr-only"); }
			set
			{
				SetClassTrue("sr-only", value);
			}
		}
		
		public string For
		{
			get { return Content.As<HTMLLabelElement>().HtmlFor; }
			set { Content.As<HTMLLabelElement>().HtmlFor = value; }
		}

	}
}
