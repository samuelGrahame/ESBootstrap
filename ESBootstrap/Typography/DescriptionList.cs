using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;


namespace ESBootstrap
{
	public class DescriptionList : Widget
	{
		public DescriptionList(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("dl"), typos)
		{

		}
		
		public bool Horizontal
		{
			get { return GetClassTrue("dl-horizontal"); }
			set
			{
				SetClassTrue("dl-horizontal", value);
			}
		}
	}
}
