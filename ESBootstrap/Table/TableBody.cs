using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{	
	public class TableBody : Widget
	{
		public TableBody(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableSectionElement(TableSectionType.Body), typos)
		{

		}

		public TableRow Row(int index)
		{
			return CastElement<TableRow>(Content.Children[index]);
		}

		public IEnumerable<TableRow> Rows
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return Row(i);
				}
			}
		}
	}
}
