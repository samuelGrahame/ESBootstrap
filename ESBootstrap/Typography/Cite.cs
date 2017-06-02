using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class Cite : Widget
	{
		public Cite(string title = string.Empty, params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("cite"), typos)
		{
			if(!string.IsNullOrWhiteSpace(title))
				this.Content.Title = title;
		}
	}
}
