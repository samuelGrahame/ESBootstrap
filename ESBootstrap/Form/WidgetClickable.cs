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
       
        public string Dismiss
        {
            get { return GetAttribute("data-dismiss"); }
            set { SetAttribute("data-dismiss", value); }
        }

        public string Toggle
        {
            get { return GetAttribute("data-toggle"); }
            set { SetAttribute("data-toggle", value); }
        }

        public string Target
        {
            get { return GetAttribute("data-target"); }
            set { SetAttribute("data-target", value); }
        }
        public bool ToggleModal
        {
            get { return Toggle == "modal"; }
            set
            {
                if (value)
                {
                    Toggle = "modal";
                }
                else
                {
                    Toggle = null;
                }
            }
        }
        
        public bool ModalButton
        {
            get { return Dismiss == "modal"; }
            set {
                if(value)
                {
                    Dismiss = "modal";
                }
                else
                {
                    Dismiss = null;
                }
            }
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
                    Toggle = "dropdown";
                    
                    Aria.HasPopup = true;
                    Aria.Expanded = false;
                }
				else
				{
                    Toggle = null;                    
					
                    Aria.HasPopup = null;
                    Aria.Expanded = null;
                }

				SetClassTrue("dropdown-toggle", value);
			}
		}
	}
}
