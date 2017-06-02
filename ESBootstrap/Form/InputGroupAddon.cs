using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class InputGroupAddon : Widget
	{
		public InputGroupAddon(string _id, params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLSpanElement() { ClassName = "input-group-addon" }, typos)
		{
			if(!string.IsNullOrWhiteSpace(_id))
			{
				if(_id.StartsWith("#"))
					_id = _id.Substring(1);
				Id = _id;
			}
		}
	}
}
