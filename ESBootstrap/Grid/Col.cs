using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public static class ColExtentions
	{
		public static Widget ApplyColumns(this Widget widget, params Rule[] colClasses)
		{
			int length;
			if(widget != null && colClasses != null && (length = colClasses.Length) > 0)
			{
				var builder = new StringBuilder();
				
				for(int i = 0; i < length; i++)
				{
					widget.ClassList.Add(colClasses[i].value);
				}								
			}
			return widget;
		}
	}

	public class Col : Widget
	{		
		public Col(Rule[] colClasses, params Union<string, Widget, HTMLElement>[] typos) : base(typos)
		{
			this.ApplyColumns(colClasses);			
		}		

		public Col(List<Rule> colClasses, params Union<string, Widget, HTMLElement>[] typos) : this(colClasses.ToArray(), typos)
		{

		}

		public Col(Rule colClass1, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, Rule colClass4, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3, colClass4 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, Rule colClass4, Rule colClass5, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3, colClass4, colClass5}, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, Rule colClass4, Rule colClass5, Rule colClass6, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, Rule colClass4, Rule colClass5, Rule colClass6, Rule colClass7, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7 }, typos)
		{

		}
		public Col(Rule colClass1, Rule colClass2, Rule colClass3, Rule colClass4, Rule colClass5, Rule colClass6, Rule colClass7, Rule colClass8, params Union<string, Widget, HTMLElement>[] typos) : this(new Rule[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8 }, typos)
		{

		}
	}
}
