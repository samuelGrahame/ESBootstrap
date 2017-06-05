using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class ListItem : Widget
	{
		public ListItem(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("li"), typos)
		{

		}

		public static void AppendItemList(Widget control, params Union<string, Widget, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Widget, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new ListItem();
					continue;
				}

				if(typos[i].Is<ListItem>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new ListItem(typos[i]);
				}

			}
			Widget.AppendTypos(control, list);
		}		

		public bool Dropdown
		{
			get { return GetClassTrue("dropdown"); }
			set
			{
				SetClassTrue("dropdown", value);
			}
		}

		public bool Divider
		{
			get { return GetClassTrue("divider"); }
			set
			{
				if(value)
				{
                    Role = "separator";

                    SetAttribute("role", "separator");
				}else
				{					
					if(Role == "separator")
					{
                        Role = null;                        
					}
				}
				SetClassTrue("divider", value);
			}
		}
	}
}
