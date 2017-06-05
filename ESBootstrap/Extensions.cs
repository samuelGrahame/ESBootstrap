using Bridge;
using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public static class Extensions
    {
        public static string ToProperty(this bool value)
        {
            return value ? "true" : "false";
        }

        public static string GetText(this HTMLElement element)
        {
            if (element == null)
                return string.Empty;

            if (element.Is<HTMLInputElement>() && element.As<HTMLInputElement>().Type == InputType.Checkbox)
            {
                return element.As<HTMLInputElement>().Checked.ToString();
            }
            else
            {
                return element.As<HTMLInputElement>().Value;
            }
        }

        public static void SetText(this HTMLElement element, string value)
        {
            if (element == null)
                return;

            if (element.Is<HTMLInputElement>() && element.As<HTMLInputElement>().Type == InputType.Checkbox)
            {
                value = value.ToLower();
                element.As<HTMLInputElement>().Checked = value.IsTrue() == 1;
            }
            else
            {
                element.As<HTMLInputElement>().Value = value;
            }
        }

        public static string ToHtmlValue(this Union<string, int, float> value)
        {
            if (value.Is<string>())
                return value.As<string>();
            else if (value.Is<int>())
                return value.As<int>().ToPx();
            else
                return value.As<float>().ToPx();
        }

        public static int IsTrue(this string value)
        {
            return ((value = value.ToLower()) == "true" || value == "1" || value == "on") ? 1 : 0;
        }

        public static int ToInt(this Union<string, int, float> value)
        {
            return Global.ParseInt(value.As<string>());
        }

        public static float ToFloat(this Union<string, int, float> value)
        {
            return (float)Global.ParseFloat(value.As<string>());
        }

        public static string ToStr(this Union<string, int, float> value)
        {
            return value.As<string>();
        }

        public static bool IsNumber(this object value)
        {
            return value is sbyte
                    || value is byte
                    || value is short
                    || value is ushort
                    || value is int
                    || value is uint
                    || value is long
                    || value is ulong
                    || value is float
                    || value is double
                    || value is decimal;
        }

        public static string ToPx(this object i)
        {
            return Script.Write<string>("i + 'px'");
        }

        public static void Empty(this HTMLElement element)
        {
            /*@
			var len = element.childNodes.length;
			while(len--)
			{
				element.removeChild(element.lastChild);
			};
			*/
        }

        public static Vector2 GetClientMouseLocation(object e)
        {
            var x = 0;
            var y = 0;
            /*@			  
			  if (!e) var e = window.event;

			  if (e.pageX || e.pageY) {
				x = e.pageX;
				y = e.pageY;
			  } else if (e.clientX || e.clientY) {
				x = e.clientX + document.body.scrollLeft + 
								   document.documentElement.scrollLeft;
				y = e.clientY + document.body.scrollTop + 
								   document.documentElement.scrollTop;
			  }
			*/
            return new Vector2(x, y);
        }

        public static void AppendChildren(this Node c, params Node[] Nodes)
        {
            if (Nodes != null && Nodes.Length > 0)
            {
                for (int i = 0; i < Nodes.Length; i++)
                {
                    c.AppendChild(Nodes[i]);
                }
            }
        }

        public static void AppendChildrenTabIndex(this Node c, params Widget[] Nodes)
        {
            if (Nodes != null && Nodes.Length > 0)
            {
                for (int i = 0; i < Nodes.Length; i++)
                {
                    Nodes[i].Content.TabIndex = i;
                    c.AppendChild(Nodes[i]);
                }
            }
        }

        public static void AppendChildrenTabIndex(this Widget c, params Widget[] Nodes)
        { 
            c.Content.AppendChildrenTabIndex(Nodes);
        }

        public static Widget AppendChild(this Widget c, Widget Node)
        {
            c.Content.AppendChild(Node);
            return c;
        }

        public static Widget AppendChildren(this Widget c, params Widget[] Nodes)
        {
            c.Content.AppendChildren(Nodes);

            return c;
        }

        public static void AppendChildren(this Node c, params Widget[] Nodes)
        {
            if (Nodes != null && Nodes.Length > 0)
            {
                for (int i = 0; i < Nodes.Length; i++)
                {
                    c.AppendChild(Nodes[i]);
                }
            }            
        }

        /// <summary>
		/// HtmlEscape XSS
		/// </summary>
		/// <param name="obj"></param>
		/// <returns></returns>
		public static string HtmlEscape(this object obj)
        {
            return (obj as string).HtmlEscape();
        }

        /// <summary>
        /// HtmlUrlUnescape XSS
        /// </summary>
        /// <returns></returns>
        public static string HtmlUrlUnescape(this string input)
        {
            return !string.IsNullOrEmpty(input)
                ? input
                    .Replace("&amp", "&")
                    .Replace("&lt", "<")
                    .Replace("&gt", ">")
                    .Replace("&#x27", "'")
                : "";
        }

        /// <summary>
        /// HtmlUrlEscape XSS
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string HtmlUrlEscape(this string input)
        {
            return !string.IsNullOrEmpty(input)
                ? input
                    .Replace("&", "&amp")
                    .Replace("<", "&lt")
                    .Replace(">", "&gt")
                    .Replace("'", "&#x27")
                : string.Empty;
        }

        /// <summary>
        /// HtmlEscape XSS
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string HtmlEscape(this string input)
        {
            return !string.IsNullOrEmpty(input) ?
                HtmlUrlEscape(input).Replace(@"\/", "&#x2F").Replace("\"", "&quot") :
                string.Empty;
        }

        /// <summary>
        /// HtmlUnescape XSS
        /// </summary>
        /// <returns></returns>
        public static string HtmlUnescape(this string input)
        {
            return !string.IsNullOrEmpty(input) ?
                HtmlUrlUnescape(input).Replace("&#x2F", @"\/").Replace("&quot", "\"") :
                string.Empty;
        }

        public static void ExchangeClass(this Widget control, string oldClass, string newClass)
        {
            ExchangeClass(control.Content, oldClass, newClass);

        }
        public static void ExchangeClass(this HTMLElement control, string oldClass, string newClass)
        {
            if (control.ClassList.Contains(oldClass))
                control.ClassList.Remove(oldClass);
            if (!control.ClassList.Contains(newClass))
                control.ClassList.Add(newClass);
        }

        public static string GetClassTheme(string cls, BootTheme type)
        {
            if (type == BootTheme.None)
                return string.Empty;
            return cls + type.ToString("G").ToLower();
        }
    }
}
