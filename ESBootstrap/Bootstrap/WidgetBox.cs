using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ESBootstrap
{
	public class WidgetBox : Widget
	{
        private static Dictionary<HTMLElement, Action<Event>> linkedTextChangedEvents = new Dictionary<HTMLElement, Action<Event>>();

        public Action<Event> OnTextChanged
        {            
            set
            {
                Action<Event> prev = null;

                if (linkedTextChangedEvents.ContainsKey(this.Content))
                    prev = linkedTextChangedEvents[this.Content];

                if(prev != value)
                {                    
                    linkedTextChangedEvents.Remove(this.Content);

                    if (value != null)
                    {                                 
                        linkedTextChangedEvents[this.Content] = value;
                    }                    
                }                
            }
        }

        public Action<KeyboardEvent> OnKeyDown
        {            
            set
            {
                if (value == null)
                {
                    this.Content.OnKeyDown = (kev) => {
                        CheckTextChanged();
                    };
                }
                else
                {
                    if (this.Content.OnKeyDown != value)
                    {
                        this.Content.OnKeyDown = (kev) => {
                            CheckTextChanged();
                            value(kev);
                        };
                    }
                }
            }
        }

        public Action<KeyboardEvent> OnKeyPress
        {            
            set
            {
                if (value == null)
                {
                    this.Content.OnKeyPress = (kev) => {
                        CheckTextChanged();
                    };
                }
                else
                {
                    if (this.Content.OnKeyPress != value)
                    {
                        this.Content.OnKeyPress = (kev) => {
                            CheckTextChanged();
                            value(kev);
                        };
                    }
                }
            }
        }

        public Action<KeyboardEvent> OnKeyUp
        {
            set {
                if(value == null)
                {
                    this.Content.OnKeyUp = (kev) => {
                        CheckTextChanged();
                    };
                }
                else
                {
                    if (this.Content.OnKeyUp != value)
                    {
                        this.Content.OnKeyUp = (kev) => {
                            CheckTextChanged();
                            value(kev);
                        };
                    }
                }
            }
        }        

        public string AriaDescribedBy
		{
			get { return GetAttribute("aria-describedby"); }
			set
			{
				SetAttribute("aria-describedby", value);
			}
		}

		public string AriaLabel
		{
			get { return GetAttribute("aria-label"); }
			set
			{
				SetAttribute("aria-label", value);
			}
		}

		public string Placeholder
		{
			get { return GetAttribute("placeholder"); }
			set
			{
				SetAttribute("placeholder", value);
			}
		}

		public WidgetBox(HTMLElement element) : base(element)
		{            
            OnKeyUp = null;
            OnKeyPress = null;
            OnKeyDown = null;

            this.Content.OnChange = (ev) => {
				CheckTextChanged();
			};						
			this.Content.AddEventListener(EventType.Paste, () =>
			{
				CheckTextChanged();
			});
			this.Content.AddEventListener(EventType.Cut, () => {
				CheckTextChanged();
			});
		}

		private void CheckTextChanged()
		{            
			if(Text != GetAttribute("data-previousText"))
			{                
                Action<Event> action = null;
                if (linkedTextChangedEvents.ContainsKey(this.Content))
                {
                    action = linkedTextChangedEvents[this.Content];
                }                
                if (action != null)
                    action(new Event("onchange"));                
                SetAttribute("data-previousText", Text);
			}
		}
        
        public override void OnAdded()
		{
			base.OnAdded();
            SetAttribute("data-previousText", Text);
        }
        
		public string Text
		{
			get
			{
                this.Content.GetText();
				if(this.Content.Is<HTMLInputElement>() && this.Content.As<HTMLInputElement>().Type == InputType.Checkbox)
				{
					return this.Content.As<HTMLInputElement>().Checked.ToString();
				}
				else
				{
					return this.Content.As<HTMLInputElement>().Value;
				}
			}
			set
			{                
                this.Content.SetText(value);
                CheckTextChanged();
            }
		}
	}
}
