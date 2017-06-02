using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class Inserted : Widget
	{
		public Inserted(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("ins"), typos)
		{

		}
	}
}
