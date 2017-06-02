using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class TableHeaderCell : Widget
	{
		public TableHeaderCell(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement(), typos)
		{

		}

		public TableHeaderCell(BootRowCellTheme theme, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement() { ClassName = theme.ToString("G") }, typos)
		{

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

		public static void AppendHeaderDataRow(Widget control, params Union<string, Widget, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Widget, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new TableHeaderCell();
					continue;
				}

				if(typos[i].Is<TableHeaderCell>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new TableHeaderCell(typos[i]);
				}

			}
            Widget.AppendTypos(control, list);
		}
	}
}
