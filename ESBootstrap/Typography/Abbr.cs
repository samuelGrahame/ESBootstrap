using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class Abbr : Widget
	{
		public Abbr(string title = string.Empty, params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("abbr"), typos)
		{
			if(!string.IsNullOrWhiteSpace(title))
				this.Content.Title = title;
		}

		public bool Initialism
		{
			get { return GetClassTrue("initialism"); }
			set
			{
				SetClassTrue("initialism", value);
			}
		}
	}
}
