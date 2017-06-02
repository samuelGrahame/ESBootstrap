using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class Table : Widget
	{
		public TableBody TableBody
		{			
			get { return CastElement<TableBody>(GetSection("tbody")); }
		}

		public bool HasRows()
		{
			var obj = GetSection("tbody");
			return obj != null && obj.ChildElementCount > 0;
		}

		public TableHeader TableHeader
		{
			get { return CastElement<TableHeader>(GetSection("thead")); }
		}

		public bool HasColumns()
		{
			var obj = GetSection("thead");
			return obj != null && obj.ChildElementCount > 0;
		}

		protected HTMLTableSectionElement GetSection(string name)
		{
			name = name.ToLower();
			foreach(var item in this.Content.Children)
			{
				if(item != null && item.TagName.ToLower() == name)
				{
					return (HTMLTableSectionElement)item;
				}
			}
			return null;
		}

		public Table(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLTableElement() { ClassName = "table" }, typos)
		{

		}

		public bool Striped
		{
			get { return GetClassTrue("table-striped"); }
			set
			{
				SetClassTrue("table-striped", value);
			}
		}

		public bool Bordered
		{
			get { return GetClassTrue("table-bordered"); }
			set
			{
				SetClassTrue("table-bordered", value);
			}
		}

		public bool Hover
		{
			get { return GetClassTrue("table-hover"); }
			set
			{
				SetClassTrue("table-hover", value);
			}
		}

		public bool Condensed
		{
			get { return GetClassTrue("table-condensed"); }
			set
			{
				SetClassTrue("table-condensed", value);
			}
		}
	}
}
