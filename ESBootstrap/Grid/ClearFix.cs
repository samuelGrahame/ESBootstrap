using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class ClearFix : WidgetStyle
	{
		public ClearFix(RuleTier tier, params Union<string, Widget, HTMLElement>[] typos) : base(Script.Write<string>("'clearfix visible' + tier.value + 'block'"), typos)
		{

		}
	}
}
