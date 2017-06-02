using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{	
	public class TableHeaderRow : Widget
	{
		public TableHeaderRow(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableRowElement())
		{
			TableHeaderCell.AppendHeaderDataRow(this, typos);
		}

		public TableHeaderRow(BootRowCellTheme theme, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableRowElement() { ClassName = theme.ToString("G") })
		{
			TableHeaderCell.AppendHeaderDataRow(this, typos);
		}

		public TableHeaderCell HeaderCell(int index)
		{
			return CastElement<TableHeaderCell>(Content.Children[index]);
		}

		public IEnumerable<TableHeaderCell> HeaderCells
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return HeaderCell(i);
				}
			}
		}

		public void ClearTheme()
		{
			ClearEnumClassValue(typeof(BootRowCellTheme));
		}

		public BootRowCellTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(BootRowCellTheme)).As<BootRowCellTheme>();
			}
			set { SetEnumClassValue(typeof(BootRowCellTheme), value.ToString("G").ToLower().Replace("_", "-")); }
		}
	}
}
