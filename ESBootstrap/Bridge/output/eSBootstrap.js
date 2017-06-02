/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("ESBootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ESBootstrap.Widget", {
        statics: {
            getWidgetById$1: function (id) {
                var widget = document.getElementById(id);
                if (widget == null) {
                    return null;
                }
                return new ESBootstrap.Widget.ctor(widget);
            },
            getWidgetById: function (T, id) {
                return ESBootstrap.Widget.castElement(T, document.getElementById(id));
            },
            castElement: function (T, widget) {
                if (widget == null) {
                    return Bridge.getDefaultValue(T);
                }
                var x = Bridge.createInstance(T);
                x.content = widget;
                return x;
            },
            appendTypos$1: function (control, typos) {
                if (typos === void 0) { typos = []; }
                ESBootstrap.Widget.appendTypos(control.content, typos);
            },
            appendTypos: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos != null) {
                    var length = typos.length;
                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        if (Bridge.is(typos[i], String)) {
                            control.appendChild(document.createTextNode(typos[i]));
                        } else {
                            if (Bridge.is(typos[i], ESBootstrap.Widget)) {
                                control.appendChild(ESBootstrap.Widget.op_Implicit(typos[i]));
                            } else {
                                if (Bridge.is(typos[i], HTMLElement)) {
                                    control.appendChild(typos[i]);
                                }
                            }
                        }
                    }
                }
            },
            getInline: function (control, type) {
                return control.getClassList().contains(System.String.concat(type, "-inline"));
            },
            setInline: function (control, type, value) {
                if (ESBootstrap.Widget.getInline(control, type) !== value) {
                    if (value) {
                        ESBootstrap.Extensions.exchangeClass$1(control, type, System.String.concat(type, "-inline"));
                    } else {
                        ESBootstrap.Extensions.exchangeClass$1(control, System.String.concat(type, "-inline"), type);
                    }
                }
            },
            op_Implicit: function (control) {
                if (!control.hasAdded) {
                    control.onAdded();
                }
                return control.content;
            }
        },
        content: null,
        hasAdded: false,
        $ctor1: function (typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Widget.ctor.call(this, document.createElement('div'), typos);

        },
        ctor: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            this.content = element;
            ESBootstrap.Widget.appendTypos$1(this, typos);
        },
        getStyle: function () {
            return this.content.style;
        },
        getClassList: function () {
            return this.content.classList;
        },
        getId: function () {
            return this.content.id;
        },
        setId: function (value) {
            this.content.id = value;
        },
        getTabIndex: function () {
            return this.content.tabIndex;
        },
        setTabIndex: function (value) {
            this.content.tabIndex = value;
        },
        getActive: function () {
            return this.getClassTrue("active");
        },
        setActive: function (value) {
            this.setClassTrue("active", value);
        },
        getDisabled: function () {
            return this.getClassTrue("disabled");
        },
        setDisabled: function (value) {
            this.setClassTrue("disabled", value);
        },
        getContextualText: function () {
            return this.getContextual("text-");
        },
        setContextualText: function (value) {
            this.setContextual("text-", value);
        },
        getContextualBackground: function () {
            return this.getContextual("bg-");
        },
        setContextualBackground: function (value) {
            this.setContextual("bg-", value);
        },
        getNavBarPosition: function () {
            var x = this.getEnumClassValue$1(ESBootstrap.NavBarPosition);
            if (x == null) {
                return ESBootstrap.NavBarPosition.None;
            } else {
                return x;
            }
        },
        setNavBarPosition: function (value) {
            if (value === ESBootstrap.NavBarPosition.None) {
                this.clearEnumClassValue$1(ESBootstrap.NavBarPosition);
            } else {
                this.setEnumClassValue$1(ESBootstrap.NavBarPosition, System.String.replaceAll(System.Enum.format(ESBootstrap.NavBarPosition, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getWidth: function () {
            return this.content.style.width;
        },
        setWidth: function (value) {
            this.content.style.width = ESBootstrap.Extensions.toHtmlValue(value);
        },
        getHeight: function () {
            return this.content.style.height;
        },
        setHeight: function (value) {
            this.content.style.height = ESBootstrap.Extensions.toHtmlValue(value);
        },
        getLeft: function () {
            return this.content.style.left;
        },
        setLeft: function (value) {
            this.content.style.left = ESBootstrap.Extensions.toHtmlValue(value);
        },
        getTop: function () {
            return this.content.style.top;
        },
        setTop: function (value) {
            this.content.style.top = ESBootstrap.Extensions.toHtmlValue(value);
        },
        getSize: function () {
            return new ESBootstrap.Vector2.$ctor1(this.getWidth(), this.getHeight());
        },
        setSize: function (value) {
            this.setWidth(value.x);
            this.setHeight(value.y);
        },
        getLocation: function () {
            return new ESBootstrap.Vector2.$ctor1(this.getLeft(), this.getTop());
        },
        setLocation: function (value) {
            this.setLeft(value.x);
            this.setTop(value.y);
        },
        getBounds: function () {
            return new ESBootstrap.Vector4.$ctor1(this.getLeft(), this.getTop(), this.getWidth(), this.getHeight());
        },
        setBounds: function (value) {
            this.setLeft(value.x);
            this.setTop(value.y);
            this.setWidth(value.z);
            this.setHeight(value.m);
        },
        onAdded: function () {
            this.hasAdded = true;
        },
        focus: function () {
            this.content.focus();
        },
        blur: function () {
            this.content.blur();
        },
        getAttribute: function (name) {
            return this.content.getAttribute(name);
        },
        getAttributei: function (name) {
            return parseInt(this.content.getAttribute(name));
        },
        getAttributef: function (name) {
            return parseFloat(this.content.getAttribute(name));
        },
        setAttribute: function (name, value) {
            this.content.setAttribute(name, ESBootstrap.Extensions.toStr(value));

            return this;
        },
        getEnumClassValue$1: function (type) {
            return this.getEnumClassValue("", type);
        },
        getEnumClassValue: function (prefix, type) {
            var $t;
            var names = System.Enum.getNames(type);
            for (var i = 0; i < names.length; i = (i + 1) | 0) {
                $t = Bridge.getEnumerator(this.getClassList());
                while ($t.moveNext()) {
                    var item1 = $t.getCurrent();
                    if (Bridge.referenceEquals(item1, System.String.concat(prefix, System.String.replaceAll(names[i].toLowerCase(), "_", "-")))) {
                        return System.Enum.getValues(type)[i];
                    }
                }
            }
            return null;
        },
        clearEnumClassValue$1: function (type) {
            this.clearEnumClassValue("", type);
        },
        clearEnumClassValue: function (prefix, type) {
            var names = System.Enum.getNames(type);
            for (var i = 0; i < names.length; i = (i + 1) | 0) {
                this.getClassList().remove(System.String.concat(prefix, System.String.replaceAll(names[i].toLowerCase(), "_", "-")));
            }
        },
        setEnumClassValue$1: function (type, value) {
            this.setEnumClassValue("", type, value);
        },
        setEnumClassValue: function (prefix, type, value) {
            this.clearEnumClassValue(prefix, type);
            this.getClassList().add(System.String.concat(prefix, value));
        },
        getClassTrue: function (classStr) {
            return this.getClassList().contains(classStr);
        },
        setClassTrue: function (classStr, value) {
            if (value === this.getClassTrue(classStr)) {
                return;
            }
            if (value) {
                this.getClassList().add(classStr);
            } else {
                this.getClassList().remove(classStr);
            }
        },
        getContextual: function (type) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    return this.getClassList()[i];
                }
            }
            return "";
        },
        setContextual: function (type, value) {
            var length = this.getClassList().length;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (System.String.startsWith(this.getClassList()[i], type)) {
                    this.getClassList().remove(this.getClassList()[i]);
                    break;
                }
            }
            if (!System.String.isNullOrWhiteSpace(value) && System.String.startsWith(value, type)) {
                this.getClassList().add(value);
            }
        }
    });

    Bridge.define("ESBootstrap.BootFormType", {
        $kind: "enum",
        statics: {
            None: 0,
            Inline: 1,
            Horizontal: 2
        }
    });

    Bridge.define("ESBootstrap.BootParagraphAlignment", {
        $kind: "enum",
        statics: {
            Left: 0,
            Center: 1,
            Right: 2,
            Justify: 3,
            Nowrap: 4
        }
    });

    Bridge.define("ESBootstrap.BootParagraphTransformation", {
        $kind: "enum",
        statics: {
            Lowercase: 0,
            Uppercase: 1,
            Capitalize: 2
        }
    });

    Bridge.define("ESBootstrap.BootRowCellTheme", {
        $kind: "enum",
        statics: {
            Active: 0,
            Success: 1,
            Warning: 2,
            Danger: 3,
            Info: 4
        }
    });

    Bridge.define("ESBootstrap.BootSize", {
        $kind: "enum",
        statics: {
            None: 0,
            LG: 1,
            MD: 2,
            SM: 3,
            XS: 4
        }
    });

    Bridge.define("ESBootstrap.BootTheme", {
        $kind: "enum",
        statics: {
            None: 0,
            Default: 1,
            Primary: 2,
            Success: 3,
            Info: 4,
            Warning: 5,
            Danger: 6,
            Link: 7
        }
    });

    Bridge.define("ESBootstrap.ColExtentions", {
        statics: {
            applyColumns: function (widget, colClasses) {
                if (colClasses === void 0) { colClasses = []; }
                var length;
                if (widget != null && colClasses != null && ((length = colClasses.length)) > 0) {
                    var builder = new System.Text.StringBuilder();

                    for (var i = 0; i < length; i = (i + 1) | 0) {
                        widget.getClassList().add(colClasses[i].value);
                    }
                }
                return widget;
            }
        }
    });

    Bridge.define("ESBootstrap.Color", {
        $kind: "struct",
        statics: {
            ctor: function () {
                ESBootstrap.Color.empty = new ESBootstrap.Color.ctor();
                ESBootstrap.Color.stateKnownColorValid = 1;
                ESBootstrap.Color.stateARGBValueValid = 2;
                ESBootstrap.Color.stateValueMask = ESBootstrap.Color.stateARGBValueValid;
                ESBootstrap.Color.stateNameValid = 8;
                ESBootstrap.Color.notDefinedValue = System.Int64(0);
            },
            stateKnownColorValid: 0,
            stateARGBValueValid: 0,
            stateValueMask: 0,
            stateNameValid: 0,
            notDefinedValue: System.Int64(0),
            ARGBAlphaShift: 24,
            ARGBRedShift: 16,
            ARGBGreenShift: 8,
            ARGBBlueShift: 0,
            q: 255.0,
            config: {
                init: function () {
                    this.empty = new ESBootstrap.Color();
                }
            },
            getTransparent: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Transparent);
            },
            getAliceBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.AliceBlue);
            },
            getAntiqueWhite: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.AntiqueWhite);
            },
            getAqua: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Aqua);
            },
            getAquamarine: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Aquamarine);
            },
            getAzure: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Azure);
            },
            getBeige: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Beige);
            },
            getBisque: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Bisque);
            },
            getBlack: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Black);
            },
            getBlanchedAlmond: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.BlanchedAlmond);
            },
            getBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Blue);
            },
            getBlueViolet: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.BlueViolet);
            },
            getBrown: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Brown);
            },
            getBurlyWood: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.BurlyWood);
            },
            getCadetBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.CadetBlue);
            },
            getChartreuse: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Chartreuse);
            },
            getChocolate: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Chocolate);
            },
            getCoral: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Coral);
            },
            getCornflowerBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.CornflowerBlue);
            },
            getCornsilk: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Cornsilk);
            },
            getCrimson: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Crimson);
            },
            getCyan: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Cyan);
            },
            getDarkBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkBlue);
            },
            getDarkCyan: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkCyan);
            },
            getDarkGoldenrod: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkGoldenrod);
            },
            getDarkGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkGray);
            },
            getDarkGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkGreen);
            },
            getDarkKhaki: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkKhaki);
            },
            getDarkMagenta: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkMagenta);
            },
            getDarkOliveGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkOliveGreen);
            },
            getDarkOrange: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkOrange);
            },
            getDarkOrchid: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkOrchid);
            },
            getDarkRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkRed);
            },
            getDarkSalmon: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkSalmon);
            },
            getDarkSeaGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkSeaGreen);
            },
            getDarkSlateBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkSlateBlue);
            },
            getDarkSlateGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkSlateGray);
            },
            getDarkTurquoise: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkTurquoise);
            },
            getDarkViolet: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DarkViolet);
            },
            getDeepPink: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DeepPink);
            },
            getDeepSkyBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DeepSkyBlue);
            },
            getDimGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DimGray);
            },
            getDodgerBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.DodgerBlue);
            },
            getFirebrick: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Firebrick);
            },
            getFloralWhite: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.FloralWhite);
            },
            getForestGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.ForestGreen);
            },
            getFuchsia: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Fuchsia);
            },
            getGainsboro: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Gainsboro);
            },
            getGhostWhite: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.GhostWhite);
            },
            getGold: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Gold);
            },
            getGoldenrod: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Goldenrod);
            },
            getGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Gray);
            },
            getGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Green);
            },
            getGreenYellow: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.GreenYellow);
            },
            getHoneydew: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Honeydew);
            },
            getHotPink: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.HotPink);
            },
            getIndianRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.IndianRed);
            },
            getIndigo: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Indigo);
            },
            getIvory: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Ivory);
            },
            getKhaki: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Khaki);
            },
            getLavender: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Lavender);
            },
            getLavenderBlush: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LavenderBlush);
            },
            getLawnGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LawnGreen);
            },
            getLemonChiffon: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LemonChiffon);
            },
            getLightBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightBlue);
            },
            getLightCoral: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightCoral);
            },
            getLightCyan: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightCyan);
            },
            getLightGoldenrodYellow: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightGoldenrodYellow);
            },
            getLightGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightGreen);
            },
            getLightGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightGray);
            },
            getLightPink: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightPink);
            },
            getLightSalmon: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightSalmon);
            },
            getLightSeaGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightSeaGreen);
            },
            getLightSkyBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightSkyBlue);
            },
            getLightSlateGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightSlateGray);
            },
            getLightSteelBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightSteelBlue);
            },
            getLightYellow: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LightYellow);
            },
            getLime: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Lime);
            },
            getLimeGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.LimeGreen);
            },
            getLinen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Linen);
            },
            getMagenta: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Magenta);
            },
            getMaroon: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Maroon);
            },
            getMediumAquamarine: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumAquamarine);
            },
            getMediumBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumBlue);
            },
            getMediumOrchid: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumOrchid);
            },
            getMediumPurple: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumPurple);
            },
            getMediumSeaGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumSeaGreen);
            },
            getMediumSlateBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumSlateBlue);
            },
            getMediumSpringGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumSpringGreen);
            },
            getMediumTurquoise: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumTurquoise);
            },
            getMediumVioletRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MediumVioletRed);
            },
            getMidnightBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MidnightBlue);
            },
            getMintCream: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MintCream);
            },
            getMistyRose: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.MistyRose);
            },
            getMoccasin: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Moccasin);
            },
            getNavajoWhite: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.NavajoWhite);
            },
            getNavy: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Navy);
            },
            getOldLace: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.OldLace);
            },
            getOlive: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Olive);
            },
            getOliveDrab: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.OliveDrab);
            },
            getOrange: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Orange);
            },
            getOrangeRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.OrangeRed);
            },
            getOrchid: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Orchid);
            },
            getPaleGoldenrod: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PaleGoldenrod);
            },
            getPaleGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PaleGreen);
            },
            getPaleTurquoise: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PaleTurquoise);
            },
            getPaleVioletRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PaleVioletRed);
            },
            getPapayaWhip: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PapayaWhip);
            },
            getPeachPuff: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PeachPuff);
            },
            getPeru: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Peru);
            },
            getPink: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Pink);
            },
            getPlum: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Plum);
            },
            getPowderBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.PowderBlue);
            },
            getPurple: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Purple);
            },
            getRed: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Red);
            },
            getRosyBrown: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.RosyBrown);
            },
            getRoyalBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.RoyalBlue);
            },
            getSaddleBrown: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SaddleBrown);
            },
            getSalmon: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Salmon);
            },
            getSandyBrown: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SandyBrown);
            },
            getSeaGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SeaGreen);
            },
            getSeaShell: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SeaShell);
            },
            getSienna: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Sienna);
            },
            getSilver: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Silver);
            },
            getSkyBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SkyBlue);
            },
            getSlateBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SlateBlue);
            },
            getSlateGray: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SlateGray);
            },
            getSnow: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Snow);
            },
            getSpringGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SpringGreen);
            },
            getSteelBlue: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.SteelBlue);
            },
            getTan: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Tan);
            },
            getTeal: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Teal);
            },
            getThistle: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Thistle);
            },
            getTomato: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Tomato);
            },
            getTurquoise: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Turquoise);
            },
            getViolet: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Violet);
            },
            getWheat: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Wheat);
            },
            getWhite: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.White);
            },
            getWhiteSmoke: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.WhiteSmoke);
            },
            getYellow: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.Yellow);
            },
            getYellowGreen: function () {
                return new ESBootstrap.Color.$ctor1(ESBootstrap.KnownColor.YellowGreen);
            },
            checkByte: function (value) {
                if ((value < 0) || (value > 255)) {
                    throw new System.ArgumentException("InvalidEx2BoundArgument");
                }
            },
            makeArgb: function (alpha, red, green, blue) {
                return System.Int64.clip64(Bridge.Int.clipu64((((red << 16) | (green << 8)) | blue) | (alpha << 24)).and(System.UInt64(System.Int64([-1,0]))));
            },
            fromArgb: function (argb) {
                return new ESBootstrap.Color.$ctor2(System.Int64(argb).and((System.Int64([-1,0]))), ESBootstrap.Color.stateARGBValueValid, null, 0);
            },
            fromArgb$3: function (alpha, red, green, blue) {
                ESBootstrap.Color.checkByte(alpha);
                ESBootstrap.Color.checkByte(red);
                ESBootstrap.Color.checkByte(green);
                ESBootstrap.Color.checkByte(blue);
                return new ESBootstrap.Color.$ctor2(ESBootstrap.Color.makeArgb((alpha & 255), (red & 255), (green & 255), (blue & 255)), ESBootstrap.Color.stateARGBValueValid, null, 0);
            },
            fromArgb$1: function (alpha, baseColor) {
                ESBootstrap.Color.checkByte(alpha);
                return new ESBootstrap.Color.$ctor2(ESBootstrap.Color.makeArgb((alpha & 255), baseColor.getR(), baseColor.getG(), baseColor.getB()), ESBootstrap.Color.stateARGBValueValid, null, 0);
            },
            fromArgb$2: function (red, green, blue) {
                return ESBootstrap.Color.fromArgb$3(255, red, green, blue);
            },
            isEnumValid: function (enumValue, value, minValue, maxValue) {
                return ((value >= minValue) && (value <= maxValue));
            },
            fromKnownColor: function (color) {
                return new ESBootstrap.Color.$ctor1(color);
            },
            fromHex: function (value) {
                if (System.String.startsWith(value, "#")) {
                    return ESBootstrap.Color.fromHex(value.substr(1));
                } else {
                    return ESBootstrap.Color.fromArgb(parseInt(value));
                }
            },
            op_Implicit$1: function (color) {
                return color.toHex();
            },
            op_Implicit: function (hexValue) {
                return ESBootstrap.Color.fromHex(hexValue);
            },
            op_Equality: function (left, right) {
                if (((left.value.ne(right.value)) || (left.state !== right.state)) || (left.knownColor !== right.knownColor)) {
                    return false;
                }
                return ((Bridge.referenceEquals(left.name, right.name)) || (((left.name != null) && (right.name != null)) && System.String.equals(left.name, right.name)));
            },
            op_Inequality: function (left, right) {
                return !(ESBootstrap.Color.op_Equality(left, right));
            },
            getDefaultValue: function () { return new ESBootstrap.Color(); }
        },
        name: null,
        value: System.Int64(0),
        knownColor: 0,
        state: 0,
        $ctor1: function (knownColor) {
            this.$initialize();
            this.value = System.Int64(0);
            this.state = ESBootstrap.Color.stateKnownColorValid;
            this.name = null;
            this.knownColor = Bridge.Int.sxs(knownColor & 65535);
        },
        $ctor2: function (value, state, name, knownColor) {
            this.$initialize();
            this.value = value;
            this.state = state;
            this.name = name;
            this.knownColor = Bridge.Int.sxs(knownColor & 65535);
        },
        ctor: function () {
            this.$initialize();
        },
        getR: function () {
            return System.Int64.clipu8((this.getValue().shr(16)).and(System.Int64(255)));
        },
        getG: function () {
            return System.Int64.clipu8((this.getValue().shr(8)).and(System.Int64(255)));
        },
        getB: function () {
            return System.Int64.clipu8(this.getValue().and(System.Int64(255)));
        },
        getA: function () {
            return System.Int64.clipu8((this.getValue().shr(24)).and(System.Int64(255)));
        },
        getIsKnownColor: function () {
            return ((this.state & ESBootstrap.Color.stateKnownColorValid) > 0);
        },
        getIsEmpty: function () {
            return (this.state === 0);
        },
        getIsNamedColor: function () {
            if ((this.state & ESBootstrap.Color.stateNameValid) === 0) {
                return this.getIsKnownColor();
            }
            return true;
        },
        getIsSystemColor: function () {
            if (!this.getIsKnownColor()) {
                return false;
            }
            if (this.knownColor > 26) {
                return (this.knownColor > 167);
            }
            return true;
        },
        getNameAndARGBValue: function () {
            return System.String.format("{{Name={0}, ARGB=({1}, {2}, {3}, {4})}}", this.getName(), this.getA(), this.getR(), this.getG(), this.getB());
        },
        getName: function () {
            if ((this.state & ESBootstrap.Color.stateNameValid) !== 0) {
                return this.name;
            }
            if (!this.getIsKnownColor()) {
                return System.Convert.toStringInBase(this.value, 16, 11);
            }
            var str = ESBootstrap.KnownColorTable.knownColorToName(this.knownColor);
            if (str != null) {
                return str;
            }
            return this.knownColor.toString();
        },
        getValue: function () {
            if ((this.state & ESBootstrap.Color.stateValueMask) !== 0) {
                return this.value;
            }
            if (this.getIsKnownColor()) {
                return System.Int64(ESBootstrap.KnownColorTable.knownColorToArgb(this.knownColor));
            }
            return ESBootstrap.Color.notDefinedValue;
        },
        componentToHex: function (value) {
            var x = value.toString(16);
            return System.String.concat((x.length === 1 ? "0" : ""), x);
        },
        toHex: function () {
            if (this.getA() !== 255) {
                return System.String.format("#{0}{1}{2}{3}", this.componentToHex(this.getA()), this.componentToHex(this.getR()), this.componentToHex(this.getG()), this.componentToHex(this.getB())); // "#" + (155).toString(16) + (102).toString(16) + (102).toString(16);
            } else {
                return System.String.format("#{0}{1}{2}", this.componentToHex(this.getR()), this.componentToHex(this.getG()), this.componentToHex(this.getB())); // "#" + (155).toString(16) + (102).toString(16) + (102).toString(16);
            }
        },
        getBrightness: function () {
            var z = this.getR() / ESBootstrap.Color.q;
            var x = this.getG() / ESBootstrap.Color.q;
            var c = this.getB() / ESBootstrap.Color.q;
            var v = z;
            var b = z;
            if (x > v) {
                v = x;
            }
            if (c > v) {
                v = c;
            }
            if (x < b) {
                b = x;
            }
            if (c < b) {
                b = c;
            }
            return ((v + b) / 2.0);
        },
        getHue: function () {
            if ((this.getR() === this.getG()) && (this.getG() === this.getB())) {
                return 0.0;
            }
            var z = this.getR() / ESBootstrap.Color.q;
            var x = this.getG() / ESBootstrap.Color.q;
            var c = this.getB() / ESBootstrap.Color.q;
            var v = 0.0;
            var b = z;
            var n = z;
            if (x > b) {
                b = x;
            }
            if (c > b) {
                b = c;
            }
            if (x < n) {
                n = x;
            }
            if (c < n) {
                n = c;
            }
            var num6 = b - n;
            if (z === b) {
                v = (x - c) / num6;
            } else if (x === b) {
                v = 2.0 + ((c - z) / num6);
            } else if (c === b) {
                v = 4.0 + ((z - x) / num6);
            }
            v *= 60.0;
            if (v < 0.0) {
                v += 360.0;
            }
            return v;
        },
        getSaturation: function () {
            var z = this.getR() / ESBootstrap.Color.q;
            var x = this.getG() / ESBootstrap.Color.q;
            var c = this.getB() / ESBootstrap.Color.q;
            var v = 0.0;
            var b = z;
            var n = z;
            if (x > b) {
                b = x;
            }
            if (c > b) {
                b = c;
            }
            if (x < n) {
                n = x;
            }
            if (c < n) {
                n = c;
            }
            if (b === n) {
                return v;
            }
            var m = (b + n) / 2.0;
            if (m <= 0.5) {
                return ((b - n) / (b + n));
            }
            return ((b - n) / ((2.0 - b) - n));
        },
        toArgb: function () {
            return System.Int64.clip32(this.getValue());
        },
        toKnownColor: function () {
            return this.knownColor;
        },
        toString: function () {
            var builder = new System.Text.StringBuilder("", 32);
            builder.append(Bridge.Reflection.getTypeName(Bridge.getType(this)));
            builder.append(" [");
            if ((this.state & ESBootstrap.Color.stateNameValid) !== 0) {
                builder.append(this.getName());
            } else if ((this.state & ESBootstrap.Color.stateKnownColorValid) !== 0) {
                builder.append(this.getName());
            } else if ((this.state & ESBootstrap.Color.stateValueMask) !== 0) {
                builder.appendFormat("A={0}, R={1}, G={2}, B={3}", this.getA(), this.getR(), this.getG(), this.getB());
            } else {
                builder.append("Empty");
            }
            builder.append("]");
            return builder.toString();
        },
        equals: function (obj) {
            if (Bridge.is(obj, ESBootstrap.Color)) {
                var color = System.Nullable.getValue(Bridge.cast(obj, ESBootstrap.Color));
                if (((this.value.equals(color.value)) && (this.state === color.state)) && (this.knownColor === color.knownColor)) {
                    return ((Bridge.referenceEquals(this.name, color.name)) || (((this.name != null) && (color.name != null)) && System.String.equals(this.name, this.name)));
                }
            }
            return false;
        },
        getHashCode: function () {
            return ((Bridge.getHashCode(this.value) ^ Bridge.getHashCode(this.state)) ^ Bridge.getHashCode(this.knownColor));
        },
        $clone: function (to) {
            var s = to || new ESBootstrap.Color();
            s.name = this.name;
            s.value = this.value;
            s.knownColor = this.knownColor;
            s.state = this.state;
            return s;
        }
    });

    Bridge.define("ESBootstrap.Contextual");

    Bridge.define("ESBootstrap.Contextual.Background", {
        statics: {
            Primary: "bg-primary",
            Success: "bg-success",
            Info: "bg-info",
            Warning: "bg-warning",
            Danger: "bg-danger"
        }
    });

    Bridge.define("ESBootstrap.Contextual.Text", {
        statics: {
            Muted: "text-muted",
            Primary: "text-primary",
            Success: "text-success",
            Info: "text-info",
            Warning: "text-warning",
            Danger: "text-danger"
        }
    });

    Bridge.define("ESBootstrap.Extensions", {
        statics: {
            getText: function (element) {
                if (element == null) {
                    return "";
                }

                if (Bridge.is(element, HTMLInputElement) && element.type === "checkbox") {
                    return System.Boolean.toString(element.checked);
                } else {
                    return element.value;
                }
            },
            setText: function (element, value) {
                if (element == null) {
                    return;
                }

                if (Bridge.is(element, HTMLInputElement) && element.type === "checkbox") {
                    value = value.toLowerCase();
                    element.checked = ESBootstrap.Extensions.isTrue(value) === 1;
                } else {
                    element.value = value;
                }
            },
            toHtmlValue: function (value) {
                if (Bridge.is(value, String)) {
                    return value;
                } else {
                    if (Bridge.is(value, System.Int32)) {
                        return ESBootstrap.Extensions.toPx(value);
                    } else {
                        return ESBootstrap.Extensions.toPx(value);
                    }
                }
            },
            isTrue: function (value) {
                return (Bridge.referenceEquals(((value = value.toLowerCase())), "true") || Bridge.referenceEquals(value, "1") || Bridge.referenceEquals(value, "on")) ? 1 : 0;
            },
            toInt: function (value) {
                return parseInt(value);
            },
            toFloat: function (value) {
                return parseFloat(value);
            },
            toStr: function (value) {
                return value;
            },
            isNumber: function (value) {
                return Bridge.is(value, System.SByte) || Bridge.is(value, System.Byte) || Bridge.is(value, System.Int16) || Bridge.is(value, System.UInt16) || Bridge.is(value, System.Int32) || Bridge.is(value, System.UInt32) || Bridge.is(value, System.Int64) || Bridge.is(value, System.UInt64) || Bridge.is(value, System.Single) || Bridge.is(value, System.Double) || Bridge.is(value, System.Decimal);
            },
            toPx: function (i) {
                return i + 'px';
            },
            empty: function (element) {
                
			var len = element.childNodes.length;
			while(len--)
			{
				element.removeChild(element.lastChild);
			};
			
            },
            getClientMouseLocation: function (e) {
                var x = 0;
                var y = 0;
                			  
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
			
                return new ESBootstrap.Vector2.$ctor1(x, y);
            },
            appendChildren$1: function (c, Nodes) {
                if (Nodes === void 0) { Nodes = []; }
                if (Nodes != null && Nodes.length > 0) {
                    for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                        c.appendChild(Nodes[i]);
                    }
                }
            },
            appendChildren: function (c, Nodes) {
                if (Nodes === void 0) { Nodes = []; }
                ESBootstrap.Extensions.appendChildren$2(c.content, Nodes);

                return c;
            },
            appendChildren$2: function (c, Nodes) {
                if (Nodes === void 0) { Nodes = []; }
                if (Nodes != null && Nodes.length > 0) {
                    for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                        c.appendChild(ESBootstrap.Widget.op_Implicit(Nodes[i]));
                    }
                }
            },
            appendChildrenTabIndex: function (c, Nodes) {
                if (Nodes === void 0) { Nodes = []; }
                if (Nodes != null && Nodes.length > 0) {
                    for (var i = 0; i < Nodes.length; i = (i + 1) | 0) {
                        Nodes[i].content.tabIndex = i;
                        c.appendChild(ESBootstrap.Widget.op_Implicit(Nodes[i]));
                    }
                }
            },
            appendChildrenTabIndex$1: function (c, Nodes) {
                if (Nodes === void 0) { Nodes = []; }
                ESBootstrap.Extensions.appendChildrenTabIndex(c.content, Nodes);
            },
            appendChild: function (c, Node) {
                c.content.appendChild(ESBootstrap.Widget.op_Implicit(Node));
                return c;
            },
            /**
             * HtmlEscape XSS
             *
             * @static
             * @public
             * @this ESBootstrap.Extensions
             * @memberof ESBootstrap.Extensions
             * @param   {Object}    obj
             * @return  {string}
             */
            htmlEscape: function (obj) {
                return ESBootstrap.Extensions.htmlEscape$1((Bridge.as(obj, String)));
            },
            /**
             * HtmlEscape XSS
             *
             * @static
             * @public
             * @this ESBootstrap.Extensions
             * @memberof ESBootstrap.Extensions
             * @param   {string}    input
             * @return  {string}
             */
            htmlEscape$1: function (input) {
                return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(ESBootstrap.Extensions.htmlUrlEscape(input), "\\/", "&#x2F"), "\"", "&quot") : "";
            },
            /**
             * HtmlUrlUnescape XSS
             *
             * @static
             * @public
             * @this ESBootstrap.Extensions
             * @memberof ESBootstrap.Extensions
             * @param   {string}    input
             * @return  {string}
             */
            htmlUrlUnescape: function (input) {
                return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(input, "&amp", "&"), "&lt", "<"), "&gt", ">"), "&#x27", "'") : "";
            },
            /**
             * HtmlUrlEscape XSS
             *
             * @static
             * @public
             * @this ESBootstrap.Extensions
             * @memberof ESBootstrap.Extensions
             * @param   {string}    input
             * @return  {string}
             */
            htmlUrlEscape: function (input) {
                return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(System.String.replaceAll(input, "&", "&amp"), "<", "&lt"), ">", "&gt"), "'", "&#x27") : "";
            },
            /**
             * HtmlUnescape XSS
             *
             * @static
             * @public
             * @this ESBootstrap.Extensions
             * @memberof ESBootstrap.Extensions
             * @param   {string}    input
             * @return  {string}
             */
            htmlUnescape: function (input) {
                return !System.String.isNullOrEmpty(input) ? System.String.replaceAll(System.String.replaceAll(ESBootstrap.Extensions.htmlUrlUnescape(input), "&#x2F", "\\/"), "&quot", "\"") : "";
            },
            exchangeClass$1: function (control, oldClass, newClass) {
                ESBootstrap.Extensions.exchangeClass(control.content, oldClass, newClass);

            },
            exchangeClass: function (control, oldClass, newClass) {
                if (control.classList.contains(oldClass)) {
                    control.classList.remove(oldClass);
                }
                if (!control.classList.contains(newClass)) {
                    control.classList.add(newClass);
                }
            },
            getClassTheme: function (cls, type) {
                if (type === ESBootstrap.BootTheme.None) {
                    return "";
                }
                return System.String.concat(cls, System.Enum.format(ESBootstrap.BootTheme, type, "G").toLowerCase());
            }
        }
    });

    Bridge.define("ESBootstrap.KnownColor", {
        $kind: "enum",
        statics: {
            ActiveBorder: 1,
            ActiveCaption: 2,
            ActiveCaptionText: 3,
            AliceBlue: 28,
            AntiqueWhite: 29,
            AppWorkspace: 4,
            Aqua: 30,
            Aquamarine: 31,
            Azure: 32,
            Beige: 33,
            Bisque: 34,
            Black: 35,
            BlanchedAlmond: 36,
            Blue: 37,
            BlueViolet: 38,
            Brown: 39,
            BurlyWood: 40,
            ButtonFace: 168,
            ButtonHighlight: 169,
            ButtonShadow: 170,
            CadetBlue: 41,
            Chartreuse: 42,
            Chocolate: 43,
            Control: 5,
            ControlDark: 6,
            ControlDarkDark: 7,
            ControlLight: 8,
            ControlLightLight: 9,
            ControlText: 10,
            Coral: 44,
            CornflowerBlue: 45,
            Cornsilk: 46,
            Crimson: 47,
            Cyan: 48,
            DarkBlue: 49,
            DarkCyan: 50,
            DarkGoldenrod: 51,
            DarkGray: 52,
            DarkGreen: 53,
            DarkKhaki: 54,
            DarkMagenta: 55,
            DarkOliveGreen: 56,
            DarkOrange: 57,
            DarkOrchid: 58,
            DarkRed: 59,
            DarkSalmon: 60,
            DarkSeaGreen: 61,
            DarkSlateBlue: 62,
            DarkSlateGray: 63,
            DarkTurquoise: 64,
            DarkViolet: 65,
            DeepPink: 66,
            DeepSkyBlue: 67,
            Desktop: 11,
            DimGray: 68,
            DodgerBlue: 69,
            Firebrick: 70,
            FloralWhite: 71,
            ForestGreen: 72,
            Fuchsia: 73,
            Gainsboro: 74,
            GhostWhite: 75,
            Gold: 76,
            Goldenrod: 77,
            GradientActiveCaption: 171,
            GradientInactiveCaption: 172,
            Gray: 78,
            GrayText: 12,
            Green: 79,
            GreenYellow: 80,
            Highlight: 13,
            HighlightText: 14,
            Honeydew: 81,
            HotPink: 82,
            HotTrack: 15,
            InactiveBorder: 16,
            InactiveCaption: 17,
            InactiveCaptionText: 18,
            IndianRed: 83,
            Indigo: 84,
            Info: 19,
            InfoText: 20,
            Ivory: 85,
            Khaki: 86,
            Lavender: 87,
            LavenderBlush: 88,
            LawnGreen: 89,
            LemonChiffon: 90,
            LightBlue: 91,
            LightCoral: 92,
            LightCyan: 93,
            LightGoldenrodYellow: 94,
            LightGray: 95,
            LightGreen: 96,
            LightPink: 97,
            LightSalmon: 98,
            LightSeaGreen: 99,
            LightSkyBlue: 100,
            LightSlateGray: 101,
            LightSteelBlue: 102,
            LightYellow: 103,
            Lime: 104,
            LimeGreen: 105,
            Linen: 106,
            Magenta: 107,
            Maroon: 108,
            MediumAquamarine: 109,
            MediumBlue: 110,
            MediumOrchid: 111,
            MediumPurple: 112,
            MediumSeaGreen: 113,
            MediumSlateBlue: 114,
            MediumSpringGreen: 115,
            MediumTurquoise: 116,
            MediumVioletRed: 117,
            Menu: 21,
            MenuBar: 173,
            MenuHighlight: 174,
            MenuText: 22,
            MidnightBlue: 118,
            MintCream: 119,
            MistyRose: 120,
            Moccasin: 121,
            NavajoWhite: 122,
            Navy: 123,
            OldLace: 124,
            Olive: 125,
            OliveDrab: 126,
            Orange: 127,
            OrangeRed: 128,
            Orchid: 129,
            PaleGoldenrod: 130,
            PaleGreen: 131,
            PaleTurquoise: 132,
            PaleVioletRed: 133,
            PapayaWhip: 134,
            PeachPuff: 135,
            Peru: 136,
            Pink: 137,
            Plum: 138,
            PowderBlue: 139,
            Purple: 140,
            Red: 141,
            RosyBrown: 142,
            RoyalBlue: 143,
            SaddleBrown: 144,
            Salmon: 145,
            SandyBrown: 146,
            ScrollBar: 23,
            SeaGreen: 147,
            SeaShell: 148,
            Sienna: 149,
            Silver: 150,
            SkyBlue: 151,
            SlateBlue: 152,
            SlateGray: 153,
            Snow: 154,
            SpringGreen: 155,
            SteelBlue: 156,
            Tan: 157,
            Teal: 158,
            Thistle: 159,
            Tomato: 160,
            Transparent: 27,
            Turquoise: 161,
            Violet: 162,
            Wheat: 163,
            White: 164,
            WhiteSmoke: 165,
            Window: 24,
            WindowFrame: 25,
            WindowText: 26,
            Yellow: 166,
            YellowGreen: 167
        }
    });

    Bridge.define("ESBootstrap.KnownColorTable", {
        statics: {
            AlphaShift: 24,
            BlueShift: 0,
            colorNameTable: null,
            colorTable: null,
            GreenShift: 8,
            RedShift: 16,
            Win32BlueShift: 16,
            Win32GreenShift: 8,
            Win32RedShift: 0,
            argbToKnownColor: function (targetARGB) {
                ESBootstrap.KnownColorTable.ensureColorTable();
                for (var i = 0; i < ESBootstrap.KnownColorTable.colorTable.length; i = (i + 1) | 0) {
                    var num2 = ESBootstrap.KnownColorTable.colorTable[i];
                    if (num2 === targetARGB) {
                        var color = ESBootstrap.Color.fromKnownColor(i).$clone();
                        if (!color.getIsSystemColor()) {
                            return color.$clone();
                        }
                    }
                }
                return ESBootstrap.Color.fromArgb(targetARGB);
            },
            encode: function (alpha, red, green, blue) {
                return ((((red << 16) | (green << 8)) | blue) | (alpha << 24));
            },
            ensureColorNameTable: function () {
                if (ESBootstrap.KnownColorTable.colorNameTable == null) {
                    ESBootstrap.KnownColorTable.initColorNameTable();
                }
            },
            ensureColorTable: function () {
                if (ESBootstrap.KnownColorTable.colorTable == null) {
                    ESBootstrap.KnownColorTable.initColorTable();
                }
            },
            fromWin32Value: function (value) {
                return ESBootstrap.KnownColorTable.encode(255, value & 255, (value >> 8) & 255, (value >> 16) & 255);
            },
            initColorNameTable: function () {
                var s = System.Array.init(175, null, String);
                s[1] = "ActiveBorder";
                s[2] = "ActiveCaption";
                s[3] = "ActiveCaptionText";
                s[4] = "AppWorkspace";
                s[168] = "ButtonFace";
                s[169] = "ButtonHighlight";
                s[170] = "ButtonShadow";
                s[5] = "Control";
                s[6] = "ControlDark";
                s[7] = "ControlDarkDark";
                s[8] = "ControlLight";
                s[9] = "ControlLightLight";
                s[10] = "ControlText";
                s[11] = "Desktop";
                s[171] = "GradientActiveCaption";
                s[172] = "GradientInactiveCaption";
                s[12] = "GrayText";
                s[13] = "Highlight";
                s[14] = "HighlightText";
                s[15] = "HotTrack";
                s[16] = "InactiveBorder";
                s[17] = "InactiveCaption";
                s[18] = "InactiveCaptionText";
                s[19] = "Info";
                s[20] = "InfoText";
                s[21] = "Menu";
                s[173] = "MenuBar";
                s[174] = "MenuHighlight";
                s[22] = "MenuText";
                s[23] = "ScrollBar";
                s[24] = "Window";
                s[25] = "WindowFrame";
                s[26] = "WindowText";
                s[27] = "Transparent";
                s[28] = "AliceBlue";
                s[29] = "AntiqueWhite";
                s[30] = "Aqua";
                s[31] = "Aquamarine";
                s[32] = "Azure";
                s[33] = "Beige";
                s[34] = "Bisque";
                s[35] = "Black";
                s[36] = "BlanchedAlmond";
                s[37] = "Blue";
                s[38] = "BlueViolet";
                s[39] = "Brown";
                s[40] = "BurlyWood";
                s[41] = "CadetBlue";
                s[42] = "Chartreuse";
                s[43] = "Chocolate";
                s[44] = "Coral";
                s[45] = "CornflowerBlue";
                s[46] = "Cornsilk";
                s[47] = "Crimson";
                s[48] = "Cyan";
                s[49] = "DarkBlue";
                s[50] = "DarkCyan";
                s[51] = "DarkGoldenrod";
                s[52] = "DarkGray";
                s[53] = "DarkGreen";
                s[54] = "DarkKhaki";
                s[55] = "DarkMagenta";
                s[56] = "DarkOliveGreen";
                s[57] = "DarkOrange";
                s[58] = "DarkOrchid";
                s[59] = "DarkRed";
                s[60] = "DarkSalmon";
                s[61] = "DarkSeaGreen";
                s[62] = "DarkSlateBlue";
                s[63] = "DarkSlateGray";
                s[64] = "DarkTurquoise";
                s[65] = "DarkViolet";
                s[66] = "DeepPink";
                s[67] = "DeepSkyBlue";
                s[68] = "DimGray";
                s[69] = "DodgerBlue";
                s[70] = "Firebrick";
                s[71] = "FloralWhite";
                s[72] = "ForestGreen";
                s[73] = "Fuchsia";
                s[74] = "Gainsboro";
                s[75] = "GhostWhite";
                s[76] = "Gold";
                s[77] = "Goldenrod";
                s[78] = "Gray";
                s[79] = "Green";
                s[80] = "GreenYellow";
                s[81] = "Honeydew";
                s[82] = "HotPink";
                s[83] = "IndianRed";
                s[84] = "Indigo";
                s[85] = "Ivory";
                s[86] = "Khaki";
                s[87] = "Lavender";
                s[88] = "LavenderBlush";
                s[89] = "LawnGreen";
                s[90] = "LemonChiffon";
                s[91] = "LightBlue";
                s[92] = "LightCoral";
                s[93] = "LightCyan";
                s[94] = "LightGoldenrodYellow";
                s[95] = "LightGray";
                s[96] = "LightGreen";
                s[97] = "LightPink";
                s[98] = "LightSalmon";
                s[99] = "LightSeaGreen";
                s[100] = "LightSkyBlue";
                s[101] = "LightSlateGray";
                s[102] = "LightSteelBlue";
                s[103] = "LightYellow";
                s[104] = "Lime";
                s[105] = "LimeGreen";
                s[106] = "Linen";
                s[107] = "Magenta";
                s[108] = "Maroon";
                s[109] = "MediumAquamarine";
                s[110] = "MediumBlue";
                s[111] = "MediumOrchid";
                s[112] = "MediumPurple";
                s[113] = "MediumSeaGreen";
                s[114] = "MediumSlateBlue";
                s[115] = "MediumSpringGreen";
                s[116] = "MediumTurquoise";
                s[117] = "MediumVioletRed";
                s[118] = "MidnightBlue";
                s[119] = "MintCream";
                s[120] = "MistyRose";
                s[121] = "Moccasin";
                s[122] = "NavajoWhite";
                s[123] = "Navy";
                s[124] = "OldLace";
                s[125] = "Olive";
                s[126] = "OliveDrab";
                s[127] = "Orange";
                s[128] = "OrangeRed";
                s[129] = "Orchid";
                s[130] = "PaleGoldenrod";
                s[131] = "PaleGreen";
                s[132] = "PaleTurquoise";
                s[133] = "PaleVioletRed";
                s[134] = "PapayaWhip";
                s[135] = "PeachPuff";
                s[136] = "Peru";
                s[137] = "Pink";
                s[138] = "Plum";
                s[139] = "PowderBlue";
                s[140] = "Purple";
                s[141] = "Red";
                s[142] = "RosyBrown";
                s[143] = "RoyalBlue";
                s[144] = "SaddleBrown";
                s[145] = "Salmon";
                s[146] = "SandyBrown";
                s[147] = "SeaGreen";
                s[148] = "SeaShell";
                s[149] = "Sienna";
                s[150] = "Silver";
                s[151] = "SkyBlue";
                s[152] = "SlateBlue";
                s[153] = "SlateGray";
                s[154] = "Snow";
                s[155] = "SpringGreen";
                s[156] = "SteelBlue";
                s[157] = "Tan";
                s[158] = "Teal";
                s[159] = "Thistle";
                s[160] = "Tomato";
                s[161] = "Turquoise";
                s[162] = "Violet";
                s[163] = "Wheat";
                s[164] = "White";
                s[165] = "WhiteSmoke";
                s[166] = "Yellow";
                s[167] = "YellowGreen";
                ESBootstrap.KnownColorTable.colorNameTable = s;
            },
            initColorTable: function () {
                var c = System.Array.init(175, 0, System.Int32);

                c[27] = 16777215;
                c[28] = -984833;
                c[29] = -332841;
                c[30] = -16711681;
                c[31] = -8388652;
                c[32] = -983041;
                c[33] = -657956;
                c[34] = -6972;
                c[35] = -16777216;
                c[36] = -5171;
                c[37] = -16776961;
                c[38] = -7722014;
                c[39] = -5952982;
                c[40] = -2180985;
                c[41] = -10510688;
                c[42] = -8388864;
                c[43] = -2987746;
                c[44] = -32944;
                c[45] = -10185235;
                c[46] = -1828;
                c[47] = -2354116;
                c[48] = -16711681;
                c[49] = -16777077;
                c[50] = -16741493;
                c[51] = -4684277;
                c[52] = -5658199;
                c[53] = -16751616;
                c[54] = -4343957;
                c[55] = -7667573;
                c[56] = -11179217;
                c[57] = -29696;
                c[58] = -6737204;
                c[59] = -7667712;
                c[60] = -1468806;
                c[61] = -7357301;
                c[62] = -12042869;
                c[63] = -13676721;
                c[64] = -16724271;
                c[65] = -7077677;
                c[66] = -60269;
                c[67] = -16728065;
                c[68] = -9868951;
                c[69] = -14774017;
                c[70] = -5103070;
                c[71] = -1296;
                c[72] = -14513374;
                c[73] = -65281;
                c[74] = -2302756;
                c[75] = -460545;
                c[76] = -10496;
                c[77] = -2448096;
                c[78] = -8355712;
                c[79] = -16744448;
                c[80] = -5374161;
                c[81] = -983056;
                c[82] = -38476;
                c[83] = -3318692;
                c[84] = -11861886;
                c[85] = -16;
                c[86] = -989556;
                c[87] = -1644806;
                c[88] = -3851;
                c[89] = -8586240;
                c[90] = -1331;
                c[91] = -5383962;
                c[92] = -1015680;
                c[93] = -2031617;
                c[94] = -329006;
                c[95] = -2894893;
                c[96] = -7278960;
                c[97] = -18751;
                c[98] = -24454;
                c[99] = -14634326;
                c[100] = -7876870;
                c[101] = -8943463;
                c[102] = -5192482;
                c[103] = -32;
                c[104] = -16711936;
                c[105] = -13447886;
                c[106] = -331546;
                c[107] = -65281;
                c[108] = -8388608;
                c[109] = -10039894;
                c[110] = -16777011;
                c[111] = -4565549;
                c[112] = -7114533;
                c[113] = -12799119;
                c[114] = -8689426;
                c[115] = -16713062;
                c[116] = -12004916;
                c[117] = -3730043;
                c[118] = -15132304;
                c[119] = -655366;
                c[120] = -6943;
                c[121] = -6987;
                c[122] = -8531;
                c[123] = -16777088;
                c[124] = -133658;
                c[125] = -8355840;
                c[126] = -9728477;
                c[127] = -23296;
                c[128] = -47872;
                c[129] = -2461482;
                c[130] = -1120086;
                c[131] = -6751336;
                c[132] = -5247250;
                c[133] = -2396013;
                c[134] = -4139;
                c[135] = -9543;
                c[136] = -3308225;
                c[137] = -16181;
                c[138] = -2252579;
                c[139] = -5185306;
                c[140] = -8388480;
                c[141] = -65536;
                c[142] = -4419697;
                c[143] = -12490271;
                c[144] = -7650029;
                c[145] = -360334;
                c[146] = -744352;
                c[147] = -13726889;
                c[148] = -2578;
                c[149] = -6270419;
                c[150] = -4144960;
                c[151] = -7876885;
                c[152] = -9807155;
                c[153] = -9404272;
                c[154] = -1286;
                c[155] = -16711809;
                c[156] = -12156236;
                c[157] = -2968436;
                c[158] = -16744320;
                c[159] = -2572328;
                c[160] = -40121;
                c[161] = -12525360;
                c[162] = -1146130;
                c[163] = -663885;
                c[164] = -1;
                c[165] = -657931;
                c[166] = -256;
                c[167] = -6632142;
                ESBootstrap.KnownColorTable.colorTable = c;
            },
            knownColorToArgb: function (color) {
                ESBootstrap.KnownColorTable.ensureColorTable();
                if (color <= ESBootstrap.KnownColor.MenuHighlight) {
                    return ESBootstrap.KnownColorTable.colorTable[color];
                }
                return 0;
            },
            knownColorToName: function (color) {
                ESBootstrap.KnownColorTable.ensureColorNameTable();
                if (color <= ESBootstrap.KnownColor.MenuHighlight) {
                    return ESBootstrap.KnownColorTable.colorNameTable[color];
                }
                return null;
            }
        }
    });

    Bridge.define("ESBootstrap.NavBarLocation", {
        $kind: "enum",
        statics: {
            None: 0,
            Fixed_Top: 1,
            Fixed_Bottom: 2,
            Static_Top: 3
        }
    });

    Bridge.define("ESBootstrap.NavBarPosition", {
        $kind: "enum",
        statics: {
            None: 0,
            NavBar_Left: 1,
            NavBar_Right: 2
        }
    });

    Bridge.define("ESBootstrap.NavBarTheme", {
        $kind: "enum",
        statics: {
            NavBar_Default: 0,
            NavBar_Inverse: 1
        }
    });

    Bridge.define("ESBootstrap.Program", {
        $main: function () {
            var buttonClick = $asm.$.ESBootstrap.Program.f1;

            ESBootstrap.Extensions.appendChildren$2(document.body, [Bridge.merge(new ESBootstrap.Navbar([new ESBootstrap.NavbarHeader([new ESBootstrap.NavbarCollapseButton("navbarContent"), new ESBootstrap.NavbarBrand("#", ["Brand"])]), new ESBootstrap.NavbarContent("navbarContent", [Bridge.merge(new ESBootstrap.UnorderedList([Bridge.merge(new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Link ", new ESBootstrap.SourceOnly(["(current)"])])]), {
                setActive: true
            } ), new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Link"])]), Bridge.merge(new ESBootstrap.ListItem([Bridge.merge(new ESBootstrap.Anchor("#", ["Dropdown ", new ESBootstrap.Caret()]), {
                setDropdown: true
            } ), Bridge.merge(new ESBootstrap.UnorderedList([new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Action"])]), new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Another Action"])]), new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Something else here"])]), Bridge.merge(new ESBootstrap.ListItem(), {
                setDivider: true
            } ), new ESBootstrap.ListItem([new ESBootstrap.Anchor("#", ["Separated link"])])]), {
                setDropdownMenu: true
            } )]), {
                setDropdown: true
            } )]), {
                setNav: true
            } )])]), {
                setNavbarLocation: ESBootstrap.NavBarLocation.Fixed_Top
            } ), new ESBootstrap.Container([new ESBootstrap.Panel(ESBootstrap.BootTheme.Default, [new ESBootstrap.PanelHeading(["Welcome to ESBootstrap"]), new ESBootstrap.PanelBody([new ESBootstrap.FormGroupList([new ESBootstrap.TextBox.$ctor1("Textbox"), new ESBootstrap.CheckBox("checkbox", true), new ESBootstrap.FormGroup([Bridge.merge(new ESBootstrap.CheckBox("checkbox-inline 1", true), {
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("checkbox-inline 2", true), {
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("checkbox-inline 3", true), {
                setInline: true
            } )]), new ESBootstrap.TextBox.$ctor1("11/04/2017", "date"), new ESBootstrap.TextBox.$ctor1("Password", "password"), new ESBootstrap.TextArea("TextArea", 4), new ESBootstrap.Form(ESBootstrap.BootFormType.Inline, [new ESBootstrap.Label(["Email:", new ESBootstrap.TextBox.ctor()]), new ESBootstrap.Label(["Password:", new ESBootstrap.TextBox.ctor("password")]), new ESBootstrap.CheckBox("Remeber me"), new ESBootstrap.Button.$ctor2("Submit", "submit")]), new ESBootstrap.Form(ESBootstrap.BootFormType.Horizontal, [new ESBootstrap.Label(["Email:", new ESBootstrap.TextBox.ctor()]), new ESBootstrap.Label(["Password:", new ESBootstrap.TextBox.ctor("password")]), new ESBootstrap.CheckBox("Remeber me"), new ESBootstrap.Button.$ctor2("Submit", "submit")]), Bridge.merge(new ESBootstrap.Button.$ctor3("Basic", ESBootstrap.BootTheme.None), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Default", ESBootstrap.BootTheme.Default), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Primary", ESBootstrap.BootTheme.Primary), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Success", ESBootstrap.BootTheme.Success), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Info", ESBootstrap.BootTheme.Info), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Warning", ESBootstrap.BootTheme.Warning), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Danger", ESBootstrap.BootTheme.Danger), {
                setOnClick: buttonClick
            } ), Bridge.merge(new ESBootstrap.Button.$ctor3("Link", ESBootstrap.BootTheme.Link), {
                setOnClick: buttonClick
            } )]), new ESBootstrap.Heading("h2", ["Heading", new ESBootstrap.Small([" - Heading Small"])]), new ESBootstrap.ParagraphList(["Text", new ESBootstrap.Abbr("Abbr hover", ["Abbr"]), new ESBootstrap.Small(["Small"]), new ESBootstrap.Blockquote.$ctor2(new ESBootstrap.Paragraph.ctor(["Block Quote Content"]), new ESBootstrap.Footer(["Block Quote From"])), Bridge.merge(new ESBootstrap.Blockquote.$ctor2(new ESBootstrap.Paragraph.ctor(["Block Quote Content Reverse"]), new ESBootstrap.Footer(["Block Quote From Reverse"])), {
                setReverse: true
            } ), new ESBootstrap.DescriptionList([new ESBootstrap.DescriptionTitle(["Description Title 1"]), new ESBootstrap.DescriptionDetail(["- Description Detail 1"]), new ESBootstrap.DescriptionTitle(["Description Title 2"]), new ESBootstrap.DescriptionDetail(["- Description Detail 2"])]), new ESBootstrap.Paragraph.ctor(["The following HTML elements: ", new ESBootstrap.Code(["span"]), ", ", new ESBootstrap.Code(["section"]), ", and ", new ESBootstrap.Code(["div"]), " defines a section in a document."]), new ESBootstrap.Paragraph.ctor(["Use ", new ESBootstrap.Kbd(["ctrl + p"]), " to open the Print dialog box."]), new ESBootstrap.Pre(["Text in a pre element\r\nis displayed in a fixed-width\r\nfont, and it preserves\r\nboth      spaces and\r\nline breaks."]), new ESBootstrap.Paragraph.ctor([new ESBootstrap.ParagraphList([new ESBootstrap.Heading("h2", ["Contextual Colors"]), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text is muted."]), {
                setContextualText: ESBootstrap.Contextual.Text.Muted
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text is important."]), {
                setContextualText: ESBootstrap.Contextual.Text.Primary
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text indicates success."]), {
                setContextualText: ESBootstrap.Contextual.Text.Success
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents some information."]), {
                setContextualText: ESBootstrap.Contextual.Text.Info
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents a warning."]), {
                setContextualText: ESBootstrap.Contextual.Text.Warning
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents danger."]), {
                setContextualText: ESBootstrap.Contextual.Text.Danger
            } )])]), new ESBootstrap.Paragraph.ctor([new ESBootstrap.ParagraphList([new ESBootstrap.Heading("h2", ["Contextual Backgrounds"]), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text is important."]), {
                setContextualBackground: ESBootstrap.Contextual.Background.Primary
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text indicates success."]), {
                setContextualBackground: ESBootstrap.Contextual.Background.Success
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents some information."]), {
                setContextualBackground: ESBootstrap.Contextual.Background.Info
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents a warning."]), {
                setContextualBackground: ESBootstrap.Contextual.Background.Warning
            } ), Bridge.merge(new ESBootstrap.Paragraph.ctor(["This text represents danger."]), {
                setContextualBackground: ESBootstrap.Contextual.Background.Danger
            } )])])]), new ESBootstrap.Panel(ESBootstrap.BootTheme.Default, [new ESBootstrap.PanelHeading([new ESBootstrap.Heading("h3", ["Table Demo", new ESBootstrap.Small([" - Table options below."])]), new ESBootstrap.FormGroup([Bridge.merge(new ESBootstrap.CheckBox("Striped", false), {
                onCheckChanged: $asm.$.ESBootstrap.Program.f2,
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("Bordered", false), {
                onCheckChanged: $asm.$.ESBootstrap.Program.f3,
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("Hover", false), {
                onCheckChanged: $asm.$.ESBootstrap.Program.f4,
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("Condensed", false), {
                onCheckChanged: $asm.$.ESBootstrap.Program.f5,
                setInline: true
            } ), Bridge.merge(new ESBootstrap.CheckBox("Contextual classes", false), {
                onCheckChanged: function (s) {
                    var $t;
                    var tbl = ESBootstrap.Widget.getWidgetById(ESBootstrap.Table, "DemoTable");
                    if (s.getChecked()) {
                        var body = tbl.getTableBody();
                        body.row(0).setTheme(ESBootstrap.BootRowCellTheme.Active);
                        body.row(2).setTheme(ESBootstrap.BootRowCellTheme.Success);
                        body.row(4).setTheme(ESBootstrap.BootRowCellTheme.Info);
                        body.row(6).setTheme(ESBootstrap.BootRowCellTheme.Warning);
                        body.row(8).setTheme(ESBootstrap.BootRowCellTheme.Danger);
                    } else {
                        $t = Bridge.getEnumerator(tbl.getTableBody().getRows(), ESBootstrap.TableRow);
                        while ($t.moveNext()) {
                            var item = $t.getCurrent();
                            item.clearTheme();
                        }
                    }
                },
                setInline: true
            } )])]), new ESBootstrap.PanelBody([Bridge.merge(new ESBootstrap.Table([new ESBootstrap.TableHeader([new ESBootstrap.TableHeaderRow.ctor(["#", "Table heading", "Table heading", "Table heading", "Table heading", "Table heading", "Table heading"])]), new ESBootstrap.TableBody(System.Linq.Enumerable.range(0, 9).select($asm.$.ESBootstrap.Program.f6).toArray())]), {
                setId: "DemoTable"
            } )]), new ESBootstrap.PanelFooter([new ESBootstrap.Heading("h3", ["How to access the table."]), new ESBootstrap.Pre(["var tbl = Widget.GetWidgetById<Table>(\"DemoTable\");\r\nvar body = tbl.TableBody;\r\nbody.Row(0).Theme = BootRowCellTheme.Active;\r\nbody.Row(2).Theme = BootRowCellTheme.Success;\r\nbody.Row(4).Theme = BootRowCellTheme.Info;\r\nbody.Row(6).Theme = BootRowCellTheme.Warning;\r\nbody.Row(8).Theme = BootRowCellTheme.Danger;\r\n"])])])]), new ESBootstrap.PanelFooter(["Footer"])])])]);
        }
    });

    Bridge.ns("ESBootstrap.Program", $asm.$);

    Bridge.apply($asm.$.ESBootstrap.Program, {
        f1: function (ev) {
            Bridge.global.alert(ev.currentTarget.innerHTML);
        },
        f2: function (s) {
            ESBootstrap.Widget.getWidgetById(ESBootstrap.Table, "DemoTable").setStriped(s.getChecked());
        },
        f3: function (s) {
            ESBootstrap.Widget.getWidgetById(ESBootstrap.Table, "DemoTable").setBordered(s.getChecked());
        },
        f4: function (s) {
            ESBootstrap.Widget.getWidgetById(ESBootstrap.Table, "DemoTable").setHover(s.getChecked());
        },
        f5: function (s) {
            ESBootstrap.Widget.getWidgetById(ESBootstrap.Table, "DemoTable").setCondensed(s.getChecked());
        },
        f6: function (x, index) {
            return new ESBootstrap.TableRow.ctor([new ESBootstrap.TableHeaderCell.ctor([(((index + 1) | 0)).toString()]), "Table cell", "Table cell", "Table cell", "Table cell", "Table cell", "Table cell"]);
        }
    });

    Bridge.define("ESBootstrap.Rule", {
        statics: {
            XS1: null,
            XS2: null,
            XS3: null,
            XS4: null,
            XS5: null,
            XS6: null,
            XS7: null,
            XS8: null,
            XS9: null,
            XS10: null,
            XS11: null,
            XS12: null,
            XSO1: null,
            XSO2: null,
            XSO3: null,
            XSO4: null,
            XSO5: null,
            XSO6: null,
            XSO7: null,
            XSO8: null,
            XSO9: null,
            XSO10: null,
            XSO11: null,
            XSO12: null,
            XSPL1: null,
            XSPL2: null,
            XSPL3: null,
            XSPL4: null,
            XSPL5: null,
            XSPL6: null,
            XSPL7: null,
            XSPL8: null,
            XSPL9: null,
            XSPL10: null,
            XSPL11: null,
            XSPL12: null,
            XSPS1: null,
            XSPS2: null,
            XSPS3: null,
            XSPS4: null,
            XSPS5: null,
            XSPS6: null,
            XSPS7: null,
            XSPS8: null,
            XSPS9: null,
            XSPS10: null,
            XSPS11: null,
            XSPS12: null,
            SM1: null,
            SM2: null,
            SM3: null,
            SM4: null,
            SM5: null,
            SM6: null,
            SM7: null,
            SM8: null,
            SM9: null,
            SM10: null,
            SM11: null,
            SM12: null,
            SMO1: null,
            SMO2: null,
            SMO3: null,
            SMO4: null,
            SMO5: null,
            SMO6: null,
            SMO7: null,
            SMO8: null,
            SMO9: null,
            SMO10: null,
            SMO11: null,
            SMO12: null,
            SMPL1: null,
            SMPL2: null,
            SMPL3: null,
            SMPL4: null,
            SMPL5: null,
            SMPL6: null,
            SMPL7: null,
            SMPL8: null,
            SMPL9: null,
            SMPL10: null,
            SMPL11: null,
            SMPL12: null,
            SMPS1: null,
            SMPS2: null,
            SMPS3: null,
            SMPS4: null,
            SMPS5: null,
            SMPS6: null,
            SMPS7: null,
            SMPS8: null,
            SMPS9: null,
            SMPS10: null,
            SMPS11: null,
            SMPS12: null,
            MD1: null,
            MD2: null,
            MD3: null,
            MD4: null,
            MD5: null,
            MD6: null,
            MD7: null,
            MD8: null,
            MD9: null,
            MD10: null,
            MD11: null,
            MD12: null,
            MDO1: null,
            MDO2: null,
            MDO3: null,
            MDO4: null,
            MDO5: null,
            MDO6: null,
            MDO7: null,
            MDO8: null,
            MDO9: null,
            MDO10: null,
            MDO11: null,
            MDO12: null,
            MDPL1: null,
            MDPL2: null,
            MDPL3: null,
            MDPL4: null,
            MDPL5: null,
            MDPL6: null,
            MDPL7: null,
            MDPL8: null,
            MDPL9: null,
            MDPL10: null,
            MDPL11: null,
            MDPL12: null,
            MDPS1: null,
            MDPS2: null,
            MDPS3: null,
            MDPS4: null,
            MDPS5: null,
            MDPS6: null,
            MDPS7: null,
            MDPS8: null,
            MDPS9: null,
            MDPS10: null,
            MDPS11: null,
            MDPS12: null,
            LG1: null,
            LG2: null,
            LG3: null,
            LG4: null,
            LG5: null,
            LG6: null,
            LG7: null,
            LG8: null,
            LG9: null,
            LG10: null,
            LG11: null,
            LG12: null,
            LGO1: null,
            LGO2: null,
            LGO3: null,
            LGO4: null,
            LGO5: null,
            LGO6: null,
            LGO7: null,
            LGO8: null,
            LGO9: null,
            LGO10: null,
            LGO11: null,
            LGO12: null,
            LGPL1: null,
            LGPL2: null,
            LGPL3: null,
            LGPL4: null,
            LGPL5: null,
            LGPL6: null,
            LGPL7: null,
            LGPL8: null,
            LGPL9: null,
            LGPL10: null,
            LGPL11: null,
            LGPL12: null,
            LGPS1: null,
            LGPS2: null,
            LGPS3: null,
            LGPS4: null,
            LGPS5: null,
            LGPS6: null,
            LGPS7: null,
            LGPS8: null,
            LGPS9: null,
            LGPS10: null,
            LGPS11: null,
            LGPS12: null,
            config: {
                init: function () {
                    this.XS1 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 1);
                    this.XS2 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 2);
                    this.XS3 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 3);
                    this.XS4 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 4);
                    this.XS5 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 5);
                    this.XS6 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 6);
                    this.XS7 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 7);
                    this.XS8 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 8);
                    this.XS9 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 9);
                    this.XS10 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 10);
                    this.XS11 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 11);
                    this.XS12 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.XS, 12);
                    this.XSO1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 1, "offset-");
                    this.XSO2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 2, "offset-");
                    this.XSO3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 3, "offset-");
                    this.XSO4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 4, "offset-");
                    this.XSO5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 5, "offset-");
                    this.XSO6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 6, "offset-");
                    this.XSO7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 7, "offset-");
                    this.XSO8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 8, "offset-");
                    this.XSO9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 9, "offset-");
                    this.XSO10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 10, "offset-");
                    this.XSO11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 11, "offset-");
                    this.XSO12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 12, "offset-");
                    this.XSPL1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 1, "pull-");
                    this.XSPL2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 2, "pull-");
                    this.XSPL3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 3, "pull-");
                    this.XSPL4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 4, "pull-");
                    this.XSPL5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 5, "pull-");
                    this.XSPL6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 6, "pull-");
                    this.XSPL7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 7, "pull-");
                    this.XSPL8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 8, "pull-");
                    this.XSPL9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 9, "pull-");
                    this.XSPL10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 10, "pull-");
                    this.XSPL11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 11, "pull-");
                    this.XSPL12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 12, "pull-");
                    this.XSPS1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 1, "push-");
                    this.XSPS2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 2, "push-");
                    this.XSPS3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 3, "push-");
                    this.XSPS4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 4, "push-");
                    this.XSPS5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 5, "push-");
                    this.XSPS6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 6, "push-");
                    this.XSPS7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 7, "push-");
                    this.XSPS8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 8, "push-");
                    this.XSPS9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 9, "push-");
                    this.XSPS10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 10, "push-");
                    this.XSPS11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 11, "push-");
                    this.XSPS12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.XS, 12, "push-");
                    this.SM1 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 1);
                    this.SM2 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 2);
                    this.SM3 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 3);
                    this.SM4 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 4);
                    this.SM5 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 5);
                    this.SM6 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 6);
                    this.SM7 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 7);
                    this.SM8 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 8);
                    this.SM9 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 9);
                    this.SM10 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 10);
                    this.SM11 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 11);
                    this.SM12 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.SM, 12);
                    this.SMO1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 1, "offset-");
                    this.SMO2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 2, "offset-");
                    this.SMO3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 3, "offset-");
                    this.SMO4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 4, "offset-");
                    this.SMO5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 5, "offset-");
                    this.SMO6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 6, "offset-");
                    this.SMO7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 7, "offset-");
                    this.SMO8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 8, "offset-");
                    this.SMO9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 9, "offset-");
                    this.SMO10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 10, "offset-");
                    this.SMO11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 11, "offset-");
                    this.SMO12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 12, "offset-");
                    this.SMPL1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 1, "pull-");
                    this.SMPL2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 2, "pull-");
                    this.SMPL3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 3, "pull-");
                    this.SMPL4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 4, "pull-");
                    this.SMPL5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 5, "pull-");
                    this.SMPL6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 6, "pull-");
                    this.SMPL7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 7, "pull-");
                    this.SMPL8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 8, "pull-");
                    this.SMPL9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 9, "pull-");
                    this.SMPL10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 10, "pull-");
                    this.SMPL11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 11, "pull-");
                    this.SMPL12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 12, "pull-");
                    this.SMPS1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 1, "push-");
                    this.SMPS2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 2, "push-");
                    this.SMPS3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 3, "push-");
                    this.SMPS4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 4, "push-");
                    this.SMPS5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 5, "push-");
                    this.SMPS6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 6, "push-");
                    this.SMPS7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 7, "push-");
                    this.SMPS8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 8, "push-");
                    this.SMPS9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 9, "push-");
                    this.SMPS10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 10, "push-");
                    this.SMPS11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 11, "push-");
                    this.SMPS12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.SM, 12, "push-");
                    this.MD1 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 1);
                    this.MD2 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 2);
                    this.MD3 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 3);
                    this.MD4 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 4);
                    this.MD5 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 5);
                    this.MD6 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 6);
                    this.MD7 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 7);
                    this.MD8 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 8);
                    this.MD9 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 9);
                    this.MD10 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 10);
                    this.MD11 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 11);
                    this.MD12 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.MD, 12);
                    this.MDO1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 1, "offset-");
                    this.MDO2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 2, "offset-");
                    this.MDO3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 3, "offset-");
                    this.MDO4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 4, "offset-");
                    this.MDO5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 5, "offset-");
                    this.MDO6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 6, "offset-");
                    this.MDO7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 7, "offset-");
                    this.MDO8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 8, "offset-");
                    this.MDO9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 9, "offset-");
                    this.MDO10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 10, "offset-");
                    this.MDO11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 11, "offset-");
                    this.MDO12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 12, "offset-");
                    this.MDPL1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 1, "pull-");
                    this.MDPL2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 2, "pull-");
                    this.MDPL3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 3, "pull-");
                    this.MDPL4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 4, "pull-");
                    this.MDPL5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 5, "pull-");
                    this.MDPL6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 6, "pull-");
                    this.MDPL7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 7, "pull-");
                    this.MDPL8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 8, "pull-");
                    this.MDPL9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 9, "pull-");
                    this.MDPL10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 10, "pull-");
                    this.MDPL11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 11, "pull-");
                    this.MDPL12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 12, "pull-");
                    this.MDPS1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 1, "push-");
                    this.MDPS2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 2, "push-");
                    this.MDPS3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 3, "push-");
                    this.MDPS4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 4, "push-");
                    this.MDPS5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 5, "push-");
                    this.MDPS6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 6, "push-");
                    this.MDPS7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 7, "push-");
                    this.MDPS8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 8, "push-");
                    this.MDPS9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 9, "push-");
                    this.MDPS10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 10, "push-");
                    this.MDPS11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 11, "push-");
                    this.MDPS12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.MD, 12, "push-");
                    this.LG1 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 1);
                    this.LG2 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 2);
                    this.LG3 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 3);
                    this.LG4 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 4);
                    this.LG5 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 5);
                    this.LG6 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 6);
                    this.LG7 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 7);
                    this.LG8 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 8);
                    this.LG9 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 9);
                    this.LG10 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 10);
                    this.LG11 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 11);
                    this.LG12 = new ESBootstrap.Rule.ctor(ESBootstrap.RuleTier.LG, 12);
                    this.LGO1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 1, "offset-");
                    this.LGO2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 2, "offset-");
                    this.LGO3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 3, "offset-");
                    this.LGO4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 4, "offset-");
                    this.LGO5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 5, "offset-");
                    this.LGO6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 6, "offset-");
                    this.LGO7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 7, "offset-");
                    this.LGO8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 8, "offset-");
                    this.LGO9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 9, "offset-");
                    this.LGO10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 10, "offset-");
                    this.LGO11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 11, "offset-");
                    this.LGO12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 12, "offset-");
                    this.LGPL1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 1, "pull-");
                    this.LGPL2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 2, "pull-");
                    this.LGPL3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 3, "pull-");
                    this.LGPL4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 4, "pull-");
                    this.LGPL5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 5, "pull-");
                    this.LGPL6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 6, "pull-");
                    this.LGPL7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 7, "pull-");
                    this.LGPL8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 8, "pull-");
                    this.LGPL9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 9, "pull-");
                    this.LGPL10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 10, "pull-");
                    this.LGPL11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 11, "pull-");
                    this.LGPL12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 12, "pull-");
                    this.LGPS1 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 1, "push-");
                    this.LGPS2 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 2, "push-");
                    this.LGPS3 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 3, "push-");
                    this.LGPS4 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 4, "push-");
                    this.LGPS5 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 5, "push-");
                    this.LGPS6 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 6, "push-");
                    this.LGPS7 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 7, "push-");
                    this.LGPS8 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 8, "push-");
                    this.LGPS9 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 9, "push-");
                    this.LGPS10 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 10, "push-");
                    this.LGPS11 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 11, "push-");
                    this.LGPS12 = new ESBootstrap.Rule.$ctor1(ESBootstrap.RuleTier.LG, 12, "push-");
                }
            }
        },
        value: null,
        $ctor1: function (_tier, _colIndex, bonus) {
            this.$initialize();
            this.value = System.String.concat("col", _tier.value, bonus, _colIndex);
        },
        ctor: function (_tier, _colIndex) {
            ESBootstrap.Rule.$ctor1.call(this, _tier, _colIndex, "");
        }
    });

    Bridge.define("ESBootstrap.RuleTier", {
        statics: {
            /**
             * Phones
             *
             * @instance
             */
            XS: null,
            /**
             * Tablets
             *
             * @instance
             */
            SM: null,
            /**
             * Desktops
             *
             * @instance
             */
            MD: null,
            /**
             * Larger Desktops
             *
             * @instance
             */
            LG: null,
            config: {
                init: function () {
                    this.XS = new ESBootstrap.RuleTier("-xs-");
                    this.SM = new ESBootstrap.RuleTier("-sm-");
                    this.MD = new ESBootstrap.RuleTier("-md-");
                    this.LG = new ESBootstrap.RuleTier("-lg-");
                }
            }
        },
        value: null,
        ctor: function (_value) {
            this.$initialize();
            this.value = _value;
        }
    });

    Bridge.define("ESBootstrap.Vector2", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new ESBootstrap.Vector2(); }
        },
        x: null,
        y: null,
        $ctor1: function (x, y) {
            this.$initialize();
            this.x = x;
            this.y = y;
        },
        $ctor2: function (vector2) {
            this.$initialize();
            this.x = vector2.x;
            this.y = vector2.y;
        },
        ctor: function () {
            this.$initialize();
        },
        getXi: function () {
            return this.x;
        },
        setXi: function (value) {
            this.x = value;
        },
        getYi: function () {
            return this.y;
        },
        setYi: function (value) {
            this.y = value;
        },
        getXf: function () {
            return this.x;
        },
        setXf: function (value) {
            this.x = value;
        },
        getYf: function () {
            return this.y;
        },
        setYf: function (value) {
            this.y = value;
        },
        getWidth: function () {
            return this.x;
        },
        getHeight: function () {
            return this.y;
        },
        getHashCode: function () {
            var h = Bridge.addHash([1955977157, this.x, this.y]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, ESBootstrap.Vector2)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
        },
        $clone: function (to) {
            var s = to || new ESBootstrap.Vector2();
            s.x = this.x;
            s.y = this.y;
            return s;
        }
    });

    Bridge.define("ESBootstrap.Vector4", {
        $kind: "struct",
        statics: {
            getDefaultValue: function () { return new ESBootstrap.Vector4(); }
        },
        x: null,
        y: null,
        z: null,
        m: null,
        $ctor1: function (x, y, z, m) {
            this.$initialize();
            this.x = x;
            this.y = y;
            this.z = z;
            this.m = m;
        },
        $ctor2: function (location, size) {
            this.$initialize();
            this.x = location.x;
            this.y = location.y;
            this.z = size.x;
            this.m = size.y;
        },
        $ctor3: function (vector4) {
            this.$initialize();
            this.x = vector4.x;
            this.y = vector4.y;
            this.z = vector4.z;
            this.m = vector4.m;
        },
        ctor: function () {
            this.$initialize();
        },
        getX: function () {
            return this.x;
        },
        getY: function () {
            return this.y;
        },
        getWidth: function () {
            return this.z;
        },
        getHeight: function () {
            return this.m;
        },
        getLocation: function () {
            return new ESBootstrap.Vector2.$ctor1(this.x, this.y);
        },
        getSize: function () {
            return new ESBootstrap.Vector2.$ctor1(this.z, this.m);
        },
        getHashCode: function () {
            var h = Bridge.addHash([1956108229, this.x, this.y, this.z, this.m]);
            return h;
        },
        equals: function (o) {
            if (!Bridge.is(o, ESBootstrap.Vector4)) {
                return false;
            }
            return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y) && Bridge.equals(this.z, o.z) && Bridge.equals(this.m, o.m);
        },
        $clone: function (to) {
            var s = to || new ESBootstrap.Vector4();
            s.x = this.x;
            s.y = this.y;
            s.z = this.z;
            s.m = this.m;
            return s;
        }
    });

    Bridge.define("ESBootstrap.Abbr", {
        inherits: [ESBootstrap.Widget],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("abbr"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
        },
        getInitialism: function () {
            return this.getClassTrue("initialism");
        },
        setInitialism: function (value) {
            this.setClassTrue("initialism", value);
        }
    });

    Bridge.define("ESBootstrap.Address", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("address"), typos);

        }
    });

    Bridge.define("ESBootstrap.WidgetClickable", {
        inherits: [ESBootstrap.Widget],
        ctor: function (element) {
            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, element);

        },
        $ctor1: function (element, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, element, typos);

        },
        getOnClick: function () {
            return this.content.onclick;
        },
        setOnClick: function (value) {
            this.content.onclick = value;
        },
        getDropdown: function () {
            return this.getClassTrue("dropdown-toggle");
        },
        setDropdown: function (value) {
            if (value) {
                this.setAttribute("data-toggle", "dropdown");
                this.setAttribute("aria-haspopup", "true");
                this.setAttribute("aria-expanded", "false");
            } else {
                this.setAttribute("data-toggle", null);
                this.setAttribute("aria-haspopup", null);
                this.setAttribute("aria-expanded", null);
            }
            this.setClassTrue("dropdown-toggle", value);
        }
    });

    Bridge.define("ESBootstrap.Blockquote", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("blockquote"), typos);

        },
        $ctor1: function (para, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.addRange(typos);

            ESBootstrap.Widget.appendTypos$1(this, x.toArray());
        },
        $ctor2: function (para, footer, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.add(footer);
            x.addRange(typos);

            ESBootstrap.Widget.appendTypos$1(this, x.toArray());
        },
        $ctor3: function (para, footer, source, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("blockquote"));
            var x = new (System.Collections.Generic.List$1(Object))();

            x.add(para);
            x.add(ESBootstrap.Extensions.appendChild(footer, source));
            x.addRange(typos);

            ESBootstrap.Widget.appendTypos$1(this, x.toArray());
        },
        getReverse: function () {
            return this.getClassTrue("blockquote-reverse");
        },
        setReverse: function (value) {
            this.setClassTrue("blockquote-reverse", value);
        }
    });

    Bridge.define("ESBootstrap.WidgetStyle", {
        inherits: [ESBootstrap.Widget],
        ctor: function (className, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('div'), {
                className: className
            } ), typos);

        }
    });

    Bridge.define("ESBootstrap.Caret", {
        inherits: [ESBootstrap.Widget],
        ctor: function () {
            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "caret"
            } ));

        }
    });

    Bridge.define("ESBootstrap.WidgetBox", {
        inherits: [ESBootstrap.Widget],
        statics: {
            linkedTextChangedEvents: null,
            config: {
                init: function () {
                    this.linkedTextChangedEvents = new (System.Collections.Generic.Dictionary$2(HTMLElement,Function))();
                }
            }
        },
        ctor: function (element) {
            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, element);
            this.setOnKeyUp(null);
            this.setOnKeyPress(null);
            this.setOnKeyDown(null);

            this.content.onchange = Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f1);
            this.content.addEventListener("paste", Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f2));
            this.content.addEventListener("cut", Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f2));
        },
        setOnTextChanged: function (value) {
            var prev = null;

            if (ESBootstrap.WidgetBox.linkedTextChangedEvents.containsKey(this.content)) {
                prev = ESBootstrap.WidgetBox.linkedTextChangedEvents.get(this.content);
            }

            if (!Bridge.staticEquals(prev, value)) {
                ESBootstrap.WidgetBox.linkedTextChangedEvents.remove(this.content);

                if (!Bridge.staticEquals(value, null)) {
                    ESBootstrap.WidgetBox.linkedTextChangedEvents.set(this.content, value);
                }
            }
        },
        setOnKeyDown: function (value) {
            if (Bridge.staticEquals(value, null)) {
                this.content.onkeydown = Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f3);
            } else {
                if (!Bridge.staticEquals(this.content.onkeydown, value)) {
                    this.content.onkeydown = Bridge.fn.bind(this, function (kev) {
                        this.checkTextChanged();
                        value(kev);
                    });
                }
            }
        },
        setOnKeyPress: function (value) {
            if (Bridge.staticEquals(value, null)) {
                this.content.onkeypress = Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f3);
            } else {
                if (!Bridge.staticEquals(this.content.onkeypress, value)) {
                    this.content.onkeypress = Bridge.fn.bind(this, function (kev) {
                        this.checkTextChanged();
                        value(kev);
                    });
                }
            }
        },
        setOnKeyUp: function (value) {
            if (Bridge.staticEquals(value, null)) {
                this.content.onkeyup = Bridge.fn.bind(this, $asm.$.ESBootstrap.WidgetBox.f3);
            } else {
                if (!Bridge.staticEquals(this.content.onkeyup, value)) {
                    this.content.onkeyup = Bridge.fn.bind(this, function (kev) {
                        this.checkTextChanged();
                        value(kev);
                    });
                }
            }
        },
        getAriaDescribedBy: function () {
            return this.getAttribute("aria-describedby");
        },
        setAriaDescribedBy: function (value) {
            this.setAttribute("aria-describedby", value);
        },
        getAriaLabel: function () {
            return this.getAttribute("aria-label");
        },
        setAriaLabel: function (value) {
            this.setAttribute("aria-label", value);
        },
        getPlaceholder: function () {
            return this.getAttribute("placeholder");
        },
        setPlaceholder: function (value) {
            this.setAttribute("placeholder", value);
        },
        getText: function () {
            ESBootstrap.Extensions.getText(this.content);
            if (Bridge.is(this.content, HTMLInputElement) && this.content.type === "checkbox") {
                return System.Boolean.toString(this.content.checked);
            } else {
                return this.content.value;
            }
        },
        setText: function (value) {
            ESBootstrap.Extensions.setText(this.content, value);
            this.checkTextChanged();
        },
        checkTextChanged: function () {
            if (!Bridge.referenceEquals(this.getText(), this.getAttribute("data-previousText"))) {
                var action = null;
                if (ESBootstrap.WidgetBox.linkedTextChangedEvents.containsKey(this.content)) {
                    action = ESBootstrap.WidgetBox.linkedTextChangedEvents.get(this.content);
                }
                if (!Bridge.staticEquals(action, null)) {
                    action(new Event("onchange"));
                }
                this.setAttribute("data-previousText", this.getText());
            }
        },
        onAdded: function () {
            ESBootstrap.Widget.prototype.onAdded.call(this);
            this.setAttribute("data-previousText", this.getText());
        }
    });

    Bridge.ns("ESBootstrap.WidgetBox", $asm.$);

    Bridge.apply($asm.$.ESBootstrap.WidgetBox, {
        f1: function (ev) {
            this.checkTextChanged();
        },
        f2: function () {
            this.checkTextChanged();
        },
        f3: function (kev) {
            this.checkTextChanged();
        }
    });

    Bridge.define("ESBootstrap.Cite", {
        inherits: [ESBootstrap.Widget],
        ctor: function (title, typos) {
            if (title === void 0) { title = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("cite"), typos);
            if (!System.String.isNullOrWhiteSpace(title)) {
                this.content.title = title;
            }
        }
    });

    Bridge.define("ESBootstrap.Code", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("code"), typos);

        }
    });

    Bridge.define("ESBootstrap.Col", {
        inherits: [ESBootstrap.Widget],
        $ctor8: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.$ctor1.call(this, typos);
            ESBootstrap.ColExtentions.applyColumns(this, colClasses);
        },
        $ctor9: function (colClasses, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, colClasses.toArray(), typos);

        },
        ctor: function (colClass1, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1], ESBootstrap.Rule), typos);

        },
        $ctor1: function (colClass1, colClass2, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2], ESBootstrap.Rule), typos);

        },
        $ctor2: function (colClass1, colClass2, colClass3, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3], ESBootstrap.Rule), typos);

        },
        $ctor3: function (colClass1, colClass2, colClass3, colClass4, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4], ESBootstrap.Rule), typos);

        },
        $ctor4: function (colClass1, colClass2, colClass3, colClass4, colClass5, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5], ESBootstrap.Rule), typos);

        },
        $ctor5: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6], ESBootstrap.Rule), typos);

        },
        $ctor6: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7], ESBootstrap.Rule), typos);

        },
        $ctor7: function (colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8, typos) {
            if (typos === void 0) { typos = []; }

            ESBootstrap.Col.$ctor8.call(this, System.Array.init([colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8], ESBootstrap.Rule), typos);

        }
    });

    Bridge.define("ESBootstrap.Deleted", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("del"), typos);

        }
    });

    Bridge.define("ESBootstrap.DescriptionDetail", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("dd"), typos);

        }
    });

    Bridge.define("ESBootstrap.DescriptionList", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("dl"), typos);

        },
        getHorizontal: function () {
            return this.getClassTrue("dl-horizontal");
        },
        setHorizontal: function (value) {
            this.setClassTrue("dl-horizontal", value);
        }
    });

    Bridge.define("ESBootstrap.DescriptionTitle", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("dt"), typos);

        }
    });

    Bridge.define("ESBootstrap.Emphasizing", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("em"), typos);

        }
    });

    Bridge.define("ESBootstrap.Footer", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("footer"), typos);

        }
    });

    Bridge.define("ESBootstrap.Form", {
        inherits: [ESBootstrap.Widget],
        ctor: function (formType, typos) {
            if (formType === void 0) { formType = 0; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('form'));
            if (formType !== ESBootstrap.BootFormType.None) {
                this.content.className = System.String.concat("form-", System.Enum.format(ESBootstrap.BootFormType, formType, "G").toLowerCase());
            }
            ESBootstrap.FormGroup.appendGroupList(this, typos);
        },
        getNavbar: function () {
            return this.getClassTrue("navbar-form");
        },
        setNavbar: function (value) {
            this.setClassTrue("navbar-form", value);
        }
    });

    Bridge.define("ESBootstrap.FormGroupList", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.$ctor1.call(this);
            ESBootstrap.FormGroup.appendGroupList(this, typos);
        }
    });

    Bridge.define("ESBootstrap.Heading", {
        inherits: [ESBootstrap.Widget],
        ctor: function (ht, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement(ht), typos);

        }
    });

    Bridge.define("ESBootstrap.IconBar", {
        inherits: [ESBootstrap.Widget],
        ctor: function () {
            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "icon-bar"
            } ));

        }
    });

    Bridge.define("ESBootstrap.InputGroupAddon", {
        inherits: [ESBootstrap.Widget],
        ctor: function (_id, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "input-group-addon"
            } ), typos);
            if (!System.String.isNullOrWhiteSpace(_id)) {
                if (System.String.startsWith(_id, "#")) {
                    _id = _id.substr(1);
                }
                this.setId(_id);
            }
        }
    });

    Bridge.define("ESBootstrap.Inserted", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("ins"), typos);

        }
    });

    Bridge.define("ESBootstrap.Kbd", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("kbd"), typos);

        }
    });

    Bridge.define("ESBootstrap.Label", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('label'), {
                className: "control-label"
            } ), typos);

        },
        getSourceOnly: function () {
            return this.getClassTrue("sr-only");
        },
        setSourceOnly: function (value) {
            this.setClassTrue("sr-only", value);
        },
        getFor: function () {
            return this.content.htmlFor;
        },
        setFor: function (value) {
            this.content.htmlFor = value;
        }
    });

    Bridge.define("ESBootstrap.ListItem", {
        inherits: [ESBootstrap.Widget],
        statics: {
            appendItemList: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ESBootstrap.ListItem();
                        continue;
                    }

                    if (Bridge.is(typos[i], ESBootstrap.ListItem)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ESBootstrap.ListItem([typos[i]]);
                    }

                }
                ESBootstrap.Widget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("li"), typos);

        },
        getDropdown: function () {
            return this.getClassTrue("dropdown");
        },
        setDropdown: function (value) {
            this.setClassTrue("dropdown", value);
        },
        getDivider: function () {
            return this.getClassTrue("divider");
        },
        setDivider: function (value) {
            if (value) {
                this.setAttribute("role", "separator");
            } else {
                var x = this.getAttribute("role");
                if (Bridge.referenceEquals(x, "separator")) {
                    this.setAttribute("role", null);
                }
            }
            this.setClassTrue("divider", value);
        }
    });

    Bridge.define("ESBootstrap.Mark", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("mark"), typos);

        }
    });

    Bridge.define("ESBootstrap.Navbar", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("nav"), [new ESBootstrap.Container(typos)]);
            this.content.className = "navbar navbar-default";
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ESBootstrap.NavBarTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ESBootstrap.NavBarTheme, System.String.replaceAll(System.Enum.format(ESBootstrap.NavBarTheme, value, "G").toLowerCase(), "_", "-"));
        },
        getFluid: function () {
            return this.getClassTrue$1("container-fluid");
        },
        setFluid: function (value) {
            this.setClassTrue$1("container", !value);
            this.setClassTrue$1("container-fluid", value);
        },
        getNavbarLocation: function () {
            var x = this.getEnumClassValue("navbar-", ESBootstrap.NavBarLocation);
            if (x == null) {
                return ESBootstrap.NavBarLocation.None;
            } else {
                return x;
            }
        },
        setNavbarLocation: function (value) {
            if (value === ESBootstrap.NavBarLocation.None) {
                this.clearEnumClassValue("navbar-", ESBootstrap.NavBarLocation);
            } else {
                this.setEnumClassValue("navbar-", ESBootstrap.NavBarLocation, System.String.replaceAll(System.Enum.format(ESBootstrap.NavBarLocation, value, "G").toLowerCase(), "_", "-"));

                if (this.getNavbarLocation() === ESBootstrap.NavBarLocation.Fixed_Top) {
                    document.body.style.paddingTop = "70px";
                } else if (this.getNavbarLocation() === ESBootstrap.NavBarLocation.Fixed_Bottom) {
                    document.body.style.paddingBottom = "70px";
                }
            }
        },
        getClassTrue$1: function (classStr) {
            return this.content.firstChild.classList.contains(classStr);
        },
        setClassTrue$1: function (classStr, value) {
            if (value === this.getClassTrue$1(classStr)) {
                return;
            }
            if (value) {
                this.content.firstChild.classList.add(classStr);
            } else {
                this.content.firstChild.classList.remove(classStr);
            }
        }
    });

    Bridge.define("ESBootstrap.OrderedList", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("ol"), typos);
            ESBootstrap.ListItem.appendItemList(this, typos);
        },
        getUnstyled: function () {
            return this.getClassTrue("list-unstyled");
        },
        setUnstyled: function (value) {
            this.setClassTrue("list-unstyled", value);
        },
        getInline: function () {
            return this.getClassTrue("list-inline");
        },
        setInline: function (value) {
            this.setClassTrue("list-inline", value);
        },
        getBreadcrumb: function () {
            return this.getClassTrue("breadcrumb");
        },
        setBreadcrumb: function (value) {
            this.setClassTrue("breadcrumb", value);
        }
    });

    Bridge.define("ESBootstrap.Paragraph", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('p'), typos);

        },
        $ctor1: function (alignment, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ESBootstrap.BootParagraphAlignment, alignment, "G").toLowerCase())
            } ), typos);

        },
        $ctor2: function (alignment, transform, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ESBootstrap.BootParagraphTransformation, transform, "G").toLowerCase(), " ", "text-", System.Enum.format(ESBootstrap.BootParagraphAlignment, alignment, "G").toLowerCase())
            } ), typos);

        },
        $ctor3: function (transform, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('p'), {
                className: System.String.concat("text-", System.Enum.format(ESBootstrap.BootParagraphTransformation, transform, "G").toLowerCase())
            } ), typos);

        },
        getInitialism: function () {
            return this.getClassTrue("initialism");
        },
        setInitialism: function (value) {
            this.setClassTrue("initialism", value);
        },
        getNavbarText: function () {
            return this.getClassTrue("navbar-text");
        },
        setNavbarText: function (value) {
            this.setClassTrue("navbar-text", value);
        },
        getLead: function () {
            return this.getClassTrue("lead");
        },
        setLead: function (value) {
            this.setClassTrue("lead", value);
        },
        getHelp: function () {
            return this.getClassTrue("help-block");
        },
        setHelp: function (value) {
            this.setClassTrue("help-block", value);
        }
    });

    Bridge.define("ESBootstrap.ParagraphList", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('div'));
            if (typos == null || typos.length === 0) {
                return;
            }

            var length = typos.length;
            var list = System.Array.init(length, null, Object);

            for (var i = 0; i < length; i = (i + 1) | 0) {
                if (typos[i] == null) {
                    list[i] = new ESBootstrap.Paragraph.ctor();
                    continue;
                }

                if (Bridge.is(typos[i], ESBootstrap.Paragraph)) {
                    list[i] = typos[i];
                } else {
                    list[i] = new ESBootstrap.Paragraph.ctor([typos[i]]);
                }

            }
            ESBootstrap.Widget.appendTypos$1(this, list);
        }
    });

    Bridge.define("ESBootstrap.Pre", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("pre"), typos);

        }
    });

    Bridge.define("ESBootstrap.Samp", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("samp"), typos);

        }
    });

    Bridge.define("ESBootstrap.Small", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("small"), typos);

        }
    });

    Bridge.define("ESBootstrap.SourceOnly", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('span'), {
                className: "sr-only"
            } ), typos);

        }
    });

    Bridge.define("ESBootstrap.Strikethrough", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("s"), typos);

        }
    });

    Bridge.define("ESBootstrap.Strong", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("strong"), typos);

        }
    });

    Bridge.define("ESBootstrap.Table", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('table'), {
                className: "table"
            } ), typos);

        },
        getTableBody: function () {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableBody, this.getSection("tbody"));
        },
        getTableHeader: function () {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableHeader, this.getSection("thead"));
        },
        getStriped: function () {
            return this.getClassTrue("table-striped");
        },
        setStriped: function (value) {
            this.setClassTrue("table-striped", value);
        },
        getBordered: function () {
            return this.getClassTrue("table-bordered");
        },
        setBordered: function (value) {
            this.setClassTrue("table-bordered", value);
        },
        getHover: function () {
            return this.getClassTrue("table-hover");
        },
        setHover: function (value) {
            this.setClassTrue("table-hover", value);
        },
        getCondensed: function () {
            return this.getClassTrue("table-condensed");
        },
        setCondensed: function (value) {
            this.setClassTrue("table-condensed", value);
        },
        hasRows: function () {
            var obj = this.getSection("tbody");
            return obj != null && obj.childElementCount > 0;
        },
        hasColumns: function () {
            var obj = this.getSection("thead");
            return obj != null && obj.childElementCount > 0;
        },
        getSection: function (name) {
            var $t;
            name = name.toLowerCase();
            $t = Bridge.getEnumerator(this.content.children);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (item != null && Bridge.referenceEquals(item.tagName.toLowerCase(), name)) {
                    return Bridge.cast(item, HTMLTableSectionElement);
                }
            }
            return null;
        }
    });

    Bridge.define("ESBootstrap.TableBody", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("tbody"), typos);

        },
        getRows: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.row(i));
            }
            return System.Array.toEnumerable($yield);
        },
        row: function (index) {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableRow, this.content.children[index]);
        }
    });

    Bridge.define("ESBootstrap.TableCell", {
        inherits: [ESBootstrap.Widget],
        statics: {
            appendDataRow: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ESBootstrap.TableCell.ctor();
                        continue;
                    }

                    if (Bridge.is(typos[i], ESBootstrap.TableCell)) {
                        list[i] = typos[i];
                    } else if (Bridge.is(typos[i], ESBootstrap.TableHeader)) {
                        var x = typos[i];
                        list[i] = x;
                        x.content.setAttribute("scope", "row");
                    } else {
                        list[i] = new ESBootstrap.TableCell.ctor([typos[i]]);
                    }

                }
                ESBootstrap.Widget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('td'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('td'), {
                className: System.Enum.format(ESBootstrap.BootRowCellTheme, theme, "G")
            } ), typos);

        },
        getTheme: function () {
            return this.getEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ESBootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ESBootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ESBootstrap.TableFooter", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("tfoot"), typos);

        }
    });

    Bridge.define("ESBootstrap.TableHeader", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("thead"), typos);

        },
        getHeaderRows: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.headerRow(i));
            }
            return System.Array.toEnumerable($yield);
        },
        headerRow: function (index) {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableHeaderRow, this.content.children[index]);
        }
    });

    Bridge.define("ESBootstrap.TableHeaderCell", {
        inherits: [ESBootstrap.Widget],
        statics: {
            appendHeaderDataRow: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ESBootstrap.TableHeaderCell.ctor();
                        continue;
                    }

                    if (Bridge.is(typos[i], ESBootstrap.TableHeaderCell)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ESBootstrap.TableHeaderCell.ctor([typos[i]]);
                    }

                }
                ESBootstrap.Widget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('th'), typos);

        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('th'), {
                className: System.Enum.format(ESBootstrap.BootRowCellTheme, theme, "G")
            } ), typos);

        },
        getTheme: function () {
            return this.getEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ESBootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ESBootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ESBootstrap.TableHeaderRow", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('tr'));
            ESBootstrap.TableHeaderCell.appendHeaderDataRow(this, typos);
        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('tr'), {
                className: System.Enum.format(ESBootstrap.BootRowCellTheme, theme, "G")
            } ));
            ESBootstrap.TableHeaderCell.appendHeaderDataRow(this, typos);
        },
        getHeaderCells: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.headerCell(i));
            }
            return System.Array.toEnumerable($yield);
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ESBootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ESBootstrap.BootRowCellTheme, value, "G").toLowerCase(), "_", "-"));
        },
        headerCell: function (index) {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableHeaderCell, this.content.children[index]);
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ESBootstrap.TableRow", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement('tr'));
            ESBootstrap.TableCell.appendDataRow(this, typos);
        },
        $ctor1: function (theme, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('tr'), {
                className: System.Enum.format(ESBootstrap.BootRowCellTheme, theme, "G")
            } ));
            ESBootstrap.TableCell.appendDataRow(this, typos);
        },
        getCells: function () {
            var $yield = [];
            var length = this.content.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                $yield.push(this.cell(i));
            }
            return System.Array.toEnumerable($yield);
        },
        getTheme: function () {
            return this.getEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        },
        setTheme: function (value) {
            this.setEnumClassValue$1(ESBootstrap.BootRowCellTheme, System.Enum.format(ESBootstrap.BootRowCellTheme, value, "G").toLowerCase());
        },
        cell: function (index) {
            return ESBootstrap.Widget.castElement(ESBootstrap.TableCell, this.content.children[index]);
        },
        clearTheme: function () {
            this.clearEnumClassValue$1(ESBootstrap.BootRowCellTheme);
        }
    });

    Bridge.define("ESBootstrap.Underlined", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("u"), typos);

        }
    });

    Bridge.define("ESBootstrap.UnorderedList", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("ul"), typos);
            ESBootstrap.ListItem.appendItemList(this, typos);
        },
        getUnstyled: function () {
            return this.getClassTrue("list-unstyled");
        },
        setUnstyled: function (value) {
            this.setClassTrue("list-unstyled", value);
        },
        getInline: function () {
            return this.getClassTrue("list-inline");
        },
        setInline: function (value) {
            this.setClassTrue("list-inline", value);
        },
        getNav: function () {
            return this.getClassTrue("nav") && this.getClassTrue("navbar-nav");
        },
        setNav: function (value) {
            this.setClassTrue("nav", value);
            this.setClassTrue("navbar-nav", value);
            this.applyDataAttribute(this.content, value);
        },
        getDropdownMenu: function () {
            return this.getClassTrue("dropdown-menu");
        },
        setDropdownMenu: function (value) {
            this.setClassTrue("dropdown-menu", value);
        },
        applyDataAttribute: function (htmlElement, value) {
            if (htmlElement == null) {
                return;
            }
            var length = htmlElement.childElementCount;
            for (var i = 0; i < length; i = (i + 1) | 0) {
                var child = htmlElement.children[i];
                if (child.childElementCount > 0) {
                    this.applyDataAttribute(child, value);
                }

                if (!(Bridge.referenceEquals(child.tagName.toUpperCase(), "A") && !child.classList.contains("dropdown-toggle") && child.parentElement != null && Bridge.referenceEquals(child.parentElement.tagName.toUpperCase(), "LI"))) {
                    continue;
                }
                if (value) {
                    child.setAttribute("data-toggle", "collapse");
                    child.setAttribute("data-target", ".navbar-collapse.in");
                } else {
                    child.setAttribute("data-toggle", "");
                    child.setAttribute("data-target", "");
                }
            }
        }
    });

    Bridge.define("ESBootstrap.Var", {
        inherits: [ESBootstrap.Widget],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, document.createElement("var"), typos);

        }
    });

    Bridge.define("ESBootstrap.Viewport", {
        inherits: [ESBootstrap.Widget],
        ctor: function (width, initial_scale, maximum_scale, user_scalable) {
            if (width === void 0) { width = "device-width"; }
            if (initial_scale === void 0) { initial_scale = "1"; }
            if (maximum_scale === void 0) { maximum_scale = "1"; }
            if (user_scalable === void 0) { user_scalable = ""; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('meta'), {
                name: "viewport"
            } ), null);
            this.setContent(width, initial_scale, maximum_scale, user_scalable);
        },
        setContent: function (width, initial_scale, maximum_scale, user_scalable) {
            if (width === void 0) { width = "device-width"; }
            if (initial_scale === void 0) { initial_scale = "1"; }
            if (maximum_scale === void 0) { maximum_scale = "1"; }
            if (user_scalable === void 0) { user_scalable = ""; }
            this.setAttribute("content", System.String.format("width={0}, initial-scale=1{1}", width, (Bridge.referenceEquals(user_scalable, "no") ? ", user-scalable=no" : "")));
        },
        getContent: function () {
            return this.getAttribute("content");
        }
    });

    Bridge.define("ESBootstrap.Anchor", {
        inherits: [ESBootstrap.WidgetClickable],
        ctor: function (href, typos) {
            if (href === void 0) { href = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetClickable.$ctor1.call(this, document.createElement('a'), typos);
            if (!System.String.isNullOrWhiteSpace(href)) {
                this.content.href = href;
            }
        },
        getNavbarLink: function () {
            return this.getClassTrue("navbar-link");
        },
        setNavbarLink: function (value) {
            this.setClassTrue("navbar-link", value);
        }
    });

    Bridge.define("ESBootstrap.Button", {
        inherits: [ESBootstrap.WidgetClickable],
        $ctor3: function (text, type, buttonType) {
            if (text === void 0) { text = ""; }
            if (type === void 0) { type = 1; }
            if (buttonType === void 0) { buttonType = 2; }

            this.$initialize();
            ESBootstrap.WidgetClickable.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: buttonType,
                className: System.String.concat("btn", ESBootstrap.Extensions.getClassTheme(" btn-", type))
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.content.innerHTML = text;
            }
        },
        $ctor2: function (text, buttonType) {
            if (text === void 0) { text = ""; }
            if (buttonType === void 0) { buttonType = 2; }

            ESBootstrap.Button.$ctor3.call(this, text, ESBootstrap.BootTheme.Default, buttonType);

        },
        $ctor1: function (text) {
            if (text === void 0) { text = ""; }

            ESBootstrap.Button.$ctor3.call(this, text, ESBootstrap.BootTheme.Default);

        },
        ctor: function () {
            ESBootstrap.Button.$ctor3.call(this, "", ESBootstrap.BootTheme.Default);

        },
        getNavbarButton: function () {
            return this.getClassTrue("navbar-btn");
        },
        setNavbarButton: function (value) {
            this.setClassTrue("navbar-btn", value);
        },
        getBlock: function () {
            return this.getClassTrue("btn-block");
        },
        setBlock: function (value) {
            this.setClassTrue("btn-block", value);
        },
        getTheme: function () {
            var x = this.getEnumClassValue("btn-", ESBootstrap.BootTheme);
            if (x == null) {
                return ESBootstrap.BootTheme.None;
            } else {
                return x;
            }
        },
        setTheme: function (value) {
            if (value === ESBootstrap.BootTheme.None) {
                this.clearEnumClassValue("btn-", ESBootstrap.BootRowCellTheme);
            } else {
                this.setEnumClassValue("btn-", ESBootstrap.BootRowCellTheme, System.String.replaceAll(System.Enum.format(ESBootstrap.BootTheme, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getButtonSize: function () {
            var x = this.getEnumClassValue("btn-", ESBootstrap.BootSize);
            if (x == null) {
                return ESBootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setButtonSize: function (value) {
            if (value === ESBootstrap.BootSize.None) {
                this.clearEnumClassValue("btn-", ESBootstrap.BootSize);
            } else {
                this.setEnumClassValue("btn-", ESBootstrap.BootSize, System.String.replaceAll(System.Enum.format(ESBootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        }
    });

    Bridge.define("ESBootstrap.ButtonGroup", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "btn-group", typos);
            this.setAttribute("role", "group");
        },
        getButtonSize: function () {
            var x = this.getEnumClassValue("btn-group-", ESBootstrap.BootSize);
            if (x == null) {
                return ESBootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setButtonSize: function (value) {
            if (value === ESBootstrap.BootSize.None) {
                this.clearEnumClassValue("btn-group-", ESBootstrap.BootSize);
            } else {
                this.setEnumClassValue("btn-group-", ESBootstrap.BootSize, System.String.replaceAll(System.Enum.format(ESBootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        },
        getVertical: function () {
            return this.getClassTrue("btn-group-vertical");
        },
        setVertical: function (value) {
            this.setClassTrue("btn-group", !value);
            this.setClassTrue("btn-group-vertical", value);
        },
        getJustified: function () {
            return this.getClassTrue("btn-group-justified");
        },
        setJustified: function (value) {
            this.setClassTrue("btn-group-justified", value);
        },
        getDropup: function () {
            return this.getClassTrue("dropup");
        },
        setDropup: function (value) {
            this.setClassTrue("dropup", value);
        }
    });

    Bridge.define("ESBootstrap.CheckBox", {
        inherits: [ESBootstrap.WidgetStyle],
        onCheckChanged: null,
        ctor: function (label, value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "checkbox");
            var x = new ESBootstrap.CheckBoxBase(value);
            ESBootstrap.Widget.appendTypos$1(this, [new ESBootstrap.Label([x, label])]);

            x.setOnTextChanged(Bridge.fn.bind(this, $asm.$.ESBootstrap.CheckBox.f1));
        },
        getInline: function () {
            return ESBootstrap.Widget.getInline(this, "checkbox");
        },
        setInline: function (value) {
            ESBootstrap.Widget.setInline(this, "checkbox", value);
        },
        getChecked: function () {
            return ESBootstrap.Extensions.isTrue(System.Boolean.toString(this.content.firstChild.firstChild.checked)) === 1;
        },
        setChecked: function (value) {
            this.content.firstChild.firstChild.checked = value;
        }
    });

    Bridge.ns("ESBootstrap.CheckBox", $asm.$);

    Bridge.apply($asm.$.ESBootstrap.CheckBox, {
        f1: function (obj) {
            if (!Bridge.staticEquals(this.onCheckChanged, null)) {
                this.onCheckChanged(this);
            }
        }
    });

    Bridge.define("ESBootstrap.CheckBoxBase", {
        inherits: [ESBootstrap.WidgetBox],
        ctor: function (value) {
            if (value === void 0) { value = false; }

            this.$initialize();
            ESBootstrap.WidgetBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
                type: "checkbox"
            } ));
            this.setChecked(value);
        },
        getChecked: function () {
            return ESBootstrap.Extensions.isTrue(System.Boolean.toString(this.content.checked)) === 1;
        },
        setChecked: function (value) {
            this.content.checked = value;
        }
    });

    Bridge.define("ESBootstrap.ClearFix", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (tier, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, 'clearfix visible' + tier.value + 'block', typos);

        }
    });

    Bridge.define("ESBootstrap.Container", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "container", typos);

        },
        getFluid: function () {
            return this.getClassTrue("container-fluid");
        },
        setFluid: function (value) {
            this.setClassTrue("container", !value);
            this.setClassTrue("container-fluid", value);
        }
    });

    Bridge.define("ESBootstrap.FormGroup", {
        inherits: [ESBootstrap.WidgetStyle],
        statics: {
            appendGroupList: function (control, typos) {
                if (typos === void 0) { typos = []; }
                if (typos == null || typos.length === 0) {
                    return;
                }

                var length = typos.length;
                var list = System.Array.init(length, null, Object);

                for (var i = 0; i < length; i = (i + 1) | 0) {
                    if (typos[i] == null) {
                        list[i] = new ESBootstrap.FormGroup();
                        continue;
                    }

                    if (Bridge.is(typos[i], ESBootstrap.FormGroup) || Bridge.is(typos[i], ESBootstrap.BootFormType)) {
                        list[i] = typos[i];
                    } else {
                        list[i] = new ESBootstrap.FormGroup([typos[i]]);
                    }

                }
                ESBootstrap.Widget.appendTypos$1(control, list);
            }
        },
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "form-group", typos);

        }
    });

    Bridge.define("ESBootstrap.InputGroup", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "input-group", typos);

        },
        getInputSize: function () {
            var x = this.getEnumClassValue("input-group-", ESBootstrap.BootSize);
            if (x == null) {
                return ESBootstrap.BootSize.None;
            } else {
                return x;
            }
        },
        setInputSize: function (value) {
            if (value === ESBootstrap.BootSize.None) {
                this.clearEnumClassValue("input-group-", ESBootstrap.BootSize);
            } else {
                this.setEnumClassValue("input-group-", ESBootstrap.BootSize, System.String.replaceAll(System.Enum.format(ESBootstrap.BootSize, value, "G").toLowerCase(), "_", "-"));
            }
        }
    });

    Bridge.define("ESBootstrap.NavbarBrand", {
        inherits: [ESBootstrap.WidgetClickable],
        ctor: function (href, typos) {
            if (href === void 0) { href = ""; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetClickable.$ctor1.call(this, Bridge.merge(document.createElement('a'), {
                className: "navbar-brand"
            } ), typos);
            if (!System.String.isNullOrWhiteSpace(href)) {
                this.content.href = href;
            }
        }
    });

    Bridge.define("ESBootstrap.NavbarCollapseButton", {
        inherits: [ESBootstrap.WidgetClickable],
        ctor: function (_id) {
            this.$initialize();
            ESBootstrap.WidgetClickable.ctor.call(this, Bridge.merge(document.createElement('button'), {
                type: "button",
                className: "navbar-toggle collapsed"
            } ));
            if (!System.String.isNullOrWhiteSpace(_id) && !System.String.startsWith(_id, "#")) {
                _id = System.String.concat("#", _id);
            }
            ESBootstrap.Widget.appendTypos$1(this, [new ESBootstrap.SourceOnly(["Toggle navigation"]), new ESBootstrap.IconBar(), new ESBootstrap.IconBar(), new ESBootstrap.IconBar()]);
            this.setAttribute("data-toggle", "collapse");
            this.setAttribute("data-target", _id);

            this.setAttribute("aria-expanded", "false");
        }
    });

    Bridge.define("ESBootstrap.NavbarContent", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (_id, typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "collapse navbar-collapse", typos);
            if (!System.String.isNullOrWhiteSpace(_id)) {
                if (System.String.startsWith(_id, "#")) {
                    _id = _id.substr(1);
                }
                this.setId(_id);
            }
        }
    });

    Bridge.define("ESBootstrap.NavbarHeader", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "navbar-header", typos);

        }
    });

    Bridge.define("ESBootstrap.Panel", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (type, typos) {
            if (type === void 0) { type = 1; }
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, System.String.concat("panel", ESBootstrap.Extensions.getClassTheme(" panel-", type)), typos);

        }
    });

    Bridge.define("ESBootstrap.PanelBody", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "panel-body", typos);

        }
    });

    Bridge.define("ESBootstrap.PanelFooter", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "panel-footer", typos);

        }
    });

    Bridge.define("ESBootstrap.PanelGroup", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "panel-group", typos);

        }
    });

    Bridge.define("ESBootstrap.PanelHeading", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "panel-heading", typos);

        }
    });

    Bridge.define("ESBootstrap.Row", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "row", typos);

        }
    });

    Bridge.define("ESBootstrap.TableResponsive", {
        inherits: [ESBootstrap.WidgetStyle],
        ctor: function (typos) {
            if (typos === void 0) { typos = []; }

            this.$initialize();
            ESBootstrap.WidgetStyle.ctor.call(this, "table-responsive", typos);

        }
    });

    Bridge.define("ESBootstrap.TextArea", {
        inherits: [ESBootstrap.WidgetBox],
        ctor: function (text, rows) {
            if (text === void 0) { text = ""; }
            if (rows === void 0) { rows = 1; }

            this.$initialize();
            ESBootstrap.WidgetBox.ctor.call(this, Bridge.merge(document.createElement('textarea'), {
                className: "form-control"
            } ));
            this.setText(text);
            this.content.rows = Math.max(rows, 1);
        }
    });

    Bridge.define("ESBootstrap.TextBox", {
        inherits: [ESBootstrap.WidgetBox],
        $ctor1: function (text, type) {
            if (type === void 0) { type = 19; }

            this.$initialize();
            ESBootstrap.WidgetBox.ctor.call(this, Bridge.merge(document.createElement('input'), {
                type: Bridge.Browser.isIE ? "text" : type,
                className: "form-control"
            } ));
            if (!System.String.isNullOrWhiteSpace(text)) {
                this.setText(text);
            }
        },
        ctor: function (type) {
            if (type === void 0) { type = 19; }

            ESBootstrap.TextBox.$ctor1.call(this, "", type);

        }
    });
});
