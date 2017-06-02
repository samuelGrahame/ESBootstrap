using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class TableCell : Widget
	{
		public TableCell(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableDataCellElement(), typos)
		{

		}

		public TableCell(BootRowCellTheme theme, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableDataCellElement() { ClassName = theme.ToString("G") }, typos)
		{

		}

		public static void AppendDataRow(Widget control, params Union<string, Widget, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Widget, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new TableCell();
					continue;
				}

				if(typos[i].Is<TableCell>())
				{
					list[i] = typos[i];
				}else if (typos[i].Is<TableHeader>())
				{
					var x = ((TableHeader)typos[i]);
					list[i] = x;
					x.Content.SetAttribute("scope", "row");
				}
				else
				{
					list[i] = new TableCell(typos[i]);
				}

			}
			Widget.AppendTypos(control, list);
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
