using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class Navbar : Widget
	{
		public Navbar(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("nav"))
		{
			Content.ClassName = "navbar navbar-default";

			var container = (new WidgetStyle("container-fluid"));
			
			AppendTypos(container, typos);

			Content.AppendChild(container);

			//this.Content.AddEventListener(EventType.MouseDown, (ev) => {
			//	 ev.StopPropagation();

			//	var x = BootWindowHandle;
			//	var y = Form.GetActiveFormCollection();

			//	for(int i = 0; i < y.VisibleForms.Count; i++)
			//	{
			//		if(Global.ParseInt(y.VisibleForms[i].Body.GetAttribute("bsh")) == x)
			//		{
			//			Form.ActiveForm = y.VisibleForms[i];
			//			return;
			//		}
			//	}
			//	if(Global.ParseInt(y.FormOwner.Body.GetAttribute("bsh")) == x)
			//	{
			//		Form.ActiveForm = y.FormOwner;
			//	}				
			//});
			//this.Content.AddEventListener(EventType.MouseMove, (ev) => { ev.StopPropagation(); });
			//this.Content.AddEventListener(EventType.MouseUp, (ev) => { ev.StopPropagation(); });
		}

		public NavBarTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(NavBarTheme)).As<NavBarTheme>();
			}
			set { SetEnumClassValue(typeof(NavBarTheme), value.ToString("G").ToLower().Replace("_", "-")); }
		}

		public bool Fluid
		{
			get { return GetClassTrue("container-fluid"); }
			set
			{
				SetClassTrue("container", !value);
				SetClassTrue("container-fluid", value);
			}
		}

		public new bool GetClassTrue(string classStr)
		{
			return Content.FirstChild.As<HTMLElement>().ClassList.Contains(classStr);
		}
		public new void SetClassTrue(string classStr, bool value)
		{
			if(value == GetClassTrue(classStr))
			{
				return;
			}
			if(value)
				Content.FirstChild.As<HTMLElement>().ClassList.Add(classStr);
			else
				Content.FirstChild.As<HTMLElement>().ClassList.Remove(classStr);
		}

		public NavBarLocation NavbarLocation
		{
			get
			{
				var x = GetEnumClassValue("navbar-", typeof(NavBarLocation)).As<Enum>();
				if(x == null)
					return NavBarLocation.None;
				else
					return x.As<NavBarLocation>();
			}
			set
			{
				if(value == NavBarLocation.None)
				{
					ClearEnumClassValue("navbar-", typeof(NavBarLocation));
				}
				else
				{
					SetEnumClassValue("navbar-", typeof(NavBarLocation), value.ToString("G").ToLower().Replace("_", "-"));
				}
			}
		}
	}
}
