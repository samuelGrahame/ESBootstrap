using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;


namespace ESBootstrap
{
	public class TextBox : WidgetBox
	{
		public TextBox(string text, InputType type = InputType.Text) : base(new HTMLInputElement() { Type = Browser.IsIE ? InputType.Text : type, ClassName = "form-control" })
		{			
			if (!string.IsNullOrWhiteSpace(text))
			{
				this.Text = text;
			}
		}
		public TextBox(InputType type = InputType.Text) : this(string.Empty, type)
		{
			
		}
	}
}
