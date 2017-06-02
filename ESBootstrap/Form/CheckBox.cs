using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class CheckBox : WidgetStyle
	{
		public Action<CheckBox> OnCheckChanged = null;
		
		public CheckBox(string label, bool value = false) : base("checkbox")
		{
			var x = new CheckBoxBase(value);
			AppendTypos(this, new Label(x, label));

			x.OnTextChanged = (obj) => {
				if(OnCheckChanged != null)
					OnCheckChanged(this);
			};
		}
		
		public bool Inline
		{
			get { return GetInline(this, "checkbox"); }
			set
			{
				SetInline(this, "checkbox", value);
			}
		}

		public bool Checked
		{
			get
			{
				return this.Content.FirstChild.FirstChild.As<HTMLInputElement>().Checked.ToString().IsTrue() == 1;
			}
			set
			{
				this.Content.FirstChild.FirstChild.As<HTMLInputElement>().Checked = value;
			}
		}
	}
}
