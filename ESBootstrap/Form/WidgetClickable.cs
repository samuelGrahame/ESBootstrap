using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class WidgetClickable : Widget
	{
		public Action<MouseEvent> OnClick { get { return this.Content.OnClick; } set { this.Content.OnClick = value; } }
		public WidgetClickable(HTMLElement element) : base(element)
		{

		}

		public WidgetClickable(HTMLElement element, params Union<string, Widget, HTMLElement>[] typos) : base(element, typos)
		{

		}


		public bool Dropdown
		{
			get { return GetClassTrue("dropdown-toggle"); }
			set
			{
				if(value)
				{
					SetAttribute("data-toggle", "dropdown");
					SetAttribute("aria-haspopup", "true");
					SetAttribute("aria-expanded", "false");
				}
				else
				{
					SetAttribute("data-toggle", null);
					SetAttribute("aria-haspopup", null);
					SetAttribute("aria-expanded", null);
				}
				SetClassTrue("dropdown-toggle", value);
			}
		}
	}
}
