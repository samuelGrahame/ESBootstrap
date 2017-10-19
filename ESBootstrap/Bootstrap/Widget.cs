using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
	public class Widget
	{
        public HTMLElement Content;

        public CSSStyleDeclaration Style => Content.Style;
        public DOMTokenList ClassList => Content.ClassList;
        public HTMLCollection Children => Content.Children;

        private Aria aria;



        public string Role
        {
            get {                
                return GetAttribute("role"); }
            set { SetAttribute("role", value); }
        }

        public string Title
        {
            get { return GetAttribute("title"); }
            set { SetAttribute("title", value); }
        }

        public Aria Aria
        {
            get { return aria ?? (aria = new Aria(this.Content)); }            
        }
        
        public bool HasAdded = false;

        public virtual void OnAdded()
        {
            HasAdded = true;
        }

        public void Focus()
        {
            this.Content.Focus();
        }

        public void Blur()
        {
            
            this.Content.Blur();
        }

        public string Id
		{
			get { return Content.Id; }
			set { Content.Id = value; }
		}

        public string GetAttribute(string name)
        {
            return this.Content.GetAttribute(name);
        }
        public int GetAttributei(string name)
        {
            return Global.ParseInt(this.Content.GetAttribute(name));
        }
        public float GetAttributef(string name)
        {
            return (float)Global.ParseFloat(this.Content.GetAttribute(name));
        }

        public Widget SetAttribute(string name, Union<string, int, float> value)
        {
            this.Content.SetAttribute(name, value.ToStr());

            return this;
        }        

		public static Widget GetWidgetById(string id)
		{
			var widget = Document.GetElementById(id);
			if(widget == null)
				return null;
			return new Widget(widget);
		}

		public static T GetWidgetById<T>(string id) where T : Widget
        {
			return CastElement<T>(Document.GetElementById(id));			
		}        

		public static T CastElement<T>(HTMLElement widget) where T : Widget            
		{
			if(widget == null)
				return default(T);
			var x = Activator.CreateInstance<T>();
			x.Content = widget;
			return x;
		}
		
		public Enum GetEnumClassValue(Type type)
		{
			return GetEnumClassValue(string.Empty, type);			
		}

		public void ClearEnumClassValue(Type type)
		{
			ClearEnumClassValue(string.Empty, type);			
		}
		
		public int TabIndex
		{
			get { return Content.TabIndex; }
			set { Content.TabIndex = value; }
		}

		public void SetEnumClassValue(Type type, string value)
		{
			SetEnumClassValue(string.Empty, type, value);			
		}

		public Enum GetEnumClassValue(string prefix, Type type)
		{
			var names = Enum.GetNames(type);
			for(int i = 0; i < names.Length; i++)
			{
				foreach(var item1 in this.ClassList)
				{
					if(item1 == prefix + names[i].ToLower().Replace("_", "-"))
						return Enum.GetValues(type)[i].As<Enum>();
				}
			}
			return null;
		}

		public bool Active
		{
			get { return GetClassTrue("active"); }
			set
			{
				SetClassTrue("active", value);
			}
		}

		public bool Disabled
		{
			get { return GetClassTrue("disabled"); }
			set
			{
				SetClassTrue("disabled", value);
			}
		}

		public void ClearEnumClassValue(string prefix, Type type)
		{
			var names = Enum.GetNames(type);
			for(int i = 0; i < names.Length; i++)
			{
				this.ClassList.Remove(prefix + names[i].ToLower().Replace("_", "-"));
			}
		}

		public void SetEnumClassValue(string prefix, Type type, string value)
		{
			ClearEnumClassValue(prefix, type);
			this.ClassList.Add(prefix + value);
		}

		public bool GetClassTrue(string classStr)
		{
			return ClassList.Contains(classStr);
		}
		public void SetClassTrue(string classStr, bool value)
		{
			if(value == GetClassTrue(classStr))
			{
				return;
			}
			if(value)
				ClassList.Add(classStr);
			else
				ClassList.Remove(classStr);
		}

        public static implicit operator Node(Widget control)
        {            
            if (!control.HasAdded)
                control.OnAdded();
            return control.Content;
        }

        public Widget(params Union<string, Widget, HTMLElement>[] typos) : this(new HTMLDivElement(), typos)
		{
			
		}
		
		public Widget(HTMLElement element, params Union<string, Widget, HTMLElement>[] typos)
		{
            Content = element;
			AppendTypos(this, typos);			
		}        

		public static void AppendTypos(Widget control, params Union<string, Widget, HTMLElement>[] typos)
		{
			AppendTypos(control.Content, typos);
		}

		public static void AppendTypos(HTMLElement control, params Union<string, Widget, HTMLElement>[] typos)
		{
			if(typos != null)
			{
				int length = typos.Length;
				for(int i = 0; i < length; i++)
				{
					if(typos[i].Is<string>())
						control.AppendChild(Document.CreateTextNode((string)typos[i]));
					else if(typos[i].Is<Widget>())
						control.AppendChild((Widget)typos[i]);
					else if(typos[i].Is<HTMLElement>())
						control.AppendChild((HTMLElement)typos[i]);
				}
			}
		}

        public static void AppendTypos(Node control, params Union<string, Widget, HTMLElement>[] typos)
        {
            if (typos != null)
            {
                int length = typos.Length;
                for (int i = 0; i < length; i++)
                {
                    if (typos[i].Is<string>())
                        control.AppendChild(Document.CreateTextNode((string)typos[i]));
                    else if (typos[i].Is<Widget>())
                        control.AppendChild((Widget)typos[i]);
                    else if (typos[i].Is<HTMLElement>())
                        control.AppendChild((HTMLElement)typos[i]);
                }
            }
        }

        public string ContextualText
		{
			get {
				return GetContextual("text-");				
			}
			set {
				SetContextual("text-", value);
			}
		}

		public string ContextualBackground
		{
			get
			{
				return GetContextual("bg-");
			}
			set
			{				
				SetContextual("bg-", value);
			}
		}

		public static bool GetInline(Widget control, string type)
		{
			return control.ClassList.Contains(type + "-inline");
		}
		public static void SetInline(Widget control, string type, bool value)
		{
			if(GetInline(control, type) != value)
			{
				if(value)
					control.ExchangeClass(type, type + "-inline");
				else
					control.ExchangeClass(type + "-inline", type);
			}			
		}
		
		internal string GetContextual(string type)
		{
			int length = ClassList.Length;
			for(int i = 0; i < length; i++)
			{
				if(ClassList[i].StartsWith(type))
					return ClassList[i];
			}
			return string.Empty;
		}

		internal void SetContextual(string type, string value)
		{
			int length = ClassList.Length;
			for(int i = 0; i < length; i++)
			{
				if(ClassList[i].StartsWith(type))
				{
					ClassList.Remove(ClassList[i]);
					break;
				}
			}
			if(!string.IsNullOrWhiteSpace(value) && value.StartsWith(type))
			{
				ClassList.Add(value);
			}
		}
		
		public NavBarPosition NavBarPosition
		{
			get
			{
				var x = GetEnumClassValue(typeof(NavBarPosition)).As<Enum>();
				if(x == null)
					return NavBarPosition.None;
				else
					return x.As<NavBarPosition>();
			}
			set {
				if(value == NavBarPosition.None)
					ClearEnumClassValue(typeof(NavBarPosition));
				else
					SetEnumClassValue(typeof(NavBarPosition), value.ToString("G").ToLower().Replace("_", "-")); }
		}

        public Union<string, int, float> Width
        {
            get { return this.Content.Style.Width; }
            set
            {
                this.Content.Style.Width = value.ToHtmlValue();
            }
        }

        public Union<string, int, float> Height
        {
            get { return this.Content.Style.Height; }
            set
            {
                this.Content.Style.Height = value.ToHtmlValue();
            }
        }

        public Union<string, int, float> Left
        {
            get { return this.Content.Style.Left; }
            set
            {
                this.Content.Style.Left = value.ToHtmlValue();
            }
        }

        public Union<string, int, float> Top
        {
            get { return this.Content.Style.Top; }
            set
            {
                this.Content.Style.Top = value.ToHtmlValue();
            }
        }

        public Vector2 Size
        {
            get { return new Vector2(this.Width, this.Height); }
            set
            {
                this.Width = value.X;
                this.Height = value.Y;
            }
        }

        public Vector2 Location
        {
            get { return new Vector2(this.Left, this.Top); }
            set
            {
                this.Left = value.X;
                this.Top = value.Y;
            }
        }

        public Vector4 Bounds
        {
            get { return new Vector4(this.Left, this.Top, this.Width, this.Height); }
            set
            {
                this.Left = value.X;
                this.Top = value.Y;
                this.Width = value.Z;
                this.Height = value.M;
            }
        }

        public DataPlacement Placement
        {
            get
            {
                string value = GetAttribute("data-placement");

                var names = Enum.GetNames(typeof(DataPlacement));
                var values = Enum.GetValues(typeof(DataPlacement));

                for (int i = 0; i < names.Length; i++)
                {
                    if(value == names[i].ToLower())
                    {
                        return (DataPlacement)values[i];
                    }
                }

                return DataPlacement.None;                
            }
            set
            {
                if (value == DataPlacement.None)
                {
                    SetAttribute("data-placement", null);                    
                }
                else
                {
                    SetAttribute("data-placement", value.ToString("G").ToLower());                    
                }
            }
        }
    }

	public static class Contextual
	{
		public static class Text
		{
			public const string Muted = "text-muted";
			public const string Primary = "text-primary";
			public const string Success = "text-success";
			public const string Info = "text-info";
			public const string Warning = "text-warning";
			public const string Danger = "text-danger";
		}

		public static class Background
		{			
			public const string Primary = "bg-primary";
			public const string Success = "bg-success";
			public const string Info = "bg-info";
			public const string Warning = "bg-warning";
			public const string Danger = "bg-danger";
		}
	}
}
