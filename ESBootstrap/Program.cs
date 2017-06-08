using Bridge;
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
        //public static void Main()
        //{
        //    //Window.OnHashChange = (ev) =>
        //    //{
        //    //    var ul = Widget.GetWidgetById<UnorderedList>("navBarButtonList");
        //    //    foreach (var item in ul.Content.ChildNodes)
        //    //    {
        //    //        if(item.NodeType == NodeType.Element && item.As<HTMLElement>().TagName == "LI")
        //    //        {
        //    //            var li = Widget.CastElement<ListItem>(item.As<HTMLElement>());
        //    //            if(li.Content.HasChildNodes())
        //    //            {
        //    //                if(li.Content.FirstChild.As<HTMLElement>().TagName == "A")
        //    //                {
        //    //                    var a = Widget.CastElement<Anchor>(li.Content.FirstChild.As<HTMLElement>());
        //    //                    if(a.Content.As<HTMLAnchorElement>().Hash == Window.Location.Hash)
        //    //                    {
        //    //                        if(a.Content.LastChild.As<HTMLElement>().InnerHTML != "(current)")
        //    //                        {
        //    //                            a.AppendChild(new SourceOnly("(current)"));
        //    //                        }
        //    //                        li.Active = true;
        //    //                    }
        //    //                    else
        //    //                    {
        //    //                        if (a.Content.LastChild.As<HTMLElement>().InnerHTML == "(current)")
        //    //                        {
        //    //                            a.Content.RemoveChild(a.Content.LastChild);                                      
        //    //                        }
        //    //                        li.Active = false;
        //    //                    }
        //    //                }
        //    //            }
        //    //        }
        //    //    }                
        //    //};

        //    Document.Body.AppendChildren(new Fragment(
        //            new Navbar
        //            (
        //                new NavbarHeader
        //                (
        //                    new NavbarCollapseButton("navbarContent"),
        //                    new NavbarBrand("#home", "Document Fragment Test")
        //                ),
        //                new NavbarContent
        //                (
        //                    "navbarContent",
        //                    new UnorderedList
        //                    (
        //                        new ListItem(new Anchor("#home", "Home", new SourceOnly("(current)")) { Id = "home" }) { Active = true },
        //                        new ListItem(new Anchor("#about", "about") { Id = "about" })
        //                    )
        //                    { Id = "navBarButtonList" }                            
        //                )
        //            )
        //            { NavbarLocation = NavBarLocation.Static_Top }                    
        //        ));

        //    Window.Location.Hash = "#home";
        //}

        
        //public static void Main()
        //{
        //            Action<MouseEvent> buttonClick = (ev) => { Global.Alert(ev.CurrentTarget.As<HTMLElement>().InnerHTML); };
        //            Navbar.FixedPaddingOffset = "40px";
        //            Document.Body.AppendChildren(
        //                new Navbar
        //                (
        //                    new NavbarHeader
        //                    (
        //                        new NavbarCollapseButton("navbarContent"),
        //                        new NavbarBrand("#", "Brand")
        //                    ),
        //                    new NavbarContent
        //                    (
        //                        "navbarContent",
        //                        new UnorderedList
        //                        (
        //                            new ListItem(new Anchor("#", "Link ", new SourceOnly("(current)"))) { Active = true },
        //                            new ListItem(new Anchor("#", "Link")),
        //                            new ListItem
        //                            (
        //                                new Anchor("#", "Dropdown ", new Caret()) { Dropdown = true },
        //                                new UnorderedList
        //                                (
        //                                    new ListItem(new Anchor("#", "Action")),
        //                                    new ListItem(new Anchor("#", "Another Action")),
        //                                    new ListItem(new Anchor("#", "Something else here")),
        //                                    new ListItem() { Divider = true },
        //                                    new ListItem(new Anchor("#", "Separated link"))
        //                                )
        //                                { DropdownMenu = true }
        //                            )
        //                            { Dropdown = true }
        //                        )
        //                        { Nav = true }
        //                    )
        //                )
        //                { NavbarLocation = NavBarLocation.Fixed_Top },
        //                new Container
        //                (
        //                    new Panel
        //                    (
        //                        BootTheme.Default,
        //                        new PanelHeading("Welcome to ESBootstrap"),
        //                        new PanelBody
        //                        (
        //                            new FormGroupList
        //                            (
        //                                    new TextBox("Textbox"),
        //                                    new CheckBox("checkbox", true),
        //                                    new FormGroup
        //                                    (
        //                                        new CheckBox("checkbox-inline 1", true) { Inline = true },
        //                                        new CheckBox("checkbox-inline 2", true) { Inline = true },
        //                                        new CheckBox("checkbox-inline 3", true) { Inline = true }
        //                                    ),
        //                                    new TextBox("11/04/2017", InputType.Date),
        //                                    new TextBox("Password", InputType.Password),
        //                                    new TextArea("TextArea", 4),
        //                                    new Form(BootFormType.Inline,
        //                                        new Label
        //                                        (
        //                                            "Email:",
        //                                            new TextBox()
        //                                        ),
        //                                        new Label
        //                                        (
        //                                            "Password:",
        //                                            new TextBox(InputType.Password)
        //                                        ),
        //                                        new CheckBox("Remeber me"),
        //                                        new Button("Submit", ButtonType.Submit)
        //                                    ),
        //                                    new Form
        //                                    (   
        //                                        BootFormType.Horizontal,
        //                                        new Label(
        //                                            "Email:",
        //                                            new TextBox()
        //                                        ),
        //                                        new Label(
        //                                            "Password:",
        //                                            new TextBox(InputType.Password)
        //                                        ),
        //                                        new CheckBox("Remeber me"),
        //                                        new Button("Submit", ButtonType.Submit)
        //                                    ),
        //                                    new Button("Basic", BootTheme.None) { OnClick = buttonClick },
        //                                    new Button("Default", BootTheme.Default) { OnClick = buttonClick },
        //                                    new Button("Primary", BootTheme.Primary) { OnClick = buttonClick },
        //                                    new Button("Success", BootTheme.Success) { OnClick = buttonClick },
        //                                    new Button("Info", BootTheme.Info) { OnClick = buttonClick },
        //                                    new Button("Warning", BootTheme.Warning) { OnClick = buttonClick },
        //                                    new Button("Danger", BootTheme.Danger) { OnClick = buttonClick },
        //                                    new Button("Link", BootTheme.Link) { OnClick = buttonClick }
        //                                ),
        //                                new Heading
        //                                (
        //                                    HeadingType.H2, "Heading", new Small(" - Heading Small")),
        //                                    new ParagraphList
        //                                    (
        //                                        "Text",
        //                                        new Abbr("Abbr hover", "Abbr"),
        //                                        new Small("Small"),
        //                                        new Blockquote(new Paragraph("Block Quote Content"), new Footer("Block Quote From")),
        //                                        new Blockquote(new Paragraph("Block Quote Content Reverse"), new Footer("Block Quote From Reverse")) { Reverse = true },
        //                                        new DescriptionList(
        //                                            new DescriptionTitle("Description Title 1"),
        //                                            new DescriptionDetail("- Description Detail 1"),
        //                                            new DescriptionTitle("Description Title 2"),
        //                                            new DescriptionDetail("- Description Detail 2")),
        //                                        new Paragraph("The following HTML elements: ", new Code("span"), ", ", new Code("section"), ", and ", new Code("div"), " defines a section in a document."),
        //                                        new Paragraph("Use ", new Kbd("ctrl + p"), " to open the Print dialog box."),
        //                                        new Pre(
        //@"Text in a pre element
        //is displayed in a fixed-width
        //font, and it preserves
        //both      spaces and
        //line breaks."),

        //                                        new Paragraph(
        //                                            new ParagraphList(
        //                                                new Heading(HeadingType.H2, "Contextual Colors"),
        //                                                new Paragraph("This text is muted.") { ContextualText = Contextual.Text.Muted },
        //                                                new Paragraph("This text is important.") { ContextualText = Contextual.Text.Primary },
        //                                                new Paragraph("This text indicates success.") { ContextualText = Contextual.Text.Success },
        //                                                new Paragraph("This text represents some information.") { ContextualText = Contextual.Text.Info },
        //                                                new Paragraph("This text represents a warning.") { ContextualText = Contextual.Text.Warning },
        //                                                new Paragraph("This text represents danger.") { ContextualText = Contextual.Text.Danger }
        //                                            )
        //                                        ),
        //                                        new Paragraph(
        //                                            new ParagraphList(
        //                                                new Heading(HeadingType.H2, "Contextual Backgrounds"),
        //                                                new Paragraph("This text is important.") { ContextualBackground = Contextual.Background.Primary },
        //                                                new Paragraph("This text indicates success.") { ContextualBackground = Contextual.Background.Success },
        //                                                new Paragraph("This text represents some information.") { ContextualBackground = Contextual.Background.Info },
        //                                                new Paragraph("This text represents a warning.") { ContextualBackground = Contextual.Background.Warning },
        //                                                new Paragraph("This text represents danger.") { ContextualBackground = Contextual.Background.Danger }
        //                                            )
        //                                        )
        //                                    ),
        //                                    new Panel(BootTheme.Default,
        //                                        new PanelHeading(
        //                                            new Heading(HeadingType.H3, "Table Demo", new Small(" - Table options below.")),
        //                                            new FormGroup(
        //                                                new CheckBox("Striped", false)
        //                                                {
        //                                                    OnCheckChanged = (s) =>
        //                                                    {
        //                                                        Widget.GetWidgetById<Table>("DemoTable").Striped = s.Checked;
        //                                                    },
        //                                                    Inline = true
        //                                                },
        //                                                new CheckBox("Bordered", false)
        //                                                {
        //                                                    OnCheckChanged = (s) =>
        //                                                    {
        //                                                        Widget.GetWidgetById<Table>("DemoTable").Bordered = s.Checked;
        //                                                    },
        //                                                    Inline = true
        //                                                },
        //                                                new CheckBox("Hover", false)
        //                                                {
        //                                                    OnCheckChanged = (s) =>
        //                                                    {
        //                                                        Widget.GetWidgetById<Table>("DemoTable").Hover = s.Checked;
        //                                                    },
        //                                                    Inline = true
        //                                                },
        //                                                new CheckBox("Condensed", false)
        //                                                {
        //                                                    OnCheckChanged = (s) =>
        //                                                    {
        //                                                        Widget.GetWidgetById<Table>("DemoTable").Condensed = s.Checked;
        //                                                    },
        //                                                    Inline = true
        //                                                },
        //                                                new CheckBox("Contextual classes", false)
        //                                                {
        //                                                    OnCheckChanged = (s) =>
        //                                                    {
        //                                                        var tbl = Widget.GetWidgetById<Table>("DemoTable");
        //                                                        if (s.Checked)
        //                                                        {
        //                                                            var body = tbl.TableBody;
        //                                                            body.Row(0).Theme = BootRowCellTheme.Active;
        //                                                            body.Row(2).Theme = BootRowCellTheme.Success;
        //                                                            body.Row(4).Theme = BootRowCellTheme.Info;
        //                                                            body.Row(6).Theme = BootRowCellTheme.Warning;
        //                                                            body.Row(8).Theme = BootRowCellTheme.Danger;
        //                                                        }
        //                                                        else
        //                                                        {
        //                                                            foreach (var item in tbl.TableBody.Rows)
        //                                                            {
        //                                                                item.ClearTheme();
        //                                                            }
        //                                                        }
        //                                                    },
        //                                                    Inline = true
        //                                                }
        //                                            )
        //                                        ),
        //                                        new PanelBody(
        //                                            new Table(
        //                                                new TableHeader(
        //                                                    new TableHeaderRow(
        //                                                        "#",
        //                                                        "Table heading",
        //                                                        "Table heading",
        //                                                        "Table heading",
        //                                                        "Table heading",
        //                                                        "Table heading",
        //                                                        "Table heading"
        //                                                        )
        //                                                    ),
        //                                                new TableBody(
        //                                                    Enumerable.Range(0, 9).Select((x, index) => (Union<string, Widget, HTMLElement>)new TableRow(
        //                                                    new TableHeaderCell((index + 1).ToString()), "Table cell", "Table cell", "Table cell", "Table cell", "Table cell", "Table cell")).ToArray()
        //                                                )
        //                                            )
        //                                            { Id = "DemoTable" }
        //                                        ),
        //                                        new PanelFooter(
        //                                            new Heading(HeadingType.H3, "How to access the table."),
        //                                            new Pre(
        //@"var tbl = Widget.GetWidgetById<Table>(""DemoTable"");
        //var body = tbl.TableBody;
        //body.Row(0).Theme = BootRowCellTheme.Active;
        //body.Row(2).Theme = BootRowCellTheme.Success;
        //body.Row(4).Theme = BootRowCellTheme.Info;
        //body.Row(6).Theme = BootRowCellTheme.Warning;
        //body.Row(8).Theme = BootRowCellTheme.Danger;
        //"
        //                                            )
        //                                        )
        //                                    )

        //                        ),
        //                    	new PanelFooter(
        //                            "Footer"
        //                            )
        //                    	)
        //                    )
        //            );            
        //}
    }
}
