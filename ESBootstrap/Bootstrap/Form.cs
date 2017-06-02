using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class Form : Widget
	{
		public Form(BootFormType formType = BootFormType.None, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLFormElement())
		{			
			if(formType != BootFormType.None)
				Content.ClassName = "form-" + formType.ToString("G").ToLower();
			FormGroup.AppendGroupList(this, typos);			
		}

		public bool Navbar
		{
			get { return GetClassTrue("navbar-form"); }
			set
			{
				SetClassTrue("navbar-form", value);
			}
		}
	}
}
