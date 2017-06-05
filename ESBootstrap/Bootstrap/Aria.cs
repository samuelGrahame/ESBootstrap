using Bridge.Html5;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESBootstrap
{
    public class Aria
    {
        private HTMLElement owner;
        public Aria(HTMLElement element)
        {
            owner = element;
        }
        
        public bool Atomic
        {
            get { return owner.GetAttribute("aria-atomic") == "true"; }
            set {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-atomic", value.ToProperty());                
            }
        }

        public bool Busy
        {
            get { return owner.GetAttribute("aria-busy") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-busy", value.ToProperty());
            }
        }

        public string Controls
        {
            get { return owner.GetAttribute("aria-controls"); }
            set
            {
                owner.SetAttribute("aria-controls", value);
            }
        }

        public string DescribedBy
        {
            get { return owner.GetAttribute("aria-describedby"); }
            set
            {
                owner.SetAttribute("aria-describedby", value);
            }
        }

        public bool Disabled
        {
            get { return owner.GetAttribute("aria-disabled") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-disabled", value.ToProperty());
            }
        }

        public string DropEffect
        {
            get { return owner.GetAttribute("aria-dropeffect"); }
            set
            {
                owner.SetAttribute("aria-dropeffect", value);
            }
        }

        public string FlowTo
        {
            get { return owner.GetAttribute("aria-flowto"); }
            set
            {
                owner.SetAttribute("aria-flowto", value);
            }
        }

        public bool? Grabbed
        {
            get { return owner.GetAttribute("aria-disabled") == null ? null : new bool?(owner.GetAttribute("aria-disabled") == "true"); }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-disabled", value == null ? null : value.Value.ToProperty());
            }
        }

        public bool? HasPopup
        {
            get { return owner.GetAttribute("aria-haspopup") == null ? null : new bool?(owner.GetAttribute("aria-haspopup") == "true"); }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-haspopup", value == null ? null : value.Value.ToProperty());
            }
        }

        public bool Hidden
        {
            get { return owner.GetAttribute("aria-hidden") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-haspopup", value.ToProperty());
            }
        }

        public string Invalid
        {
            get { return owner.GetAttribute("aria-invalid"); }
            set
            {
                owner.SetAttribute("aria-invalid", value);
            }
        }

        public string Label
        {
            get { return owner.GetAttribute("aria-label"); }
            set
            {
                owner.SetAttribute("aria-label", value);
            }
        }

        public string Labelledby
        {
            get { return owner.GetAttribute("aria-labelledby"); }
            set
            {
                owner.SetAttribute("aria-labelledby", value);
            }
        }

        public string Live
        {
            get { return owner.GetAttribute("aria-live"); }
            set
            {
                owner.SetAttribute("aria-live", value);
            }
        }

        public string Owns
        {
            get { return owner.GetAttribute("aria-owns"); }
            set
            {
                owner.SetAttribute("aria-owns", value);
            }
        }

        public string Relevant
        {
            get { return owner.GetAttribute("aria-relevant"); }
            set
            {
                owner.SetAttribute("aria-relevant", value);
            }
        }

        public string AutoComplete
        {
            get { return owner.GetAttribute("aria-autocomplete"); }
            set
            {
                owner.SetAttribute("aria-autocomplete", value);
            }
        }

        public string Checked
        {
            get { return owner.GetAttribute("aria-checked"); }
            set
            {
                owner.SetAttribute("aria-checked", value);
            }
        }

        public bool? Expanded
        {
            get { return owner.GetAttribute("aria-expanded") == null ? null : new bool?(owner.GetAttribute("aria-expanded") == "true"); }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-expanded", value == null ? null : value.Value.ToProperty());
            }
        }

        public int? Level
        {
            get { return owner.GetAttribute("aria-level") == null ? null : new int?(Global.ParseInt(owner.GetAttribute("aria-level"))); }
            set
            {
                owner.SetAttribute("aria-level", value == null ? null : value.Value.ToString());
            }
        }

        public bool MultiLine
        {
            get { return owner.GetAttribute("aria-multiline") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-multiline", value.ToProperty());
            }
        }

        public bool MultiSelectable
        {
            get { return owner.GetAttribute("aria-multiselectable") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-multiselectable", value.ToProperty());
            }
        }

        public string Orientation
        {
            get { return owner.GetAttribute("aria-orientation"); }
            set
            {
                owner.SetAttribute("aria-orientation", value);
            }
        }

        public bool Pressed
        {
            get { return owner.GetAttribute("aria-pressed") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-pressed", value.ToProperty());
            }
        }

        public bool Readonly
        {
            get { return owner.GetAttribute("aria-readonly") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-readonly", value.ToProperty());
            }
        }

        public bool Required
        {
            get { return owner.GetAttribute("aria-required") == "true"; }
            set
            {
                if (value == Atomic)
                    return;
                owner.SetAttribute("aria-required", value.ToProperty());
            }
        }

        public string Sort
        {
            get { return owner.GetAttribute("aria-sort"); }
            set
            {
                owner.SetAttribute("aria-sort", value);
            }
        }

        public string ValueMax
        {
            get { return owner.GetAttribute("aria-valuemax"); }
            set
            {
                owner.SetAttribute("aria-valuemax", value);
            }
        }

        public string ValueMin
        {
            get { return owner.GetAttribute("aria-valuemin"); }
            set
            {
                owner.SetAttribute("aria-valuemin", value);
            }
        }

        public string ValueNow
        {
            get { return owner.GetAttribute("aria-valuenow"); }
            set
            {
                owner.SetAttribute("aria-valuenow", value);
            }
        }

        public string ValueText
        {
            get { return owner.GetAttribute("aria-valuetext"); }
            set
            {
                owner.SetAttribute("aria-valuetext", value);
            }
        }

        public string ActiveDescendant
        {
            get { return owner.GetAttribute("aria-activedescendant"); }
            set
            {
                owner.SetAttribute("aria-activedescendant", value);
            }
        }

        public int? PosInset
        {
            get { return owner.GetAttribute("aria-posinset") == null ? null : new int?(Global.ParseInt(owner.GetAttribute("aria-posinset"))); }
            set
            {
                owner.SetAttribute("aria-posinset", value == null ? null : value.Value.ToString());
            }
        }

        public int? SetSize
        {
            get { return owner.GetAttribute("aria-setsize") == null ? null : new int?(Global.ParseInt(owner.GetAttribute("aria-setsize"))); }
            set
            {
                owner.SetAttribute("aria-setsize", value == null ? null : value.Value.ToString());
            }
        }

    }
}
