using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ESBootstrap
{
	public class Caret : Widget
	{
		public Caret() : base(new HTMLSpanElement() { ClassName = "caret" })
		{

		}
	}
}
