using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;

namespace ESBootstrap
{
    public class Modal : WidgetStyle
    {
        public Modal(params Union<string, Widget, HTMLElement>[] typos) : base("modal fade", typos)
        {
            Role = "dialog";
        }
        private static int Idhandles = 0;


        public void ShowDialog(Action<ModalResult> modalResult = null)
        {
            ShowDialog(this, modalResult);
        }

        public static void ShowDialog(Modal modal, Action<ModalResult> modalResult = null)
        {
            if (modal == null)
                return;

            if(string.IsNullOrWhiteSpace(modal.Id))
            {
                modal.Id = "__internal_Id" + Idhandles;
                Idhandles++;
            }
            ShowDialog(modal.Id, modalResult);
        }

        public string DataResult
        {
            get { return GetAttribute("data-result"); }
            set { SetAttribute("data-result", value); }
        }

        public static void ShowDialog(string id, Action<ModalResult> modalResult = null)
        {
            if (string.IsNullOrWhiteSpace(id))
                return;
            Modal modal;
            if (id.StartsWith("#"))
            {
                modal = Widget.GetWidgetById<Modal>(id.Substring(1));
            }
            else
            {
                modal = Widget.GetWidgetById<Modal>(id);
                id = "#" + id;
            }

            if(modal != null)
            {
                modal.DataResult = null;

                if (modalResult != null)
                {
                    jQuery.Select(modal.Content).On("hidden.bs.modal", () =>
                    {
                        try
                        {
                            var modalResultEnum = ModalResult.None;
                            var selected = modal.DataResult;
                            int i = 0;
                            if(!string.IsNullOrWhiteSpace(selected))
                            {
                                foreach (var item in Enum.GetNames(typeof(ModalResult)))
                                {
                                    if (item.ToLower() == selected)
                                    {
                                        modalResultEnum = (ModalResult)Enum.GetValues(typeof(ModalResult))[i];
                                        break;
                                    }
                                    i++;
                                }
                            }
                            
                            if (modalResult != null)
                                modalResult(modalResultEnum);
                        }
                        catch (Exception)
                        {
                            
                        }                        
                        jQuery.Select(modal.Content).Off("hidden.bs.modal");
                    });
                }

                var button = new Button() { DataTarget = id, ToggleModal = true };
                Document.Body.AppendChild(button);
                button.Content.Click();
                Document.Body.RemoveChild(button);
            }               
        }
        
        public enum ModalResult
        {
            None,
            OK,
            Cancel,
            Abort,
            Yes,
            No
        }
    }
}
