using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;



namespace ESBootstrap
{
	public class ParagraphList : Widget
	{
		public ParagraphList(params Union<string, Widget, HTMLElement>[] typos) : base(new HTMLDivElement())
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Widget, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new Paragraph();
					continue;
				}
					
				if(typos[i].Is<Paragraph>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new Paragraph(typos[i]);
				}
				
			}
			Widget.AppendTypos(this, list);
		}
	}
}
