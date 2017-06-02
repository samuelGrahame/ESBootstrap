using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
	public class InputGroup : WidgetStyle
	{
		public InputGroup(params Union<string, Widget, Bridge.Html5.HTMLElement>[] typos) : base("input-group", typos)
		{

		}

		public BootSize InputSize
		{
			get
			{
				var x = GetEnumClassValue("input-group-", typeof(BootSize)).As<Enum>();
				if(x == null)
					return BootSize.None;
				else
					return x.As<BootSize>();
			}
			set
			{
				if(value == BootSize.None)
				{
					ClearEnumClassValue("input-group-", typeof(BootSize));
				}
				else
				{
					SetEnumClassValue("input-group-", typeof(BootSize), value.ToString("G").ToLower().Replace("_", "-"));
				}
			}
		}

	}
}
