using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public class Program
    {
        public static void Main()
        {
            Document.Head.AppendChild(new Viewport());

            Document.Body.AppendChild(
                new Container(new TextBox()
                {
                    Id = "txtUserName",
                    OnTextChanged = (ev) =>
                    {
                        var txtUserName = Widget.GetWidgetById<TextBox>("txtUserName");
                        Console.WriteLine(txtUserName.Text);
                    }
                })
            );
        }
    }
}
