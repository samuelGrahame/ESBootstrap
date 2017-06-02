using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class SourceOnly : Widget
	{
		public SourceOnly(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLSpanElement() { ClassName = "sr-only" }, typos)
		{

		}
	}
}
