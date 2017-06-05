using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public class Fragment
    {
        public DocumentFragment Content;

        public Fragment(params Union<string, Widget, HTMLElement>[] typos)
        {
            Content = Document.CreateDocumentFragment();

            Widget.AppendTypos(Content, typos);
        }

        public static implicit operator Node(Fragment control)
        {            
            return control.Content;
        }
    }
}
