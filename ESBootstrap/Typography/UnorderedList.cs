using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class UnorderedList : Widget
	{
		public UnorderedList(params Union<string, Widget, HTMLElement>[] typos) : base(Document.CreateElement("ul"), typos)
		{
			ListItem.AppendItemList(this, typos);
		}
		
		public bool Unstyled
		{
			get { return GetClassTrue("list-unstyled"); }
			set
			{
				SetClassTrue("list-unstyled", value);
			}
		}

		public bool Inline
		{
			get { return GetClassTrue("list-inline"); }
			set
			{
				SetClassTrue("list-inline", value);
			}
		}

		private void ApplyDataAttribute(HTMLElement htmlElement, bool value)
		{
			if(htmlElement == null)
				return;
			var length = htmlElement.ChildElementCount;
			for(int i = 0; i < length; i++)
			{
				var child = htmlElement.Children[i];
				if(child.ChildElementCount > 0)
					ApplyDataAttribute(child, value);

				if(!(child.TagName.ToUpper() == "A" && 
					!child.ClassList.Contains("dropdown-toggle") && 
					child.ParentElement != null && 
					child.ParentElement.TagName.ToUpper() == "LI"))
					continue;					
				if(value)
				{
					child.SetAttribute("data-toggle", "collapse");
					child.SetAttribute("data-target", ".navbar-collapse.in");
				}
				else
				{                    
					child.SetAttribute("data-toggle", "");
					child.SetAttribute("data-target", "");
				}
			}
		}

		public bool Nav
		{
			get { return GetClassTrue("nav") && GetClassTrue("navbar-nav"); }
			set
			{
                if(Nav != value)
                {
                    SetClassTrue("nav", value);
                    SetClassTrue("navbar-nav", value);
                    ApplyDataAttribute(this.Content, value);
                }				
			}
		}

		public bool DropdownMenu
		{
			get { return GetClassTrue("dropdown-menu");  }
			set
			{
				SetClassTrue("dropdown-menu", value);				
			}
		}
	}
}
