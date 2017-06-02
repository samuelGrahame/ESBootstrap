using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class FormGroup : WidgetStyle
	{
		public FormGroup(params Union<string, Widget, HTMLElement>[] typos) : base("form-group", typos)
		{
			
		}

		public static void AppendGroupList(Widget control, params Union<string, Widget, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Widget, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new FormGroup();
					continue;
				}

				if(typos[i].Is<FormGroup>() || typos[i].Is<BootFormType>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new FormGroup(typos[i]);
				}

			}
			Widget.AppendTypos(control, list);
		}
	}
}
