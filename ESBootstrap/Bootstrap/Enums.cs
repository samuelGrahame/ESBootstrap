using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ESBootstrap
{
	public enum BootTheme
	{
		None,
		Default,
		Primary,
		Success,
		Info,
		Warning,
		Danger,
		Link
	}

	public enum BootSize
	{		
		None,
		LG,
		MD,
		SM,
		XS		
	}

	public enum BootRowCellTheme
	{		
		Active,
		Success,
		Warning,
		Danger,
		Info
	}

	public enum NavBarTheme
	{
		NavBar_Default,
		NavBar_Inverse
	}

	public enum NavBarLocation
	{
		None,
		Fixed_Top,
		Fixed_Bottom,
		Static_Top
	}

	public enum NavBarPosition
	{
		None,
		NavBar_Left,
		NavBar_Right
	}

	public enum BootParagraphAlignment
	{
		Left,
		Center,
		Right,
		Justify,
		Nowrap
	}

	public enum BootParagraphTransformation
	{
		Lowercase,
		Uppercase,
		Capitalize,		
	}

	public enum BootFormType
	{
		None,
		Inline,
		Horizontal
	}

    public enum DataPlacement
    {
        None,
        Top,
        Bottom,
        Left,
        Right
    }

    //data-placement="top"

    public class RuleTier
	{
		public string value;
		public RuleTier(string _value)
		{
			value = _value;
		}
		/// <summary>
		/// Phones
		/// </summary>
		public static RuleTier XS = new RuleTier("-xs-");
		/// <summary>
		/// Tablets
		/// </summary>
		public static RuleTier SM = new RuleTier("-sm-");
		/// <summary>
		/// Desktops
		/// </summary>
		public static RuleTier MD = new RuleTier("-md-");
		/// <summary>
		/// Larger Desktops
		/// </summary>
		public static RuleTier LG = new RuleTier("-lg-");
	}

	public class Rule
	{
		public string value;		
		public Rule(RuleTier _tier, int _colIndex, string bonus)
		{
			value = "col" + _tier.value + bonus + _colIndex;			
		}
		public Rule(RuleTier _tier, int _colIndex) : this(_tier, _colIndex, string.Empty){ }

		public static Rule XS1 = new Rule(RuleTier.XS, 1);
		public static Rule XS2 = new Rule(RuleTier.XS, 2);
		public static Rule XS3 = new Rule(RuleTier.XS, 3);
		public static Rule XS4 = new Rule(RuleTier.XS, 4);
		public static Rule XS5 = new Rule(RuleTier.XS, 5);
		public static Rule XS6 = new Rule(RuleTier.XS, 6);
		public static Rule XS7 = new Rule(RuleTier.XS, 7);
		public static Rule XS8 = new Rule(RuleTier.XS, 8);
		public static Rule XS9 = new Rule(RuleTier.XS, 9);
		public static Rule XS10 = new Rule(RuleTier.XS, 10);
		public static Rule XS11 = new Rule(RuleTier.XS, 11);
		public static Rule XS12 = new Rule(RuleTier.XS, 12);

		public static Rule XSO1 = new Rule(RuleTier.XS, 1, "offset-");
		public static Rule XSO2 = new Rule(RuleTier.XS, 2, "offset-");
		public static Rule XSO3 = new Rule(RuleTier.XS, 3, "offset-");
		public static Rule XSO4 = new Rule(RuleTier.XS, 4, "offset-");
		public static Rule XSO5 = new Rule(RuleTier.XS, 5, "offset-");
		public static Rule XSO6 = new Rule(RuleTier.XS, 6, "offset-");
		public static Rule XSO7 = new Rule(RuleTier.XS, 7, "offset-");
		public static Rule XSO8 = new Rule(RuleTier.XS, 8, "offset-");
		public static Rule XSO9 = new Rule(RuleTier.XS, 9, "offset-");
		public static Rule XSO10 = new Rule(RuleTier.XS, 10, "offset-");
		public static Rule XSO11 = new Rule(RuleTier.XS, 11, "offset-");
		public static Rule XSO12 = new Rule(RuleTier.XS, 12, "offset-");

		public static Rule XSPL1 = new Rule(RuleTier.XS, 1, "pull-");
		public static Rule XSPL2 = new Rule(RuleTier.XS, 2, "pull-");
		public static Rule XSPL3 = new Rule(RuleTier.XS, 3, "pull-");
		public static Rule XSPL4 = new Rule(RuleTier.XS, 4, "pull-");
		public static Rule XSPL5 = new Rule(RuleTier.XS, 5, "pull-");
		public static Rule XSPL6 = new Rule(RuleTier.XS, 6, "pull-");
		public static Rule XSPL7 = new Rule(RuleTier.XS, 7, "pull-");
		public static Rule XSPL8 = new Rule(RuleTier.XS, 8, "pull-");
		public static Rule XSPL9 = new Rule(RuleTier.XS, 9, "pull-");
		public static Rule XSPL10 = new Rule(RuleTier.XS, 10, "pull-");
		public static Rule XSPL11 = new Rule(RuleTier.XS, 11, "pull-");
		public static Rule XSPL12 = new Rule(RuleTier.XS, 12, "pull-");

		public static Rule XSPS1 = new Rule(RuleTier.XS, 1, "push-");
		public static Rule XSPS2 = new Rule(RuleTier.XS, 2, "push-");
		public static Rule XSPS3 = new Rule(RuleTier.XS, 3, "push-");
		public static Rule XSPS4 = new Rule(RuleTier.XS, 4, "push-");
		public static Rule XSPS5 = new Rule(RuleTier.XS, 5, "push-");
		public static Rule XSPS6 = new Rule(RuleTier.XS, 6, "push-");
		public static Rule XSPS7 = new Rule(RuleTier.XS, 7, "push-");
		public static Rule XSPS8 = new Rule(RuleTier.XS, 8, "push-");
		public static Rule XSPS9 = new Rule(RuleTier.XS, 9, "push-");
		public static Rule XSPS10 = new Rule(RuleTier.XS, 10, "push-");
		public static Rule XSPS11 = new Rule(RuleTier.XS, 11, "push-");
		public static Rule XSPS12 = new Rule(RuleTier.XS, 12, "push-");

		public static Rule SM1 = new Rule(RuleTier.SM, 1);
		public static Rule SM2 = new Rule(RuleTier.SM, 2);
		public static Rule SM3 = new Rule(RuleTier.SM, 3);
		public static Rule SM4 = new Rule(RuleTier.SM, 4);
		public static Rule SM5 = new Rule(RuleTier.SM, 5);
		public static Rule SM6 = new Rule(RuleTier.SM, 6);
		public static Rule SM7 = new Rule(RuleTier.SM, 7);
		public static Rule SM8 = new Rule(RuleTier.SM, 8);
		public static Rule SM9 = new Rule(RuleTier.SM, 9);
		public static Rule SM10 = new Rule(RuleTier.SM, 10);
		public static Rule SM11 = new Rule(RuleTier.SM, 11);
		public static Rule SM12 = new Rule(RuleTier.SM, 12);

		public static Rule SMO1 = new Rule(RuleTier.SM, 1, "offset-");
		public static Rule SMO2 = new Rule(RuleTier.SM, 2, "offset-");
		public static Rule SMO3 = new Rule(RuleTier.SM, 3, "offset-");
		public static Rule SMO4 = new Rule(RuleTier.SM, 4, "offset-");
		public static Rule SMO5 = new Rule(RuleTier.SM, 5, "offset-");
		public static Rule SMO6 = new Rule(RuleTier.SM, 6, "offset-");
		public static Rule SMO7 = new Rule(RuleTier.SM, 7, "offset-");
		public static Rule SMO8 = new Rule(RuleTier.SM, 8, "offset-");
		public static Rule SMO9 = new Rule(RuleTier.SM, 9, "offset-");
		public static Rule SMO10 = new Rule(RuleTier.SM, 10, "offset-");
		public static Rule SMO11 = new Rule(RuleTier.SM, 11, "offset-");
		public static Rule SMO12 = new Rule(RuleTier.SM, 12, "offset-");

		public static Rule SMPL1 = new Rule(RuleTier.SM, 1, "pull-");
		public static Rule SMPL2 = new Rule(RuleTier.SM, 2, "pull-");
		public static Rule SMPL3 = new Rule(RuleTier.SM, 3, "pull-");
		public static Rule SMPL4 = new Rule(RuleTier.SM, 4, "pull-");
		public static Rule SMPL5 = new Rule(RuleTier.SM, 5, "pull-");
		public static Rule SMPL6 = new Rule(RuleTier.SM, 6, "pull-");
		public static Rule SMPL7 = new Rule(RuleTier.SM, 7, "pull-");
		public static Rule SMPL8 = new Rule(RuleTier.SM, 8, "pull-");
		public static Rule SMPL9 = new Rule(RuleTier.SM, 9, "pull-");
		public static Rule SMPL10 = new Rule(RuleTier.SM, 10, "pull-");
		public static Rule SMPL11 = new Rule(RuleTier.SM, 11, "pull-");
		public static Rule SMPL12 = new Rule(RuleTier.SM, 12, "pull-");

		public static Rule SMPS1 = new Rule(RuleTier.SM, 1, "push-");
		public static Rule SMPS2 = new Rule(RuleTier.SM, 2, "push-");
		public static Rule SMPS3 = new Rule(RuleTier.SM, 3, "push-");
		public static Rule SMPS4 = new Rule(RuleTier.SM, 4, "push-");
		public static Rule SMPS5 = new Rule(RuleTier.SM, 5, "push-");
		public static Rule SMPS6 = new Rule(RuleTier.SM, 6, "push-");
		public static Rule SMPS7 = new Rule(RuleTier.SM, 7, "push-");
		public static Rule SMPS8 = new Rule(RuleTier.SM, 8, "push-");
		public static Rule SMPS9 = new Rule(RuleTier.SM, 9, "push-");
		public static Rule SMPS10 = new Rule(RuleTier.SM, 10, "push-");
		public static Rule SMPS11 = new Rule(RuleTier.SM, 11, "push-");
		public static Rule SMPS12 = new Rule(RuleTier.SM, 12, "push-");

		public static Rule MD1 = new Rule(RuleTier.MD, 1);
		public static Rule MD2 = new Rule(RuleTier.MD, 2);
		public static Rule MD3 = new Rule(RuleTier.MD, 3);
		public static Rule MD4 = new Rule(RuleTier.MD, 4);
		public static Rule MD5 = new Rule(RuleTier.MD, 5);
		public static Rule MD6 = new Rule(RuleTier.MD, 6);
		public static Rule MD7 = new Rule(RuleTier.MD, 7);
		public static Rule MD8 = new Rule(RuleTier.MD, 8);
		public static Rule MD9 = new Rule(RuleTier.MD, 9);
		public static Rule MD10 = new Rule(RuleTier.MD, 10);
		public static Rule MD11 = new Rule(RuleTier.MD, 11);
		public static Rule MD12 = new Rule(RuleTier.MD, 12);

		public static Rule MDO1 = new Rule(RuleTier.MD, 1, "offset-");
		public static Rule MDO2 = new Rule(RuleTier.MD, 2, "offset-");
		public static Rule MDO3 = new Rule(RuleTier.MD, 3, "offset-");
		public static Rule MDO4 = new Rule(RuleTier.MD, 4, "offset-");
		public static Rule MDO5 = new Rule(RuleTier.MD, 5, "offset-");
		public static Rule MDO6 = new Rule(RuleTier.MD, 6, "offset-");
		public static Rule MDO7 = new Rule(RuleTier.MD, 7, "offset-");
		public static Rule MDO8 = new Rule(RuleTier.MD, 8, "offset-");
		public static Rule MDO9 = new Rule(RuleTier.MD, 9, "offset-");
		public static Rule MDO10 = new Rule(RuleTier.MD, 10, "offset-");
		public static Rule MDO11 = new Rule(RuleTier.MD, 11, "offset-");
		public static Rule MDO12 = new Rule(RuleTier.MD, 12, "offset-");

		public static Rule MDPL1 = new Rule(RuleTier.MD, 1, "pull-");
		public static Rule MDPL2 = new Rule(RuleTier.MD, 2, "pull-");
		public static Rule MDPL3 = new Rule(RuleTier.MD, 3, "pull-");
		public static Rule MDPL4 = new Rule(RuleTier.MD, 4, "pull-");
		public static Rule MDPL5 = new Rule(RuleTier.MD, 5, "pull-");
		public static Rule MDPL6 = new Rule(RuleTier.MD, 6, "pull-");
		public static Rule MDPL7 = new Rule(RuleTier.MD, 7, "pull-");
		public static Rule MDPL8 = new Rule(RuleTier.MD, 8, "pull-");
		public static Rule MDPL9 = new Rule(RuleTier.MD, 9, "pull-");
		public static Rule MDPL10 = new Rule(RuleTier.MD, 10, "pull-");
		public static Rule MDPL11 = new Rule(RuleTier.MD, 11, "pull-");
		public static Rule MDPL12 = new Rule(RuleTier.MD, 12, "pull-");

		public static Rule MDPS1 = new Rule(RuleTier.MD, 1, "push-");
		public static Rule MDPS2 = new Rule(RuleTier.MD, 2, "push-");
		public static Rule MDPS3 = new Rule(RuleTier.MD, 3, "push-");
		public static Rule MDPS4 = new Rule(RuleTier.MD, 4, "push-");
		public static Rule MDPS5 = new Rule(RuleTier.MD, 5, "push-");
		public static Rule MDPS6 = new Rule(RuleTier.MD, 6, "push-");
		public static Rule MDPS7 = new Rule(RuleTier.MD, 7, "push-");
		public static Rule MDPS8 = new Rule(RuleTier.MD, 8, "push-");
		public static Rule MDPS9 = new Rule(RuleTier.MD, 9, "push-");
		public static Rule MDPS10 = new Rule(RuleTier.MD, 10, "push-");
		public static Rule MDPS11 = new Rule(RuleTier.MD, 11, "push-");
		public static Rule MDPS12 = new Rule(RuleTier.MD, 12, "push-");

		public static Rule LG1 = new Rule(RuleTier.LG, 1);
		public static Rule LG2 = new Rule(RuleTier.LG, 2);
		public static Rule LG3 = new Rule(RuleTier.LG, 3);
		public static Rule LG4 = new Rule(RuleTier.LG, 4);
		public static Rule LG5 = new Rule(RuleTier.LG, 5);
		public static Rule LG6 = new Rule(RuleTier.LG, 6);
		public static Rule LG7 = new Rule(RuleTier.LG, 7);
		public static Rule LG8 = new Rule(RuleTier.LG, 8);
		public static Rule LG9 = new Rule(RuleTier.LG, 9);
		public static Rule LG10 = new Rule(RuleTier.LG, 10);
		public static Rule LG11 = new Rule(RuleTier.LG, 11);
		public static Rule LG12 = new Rule(RuleTier.LG, 12);

		public static Rule LGO1 = new Rule(RuleTier.LG, 1, "offset-");
		public static Rule LGO2 = new Rule(RuleTier.LG, 2, "offset-");
		public static Rule LGO3 = new Rule(RuleTier.LG, 3, "offset-");
		public static Rule LGO4 = new Rule(RuleTier.LG, 4, "offset-");
		public static Rule LGO5 = new Rule(RuleTier.LG, 5, "offset-");
		public static Rule LGO6 = new Rule(RuleTier.LG, 6, "offset-");
		public static Rule LGO7 = new Rule(RuleTier.LG, 7, "offset-");
		public static Rule LGO8 = new Rule(RuleTier.LG, 8, "offset-");
		public static Rule LGO9 = new Rule(RuleTier.LG, 9, "offset-");
		public static Rule LGO10 = new Rule(RuleTier.LG, 10, "offset-");
		public static Rule LGO11 = new Rule(RuleTier.LG, 11, "offset-");
		public static Rule LGO12 = new Rule(RuleTier.LG, 12, "offset-");

		public static Rule LGPL1 = new Rule(RuleTier.LG, 1, "pull-");
		public static Rule LGPL2 = new Rule(RuleTier.LG, 2, "pull-");
		public static Rule LGPL3 = new Rule(RuleTier.LG, 3, "pull-");
		public static Rule LGPL4 = new Rule(RuleTier.LG, 4, "pull-");
		public static Rule LGPL5 = new Rule(RuleTier.LG, 5, "pull-");
		public static Rule LGPL6 = new Rule(RuleTier.LG, 6, "pull-");
		public static Rule LGPL7 = new Rule(RuleTier.LG, 7, "pull-");
		public static Rule LGPL8 = new Rule(RuleTier.LG, 8, "pull-");
		public static Rule LGPL9 = new Rule(RuleTier.LG, 9, "pull-");
		public static Rule LGPL10 = new Rule(RuleTier.LG, 10, "pull-");
		public static Rule LGPL11 = new Rule(RuleTier.LG, 11, "pull-");
		public static Rule LGPL12 = new Rule(RuleTier.LG, 12, "pull-");

		public static Rule LGPS1 = new Rule(RuleTier.LG, 1, "push-");
		public static Rule LGPS2 = new Rule(RuleTier.LG, 2, "push-");
		public static Rule LGPS3 = new Rule(RuleTier.LG, 3, "push-");
		public static Rule LGPS4 = new Rule(RuleTier.LG, 4, "push-");
		public static Rule LGPS5 = new Rule(RuleTier.LG, 5, "push-");
		public static Rule LGPS6 = new Rule(RuleTier.LG, 6, "push-");
		public static Rule LGPS7 = new Rule(RuleTier.LG, 7, "push-");
		public static Rule LGPS8 = new Rule(RuleTier.LG, 8, "push-");
		public static Rule LGPS9 = new Rule(RuleTier.LG, 9, "push-");
		public static Rule LGPS10 = new Rule(RuleTier.LG, 10, "push-");
		public static Rule LGPS11 = new Rule(RuleTier.LG, 11, "push-");
		public static Rule LGPS12 = new Rule(RuleTier.LG, 12, "push-");

	}
}
