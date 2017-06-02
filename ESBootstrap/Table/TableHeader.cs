using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{	
	public class TableHeader : Widget
	{
		public TableHeader(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableSectionElement(TableSectionType.Header), typos)
		{

		}

		public TableHeaderRow HeaderRow(int index)
		{
			return CastElement<TableHeaderRow>(Content.Children[index]);
		}

		public IEnumerable<TableHeaderRow> HeaderRows
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return HeaderRow(i);
				}
			}
		}
	}
}
