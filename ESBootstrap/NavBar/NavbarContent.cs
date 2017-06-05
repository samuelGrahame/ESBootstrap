using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class NavbarContent : WidgetStyle
	{
		public NavbarContent(string _id, params Union<string, Widget, HTMLElement>[] typos) : base("collapse navbar-collapse", typos)
		{
			if(!string.IsNullOrWhiteSpace(_id))
			{
				if(_id.StartsWith("#"))
					_id = _id.Substring(1);
				Id = _id;
			}
            if (Navbar.AutoDetectNavBarItems)
            {
                foreach (var item in typos)
                {
                    if (item.Is<UnorderedList>())
                    {
                        item.As<UnorderedList>().Nav = true;
                    }
                }
            }            
        }
	}
}
