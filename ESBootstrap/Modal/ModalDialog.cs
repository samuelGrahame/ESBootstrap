using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ESBootstrap
{
    public class ModalDialog : WidgetStyle
    {
        public ModalDialog(params Union<string, Widget, HTMLElement>[] typos) : base("modal-dialog", typos)
        {

        }

        public BootSize ModalSize
        {
            get
            {
                var x = GetEnumClassValue("modal-", typeof(BootSize)).As<Enum>();
                if (x == null)
                    return BootSize.None;
                else
                    return x.As<BootSize>();
            }
            set
            {
                if (value == BootSize.None)
                {
                    ClearEnumClassValue("modal-", typeof(BootSize));
                }
                else
                {
                    SetEnumClassValue("modal-", typeof(BootSize), value.ToString("G").ToLower().Replace("_", "-"));
                }
            }
        }
    }
}
