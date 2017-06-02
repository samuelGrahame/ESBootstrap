using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{	
	public class TableFooter : Widget
	{
		public TableFooter(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableSectionElement(TableSectionType.Footer), typos)
		{

		}
	}
}
