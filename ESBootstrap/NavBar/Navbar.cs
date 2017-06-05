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
        public static bool AutoDetectNavBarItems = true;
		public Navbar(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("nav"), new Container(typos))
		{
			Content.ClassName = "navbar navbar-default";            
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

        public static string FixedPaddingOffset = "70px";

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
                    if (string.IsNullOrWhiteSpace(FixedPaddingOffset))
                        return;
                    if(NavbarLocation == NavBarLocation.Fixed_Top)
                    {                        
                        Document.Body.Style.PaddingTop = FixedPaddingOffset;
                    }else if (NavbarLocation == NavBarLocation.Fixed_Bottom)
                    {                        
                        Document.Body.Style.PaddingBottom = FixedPaddingOffset;
                    }
                }
			}
		}
	}
}
