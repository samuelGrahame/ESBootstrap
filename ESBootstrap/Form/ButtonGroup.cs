using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
	public class ButtonGroup : WidgetStyle
	{
		public ButtonGroup(params Union<string, Widget, Bridge.Html5.HTMLElement>[] typos) : base("btn-group", typos)
		{
            Role = "group";			
		}

		public BootSize ButtonSize
		{
			get
			{
				var x = GetEnumClassValue("btn-group-", typeof(BootSize)).As<Enum>();
				if(x == null)
					return BootSize.None;
				else
					return x.As<BootSize>();
			}
			set
			{
				if(value == BootSize.None)
				{
					ClearEnumClassValue("btn-group-", typeof(BootSize));
				}
				else
				{
					SetEnumClassValue("btn-group-", typeof(BootSize), value.ToString("G").ToLower().Replace("_", "-"));
				}
			}
		}

		public bool Vertical
		{
			get { return GetClassTrue("btn-group-vertical"); }
			set
			{
				SetClassTrue("btn-group", !value);
				SetClassTrue("btn-group-vertical", value);
			}
		}

		public bool Justified
		{
			get { return GetClassTrue("btn-group-justified"); }
			set
			{				
				SetClassTrue("btn-group-justified", value);
			}
		}

		public bool Dropup
		{
			get { return GetClassTrue("dropup"); }
			set
			{				
				SetClassTrue("dropup", value);
			}
		}
	}
}
