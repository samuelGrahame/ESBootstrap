using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ESBootstrap
{
	internal class CheckBoxBase : WidgetBox
	{
		public CheckBoxBase(bool value = false) : base(new HTMLInputElement() { Type = InputType.Checkbox })
		{
			Checked = value;
		}

		public bool Checked
		{
			get
			{
				return this.Content.As<HTMLInputElement>().Checked.ToString().IsTrue() == 1;
			}
			set
			{
				this.Content.As<HTMLInputElement>().Checked = value;
			}
		}
	}
}
