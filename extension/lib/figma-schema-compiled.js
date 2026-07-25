/* 빌드 산출물: Figma 스키마 정적 컴파일(eval 없음). compileSchemaJS() 출력을 ESM으로 래핑. */
import { ByteBuffer } from "./kiwi.js";
const require = function(){ return { ByteBuffer: ByteBuffer }; };
var exports = exports || {};
exports.ByteBuffer = exports.ByteBuffer || require("kiwi-schema").ByteBuffer;
exports["MessageType"] = {
  "0": "JOIN_START",
  "1": "NODE_CHANGES",
  "2": "USER_CHANGES",
  "3": "JOIN_END",
  "4": "SIGNAL",
  "5": "STYLE",
  "6": "STYLE_SET",
  "7": "JOIN_START_SKIP_RELOAD",
  "8": "NOTIFY_SHOULD_UPGRADE",
  "9": "UPGRADE_DONE",
  "10": "UPGRADE_REFRESH",
  "11": "SCENE_GRAPH_QUERY",
  "12": "SCENE_GRAPH_REPLY",
  "13": "DIFF",
  "14": "CLIENT_BROADCAST",
  "15": "JOIN_START_JOURNALED",
  "16": "STREAM_START",
  "17": "STREAM_END",
  "18": "INTERACTIVE_SLIDE_CHANGE",
  "19": "RECONNECT_SCENE_GRAPH_QUERY",
  "20": "RECONNECT_SCENE_GRAPH_REPLY",
  "21": "JOIN_END_INCREMENTAL_RECONNECT",
  "22": "NODE_STATUS_CHANGE",
  "23": "CLIENT_RENDERED",
  "24": "BUZZ_APPROVAL_CHANGE",
  "JOIN_START": 0,
  "NODE_CHANGES": 1,
  "USER_CHANGES": 2,
  "JOIN_END": 3,
  "SIGNAL": 4,
  "STYLE": 5,
  "STYLE_SET": 6,
  "JOIN_START_SKIP_RELOAD": 7,
  "NOTIFY_SHOULD_UPGRADE": 8,
  "UPGRADE_DONE": 9,
  "UPGRADE_REFRESH": 10,
  "SCENE_GRAPH_QUERY": 11,
  "SCENE_GRAPH_REPLY": 12,
  "DIFF": 13,
  "CLIENT_BROADCAST": 14,
  "JOIN_START_JOURNALED": 15,
  "STREAM_START": 16,
  "STREAM_END": 17,
  "INTERACTIVE_SLIDE_CHANGE": 18,
  "RECONNECT_SCENE_GRAPH_QUERY": 19,
  "RECONNECT_SCENE_GRAPH_REPLY": 20,
  "JOIN_END_INCREMENTAL_RECONNECT": 21,
  "NODE_STATUS_CHANGE": 22,
  "CLIENT_RENDERED": 23,
  "BUZZ_APPROVAL_CHANGE": 24
};
exports["Axis"] = {
  "0": "X",
  "1": "Y",
  "X": 0,
  "Y": 1
};
exports["Access"] = {
  "0": "READ_ONLY",
  "1": "READ_WRITE",
  "READ_ONLY": 0,
  "READ_WRITE": 1
};
exports["NodePhase"] = {
  "0": "CREATED",
  "1": "REMOVED",
  "CREATED": 0,
  "REMOVED": 1
};
exports["WindingRule"] = {
  "0": "NONZERO",
  "1": "ODD",
  "NONZERO": 0,
  "ODD": 1
};
exports["NodeType"] = {
  "0": "NONE",
  "1": "DOCUMENT",
  "2": "CANVAS",
  "3": "GROUP",
  "4": "FRAME",
  "5": "BOOLEAN_OPERATION",
  "6": "VECTOR",
  "7": "STAR",
  "8": "LINE",
  "9": "ELLIPSE",
  "10": "RECTANGLE",
  "11": "REGULAR_POLYGON",
  "12": "ROUNDED_RECTANGLE",
  "13": "TEXT",
  "14": "SLICE",
  "15": "SYMBOL",
  "16": "INSTANCE",
  "17": "STICKY",
  "18": "SHAPE_WITH_TEXT",
  "19": "CONNECTOR",
  "20": "CODE_BLOCK",
  "21": "WIDGET",
  "22": "STAMP",
  "23": "MEDIA",
  "24": "HIGHLIGHT",
  "25": "SECTION",
  "26": "SECTION_OVERLAY",
  "27": "WASHI_TAPE",
  "28": "VARIABLE",
  "29": "TABLE",
  "30": "TABLE_CELL",
  "31": "VARIABLE_SET",
  "32": "SLIDE",
  "33": "ASSISTED_LAYOUT",
  "34": "INTERACTIVE_SLIDE_ELEMENT",
  "35": "VARIABLE_OVERRIDE",
  "36": "MODULE",
  "37": "SLIDE_GRID",
  "38": "SLIDE_ROW",
  "39": "RESPONSIVE_SET",
  "40": "CODE_COMPONENT",
  "41": "TEXT_PATH",
  "42": "CODE_INSTANCE",
  "43": "CODE_LIBRARY",
  "44": "CODE_FILE",
  "45": "CODE_LAYER",
  "46": "BRUSH",
  "47": "MANAGED_STRING",
  "48": "TRANSFORM",
  "49": "CMS_RICH_TEXT",
  "50": "REPEATER",
  "51": "JSX",
  "52": "EMBEDDED_PROTOTYPE",
  "53": "REACT_FIBER",
  "54": "RESPONSIVE_NODE_SET",
  "55": "WEBPAGE",
  "56": "KEYFRAME",
  "57": "KEYFRAME_TRACK",
  "58": "ANIMATION_PRESET_INSTANCE",
  "59": "CODE_EMBED",
  "60": "BINARY_FILE",
  "61": "SPEC_BLOCK",
  "62": "TOOL_INSTANCE",
  "63": "CUSTOM_EFFECT_INSTANCE",
  "64": "NATIVE_CODE_LAYER_INSTANCE",
  "NONE": 0,
  "DOCUMENT": 1,
  "CANVAS": 2,
  "GROUP": 3,
  "FRAME": 4,
  "BOOLEAN_OPERATION": 5,
  "VECTOR": 6,
  "STAR": 7,
  "LINE": 8,
  "ELLIPSE": 9,
  "RECTANGLE": 10,
  "REGULAR_POLYGON": 11,
  "ROUNDED_RECTANGLE": 12,
  "TEXT": 13,
  "SLICE": 14,
  "SYMBOL": 15,
  "INSTANCE": 16,
  "STICKY": 17,
  "SHAPE_WITH_TEXT": 18,
  "CONNECTOR": 19,
  "CODE_BLOCK": 20,
  "WIDGET": 21,
  "STAMP": 22,
  "MEDIA": 23,
  "HIGHLIGHT": 24,
  "SECTION": 25,
  "SECTION_OVERLAY": 26,
  "WASHI_TAPE": 27,
  "VARIABLE": 28,
  "TABLE": 29,
  "TABLE_CELL": 30,
  "VARIABLE_SET": 31,
  "SLIDE": 32,
  "ASSISTED_LAYOUT": 33,
  "INTERACTIVE_SLIDE_ELEMENT": 34,
  "VARIABLE_OVERRIDE": 35,
  "MODULE": 36,
  "SLIDE_GRID": 37,
  "SLIDE_ROW": 38,
  "RESPONSIVE_SET": 39,
  "CODE_COMPONENT": 40,
  "TEXT_PATH": 41,
  "CODE_INSTANCE": 42,
  "CODE_LIBRARY": 43,
  "CODE_FILE": 44,
  "CODE_LAYER": 45,
  "BRUSH": 46,
  "MANAGED_STRING": 47,
  "TRANSFORM": 48,
  "CMS_RICH_TEXT": 49,
  "REPEATER": 50,
  "JSX": 51,
  "EMBEDDED_PROTOTYPE": 52,
  "REACT_FIBER": 53,
  "RESPONSIVE_NODE_SET": 54,
  "WEBPAGE": 55,
  "KEYFRAME": 56,
  "KEYFRAME_TRACK": 57,
  "ANIMATION_PRESET_INSTANCE": 58,
  "CODE_EMBED": 59,
  "BINARY_FILE": 60,
  "SPEC_BLOCK": 61,
  "TOOL_INSTANCE": 62,
  "CUSTOM_EFFECT_INSTANCE": 63,
  "NATIVE_CODE_LAYER_INSTANCE": 64
};
exports["ShapeWithTextType"] = {
  "0": "SQUARE",
  "1": "ELLIPSE",
  "2": "DIAMOND",
  "3": "TRIANGLE_UP",
  "4": "TRIANGLE_DOWN",
  "5": "ROUNDED_RECTANGLE",
  "6": "PARALLELOGRAM_RIGHT",
  "7": "PARALLELOGRAM_LEFT",
  "8": "ENG_DATABASE",
  "9": "ENG_QUEUE",
  "10": "ENG_FILE",
  "11": "ENG_FOLDER",
  "12": "TRAPEZOID",
  "13": "PREDEFINED_PROCESS",
  "14": "SHIELD",
  "15": "DOCUMENT_SINGLE",
  "16": "DOCUMENT_MULTIPLE",
  "17": "MANUAL_INPUT",
  "18": "HEXAGON",
  "19": "CHEVRON",
  "20": "PENTAGON",
  "21": "OCTAGON",
  "22": "STAR",
  "23": "PLUS",
  "24": "ARROW_LEFT",
  "25": "ARROW_RIGHT",
  "26": "SUMMING_JUNCTION",
  "27": "OR",
  "28": "SPEECH_BUBBLE",
  "29": "INTERNAL_STORAGE",
  "SQUARE": 0,
  "ELLIPSE": 1,
  "DIAMOND": 2,
  "TRIANGLE_UP": 3,
  "TRIANGLE_DOWN": 4,
  "ROUNDED_RECTANGLE": 5,
  "PARALLELOGRAM_RIGHT": 6,
  "PARALLELOGRAM_LEFT": 7,
  "ENG_DATABASE": 8,
  "ENG_QUEUE": 9,
  "ENG_FILE": 10,
  "ENG_FOLDER": 11,
  "TRAPEZOID": 12,
  "PREDEFINED_PROCESS": 13,
  "SHIELD": 14,
  "DOCUMENT_SINGLE": 15,
  "DOCUMENT_MULTIPLE": 16,
  "MANUAL_INPUT": 17,
  "HEXAGON": 18,
  "CHEVRON": 19,
  "PENTAGON": 20,
  "OCTAGON": 21,
  "STAR": 22,
  "PLUS": 23,
  "ARROW_LEFT": 24,
  "ARROW_RIGHT": 25,
  "SUMMING_JUNCTION": 26,
  "OR": 27,
  "SPEECH_BUBBLE": 28,
  "INTERNAL_STORAGE": 29
};
exports["BlendMode"] = {
  "0": "PASS_THROUGH",
  "1": "NORMAL",
  "2": "DARKEN",
  "3": "MULTIPLY",
  "4": "LINEAR_BURN",
  "5": "COLOR_BURN",
  "6": "LIGHTEN",
  "7": "SCREEN",
  "8": "LINEAR_DODGE",
  "9": "COLOR_DODGE",
  "10": "OVERLAY",
  "11": "SOFT_LIGHT",
  "12": "HARD_LIGHT",
  "13": "DIFFERENCE",
  "14": "EXCLUSION",
  "15": "HUE",
  "16": "SATURATION",
  "17": "COLOR",
  "18": "LUMINOSITY",
  "PASS_THROUGH": 0,
  "NORMAL": 1,
  "DARKEN": 2,
  "MULTIPLY": 3,
  "LINEAR_BURN": 4,
  "COLOR_BURN": 5,
  "LIGHTEN": 6,
  "SCREEN": 7,
  "LINEAR_DODGE": 8,
  "COLOR_DODGE": 9,
  "OVERLAY": 10,
  "SOFT_LIGHT": 11,
  "HARD_LIGHT": 12,
  "DIFFERENCE": 13,
  "EXCLUSION": 14,
  "HUE": 15,
  "SATURATION": 16,
  "COLOR": 17,
  "LUMINOSITY": 18
};
exports["PaintType"] = {
  "0": "SOLID",
  "1": "GRADIENT_LINEAR",
  "2": "GRADIENT_RADIAL",
  "3": "GRADIENT_ANGULAR",
  "4": "GRADIENT_DIAMOND",
  "5": "IMAGE",
  "6": "EMOJI",
  "7": "VIDEO",
  "8": "PATTERN",
  "9": "NOISE",
  "10": "CUSTOM",
  "SOLID": 0,
  "GRADIENT_LINEAR": 1,
  "GRADIENT_RADIAL": 2,
  "GRADIENT_ANGULAR": 3,
  "GRADIENT_DIAMOND": 4,
  "IMAGE": 5,
  "EMOJI": 6,
  "VIDEO": 7,
  "PATTERN": 8,
  "NOISE": 9,
  "CUSTOM": 10
};
exports["ImageScaleMode"] = {
  "0": "STRETCH",
  "1": "FIT",
  "2": "FILL",
  "3": "TILE",
  "STRETCH": 0,
  "FIT": 1,
  "FILL": 2,
  "TILE": 3
};
exports["EffectType"] = {
  "0": "INNER_SHADOW",
  "1": "DROP_SHADOW",
  "2": "FOREGROUND_BLUR",
  "3": "BACKGROUND_BLUR",
  "4": "REPEAT",
  "5": "SYMMETRY",
  "6": "GRAIN",
  "7": "NOISE",
  "8": "GLASS",
  "9": "CUSTOM",
  "INNER_SHADOW": 0,
  "DROP_SHADOW": 1,
  "FOREGROUND_BLUR": 2,
  "BACKGROUND_BLUR": 3,
  "REPEAT": 4,
  "SYMMETRY": 5,
  "GRAIN": 6,
  "NOISE": 7,
  "GLASS": 8,
  "CUSTOM": 9
};
exports["TextCase"] = {
  "0": "ORIGINAL",
  "1": "UPPER",
  "2": "LOWER",
  "3": "TITLE",
  "4": "SMALL_CAPS",
  "5": "SMALL_CAPS_FORCED",
  "ORIGINAL": 0,
  "UPPER": 1,
  "LOWER": 2,
  "TITLE": 3,
  "SMALL_CAPS": 4,
  "SMALL_CAPS_FORCED": 5
};
exports["TextDecoration"] = {
  "0": "NONE",
  "1": "UNDERLINE",
  "2": "STRIKETHROUGH",
  "NONE": 0,
  "UNDERLINE": 1,
  "STRIKETHROUGH": 2
};
exports["TextDecorationStyle"] = {
  "0": "SOLID",
  "1": "DOTTED",
  "2": "WAVY",
  "SOLID": 0,
  "DOTTED": 1,
  "WAVY": 2
};
exports["LeadingTrim"] = {
  "0": "NONE",
  "1": "CAP_HEIGHT",
  "NONE": 0,
  "CAP_HEIGHT": 1
};
exports["NumberUnits"] = {
  "0": "RAW",
  "1": "PIXELS",
  "2": "PERCENT",
  "RAW": 0,
  "PIXELS": 1,
  "PERCENT": 2
};
exports["ConstraintType"] = {
  "0": "MIN",
  "1": "CENTER",
  "2": "MAX",
  "3": "STRETCH",
  "4": "SCALE",
  "5": "FIXED_MIN",
  "6": "FIXED_MAX",
  "MIN": 0,
  "CENTER": 1,
  "MAX": 2,
  "STRETCH": 3,
  "SCALE": 4,
  "FIXED_MIN": 5,
  "FIXED_MAX": 6
};
exports["StrokeAlign"] = {
  "0": "CENTER",
  "1": "INSIDE",
  "2": "OUTSIDE",
  "3": "OFFSET",
  "CENTER": 0,
  "INSIDE": 1,
  "OUTSIDE": 2,
  "OFFSET": 3
};
exports["StrokeCap"] = {
  "0": "NONE",
  "1": "ROUND",
  "2": "SQUARE",
  "3": "ARROW_LINES",
  "4": "ARROW_EQUILATERAL",
  "5": "DIAMOND_FILLED",
  "6": "TRIANGLE_FILLED",
  "7": "HIGHLIGHT",
  "8": "WASHI_TAPE_1",
  "9": "WASHI_TAPE_2",
  "10": "WASHI_TAPE_3",
  "11": "WASHI_TAPE_4",
  "12": "WASHI_TAPE_5",
  "13": "WASHI_TAPE_6",
  "14": "CIRCLE_FILLED",
  "15": "ERD_ZERO_OR_ONE",
  "16": "ERD_EXACTLY_ONE",
  "17": "ERD_ZERO_OR_MORE",
  "18": "ERD_ONE_OR_MORE",
  "19": "ERD_ONE",
  "20": "ERD_MANY",
  "NONE": 0,
  "ROUND": 1,
  "SQUARE": 2,
  "ARROW_LINES": 3,
  "ARROW_EQUILATERAL": 4,
  "DIAMOND_FILLED": 5,
  "TRIANGLE_FILLED": 6,
  "HIGHLIGHT": 7,
  "WASHI_TAPE_1": 8,
  "WASHI_TAPE_2": 9,
  "WASHI_TAPE_3": 10,
  "WASHI_TAPE_4": 11,
  "WASHI_TAPE_5": 12,
  "WASHI_TAPE_6": 13,
  "CIRCLE_FILLED": 14,
  "ERD_ZERO_OR_ONE": 15,
  "ERD_EXACTLY_ONE": 16,
  "ERD_ZERO_OR_MORE": 17,
  "ERD_ONE_OR_MORE": 18,
  "ERD_ONE": 19,
  "ERD_MANY": 20
};
exports["StrokeJoin"] = {
  "0": "MITER",
  "1": "BEVEL",
  "2": "ROUND",
  "MITER": 0,
  "BEVEL": 1,
  "ROUND": 2
};
exports["BooleanOperation"] = {
  "0": "UNION",
  "1": "INTERSECT",
  "2": "SUBTRACT",
  "3": "XOR",
  "UNION": 0,
  "INTERSECT": 1,
  "SUBTRACT": 2,
  "XOR": 3
};
exports["TextAlignHorizontal"] = {
  "0": "LEFT",
  "1": "CENTER",
  "2": "RIGHT",
  "3": "JUSTIFIED",
  "LEFT": 0,
  "CENTER": 1,
  "RIGHT": 2,
  "JUSTIFIED": 3
};
exports["TextAlignVertical"] = {
  "0": "TOP",
  "1": "CENTER",
  "2": "BOTTOM",
  "TOP": 0,
  "CENTER": 1,
  "BOTTOM": 2
};
exports["MouseCursor"] = {
  "0": "DEFAULT",
  "1": "CROSSHAIR",
  "2": "EYEDROPPER",
  "3": "HAND",
  "4": "PAINT_BUCKET",
  "5": "PEN",
  "6": "PENCIL",
  "7": "MARKER",
  "8": "ERASER",
  "9": "HIGHLIGHTER",
  "10": "LASSO",
  "DEFAULT": 0,
  "CROSSHAIR": 1,
  "EYEDROPPER": 2,
  "HAND": 3,
  "PAINT_BUCKET": 4,
  "PEN": 5,
  "PENCIL": 6,
  "MARKER": 7,
  "ERASER": 8,
  "HIGHLIGHTER": 9,
  "LASSO": 10
};
exports["VectorMirror"] = {
  "0": "NONE",
  "1": "ANGLE",
  "2": "ANGLE_AND_LENGTH",
  "NONE": 0,
  "ANGLE": 1,
  "ANGLE_AND_LENGTH": 2
};
exports["DashMode"] = {
  "0": "CLIP",
  "1": "STRETCH",
  "CLIP": 0,
  "STRETCH": 1
};
exports["ImageType"] = {
  "0": "PNG",
  "1": "JPEG",
  "2": "SVG",
  "3": "PDF",
  "4": "MP4",
  "5": "GIF",
  "6": "WEBM",
  "7": "LOTTIE",
  "8": "DOTLOTTIE",
  "PNG": 0,
  "JPEG": 1,
  "SVG": 2,
  "PDF": 3,
  "MP4": 4,
  "GIF": 5,
  "WEBM": 6,
  "LOTTIE": 7,
  "DOTLOTTIE": 8
};
exports["ExportConstraintType"] = {
  "0": "CONTENT_SCALE",
  "1": "CONTENT_WIDTH",
  "2": "CONTENT_HEIGHT",
  "CONTENT_SCALE": 0,
  "CONTENT_WIDTH": 1,
  "CONTENT_HEIGHT": 2
};
exports["LayoutGridType"] = {
  "0": "MIN",
  "1": "CENTER",
  "2": "STRETCH",
  "3": "MAX",
  "MIN": 0,
  "CENTER": 1,
  "STRETCH": 2,
  "MAX": 3
};
exports["LayoutGridPattern"] = {
  "0": "STRIPES",
  "1": "GRID",
  "STRIPES": 0,
  "GRID": 1
};
exports["TextAutoResize"] = {
  "0": "NONE",
  "1": "WIDTH_AND_HEIGHT",
  "2": "HEIGHT",
  "NONE": 0,
  "WIDTH_AND_HEIGHT": 1,
  "HEIGHT": 2
};
exports["TextTruncation"] = {
  "0": "DISABLED",
  "1": "ENDING",
  "DISABLED": 0,
  "ENDING": 1
};
exports["TextWrapStyle"] = {
  "0": "AUTO",
  "1": "BALANCE",
  "2": "PRETTY",
  "AUTO": 0,
  "BALANCE": 1,
  "PRETTY": 2
};
exports["StyleSetType"] = {
  "0": "PERSONAL",
  "1": "TEAM",
  "2": "CUSTOM",
  "3": "FREQUENCY",
  "4": "TEMPORARY",
  "PERSONAL": 0,
  "TEAM": 1,
  "CUSTOM": 2,
  "FREQUENCY": 3,
  "TEMPORARY": 4
};
exports["StyleSetContentType"] = {
  "0": "SOLID",
  "1": "GRADIENT",
  "2": "IMAGE",
  "SOLID": 0,
  "GRADIENT": 1,
  "IMAGE": 2
};
exports["StackMode"] = {
  "0": "NONE",
  "1": "HORIZONTAL",
  "2": "VERTICAL",
  "3": "GRID",
  "NONE": 0,
  "HORIZONTAL": 1,
  "VERTICAL": 2,
  "GRID": 3
};
exports["StackAlign"] = {
  "0": "MIN",
  "1": "CENTER",
  "2": "MAX",
  "3": "BASELINE",
  "MIN": 0,
  "CENTER": 1,
  "MAX": 2,
  "BASELINE": 3
};
exports["StackCounterAlign"] = {
  "0": "MIN",
  "1": "CENTER",
  "2": "MAX",
  "3": "STRETCH",
  "4": "AUTO",
  "5": "BASELINE",
  "MIN": 0,
  "CENTER": 1,
  "MAX": 2,
  "STRETCH": 3,
  "AUTO": 4,
  "BASELINE": 5
};
exports["StackJustify"] = {
  "0": "MIN",
  "1": "CENTER",
  "2": "MAX",
  "3": "SPACE_EVENLY",
  "4": "SPACE_BETWEEN",
  "5": "SPACE_AROUND",
  "6": "SPACE_EVENLY_CSS",
  "MIN": 0,
  "CENTER": 1,
  "MAX": 2,
  "SPACE_EVENLY": 3,
  "SPACE_BETWEEN": 4,
  "SPACE_AROUND": 5,
  "SPACE_EVENLY_CSS": 6
};
exports["GridChildAlign"] = {
  "0": "AUTO",
  "1": "MIN",
  "2": "CENTER",
  "3": "MAX",
  "AUTO": 0,
  "MIN": 1,
  "CENTER": 2,
  "MAX": 3
};
exports["GridAutoTracks"] = {
  "0": "NONE",
  "1": "ROWS",
  "NONE": 0,
  "ROWS": 1
};
exports["StackSize"] = {
  "0": "FIXED",
  "1": "RESIZE_TO_FIT",
  "2": "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE",
  "FIXED": 0,
  "RESIZE_TO_FIT": 1,
  "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE": 2
};
exports["StackPositioning"] = {
  "0": "AUTO",
  "1": "ABSOLUTE",
  "AUTO": 0,
  "ABSOLUTE": 1
};
exports["StackWrap"] = {
  "0": "NO_WRAP",
  "1": "WRAP",
  "NO_WRAP": 0,
  "WRAP": 1
};
exports["StackCounterAlignContent"] = {
  "0": "AUTO",
  "1": "SPACE_BETWEEN",
  "AUTO": 0,
  "SPACE_BETWEEN": 1
};
exports["ConnectionType"] = {
  "0": "NONE",
  "1": "INTERNAL_NODE",
  "2": "URL",
  "3": "BACK",
  "4": "CLOSE",
  "5": "SET_VARIABLE",
  "6": "UPDATE_MEDIA_RUNTIME",
  "7": "CONDITIONAL",
  "8": "SET_VARIABLE_MODE",
  "9": "OBJECT_ANIMATION",
  "10": "UPDATE_ANIMATION_TIMELINE_STATE",
  "NONE": 0,
  "INTERNAL_NODE": 1,
  "URL": 2,
  "BACK": 3,
  "CLOSE": 4,
  "SET_VARIABLE": 5,
  "UPDATE_MEDIA_RUNTIME": 6,
  "CONDITIONAL": 7,
  "SET_VARIABLE_MODE": 8,
  "OBJECT_ANIMATION": 9,
  "UPDATE_ANIMATION_TIMELINE_STATE": 10
};
exports["InteractionType"] = {
  "0": "ON_CLICK",
  "1": "AFTER_TIMEOUT",
  "2": "MOUSE_IN",
  "3": "MOUSE_OUT",
  "4": "ON_HOVER",
  "5": "MOUSE_DOWN",
  "6": "MOUSE_UP",
  "7": "ON_PRESS",
  "8": "NONE",
  "9": "DRAG",
  "10": "ON_KEY_DOWN",
  "11": "ON_VOICE",
  "12": "ON_MEDIA_HIT",
  "13": "ON_MEDIA_END",
  "14": "MOUSE_ENTER",
  "15": "MOUSE_LEAVE",
  "ON_CLICK": 0,
  "AFTER_TIMEOUT": 1,
  "MOUSE_IN": 2,
  "MOUSE_OUT": 3,
  "ON_HOVER": 4,
  "MOUSE_DOWN": 5,
  "MOUSE_UP": 6,
  "ON_PRESS": 7,
  "NONE": 8,
  "DRAG": 9,
  "ON_KEY_DOWN": 10,
  "ON_VOICE": 11,
  "ON_MEDIA_HIT": 12,
  "ON_MEDIA_END": 13,
  "MOUSE_ENTER": 14,
  "MOUSE_LEAVE": 15
};
exports["TransitionType"] = {
  "0": "INSTANT_TRANSITION",
  "1": "DISSOLVE",
  "2": "FADE",
  "3": "SLIDE_FROM_LEFT",
  "4": "SLIDE_FROM_RIGHT",
  "5": "SLIDE_FROM_TOP",
  "6": "SLIDE_FROM_BOTTOM",
  "7": "PUSH_FROM_LEFT",
  "8": "PUSH_FROM_RIGHT",
  "9": "PUSH_FROM_TOP",
  "10": "PUSH_FROM_BOTTOM",
  "11": "MOVE_FROM_LEFT",
  "12": "MOVE_FROM_RIGHT",
  "13": "MOVE_FROM_TOP",
  "14": "MOVE_FROM_BOTTOM",
  "15": "SLIDE_OUT_TO_LEFT",
  "16": "SLIDE_OUT_TO_RIGHT",
  "17": "SLIDE_OUT_TO_TOP",
  "18": "SLIDE_OUT_TO_BOTTOM",
  "19": "MOVE_OUT_TO_LEFT",
  "20": "MOVE_OUT_TO_RIGHT",
  "21": "MOVE_OUT_TO_TOP",
  "22": "MOVE_OUT_TO_BOTTOM",
  "23": "MAGIC_MOVE",
  "24": "SMART_ANIMATE",
  "25": "SCROLL_ANIMATE",
  "INSTANT_TRANSITION": 0,
  "DISSOLVE": 1,
  "FADE": 2,
  "SLIDE_FROM_LEFT": 3,
  "SLIDE_FROM_RIGHT": 4,
  "SLIDE_FROM_TOP": 5,
  "SLIDE_FROM_BOTTOM": 6,
  "PUSH_FROM_LEFT": 7,
  "PUSH_FROM_RIGHT": 8,
  "PUSH_FROM_TOP": 9,
  "PUSH_FROM_BOTTOM": 10,
  "MOVE_FROM_LEFT": 11,
  "MOVE_FROM_RIGHT": 12,
  "MOVE_FROM_TOP": 13,
  "MOVE_FROM_BOTTOM": 14,
  "SLIDE_OUT_TO_LEFT": 15,
  "SLIDE_OUT_TO_RIGHT": 16,
  "SLIDE_OUT_TO_TOP": 17,
  "SLIDE_OUT_TO_BOTTOM": 18,
  "MOVE_OUT_TO_LEFT": 19,
  "MOVE_OUT_TO_RIGHT": 20,
  "MOVE_OUT_TO_TOP": 21,
  "MOVE_OUT_TO_BOTTOM": 22,
  "MAGIC_MOVE": 23,
  "SMART_ANIMATE": 24,
  "SCROLL_ANIMATE": 25
};
exports["EasingType"] = {
  "0": "IN_CUBIC",
  "1": "OUT_CUBIC",
  "2": "INOUT_CUBIC",
  "3": "LINEAR",
  "4": "IN_BACK_CUBIC",
  "5": "OUT_BACK_CUBIC",
  "6": "INOUT_BACK_CUBIC",
  "7": "CUSTOM_CUBIC",
  "8": "SPRING",
  "9": "GENTLE_SPRING",
  "10": "CUSTOM_SPRING",
  "11": "SPRING_PRESET_ONE",
  "12": "SPRING_PRESET_TWO",
  "13": "SPRING_PRESET_THREE",
  "14": "HOLD",
  "15": "EASE_IN",
  "IN_CUBIC": 0,
  "OUT_CUBIC": 1,
  "INOUT_CUBIC": 2,
  "LINEAR": 3,
  "IN_BACK_CUBIC": 4,
  "OUT_BACK_CUBIC": 5,
  "INOUT_BACK_CUBIC": 6,
  "CUSTOM_CUBIC": 7,
  "SPRING": 8,
  "GENTLE_SPRING": 9,
  "CUSTOM_SPRING": 10,
  "SPRING_PRESET_ONE": 11,
  "SPRING_PRESET_TWO": 12,
  "SPRING_PRESET_THREE": 13,
  "HOLD": 14,
  "EASE_IN": 15
};
exports["ScrollDirection"] = {
  "0": "NONE",
  "1": "HORIZONTAL",
  "2": "VERTICAL",
  "3": "BOTH",
  "NONE": 0,
  "HORIZONTAL": 1,
  "VERTICAL": 2,
  "BOTH": 3
};
exports["ScrollContractedState"] = {
  "0": "EXPANDED",
  "1": "CONTRACTED",
  "EXPANDED": 0,
  "CONTRACTED": 1
};

exports["decodeGUID"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["sessionID"] = bb.readVarUint();
  result["localID"] = bb.readVarUint();
  return result;
};

exports["encodeGUID"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"sessionID\"");
  }

  var value = message["localID"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"localID\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["r"] = bb.readVarFloat();
  result["g"] = bb.readVarFloat();
  result["b"] = bb.readVarFloat();
  result["a"] = bb.readVarFloat();
  return result;
};

exports["encodeColor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["r"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"r\"");
  }

  var value = message["g"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"g\"");
  }

  var value = message["b"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"b\"");
  }

  var value = message["a"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"a\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVector"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["x"] = bb.readVarFloat();
  result["y"] = bb.readVarFloat();
  return result;
};

exports["encodeVector"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["x"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"x\"");
  }

  var value = message["y"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"y\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRect"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["x"] = bb.readVarFloat();
  result["y"] = bb.readVarFloat();
  result["w"] = bb.readVarFloat();
  result["h"] = bb.readVarFloat();
  return result;
};

exports["encodeRect"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["x"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"x\"");
  }

  var value = message["y"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"y\"");
  }

  var value = message["w"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"w\"");
  }

  var value = message["h"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"h\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorStop"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["color"] = this["decodeColor"](bb);
  result["position"] = bb.readVarFloat();
  return result;
};

exports["encodeColorStop"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["color"];
  if (value != null) {
    this["encodeColor"](value, bb);
  } else {
    throw new Error("Missing required field \"color\"");
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"position\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorStopVar"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["color"] = this["decodeColor"](bb);
        break;

      case 2:
        result["colorVar"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["position"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeColorStopVar"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeColor"](value, bb);
  }

  var value = message["colorVar"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ColorSpace"] = {
  "0": "DEFAULT",
  "1": "SRGB",
  "2": "DISPLAY_P3",
  "3": "HSL",
  "4": "HSB",
  "5": "OKLAB",
  "6": "OKLCH",
  "DEFAULT": 0,
  "SRGB": 1,
  "DISPLAY_P3": 2,
  "HSL": 3,
  "HSB": 4,
  "OKLAB": 5,
  "OKLCH": 6
};

exports["decodeAuthoredColor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["space"] = this["ColorSpace"][bb.readVarUint()];
        break;

      case 2:
        result["c0"] = bb.readVarFloat();
        break;

      case 3:
        result["c1"] = bb.readVarFloat();
        break;

      case 4:
        result["c2"] = bb.readVarFloat();
        break;

      case 5:
        result["c3"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAuthoredColor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["space"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ColorSpace"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ColorSpace\""); bb.writeVarUint(encoded);
  }

  var value = message["c0"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["c1"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["c2"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["c3"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAuthoredColorStop"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["authoredColor"] = this["decodeAuthoredColor"](bb);
        break;

      case 2:
        result["position"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAuthoredColorStop"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["authoredColor"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeAuthoredColor"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMatrix"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["m00"] = bb.readVarFloat();
  result["m01"] = bb.readVarFloat();
  result["m02"] = bb.readVarFloat();
  result["m10"] = bb.readVarFloat();
  result["m11"] = bb.readVarFloat();
  result["m12"] = bb.readVarFloat();
  return result;
};

exports["encodeMatrix"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["m00"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m00\"");
  }

  var value = message["m01"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m01\"");
  }

  var value = message["m02"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m02\"");
  }

  var value = message["m10"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m10\"");
  }

  var value = message["m11"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m11\"");
  }

  var value = message["m12"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m12\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeParentIndex"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["guid"] = this["decodeGUID"](bb);
  result["position"] = bb.readString();
  return result;
};

exports["encodeParentIndex"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"guid\"");
  }

  var value = message["position"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"position\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNumber"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["value"] = bb.readVarFloat();
  result["units"] = this["NumberUnits"][bb.readVarUint()];
  return result;
};

exports["encodeNumber"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"value\"");
  }

  var value = message["units"];
  if (value != null) {
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  } else {
    throw new Error("Missing required field \"units\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFontName"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["family"] = bb.readString();
  result["style"] = bb.readString();
  result["postscript"] = bb.readString();
  return result;
};

exports["encodeFontName"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["family"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"family\"");
  }

  var value = message["style"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"style\"");
  }

  var value = message["postscript"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"postscript\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};
exports["FontVariantNumericFigure"] = {
  "0": "NORMAL",
  "1": "LINING",
  "2": "OLDSTYLE",
  "NORMAL": 0,
  "LINING": 1,
  "OLDSTYLE": 2
};
exports["FontVariantNumericSpacing"] = {
  "0": "NORMAL",
  "1": "PROPORTIONAL",
  "2": "TABULAR",
  "NORMAL": 0,
  "PROPORTIONAL": 1,
  "TABULAR": 2
};
exports["FontVariantNumericFraction"] = {
  "0": "NORMAL",
  "1": "DIAGONAL",
  "2": "STACKED",
  "NORMAL": 0,
  "DIAGONAL": 1,
  "STACKED": 2
};
exports["FontVariantCaps"] = {
  "0": "NORMAL",
  "1": "SMALL",
  "2": "ALL_SMALL",
  "3": "PETITE",
  "4": "ALL_PETITE",
  "5": "UNICASE",
  "6": "TITLING",
  "NORMAL": 0,
  "SMALL": 1,
  "ALL_SMALL": 2,
  "PETITE": 3,
  "ALL_PETITE": 4,
  "UNICASE": 5,
  "TITLING": 6
};
exports["FontVariantPosition"] = {
  "0": "NORMAL",
  "1": "SUB",
  "2": "SUPER",
  "NORMAL": 0,
  "SUB": 1,
  "SUPER": 2
};
exports["FontStyle"] = {
  "0": "NORMAL",
  "1": "ITALIC",
  "NORMAL": 0,
  "ITALIC": 1
};
exports["SemanticWeight"] = {
  "0": "NORMAL",
  "1": "BOLD",
  "NORMAL": 0,
  "BOLD": 1
};
exports["SemanticItalic"] = {
  "0": "NORMAL",
  "1": "ITALIC",
  "NORMAL": 0,
  "ITALIC": 1
};
exports["CodeSnapshotState"] = {
  "0": "INITIAL",
  "1": "SNAPSHOTTING",
  "2": "OK",
  "3": "SNAPSHOT_ERROR",
  "4": "LLM_IN_PROGRESS",
  "INITIAL": 0,
  "SNAPSHOTTING": 1,
  "OK": 2,
  "SNAPSHOT_ERROR": 3,
  "LLM_IN_PROGRESS": 4
};
exports["CachedPreviewStatus"] = {
  "0": "UNKNOWN",
  "1": "PENDING",
  "2": "COMPLETE",
  "3": "FAILED",
  "4": "ERROR",
  "UNKNOWN": 0,
  "PENDING": 1,
  "COMPLETE": 2,
  "FAILED": 3,
  "ERROR": 4
};
exports["SnapshotCaptureMode"] = {
  "0": "FULL",
  "1": "PARTIAL",
  "FULL": 0,
  "PARTIAL": 1
};

exports["decodeCodeSourceInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["originReferenceId"] = bb.readString();
        break;

      case 2:
        result["originNodeId"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["linkedSnapshotId"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["captureMode"] = this["SnapshotCaptureMode"][bb.readVarUint()];
        break;

      case 5:
        result["sourceBlobRef"] = bb.readString();
        break;

      case 6:
        result["sourceElementId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeSourceInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["originReferenceId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["originNodeId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["linkedSnapshotId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["captureMode"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["SnapshotCaptureMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SnapshotCaptureMode\""); bb.writeVarUint(encoded);
  }

  var value = message["sourceBlobRef"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["sourceElementId"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CodeObjectType"] = {
  "0": "WEB_LAYER",
  "1": "WEB_INTERACTION",
  "2": "NATIVE_LAYER",
  "3": "ANIMATION_PRESET",
  "4": "TOOL",
  "5": "CUSTOM_EFFECT",
  "6": "PLUGIN",
  "7": "WEB_LAYER_GENERIC",
  "8": "CUSTOM_FILL",
  "WEB_LAYER": 0,
  "WEB_INTERACTION": 1,
  "NATIVE_LAYER": 2,
  "ANIMATION_PRESET": 3,
  "TOOL": 4,
  "CUSTOM_EFFECT": 5,
  "PLUGIN": 6,
  "WEB_LAYER_GENERIC": 7,
  "CUSTOM_FILL": 8
};

exports["decodeCustomToolArtifactRef"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["customToolId"] = bb.readString();
        break;

      case 2:
        result["customToolVersion"] = bb.readString();
        break;

      case 3:
        result["publishedCustomToolId"] = bb.readString();
        break;

      case 4:
        result["publishedCustomToolVersionId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCustomToolArtifactRef"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["customToolId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["customToolVersion"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["publishedCustomToolId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["publishedCustomToolVersionId"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["LockMode"] = {
  "0": "NONE",
  "1": "ALL",
  "2": "BACKGROUND_ONLY",
  "NONE": 0,
  "ALL": 1,
  "BACKGROUND_ONLY": 2
};
exports["OpenTypeFeature"] = {
  "0": "PCAP",
  "1": "C2PC",
  "2": "CASE",
  "3": "CPSP",
  "4": "TITL",
  "5": "UNIC",
  "6": "ZERO",
  "7": "SINF",
  "8": "ORDN",
  "9": "AFRC",
  "10": "DNOM",
  "11": "NUMR",
  "12": "LIGA",
  "13": "CLIG",
  "14": "DLIG",
  "15": "HLIG",
  "16": "RLIG",
  "17": "AALT",
  "18": "CALT",
  "19": "RCLT",
  "20": "SALT",
  "21": "RVRN",
  "22": "VERT",
  "23": "SWSH",
  "24": "CSWH",
  "25": "NALT",
  "26": "CCMP",
  "27": "STCH",
  "28": "HIST",
  "29": "SIZE",
  "30": "ORNM",
  "31": "ITAL",
  "32": "RAND",
  "33": "DTLS",
  "34": "FLAC",
  "35": "MGRK",
  "36": "SSTY",
  "37": "KERN",
  "38": "FWID",
  "39": "HWID",
  "40": "HALT",
  "41": "TWID",
  "42": "QWID",
  "43": "PWID",
  "44": "JUST",
  "45": "LFBD",
  "46": "OPBD",
  "47": "RTBD",
  "48": "PALT",
  "49": "PKNA",
  "50": "LTRA",
  "51": "LTRM",
  "52": "RTLA",
  "53": "RTLM",
  "54": "ABRV",
  "55": "ABVM",
  "56": "ABVS",
  "57": "VALT",
  "58": "VHAL",
  "59": "BLWF",
  "60": "BLWM",
  "61": "BLWS",
  "62": "AKHN",
  "63": "CJCT",
  "64": "CFAR",
  "65": "CPCT",
  "66": "CURS",
  "67": "DIST",
  "68": "EXPT",
  "69": "FALT",
  "70": "FINA",
  "71": "FIN2",
  "72": "FIN3",
  "73": "HALF",
  "74": "HALN",
  "75": "HKNA",
  "76": "HNGL",
  "77": "HOJO",
  "78": "INIT",
  "79": "ISOL",
  "80": "JP78",
  "81": "JP83",
  "82": "JP90",
  "83": "JP04",
  "84": "LJMO",
  "85": "LOCL",
  "86": "MARK",
  "87": "MEDI",
  "88": "MED2",
  "89": "MKMK",
  "90": "NLCK",
  "91": "NUKT",
  "92": "PREF",
  "93": "PRES",
  "94": "VPAL",
  "95": "PSTF",
  "96": "PSTS",
  "97": "RKRF",
  "98": "RPHF",
  "99": "RUBY",
  "100": "SMPL",
  "101": "TJMO",
  "102": "TNAM",
  "103": "TRAD",
  "104": "VATU",
  "105": "VJMO",
  "106": "VKNA",
  "107": "VKRN",
  "108": "VRTR",
  "109": "VRT2",
  "110": "SS01",
  "111": "SS02",
  "112": "SS03",
  "113": "SS04",
  "114": "SS05",
  "115": "SS06",
  "116": "SS07",
  "117": "SS08",
  "118": "SS09",
  "119": "SS10",
  "120": "SS11",
  "121": "SS12",
  "122": "SS13",
  "123": "SS14",
  "124": "SS15",
  "125": "SS16",
  "126": "SS17",
  "127": "SS18",
  "128": "SS19",
  "129": "SS20",
  "130": "CV01",
  "131": "CV02",
  "132": "CV03",
  "133": "CV04",
  "134": "CV05",
  "135": "CV06",
  "136": "CV07",
  "137": "CV08",
  "138": "CV09",
  "139": "CV10",
  "140": "CV11",
  "141": "CV12",
  "142": "CV13",
  "143": "CV14",
  "144": "CV15",
  "145": "CV16",
  "146": "CV17",
  "147": "CV18",
  "148": "CV19",
  "149": "CV20",
  "150": "CV21",
  "151": "CV22",
  "152": "CV23",
  "153": "CV24",
  "154": "CV25",
  "155": "CV26",
  "156": "CV27",
  "157": "CV28",
  "158": "CV29",
  "159": "CV30",
  "160": "CV31",
  "161": "CV32",
  "162": "CV33",
  "163": "CV34",
  "164": "CV35",
  "165": "CV36",
  "166": "CV37",
  "167": "CV38",
  "168": "CV39",
  "169": "CV40",
  "170": "CV41",
  "171": "CV42",
  "172": "CV43",
  "173": "CV44",
  "174": "CV45",
  "175": "CV46",
  "176": "CV47",
  "177": "CV48",
  "178": "CV49",
  "179": "CV50",
  "180": "CV51",
  "181": "CV52",
  "182": "CV53",
  "183": "CV54",
  "184": "CV55",
  "185": "CV56",
  "186": "CV57",
  "187": "CV58",
  "188": "CV59",
  "189": "CV60",
  "190": "CV61",
  "191": "CV62",
  "192": "CV63",
  "193": "CV64",
  "194": "CV65",
  "195": "CV66",
  "196": "CV67",
  "197": "CV68",
  "198": "CV69",
  "199": "CV70",
  "200": "CV71",
  "201": "CV72",
  "202": "CV73",
  "203": "CV74",
  "204": "CV75",
  "205": "CV76",
  "206": "CV77",
  "207": "CV78",
  "208": "CV79",
  "209": "CV80",
  "210": "CV81",
  "211": "CV82",
  "212": "CV83",
  "213": "CV84",
  "214": "CV85",
  "215": "CV86",
  "216": "CV87",
  "217": "CV88",
  "218": "CV89",
  "219": "CV90",
  "220": "CV91",
  "221": "CV92",
  "222": "CV93",
  "223": "CV94",
  "224": "CV95",
  "225": "CV96",
  "226": "CV97",
  "227": "CV98",
  "228": "CV99",
  "PCAP": 0,
  "C2PC": 1,
  "CASE": 2,
  "CPSP": 3,
  "TITL": 4,
  "UNIC": 5,
  "ZERO": 6,
  "SINF": 7,
  "ORDN": 8,
  "AFRC": 9,
  "DNOM": 10,
  "NUMR": 11,
  "LIGA": 12,
  "CLIG": 13,
  "DLIG": 14,
  "HLIG": 15,
  "RLIG": 16,
  "AALT": 17,
  "CALT": 18,
  "RCLT": 19,
  "SALT": 20,
  "RVRN": 21,
  "VERT": 22,
  "SWSH": 23,
  "CSWH": 24,
  "NALT": 25,
  "CCMP": 26,
  "STCH": 27,
  "HIST": 28,
  "SIZE": 29,
  "ORNM": 30,
  "ITAL": 31,
  "RAND": 32,
  "DTLS": 33,
  "FLAC": 34,
  "MGRK": 35,
  "SSTY": 36,
  "KERN": 37,
  "FWID": 38,
  "HWID": 39,
  "HALT": 40,
  "TWID": 41,
  "QWID": 42,
  "PWID": 43,
  "JUST": 44,
  "LFBD": 45,
  "OPBD": 46,
  "RTBD": 47,
  "PALT": 48,
  "PKNA": 49,
  "LTRA": 50,
  "LTRM": 51,
  "RTLA": 52,
  "RTLM": 53,
  "ABRV": 54,
  "ABVM": 55,
  "ABVS": 56,
  "VALT": 57,
  "VHAL": 58,
  "BLWF": 59,
  "BLWM": 60,
  "BLWS": 61,
  "AKHN": 62,
  "CJCT": 63,
  "CFAR": 64,
  "CPCT": 65,
  "CURS": 66,
  "DIST": 67,
  "EXPT": 68,
  "FALT": 69,
  "FINA": 70,
  "FIN2": 71,
  "FIN3": 72,
  "HALF": 73,
  "HALN": 74,
  "HKNA": 75,
  "HNGL": 76,
  "HOJO": 77,
  "INIT": 78,
  "ISOL": 79,
  "JP78": 80,
  "JP83": 81,
  "JP90": 82,
  "JP04": 83,
  "LJMO": 84,
  "LOCL": 85,
  "MARK": 86,
  "MEDI": 87,
  "MED2": 88,
  "MKMK": 89,
  "NLCK": 90,
  "NUKT": 91,
  "PREF": 92,
  "PRES": 93,
  "VPAL": 94,
  "PSTF": 95,
  "PSTS": 96,
  "RKRF": 97,
  "RPHF": 98,
  "RUBY": 99,
  "SMPL": 100,
  "TJMO": 101,
  "TNAM": 102,
  "TRAD": 103,
  "VATU": 104,
  "VJMO": 105,
  "VKNA": 106,
  "VKRN": 107,
  "VRTR": 108,
  "VRT2": 109,
  "SS01": 110,
  "SS02": 111,
  "SS03": 112,
  "SS04": 113,
  "SS05": 114,
  "SS06": 115,
  "SS07": 116,
  "SS08": 117,
  "SS09": 118,
  "SS10": 119,
  "SS11": 120,
  "SS12": 121,
  "SS13": 122,
  "SS14": 123,
  "SS15": 124,
  "SS16": 125,
  "SS17": 126,
  "SS18": 127,
  "SS19": 128,
  "SS20": 129,
  "CV01": 130,
  "CV02": 131,
  "CV03": 132,
  "CV04": 133,
  "CV05": 134,
  "CV06": 135,
  "CV07": 136,
  "CV08": 137,
  "CV09": 138,
  "CV10": 139,
  "CV11": 140,
  "CV12": 141,
  "CV13": 142,
  "CV14": 143,
  "CV15": 144,
  "CV16": 145,
  "CV17": 146,
  "CV18": 147,
  "CV19": 148,
  "CV20": 149,
  "CV21": 150,
  "CV22": 151,
  "CV23": 152,
  "CV24": 153,
  "CV25": 154,
  "CV26": 155,
  "CV27": 156,
  "CV28": 157,
  "CV29": 158,
  "CV30": 159,
  "CV31": 160,
  "CV32": 161,
  "CV33": 162,
  "CV34": 163,
  "CV35": 164,
  "CV36": 165,
  "CV37": 166,
  "CV38": 167,
  "CV39": 168,
  "CV40": 169,
  "CV41": 170,
  "CV42": 171,
  "CV43": 172,
  "CV44": 173,
  "CV45": 174,
  "CV46": 175,
  "CV47": 176,
  "CV48": 177,
  "CV49": 178,
  "CV50": 179,
  "CV51": 180,
  "CV52": 181,
  "CV53": 182,
  "CV54": 183,
  "CV55": 184,
  "CV56": 185,
  "CV57": 186,
  "CV58": 187,
  "CV59": 188,
  "CV60": 189,
  "CV61": 190,
  "CV62": 191,
  "CV63": 192,
  "CV64": 193,
  "CV65": 194,
  "CV66": 195,
  "CV67": 196,
  "CV68": 197,
  "CV69": 198,
  "CV70": 199,
  "CV71": 200,
  "CV72": 201,
  "CV73": 202,
  "CV74": 203,
  "CV75": 204,
  "CV76": 205,
  "CV77": 206,
  "CV78": 207,
  "CV79": 208,
  "CV80": 209,
  "CV81": 210,
  "CV82": 211,
  "CV83": 212,
  "CV84": 213,
  "CV85": 214,
  "CV86": 215,
  "CV87": 216,
  "CV88": 217,
  "CV89": 218,
  "CV90": 219,
  "CV91": 220,
  "CV92": 221,
  "CV93": 222,
  "CV94": 223,
  "CV95": 224,
  "CV96": 225,
  "CV97": 226,
  "CV98": 227,
  "CV99": 228
};

exports["decodeExportConstraint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["type"] = this["ExportConstraintType"][bb.readVarUint()];
  result["value"] = bb.readVarFloat();
  return result;
};

exports["encodeExportConstraint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    var encoded = this["ExportConstraintType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ExportConstraintType\""); bb.writeVarUint(encoded);
  } else {
    throw new Error("Missing required field \"type\"");
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"value\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDMapping"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["from"] = this["decodeGUID"](bb);
  result["to"] = this["decodeGUID"](bb);
  return result;
};

exports["encodeGUIDMapping"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["from"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"from\"");
  }

  var value = message["to"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"to\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBlob"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["bytes"] = bb.readByteArray();
  return result;
};

exports["encodeBlob"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["bytes"];
  if (value != null) {
    bb.writeByteArray(value);
  } else {
    throw new Error("Missing required field \"bytes\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["hash"] = bb.readByteArray();
        break;

      case 2:
        result["name"] = bb.readString();
        break;

      case 3:
        result["dataBlob"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["hash"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByteArray(value);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["dataBlob"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVideo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["hash"] = bb.readByteArray();
        break;

      case 2:
        result["s3Url"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVideo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["hash"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByteArray(value);
  }

  var value = message["s3Url"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePasteSource"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["srcFile"] = bb.readString();
        break;

      case 2:
        result["srcNode"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePasteSource"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["srcFile"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["srcNode"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeWeaveConnection"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["workflowId"] = bb.readString();
        break;

      case 2:
        result["nodeId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWeaveConnection"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["workflowId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["nodeId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeWeaveLayerConnection"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["weaveVariableId"] = bb.readString();
        break;

      case 2:
        result["paintId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWeaveLayerConnection"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["weaveVariableId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["paintId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFilterColorAdjust"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["tint"] = bb.readVarFloat();
  result["shadows"] = bb.readVarFloat();
  result["highlights"] = bb.readVarFloat();
  result["detail"] = bb.readVarFloat();
  result["exposure"] = bb.readVarFloat();
  result["vignette"] = bb.readVarFloat();
  result["temperature"] = bb.readVarFloat();
  result["vibrance"] = bb.readVarFloat();
  return result;
};

exports["encodeFilterColorAdjust"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tint"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"tint\"");
  }

  var value = message["shadows"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"shadows\"");
  }

  var value = message["highlights"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"highlights\"");
  }

  var value = message["detail"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"detail\"");
  }

  var value = message["exposure"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"exposure\"");
  }

  var value = message["vignette"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"vignette\"");
  }

  var value = message["temperature"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"temperature\"");
  }

  var value = message["vibrance"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"vibrance\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePaintFilterMessage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["tint"] = bb.readVarFloat();
        break;

      case 2:
        result["shadows"] = bb.readVarFloat();
        break;

      case 3:
        result["highlights"] = bb.readVarFloat();
        break;

      case 4:
        result["detail"] = bb.readVarFloat();
        break;

      case 5:
        result["exposure"] = bb.readVarFloat();
        break;

      case 6:
        result["vignette"] = bb.readVarFloat();
        break;

      case 7:
        result["temperature"] = bb.readVarFloat();
        break;

      case 8:
        result["vibrance"] = bb.readVarFloat();
        break;

      case 9:
        result["contrast"] = bb.readVarFloat();
        break;

      case 10:
        result["brightness"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePaintFilterMessage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tint"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["shadows"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["highlights"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["detail"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["exposure"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["vignette"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["temperature"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["vibrance"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarFloat(value);
  }

  var value = message["contrast"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeVarFloat(value);
  }

  var value = message["brightness"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePaint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["PaintType"][bb.readVarUint()];
        break;

      case 2:
        result["color"] = this["decodeColor"](bb);
        break;

      case 3:
        result["opacity"] = bb.readVarFloat();
        break;

      case 4:
        result["visible"] = !!bb.readByte();
        break;

      case 5:
        result["blendMode"] = this["BlendMode"][bb.readVarUint()];
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["stops"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeColorStop"](bb);
        break;

      case 7:
        result["transform"] = this["decodeMatrix"](bb);
        break;

      case 8:
        result["image"] = this["decodeImage"](bb);
        break;

      case 9:
        result["imageThumbnail"] = this["decodeImage"](bb);
        break;

      case 16:
        result["animatedImage"] = this["decodeImage"](bb);
        break;

      case 17:
        result["animationFrame"] = bb.readVarUint();
        break;

      case 10:
        result["imageScaleMode"] = this["ImageScaleMode"][bb.readVarUint()];
        break;

      case 22:
        result["imageShouldColorManage"] = !!bb.readByte();
        break;

      case 11:
        result["rotation"] = bb.readVarFloat();
        break;

      case 12:
        result["scale"] = bb.readVarFloat();
        break;

      case 13:
        result["filterColorAdjust"] = this["decodeFilterColorAdjust"](bb);
        break;

      case 14:
        result["paintFilter"] = this["decodePaintFilterMessage"](bb);
        break;

      case 15:
        var length = bb.readVarUint();
        var values = result["emojiCodePoints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 18:
        result["video"] = this["decodeVideo"](bb);
        break;

      case 19:
        result["originalImageWidth"] = bb.readVarUint();
        break;

      case 20:
        result["originalImageHeight"] = bb.readVarUint();
        break;

      case 38:
        result["opacityVar"] = this["decodeVariableData"](bb);
        break;

      case 21:
        result["colorVar"] = this["decodeVariableData"](bb);
        break;

      case 31:
        result["imageVar"] = this["decodeVariableData"](bb);
        break;

      case 23:
        var length = bb.readVarUint();
        var values = result["stopsVar"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeColorStopVar"](bb);
        break;

      case 43:
        result["gradientVar"] = this["decodeVariableData"](bb);
        break;

      case 24:
        result["thumbHashBase64"] = bb.readString();
        break;

      case 25:
        result["thumbHash"] = bb.readByteArray();
        break;

      case 26:
        result["sourceNodeId"] = this["decodeGUID"](bb);
        break;

      case 27:
        result["spacing"] = bb.readVarFloat();
        break;

      case 37:
        result["patternSpacing"] = this["decodeVector"](bb);
        break;

      case 28:
        result["patternTileType"] = this["PatternTileType"][bb.readVarUint()];
        break;

      case 29:
        result["verticalAlignment"] = this["PatternAlignment"][bb.readVarUint()];
        break;

      case 30:
        result["horizontalAlignment"] = this["PatternAlignment"][bb.readVarUint()];
        break;

      case 32:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 33:
        result["altText"] = bb.readString();
        break;

      case 34:
        result["noiseType"] = this["NoiseType"][bb.readVarUint()];
        break;

      case 35:
        result["density"] = bb.readVarFloat();
        break;

      case 36:
        result["noiseSize"] = this["decodeVector"](bb);
        break;

      case 39:
        result["customEffectId"] = this["decodeCodeComponentId"](bb);
        break;

      case 40:
        var length = bb.readVarUint();
        var values = result["componentPropAssignments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropAssignment"](bb);
        break;

      case 41:
        result["interpolationColorSpace"] = this["InterpolationColorSpace"][bb.readVarUint()];
        break;

      case 42:
        result["interpolationHueMethod"] = this["InterpolationHueMethod"][bb.readVarUint()];
        break;

      case 44:
        result["authoredColor"] = this["decodeAuthoredColor"](bb);
        break;

      case 45:
        var length = bb.readVarUint();
        var values = result["authoredStops"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAuthoredColorStop"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePaint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PaintType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PaintType\""); bb.writeVarUint(encoded);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeColor"](value, bb);
  }

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["blendMode"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["BlendMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BlendMode\""); bb.writeVarUint(encoded);
  }

  var value = message["stops"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeColorStop"](value, bb);
    }
  }

  var value = message["transform"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeMatrix"](value, bb);
  }

  var value = message["image"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeImage"](value, bb);
  }

  var value = message["imageThumbnail"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeImage"](value, bb);
  }

  var value = message["animatedImage"];
  if (value != null) {
    bb.writeVarUint(16);
    this["encodeImage"](value, bb);
  }

  var value = message["animationFrame"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeVarUint(value);
  }

  var value = message["imageScaleMode"];
  if (value != null) {
    bb.writeVarUint(10);
    var encoded = this["ImageScaleMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ImageScaleMode\""); bb.writeVarUint(encoded);
  }

  var value = message["imageShouldColorManage"];
  if (value != null) {
    bb.writeVarUint(22);
    bb.writeByte(value);
  }

  var value = message["rotation"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeVarFloat(value);
  }

  var value = message["scale"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeVarFloat(value);
  }

  var value = message["filterColorAdjust"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeFilterColorAdjust"](value, bb);
  }

  var value = message["paintFilter"];
  if (value != null) {
    bb.writeVarUint(14);
    this["encodePaintFilterMessage"](value, bb);
  }

  var value = message["emojiCodePoints"];
  if (value != null) {
    bb.writeVarUint(15);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["video"];
  if (value != null) {
    bb.writeVarUint(18);
    this["encodeVideo"](value, bb);
  }

  var value = message["originalImageWidth"];
  if (value != null) {
    bb.writeVarUint(19);
    bb.writeVarUint(value);
  }

  var value = message["originalImageHeight"];
  if (value != null) {
    bb.writeVarUint(20);
    bb.writeVarUint(value);
  }

  var value = message["opacityVar"];
  if (value != null) {
    bb.writeVarUint(38);
    this["encodeVariableData"](value, bb);
  }

  var value = message["colorVar"];
  if (value != null) {
    bb.writeVarUint(21);
    this["encodeVariableData"](value, bb);
  }

  var value = message["imageVar"];
  if (value != null) {
    bb.writeVarUint(31);
    this["encodeVariableData"](value, bb);
  }

  var value = message["stopsVar"];
  if (value != null) {
    bb.writeVarUint(23);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeColorStopVar"](value, bb);
    }
  }

  var value = message["gradientVar"];
  if (value != null) {
    bb.writeVarUint(43);
    this["encodeVariableData"](value, bb);
  }

  var value = message["thumbHashBase64"];
  if (value != null) {
    bb.writeVarUint(24);
    bb.writeString(value);
  }

  var value = message["thumbHash"];
  if (value != null) {
    bb.writeVarUint(25);
    bb.writeByteArray(value);
  }

  var value = message["sourceNodeId"];
  if (value != null) {
    bb.writeVarUint(26);
    this["encodeGUID"](value, bb);
  }

  var value = message["spacing"];
  if (value != null) {
    bb.writeVarUint(27);
    bb.writeVarFloat(value);
  }

  var value = message["patternSpacing"];
  if (value != null) {
    bb.writeVarUint(37);
    this["encodeVector"](value, bb);
  }

  var value = message["patternTileType"];
  if (value != null) {
    bb.writeVarUint(28);
    var encoded = this["PatternTileType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PatternTileType\""); bb.writeVarUint(encoded);
  }

  var value = message["verticalAlignment"];
  if (value != null) {
    bb.writeVarUint(29);
    var encoded = this["PatternAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PatternAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["horizontalAlignment"];
  if (value != null) {
    bb.writeVarUint(30);
    var encoded = this["PatternAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PatternAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(32);
    this["encodeGUID"](value, bb);
  }

  var value = message["altText"];
  if (value != null) {
    bb.writeVarUint(33);
    bb.writeString(value);
  }

  var value = message["noiseType"];
  if (value != null) {
    bb.writeVarUint(34);
    var encoded = this["NoiseType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NoiseType\""); bb.writeVarUint(encoded);
  }

  var value = message["density"];
  if (value != null) {
    bb.writeVarUint(35);
    bb.writeVarFloat(value);
  }

  var value = message["noiseSize"];
  if (value != null) {
    bb.writeVarUint(36);
    this["encodeVector"](value, bb);
  }

  var value = message["customEffectId"];
  if (value != null) {
    bb.writeVarUint(39);
    this["encodeCodeComponentId"](value, bb);
  }

  var value = message["componentPropAssignments"];
  if (value != null) {
    bb.writeVarUint(40);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropAssignment"](value, bb);
    }
  }

  var value = message["interpolationColorSpace"];
  if (value != null) {
    bb.writeVarUint(41);
    var encoded = this["InterpolationColorSpace"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationColorSpace\""); bb.writeVarUint(encoded);
  }

  var value = message["interpolationHueMethod"];
  if (value != null) {
    bb.writeVarUint(42);
    var encoded = this["InterpolationHueMethod"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationHueMethod\""); bb.writeVarUint(encoded);
  }

  var value = message["authoredColor"];
  if (value != null) {
    bb.writeVarUint(44);
    this["encodeAuthoredColor"](value, bb);
  }

  var value = message["authoredStops"];
  if (value != null) {
    bb.writeVarUint(45);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAuthoredColorStop"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["InterpolationColorSpace"] = {
  "0": "DEFAULT",
  "1": "OKLAB",
  "2": "OKLCH",
  "3": "HSL",
  "4": "SRGB_LINEAR",
  "DEFAULT": 0,
  "OKLAB": 1,
  "OKLCH": 2,
  "HSL": 3,
  "SRGB_LINEAR": 4
};
exports["InterpolationHueMethod"] = {
  "0": "SHORTER",
  "1": "LONGER",
  "2": "INCREASING",
  "3": "DECREASING",
  "SHORTER": 0,
  "LONGER": 1,
  "INCREASING": 2,
  "DECREASING": 3
};
exports["NoiseType"] = {
  "0": "MULTITONE",
  "1": "MONOTONE",
  "2": "DUOTONE",
  "MULTITONE": 0,
  "MONOTONE": 1,
  "DUOTONE": 2
};
exports["PatternTileType"] = {
  "0": "RECTANGULAR",
  "1": "HORIZONTAL_HEXAGONAL",
  "2": "VERTICAL_HEXAGONAL",
  "RECTANGULAR": 0,
  "HORIZONTAL_HEXAGONAL": 1,
  "VERTICAL_HEXAGONAL": 2
};
exports["PatternAlignment"] = {
  "0": "START",
  "1": "CENTER",
  "2": "END",
  "START": 0,
  "CENTER": 1,
  "END": 2
};

exports["decodeFontMetaData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = this["decodeFontName"](bb);
        break;

      case 2:
        result["fontLineHeight"] = bb.readVarFloat();
        break;

      case 3:
        result["fontDigest"] = bb.readByteArray();
        break;

      case 4:
        result["fontStyle"] = this["FontStyle"][bb.readVarUint()];
        break;

      case 5:
        result["fontWeight"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFontMetaData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeFontName"](value, bb);
  }

  var value = message["fontLineHeight"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["fontDigest"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByteArray(value);
  }

  var value = message["fontStyle"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["FontStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["fontWeight"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFontVariation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["axisTag"] = bb.readVarUint();
        break;

      case 2:
        result["axisName"] = bb.readString();
        break;

      case 3:
        result["value"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFontVariation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["axisTag"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["axisName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTextData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["characters"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["characterStyleIDs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["styleOverrideTable"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 12:
        var length = bb.readVarUint();
        var values = result["lines"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTextLineData"](bb);
        break;

      case 8:
        result["layoutVersion"] = bb.readVarUint();
        break;

      case 10:
        var length = bb.readVarUint();
        var values = result["fallbackFonts"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFontName"](bb);
        break;

      case 17:
        result["minContentHeight"] = bb.readVarFloat();
        break;

      case 4:
        result["layoutSize"] = this["decodeVector"](bb);
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["baselines"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBaseline"](bb);
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["glyphs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGlyph"](bb);
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["decorations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDecoration"](bb);
        break;

      case 16:
        var length = bb.readVarUint();
        var values = result["blockquotes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBlockquote"](bb);
        break;

      case 9:
        var length = bb.readVarUint();
        var values = result["fontMetaData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFontMetaData"](bb);
        break;

      case 11:
        var length = bb.readVarUint();
        var values = result["hyperlinkBoxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeHyperlinkBox"](bb);
        break;

      case 13:
        result["truncationStartIndex"] = bb.readVarInt();
        break;

      case 14:
        result["truncatedHeight"] = bb.readVarFloat();
        break;

      case 15:
        var length = bb.readVarUint();
        var values = result["logicalIndexToCharacterOffsetMap"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 18:
        var length = bb.readVarUint();
        var values = result["mentionBoxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMentionBox"](bb);
        break;

      case 19:
        var length = bb.readVarUint();
        var values = result["derivedLines"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDerivedTextLineData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["characters"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["characterStyleIDs"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["styleOverrideTable"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["lines"];
  if (value != null) {
    bb.writeVarUint(12);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTextLineData"](value, bb);
    }
  }

  var value = message["layoutVersion"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarUint(value);
  }

  var value = message["fallbackFonts"];
  if (value != null) {
    bb.writeVarUint(10);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFontName"](value, bb);
    }
  }

  var value = message["minContentHeight"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeVarFloat(value);
  }

  var value = message["layoutSize"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVector"](value, bb);
  }

  var value = message["baselines"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBaseline"](value, bb);
    }
  }

  var value = message["glyphs"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGlyph"](value, bb);
    }
  }

  var value = message["decorations"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDecoration"](value, bb);
    }
  }

  var value = message["blockquotes"];
  if (value != null) {
    bb.writeVarUint(16);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBlockquote"](value, bb);
    }
  }

  var value = message["fontMetaData"];
  if (value != null) {
    bb.writeVarUint(9);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFontMetaData"](value, bb);
    }
  }

  var value = message["hyperlinkBoxes"];
  if (value != null) {
    bb.writeVarUint(11);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeHyperlinkBox"](value, bb);
    }
  }

  var value = message["truncationStartIndex"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeVarInt(value);
  }

  var value = message["truncatedHeight"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeVarFloat(value);
  }

  var value = message["logicalIndexToCharacterOffsetMap"];
  if (value != null) {
    bb.writeVarUint(15);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["mentionBoxes"];
  if (value != null) {
    bb.writeVarUint(18);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMentionBox"](value, bb);
    }
  }

  var value = message["derivedLines"];
  if (value != null) {
    bb.writeVarUint(19);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDerivedTextLineData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDerivedTextData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["layoutSize"] = this["decodeVector"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["baselines"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBaseline"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["glyphs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGlyph"](bb);
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["decorations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDecoration"](bb);
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["blockquotes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBlockquote"](bb);
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["fontMetaData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFontMetaData"](bb);
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["hyperlinkBoxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeHyperlinkBox"](bb);
        break;

      case 8:
        result["truncationStartIndex"] = bb.readVarInt();
        break;

      case 9:
        result["truncatedHeight"] = bb.readVarFloat();
        break;

      case 10:
        var length = bb.readVarUint();
        var values = result["logicalIndexToCharacterOffsetMap"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 11:
        var length = bb.readVarUint();
        var values = result["mentionBoxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMentionBox"](bb);
        break;

      case 12:
        var length = bb.readVarUint();
        var values = result["derivedLines"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDerivedTextLineData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDerivedTextData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["layoutSize"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["baselines"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBaseline"](value, bb);
    }
  }

  var value = message["glyphs"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGlyph"](value, bb);
    }
  }

  var value = message["decorations"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDecoration"](value, bb);
    }
  }

  var value = message["blockquotes"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBlockquote"](value, bb);
    }
  }

  var value = message["fontMetaData"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFontMetaData"](value, bb);
    }
  }

  var value = message["hyperlinkBoxes"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeHyperlinkBox"](value, bb);
    }
  }

  var value = message["truncationStartIndex"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarInt(value);
  }

  var value = message["truncatedHeight"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeVarFloat(value);
  }

  var value = message["logicalIndexToCharacterOffsetMap"];
  if (value != null) {
    bb.writeVarUint(10);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["mentionBoxes"];
  if (value != null) {
    bb.writeVarUint(11);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMentionBox"](value, bb);
    }
  }

  var value = message["derivedLines"];
  if (value != null) {
    bb.writeVarUint(12);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDerivedTextLineData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHyperlinkBox"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["bounds"] = this["decodeRect"](bb);
        break;

      case 2:
        result["url"] = bb.readString();
        break;

      case 3:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["cmsTarget"] = this["decodeCMSItemPageTarget"](bb);
        break;

      case 6:
        result["openInNewTab"] = !!bb.readByte();
        break;

      case 4:
        result["hyperlinkID"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHyperlinkBox"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["bounds"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeRect"](value, bb);
  }

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["cmsTarget"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeCMSItemPageTarget"](value, bb);
  }

  var value = message["openInNewTab"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["hyperlinkID"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMentionBox"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["bounds"] = this["decodeRect"](bb);
        break;

      case 2:
        result["startIndex"] = bb.readVarUint();
        break;

      case 3:
        result["endIndex"] = bb.readVarUint();
        break;

      case 4:
        result["isValid"] = !!bb.readByte();
        break;

      case 5:
        result["mentionKey"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMentionBox"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["bounds"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeRect"](value, bb);
  }

  var value = message["startIndex"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["endIndex"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["isValid"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["mentionKey"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBaseline"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["position"] = this["decodeVector"](bb);
        break;

      case 2:
        result["width"] = bb.readVarFloat();
        break;

      case 3:
        result["lineY"] = bb.readVarFloat();
        break;

      case 4:
        result["lineHeight"] = bb.readVarFloat();
        break;

      case 7:
        result["lineAscent"] = bb.readVarFloat();
        break;

      case 8:
        result["ignoreLeadingTrim"] = bb.readVarFloat();
        break;

      case 5:
        result["firstCharacter"] = bb.readVarUint();
        break;

      case 6:
        result["endCharacter"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBaseline"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["width"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["lineY"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["lineHeight"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["lineAscent"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["ignoreLeadingTrim"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarFloat(value);
  }

  var value = message["firstCharacter"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["endCharacter"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGlyph"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["commandsBlob"] = bb.readVarUint();
        break;

      case 2:
        result["position"] = this["decodeVector"](bb);
        break;

      case 3:
        result["styleID"] = bb.readVarUint();
        break;

      case 4:
        result["fontSize"] = bb.readVarFloat();
        break;

      case 5:
        result["firstCharacter"] = bb.readVarUint();
        break;

      case 6:
        result["advance"] = bb.readVarFloat();
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["emojiCodePoints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 8:
        result["emojiImageSet"] = this["EmojiImageSet"][bb.readVarUint()];
        break;

      case 9:
        result["rotation"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGlyph"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["commandsBlob"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["styleID"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["fontSize"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["firstCharacter"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["advance"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["emojiCodePoints"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["emojiImageSet"];
  if (value != null) {
    bb.writeVarUint(8);
    var encoded = this["EmojiImageSet"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EmojiImageSet\""); bb.writeVarUint(encoded);
  }

  var value = message["rotation"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDecoration"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["rects"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeRect"](bb);
        break;

      case 2:
        result["styleID"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDecoration"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["rects"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeRect"](value, bb);
    }
  }

  var value = message["styleID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBlockquote"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["verticalBar"] = this["decodeRect"](bb);
        break;

      case 2:
        result["quoteMarkBounds"] = this["decodeRect"](bb);
        break;

      case 3:
        result["styleID"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBlockquote"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["verticalBar"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeRect"](value, bb);
  }

  var value = message["quoteMarkBounds"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeRect"](value, bb);
  }

  var value = message["styleID"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVectorData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["vectorNetworkBlob"] = bb.readVarUint();
        break;

      case 2:
        result["normalizedSize"] = this["decodeVector"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["styleOverrideTable"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVectorData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["vectorNetworkBlob"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["normalizedSize"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["styleOverrideTable"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTextPathStart"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["tValue"] = bb.readVarFloat();
        break;

      case 2:
        result["forward"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextPathStart"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["forward"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDPath"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["guids"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDPath"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guids"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSymbolData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["symbolID"] = this["decodeGUID"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["symbolOverrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 3:
        result["uniformScaleFactor"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSymbolData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["symbolID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["symbolOverrides"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["uniformScaleFactor"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDPathMapping"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["path"] = this["decodeGUIDPath"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDPathMapping"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["path"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUIDPath"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDerivedBreakpointData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDerivedBreakpointData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeGenerationData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 2:
        result["useFineGrainedSyncing"] = !!bb.readByte();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["diffOnlyRemovals"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeGenerationData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["useFineGrainedSyncing"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["diffOnlyRemovals"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDerivedImmutableFrameData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 2:
        result["version"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDerivedImmutableFrameData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeJsxData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeJsxData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDerivedJsxData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDerivedJsxData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAssetIdMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAssetIdEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAssetIdMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAssetIdEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAssetIdEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["assetKey"] = bb.readString();
        break;

      case 2:
        result["assetId"] = this["decodeAssetId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAssetIdEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["assetKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["assetId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAssetRef"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["version"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAssetRef"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAssetId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      case 3:
        result["stateGroupId"] = this["decodeStateGroupId"](bb);
        break;

      case 4:
        result["styleId"] = this["decodeStyleId"](bb);
        break;

      case 5:
        result["symbolId"] = this["decodeSymbolId"](bb);
        break;

      case 6:
        result["variableId"] = this["decodeVariableID"](bb);
        break;

      case 7:
        result["variableSetId"] = this["decodeVariableSetID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAssetId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }

  var value = message["stateGroupId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeStateGroupId"](value, bb);
  }

  var value = message["styleId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeStyleId"](value, bb);
  }

  var value = message["symbolId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeSymbolId"](value, bb);
  }

  var value = message["variableId"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeVariableID"](value, bb);
  }

  var value = message["variableSetId"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeVariableSetID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStateGroupId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStateGroupId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStyleId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStyleId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSymbolId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSymbolId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableID"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableID"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableOverrideId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableOverrideId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableSetID"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableSetID"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeModuleId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeModuleId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeResponsiveSetId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeResponsiveSetId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeWebpageId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWebpageId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeThemeID"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeThemeID"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeLibraryId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeLibraryId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeFileId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeFileId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeComponentId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeComponentId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCanvasNodeId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["symbolId"] = this["decodeSymbolId"](bb);
        break;

      case 3:
        result["stateGroupId"] = this["decodeStateGroupId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCanvasNodeId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["symbolId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeSymbolId"](value, bb);
  }

  var value = message["stateGroupId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeStateGroupId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexRange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["startIndex"] = bb.readVarUint();
  result["endIndexExclusive"] = bb.readVarUint();
  return result;
};

exports["encodeIndexRange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["startIndex"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"startIndex\"");
  }

  var value = message["endIndexExclusive"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"endIndexExclusive\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCollaborativeTextOpID"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["sessionID"] = bb.readVarUint();
  result["counterID"] = bb.readVarUint();
  return result;
};

exports["encodeCollaborativeTextOpID"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"sessionID\"");
  }

  var value = message["counterID"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"counterID\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};
exports["CollaborativeTextOpType"] = {
  "0": "INSERT",
  "1": "DELETE",
  "INSERT": 0,
  "DELETE": 1
};

exports["decodeCollaborativeTextStrippedOpRunWithIDs"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["firstId"] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 2:
        result["runLength"] = bb.readVarUint();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["parentIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["rebasedOnOpIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCollaborativeTextStrippedOpRunWithIDs"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["firstId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeCollaborativeTextOpID"](value, bb);
  }

  var value = message["runLength"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["parentIds"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }

  var value = message["rebasedOnOpIds"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCollaborativeTextStrippedOpRunWithLoc"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["CollaborativeTextOpType"][bb.readVarUint()];
        break;

      case 2:
        result["range"] = this["decodeIndexRange"](bb);
        break;

      case 3:
        result["rangeShouldBeIteratedInReverse"] = !!bb.readByte();
        break;

      case 4:
        result["contentBytesInBuffer"] = this["decodeIndexRange"](bb);
        break;

      case 5:
        result["rebasedRange"] = this["decodeIndexRange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCollaborativeTextStrippedOpRunWithLoc"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CollaborativeTextOpType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CollaborativeTextOpType\""); bb.writeVarUint(encoded);
  }

  var value = message["range"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeIndexRange"](value, bb);
  }

  var value = message["rangeShouldBeIteratedInReverse"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["contentBytesInBuffer"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeIndexRange"](value, bb);
  }

  var value = message["rebasedRange"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeIndexRange"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCollaborativeTextOpRun"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["parentIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 3:
        result["type"] = this["CollaborativeTextOpType"][bb.readVarUint()];
        break;

      case 4:
        result["range"] = this["decodeIndexRange"](bb);
        break;

      case 5:
        result["rangeShouldBeIteratedInReverse"] = !!bb.readByte();
        break;

      case 6:
        result["content"] = bb.readString();
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["rebasedOnOpIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 8:
        result["rebasedRange"] = this["decodeIndexRange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCollaborativeTextOpRun"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeCollaborativeTextOpID"](value, bb);
  }

  var value = message["parentIds"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["CollaborativeTextOpType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CollaborativeTextOpType\""); bb.writeVarUint(encoded);
  }

  var value = message["range"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeIndexRange"](value, bb);
  }

  var value = message["rangeShouldBeIteratedInReverse"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["content"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }

  var value = message["rebasedOnOpIds"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }

  var value = message["rebasedRange"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeIndexRange"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCollaborativePlainText"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["historyOpsWithIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextStrippedOpRunWithIDs"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["historyOpsWithLoc"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextStrippedOpRunWithLoc"](bb);
        break;

      case 3:
        result["historyStringContentBuffer"] = bb.readByteArray();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["changesToAppend"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpRun"](bb);
        break;

      case 5:
        result["snapshotText"] = bb.readString();
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["snapshotVersion"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCollaborativePlainText"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["historyOpsWithIds"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextStrippedOpRunWithIDs"](value, bb);
    }
  }

  var value = message["historyOpsWithLoc"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextStrippedOpRunWithLoc"](value, bb);
    }
  }

  var value = message["historyStringContentBuffer"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByteArray(value);
  }

  var value = message["changesToAppend"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpRun"](value, bb);
    }
  }

  var value = message["snapshotText"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["snapshotVersion"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCollaborativeTextSelection"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["node"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["field"] = bb.readVarUint();
        break;

      case 3:
        result["selectedRange"] = this["decodeIndexRange"](bb);
        break;

      case 4:
        result["caretAtFront"] = !!bb.readByte();
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["textVersion"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCollaborativeTextSelection"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["node"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["field"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["selectedRange"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeIndexRange"](value, bb);
  }

  var value = message["caretAtFront"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["textVersion"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeResponsiveTextStyleVariant"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["minWidth"] = bb.readVarFloat();
        break;

      case 2:
        result["fields"] = this["decodeNodeChange"](bb);
        break;

      case 3:
        result["variableFontSize"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["variableLineHeight"] = this["decodeVariableData"](bb);
        break;

      case 5:
        result["variableLetterSpacing"] = this["decodeVariableData"](bb);
        break;

      case 6:
        result["variableParagraphSpacing"] = this["decodeVariableData"](bb);
        break;

      case 7:
        result["name"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeResponsiveTextStyleVariant"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["minWidth"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["fields"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["variableFontSize"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["variableLineHeight"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }

  var value = message["variableLetterSpacing"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVariableData"](value, bb);
  }

  var value = message["variableParagraphSpacing"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeVariableData"](value, bb);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["FlappType"] = {
  "0": "POLL",
  "1": "EMBED",
  "2": "FACEPILE",
  "3": "ALIGNMENT",
  "4": "YOUTUBE",
  "POLL": 0,
  "EMBED": 1,
  "FACEPILE": 2,
  "ALIGNMENT": 3,
  "YOUTUBE": 4
};

exports["decodeSlideThemeProps"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["themeVersion"] = bb.readString();
        break;

      case 2:
        result["variableSetId"] = this["decodeVariableSetID"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["textStyleIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStyleId"](bb);
        break;

      case 4:
        result["isTextColorManuallySelected"] = !!bb.readByte();
        break;

      case 5:
        result["isBorderColorManuallySelected"] = !!bb.readByte();
        break;

      case 6:
        result["subscribedThemeRef"] = this["decodeAssetRef"](bb);
        break;

      case 7:
        result["schemaVersion"] = bb.readVarUint();
        break;

      case 8:
        result["isGeneratedFromDesign"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlideThemeProps"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["themeVersion"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["variableSetId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["textStyleIds"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStyleId"](value, bb);
    }
  }

  var value = message["isTextColorManuallySelected"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["isBorderColorManuallySelected"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["subscribedThemeRef"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeAssetRef"](value, bb);
  }

  var value = message["schemaVersion"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarUint(value);
  }

  var value = message["isGeneratedFromDesign"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSlideThemeMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeSlideThemeMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlideThemeMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeSlideThemeMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSlideThemeMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["themeId"] = this["decodeThemeID"](bb);
        break;

      case 2:
        result["themeProps"] = this["decodeSlideThemeProps"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlideThemeMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["themeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeThemeID"](value, bb);
  }

  var value = message["themeProps"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeSlideThemeProps"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSharedSymbolReference"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["fileKey"] = bb.readString();
        break;

      case 2:
        result["symbolID"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["versionHash"] = bb.readString();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["guidPathMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 5:
        result["bytes"] = bb.readByteArray();
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["libraryGUIDToSubscribingGUID"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDMapping"](bb);
        break;

      case 7:
        result["componentKey"] = bb.readString();
        break;

      case 8:
        var length = bb.readVarUint();
        var values = result["unflatteningMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 9:
        result["isUnflattened"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSharedSymbolReference"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["fileKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["symbolID"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["versionHash"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["guidPathMappings"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["bytes"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByteArray(value);
  }

  var value = message["libraryGUIDToSubscribingGUID"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDMapping"](value, bb);
    }
  }

  var value = message["componentKey"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeString(value);
  }

  var value = message["unflatteningMappings"];
  if (value != null) {
    bb.writeVarUint(8);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["isUnflattened"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSharedComponentMasterData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["componentKey"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["publishingGUIDPathToTeamLibraryGUID"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 3:
        result["isUnflattened"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSharedComponentMasterData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["componentKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["publishingGUIDPathToTeamLibraryGUID"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["isUnflattened"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInstanceOverrideStash"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["overridePathOfSwappedInstance"] = this["decodeGUIDPath"](bb);
        break;

      case 2:
        result["componentKey"] = bb.readString();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInstanceOverrideStash"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overridePathOfSwappedInstance"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["componentKey"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInstanceOverrideStashV2"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["overridePathOfSwappedInstance"] = this["decodeGUIDPath"](bb);
        break;

      case 2:
        result["localSymbolID"] = this["decodeGUID"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInstanceOverrideStashV2"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overridePathOfSwappedInstance"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["localSymbolID"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImportedCodeFileEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["codeFileId"] = this["decodeCodeFileId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImportedCodeFileEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["codeFileId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeCodeFileId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImportedCodeFiles"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeImportedCodeFileEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImportedCodeFiles"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeImportedCodeFileEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["BlurOpType"] = {
  "0": "NORMAL",
  "1": "PROGRESSIVE",
  "NORMAL": 0,
  "PROGRESSIVE": 1
};
exports["RepeatType"] = {
  "0": "LINEAR",
  "1": "RADIAL",
  "LINEAR": 0,
  "RADIAL": 1
};
exports["UnitType"] = {
  "0": "PIXELS",
  "1": "RELATIVE",
  "PIXELS": 0,
  "RELATIVE": 1
};
exports["RepeatOrder"] = {
  "0": "FORWARD",
  "1": "REVERSE",
  "FORWARD": 0,
  "REVERSE": 1
};
exports["EffectAxis"] = {
  "0": "X",
  "1": "Y",
  "2": "X_AND_Y",
  "X": 0,
  "Y": 1,
  "X_AND_Y": 2
};

exports["decodeEffect"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["EffectType"][bb.readVarUint()];
        break;

      case 3:
        result["offset"] = this["decodeVector"](bb);
        break;

      case 4:
        result["radius"] = bb.readVarFloat();
        break;

      case 5:
        result["visible"] = !!bb.readByte();
        break;

      case 6:
        result["blendMode"] = this["BlendMode"][bb.readVarUint()];
        break;

      case 7:
        result["spread"] = bb.readVarFloat();
        break;

      case 8:
        result["showShadowBehindNode"] = !!bb.readByte();
        break;

      case 9:
        result["radiusVar"] = this["decodeVariableData"](bb);
        break;

      case 10:
        result["colorVar"] = this["decodeVariableData"](bb);
        break;

      case 11:
        result["spreadVar"] = this["decodeVariableData"](bb);
        break;

      case 12:
        result["xVar"] = this["decodeVariableData"](bb);
        break;

      case 13:
        result["yVar"] = this["decodeVariableData"](bb);
        break;

      case 14:
        result["count"] = bb.readVarUint();
        break;

      case 15:
        result["repeatType"] = this["RepeatType"][bb.readVarUint()];
        break;

      case 16:
        result["axis"] = this["EffectAxis"][bb.readVarUint()];
        break;

      case 17:
        result["unitType"] = this["UnitType"][bb.readVarUint()];
        break;

      case 18:
        result["order"] = this["RepeatOrder"][bb.readVarUint()];
        break;

      case 19:
        result["blurOpType"] = this["BlurOpType"][bb.readVarUint()];
        break;

      case 20:
        result["startOffset"] = this["decodeVector"](bb);
        break;

      case 28:
        result["endOffset"] = this["decodeVector"](bb);
        break;

      case 21:
        result["startRadius"] = bb.readVarFloat();
        break;

      case 2:
        result["color"] = this["decodeColor"](bb);
        break;

      case 24:
        result["secondaryColor"] = this["decodeColor"](bb);
        break;

      case 56:
        result["authoredColor"] = this["decodeAuthoredColor"](bb);
        break;

      case 57:
        result["secondaryAuthoredColor"] = this["decodeAuthoredColor"](bb);
        break;

      case 22:
        result["noiseSize"] = this["decodeVector"](bb);
        break;

      case 29:
        result["seed"] = bb.readVarUint();
        break;

      case 23:
        result["clipToShape"] = !!bb.readByte();
        break;

      case 25:
        result["density"] = bb.readVarFloat();
        break;

      case 26:
        result["noiseType"] = this["NoiseType"][bb.readVarUint()];
        break;

      case 27:
        result["opacity"] = bb.readVarFloat();
        break;

      case 30:
        result["refractionRadius"] = bb.readVarFloat();
        break;

      case 31:
        result["specularAngle"] = bb.readVarFloat();
        break;

      case 32:
        result["specularIntensity"] = bb.readVarFloat();
        break;

      case 33:
        result["bevelSize"] = bb.readVarFloat();
        break;

      case 34:
        result["chromaticAberration"] = bb.readVarFloat();
        break;

      case 35:
        result["reflectionDistance"] = bb.readVarFloat();
        break;

      case 36:
        result["refractionIntensity"] = bb.readVarFloat();
        break;

      case 37:
        result["refractionRadiusVar"] = this["decodeVariableData"](bb);
        break;

      case 38:
        result["specularAngleVar"] = this["decodeVariableData"](bb);
        break;

      case 39:
        result["specularIntensityVar"] = this["decodeVariableData"](bb);
        break;

      case 40:
        result["chromaticAberrationVar"] = this["decodeVariableData"](bb);
        break;

      case 41:
        result["splayVar"] = this["decodeVariableData"](bb);
        break;

      case 42:
        result["refractionIntensityVar"] = this["decodeVariableData"](bb);
        break;

      case 43:
        result["customEffectId"] = this["decodeCodeComponentId"](bb);
        break;

      case 44:
        var length = bb.readVarUint();
        var values = result["componentPropAssignments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropAssignment"](bb);
        break;

      case 45:
        result["startRadiusVar"] = this["decodeVariableData"](bb);
        break;

      case 46:
        result["startOffsetXVar"] = this["decodeVariableData"](bb);
        break;

      case 47:
        result["startOffsetYVar"] = this["decodeVariableData"](bb);
        break;

      case 48:
        result["endOffsetXVar"] = this["decodeVariableData"](bb);
        break;

      case 49:
        result["endOffsetYVar"] = this["decodeVariableData"](bb);
        break;

      case 50:
        result["noiseSizeXVar"] = this["decodeVariableData"](bb);
        break;

      case 51:
        result["noiseSizeYVar"] = this["decodeVariableData"](bb);
        break;

      case 52:
        result["densityVar"] = this["decodeVariableData"](bb);
        break;

      case 53:
        result["effectOpacityVar"] = this["decodeVariableData"](bb);
        break;

      case 54:
        result["secondaryColorVar"] = this["decodeVariableData"](bb);
        break;

      case 55:
        result["id"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEffect"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["EffectType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EffectType\""); bb.writeVarUint(encoded);
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVector"](value, bb);
  }

  var value = message["radius"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["blendMode"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["BlendMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BlendMode\""); bb.writeVarUint(encoded);
  }

  var value = message["spread"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["showShadowBehindNode"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeByte(value);
  }

  var value = message["radiusVar"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeVariableData"](value, bb);
  }

  var value = message["colorVar"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeVariableData"](value, bb);
  }

  var value = message["spreadVar"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeVariableData"](value, bb);
  }

  var value = message["xVar"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeVariableData"](value, bb);
  }

  var value = message["yVar"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeVariableData"](value, bb);
  }

  var value = message["count"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeVarUint(value);
  }

  var value = message["repeatType"];
  if (value != null) {
    bb.writeVarUint(15);
    var encoded = this["RepeatType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RepeatType\""); bb.writeVarUint(encoded);
  }

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(16);
    var encoded = this["EffectAxis"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EffectAxis\""); bb.writeVarUint(encoded);
  }

  var value = message["unitType"];
  if (value != null) {
    bb.writeVarUint(17);
    var encoded = this["UnitType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"UnitType\""); bb.writeVarUint(encoded);
  }

  var value = message["order"];
  if (value != null) {
    bb.writeVarUint(18);
    var encoded = this["RepeatOrder"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RepeatOrder\""); bb.writeVarUint(encoded);
  }

  var value = message["blurOpType"];
  if (value != null) {
    bb.writeVarUint(19);
    var encoded = this["BlurOpType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BlurOpType\""); bb.writeVarUint(encoded);
  }

  var value = message["startOffset"];
  if (value != null) {
    bb.writeVarUint(20);
    this["encodeVector"](value, bb);
  }

  var value = message["endOffset"];
  if (value != null) {
    bb.writeVarUint(28);
    this["encodeVector"](value, bb);
  }

  var value = message["startRadius"];
  if (value != null) {
    bb.writeVarUint(21);
    bb.writeVarFloat(value);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeColor"](value, bb);
  }

  var value = message["secondaryColor"];
  if (value != null) {
    bb.writeVarUint(24);
    this["encodeColor"](value, bb);
  }

  var value = message["authoredColor"];
  if (value != null) {
    bb.writeVarUint(56);
    this["encodeAuthoredColor"](value, bb);
  }

  var value = message["secondaryAuthoredColor"];
  if (value != null) {
    bb.writeVarUint(57);
    this["encodeAuthoredColor"](value, bb);
  }

  var value = message["noiseSize"];
  if (value != null) {
    bb.writeVarUint(22);
    this["encodeVector"](value, bb);
  }

  var value = message["seed"];
  if (value != null) {
    bb.writeVarUint(29);
    bb.writeVarUint(value);
  }

  var value = message["clipToShape"];
  if (value != null) {
    bb.writeVarUint(23);
    bb.writeByte(value);
  }

  var value = message["density"];
  if (value != null) {
    bb.writeVarUint(25);
    bb.writeVarFloat(value);
  }

  var value = message["noiseType"];
  if (value != null) {
    bb.writeVarUint(26);
    var encoded = this["NoiseType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NoiseType\""); bb.writeVarUint(encoded);
  }

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(27);
    bb.writeVarFloat(value);
  }

  var value = message["refractionRadius"];
  if (value != null) {
    bb.writeVarUint(30);
    bb.writeVarFloat(value);
  }

  var value = message["specularAngle"];
  if (value != null) {
    bb.writeVarUint(31);
    bb.writeVarFloat(value);
  }

  var value = message["specularIntensity"];
  if (value != null) {
    bb.writeVarUint(32);
    bb.writeVarFloat(value);
  }

  var value = message["bevelSize"];
  if (value != null) {
    bb.writeVarUint(33);
    bb.writeVarFloat(value);
  }

  var value = message["chromaticAberration"];
  if (value != null) {
    bb.writeVarUint(34);
    bb.writeVarFloat(value);
  }

  var value = message["reflectionDistance"];
  if (value != null) {
    bb.writeVarUint(35);
    bb.writeVarFloat(value);
  }

  var value = message["refractionIntensity"];
  if (value != null) {
    bb.writeVarUint(36);
    bb.writeVarFloat(value);
  }

  var value = message["refractionRadiusVar"];
  if (value != null) {
    bb.writeVarUint(37);
    this["encodeVariableData"](value, bb);
  }

  var value = message["specularAngleVar"];
  if (value != null) {
    bb.writeVarUint(38);
    this["encodeVariableData"](value, bb);
  }

  var value = message["specularIntensityVar"];
  if (value != null) {
    bb.writeVarUint(39);
    this["encodeVariableData"](value, bb);
  }

  var value = message["chromaticAberrationVar"];
  if (value != null) {
    bb.writeVarUint(40);
    this["encodeVariableData"](value, bb);
  }

  var value = message["splayVar"];
  if (value != null) {
    bb.writeVarUint(41);
    this["encodeVariableData"](value, bb);
  }

  var value = message["refractionIntensityVar"];
  if (value != null) {
    bb.writeVarUint(42);
    this["encodeVariableData"](value, bb);
  }

  var value = message["customEffectId"];
  if (value != null) {
    bb.writeVarUint(43);
    this["encodeCodeComponentId"](value, bb);
  }

  var value = message["componentPropAssignments"];
  if (value != null) {
    bb.writeVarUint(44);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropAssignment"](value, bb);
    }
  }

  var value = message["startRadiusVar"];
  if (value != null) {
    bb.writeVarUint(45);
    this["encodeVariableData"](value, bb);
  }

  var value = message["startOffsetXVar"];
  if (value != null) {
    bb.writeVarUint(46);
    this["encodeVariableData"](value, bb);
  }

  var value = message["startOffsetYVar"];
  if (value != null) {
    bb.writeVarUint(47);
    this["encodeVariableData"](value, bb);
  }

  var value = message["endOffsetXVar"];
  if (value != null) {
    bb.writeVarUint(48);
    this["encodeVariableData"](value, bb);
  }

  var value = message["endOffsetYVar"];
  if (value != null) {
    bb.writeVarUint(49);
    this["encodeVariableData"](value, bb);
  }

  var value = message["noiseSizeXVar"];
  if (value != null) {
    bb.writeVarUint(50);
    this["encodeVariableData"](value, bb);
  }

  var value = message["noiseSizeYVar"];
  if (value != null) {
    bb.writeVarUint(51);
    this["encodeVariableData"](value, bb);
  }

  var value = message["densityVar"];
  if (value != null) {
    bb.writeVarUint(52);
    this["encodeVariableData"](value, bb);
  }

  var value = message["effectOpacityVar"];
  if (value != null) {
    bb.writeVarUint(53);
    this["encodeVariableData"](value, bb);
  }

  var value = message["secondaryColorVar"];
  if (value != null) {
    bb.writeVarUint(54);
    this["encodeVariableData"](value, bb);
  }

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(55);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TransformModifierType"] = {
  "0": "REPEAT",
  "1": "SYMMETRY",
  "2": "SKEW",
  "REPEAT": 0,
  "SYMMETRY": 1,
  "SKEW": 2
};

exports["decodeTransformModifier"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["TransformModifierType"][bb.readVarUint()];
        break;

      case 2:
        result["offset"] = this["decodeVector"](bb);
        break;

      case 3:
        result["visible"] = !!bb.readByte();
        break;

      case 4:
        result["count"] = bb.readVarUint();
        break;

      case 5:
        result["repeatType"] = this["RepeatType"][bb.readVarUint()];
        break;

      case 6:
        result["axis"] = this["EffectAxis"][bb.readVarUint()];
        break;

      case 7:
        result["unitType"] = this["UnitType"][bb.readVarUint()];
        break;

      case 8:
        result["order"] = this["RepeatOrder"][bb.readVarUint()];
        break;

      case 9:
        result["skewX"] = bb.readVarFloat();
        break;

      case 10:
        result["skewY"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransformModifier"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransformModifierType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransformModifierType\""); bb.writeVarUint(encoded);
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["count"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }

  var value = message["repeatType"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["RepeatType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RepeatType\""); bb.writeVarUint(encoded);
  }

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["EffectAxis"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EffectAxis\""); bb.writeVarUint(encoded);
  }

  var value = message["unitType"];
  if (value != null) {
    bb.writeVarUint(7);
    var encoded = this["UnitType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"UnitType\""); bb.writeVarUint(encoded);
  }

  var value = message["order"];
  if (value != null) {
    bb.writeVarUint(8);
    var encoded = this["RepeatOrder"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RepeatOrder\""); bb.writeVarUint(encoded);
  }

  var value = message["skewX"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeVarFloat(value);
  }

  var value = message["skewY"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TransformSchemaType"] = {
  "0": "NONE",
  "1": "FIXED_ORDER",
  "2": "FREEFORM",
  "NONE": 0,
  "FIXED_ORDER": 1,
  "FREEFORM": 2
};

exports["decodeMatrix4f"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["m00"] = bb.readVarFloat();
  result["m01"] = bb.readVarFloat();
  result["m02"] = bb.readVarFloat();
  result["m03"] = bb.readVarFloat();
  result["m10"] = bb.readVarFloat();
  result["m11"] = bb.readVarFloat();
  result["m12"] = bb.readVarFloat();
  result["m13"] = bb.readVarFloat();
  result["m20"] = bb.readVarFloat();
  result["m21"] = bb.readVarFloat();
  result["m22"] = bb.readVarFloat();
  result["m23"] = bb.readVarFloat();
  result["m30"] = bb.readVarFloat();
  result["m31"] = bb.readVarFloat();
  result["m32"] = bb.readVarFloat();
  result["m33"] = bb.readVarFloat();
  return result;
};

exports["encodeMatrix4f"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["m00"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m00\"");
  }

  var value = message["m01"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m01\"");
  }

  var value = message["m02"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m02\"");
  }

  var value = message["m03"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m03\"");
  }

  var value = message["m10"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m10\"");
  }

  var value = message["m11"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m11\"");
  }

  var value = message["m12"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m12\"");
  }

  var value = message["m13"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m13\"");
  }

  var value = message["m20"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m20\"");
  }

  var value = message["m21"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m21\"");
  }

  var value = message["m22"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m22\"");
  }

  var value = message["m23"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m23\"");
  }

  var value = message["m30"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m30\"");
  }

  var value = message["m31"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m31\"");
  }

  var value = message["m32"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m32\"");
  }

  var value = message["m33"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"m33\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFixedOrderTransform3d"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["perspective"] = bb.readVarFloat();
        break;

      case 2:
        result["translateZ"] = bb.readVarFloat();
        break;

      case 3:
        result["rotateX"] = bb.readVarFloat();
        break;

      case 4:
        result["rotateY"] = bb.readVarFloat();
        break;

      case 5:
        result["rotateZ"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFixedOrderTransform3d"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["perspective"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["translateZ"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["rotateX"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["rotateY"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["rotateZ"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TransformFnType"] = {
  "0": "NONE",
  "1": "MATRIX_3D",
  "2": "PERSPECTIVE",
  "3": "TRANSLATE_Z",
  "4": "ROTATE_X",
  "5": "ROTATE_Y",
  "6": "ROTATE_Z",
  "NONE": 0,
  "MATRIX_3D": 1,
  "PERSPECTIVE": 2,
  "TRANSLATE_Z": 3,
  "ROTATE_X": 4,
  "ROTATE_Y": 5,
  "ROTATE_Z": 6
};

exports["decodeTransformFnValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["matrix3d"] = this["decodeMatrix4f"](bb);
        break;

      case 2:
        result["perspective"] = bb.readVarFloat();
        break;

      case 3:
        result["rotateAngle"] = bb.readVarFloat();
        break;

      case 4:
        result["translateValue"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransformFnValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["matrix3d"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeMatrix4f"](value, bb);
  }

  var value = message["perspective"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["rotateAngle"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["translateValue"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransformFn"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["TransformFnType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = this["decodeTransformFnValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransformFn"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransformFnType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransformFnType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTransformFnValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransformSchemaValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["fixedOrderTransform3d"] = this["decodeFixedOrderTransform3d"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["transformFunctions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTransformFn"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransformSchemaValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["fixedOrderTransform3d"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeFixedOrderTransform3d"](value, bb);
  }

  var value = message["transformFunctions"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTransformFn"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransform3d"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["TransformSchemaType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = this["decodeTransformSchemaValue"](bb);
        break;

      case 3:
        result["backfaceHidden"] = !!bb.readByte();
        break;

      case 4:
        result["visible"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransform3d"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransformSchemaType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransformSchemaType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTransformSchemaValue"](value, bb);
  }

  var value = message["backfaceHidden"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNumberVector2D"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["x"] = this["decodeNumber"](bb);
  result["y"] = this["decodeNumber"](bb);
  return result;
};

exports["encodeNumberVector2D"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["x"];
  if (value != null) {
    this["encodeNumber"](value, bb);
  } else {
    throw new Error("Missing required field \"x\"");
  }

  var value = message["y"];
  if (value != null) {
    this["encodeNumber"](value, bb);
  } else {
    throw new Error("Missing required field \"y\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeScene3d"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["perspective"] = bb.readVarFloat();
        break;

      case 2:
        result["perspectiveOrigin"] = this["decodeNumberVector2D"](bb);
        break;

      case 3:
        result["preserve3d"] = !!bb.readByte();
        break;

      case 4:
        result["visible"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeScene3d"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["perspective"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["perspectiveOrigin"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNumberVector2D"](value, bb);
  }

  var value = message["preserve3d"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransformOrigin"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["x"] = this["decodeNumber"](bb);
        break;

      case 2:
        result["y"] = this["decodeNumber"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransformOrigin"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["x"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeNumber"](value, bb);
  }

  var value = message["y"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNumber"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["TransitionType"][bb.readVarUint()];
        break;

      case 2:
        result["duration"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransitionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionType\""); bb.writeVarUint(encoded);
  }

  var value = message["duration"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["PrototypeDeviceType"] = {
  "0": "NONE",
  "1": "PRESET",
  "2": "CUSTOM",
  "3": "PRESENTATION",
  "NONE": 0,
  "PRESET": 1,
  "CUSTOM": 2,
  "PRESENTATION": 3
};
exports["DeviceRotation"] = {
  "0": "NONE",
  "1": "CCW_90",
  "NONE": 0,
  "CCW_90": 1
};

exports["decodePrototypeDevice"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["PrototypeDeviceType"][bb.readVarUint()];
        break;

      case 2:
        result["size"] = this["decodeVector"](bb);
        break;

      case 3:
        result["presetIdentifier"] = bb.readString();
        break;

      case 4:
        result["rotation"] = this["DeviceRotation"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeDevice"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PrototypeDeviceType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PrototypeDeviceType\""); bb.writeVarUint(encoded);
  }

  var value = message["size"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["presetIdentifier"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["rotation"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["DeviceRotation"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DeviceRotation\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["OverlayPositionType"] = {
  "0": "CENTER",
  "1": "TOP_LEFT",
  "2": "TOP_CENTER",
  "3": "TOP_RIGHT",
  "4": "BOTTOM_LEFT",
  "5": "BOTTOM_CENTER",
  "6": "BOTTOM_RIGHT",
  "7": "MANUAL",
  "CENTER": 0,
  "TOP_LEFT": 1,
  "TOP_CENTER": 2,
  "TOP_RIGHT": 3,
  "BOTTOM_LEFT": 4,
  "BOTTOM_CENTER": 5,
  "BOTTOM_RIGHT": 6,
  "MANUAL": 7
};
exports["OverlayBackgroundInteraction"] = {
  "0": "NONE",
  "1": "CLOSE_ON_CLICK_OUTSIDE",
  "NONE": 0,
  "CLOSE_ON_CLICK_OUTSIDE": 1
};
exports["OverlayBackgroundType"] = {
  "0": "NONE",
  "1": "SOLID_COLOR",
  "NONE": 0,
  "SOLID_COLOR": 1
};

exports["decodeOverlayBackgroundAppearance"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["backgroundType"] = this["OverlayBackgroundType"][bb.readVarUint()];
        break;

      case 2:
        result["backgroundColor"] = this["decodeColor"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeOverlayBackgroundAppearance"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["backgroundType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["OverlayBackgroundType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"OverlayBackgroundType\""); bb.writeVarUint(encoded);
  }

  var value = message["backgroundColor"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeColor"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["NavigationType"] = {
  "0": "NAVIGATE",
  "1": "OVERLAY",
  "2": "SWAP",
  "3": "SWAP_STATE",
  "4": "SCROLL_TO",
  "NAVIGATE": 0,
  "OVERLAY": 1,
  "SWAP": 2,
  "SWAP_STATE": 3,
  "SCROLL_TO": 4
};
exports["ExportColorProfile"] = {
  "0": "DOCUMENT",
  "1": "SRGB",
  "2": "DISPLAY_P3_V4",
  "3": "CMYK",
  "DOCUMENT": 0,
  "SRGB": 1,
  "DISPLAY_P3_V4": 2,
  "CMYK": 3
};
exports["ExportBackgroundType"] = {
  "0": "SOLID",
  "1": "TRANSPARENT",
  "2": "GRID",
  "SOLID": 0,
  "TRANSPARENT": 1,
  "GRID": 2
};

exports["decodeExportSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["suffix"] = bb.readString();
        break;

      case 2:
        result["imageType"] = this["ImageType"][bb.readVarUint()];
        break;

      case 3:
        result["constraint"] = this["decodeExportConstraint"](bb);
        break;

      case 4:
        result["svgDataName"] = !!bb.readByte();
        break;

      case 5:
        result["svgIDMode"] = this["ExportSVGIDMode"][bb.readVarUint()];
        break;

      case 6:
        result["svgOutlineText"] = !!bb.readByte();
        break;

      case 7:
        result["contentsOnly"] = !!bb.readByte();
        break;

      case 8:
        result["svgForceStrokeMasks"] = !!bb.readByte();
        break;

      case 9:
        result["useAbsoluteBounds"] = !!bb.readByte();
        break;

      case 10:
        result["colorProfile"] = this["ExportColorProfile"][bb.readVarUint()];
        break;

      case 11:
        result["quality"] = bb.readVarFloat();
        break;

      case 12:
        result["useBicubicSampler"] = !!bb.readByte();
        break;

      case 13:
        result["frameRate"] = bb.readVarInt();
        break;

      case 14:
        result["loopCount"] = bb.readVarInt();
        break;

      case 15:
        result["backgroundType"] = this["ExportBackgroundType"][bb.readVarUint()];
        break;

      case 16:
        result["duration"] = bb.readVarFloat();
        break;

      case 17:
        result["svgAnimated"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeExportSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["suffix"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["imageType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["ImageType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ImageType\""); bb.writeVarUint(encoded);
  }

  var value = message["constraint"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeExportConstraint"](value, bb);
  }

  var value = message["svgDataName"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["svgIDMode"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["ExportSVGIDMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ExportSVGIDMode\""); bb.writeVarUint(encoded);
  }

  var value = message["svgOutlineText"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["contentsOnly"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }

  var value = message["svgForceStrokeMasks"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeByte(value);
  }

  var value = message["useAbsoluteBounds"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeByte(value);
  }

  var value = message["colorProfile"];
  if (value != null) {
    bb.writeVarUint(10);
    var encoded = this["ExportColorProfile"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ExportColorProfile\""); bb.writeVarUint(encoded);
  }

  var value = message["quality"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeVarFloat(value);
  }

  var value = message["useBicubicSampler"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeByte(value);
  }

  var value = message["frameRate"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeVarInt(value);
  }

  var value = message["loopCount"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeVarInt(value);
  }

  var value = message["backgroundType"];
  if (value != null) {
    bb.writeVarUint(15);
    var encoded = this["ExportBackgroundType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ExportBackgroundType\""); bb.writeVarUint(encoded);
  }

  var value = message["duration"];
  if (value != null) {
    bb.writeVarUint(16);
    bb.writeVarFloat(value);
  }

  var value = message["svgAnimated"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ExportSVGIDMode"] = {
  "0": "IF_NEEDED",
  "1": "ALWAYS",
  "IF_NEEDED": 0,
  "ALWAYS": 1
};

exports["decodeLayoutGrid"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["LayoutGridType"][bb.readVarUint()];
        break;

      case 2:
        result["axis"] = this["Axis"][bb.readVarUint()];
        break;

      case 3:
        result["visible"] = !!bb.readByte();
        break;

      case 4:
        result["numSections"] = bb.readVarInt();
        break;

      case 5:
        result["offset"] = bb.readVarFloat();
        break;

      case 6:
        result["sectionSize"] = bb.readVarFloat();
        break;

      case 7:
        result["gutterSize"] = bb.readVarFloat();
        break;

      case 8:
        result["color"] = this["decodeColor"](bb);
        break;

      case 9:
        result["pattern"] = this["LayoutGridPattern"][bb.readVarUint()];
        break;

      case 10:
        result["numSectionsVar"] = this["decodeVariableData"](bb);
        break;

      case 11:
        result["offsetVar"] = this["decodeVariableData"](bb);
        break;

      case 12:
        result["sectionSizeVar"] = this["decodeVariableData"](bb);
        break;

      case 13:
        result["gutterSizeVar"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLayoutGrid"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["LayoutGridType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LayoutGridType\""); bb.writeVarUint(encoded);
  }

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["Axis"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Axis\""); bb.writeVarUint(encoded);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["numSections"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["sectionSize"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["gutterSize"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeColor"](value, bb);
  }

  var value = message["pattern"];
  if (value != null) {
    bb.writeVarUint(9);
    var encoded = this["LayoutGridPattern"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LayoutGridPattern\""); bb.writeVarUint(encoded);
  }

  var value = message["numSectionsVar"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeVariableData"](value, bb);
  }

  var value = message["offsetVar"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeVariableData"](value, bb);
  }

  var value = message["sectionSizeVar"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeVariableData"](value, bb);
  }

  var value = message["gutterSizeVar"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGuide"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["axis"] = this["Axis"][bb.readVarUint()];
        break;

      case 2:
        result["offset"] = bb.readVarFloat();
        break;

      case 3:
        result["guid"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGuide"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["Axis"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Axis\""); bb.writeVarUint(encoded);
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePath"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["windingRule"] = this["WindingRule"][bb.readVarUint()];
        break;

      case 2:
        result["commandsBlob"] = bb.readVarUint();
        break;

      case 3:
        result["styleID"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePath"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["windingRule"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["WindingRule"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"WindingRule\""); bb.writeVarUint(encoded);
  }

  var value = message["commandsBlob"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["styleID"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["StyleType"] = {
  "0": "NONE",
  "1": "FILL",
  "2": "STROKE",
  "3": "TEXT",
  "4": "EFFECT",
  "5": "EXPORT",
  "6": "GRID",
  "7": "ANIMATION",
  "NONE": 0,
  "FILL": 1,
  "STROKE": 2,
  "TEXT": 3,
  "EFFECT": 4,
  "EXPORT": 5,
  "GRID": 6,
  "ANIMATION": 7
};
exports["BrushOrientation"] = {
  "0": "FORWARD",
  "1": "REVERSE",
  "FORWARD": 0,
  "REVERSE": 1
};
exports["BrushType"] = {
  "0": "STRETCH",
  "1": "SCATTER",
  "STRETCH": 0,
  "SCATTER": 1
};

exports["decodeDynamicStrokeSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["frequency"] = bb.readVarFloat();
        break;

      case 2:
        result["wiggle"] = bb.readVarFloat();
        break;

      case 3:
        result["smoothen"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDynamicStrokeSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["frequency"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["wiggle"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["smoothen"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeScatterStrokeSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["gap"] = bb.readVarFloat();
        break;

      case 2:
        result["wiggle"] = bb.readVarFloat();
        break;

      case 3:
        result["angularJitter"] = bb.readVarFloat();
        break;

      case 4:
        result["rotation"] = bb.readVarFloat();
        break;

      case 5:
        result["sizeJitter"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeScatterStrokeSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["gap"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["wiggle"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["angularJitter"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["rotation"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["sizeJitter"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStretchStrokeSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["orientation"] = this["BrushOrientation"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStretchStrokeSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["orientation"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["BrushOrientation"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BrushOrientation\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStrokeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["strokes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStroke"](bb);
        break;

      case 2:
        result["version"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStrokeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["strokes"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStroke"](value, bb);
    }
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStroke"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["strokeId"] = bb.readVarInt();
        break;

      case 2:
        result["strokeWeight"] = bb.readVarFloat();
        break;

      case 3:
        result["strokeWeightVar"] = this["decodeVariableData"](bb);
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["strokePaint"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 5:
        result["styleIdForStrokeFill"] = this["decodeStyleId"](bb);
        break;

      case 6:
        result["strokeAlign"] = this["StrokeAlign"][bb.readVarUint()];
        break;

      case 7:
        result["strokeCap"] = this["StrokeCap"][bb.readVarUint()];
        break;

      case 8:
        result["strokeCapSize"] = this["decodeNumber"](bb);
        break;

      case 9:
        result["strokeJoin"] = this["StrokeJoin"][bb.readVarUint()];
        break;

      case 10:
        result["miterLimit"] = bb.readVarFloat();
        break;

      case 11:
        var length = bb.readVarUint();
        var values = result["dashPattern"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 12:
        result["pathTrim"] = this["decodeOptionalVector"](bb);
        break;

      case 13:
        result["strokeOffset"] = bb.readVarFloat();
        break;

      case 14:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStroke"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["strokeId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarInt(value);
  }

  var value = message["strokeWeight"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["strokeWeightVar"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["strokePaint"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["styleIdForStrokeFill"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeStyleId"](value, bb);
  }

  var value = message["strokeAlign"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["StrokeAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeCap"];
  if (value != null) {
    bb.writeVarUint(7);
    var encoded = this["StrokeCap"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeCap\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeCapSize"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeNumber"](value, bb);
  }

  var value = message["strokeJoin"];
  if (value != null) {
    bb.writeVarUint(9);
    var encoded = this["StrokeJoin"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeJoin\""); bb.writeVarUint(encoded);
  }

  var value = message["miterLimit"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeVarFloat(value);
  }

  var value = message["dashPattern"];
  if (value != null) {
    bb.writeVarUint(11);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["pathTrim"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeOptionalVector"](value, bb);
  }

  var value = message["strokeOffset"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeVarFloat(value);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableWidthPoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["position"] = bb.readVarFloat();
        break;

      case 2:
        result["ascent"] = bb.readVarFloat();
        break;

      case 3:
        result["descent"] = bb.readVarFloat();
        break;

      case 4:
        result["segmentId"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableWidthPoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["ascent"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["descent"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["segmentId"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSharedStyleReference"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["styleKey"] = bb.readString();
        break;

      case 2:
        result["versionHash"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSharedStyleReference"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["styleKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["versionHash"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSharedStyleMasterData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["styleKey"] = bb.readString();
        break;

      case 2:
        result["sortPosition"] = bb.readString();
        break;

      case 3:
        result["fileKey"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSharedStyleMasterData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["styleKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["sortPosition"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["fileKey"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ScrollBehavior"] = {
  "0": "SCROLLS",
  "1": "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME",
  "2": "STICKY_SCROLLS",
  "SCROLLS": 0,
  "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME": 1,
  "STICKY_SCROLLS": 2
};

exports["decodeArcData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["startingAngle"] = bb.readVarFloat();
        break;

      case 2:
        result["endingAngle"] = bb.readVarFloat();
        break;

      case 3:
        result["innerRadius"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeArcData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["startingAngle"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["endingAngle"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["innerRadius"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSymbolLink"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["uri"] = bb.readString();
        break;

      case 2:
        result["displayName"] = bb.readString();
        break;

      case 3:
        result["displayText"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSymbolLink"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["uri"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["displayName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["displayText"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePluginData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["pluginID"] = bb.readString();
        break;

      case 2:
        result["value"] = bb.readString();
        break;

      case 3:
        result["key"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePluginData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["pluginID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePluginRelaunchData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["pluginID"] = bb.readString();
        break;

      case 2:
        result["message"] = bb.readString();
        break;

      case 3:
        result["command"] = bb.readString();
        break;

      case 4:
        result["isDeleted"] = !!bb.readByte();
        break;

      case 5:
        result["customToolId"] = this["decodeCodeComponentId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePluginRelaunchData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["pluginID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["message"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["command"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["customToolId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeCodeComponentId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMultiplayerFieldVersion"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["counter"] = bb.readVarUint();
        break;

      case 2:
        result["sessionID"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMultiplayerFieldVersion"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["counter"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ConnectorMagnet"] = {
  "0": "NONE",
  "1": "AUTO",
  "2": "TOP",
  "3": "LEFT",
  "4": "BOTTOM",
  "5": "RIGHT",
  "6": "CENTER",
  "7": "AUTO_HORIZONTAL",
  "8": "EDGE",
  "9": "ABSOLUTE",
  "NONE": 0,
  "AUTO": 1,
  "TOP": 2,
  "LEFT": 3,
  "BOTTOM": 4,
  "RIGHT": 5,
  "CENTER": 6,
  "AUTO_HORIZONTAL": 7,
  "EDGE": 8,
  "ABSOLUTE": 9
};

exports["decodeConnectorEndpoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["endpointNodeID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["position"] = this["decodeVector"](bb);
        break;

      case 3:
        result["magnet"] = this["ConnectorMagnet"][bb.readVarUint()];
        break;

      case 4:
        result["relativePosition"] = this["decodeVector"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeConnectorEndpoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["endpointNodeID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["magnet"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["ConnectorMagnet"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectorMagnet\""); bb.writeVarUint(encoded);
  }

  var value = message["relativePosition"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVector"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeConnectorControlPoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["position"] = this["decodeVector"](bb);
        break;

      case 2:
        result["axis"] = this["decodeVector"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeConnectorControlPoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ConnectorTextSection"] = {
  "0": "MIDDLE_TO_START",
  "1": "MIDDLE_TO_END",
  "MIDDLE_TO_START": 0,
  "MIDDLE_TO_END": 1
};
exports["ConnectorOffAxisOffset"] = {
  "0": "NONE",
  "1": "ABOVE",
  "2": "BELOW",
  "NONE": 0,
  "ABOVE": 1,
  "BELOW": 2
};

exports["decodeConnectorTextMidpoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["section"] = this["ConnectorTextSection"][bb.readVarUint()];
        break;

      case 2:
        result["offset"] = bb.readVarFloat();
        break;

      case 3:
        result["offAxisOffset"] = this["ConnectorOffAxisOffset"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeConnectorTextMidpoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["section"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ConnectorTextSection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectorTextSection\""); bb.writeVarUint(encoded);
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["offAxisOffset"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["ConnectorOffAxisOffset"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectorOffAxisOffset\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ConnectorLineStyle"] = {
  "0": "ELBOWED",
  "1": "STRAIGHT",
  "2": "CURVED",
  "ELBOWED": 0,
  "STRAIGHT": 1,
  "CURVED": 2
};
exports["ConnectorType"] = {
  "0": "MANUAL",
  "1": "DIAGRAM",
  "MANUAL": 0,
  "DIAGRAM": 1
};
exports["AnnotationPropertyType"] = {
  "0": "FILL",
  "1": "STROKE",
  "2": "WIDTH",
  "3": "HEIGHT",
  "4": "MIN_WIDTH",
  "5": "MIN_HEIGHT",
  "6": "MAX_WIDTH",
  "7": "MAX_HEIGHT",
  "8": "STROKE_WIDTH",
  "9": "CORNER_RADIUS",
  "10": "EFFECT",
  "11": "TEXT_STYLE",
  "12": "TEXT_ALIGN_HORIZONTAL",
  "13": "FONT_FAMILY",
  "14": "FONT_SIZE",
  "15": "FONT_WEIGHT",
  "16": "LINE_HEIGHT",
  "17": "LETTER_SPACING",
  "18": "STACK_SPACING",
  "19": "STACK_PADDING",
  "20": "STACK_MODE",
  "21": "STACK_ALIGNMENT",
  "22": "OPACITY",
  "23": "COMPONENT",
  "24": "FONT_STYLE",
  "25": "GRID_ROW_GAP",
  "26": "GRID_COLUMN_GAP",
  "27": "GRID_ROW_COUNT",
  "28": "GRID_COLUMN_COUNT",
  "29": "GRID_ROW_ANCHOR_INDEX",
  "30": "GRID_COLUMN_ANCHOR_INDEX",
  "31": "GRID_ROW_SPAN",
  "32": "GRID_COLUMN_SPAN",
  "FILL": 0,
  "STROKE": 1,
  "WIDTH": 2,
  "HEIGHT": 3,
  "MIN_WIDTH": 4,
  "MIN_HEIGHT": 5,
  "MAX_WIDTH": 6,
  "MAX_HEIGHT": 7,
  "STROKE_WIDTH": 8,
  "CORNER_RADIUS": 9,
  "EFFECT": 10,
  "TEXT_STYLE": 11,
  "TEXT_ALIGN_HORIZONTAL": 12,
  "FONT_FAMILY": 13,
  "FONT_SIZE": 14,
  "FONT_WEIGHT": 15,
  "LINE_HEIGHT": 16,
  "LETTER_SPACING": 17,
  "STACK_SPACING": 18,
  "STACK_PADDING": 19,
  "STACK_MODE": 20,
  "STACK_ALIGNMENT": 21,
  "OPACITY": 22,
  "COMPONENT": 23,
  "FONT_STYLE": 24,
  "GRID_ROW_GAP": 25,
  "GRID_COLUMN_GAP": 26,
  "GRID_ROW_COUNT": 27,
  "GRID_COLUMN_COUNT": 28,
  "GRID_ROW_ANCHOR_INDEX": 29,
  "GRID_COLUMN_ANCHOR_INDEX": 30,
  "GRID_ROW_SPAN": 31,
  "GRID_COLUMN_SPAN": 32
};

exports["decodeAnnotationProperty"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["AnnotationPropertyType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotationProperty"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["AnnotationPropertyType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnnotationPropertyType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AnnotationCategoryPreset"] = {
  "0": "NONE",
  "1": "ACCESSIBILITY",
  "2": "BEHAVIOR",
  "3": "CONTENT",
  "4": "DEVELOPMENT",
  "5": "INTERACTION",
  "NONE": 0,
  "ACCESSIBILITY": 1,
  "BEHAVIOR": 2,
  "CONTENT": 3,
  "DEVELOPMENT": 4,
  "INTERACTION": 5
};
exports["AnnotationCategoryColor"] = {
  "0": "YELLOW",
  "1": "ORANGE",
  "2": "RED",
  "3": "PINK",
  "4": "VIOLET",
  "5": "BLUE",
  "6": "TEAL",
  "7": "GREEN",
  "YELLOW": 0,
  "ORANGE": 1,
  "RED": 2,
  "PINK": 3,
  "VIOLET": 4,
  "BLUE": 5,
  "TEAL": 6,
  "GREEN": 7
};

exports["decodeAnnotationCategoryCustom"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["color"] = this["AnnotationCategoryColor"][bb.readVarUint()];
        break;

      case 2:
        result["customColor"] = this["decodeColor"](bb);
        break;

      case 3:
        result["label"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotationCategoryCustom"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["AnnotationCategoryColor"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnnotationCategoryColor\""); bb.writeVarUint(encoded);
  }

  var value = message["customColor"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeColor"](value, bb);
  }

  var value = message["label"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnnotationCategory"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["preset"] = this["AnnotationCategoryPreset"][bb.readVarUint()];
        break;

      case 3:
        result["custom"] = this["decodeAnnotationCategoryCustom"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotationCategory"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["preset"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["AnnotationCategoryPreset"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnnotationCategoryPreset\""); bb.writeVarUint(encoded);
  }

  var value = message["custom"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeAnnotationCategoryCustom"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnnotationCategories"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["version"] = bb.readVarUint();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["items"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnnotationCategory"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotationCategories"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["items"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnnotationCategory"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnnotation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["label"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["properties"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnnotationProperty"](bb);
        break;

      case 3:
        result["labelV2"] = bb.readString();
        break;

      case 4:
        result["categoryId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["label"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["properties"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnnotationProperty"](value, bb);
    }
  }

  var value = message["labelV2"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["categoryId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AnnotationMeasurementNodeSide"] = {
  "0": "TOP",
  "1": "BOTTOM",
  "2": "LEFT",
  "3": "RIGHT",
  "TOP": 0,
  "BOTTOM": 1,
  "LEFT": 2,
  "RIGHT": 3
};

exports["decodeAnnotationMeasurement"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["fromNode"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["toNode"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["fromNodeSide"] = this["AnnotationMeasurementNodeSide"][bb.readVarUint()];
        break;

      case 5:
        result["toSameSide"] = !!bb.readByte();
        break;

      case 6:
        result["innerOffsetRelative"] = bb.readVarFloat();
        break;

      case 7:
        result["outerOffsetFixed"] = bb.readVarFloat();
        break;

      case 8:
        result["toNodeStablePath"] = this["decodeGUIDPath"](bb);
        break;

      case 9:
        result["freeText"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnnotationMeasurement"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["fromNode"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["toNode"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["fromNodeSide"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["AnnotationMeasurementNodeSide"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnnotationMeasurementNodeSide\""); bb.writeVarUint(encoded);
  }

  var value = message["toSameSide"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["innerOffsetRelative"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["outerOffsetFixed"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["toNodeStablePath"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["freeText"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeLibraryMoveInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["oldKey"] = bb.readString();
        break;

      case 2:
        result["pasteFileKey"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLibraryMoveInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["oldKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["pasteFileKey"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeLibraryMoveHistoryItem"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sourceNodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["sourceComponentKey"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLibraryMoveHistoryItem"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sourceNodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["sourceComponentKey"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDeveloperRelatedLink"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeId"] = bb.readString();
        break;

      case 2:
        result["fileKey"] = bb.readString();
        break;

      case 3:
        result["linkName"] = bb.readString();
        break;

      case 4:
        result["linkUrl"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDeveloperRelatedLink"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["fileKey"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["linkName"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["linkUrl"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeWidgetPointer"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetPointer"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEditInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["timestampIso8601"] = bb.readString();
        break;

      case 2:
        result["userId"] = bb.readString();
        break;

      case 3:
        result["lastEditedAt"] = bb.readVarUint();
        break;

      case 4:
        result["createdAt"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEditInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["timestampIso8601"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["userId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["lastEditedAt"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["createdAt"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["EditorType"] = {
  "0": "DESIGN",
  "1": "WHITEBOARD",
  "2": "SLIDES",
  "3": "DEV_HANDOFF",
  "4": "SITES",
  "5": "COOPER",
  "6": "ILLUSTRATION",
  "7": "FIGMAKE",
  "8": "FIGSPEC",
  "DESIGN": 0,
  "WHITEBOARD": 1,
  "SLIDES": 2,
  "DEV_HANDOFF": 3,
  "SITES": 4,
  "COOPER": 5,
  "ILLUSTRATION": 6,
  "FIGMAKE": 7,
  "FIGSPEC": 8
};
exports["MaskType"] = {
  "0": "ALPHA",
  "1": "OUTLINE",
  "2": "LUMINANCE",
  "ALPHA": 0,
  "OUTLINE": 1,
  "LUMINANCE": 2
};
exports["ModuleType"] = {
  "0": "NONE",
  "1": "SINGLE_NODE",
  "2": "MULTI_NODE",
  "NONE": 0,
  "SINGLE_NODE": 1,
  "MULTI_NODE": 2
};
exports["SectionStatus"] = {
  "0": "NONE",
  "1": "BUILD",
  "2": "COMPLETED",
  "NONE": 0,
  "BUILD": 1,
  "COMPLETED": 2
};

exports["decodeSectionStatusInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["status"] = this["SectionStatus"][bb.readVarUint()];
        break;

      case 2:
        result["lastUpdateUnixTimestamp"] = bb.readVarUint();
        break;

      case 3:
        result["description"] = bb.readString();
        break;

      case 4:
        result["userId"] = bb.readString();
        break;

      case 5:
        result["prevStatus"] = this["SectionStatus"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSectionStatusInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["status"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["SectionStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SectionStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["lastUpdateUnixTimestamp"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["userId"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["prevStatus"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["SectionStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SectionStatus\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBuzzApprovalRequestInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["requestId"] = bb.readString();
        break;

      case 2:
        result["requesterUserId"] = bb.readString();
        break;

      case 3:
        result["requestedAt"] = bb.readVarUint();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["reviewerUserIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      case 5:
        result["title"] = bb.readString();
        break;

      case 6:
        result["note"] = bb.readString();
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["assetsInRequest"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBuzzApprovalRequestInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["requestId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["requesterUserId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["requestedAt"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["reviewerUserIds"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }

  var value = message["title"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["note"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }

  var value = message["assetsInRequest"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBuzzApprovalRequests"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["requests"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBuzzApprovalRequestInfo"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBuzzApprovalRequests"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["requests"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBuzzApprovalRequestInfo"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["BuzzApprovalNodeStatus"] = {
  "0": "NONE",
  "1": "IN_REVIEW",
  "2": "APPROVED",
  "3": "CHANGES_REQUESTED",
  "NONE": 0,
  "IN_REVIEW": 1,
  "APPROVED": 2,
  "CHANGES_REQUESTED": 3
};

exports["decodeBuzzApprovalNodeStatusInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["currentStatus"] = this["BuzzApprovalNodeStatus"][bb.readVarUint()];
        break;

      case 2:
        result["wasPreviouslyApproved"] = !!bb.readByte();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["approvalRevokedAtHistory"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBuzzApprovalNodeStatusInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["currentStatus"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["BuzzApprovalNodeStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BuzzApprovalNodeStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["wasPreviouslyApproved"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["approvalRevokedAtHistory"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeEmbedInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["url"] = bb.readString();
        break;

      case 2:
        result["srcUrl"] = bb.readString();
        break;

      case 3:
        result["title"] = bb.readString();
        break;

      case 4:
        result["thumbnailImageHash"] = bb.readString();
        break;

      case 5:
        result["isPublishedSite"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeEmbedInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["srcUrl"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["title"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["thumbnailImageHash"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["isPublishedSite"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["VariableTimingDisplayUnit"] = {
  "0": "MILLISECONDS",
  "1": "SECONDS",
  "MILLISECONDS": 0,
  "SECONDS": 1
};

exports["decodeNodeChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 53:
        result["guidTag"] = bb.readVarUint();
        break;

      case 2:
        result["phase"] = this["NodePhase"][bb.readVarUint()];
        break;

      case 54:
        result["phaseTag"] = bb.readVarUint();
        break;

      case 3:
        result["parentIndex"] = this["decodeParentIndex"](bb);
        break;

      case 55:
        result["parentIndexTag"] = bb.readVarUint();
        break;

      case 4:
        result["type"] = this["NodeType"][bb.readVarUint()];
        break;

      case 56:
        result["typeTag"] = bb.readVarUint();
        break;

      case 5:
        result["name"] = bb.readString();
        break;

      case 57:
        result["nameTag"] = bb.readVarUint();
        break;

      case 174:
        result["isPublishable"] = !!bb.readByte();
        break;

      case 318:
        result["description"] = bb.readString();
        break;

      case 256:
        result["libraryMoveInfo"] = this["decodeLibraryMoveInfo"](bb);
        break;

      case 281:
        var length = bb.readVarUint();
        var values = result["libraryMoveHistory"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeLibraryMoveHistoryItem"](bb);
        break;

      case 319:
        result["key"] = bb.readString();
        break;

      case 383:
        result["fileAssetIds"] = this["decodeAssetIdMap"](bb);
        break;

      case 49:
        result["styleID"] = bb.readVarUint();
        break;

      case 101:
        result["styleIDTag"] = bb.readVarUint();
        break;

      case 157:
        result["isFillStyle"] = !!bb.readByte();
        break;

      case 161:
        result["isStrokeStyle"] = !!bb.readByte();
        break;

      case 376:
        result["isOverrideOverTextStyle"] = !!bb.readByte();
        break;

      case 163:
        result["styleType"] = this["StyleType"][bb.readVarUint()];
        break;

      case 191:
        result["styleDescription"] = bb.readString();
        break;

      case 171:
        result["version"] = bb.readString();
        break;

      case 399:
        result["userFacingVersion"] = bb.readString();
        break;

      case 320:
        result["sortPosition"] = bb.readString();
        break;

      case 345:
        result["ojansSuperSecretNodeField"] = this["decodeSharedStyleMasterData"](bb);
        break;

      case 348:
        result["sevMoonlitLilyData"] = this["decodeSharedStyleMasterData"](bb);
        break;

      case 176:
        result["isSoftDeletedStyle"] = !!bb.readByte();
        break;

      case 177:
        result["isNonUpdateable"] = !!bb.readByte();
        break;

      case 172:
        result["sharedStyleMasterData"] = this["decodeSharedStyleMasterData"](bb);
        break;

      case 173:
        result["sharedStyleReference"] = this["decodeSharedStyleReference"](bb);
        break;

      case 158:
        result["inheritFillStyleID"] = this["decodeGUID"](bb);
        break;

      case 162:
        result["inheritStrokeStyleID"] = this["decodeGUID"](bb);
        break;

      case 167:
        result["inheritTextStyleID"] = this["decodeGUID"](bb);
        break;

      case 168:
        result["inheritExportStyleID"] = this["decodeGUID"](bb);
        break;

      case 169:
        result["inheritEffectStyleID"] = this["decodeGUID"](bb);
        break;

      case 170:
        result["inheritGridStyleID"] = this["decodeGUID"](bb);
        break;

      case 185:
        result["inheritFillStyleIDForStroke"] = this["decodeGUID"](bb);
        break;

      case 332:
        result["styleIdForFill"] = this["decodeStyleId"](bb);
        break;

      case 333:
        result["styleIdForStrokeFill"] = this["decodeStyleId"](bb);
        break;

      case 334:
        result["styleIdForText"] = this["decodeStyleId"](bb);
        break;

      case 335:
        result["styleIdForEffect"] = this["decodeStyleId"](bb);
        break;

      case 336:
        result["styleIdForGrid"] = this["decodeStyleId"](bb);
        break;

      case 580:
        var length = bb.readVarUint();
        var values = result["styleAnimations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStyleAnimation"](bb);
        break;

      case 193:
        var length = bb.readVarUint();
        var values = result["backgroundPaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 194:
        result["inheritFillStyleIDForBackground"] = this["decodeGUID"](bb);
        break;

      case 225:
        result["isStateGroup"] = !!bb.readByte();
        break;

      case 238:
        var length = bb.readVarUint();
        var values = result["stateGroupPropertyValueOrders"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStateGroupPropertyValueOrder"](bb);
        break;

      case 581:
        result["partialPasteAnnotation"] = this["decodePartialPasteAnnotation"](bb);
        break;

      case 122:
        result["sharedSymbolReference"] = this["decodeSharedSymbolReference"](bb);
        break;

      case 123:
        result["isSymbolPublishable"] = !!bb.readByte();
        break;

      case 124:
        var length = bb.readVarUint();
        var values = result["sharedSymbolMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 126:
        result["sharedSymbolVersion"] = bb.readString();
        break;

      case 152:
        result["sharedComponentMasterData"] = this["decodeSharedComponentMasterData"](bb);
        break;

      case 144:
        result["symbolDescription"] = bb.readString();
        break;

      case 164:
        var length = bb.readVarUint();
        var values = result["unflatteningMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 228:
        var length = bb.readVarUint();
        var values = result["forceUnflatteningMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPathMapping"](bb);
        break;

      case 214:
        result["publishFile"] = bb.readString();
        break;

      case 395:
        result["sourceLibraryKey"] = bb.readString();
        break;

      case 215:
        result["publishID"] = this["decodeGUID"](bb);
        break;

      case 216:
        result["componentKey"] = bb.readString();
        break;

      case 217:
        result["isC2"] = !!bb.readByte();
        break;

      case 218:
        result["publishedVersion"] = bb.readString();
        break;

      case 252:
        result["originComponentKey"] = bb.readString();
        break;

      case 266:
        var length = bb.readVarUint();
        var values = result["componentPropDefs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropDef"](bb);
        break;

      case 267:
        var length = bb.readVarUint();
        var values = result["componentPropRefs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropRef"](bb);
        break;

      case 483:
        var length = bb.readVarUint();
        var values = result["variantPropSpecs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariantPropSpec"](bb);
        break;

      case 113:
        result["symbolData"] = this["decodeSymbolData"](bb);
        break;

      case 114:
        result["symbolDataTag"] = bb.readVarUint();
        break;

      case 125:
        var length = bb.readVarUint();
        var values = result["derivedSymbolData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 394:
        result["nestedInstanceResizeEnabled"] = !!bb.readByte();
        break;

      case 143:
        result["overriddenSymbolID"] = this["decodeGUID"](bb);
        break;

      case 268:
        var length = bb.readVarUint();
        var values = result["componentPropAssignments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropAssignment"](bb);
        break;

      case 305:
        result["propsAreBubbled"] = !!bb.readByte();
        break;

      case 248:
        var length = bb.readVarUint();
        var values = result["overrideStash"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeInstanceOverrideStash"](bb);
        break;

      case 250:
        var length = bb.readVarUint();
        var values = result["overrideStashV2"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeInstanceOverrideStashV2"](bb);
        break;

      case 111:
        result["guidPath"] = this["decodeGUIDPath"](bb);
        break;

      case 112:
        result["guidPathTag"] = bb.readVarUint();
        break;

      case 321:
        result["overrideLevel"] = bb.readVarInt();
        break;

      case 382:
        result["moduleType"] = this["ModuleType"][bb.readVarUint()];
        break;

      case 463:
        result["isSlot"] = !!bb.readByte();
        break;

      case 495:
        result["isSlotContent"] = !!bb.readByte();
        break;

      case 21:
        result["fontSize"] = bb.readVarFloat();
        break;

      case 73:
        result["fontSizeTag"] = bb.readVarUint();
        break;

      case 22:
        result["paragraphIndent"] = bb.readVarFloat();
        break;

      case 74:
        result["paragraphIndentTag"] = bb.readVarUint();
        break;

      case 23:
        result["paragraphSpacing"] = bb.readVarFloat();
        break;

      case 75:
        result["paragraphSpacingTag"] = bb.readVarUint();
        break;

      case 32:
        result["textAlignHorizontal"] = this["TextAlignHorizontal"][bb.readVarUint()];
        break;

      case 84:
        result["textAlignHorizontalTag"] = bb.readVarUint();
        break;

      case 33:
        result["textAlignVertical"] = this["TextAlignVertical"][bb.readVarUint()];
        break;

      case 85:
        result["textAlignVerticalTag"] = bb.readVarUint();
        break;

      case 34:
        result["textCase"] = this["TextCase"][bb.readVarUint()];
        break;

      case 86:
        result["textCaseTag"] = bb.readVarUint();
        break;

      case 35:
        result["textDecoration"] = this["TextDecoration"][bb.readVarUint()];
        break;

      case 87:
        result["textDecorationTag"] = bb.readVarUint();
        break;

      case 40:
        result["lineHeight"] = this["decodeNumber"](bb);
        break;

      case 92:
        result["lineHeightTag"] = bb.readVarUint();
        break;

      case 41:
        result["fontName"] = this["decodeFontName"](bb);
        break;

      case 93:
        result["fontNameTag"] = bb.readVarUint();
        break;

      case 42:
        result["textData"] = this["decodeTextData"](bb);
        break;

      case 94:
        result["textDataTag"] = bb.readVarUint();
        break;

      case 359:
        result["derivedTextData"] = this["decodeDerivedTextData"](bb);
        break;

      case 127:
        result["fontVariantCommonLigatures"] = !!bb.readByte();
        break;

      case 128:
        result["fontVariantContextualLigatures"] = !!bb.readByte();
        break;

      case 129:
        result["fontVariantDiscretionaryLigatures"] = !!bb.readByte();
        break;

      case 130:
        result["fontVariantHistoricalLigatures"] = !!bb.readByte();
        break;

      case 131:
        result["fontVariantOrdinal"] = !!bb.readByte();
        break;

      case 132:
        result["fontVariantSlashedZero"] = !!bb.readByte();
        break;

      case 133:
        result["fontVariantNumericFigure"] = this["FontVariantNumericFigure"][bb.readVarUint()];
        break;

      case 134:
        result["fontVariantNumericSpacing"] = this["FontVariantNumericSpacing"][bb.readVarUint()];
        break;

      case 135:
        result["fontVariantNumericFraction"] = this["FontVariantNumericFraction"][bb.readVarUint()];
        break;

      case 136:
        result["fontVariantCaps"] = this["FontVariantCaps"][bb.readVarUint()];
        break;

      case 137:
        result["fontVariantPosition"] = this["FontVariantPosition"][bb.readVarUint()];
        break;

      case 165:
        result["letterSpacing"] = this["decodeNumber"](bb);
        break;

      case 202:
        result["fontVersion"] = bb.readString();
        break;

      case 322:
        result["leadingTrim"] = this["LeadingTrim"][bb.readVarUint()];
        break;

      case 337:
        result["hangingPunctuation"] = !!bb.readByte();
        break;

      case 339:
        result["hangingList"] = !!bb.readByte();
        break;

      case 550:
        result["fallbackGlyphs"] = !!bb.readByte();
        break;

      case 351:
        result["maxLines"] = bb.readVarInt();
        break;

      case 417:
        var length = bb.readVarUint();
        var values = result["responsiveTextStyleVariants"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeResponsiveTextStyleVariant"](bb);
        break;

      case 352:
        result["sectionStatus"] = this["SectionStatus"][bb.readVarUint()];
        break;

      case 355:
        result["sectionStatusInfo"] = this["decodeSectionStatusInfo"](bb);
        break;

      case 203:
        result["textUserLayoutVersion"] = bb.readVarUint();
        break;

      case 396:
        result["textExplicitLayoutVersion"] = bb.readVarUint();
        break;

      case 205:
        var length = bb.readVarUint();
        var values = result["toggledOnOTFeatures"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["OpenTypeFeature"][bb.readVarUint()];
        break;

      case 206:
        var length = bb.readVarUint();
        var values = result["toggledOffOTFeatures"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["OpenTypeFeature"][bb.readVarUint()];
        break;

      case 223:
        result["hyperlink"] = this["decodeHyperlink"](bb);
        break;

      case 340:
        result["mention"] = this["decodeMention"](bb);
        break;

      case 260:
        var length = bb.readVarUint();
        var values = result["fontVariations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFontVariation"](bb);
        break;

      case 279:
        result["textBidiVersion"] = bb.readVarUint();
        break;

      case 280:
        result["textTruncation"] = this["TextTruncation"][bb.readVarUint()];
        break;

      case 594:
        result["textWrapStyle"] = this["TextWrapStyle"][bb.readVarUint()];
        break;

      case 292:
        result["hasHadRTLText"] = !!bb.readByte();
        break;

      case 391:
        result["emojiImageSet"] = this["EmojiImageSet"][bb.readVarUint()];
        break;

      case 392:
        result["slideThumbnailHash"] = bb.readString();
        break;

      case 6:
        result["visible"] = !!bb.readByte();
        break;

      case 58:
        result["visibleTag"] = bb.readVarUint();
        break;

      case 7:
        result["locked"] = !!bb.readByte();
        break;

      case 59:
        result["lockedTag"] = bb.readVarUint();
        break;

      case 434:
        result["lockMode"] = this["LockMode"][bb.readVarUint()];
        break;

      case 8:
        result["opacity"] = bb.readVarFloat();
        break;

      case 60:
        result["opacityTag"] = bb.readVarUint();
        break;

      case 9:
        result["blendMode"] = this["BlendMode"][bb.readVarUint()];
        break;

      case 61:
        result["blendModeTag"] = bb.readVarUint();
        break;

      case 11:
        result["size"] = this["decodeVector"](bb);
        break;

      case 63:
        result["sizeTag"] = bb.readVarUint();
        break;

      case 12:
        result["transform"] = this["decodeMatrix"](bb);
        break;

      case 64:
        result["transformTag"] = bb.readVarUint();
        break;

      case 13:
        var length = bb.readVarUint();
        var values = result["dashPattern"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 65:
        result["dashPatternTag"] = bb.readVarUint();
        break;

      case 16:
        result["mask"] = !!bb.readByte();
        break;

      case 68:
        result["maskTag"] = bb.readVarUint();
        break;

      case 424:
        result["rotationOrigin"] = this["decodeVector"](bb);
        break;

      case 18:
        result["maskIsOutline"] = !!bb.readByte();
        break;

      case 70:
        result["maskIsOutlineTag"] = bb.readVarUint();
        break;

      case 317:
        result["maskType"] = this["MaskType"][bb.readVarUint()];
        break;

      case 19:
        result["backgroundOpacity"] = bb.readVarFloat();
        break;

      case 71:
        result["backgroundOpacityTag"] = bb.readVarUint();
        break;

      case 20:
        result["cornerRadius"] = bb.readVarFloat();
        break;

      case 72:
        result["cornerRadiusTag"] = bb.readVarUint();
        break;

      case 26:
        result["strokeWeight"] = bb.readVarFloat();
        break;

      case 78:
        result["strokeWeightTag"] = bb.readVarUint();
        break;

      case 29:
        result["strokeAlign"] = this["StrokeAlign"][bb.readVarUint()];
        break;

      case 81:
        result["strokeAlignTag"] = bb.readVarUint();
        break;

      case 30:
        result["strokeCap"] = this["StrokeCap"][bb.readVarUint()];
        break;

      case 82:
        result["strokeCapTag"] = bb.readVarUint();
        break;

      case 497:
        result["strokeCapSize"] = this["decodeNumber"](bb);
        break;

      case 31:
        result["strokeJoin"] = this["StrokeJoin"][bb.readVarUint()];
        break;

      case 83:
        result["strokeJoinTag"] = bb.readVarUint();
        break;

      case 38:
        var length = bb.readVarUint();
        var values = result["fillPaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 90:
        result["fillPaintsTag"] = bb.readVarUint();
        break;

      case 39:
        var length = bb.readVarUint();
        var values = result["strokePaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 91:
        result["strokePaintsTag"] = bb.readVarUint();
        break;

      case 43:
        var length = bb.readVarUint();
        var values = result["effects"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEffect"](bb);
        break;

      case 95:
        result["effectsTag"] = bb.readVarUint();
        break;

      case 50:
        result["backgroundColor"] = this["decodeColor"](bb);
        break;

      case 102:
        result["backgroundColorTag"] = bb.readVarUint();
        break;

      case 51:
        var length = bb.readVarUint();
        var values = result["fillGeometry"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePath"](bb);
        break;

      case 103:
        result["fillGeometryTag"] = bb.readVarUint();
        break;

      case 52:
        var length = bb.readVarUint();
        var values = result["strokeGeometry"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePath"](bb);
        break;

      case 104:
        result["strokeGeometryTag"] = bb.readVarUint();
        break;

      case 564:
        var length = bb.readVarUint();
        var values = result["offsetFillMaskGeometry"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePath"](bb);
        break;

      case 411:
        var length = bb.readVarUint();
        var values = result["textDecorationFillPaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 412:
        result["textDecorationSkipInk"] = !!bb.readByte();
        break;

      case 413:
        result["textUnderlineOffset"] = this["decodeNumber"](bb);
        break;

      case 415:
        result["textDecorationThickness"] = this["decodeNumber"](bb);
        break;

      case 416:
        result["textDecorationStyle"] = this["TextDecorationStyle"][bb.readVarUint()];
        break;

      case 455:
        var length = bb.readVarUint();
        var values = result["transformModifiers"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTransformModifier"](bb);
        break;

      case 570:
        result["transform3d"] = this["decodeTransform3d"](bb);
        break;

      case 571:
        result["strokeData"] = this["decodeStrokeData"](bb);
        break;

      case 572:
        result["scene3d"] = this["decodeScene3d"](bb);
        break;

      case 587:
        result["transformOrigin"] = this["decodeTransformOrigin"](bb);
        break;

      case 145:
        result["rectangleTopLeftCornerRadius"] = bb.readVarFloat();
        break;

      case 146:
        result["rectangleTopRightCornerRadius"] = bb.readVarFloat();
        break;

      case 147:
        result["rectangleBottomLeftCornerRadius"] = bb.readVarFloat();
        break;

      case 148:
        result["rectangleBottomRightCornerRadius"] = bb.readVarFloat();
        break;

      case 149:
        result["rectangleCornerRadiiIndependent"] = !!bb.readByte();
        break;

      case 150:
        result["rectangleCornerToolIndependent"] = !!bb.readByte();
        break;

      case 151:
        result["proportionsConstrained"] = !!bb.readByte();
        break;

      case 423:
        result["targetAspectRatio"] = this["decodeOptionalVector"](bb);
        break;

      case 258:
        result["useAbsoluteBounds"] = !!bb.readByte();
        break;

      case 287:
        result["borderTopHidden"] = !!bb.readByte();
        break;

      case 288:
        result["borderBottomHidden"] = !!bb.readByte();
        break;

      case 289:
        result["borderLeftHidden"] = !!bb.readByte();
        break;

      case 290:
        result["borderRightHidden"] = !!bb.readByte();
        break;

      case 294:
        result["bordersTakeSpace"] = !!bb.readByte();
        break;

      case 295:
        result["borderTopWeight"] = bb.readVarFloat();
        break;

      case 296:
        result["borderBottomWeight"] = bb.readVarFloat();
        break;

      case 297:
        result["borderLeftWeight"] = bb.readVarFloat();
        break;

      case 298:
        result["borderRightWeight"] = bb.readVarFloat();
        break;

      case 299:
        result["borderStrokeWeightsIndependent"] = !!bb.readByte();
        break;

      case 28:
        result["horizontalConstraint"] = this["ConstraintType"][bb.readVarUint()];
        break;

      case 80:
        result["horizontalConstraintTag"] = bb.readVarUint();
        break;

      case 105:
        result["stackMode"] = this["StackMode"][bb.readVarUint()];
        break;

      case 106:
        result["stackModeTag"] = bb.readVarUint();
        break;

      case 107:
        result["stackSpacing"] = bb.readVarFloat();
        break;

      case 108:
        result["stackSpacingTag"] = bb.readVarUint();
        break;

      case 109:
        result["stackPadding"] = bb.readVarFloat();
        break;

      case 110:
        result["stackPaddingTag"] = bb.readVarUint();
        break;

      case 120:
        result["stackCounterAlign"] = this["StackCounterAlign"][bb.readVarUint()];
        break;

      case 121:
        result["stackJustify"] = this["StackJustify"][bb.readVarUint()];
        break;

      case 208:
        result["stackAlign"] = this["StackAlign"][bb.readVarUint()];
        break;

      case 209:
        result["stackHorizontalPadding"] = bb.readVarFloat();
        break;

      case 210:
        result["stackVerticalPadding"] = bb.readVarFloat();
        break;

      case 211:
        result["stackWidth"] = this["StackSize"][bb.readVarUint()];
        break;

      case 212:
        result["stackHeight"] = this["StackSize"][bb.readVarUint()];
        break;

      case 229:
        result["stackPrimarySizing"] = this["StackSize"][bb.readVarUint()];
        break;

      case 230:
        result["stackPrimaryAlignItems"] = this["StackJustify"][bb.readVarUint()];
        break;

      case 231:
        result["stackCounterAlignItems"] = this["StackAlign"][bb.readVarUint()];
        break;

      case 232:
        result["stackChildPrimaryGrow"] = bb.readVarFloat();
        break;

      case 233:
        result["stackPaddingRight"] = bb.readVarFloat();
        break;

      case 234:
        result["stackPaddingBottom"] = bb.readVarFloat();
        break;

      case 236:
        result["stackChildAlignSelf"] = this["StackCounterAlign"][bb.readVarUint()];
        break;

      case 269:
        result["stackPositioning"] = this["StackPositioning"][bb.readVarUint()];
        break;

      case 271:
        result["stackReverseZIndex"] = !!bb.readByte();
        break;

      case 323:
        result["stackWrap"] = this["StackWrap"][bb.readVarUint()];
        break;

      case 324:
        result["stackCounterSpacing"] = bb.readVarFloat();
        break;

      case 325:
        result["minSize"] = this["decodeOptionalVector"](bb);
        break;

      case 326:
        result["maxSize"] = this["decodeOptionalVector"](bb);
        break;

      case 343:
        result["stackCounterAlignContent"] = this["StackCounterAlignContent"][bb.readVarUint()];
        break;

      case 406:
        var length = bb.readVarUint();
        var values = result["sortedMovingChildIndices"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarInt();
        break;

      case 574:
        result["stackLayoutVersion"] = bb.readVarUint();
        break;

      case 435:
        result["gridRows"] = this["decodeGUIDPositionMap"](bb);
        break;

      case 436:
        result["gridColumns"] = this["decodeGUIDPositionMap"](bb);
        break;

      case 437:
        result["gridRowGap"] = bb.readVarFloat();
        break;

      case 438:
        result["gridColumnGap"] = bb.readVarFloat();
        break;

      case 439:
        result["gridRowAnchor"] = this["decodeGUID"](bb);
        break;

      case 440:
        result["gridColumnAnchor"] = this["decodeGUID"](bb);
        break;

      case 441:
        result["gridRowSpan"] = bb.readVarUint();
        break;

      case 442:
        result["gridColumnSpan"] = bb.readVarUint();
        break;

      case 474:
        result["gridColumnsSizing"] = this["decodeGUIDGridTrackSizeMap"](bb);
        break;

      case 475:
        result["gridRowsSizing"] = this["decodeGUIDGridTrackSizeMap"](bb);
        break;

      case 476:
        result["gridChildVerticalAlign"] = this["GridChildAlign"][bb.readVarUint()];
        break;

      case 477:
        result["gridChildHorizontalAlign"] = this["GridChildAlign"][bb.readVarUint()];
        break;

      case 555:
        result["gridAutoTracks"] = this["GridAutoTracks"][bb.readVarUint()];
        break;

      case 556:
        result["gridReflowEnabled"] = !!bb.readByte();
        break;

      case 344:
        result["isSnakeGameBoard"] = !!bb.readByte();
        break;

      case 139:
        result["transitionNodeID"] = this["decodeGUID"](bb);
        break;

      case 140:
        result["prototypeStartNodeID"] = this["decodeGUID"](bb);
        break;

      case 141:
        result["prototypeBackgroundColor"] = this["decodeColor"](bb);
        break;

      case 153:
        result["transitionInfo"] = this["decodeTransitionInfo"](bb);
        break;

      case 154:
        result["transitionType"] = this["TransitionType"][bb.readVarUint()];
        break;

      case 155:
        result["transitionDuration"] = bb.readVarFloat();
        break;

      case 156:
        result["easingType"] = this["EasingType"][bb.readVarUint()];
        break;

      case 181:
        result["transitionPreserveScroll"] = !!bb.readByte();
        break;

      case 182:
        result["connectionType"] = this["ConnectionType"][bb.readVarUint()];
        break;

      case 183:
        result["connectionURL"] = bb.readString();
        break;

      case 184:
        result["prototypeDevice"] = this["decodePrototypeDevice"](bb);
        break;

      case 187:
        result["interactionType"] = this["InteractionType"][bb.readVarUint()];
        break;

      case 188:
        result["transitionTimeout"] = bb.readVarFloat();
        break;

      case 189:
        result["interactionMaintained"] = !!bb.readByte();
        break;

      case 190:
        result["interactionDuration"] = bb.readVarFloat();
        break;

      case 192:
        result["destinationIsOverlay"] = !!bb.readByte();
        break;

      case 207:
        result["transitionShouldSmartAnimate"] = !!bb.readByte();
        break;

      case 226:
        var length = bb.readVarUint();
        var values = result["prototypeInteractions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePrototypeInteraction"](bb);
        break;

      case 426:
        var length = bb.readVarUint();
        var values = result["objectAnimations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePrototypeInteraction"](bb);
        break;

      case 249:
        result["prototypeStartingPoint"] = this["decodePrototypeStartingPoint"](bb);
        break;

      case 204:
        var length = bb.readVarUint();
        var values = result["pluginData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePluginData"](bb);
        break;

      case 219:
        var length = bb.readVarUint();
        var values = result["pluginRelaunchData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePluginRelaunchData"](bb);
        break;

      case 242:
        result["connectorStart"] = this["decodeConnectorEndpoint"](bb);
        break;

      case 243:
        result["connectorEnd"] = this["decodeConnectorEndpoint"](bb);
        break;

      case 244:
        result["connectorLineStyle"] = this["ConnectorLineStyle"][bb.readVarUint()];
        break;

      case 245:
        result["connectorStartCap"] = this["StrokeCap"][bb.readVarUint()];
        break;

      case 246:
        result["connectorEndCap"] = this["StrokeCap"][bb.readVarUint()];
        break;

      case 253:
        var length = bb.readVarUint();
        var values = result["connectorControlPoints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeConnectorControlPoint"](bb);
        break;

      case 479:
        var length = bb.readVarUint();
        var values = result["connectorBezierControlPoints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeConnectorControlPoint"](bb);
        break;

      case 255:
        result["connectorTextMidpoint"] = this["decodeConnectorTextMidpoint"](bb);
        break;

      case 373:
        result["connectorType"] = this["ConnectorType"][bb.readVarUint()];
        break;

      case 533:
        result["connectorVersion"] = bb.readVarInt();
        break;

      case 369:
        var length = bb.readVarUint();
        var values = result["annotations"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnnotation"](bb);
        break;

      case 384:
        var length = bb.readVarUint();
        var values = result["measurements"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnnotationMeasurement"](bb);
        break;

      case 453:
        result["annotationCategories"] = this["decodeAnnotationCategories"](bb);
        break;

      case 241:
        result["shapeWithTextType"] = this["ShapeWithTextType"][bb.readVarUint()];
        break;

      case 247:
        result["shapeUserHeight"] = bb.readVarFloat();
        break;

      case 530:
        result["isStrokePaintDerived"] = !!bb.readByte();
        break;

      case 254:
        result["derivedImmutableFrameData"] = this["decodeDerivedImmutableFrameData"](bb);
        break;

      case 338:
        result["derivedImmutableFrameDataVersion"] = this["decodeMultiplayerFieldVersion"](bb);
        break;

      case 240:
        result["nodeGenerationData"] = this["decodeNodeGenerationData"](bb);
        break;

      case 491:
        result["jsxData"] = this["decodeJsxData"](bb);
        break;

      case 492:
        result["derivedJsxData"] = this["decodeDerivedJsxData"](bb);
        break;

      case 493:
        result["stableKey"] = bb.readString();
        break;

      case 259:
        result["codeBlockLanguage"] = this["CodeBlockLanguage"][bb.readVarUint()];
        break;

      case 433:
        result["codeBlockTheme"] = this["CodeBlockTheme"][bb.readVarUint()];
        break;

      case 278:
        result["linkPreviewData"] = this["decodeLinkPreviewData"](bb);
        break;

      case 282:
        result["shapeTruncates"] = !!bb.readByte();
        break;

      case 283:
        result["sectionContentsHidden"] = !!bb.readByte();
        break;

      case 300:
        result["videoPlayback"] = this["decodeVideoPlayback"](bb);
        break;

      case 301:
        result["stampData"] = this["decodeStampData"](bb);
        break;

      case 370:
        result["sectionPresetInfo"] = this["decodeSectionPresetInfo"](bb);
        break;

      case 409:
        result["platformShapeDefinition"] = this["decodePlatformShapeDefinition"](bb);
        break;

      case 273:
        result["widgetSyncedState"] = this["decodeMultiplayerMap"](bb);
        break;

      case 274:
        result["widgetSyncCursor"] = bb.readVarUint();
        break;

      case 275:
        result["widgetDerivedSubtreeCursor"] = this["decodeWidgetDerivedSubtreeCursor"](bb);
        break;

      case 276:
        result["widgetCachedAncestor"] = this["decodeWidgetPointer"](bb);
        break;

      case 285:
        result["widgetInputBehavior"] = this["WidgetInputBehavior"][bb.readVarUint()];
        break;

      case 286:
        result["widgetTooltip"] = bb.readString();
        break;

      case 291:
        result["widgetHoverStyle"] = this["decodeWidgetHoverStyle"](bb);
        break;

      case 293:
        result["isWidgetStickable"] = !!bb.readByte();
        break;

      case 360:
        result["shouldHideCursorsOnWidgetHover"] = !!bb.readByte();
        break;

      case 262:
        result["widgetMetadata"] = this["decodeWidgetMetadata"](bb);
        break;

      case 263:
        var length = bb.readVarUint();
        var values = result["widgetEvents"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["WidgetEvent"][bb.readVarUint()];
        break;

      case 265:
        var length = bb.readVarUint();
        var values = result["widgetPropertyMenuItems"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeWidgetPropertyMenuItem"](bb);
        break;

      case 401:
        result["widgetInputTextNodeType"] = this["WidgetInputTextNodeType"][bb.readVarUint()];
        break;

      case 489:
        result["jsxProps"] = this["decodeMultiplayerMap"](bb);
        break;

      case 308:
        result["tableRowPositions"] = this["decodeTableRowColumnPositionMap"](bb);
        break;

      case 309:
        result["tableColumnPositions"] = this["decodeTableRowColumnPositionMap"](bb);
        break;

      case 310:
        result["tableRowHeights"] = this["decodeTableRowColumnSizeMap"](bb);
        break;

      case 311:
        result["tableColumnWidths"] = this["decodeTableRowColumnSizeMap"](bb);
        break;

      case 538:
        result["tableMergedCells"] = this["decodeTableMergedCellMap"](bb);
        break;

      case 371:
        result["interactiveSlideConfigData"] = this["decodeMultiplayerMap"](bb);
        break;

      case 372:
        result["interactiveSlideParticipantData"] = this["decodeMultiplayerMap"](bb);
        break;

      case 402:
        result["flappType"] = this["FlappType"][bb.readVarUint()];
        break;

      case 486:
        result["isEmbeddedPrototype"] = !!bb.readByte();
        break;

      case 389:
        result["slideSpeakerNotes"] = bb.readString();
        break;

      case 410:
        result["isSkippedSlide"] = !!bb.readByte();
        break;

      case 573:
        result["presentationOutlines"] = this["decodeMultiplayerMap"](bb);
        break;

      case 379:
        result["themeID"] = this["decodeThemeID"](bb);
        break;

      case 381:
        result["slideThemeData"] = this["decodeSlideThemeData"](bb);
        break;

      case 390:
        result["slideThemeMap"] = this["decodeSlideThemeMap"](bb);
        break;

      case 393:
        result["slideTemplateFileKey"] = bb.readString();
        break;

      case 443:
        result["slideNumber"] = this["SlideNumber"][bb.readVarUint()];
        break;

      case 456:
        result["slideNumberSeparator"] = bb.readString();
        break;

      case 363:
        result["diagramParentId"] = this["decodeGUID"](bb);
        break;

      case 362:
        result["layoutRoot"] = this["decodeGUID"](bb);
        break;

      case 364:
        result["layoutPosition"] = bb.readString();
        break;

      case 366:
        result["diagramLayoutRuleType"] = this["DiagramLayoutRuleType"][bb.readVarUint()];
        break;

      case 367:
        result["diagramParentIndex"] = this["decodeDiagramParentIndex"](bb);
        break;

      case 368:
        result["diagramLayoutPaused"] = this["DiagramLayoutPaused"][bb.readVarUint()];
        break;

      case 380:
        result["isPageDivider"] = !!bb.readByte();
        break;

      case 251:
        result["internalEnumForTest"] = this["InternalEnumForTest"][bb.readVarUint()];
        break;

      case 257:
        result["internalDataForTest"] = this["decodeInternalDataForTest"](bb);
        break;

      case 14:
        result["autoRename"] = !!bb.readByte();
        break;

      case 66:
        result["autoRenameTag"] = bb.readVarUint();
        break;

      case 15:
        result["backgroundEnabled"] = !!bb.readByte();
        break;

      case 67:
        result["backgroundEnabledTag"] = bb.readVarUint();
        break;

      case 17:
        result["exportContentsOnly"] = !!bb.readByte();
        break;

      case 69:
        result["exportContentsOnlyTag"] = bb.readVarUint();
        break;

      case 25:
        result["miterLimit"] = bb.readVarFloat();
        break;

      case 77:
        result["miterLimitTag"] = bb.readVarUint();
        break;

      case 27:
        result["textTracking"] = bb.readVarFloat();
        break;

      case 79:
        result["textTrackingTag"] = bb.readVarUint();
        break;

      case 37:
        result["verticalConstraint"] = this["ConstraintType"][bb.readVarUint()];
        break;

      case 89:
        result["verticalConstraintTag"] = bb.readVarUint();
        break;

      case 45:
        var length = bb.readVarUint();
        var values = result["exportSettings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeExportSettings"](bb);
        break;

      case 97:
        result["exportSettingsTag"] = bb.readVarUint();
        break;

      case 46:
        result["textAutoResize"] = this["TextAutoResize"][bb.readVarUint()];
        break;

      case 98:
        result["textAutoResizeTag"] = bb.readVarUint();
        break;

      case 47:
        var length = bb.readVarUint();
        var values = result["layoutGrids"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeLayoutGrid"](bb);
        break;

      case 99:
        result["layoutGridsTag"] = bb.readVarUint();
        break;

      case 115:
        result["frameMaskDisabled"] = !!bb.readByte();
        break;

      case 116:
        result["frameMaskDisabledTag"] = bb.readVarUint();
        break;

      case 117:
        result["resizeToFit"] = !!bb.readByte();
        break;

      case 118:
        result["resizeToFitTag"] = bb.readVarUint();
        break;

      case 36:
        result["booleanOperation"] = this["BooleanOperation"][bb.readVarUint()];
        break;

      case 88:
        result["booleanOperationTag"] = bb.readVarUint();
        break;

      case 44:
        result["handleMirroring"] = this["VectorMirror"][bb.readVarUint()];
        break;

      case 96:
        result["handleMirroringTag"] = bb.readVarUint();
        break;

      case 10:
        result["count"] = bb.readVarUint();
        break;

      case 62:
        result["countTag"] = bb.readVarUint();
        break;

      case 24:
        result["starInnerScale"] = bb.readVarFloat();
        break;

      case 76:
        result["starInnerScaleTag"] = bb.readVarUint();
        break;

      case 195:
        result["arcData"] = this["decodeArcData"](bb);
        break;

      case 48:
        result["vectorData"] = this["decodeVectorData"](bb);
        break;

      case 100:
        result["vectorDataTag"] = bb.readVarUint();
        break;

      case 425:
        result["vectorOperationVersion"] = bb.readVarUint();
        break;

      case 432:
        result["textPathStart"] = this["decodeTextPathStart"](bb);
        break;

      case 119:
        result["exportBackgroundDisabled"] = !!bb.readByte();
        break;

      case 138:
        var length = bb.readVarUint();
        var values = result["guides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGuide"](bb);
        break;

      case 142:
        result["internalOnly"] = !!bb.readByte();
        break;

      case 159:
        result["scrollDirection"] = this["ScrollDirection"][bb.readVarUint()];
        break;

      case 160:
        result["cornerSmoothing"] = bb.readVarFloat();
        break;

      case 166:
        result["scrollOffset"] = this["decodeVector"](bb);
        break;

      case 175:
        result["exportTextAsSVGText"] = !!bb.readByte();
        break;

      case 178:
        result["scrollContractedState"] = this["ScrollContractedState"][bb.readVarUint()];
        break;

      case 179:
        result["contractedSize"] = this["decodeVector"](bb);
        break;

      case 180:
        result["fixedChildrenDivider"] = bb.readString();
        break;

      case 186:
        result["scrollBehavior"] = this["ScrollBehavior"][bb.readVarUint()];
        break;

      case 196:
        result["derivedSymbolDataLayoutVersion"] = bb.readVarInt();
        break;

      case 197:
        result["navigationType"] = this["NavigationType"][bb.readVarUint()];
        break;

      case 198:
        result["overlayPositionType"] = this["OverlayPositionType"][bb.readVarUint()];
        break;

      case 199:
        result["overlayRelativePosition"] = this["decodeVector"](bb);
        break;

      case 200:
        result["overlayBackgroundInteraction"] = this["OverlayBackgroundInteraction"][bb.readVarUint()];
        break;

      case 201:
        result["overlayBackgroundAppearance"] = this["decodeOverlayBackgroundAppearance"](bb);
        break;

      case 213:
        result["overrideKey"] = this["decodeGUID"](bb);
        break;

      case 220:
        result["containerSupportsFillStrokeAndCorners"] = !!bb.readByte();
        break;

      case 221:
        result["stackCounterSizing"] = this["StackSize"][bb.readVarUint()];
        break;

      case 222:
        result["containersSupportFillStrokeAndCorners"] = !!bb.readByte();
        break;

      case 224:
        result["keyTrigger"] = this["decodeKeyTrigger"](bb);
        break;

      case 227:
        result["voiceEventPhrase"] = bb.readString();
        break;

      case 235:
        var length = bb.readVarUint();
        var values = result["ancestorPathBeforeDeletion"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 237:
        var length = bb.readVarUint();
        var values = result["symbolLinks"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeSymbolLink"](bb);
        break;

      case 239:
        result["textListData"] = this["decodeTextListData"](bb);
        break;

      case 261:
        result["detachOpticalSizeFromFontSize"] = !!bb.readByte();
        break;

      case 264:
        result["listSpacing"] = bb.readVarFloat();
        break;

      case 270:
        result["embedData"] = this["decodeEmbedData"](bb);
        break;

      case 272:
        result["richMediaData"] = this["decodeRichMediaData"](bb);
        break;

      case 277:
        result["renderedSyncedState"] = this["decodeMultiplayerMap"](bb);
        break;

      case 284:
        result["simplifyInstancePanels"] = !!bb.readByte();
        break;

      case 302:
        result["accessibleHTMLTag"] = this["HTMLTag"][bb.readVarUint()];
        break;

      case 303:
        result["ariaRole"] = this["ARIARole"][bb.readVarUint()];
        break;

      case 357:
        result["ariaAttributes"] = this["decodeARIAAttributesMap"](bb);
        break;

      case 304:
        result["accessibleLabel"] = bb.readString();
        break;

      case 490:
        result["isDecorativeImage"] = !!bb.readByte();
        break;

      case 306:
        result["variableData"] = this["decodeVariableData"](bb);
        break;

      case 307:
        result["variableConsumptionMap"] = this["decodeVariableDataMap"](bb);
        break;

      case 316:
        result["variableModeBySetMap"] = this["decodeVariableModeBySetMap"](bb);
        break;

      case 312:
        var length = bb.readVarUint();
        var values = result["variableSetModes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableSetMode"](bb);
        break;

      case 313:
        result["variableSetID"] = this["decodeVariableSetID"](bb);
        break;

      case 314:
        result["variableResolvedType"] = this["VariableResolvedDataType"][bb.readVarUint()];
        break;

      case 315:
        result["variableDataValues"] = this["decodeVariableDataValues"](bb);
        break;

      case 350:
        result["variableTokenName"] = bb.readString();
        break;

      case 566:
        result["timingDisplayUnit"] = this["VariableTimingDisplayUnit"][bb.readVarUint()];
        break;

      case 353:
        var length = bb.readVarUint();
        var values = result["variableScopes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["VariableScope"][bb.readVarUint()];
        break;

      case 445:
        result["parameterConsumptionMap"] = this["decodeVariableDataMap"](bb);
        break;

      case 358:
        result["codeSyntax"] = this["decodeCodeSyntaxMap"](bb);
        break;

      case 388:
        result["pasteSource"] = this["decodePasteSource"](bb);
        break;

      case 397:
        result["pageType"] = this["EditorType"][bb.readVarUint()];
        break;

      case 446:
        result["strokeBrushGuid"] = this["decodeGUID"](bb);
        break;

      case 482:
        result["strokeSeed"] = bb.readVarUint64();
        break;

      case 447:
        var length = bb.readVarUint();
        var values = result["variableWidthPoints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableWidthPoint"](bb);
        break;

      case 448:
        result["dynamicStrokeSettings"] = this["decodeDynamicStrokeSettings"](bb);
        break;

      case 449:
        result["scatterStrokeSettings"] = this["decodeScatterStrokeSettings"](bb);
        break;

      case 450:
        result["stretchStrokeSettings"] = this["decodeStretchStrokeSettings"](bb);
        break;

      case 488:
        var length = bb.readVarUint();
        var values = result["scatterBrushTransforms"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMatrix"](bb);
        break;

      case 452:
        result["brushType"] = this["BrushType"][bb.readVarUint()];
        break;

      case 542:
        result["pathTrim"] = this["decodeOptionalVector"](bb);
        break;

      case 554:
        result["strokeOffset"] = bb.readVarFloat();
        break;

      case 377:
        result["backingVariableSetId"] = this["decodeVariableSetID"](bb);
        break;

      case 464:
        result["overriddenVariableId"] = this["decodeVariableID"](bb);
        break;

      case 378:
        result["backingVariableId"] = this["decodeVariableIdOrVariableOverrideId"](bb);
        break;

      case 385:
        result["isCollectionExtendable"] = !!bb.readByte();
        break;

      case 386:
        result["rootVariableKey"] = bb.readString();
        break;

      case 517:
        result["inheritedVariableIds"] = this["decodeInheritedVariablesData"](bb);
        break;

      case 361:
        result["handoffStatusMap"] = this["decodeHandoffStatusMap"](bb);
        break;

      case 327:
        result["agendaPositionMap"] = this["decodeAgendaPositionMap"](bb);
        break;

      case 328:
        result["agendaMetadataMap"] = this["decodeAgendaMetadataMap"](bb);
        break;

      case 329:
        result["migrationStatus"] = this["decodeMigrationStatus"](bb);
        break;

      case 330:
        result["isSoftDeleted"] = !!bb.readByte();
        break;

      case 331:
        result["editInfo"] = this["decodeEditInfo"](bb);
        break;

      case 341:
        result["colorProfile"] = this["ColorProfile"][bb.readVarUint()];
        break;

      case 342:
        result["detachedSymbolId"] = this["decodeSymbolId"](bb);
        break;

      case 346:
        result["childReadingDirection"] = this["ChildReadingDirection"][bb.readVarUint()];
        break;

      case 347:
        result["readingIndex"] = bb.readString();
        break;

      case 349:
        result["documentColorProfile"] = this["DocumentColorProfile"][bb.readVarUint()];
        break;

      case 354:
        var length = bb.readVarUint();
        var values = result["developerRelatedLinks"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDeveloperRelatedLink"](bb);
        break;

      case 356:
        result["slideActiveThemeLibKey"] = bb.readString();
        break;

      case 365:
        result["editScopeInfo"] = this["decodeEditScopeInfo"](bb);
        break;

      case 374:
        result["semanticWeight"] = this["SemanticWeight"][bb.readVarUint()];
        break;

      case 375:
        result["semanticItalic"] = this["SemanticItalic"][bb.readVarUint()];
        break;

      case 403:
        result["areSlidesManuallyIndented"] = !!bb.readByte();
        break;

      case 387:
        result["isResponsiveSet"] = !!bb.readByte();
        break;

      case 500:
        result["derivedBreakpointData"] = this["decodeDerivedBreakpointData"](bb);
        break;

      case 398:
        result["defaultResponsiveSetId"] = this["decodeGUID"](bb);
        break;

      case 458:
        result["isPrimaryBreakpoint"] = !!bb.readByte();
        break;

      case 457:
        result["primaryResponsiveNodeId"] = this["decodeGUID"](bb);
        break;

      case 462:
        result["multiEditGlueId"] = this["decodeGUID"](bb);
        break;

      case 501:
        result["breakpointMinWidth"] = bb.readVarFloat();
        break;

      case 522:
        result["isBreakpointInFocus"] = !!bb.readByte();
        break;

      case 400:
        result["responsiveSetSettings"] = this["decodeResponsiveSetSettings"](bb);
        break;

      case 404:
        result["behaviors"] = this["decodeNodeBehaviors"](bb);
        break;

      case 414:
        result["sourceCode"] = bb.readString();
        break;

      case 534:
        var length = bb.readVarUint();
        var values = result["sourceCodeCollaborativeTextVersion"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCollaborativeTextOpID"](bb);
        break;

      case 444:
        result["collaborativeSourceCode"] = this["decodeCollaborativePlainText"](bb);
        break;

      case 427:
        result["belongsToCodeLibraryId"] = this["decodeCodeLibraryId"](bb);
        break;

      case 467:
        result["importedCodeFiles"] = this["decodeImportedCodeFiles"](bb);
        break;

      case 468:
        result["codeFileCanvasNodeId"] = this["decodeCanvasNodeId"](bb);
        break;

      case 498:
        result["isEntrypointCodeFile"] = !!bb.readByte();
        break;

      case 502:
        result["componentOrStateGroupKey"] = bb.readString();
        break;

      case 503:
        result["componentOrStateGroupVersion"] = bb.readVarUint();
        break;

      case 504:
        result["sourceCodeLibraryKey"] = bb.readString();
        break;

      case 515:
        var length = bb.readVarUint();
        var values = result["sourceCodeLibraryKeys"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      case 524:
        var length = bb.readVarUint();
        var values = result["usedMakeLibraries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeUsedMakeLibrary"](bb);
        break;

      case 518:
        result["makeLibraryComponentId"] = bb.readString();
        break;

      case 520:
        result["shouldHidePreviewForMakeKitCreation"] = !!bb.readByte();
        break;

      case 551:
        result["isMakeKit"] = !!bb.readByte();
        break;

      case 531:
        result["codePreviewSettings"] = this["decodePrototypeDevice"](bb);
        break;

      case 525:
        var length = bb.readVarUint();
        var values = result["codeExamples"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCodeExample"](bb);
        break;

      case 428:
        result["exportedFromCodeFileId"] = this["decodeCodeFileId"](bb);
        break;

      case 430:
        result["codeExportName"] = bb.readString();
        break;

      case 547:
        result["codeComponentDescription"] = bb.readString();
        break;

      case 429:
        result["backingCodeComponentId"] = this["decodeCodeComponentId"](bb);
        break;

      case 487:
        result["isMainCodeComponent"] = !!bb.readByte();
        break;

      case 431:
        result["codeSnapshotState"] = this["CodeSnapshotState"][bb.readVarUint()];
        break;

      case 451:
        var length = bb.readVarUint();
        var values = result["chatMessages"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChatMessage"](bb);
        break;

      case 485:
        result["chatCompressionState"] = this["decodeNodeChatCompressionState"](bb);
        break;

      case 496:
        result["aiChatThread"] = this["decodeAIChatThread"](bb);
        break;

      case 484:
        result["codeChatMessagesKey"] = bb.readString();
        break;

      case 459:
        result["codeSnapshot"] = this["decodeCodeSnapshot"](bb);
        break;

      case 589:
        result["codeSnapshotLayers"] = this["decodeCodeSnapshotLayers"](bb);
        break;

      case 480:
        result["codeSnapshotInvalidatedAt"] = bb.readVarUint();
        break;

      case 465:
        result["isCodeBehavior"] = !!bb.readByte();
        break;

      case 469:
        result["autoForkCode"] = !!bb.readByte();
        break;

      case 470:
        result["hasBeenManuallyRenamed"] = !!bb.readByte();
        break;

      case 471:
        result["codeCreatedFromDesign"] = !!bb.readByte();
        break;

      case 481:
        result["codeCreatedFromDesignNodeId"] = this["decodeCanvasNodeId"](bb);
        break;

      case 473:
        result["imageImports"] = this["decodeImageImportMap"](bb);
        break;

      case 516:
        result["codeObjectType"] = this["CodeObjectType"][bb.readVarUint()];
        break;

      case 472:
        result["codeFilePath"] = bb.readString();
        break;

      case 478:
        result["codeBehaviorData"] = this["decodeCodeBehaviorData"](bb);
        break;

      case 519:
        result["codeLibraryFormat"] = bb.readVarUint();
        break;

      case 527:
        result["isCodePreviewPlayingOnCanvas"] = !!bb.readByte();
        break;

      case 532:
        result["codeEmbedInfo"] = this["decodeCodeEmbedInfo"](bb);
        break;

      case 546:
        result["isEmbedCodeLayer"] = !!bb.readByte();
        break;

      case 558:
        result["codeSourceInfo"] = this["decodeCodeSourceInfo"](bb);
        break;

      case 536:
        result["mimeType"] = bb.readString();
        break;

      case 537:
        result["blobRef"] = bb.readByteArray();
        break;

      case 419:
        result["cmsSelector"] = this["decodeCMSSelector"](bb);
        break;

      case 420:
        result["cmsConsumptionMap"] = this["decodeCMSConsumptionMap"](bb);
        break;

      case 460:
        result["cmsRichTextStyleMap"] = this["decodeCMSRichTextStyleMap"](bb);
        break;

      case 539:
        result["repeaterSymbolId"] = this["decodeSymbolId"](bb);
        break;

      case 540:
        result["repeaterCmsOverrideData"] = this["decodeRepeaterCmsOverrideData"](bb);
        break;

      case 549:
        result["repeaterSymbolOverrideData"] = this["decodeRepeaterSymbolOverrideData"](bb);
        break;

      case 541:
        result["repeaterOverrideData"] = this["decodeRepeaterOverrideData"](bb);
        break;

      case 405:
        var length = bb.readVarUint();
        var values = result["aiEditedNodeChangeFieldNumbers"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 408:
        result["aiEditScopeLabel"] = bb.readString();
        break;

      case 407:
        result["firstDraftData"] = this["decodeFirstDraftData"](bb);
        break;

      case 418:
        result["firstDraftKitElementData"] = this["decodeFirstDraftKitElementData"](bb);
        break;

      case 421:
        result["cooperRevertData"] = this["decodeCooperRevertData"](bb);
        break;

      case 461:
        result["cooperTemplateData"] = this["decodeCooperTemplateData"](bb);
        break;

      case 528:
        result["buzzApprovalRequests"] = this["decodeBuzzApprovalRequests"](bb);
        break;

      case 529:
        result["buzzApprovalNodeStatusInfo"] = this["decodeBuzzApprovalNodeStatusInfo"](bb);
        break;

      case 422:
        result["hubFileAttribution"] = this["decodeHubFileAttribution"](bb);
        break;

      case 454:
        result["managedStringData"] = this["decodeManagedStringData"](bb);
        break;

      case 466:
        result["thumbnailInfo"] = this["decodeThumbnailInfo"](bb);
        break;

      case 494:
        result["aiCanvasPrompt"] = this["decodeAiCanvasPrompt"](bb);
        break;

      case 499:
        result["backingNodeId"] = this["decodeCanvasNodeId"](bb);
        break;

      case 548:
        result["pageStatus"] = bb.readString();
        break;

      case 523:
        result["motionTransform"] = this["decodeTRSSTransform2D"](bb);
        break;

      case 597:
        result["linkMotionScaleAspectRatio"] = !!bb.readByte();
        break;

      case 506:
        result["timelinePosition"] = bb.readVarInt64();
        break;

      case 507:
        result["keyframeValue"] = this["decodeKeyframeValueData"](bb);
        break;

      case 586:
        result["keyframeValueRef"] = this["decodeVariableData"](bb);
        break;

      case 505:
        result["interpolationType"] = this["InterpolationType"][bb.readVarUint()];
        break;

      case 508:
        result["bezierHandles"] = this["decodeBezierHandles"](bb);
        break;

      case 535:
        result["easingData"] = this["decodeEasingData"](bb);
        break;

      case 598:
        result["motionPathBezierHandles"] = this["decodeBezierHandles"](bb);
        break;

      case 599:
        result["interpolationColorSpace"] = this["InterpolationColorSpace"][bb.readVarUint()];
        break;

      case 600:
        result["interpolationHueMethod"] = this["InterpolationHueMethod"][bb.readVarUint()];
        break;

      case 509:
        result["keyframeOperation"] = this["KeyframeOperation"][bb.readVarUint()];
        break;

      case 510:
        result["timelinePositionType"] = this["TimelinePositionType"][bb.readVarUint()];
        break;

      case 591:
        result["trackLoopMode"] = this["TrackLoopMode"][bb.readVarUint()];
        break;

      case 545:
        result["isClip"] = !!bb.readByte();
        break;

      case 511:
        result["clipId"] = this["decodeGUID"](bb);
        break;

      case 512:
        result["timelineDuration"] = bb.readVarUint64();
        break;

      case 513:
        result["timelineOffset"] = bb.readVarInt64();
        break;

      case 543:
        result["timelineDisabled"] = !!bb.readByte();
        break;

      case 514:
        result["playbackStyle"] = this["PlaybackStyle"][bb.readVarUint()];
        break;

      case 552:
        result["timelineDefinitions"] = this["decodeTimelineDefinitionsMap"](bb);
        break;

      case 553:
        result["timelineAssignments"] = this["decodeTimelineAssignmentsMap"](bb);
        break;

      case 521:
        result["animationPresets"] = this["decodeAnimationPresets"](bb);
        break;

      case 582:
        var length = bb.readVarUint();
        var values = result["styleIdsForAnimation"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStyleIdForAnimation"](bb);
        break;

      case 583:
        result["backingAnimationPresetId"] = this["decodeAnimationPresetId"](bb);
        break;

      case 568:
        result["tools"] = this["decodeTools"](bb);
        break;

      case 569:
        result["customEffects"] = this["decodeCustomEffects"](bb);
        break;

      case 526:
        result["transitionOverrides"] = this["decodeTransitionOverrideData"](bb);
        break;

      case 544:
        result["useLegacySmartAnimate"] = !!bb.readByte();
        break;

      case 557:
        result["sourceControlConfig"] = this["decodeSourceControlConfig"](bb);
        break;

      case 595:
        result["makeContentState"] = this["MakeContentState"][bb.readVarUint()];
        break;

      case 559:
        result["specBlockType"] = this["SpecBlockType"][bb.readVarUint()];
        break;

      case 560:
        result["specBlockContent"] = this["decodeCollaborativePlainText"](bb);
        break;

      case 561:
        result["specCodeBlockLanguage"] = bb.readString();
        break;

      case 562:
        result["specBlockTableAlignment"] = bb.readString();
        break;

      case 563:
        result["specBlockIndentLevel"] = bb.readVarInt();
        break;

      case 575:
        result["specImageHash"] = bb.readString();
        break;

      case 576:
        result["specWidth"] = bb.readVarInt();
        break;

      case 577:
        result["specHeight"] = bb.readVarInt();
        break;

      case 578:
        result["specBlockTableRowHeights"] = this["decodeTableRowColumnSizeMap"](bb);
        break;

      case 579:
        result["specBlockTableColumnWidths"] = this["decodeTableRowColumnSizeMap"](bb);
        break;

      case 590:
        result["specEmbedUrl"] = bb.readString();
        break;

      case 565:
        result["placeholder"] = !!bb.readByte();
        break;

      case 584:
        result["placeholderClientLifecycleId"] = bb.readString();
        break;

      case 585:
        result["placeholderInvalidateAt"] = bb.readVarInt();
        break;

      case 567:
        result["disableJitDst"] = !!bb.readByte();
        break;

      case 588:
        result["customToolArtifactRef"] = this["decodeCustomToolArtifactRef"](bb);
        break;

      case 592:
        result["weaveConnection"] = this["decodeWeaveConnection"](bb);
        break;

      case 593:
        var length = bb.readVarUint();
        var values = result["weaveLayerConnections"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeWeaveLayerConnection"](bb);
        break;

      case 596:
        result["weaveLayerId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["guidTag"];
  if (value != null) {
    bb.writeVarUint(53);
    bb.writeVarUint(value);
  }

  var value = message["phase"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NodePhase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodePhase\""); bb.writeVarUint(encoded);
  }

  var value = message["phaseTag"];
  if (value != null) {
    bb.writeVarUint(54);
    bb.writeVarUint(value);
  }

  var value = message["parentIndex"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeParentIndex"](value, bb);
  }

  var value = message["parentIndexTag"];
  if (value != null) {
    bb.writeVarUint(55);
    bb.writeVarUint(value);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["NodeType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodeType\""); bb.writeVarUint(encoded);
  }

  var value = message["typeTag"];
  if (value != null) {
    bb.writeVarUint(56);
    bb.writeVarUint(value);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["nameTag"];
  if (value != null) {
    bb.writeVarUint(57);
    bb.writeVarUint(value);
  }

  var value = message["isPublishable"];
  if (value != null) {
    bb.writeVarUint(174);
    bb.writeByte(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(318);
    bb.writeString(value);
  }

  var value = message["libraryMoveInfo"];
  if (value != null) {
    bb.writeVarUint(256);
    this["encodeLibraryMoveInfo"](value, bb);
  }

  var value = message["libraryMoveHistory"];
  if (value != null) {
    bb.writeVarUint(281);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeLibraryMoveHistoryItem"](value, bb);
    }
  }

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(319);
    bb.writeString(value);
  }

  var value = message["fileAssetIds"];
  if (value != null) {
    bb.writeVarUint(383);
    this["encodeAssetIdMap"](value, bb);
  }

  var value = message["styleID"];
  if (value != null) {
    bb.writeVarUint(49);
    bb.writeVarUint(value);
  }

  var value = message["styleIDTag"];
  if (value != null) {
    bb.writeVarUint(101);
    bb.writeVarUint(value);
  }

  var value = message["isFillStyle"];
  if (value != null) {
    bb.writeVarUint(157);
    bb.writeByte(value);
  }

  var value = message["isStrokeStyle"];
  if (value != null) {
    bb.writeVarUint(161);
    bb.writeByte(value);
  }

  var value = message["isOverrideOverTextStyle"];
  if (value != null) {
    bb.writeVarUint(376);
    bb.writeByte(value);
  }

  var value = message["styleType"];
  if (value != null) {
    bb.writeVarUint(163);
    var encoded = this["StyleType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StyleType\""); bb.writeVarUint(encoded);
  }

  var value = message["styleDescription"];
  if (value != null) {
    bb.writeVarUint(191);
    bb.writeString(value);
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(171);
    bb.writeString(value);
  }

  var value = message["userFacingVersion"];
  if (value != null) {
    bb.writeVarUint(399);
    bb.writeString(value);
  }

  var value = message["sortPosition"];
  if (value != null) {
    bb.writeVarUint(320);
    bb.writeString(value);
  }

  var value = message["ojansSuperSecretNodeField"];
  if (value != null) {
    bb.writeVarUint(345);
    this["encodeSharedStyleMasterData"](value, bb);
  }

  var value = message["sevMoonlitLilyData"];
  if (value != null) {
    bb.writeVarUint(348);
    this["encodeSharedStyleMasterData"](value, bb);
  }

  var value = message["isSoftDeletedStyle"];
  if (value != null) {
    bb.writeVarUint(176);
    bb.writeByte(value);
  }

  var value = message["isNonUpdateable"];
  if (value != null) {
    bb.writeVarUint(177);
    bb.writeByte(value);
  }

  var value = message["sharedStyleMasterData"];
  if (value != null) {
    bb.writeVarUint(172);
    this["encodeSharedStyleMasterData"](value, bb);
  }

  var value = message["sharedStyleReference"];
  if (value != null) {
    bb.writeVarUint(173);
    this["encodeSharedStyleReference"](value, bb);
  }

  var value = message["inheritFillStyleID"];
  if (value != null) {
    bb.writeVarUint(158);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritStrokeStyleID"];
  if (value != null) {
    bb.writeVarUint(162);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritTextStyleID"];
  if (value != null) {
    bb.writeVarUint(167);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritExportStyleID"];
  if (value != null) {
    bb.writeVarUint(168);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritEffectStyleID"];
  if (value != null) {
    bb.writeVarUint(169);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritGridStyleID"];
  if (value != null) {
    bb.writeVarUint(170);
    this["encodeGUID"](value, bb);
  }

  var value = message["inheritFillStyleIDForStroke"];
  if (value != null) {
    bb.writeVarUint(185);
    this["encodeGUID"](value, bb);
  }

  var value = message["styleIdForFill"];
  if (value != null) {
    bb.writeVarUint(332);
    this["encodeStyleId"](value, bb);
  }

  var value = message["styleIdForStrokeFill"];
  if (value != null) {
    bb.writeVarUint(333);
    this["encodeStyleId"](value, bb);
  }

  var value = message["styleIdForText"];
  if (value != null) {
    bb.writeVarUint(334);
    this["encodeStyleId"](value, bb);
  }

  var value = message["styleIdForEffect"];
  if (value != null) {
    bb.writeVarUint(335);
    this["encodeStyleId"](value, bb);
  }

  var value = message["styleIdForGrid"];
  if (value != null) {
    bb.writeVarUint(336);
    this["encodeStyleId"](value, bb);
  }

  var value = message["styleAnimations"];
  if (value != null) {
    bb.writeVarUint(580);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStyleAnimation"](value, bb);
    }
  }

  var value = message["backgroundPaints"];
  if (value != null) {
    bb.writeVarUint(193);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["inheritFillStyleIDForBackground"];
  if (value != null) {
    bb.writeVarUint(194);
    this["encodeGUID"](value, bb);
  }

  var value = message["isStateGroup"];
  if (value != null) {
    bb.writeVarUint(225);
    bb.writeByte(value);
  }

  var value = message["stateGroupPropertyValueOrders"];
  if (value != null) {
    bb.writeVarUint(238);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStateGroupPropertyValueOrder"](value, bb);
    }
  }

  var value = message["partialPasteAnnotation"];
  if (value != null) {
    bb.writeVarUint(581);
    this["encodePartialPasteAnnotation"](value, bb);
  }

  var value = message["sharedSymbolReference"];
  if (value != null) {
    bb.writeVarUint(122);
    this["encodeSharedSymbolReference"](value, bb);
  }

  var value = message["isSymbolPublishable"];
  if (value != null) {
    bb.writeVarUint(123);
    bb.writeByte(value);
  }

  var value = message["sharedSymbolMappings"];
  if (value != null) {
    bb.writeVarUint(124);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["sharedSymbolVersion"];
  if (value != null) {
    bb.writeVarUint(126);
    bb.writeString(value);
  }

  var value = message["sharedComponentMasterData"];
  if (value != null) {
    bb.writeVarUint(152);
    this["encodeSharedComponentMasterData"](value, bb);
  }

  var value = message["symbolDescription"];
  if (value != null) {
    bb.writeVarUint(144);
    bb.writeString(value);
  }

  var value = message["unflatteningMappings"];
  if (value != null) {
    bb.writeVarUint(164);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["forceUnflatteningMappings"];
  if (value != null) {
    bb.writeVarUint(228);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPathMapping"](value, bb);
    }
  }

  var value = message["publishFile"];
  if (value != null) {
    bb.writeVarUint(214);
    bb.writeString(value);
  }

  var value = message["sourceLibraryKey"];
  if (value != null) {
    bb.writeVarUint(395);
    bb.writeString(value);
  }

  var value = message["publishID"];
  if (value != null) {
    bb.writeVarUint(215);
    this["encodeGUID"](value, bb);
  }

  var value = message["componentKey"];
  if (value != null) {
    bb.writeVarUint(216);
    bb.writeString(value);
  }

  var value = message["isC2"];
  if (value != null) {
    bb.writeVarUint(217);
    bb.writeByte(value);
  }

  var value = message["publishedVersion"];
  if (value != null) {
    bb.writeVarUint(218);
    bb.writeString(value);
  }

  var value = message["originComponentKey"];
  if (value != null) {
    bb.writeVarUint(252);
    bb.writeString(value);
  }

  var value = message["componentPropDefs"];
  if (value != null) {
    bb.writeVarUint(266);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropDef"](value, bb);
    }
  }

  var value = message["componentPropRefs"];
  if (value != null) {
    bb.writeVarUint(267);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropRef"](value, bb);
    }
  }

  var value = message["variantPropSpecs"];
  if (value != null) {
    bb.writeVarUint(483);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariantPropSpec"](value, bb);
    }
  }

  var value = message["symbolData"];
  if (value != null) {
    bb.writeVarUint(113);
    this["encodeSymbolData"](value, bb);
  }

  var value = message["symbolDataTag"];
  if (value != null) {
    bb.writeVarUint(114);
    bb.writeVarUint(value);
  }

  var value = message["derivedSymbolData"];
  if (value != null) {
    bb.writeVarUint(125);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["nestedInstanceResizeEnabled"];
  if (value != null) {
    bb.writeVarUint(394);
    bb.writeByte(value);
  }

  var value = message["overriddenSymbolID"];
  if (value != null) {
    bb.writeVarUint(143);
    this["encodeGUID"](value, bb);
  }

  var value = message["componentPropAssignments"];
  if (value != null) {
    bb.writeVarUint(268);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropAssignment"](value, bb);
    }
  }

  var value = message["propsAreBubbled"];
  if (value != null) {
    bb.writeVarUint(305);
    bb.writeByte(value);
  }

  var value = message["overrideStash"];
  if (value != null) {
    bb.writeVarUint(248);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeInstanceOverrideStash"](value, bb);
    }
  }

  var value = message["overrideStashV2"];
  if (value != null) {
    bb.writeVarUint(250);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeInstanceOverrideStashV2"](value, bb);
    }
  }

  var value = message["guidPath"];
  if (value != null) {
    bb.writeVarUint(111);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["guidPathTag"];
  if (value != null) {
    bb.writeVarUint(112);
    bb.writeVarUint(value);
  }

  var value = message["overrideLevel"];
  if (value != null) {
    bb.writeVarUint(321);
    bb.writeVarInt(value);
  }

  var value = message["moduleType"];
  if (value != null) {
    bb.writeVarUint(382);
    var encoded = this["ModuleType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ModuleType\""); bb.writeVarUint(encoded);
  }

  var value = message["isSlot"];
  if (value != null) {
    bb.writeVarUint(463);
    bb.writeByte(value);
  }

  var value = message["isSlotContent"];
  if (value != null) {
    bb.writeVarUint(495);
    bb.writeByte(value);
  }

  var value = message["fontSize"];
  if (value != null) {
    bb.writeVarUint(21);
    bb.writeVarFloat(value);
  }

  var value = message["fontSizeTag"];
  if (value != null) {
    bb.writeVarUint(73);
    bb.writeVarUint(value);
  }

  var value = message["paragraphIndent"];
  if (value != null) {
    bb.writeVarUint(22);
    bb.writeVarFloat(value);
  }

  var value = message["paragraphIndentTag"];
  if (value != null) {
    bb.writeVarUint(74);
    bb.writeVarUint(value);
  }

  var value = message["paragraphSpacing"];
  if (value != null) {
    bb.writeVarUint(23);
    bb.writeVarFloat(value);
  }

  var value = message["paragraphSpacingTag"];
  if (value != null) {
    bb.writeVarUint(75);
    bb.writeVarUint(value);
  }

  var value = message["textAlignHorizontal"];
  if (value != null) {
    bb.writeVarUint(32);
    var encoded = this["TextAlignHorizontal"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextAlignHorizontal\""); bb.writeVarUint(encoded);
  }

  var value = message["textAlignHorizontalTag"];
  if (value != null) {
    bb.writeVarUint(84);
    bb.writeVarUint(value);
  }

  var value = message["textAlignVertical"];
  if (value != null) {
    bb.writeVarUint(33);
    var encoded = this["TextAlignVertical"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextAlignVertical\""); bb.writeVarUint(encoded);
  }

  var value = message["textAlignVerticalTag"];
  if (value != null) {
    bb.writeVarUint(85);
    bb.writeVarUint(value);
  }

  var value = message["textCase"];
  if (value != null) {
    bb.writeVarUint(34);
    var encoded = this["TextCase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextCase\""); bb.writeVarUint(encoded);
  }

  var value = message["textCaseTag"];
  if (value != null) {
    bb.writeVarUint(86);
    bb.writeVarUint(value);
  }

  var value = message["textDecoration"];
  if (value != null) {
    bb.writeVarUint(35);
    var encoded = this["TextDecoration"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextDecoration\""); bb.writeVarUint(encoded);
  }

  var value = message["textDecorationTag"];
  if (value != null) {
    bb.writeVarUint(87);
    bb.writeVarUint(value);
  }

  var value = message["lineHeight"];
  if (value != null) {
    bb.writeVarUint(40);
    this["encodeNumber"](value, bb);
  }

  var value = message["lineHeightTag"];
  if (value != null) {
    bb.writeVarUint(92);
    bb.writeVarUint(value);
  }

  var value = message["fontName"];
  if (value != null) {
    bb.writeVarUint(41);
    this["encodeFontName"](value, bb);
  }

  var value = message["fontNameTag"];
  if (value != null) {
    bb.writeVarUint(93);
    bb.writeVarUint(value);
  }

  var value = message["textData"];
  if (value != null) {
    bb.writeVarUint(42);
    this["encodeTextData"](value, bb);
  }

  var value = message["textDataTag"];
  if (value != null) {
    bb.writeVarUint(94);
    bb.writeVarUint(value);
  }

  var value = message["derivedTextData"];
  if (value != null) {
    bb.writeVarUint(359);
    this["encodeDerivedTextData"](value, bb);
  }

  var value = message["fontVariantCommonLigatures"];
  if (value != null) {
    bb.writeVarUint(127);
    bb.writeByte(value);
  }

  var value = message["fontVariantContextualLigatures"];
  if (value != null) {
    bb.writeVarUint(128);
    bb.writeByte(value);
  }

  var value = message["fontVariantDiscretionaryLigatures"];
  if (value != null) {
    bb.writeVarUint(129);
    bb.writeByte(value);
  }

  var value = message["fontVariantHistoricalLigatures"];
  if (value != null) {
    bb.writeVarUint(130);
    bb.writeByte(value);
  }

  var value = message["fontVariantOrdinal"];
  if (value != null) {
    bb.writeVarUint(131);
    bb.writeByte(value);
  }

  var value = message["fontVariantSlashedZero"];
  if (value != null) {
    bb.writeVarUint(132);
    bb.writeByte(value);
  }

  var value = message["fontVariantNumericFigure"];
  if (value != null) {
    bb.writeVarUint(133);
    var encoded = this["FontVariantNumericFigure"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontVariantNumericFigure\""); bb.writeVarUint(encoded);
  }

  var value = message["fontVariantNumericSpacing"];
  if (value != null) {
    bb.writeVarUint(134);
    var encoded = this["FontVariantNumericSpacing"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontVariantNumericSpacing\""); bb.writeVarUint(encoded);
  }

  var value = message["fontVariantNumericFraction"];
  if (value != null) {
    bb.writeVarUint(135);
    var encoded = this["FontVariantNumericFraction"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontVariantNumericFraction\""); bb.writeVarUint(encoded);
  }

  var value = message["fontVariantCaps"];
  if (value != null) {
    bb.writeVarUint(136);
    var encoded = this["FontVariantCaps"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontVariantCaps\""); bb.writeVarUint(encoded);
  }

  var value = message["fontVariantPosition"];
  if (value != null) {
    bb.writeVarUint(137);
    var encoded = this["FontVariantPosition"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FontVariantPosition\""); bb.writeVarUint(encoded);
  }

  var value = message["letterSpacing"];
  if (value != null) {
    bb.writeVarUint(165);
    this["encodeNumber"](value, bb);
  }

  var value = message["fontVersion"];
  if (value != null) {
    bb.writeVarUint(202);
    bb.writeString(value);
  }

  var value = message["leadingTrim"];
  if (value != null) {
    bb.writeVarUint(322);
    var encoded = this["LeadingTrim"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LeadingTrim\""); bb.writeVarUint(encoded);
  }

  var value = message["hangingPunctuation"];
  if (value != null) {
    bb.writeVarUint(337);
    bb.writeByte(value);
  }

  var value = message["hangingList"];
  if (value != null) {
    bb.writeVarUint(339);
    bb.writeByte(value);
  }

  var value = message["fallbackGlyphs"];
  if (value != null) {
    bb.writeVarUint(550);
    bb.writeByte(value);
  }

  var value = message["maxLines"];
  if (value != null) {
    bb.writeVarUint(351);
    bb.writeVarInt(value);
  }

  var value = message["responsiveTextStyleVariants"];
  if (value != null) {
    bb.writeVarUint(417);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeResponsiveTextStyleVariant"](value, bb);
    }
  }

  var value = message["sectionStatus"];
  if (value != null) {
    bb.writeVarUint(352);
    var encoded = this["SectionStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SectionStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["sectionStatusInfo"];
  if (value != null) {
    bb.writeVarUint(355);
    this["encodeSectionStatusInfo"](value, bb);
  }

  var value = message["textUserLayoutVersion"];
  if (value != null) {
    bb.writeVarUint(203);
    bb.writeVarUint(value);
  }

  var value = message["textExplicitLayoutVersion"];
  if (value != null) {
    bb.writeVarUint(396);
    bb.writeVarUint(value);
  }

  var value = message["toggledOnOTFeatures"];
  if (value != null) {
    bb.writeVarUint(205);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      var encoded = this["OpenTypeFeature"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"OpenTypeFeature\""); bb.writeVarUint(encoded);
    }
  }

  var value = message["toggledOffOTFeatures"];
  if (value != null) {
    bb.writeVarUint(206);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      var encoded = this["OpenTypeFeature"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"OpenTypeFeature\""); bb.writeVarUint(encoded);
    }
  }

  var value = message["hyperlink"];
  if (value != null) {
    bb.writeVarUint(223);
    this["encodeHyperlink"](value, bb);
  }

  var value = message["mention"];
  if (value != null) {
    bb.writeVarUint(340);
    this["encodeMention"](value, bb);
  }

  var value = message["fontVariations"];
  if (value != null) {
    bb.writeVarUint(260);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFontVariation"](value, bb);
    }
  }

  var value = message["textBidiVersion"];
  if (value != null) {
    bb.writeVarUint(279);
    bb.writeVarUint(value);
  }

  var value = message["textTruncation"];
  if (value != null) {
    bb.writeVarUint(280);
    var encoded = this["TextTruncation"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextTruncation\""); bb.writeVarUint(encoded);
  }

  var value = message["textWrapStyle"];
  if (value != null) {
    bb.writeVarUint(594);
    var encoded = this["TextWrapStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextWrapStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["hasHadRTLText"];
  if (value != null) {
    bb.writeVarUint(292);
    bb.writeByte(value);
  }

  var value = message["emojiImageSet"];
  if (value != null) {
    bb.writeVarUint(391);
    var encoded = this["EmojiImageSet"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EmojiImageSet\""); bb.writeVarUint(encoded);
  }

  var value = message["slideThumbnailHash"];
  if (value != null) {
    bb.writeVarUint(392);
    bb.writeString(value);
  }

  var value = message["visible"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["visibleTag"];
  if (value != null) {
    bb.writeVarUint(58);
    bb.writeVarUint(value);
  }

  var value = message["locked"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }

  var value = message["lockedTag"];
  if (value != null) {
    bb.writeVarUint(59);
    bb.writeVarUint(value);
  }

  var value = message["lockMode"];
  if (value != null) {
    bb.writeVarUint(434);
    var encoded = this["LockMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LockMode\""); bb.writeVarUint(encoded);
  }

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarFloat(value);
  }

  var value = message["opacityTag"];
  if (value != null) {
    bb.writeVarUint(60);
    bb.writeVarUint(value);
  }

  var value = message["blendMode"];
  if (value != null) {
    bb.writeVarUint(9);
    var encoded = this["BlendMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BlendMode\""); bb.writeVarUint(encoded);
  }

  var value = message["blendModeTag"];
  if (value != null) {
    bb.writeVarUint(61);
    bb.writeVarUint(value);
  }

  var value = message["size"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeVector"](value, bb);
  }

  var value = message["sizeTag"];
  if (value != null) {
    bb.writeVarUint(63);
    bb.writeVarUint(value);
  }

  var value = message["transform"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeMatrix"](value, bb);
  }

  var value = message["transformTag"];
  if (value != null) {
    bb.writeVarUint(64);
    bb.writeVarUint(value);
  }

  var value = message["dashPattern"];
  if (value != null) {
    bb.writeVarUint(13);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["dashPatternTag"];
  if (value != null) {
    bb.writeVarUint(65);
    bb.writeVarUint(value);
  }

  var value = message["mask"];
  if (value != null) {
    bb.writeVarUint(16);
    bb.writeByte(value);
  }

  var value = message["maskTag"];
  if (value != null) {
    bb.writeVarUint(68);
    bb.writeVarUint(value);
  }

  var value = message["rotationOrigin"];
  if (value != null) {
    bb.writeVarUint(424);
    this["encodeVector"](value, bb);
  }

  var value = message["maskIsOutline"];
  if (value != null) {
    bb.writeVarUint(18);
    bb.writeByte(value);
  }

  var value = message["maskIsOutlineTag"];
  if (value != null) {
    bb.writeVarUint(70);
    bb.writeVarUint(value);
  }

  var value = message["maskType"];
  if (value != null) {
    bb.writeVarUint(317);
    var encoded = this["MaskType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MaskType\""); bb.writeVarUint(encoded);
  }

  var value = message["backgroundOpacity"];
  if (value != null) {
    bb.writeVarUint(19);
    bb.writeVarFloat(value);
  }

  var value = message["backgroundOpacityTag"];
  if (value != null) {
    bb.writeVarUint(71);
    bb.writeVarUint(value);
  }

  var value = message["cornerRadius"];
  if (value != null) {
    bb.writeVarUint(20);
    bb.writeVarFloat(value);
  }

  var value = message["cornerRadiusTag"];
  if (value != null) {
    bb.writeVarUint(72);
    bb.writeVarUint(value);
  }

  var value = message["strokeWeight"];
  if (value != null) {
    bb.writeVarUint(26);
    bb.writeVarFloat(value);
  }

  var value = message["strokeWeightTag"];
  if (value != null) {
    bb.writeVarUint(78);
    bb.writeVarUint(value);
  }

  var value = message["strokeAlign"];
  if (value != null) {
    bb.writeVarUint(29);
    var encoded = this["StrokeAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeAlignTag"];
  if (value != null) {
    bb.writeVarUint(81);
    bb.writeVarUint(value);
  }

  var value = message["strokeCap"];
  if (value != null) {
    bb.writeVarUint(30);
    var encoded = this["StrokeCap"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeCap\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeCapTag"];
  if (value != null) {
    bb.writeVarUint(82);
    bb.writeVarUint(value);
  }

  var value = message["strokeCapSize"];
  if (value != null) {
    bb.writeVarUint(497);
    this["encodeNumber"](value, bb);
  }

  var value = message["strokeJoin"];
  if (value != null) {
    bb.writeVarUint(31);
    var encoded = this["StrokeJoin"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeJoin\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeJoinTag"];
  if (value != null) {
    bb.writeVarUint(83);
    bb.writeVarUint(value);
  }

  var value = message["fillPaints"];
  if (value != null) {
    bb.writeVarUint(38);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["fillPaintsTag"];
  if (value != null) {
    bb.writeVarUint(90);
    bb.writeVarUint(value);
  }

  var value = message["strokePaints"];
  if (value != null) {
    bb.writeVarUint(39);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["strokePaintsTag"];
  if (value != null) {
    bb.writeVarUint(91);
    bb.writeVarUint(value);
  }

  var value = message["effects"];
  if (value != null) {
    bb.writeVarUint(43);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEffect"](value, bb);
    }
  }

  var value = message["effectsTag"];
  if (value != null) {
    bb.writeVarUint(95);
    bb.writeVarUint(value);
  }

  var value = message["backgroundColor"];
  if (value != null) {
    bb.writeVarUint(50);
    this["encodeColor"](value, bb);
  }

  var value = message["backgroundColorTag"];
  if (value != null) {
    bb.writeVarUint(102);
    bb.writeVarUint(value);
  }

  var value = message["fillGeometry"];
  if (value != null) {
    bb.writeVarUint(51);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePath"](value, bb);
    }
  }

  var value = message["fillGeometryTag"];
  if (value != null) {
    bb.writeVarUint(103);
    bb.writeVarUint(value);
  }

  var value = message["strokeGeometry"];
  if (value != null) {
    bb.writeVarUint(52);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePath"](value, bb);
    }
  }

  var value = message["strokeGeometryTag"];
  if (value != null) {
    bb.writeVarUint(104);
    bb.writeVarUint(value);
  }

  var value = message["offsetFillMaskGeometry"];
  if (value != null) {
    bb.writeVarUint(564);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePath"](value, bb);
    }
  }

  var value = message["textDecorationFillPaints"];
  if (value != null) {
    bb.writeVarUint(411);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["textDecorationSkipInk"];
  if (value != null) {
    bb.writeVarUint(412);
    bb.writeByte(value);
  }

  var value = message["textUnderlineOffset"];
  if (value != null) {
    bb.writeVarUint(413);
    this["encodeNumber"](value, bb);
  }

  var value = message["textDecorationThickness"];
  if (value != null) {
    bb.writeVarUint(415);
    this["encodeNumber"](value, bb);
  }

  var value = message["textDecorationStyle"];
  if (value != null) {
    bb.writeVarUint(416);
    var encoded = this["TextDecorationStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextDecorationStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["transformModifiers"];
  if (value != null) {
    bb.writeVarUint(455);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTransformModifier"](value, bb);
    }
  }

  var value = message["transform3d"];
  if (value != null) {
    bb.writeVarUint(570);
    this["encodeTransform3d"](value, bb);
  }

  var value = message["strokeData"];
  if (value != null) {
    bb.writeVarUint(571);
    this["encodeStrokeData"](value, bb);
  }

  var value = message["scene3d"];
  if (value != null) {
    bb.writeVarUint(572);
    this["encodeScene3d"](value, bb);
  }

  var value = message["transformOrigin"];
  if (value != null) {
    bb.writeVarUint(587);
    this["encodeTransformOrigin"](value, bb);
  }

  var value = message["rectangleTopLeftCornerRadius"];
  if (value != null) {
    bb.writeVarUint(145);
    bb.writeVarFloat(value);
  }

  var value = message["rectangleTopRightCornerRadius"];
  if (value != null) {
    bb.writeVarUint(146);
    bb.writeVarFloat(value);
  }

  var value = message["rectangleBottomLeftCornerRadius"];
  if (value != null) {
    bb.writeVarUint(147);
    bb.writeVarFloat(value);
  }

  var value = message["rectangleBottomRightCornerRadius"];
  if (value != null) {
    bb.writeVarUint(148);
    bb.writeVarFloat(value);
  }

  var value = message["rectangleCornerRadiiIndependent"];
  if (value != null) {
    bb.writeVarUint(149);
    bb.writeByte(value);
  }

  var value = message["rectangleCornerToolIndependent"];
  if (value != null) {
    bb.writeVarUint(150);
    bb.writeByte(value);
  }

  var value = message["proportionsConstrained"];
  if (value != null) {
    bb.writeVarUint(151);
    bb.writeByte(value);
  }

  var value = message["targetAspectRatio"];
  if (value != null) {
    bb.writeVarUint(423);
    this["encodeOptionalVector"](value, bb);
  }

  var value = message["useAbsoluteBounds"];
  if (value != null) {
    bb.writeVarUint(258);
    bb.writeByte(value);
  }

  var value = message["borderTopHidden"];
  if (value != null) {
    bb.writeVarUint(287);
    bb.writeByte(value);
  }

  var value = message["borderBottomHidden"];
  if (value != null) {
    bb.writeVarUint(288);
    bb.writeByte(value);
  }

  var value = message["borderLeftHidden"];
  if (value != null) {
    bb.writeVarUint(289);
    bb.writeByte(value);
  }

  var value = message["borderRightHidden"];
  if (value != null) {
    bb.writeVarUint(290);
    bb.writeByte(value);
  }

  var value = message["bordersTakeSpace"];
  if (value != null) {
    bb.writeVarUint(294);
    bb.writeByte(value);
  }

  var value = message["borderTopWeight"];
  if (value != null) {
    bb.writeVarUint(295);
    bb.writeVarFloat(value);
  }

  var value = message["borderBottomWeight"];
  if (value != null) {
    bb.writeVarUint(296);
    bb.writeVarFloat(value);
  }

  var value = message["borderLeftWeight"];
  if (value != null) {
    bb.writeVarUint(297);
    bb.writeVarFloat(value);
  }

  var value = message["borderRightWeight"];
  if (value != null) {
    bb.writeVarUint(298);
    bb.writeVarFloat(value);
  }

  var value = message["borderStrokeWeightsIndependent"];
  if (value != null) {
    bb.writeVarUint(299);
    bb.writeByte(value);
  }

  var value = message["horizontalConstraint"];
  if (value != null) {
    bb.writeVarUint(28);
    var encoded = this["ConstraintType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConstraintType\""); bb.writeVarUint(encoded);
  }

  var value = message["horizontalConstraintTag"];
  if (value != null) {
    bb.writeVarUint(80);
    bb.writeVarUint(value);
  }

  var value = message["stackMode"];
  if (value != null) {
    bb.writeVarUint(105);
    var encoded = this["StackMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackMode\""); bb.writeVarUint(encoded);
  }

  var value = message["stackModeTag"];
  if (value != null) {
    bb.writeVarUint(106);
    bb.writeVarUint(value);
  }

  var value = message["stackSpacing"];
  if (value != null) {
    bb.writeVarUint(107);
    bb.writeVarFloat(value);
  }

  var value = message["stackSpacingTag"];
  if (value != null) {
    bb.writeVarUint(108);
    bb.writeVarUint(value);
  }

  var value = message["stackPadding"];
  if (value != null) {
    bb.writeVarUint(109);
    bb.writeVarFloat(value);
  }

  var value = message["stackPaddingTag"];
  if (value != null) {
    bb.writeVarUint(110);
    bb.writeVarUint(value);
  }

  var value = message["stackCounterAlign"];
  if (value != null) {
    bb.writeVarUint(120);
    var encoded = this["StackCounterAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackCounterAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["stackJustify"];
  if (value != null) {
    bb.writeVarUint(121);
    var encoded = this["StackJustify"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackJustify\""); bb.writeVarUint(encoded);
  }

  var value = message["stackAlign"];
  if (value != null) {
    bb.writeVarUint(208);
    var encoded = this["StackAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["stackHorizontalPadding"];
  if (value != null) {
    bb.writeVarUint(209);
    bb.writeVarFloat(value);
  }

  var value = message["stackVerticalPadding"];
  if (value != null) {
    bb.writeVarUint(210);
    bb.writeVarFloat(value);
  }

  var value = message["stackWidth"];
  if (value != null) {
    bb.writeVarUint(211);
    var encoded = this["StackSize"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackSize\""); bb.writeVarUint(encoded);
  }

  var value = message["stackHeight"];
  if (value != null) {
    bb.writeVarUint(212);
    var encoded = this["StackSize"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackSize\""); bb.writeVarUint(encoded);
  }

  var value = message["stackPrimarySizing"];
  if (value != null) {
    bb.writeVarUint(229);
    var encoded = this["StackSize"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackSize\""); bb.writeVarUint(encoded);
  }

  var value = message["stackPrimaryAlignItems"];
  if (value != null) {
    bb.writeVarUint(230);
    var encoded = this["StackJustify"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackJustify\""); bb.writeVarUint(encoded);
  }

  var value = message["stackCounterAlignItems"];
  if (value != null) {
    bb.writeVarUint(231);
    var encoded = this["StackAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["stackChildPrimaryGrow"];
  if (value != null) {
    bb.writeVarUint(232);
    bb.writeVarFloat(value);
  }

  var value = message["stackPaddingRight"];
  if (value != null) {
    bb.writeVarUint(233);
    bb.writeVarFloat(value);
  }

  var value = message["stackPaddingBottom"];
  if (value != null) {
    bb.writeVarUint(234);
    bb.writeVarFloat(value);
  }

  var value = message["stackChildAlignSelf"];
  if (value != null) {
    bb.writeVarUint(236);
    var encoded = this["StackCounterAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackCounterAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["stackPositioning"];
  if (value != null) {
    bb.writeVarUint(269);
    var encoded = this["StackPositioning"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackPositioning\""); bb.writeVarUint(encoded);
  }

  var value = message["stackReverseZIndex"];
  if (value != null) {
    bb.writeVarUint(271);
    bb.writeByte(value);
  }

  var value = message["stackWrap"];
  if (value != null) {
    bb.writeVarUint(323);
    var encoded = this["StackWrap"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackWrap\""); bb.writeVarUint(encoded);
  }

  var value = message["stackCounterSpacing"];
  if (value != null) {
    bb.writeVarUint(324);
    bb.writeVarFloat(value);
  }

  var value = message["minSize"];
  if (value != null) {
    bb.writeVarUint(325);
    this["encodeOptionalVector"](value, bb);
  }

  var value = message["maxSize"];
  if (value != null) {
    bb.writeVarUint(326);
    this["encodeOptionalVector"](value, bb);
  }

  var value = message["stackCounterAlignContent"];
  if (value != null) {
    bb.writeVarUint(343);
    var encoded = this["StackCounterAlignContent"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackCounterAlignContent\""); bb.writeVarUint(encoded);
  }

  var value = message["sortedMovingChildIndices"];
  if (value != null) {
    bb.writeVarUint(406);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarInt(value);
    }
  }

  var value = message["stackLayoutVersion"];
  if (value != null) {
    bb.writeVarUint(574);
    bb.writeVarUint(value);
  }

  var value = message["gridRows"];
  if (value != null) {
    bb.writeVarUint(435);
    this["encodeGUIDPositionMap"](value, bb);
  }

  var value = message["gridColumns"];
  if (value != null) {
    bb.writeVarUint(436);
    this["encodeGUIDPositionMap"](value, bb);
  }

  var value = message["gridRowGap"];
  if (value != null) {
    bb.writeVarUint(437);
    bb.writeVarFloat(value);
  }

  var value = message["gridColumnGap"];
  if (value != null) {
    bb.writeVarUint(438);
    bb.writeVarFloat(value);
  }

  var value = message["gridRowAnchor"];
  if (value != null) {
    bb.writeVarUint(439);
    this["encodeGUID"](value, bb);
  }

  var value = message["gridColumnAnchor"];
  if (value != null) {
    bb.writeVarUint(440);
    this["encodeGUID"](value, bb);
  }

  var value = message["gridRowSpan"];
  if (value != null) {
    bb.writeVarUint(441);
    bb.writeVarUint(value);
  }

  var value = message["gridColumnSpan"];
  if (value != null) {
    bb.writeVarUint(442);
    bb.writeVarUint(value);
  }

  var value = message["gridColumnsSizing"];
  if (value != null) {
    bb.writeVarUint(474);
    this["encodeGUIDGridTrackSizeMap"](value, bb);
  }

  var value = message["gridRowsSizing"];
  if (value != null) {
    bb.writeVarUint(475);
    this["encodeGUIDGridTrackSizeMap"](value, bb);
  }

  var value = message["gridChildVerticalAlign"];
  if (value != null) {
    bb.writeVarUint(476);
    var encoded = this["GridChildAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"GridChildAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["gridChildHorizontalAlign"];
  if (value != null) {
    bb.writeVarUint(477);
    var encoded = this["GridChildAlign"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"GridChildAlign\""); bb.writeVarUint(encoded);
  }

  var value = message["gridAutoTracks"];
  if (value != null) {
    bb.writeVarUint(555);
    var encoded = this["GridAutoTracks"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"GridAutoTracks\""); bb.writeVarUint(encoded);
  }

  var value = message["gridReflowEnabled"];
  if (value != null) {
    bb.writeVarUint(556);
    bb.writeByte(value);
  }

  var value = message["isSnakeGameBoard"];
  if (value != null) {
    bb.writeVarUint(344);
    bb.writeByte(value);
  }

  var value = message["transitionNodeID"];
  if (value != null) {
    bb.writeVarUint(139);
    this["encodeGUID"](value, bb);
  }

  var value = message["prototypeStartNodeID"];
  if (value != null) {
    bb.writeVarUint(140);
    this["encodeGUID"](value, bb);
  }

  var value = message["prototypeBackgroundColor"];
  if (value != null) {
    bb.writeVarUint(141);
    this["encodeColor"](value, bb);
  }

  var value = message["transitionInfo"];
  if (value != null) {
    bb.writeVarUint(153);
    this["encodeTransitionInfo"](value, bb);
  }

  var value = message["transitionType"];
  if (value != null) {
    bb.writeVarUint(154);
    var encoded = this["TransitionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionDuration"];
  if (value != null) {
    bb.writeVarUint(155);
    bb.writeVarFloat(value);
  }

  var value = message["easingType"];
  if (value != null) {
    bb.writeVarUint(156);
    var encoded = this["EasingType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EasingType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionPreserveScroll"];
  if (value != null) {
    bb.writeVarUint(181);
    bb.writeByte(value);
  }

  var value = message["connectionType"];
  if (value != null) {
    bb.writeVarUint(182);
    var encoded = this["ConnectionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectionType\""); bb.writeVarUint(encoded);
  }

  var value = message["connectionURL"];
  if (value != null) {
    bb.writeVarUint(183);
    bb.writeString(value);
  }

  var value = message["prototypeDevice"];
  if (value != null) {
    bb.writeVarUint(184);
    this["encodePrototypeDevice"](value, bb);
  }

  var value = message["interactionType"];
  if (value != null) {
    bb.writeVarUint(187);
    var encoded = this["InteractionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InteractionType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionTimeout"];
  if (value != null) {
    bb.writeVarUint(188);
    bb.writeVarFloat(value);
  }

  var value = message["interactionMaintained"];
  if (value != null) {
    bb.writeVarUint(189);
    bb.writeByte(value);
  }

  var value = message["interactionDuration"];
  if (value != null) {
    bb.writeVarUint(190);
    bb.writeVarFloat(value);
  }

  var value = message["destinationIsOverlay"];
  if (value != null) {
    bb.writeVarUint(192);
    bb.writeByte(value);
  }

  var value = message["transitionShouldSmartAnimate"];
  if (value != null) {
    bb.writeVarUint(207);
    bb.writeByte(value);
  }

  var value = message["prototypeInteractions"];
  if (value != null) {
    bb.writeVarUint(226);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePrototypeInteraction"](value, bb);
    }
  }

  var value = message["objectAnimations"];
  if (value != null) {
    bb.writeVarUint(426);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePrototypeInteraction"](value, bb);
    }
  }

  var value = message["prototypeStartingPoint"];
  if (value != null) {
    bb.writeVarUint(249);
    this["encodePrototypeStartingPoint"](value, bb);
  }

  var value = message["pluginData"];
  if (value != null) {
    bb.writeVarUint(204);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePluginData"](value, bb);
    }
  }

  var value = message["pluginRelaunchData"];
  if (value != null) {
    bb.writeVarUint(219);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePluginRelaunchData"](value, bb);
    }
  }

  var value = message["connectorStart"];
  if (value != null) {
    bb.writeVarUint(242);
    this["encodeConnectorEndpoint"](value, bb);
  }

  var value = message["connectorEnd"];
  if (value != null) {
    bb.writeVarUint(243);
    this["encodeConnectorEndpoint"](value, bb);
  }

  var value = message["connectorLineStyle"];
  if (value != null) {
    bb.writeVarUint(244);
    var encoded = this["ConnectorLineStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectorLineStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["connectorStartCap"];
  if (value != null) {
    bb.writeVarUint(245);
    var encoded = this["StrokeCap"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeCap\""); bb.writeVarUint(encoded);
  }

  var value = message["connectorEndCap"];
  if (value != null) {
    bb.writeVarUint(246);
    var encoded = this["StrokeCap"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StrokeCap\""); bb.writeVarUint(encoded);
  }

  var value = message["connectorControlPoints"];
  if (value != null) {
    bb.writeVarUint(253);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeConnectorControlPoint"](value, bb);
    }
  }

  var value = message["connectorBezierControlPoints"];
  if (value != null) {
    bb.writeVarUint(479);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeConnectorControlPoint"](value, bb);
    }
  }

  var value = message["connectorTextMidpoint"];
  if (value != null) {
    bb.writeVarUint(255);
    this["encodeConnectorTextMidpoint"](value, bb);
  }

  var value = message["connectorType"];
  if (value != null) {
    bb.writeVarUint(373);
    var encoded = this["ConnectorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectorType\""); bb.writeVarUint(encoded);
  }

  var value = message["connectorVersion"];
  if (value != null) {
    bb.writeVarUint(533);
    bb.writeVarInt(value);
  }

  var value = message["annotations"];
  if (value != null) {
    bb.writeVarUint(369);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnnotation"](value, bb);
    }
  }

  var value = message["measurements"];
  if (value != null) {
    bb.writeVarUint(384);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnnotationMeasurement"](value, bb);
    }
  }

  var value = message["annotationCategories"];
  if (value != null) {
    bb.writeVarUint(453);
    this["encodeAnnotationCategories"](value, bb);
  }

  var value = message["shapeWithTextType"];
  if (value != null) {
    bb.writeVarUint(241);
    var encoded = this["ShapeWithTextType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ShapeWithTextType\""); bb.writeVarUint(encoded);
  }

  var value = message["shapeUserHeight"];
  if (value != null) {
    bb.writeVarUint(247);
    bb.writeVarFloat(value);
  }

  var value = message["isStrokePaintDerived"];
  if (value != null) {
    bb.writeVarUint(530);
    bb.writeByte(value);
  }

  var value = message["derivedImmutableFrameData"];
  if (value != null) {
    bb.writeVarUint(254);
    this["encodeDerivedImmutableFrameData"](value, bb);
  }

  var value = message["derivedImmutableFrameDataVersion"];
  if (value != null) {
    bb.writeVarUint(338);
    this["encodeMultiplayerFieldVersion"](value, bb);
  }

  var value = message["nodeGenerationData"];
  if (value != null) {
    bb.writeVarUint(240);
    this["encodeNodeGenerationData"](value, bb);
  }

  var value = message["jsxData"];
  if (value != null) {
    bb.writeVarUint(491);
    this["encodeJsxData"](value, bb);
  }

  var value = message["derivedJsxData"];
  if (value != null) {
    bb.writeVarUint(492);
    this["encodeDerivedJsxData"](value, bb);
  }

  var value = message["stableKey"];
  if (value != null) {
    bb.writeVarUint(493);
    bb.writeString(value);
  }

  var value = message["codeBlockLanguage"];
  if (value != null) {
    bb.writeVarUint(259);
    var encoded = this["CodeBlockLanguage"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeBlockLanguage\""); bb.writeVarUint(encoded);
  }

  var value = message["codeBlockTheme"];
  if (value != null) {
    bb.writeVarUint(433);
    var encoded = this["CodeBlockTheme"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeBlockTheme\""); bb.writeVarUint(encoded);
  }

  var value = message["linkPreviewData"];
  if (value != null) {
    bb.writeVarUint(278);
    this["encodeLinkPreviewData"](value, bb);
  }

  var value = message["shapeTruncates"];
  if (value != null) {
    bb.writeVarUint(282);
    bb.writeByte(value);
  }

  var value = message["sectionContentsHidden"];
  if (value != null) {
    bb.writeVarUint(283);
    bb.writeByte(value);
  }

  var value = message["videoPlayback"];
  if (value != null) {
    bb.writeVarUint(300);
    this["encodeVideoPlayback"](value, bb);
  }

  var value = message["stampData"];
  if (value != null) {
    bb.writeVarUint(301);
    this["encodeStampData"](value, bb);
  }

  var value = message["sectionPresetInfo"];
  if (value != null) {
    bb.writeVarUint(370);
    this["encodeSectionPresetInfo"](value, bb);
  }

  var value = message["platformShapeDefinition"];
  if (value != null) {
    bb.writeVarUint(409);
    this["encodePlatformShapeDefinition"](value, bb);
  }

  var value = message["widgetSyncedState"];
  if (value != null) {
    bb.writeVarUint(273);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["widgetSyncCursor"];
  if (value != null) {
    bb.writeVarUint(274);
    bb.writeVarUint(value);
  }

  var value = message["widgetDerivedSubtreeCursor"];
  if (value != null) {
    bb.writeVarUint(275);
    this["encodeWidgetDerivedSubtreeCursor"](value, bb);
  }

  var value = message["widgetCachedAncestor"];
  if (value != null) {
    bb.writeVarUint(276);
    this["encodeWidgetPointer"](value, bb);
  }

  var value = message["widgetInputBehavior"];
  if (value != null) {
    bb.writeVarUint(285);
    var encoded = this["WidgetInputBehavior"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"WidgetInputBehavior\""); bb.writeVarUint(encoded);
  }

  var value = message["widgetTooltip"];
  if (value != null) {
    bb.writeVarUint(286);
    bb.writeString(value);
  }

  var value = message["widgetHoverStyle"];
  if (value != null) {
    bb.writeVarUint(291);
    this["encodeWidgetHoverStyle"](value, bb);
  }

  var value = message["isWidgetStickable"];
  if (value != null) {
    bb.writeVarUint(293);
    bb.writeByte(value);
  }

  var value = message["shouldHideCursorsOnWidgetHover"];
  if (value != null) {
    bb.writeVarUint(360);
    bb.writeByte(value);
  }

  var value = message["widgetMetadata"];
  if (value != null) {
    bb.writeVarUint(262);
    this["encodeWidgetMetadata"](value, bb);
  }

  var value = message["widgetEvents"];
  if (value != null) {
    bb.writeVarUint(263);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      var encoded = this["WidgetEvent"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"WidgetEvent\""); bb.writeVarUint(encoded);
    }
  }

  var value = message["widgetPropertyMenuItems"];
  if (value != null) {
    bb.writeVarUint(265);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeWidgetPropertyMenuItem"](value, bb);
    }
  }

  var value = message["widgetInputTextNodeType"];
  if (value != null) {
    bb.writeVarUint(401);
    var encoded = this["WidgetInputTextNodeType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"WidgetInputTextNodeType\""); bb.writeVarUint(encoded);
  }

  var value = message["jsxProps"];
  if (value != null) {
    bb.writeVarUint(489);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["tableRowPositions"];
  if (value != null) {
    bb.writeVarUint(308);
    this["encodeTableRowColumnPositionMap"](value, bb);
  }

  var value = message["tableColumnPositions"];
  if (value != null) {
    bb.writeVarUint(309);
    this["encodeTableRowColumnPositionMap"](value, bb);
  }

  var value = message["tableRowHeights"];
  if (value != null) {
    bb.writeVarUint(310);
    this["encodeTableRowColumnSizeMap"](value, bb);
  }

  var value = message["tableColumnWidths"];
  if (value != null) {
    bb.writeVarUint(311);
    this["encodeTableRowColumnSizeMap"](value, bb);
  }

  var value = message["tableMergedCells"];
  if (value != null) {
    bb.writeVarUint(538);
    this["encodeTableMergedCellMap"](value, bb);
  }

  var value = message["interactiveSlideConfigData"];
  if (value != null) {
    bb.writeVarUint(371);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["interactiveSlideParticipantData"];
  if (value != null) {
    bb.writeVarUint(372);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["flappType"];
  if (value != null) {
    bb.writeVarUint(402);
    var encoded = this["FlappType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FlappType\""); bb.writeVarUint(encoded);
  }

  var value = message["isEmbeddedPrototype"];
  if (value != null) {
    bb.writeVarUint(486);
    bb.writeByte(value);
  }

  var value = message["slideSpeakerNotes"];
  if (value != null) {
    bb.writeVarUint(389);
    bb.writeString(value);
  }

  var value = message["isSkippedSlide"];
  if (value != null) {
    bb.writeVarUint(410);
    bb.writeByte(value);
  }

  var value = message["presentationOutlines"];
  if (value != null) {
    bb.writeVarUint(573);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["themeID"];
  if (value != null) {
    bb.writeVarUint(379);
    this["encodeThemeID"](value, bb);
  }

  var value = message["slideThemeData"];
  if (value != null) {
    bb.writeVarUint(381);
    this["encodeSlideThemeData"](value, bb);
  }

  var value = message["slideThemeMap"];
  if (value != null) {
    bb.writeVarUint(390);
    this["encodeSlideThemeMap"](value, bb);
  }

  var value = message["slideTemplateFileKey"];
  if (value != null) {
    bb.writeVarUint(393);
    bb.writeString(value);
  }

  var value = message["slideNumber"];
  if (value != null) {
    bb.writeVarUint(443);
    var encoded = this["SlideNumber"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SlideNumber\""); bb.writeVarUint(encoded);
  }

  var value = message["slideNumberSeparator"];
  if (value != null) {
    bb.writeVarUint(456);
    bb.writeString(value);
  }

  var value = message["diagramParentId"];
  if (value != null) {
    bb.writeVarUint(363);
    this["encodeGUID"](value, bb);
  }

  var value = message["layoutRoot"];
  if (value != null) {
    bb.writeVarUint(362);
    this["encodeGUID"](value, bb);
  }

  var value = message["layoutPosition"];
  if (value != null) {
    bb.writeVarUint(364);
    bb.writeString(value);
  }

  var value = message["diagramLayoutRuleType"];
  if (value != null) {
    bb.writeVarUint(366);
    var encoded = this["DiagramLayoutRuleType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DiagramLayoutRuleType\""); bb.writeVarUint(encoded);
  }

  var value = message["diagramParentIndex"];
  if (value != null) {
    bb.writeVarUint(367);
    this["encodeDiagramParentIndex"](value, bb);
  }

  var value = message["diagramLayoutPaused"];
  if (value != null) {
    bb.writeVarUint(368);
    var encoded = this["DiagramLayoutPaused"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DiagramLayoutPaused\""); bb.writeVarUint(encoded);
  }

  var value = message["isPageDivider"];
  if (value != null) {
    bb.writeVarUint(380);
    bb.writeByte(value);
  }

  var value = message["internalEnumForTest"];
  if (value != null) {
    bb.writeVarUint(251);
    var encoded = this["InternalEnumForTest"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InternalEnumForTest\""); bb.writeVarUint(encoded);
  }

  var value = message["internalDataForTest"];
  if (value != null) {
    bb.writeVarUint(257);
    this["encodeInternalDataForTest"](value, bb);
  }

  var value = message["autoRename"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeByte(value);
  }

  var value = message["autoRenameTag"];
  if (value != null) {
    bb.writeVarUint(66);
    bb.writeVarUint(value);
  }

  var value = message["backgroundEnabled"];
  if (value != null) {
    bb.writeVarUint(15);
    bb.writeByte(value);
  }

  var value = message["backgroundEnabledTag"];
  if (value != null) {
    bb.writeVarUint(67);
    bb.writeVarUint(value);
  }

  var value = message["exportContentsOnly"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeByte(value);
  }

  var value = message["exportContentsOnlyTag"];
  if (value != null) {
    bb.writeVarUint(69);
    bb.writeVarUint(value);
  }

  var value = message["miterLimit"];
  if (value != null) {
    bb.writeVarUint(25);
    bb.writeVarFloat(value);
  }

  var value = message["miterLimitTag"];
  if (value != null) {
    bb.writeVarUint(77);
    bb.writeVarUint(value);
  }

  var value = message["textTracking"];
  if (value != null) {
    bb.writeVarUint(27);
    bb.writeVarFloat(value);
  }

  var value = message["textTrackingTag"];
  if (value != null) {
    bb.writeVarUint(79);
    bb.writeVarUint(value);
  }

  var value = message["verticalConstraint"];
  if (value != null) {
    bb.writeVarUint(37);
    var encoded = this["ConstraintType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConstraintType\""); bb.writeVarUint(encoded);
  }

  var value = message["verticalConstraintTag"];
  if (value != null) {
    bb.writeVarUint(89);
    bb.writeVarUint(value);
  }

  var value = message["exportSettings"];
  if (value != null) {
    bb.writeVarUint(45);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeExportSettings"](value, bb);
    }
  }

  var value = message["exportSettingsTag"];
  if (value != null) {
    bb.writeVarUint(97);
    bb.writeVarUint(value);
  }

  var value = message["textAutoResize"];
  if (value != null) {
    bb.writeVarUint(46);
    var encoded = this["TextAutoResize"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TextAutoResize\""); bb.writeVarUint(encoded);
  }

  var value = message["textAutoResizeTag"];
  if (value != null) {
    bb.writeVarUint(98);
    bb.writeVarUint(value);
  }

  var value = message["layoutGrids"];
  if (value != null) {
    bb.writeVarUint(47);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeLayoutGrid"](value, bb);
    }
  }

  var value = message["layoutGridsTag"];
  if (value != null) {
    bb.writeVarUint(99);
    bb.writeVarUint(value);
  }

  var value = message["frameMaskDisabled"];
  if (value != null) {
    bb.writeVarUint(115);
    bb.writeByte(value);
  }

  var value = message["frameMaskDisabledTag"];
  if (value != null) {
    bb.writeVarUint(116);
    bb.writeVarUint(value);
  }

  var value = message["resizeToFit"];
  if (value != null) {
    bb.writeVarUint(117);
    bb.writeByte(value);
  }

  var value = message["resizeToFitTag"];
  if (value != null) {
    bb.writeVarUint(118);
    bb.writeVarUint(value);
  }

  var value = message["booleanOperation"];
  if (value != null) {
    bb.writeVarUint(36);
    var encoded = this["BooleanOperation"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BooleanOperation\""); bb.writeVarUint(encoded);
  }

  var value = message["booleanOperationTag"];
  if (value != null) {
    bb.writeVarUint(88);
    bb.writeVarUint(value);
  }

  var value = message["handleMirroring"];
  if (value != null) {
    bb.writeVarUint(44);
    var encoded = this["VectorMirror"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VectorMirror\""); bb.writeVarUint(encoded);
  }

  var value = message["handleMirroringTag"];
  if (value != null) {
    bb.writeVarUint(96);
    bb.writeVarUint(value);
  }

  var value = message["count"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeVarUint(value);
  }

  var value = message["countTag"];
  if (value != null) {
    bb.writeVarUint(62);
    bb.writeVarUint(value);
  }

  var value = message["starInnerScale"];
  if (value != null) {
    bb.writeVarUint(24);
    bb.writeVarFloat(value);
  }

  var value = message["starInnerScaleTag"];
  if (value != null) {
    bb.writeVarUint(76);
    bb.writeVarUint(value);
  }

  var value = message["arcData"];
  if (value != null) {
    bb.writeVarUint(195);
    this["encodeArcData"](value, bb);
  }

  var value = message["vectorData"];
  if (value != null) {
    bb.writeVarUint(48);
    this["encodeVectorData"](value, bb);
  }

  var value = message["vectorDataTag"];
  if (value != null) {
    bb.writeVarUint(100);
    bb.writeVarUint(value);
  }

  var value = message["vectorOperationVersion"];
  if (value != null) {
    bb.writeVarUint(425);
    bb.writeVarUint(value);
  }

  var value = message["textPathStart"];
  if (value != null) {
    bb.writeVarUint(432);
    this["encodeTextPathStart"](value, bb);
  }

  var value = message["exportBackgroundDisabled"];
  if (value != null) {
    bb.writeVarUint(119);
    bb.writeByte(value);
  }

  var value = message["guides"];
  if (value != null) {
    bb.writeVarUint(138);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGuide"](value, bb);
    }
  }

  var value = message["internalOnly"];
  if (value != null) {
    bb.writeVarUint(142);
    bb.writeByte(value);
  }

  var value = message["scrollDirection"];
  if (value != null) {
    bb.writeVarUint(159);
    var encoded = this["ScrollDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ScrollDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["cornerSmoothing"];
  if (value != null) {
    bb.writeVarUint(160);
    bb.writeVarFloat(value);
  }

  var value = message["scrollOffset"];
  if (value != null) {
    bb.writeVarUint(166);
    this["encodeVector"](value, bb);
  }

  var value = message["exportTextAsSVGText"];
  if (value != null) {
    bb.writeVarUint(175);
    bb.writeByte(value);
  }

  var value = message["scrollContractedState"];
  if (value != null) {
    bb.writeVarUint(178);
    var encoded = this["ScrollContractedState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ScrollContractedState\""); bb.writeVarUint(encoded);
  }

  var value = message["contractedSize"];
  if (value != null) {
    bb.writeVarUint(179);
    this["encodeVector"](value, bb);
  }

  var value = message["fixedChildrenDivider"];
  if (value != null) {
    bb.writeVarUint(180);
    bb.writeString(value);
  }

  var value = message["scrollBehavior"];
  if (value != null) {
    bb.writeVarUint(186);
    var encoded = this["ScrollBehavior"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ScrollBehavior\""); bb.writeVarUint(encoded);
  }

  var value = message["derivedSymbolDataLayoutVersion"];
  if (value != null) {
    bb.writeVarUint(196);
    bb.writeVarInt(value);
  }

  var value = message["navigationType"];
  if (value != null) {
    bb.writeVarUint(197);
    var encoded = this["NavigationType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NavigationType\""); bb.writeVarUint(encoded);
  }

  var value = message["overlayPositionType"];
  if (value != null) {
    bb.writeVarUint(198);
    var encoded = this["OverlayPositionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"OverlayPositionType\""); bb.writeVarUint(encoded);
  }

  var value = message["overlayRelativePosition"];
  if (value != null) {
    bb.writeVarUint(199);
    this["encodeVector"](value, bb);
  }

  var value = message["overlayBackgroundInteraction"];
  if (value != null) {
    bb.writeVarUint(200);
    var encoded = this["OverlayBackgroundInteraction"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"OverlayBackgroundInteraction\""); bb.writeVarUint(encoded);
  }

  var value = message["overlayBackgroundAppearance"];
  if (value != null) {
    bb.writeVarUint(201);
    this["encodeOverlayBackgroundAppearance"](value, bb);
  }

  var value = message["overrideKey"];
  if (value != null) {
    bb.writeVarUint(213);
    this["encodeGUID"](value, bb);
  }

  var value = message["containerSupportsFillStrokeAndCorners"];
  if (value != null) {
    bb.writeVarUint(220);
    bb.writeByte(value);
  }

  var value = message["stackCounterSizing"];
  if (value != null) {
    bb.writeVarUint(221);
    var encoded = this["StackSize"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StackSize\""); bb.writeVarUint(encoded);
  }

  var value = message["containersSupportFillStrokeAndCorners"];
  if (value != null) {
    bb.writeVarUint(222);
    bb.writeByte(value);
  }

  var value = message["keyTrigger"];
  if (value != null) {
    bb.writeVarUint(224);
    this["encodeKeyTrigger"](value, bb);
  }

  var value = message["voiceEventPhrase"];
  if (value != null) {
    bb.writeVarUint(227);
    bb.writeString(value);
  }

  var value = message["ancestorPathBeforeDeletion"];
  if (value != null) {
    bb.writeVarUint(235);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["symbolLinks"];
  if (value != null) {
    bb.writeVarUint(237);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeSymbolLink"](value, bb);
    }
  }

  var value = message["textListData"];
  if (value != null) {
    bb.writeVarUint(239);
    this["encodeTextListData"](value, bb);
  }

  var value = message["detachOpticalSizeFromFontSize"];
  if (value != null) {
    bb.writeVarUint(261);
    bb.writeByte(value);
  }

  var value = message["listSpacing"];
  if (value != null) {
    bb.writeVarUint(264);
    bb.writeVarFloat(value);
  }

  var value = message["embedData"];
  if (value != null) {
    bb.writeVarUint(270);
    this["encodeEmbedData"](value, bb);
  }

  var value = message["richMediaData"];
  if (value != null) {
    bb.writeVarUint(272);
    this["encodeRichMediaData"](value, bb);
  }

  var value = message["renderedSyncedState"];
  if (value != null) {
    bb.writeVarUint(277);
    this["encodeMultiplayerMap"](value, bb);
  }

  var value = message["simplifyInstancePanels"];
  if (value != null) {
    bb.writeVarUint(284);
    bb.writeByte(value);
  }

  var value = message["accessibleHTMLTag"];
  if (value != null) {
    bb.writeVarUint(302);
    var encoded = this["HTMLTag"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"HTMLTag\""); bb.writeVarUint(encoded);
  }

  var value = message["ariaRole"];
  if (value != null) {
    bb.writeVarUint(303);
    var encoded = this["ARIARole"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ARIARole\""); bb.writeVarUint(encoded);
  }

  var value = message["ariaAttributes"];
  if (value != null) {
    bb.writeVarUint(357);
    this["encodeARIAAttributesMap"](value, bb);
  }

  var value = message["accessibleLabel"];
  if (value != null) {
    bb.writeVarUint(304);
    bb.writeString(value);
  }

  var value = message["isDecorativeImage"];
  if (value != null) {
    bb.writeVarUint(490);
    bb.writeByte(value);
  }

  var value = message["variableData"];
  if (value != null) {
    bb.writeVarUint(306);
    this["encodeVariableData"](value, bb);
  }

  var value = message["variableConsumptionMap"];
  if (value != null) {
    bb.writeVarUint(307);
    this["encodeVariableDataMap"](value, bb);
  }

  var value = message["variableModeBySetMap"];
  if (value != null) {
    bb.writeVarUint(316);
    this["encodeVariableModeBySetMap"](value, bb);
  }

  var value = message["variableSetModes"];
  if (value != null) {
    bb.writeVarUint(312);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableSetMode"](value, bb);
    }
  }

  var value = message["variableSetID"];
  if (value != null) {
    bb.writeVarUint(313);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["variableResolvedType"];
  if (value != null) {
    bb.writeVarUint(314);
    var encoded = this["VariableResolvedDataType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableResolvedDataType\""); bb.writeVarUint(encoded);
  }

  var value = message["variableDataValues"];
  if (value != null) {
    bb.writeVarUint(315);
    this["encodeVariableDataValues"](value, bb);
  }

  var value = message["variableTokenName"];
  if (value != null) {
    bb.writeVarUint(350);
    bb.writeString(value);
  }

  var value = message["timingDisplayUnit"];
  if (value != null) {
    bb.writeVarUint(566);
    var encoded = this["VariableTimingDisplayUnit"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableTimingDisplayUnit\""); bb.writeVarUint(encoded);
  }

  var value = message["variableScopes"];
  if (value != null) {
    bb.writeVarUint(353);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      var encoded = this["VariableScope"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableScope\""); bb.writeVarUint(encoded);
    }
  }

  var value = message["parameterConsumptionMap"];
  if (value != null) {
    bb.writeVarUint(445);
    this["encodeVariableDataMap"](value, bb);
  }

  var value = message["codeSyntax"];
  if (value != null) {
    bb.writeVarUint(358);
    this["encodeCodeSyntaxMap"](value, bb);
  }

  var value = message["pasteSource"];
  if (value != null) {
    bb.writeVarUint(388);
    this["encodePasteSource"](value, bb);
  }

  var value = message["pageType"];
  if (value != null) {
    bb.writeVarUint(397);
    var encoded = this["EditorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EditorType\""); bb.writeVarUint(encoded);
  }

  var value = message["strokeBrushGuid"];
  if (value != null) {
    bb.writeVarUint(446);
    this["encodeGUID"](value, bb);
  }

  var value = message["strokeSeed"];
  if (value != null) {
    bb.writeVarUint(482);
    bb.writeVarUint64(value);
  }

  var value = message["variableWidthPoints"];
  if (value != null) {
    bb.writeVarUint(447);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableWidthPoint"](value, bb);
    }
  }

  var value = message["dynamicStrokeSettings"];
  if (value != null) {
    bb.writeVarUint(448);
    this["encodeDynamicStrokeSettings"](value, bb);
  }

  var value = message["scatterStrokeSettings"];
  if (value != null) {
    bb.writeVarUint(449);
    this["encodeScatterStrokeSettings"](value, bb);
  }

  var value = message["stretchStrokeSettings"];
  if (value != null) {
    bb.writeVarUint(450);
    this["encodeStretchStrokeSettings"](value, bb);
  }

  var value = message["scatterBrushTransforms"];
  if (value != null) {
    bb.writeVarUint(488);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMatrix"](value, bb);
    }
  }

  var value = message["brushType"];
  if (value != null) {
    bb.writeVarUint(452);
    var encoded = this["BrushType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BrushType\""); bb.writeVarUint(encoded);
  }

  var value = message["pathTrim"];
  if (value != null) {
    bb.writeVarUint(542);
    this["encodeOptionalVector"](value, bb);
  }

  var value = message["strokeOffset"];
  if (value != null) {
    bb.writeVarUint(554);
    bb.writeVarFloat(value);
  }

  var value = message["backingVariableSetId"];
  if (value != null) {
    bb.writeVarUint(377);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["overriddenVariableId"];
  if (value != null) {
    bb.writeVarUint(464);
    this["encodeVariableID"](value, bb);
  }

  var value = message["backingVariableId"];
  if (value != null) {
    bb.writeVarUint(378);
    this["encodeVariableIdOrVariableOverrideId"](value, bb);
  }

  var value = message["isCollectionExtendable"];
  if (value != null) {
    bb.writeVarUint(385);
    bb.writeByte(value);
  }

  var value = message["rootVariableKey"];
  if (value != null) {
    bb.writeVarUint(386);
    bb.writeString(value);
  }

  var value = message["inheritedVariableIds"];
  if (value != null) {
    bb.writeVarUint(517);
    this["encodeInheritedVariablesData"](value, bb);
  }

  var value = message["handoffStatusMap"];
  if (value != null) {
    bb.writeVarUint(361);
    this["encodeHandoffStatusMap"](value, bb);
  }

  var value = message["agendaPositionMap"];
  if (value != null) {
    bb.writeVarUint(327);
    this["encodeAgendaPositionMap"](value, bb);
  }

  var value = message["agendaMetadataMap"];
  if (value != null) {
    bb.writeVarUint(328);
    this["encodeAgendaMetadataMap"](value, bb);
  }

  var value = message["migrationStatus"];
  if (value != null) {
    bb.writeVarUint(329);
    this["encodeMigrationStatus"](value, bb);
  }

  var value = message["isSoftDeleted"];
  if (value != null) {
    bb.writeVarUint(330);
    bb.writeByte(value);
  }

  var value = message["editInfo"];
  if (value != null) {
    bb.writeVarUint(331);
    this["encodeEditInfo"](value, bb);
  }

  var value = message["colorProfile"];
  if (value != null) {
    bb.writeVarUint(341);
    var encoded = this["ColorProfile"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ColorProfile\""); bb.writeVarUint(encoded);
  }

  var value = message["detachedSymbolId"];
  if (value != null) {
    bb.writeVarUint(342);
    this["encodeSymbolId"](value, bb);
  }

  var value = message["childReadingDirection"];
  if (value != null) {
    bb.writeVarUint(346);
    var encoded = this["ChildReadingDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ChildReadingDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["readingIndex"];
  if (value != null) {
    bb.writeVarUint(347);
    bb.writeString(value);
  }

  var value = message["documentColorProfile"];
  if (value != null) {
    bb.writeVarUint(349);
    var encoded = this["DocumentColorProfile"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DocumentColorProfile\""); bb.writeVarUint(encoded);
  }

  var value = message["developerRelatedLinks"];
  if (value != null) {
    bb.writeVarUint(354);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDeveloperRelatedLink"](value, bb);
    }
  }

  var value = message["slideActiveThemeLibKey"];
  if (value != null) {
    bb.writeVarUint(356);
    bb.writeString(value);
  }

  var value = message["editScopeInfo"];
  if (value != null) {
    bb.writeVarUint(365);
    this["encodeEditScopeInfo"](value, bb);
  }

  var value = message["semanticWeight"];
  if (value != null) {
    bb.writeVarUint(374);
    var encoded = this["SemanticWeight"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SemanticWeight\""); bb.writeVarUint(encoded);
  }

  var value = message["semanticItalic"];
  if (value != null) {
    bb.writeVarUint(375);
    var encoded = this["SemanticItalic"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SemanticItalic\""); bb.writeVarUint(encoded);
  }

  var value = message["areSlidesManuallyIndented"];
  if (value != null) {
    bb.writeVarUint(403);
    bb.writeByte(value);
  }

  var value = message["isResponsiveSet"];
  if (value != null) {
    bb.writeVarUint(387);
    bb.writeByte(value);
  }

  var value = message["derivedBreakpointData"];
  if (value != null) {
    bb.writeVarUint(500);
    this["encodeDerivedBreakpointData"](value, bb);
  }

  var value = message["defaultResponsiveSetId"];
  if (value != null) {
    bb.writeVarUint(398);
    this["encodeGUID"](value, bb);
  }

  var value = message["isPrimaryBreakpoint"];
  if (value != null) {
    bb.writeVarUint(458);
    bb.writeByte(value);
  }

  var value = message["primaryResponsiveNodeId"];
  if (value != null) {
    bb.writeVarUint(457);
    this["encodeGUID"](value, bb);
  }

  var value = message["multiEditGlueId"];
  if (value != null) {
    bb.writeVarUint(462);
    this["encodeGUID"](value, bb);
  }

  var value = message["breakpointMinWidth"];
  if (value != null) {
    bb.writeVarUint(501);
    bb.writeVarFloat(value);
  }

  var value = message["isBreakpointInFocus"];
  if (value != null) {
    bb.writeVarUint(522);
    bb.writeByte(value);
  }

  var value = message["responsiveSetSettings"];
  if (value != null) {
    bb.writeVarUint(400);
    this["encodeResponsiveSetSettings"](value, bb);
  }

  var value = message["behaviors"];
  if (value != null) {
    bb.writeVarUint(404);
    this["encodeNodeBehaviors"](value, bb);
  }

  var value = message["sourceCode"];
  if (value != null) {
    bb.writeVarUint(414);
    bb.writeString(value);
  }

  var value = message["sourceCodeCollaborativeTextVersion"];
  if (value != null) {
    bb.writeVarUint(534);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCollaborativeTextOpID"](value, bb);
    }
  }

  var value = message["collaborativeSourceCode"];
  if (value != null) {
    bb.writeVarUint(444);
    this["encodeCollaborativePlainText"](value, bb);
  }

  var value = message["belongsToCodeLibraryId"];
  if (value != null) {
    bb.writeVarUint(427);
    this["encodeCodeLibraryId"](value, bb);
  }

  var value = message["importedCodeFiles"];
  if (value != null) {
    bb.writeVarUint(467);
    this["encodeImportedCodeFiles"](value, bb);
  }

  var value = message["codeFileCanvasNodeId"];
  if (value != null) {
    bb.writeVarUint(468);
    this["encodeCanvasNodeId"](value, bb);
  }

  var value = message["isEntrypointCodeFile"];
  if (value != null) {
    bb.writeVarUint(498);
    bb.writeByte(value);
  }

  var value = message["componentOrStateGroupKey"];
  if (value != null) {
    bb.writeVarUint(502);
    bb.writeString(value);
  }

  var value = message["componentOrStateGroupVersion"];
  if (value != null) {
    bb.writeVarUint(503);
    bb.writeVarUint(value);
  }

  var value = message["sourceCodeLibraryKey"];
  if (value != null) {
    bb.writeVarUint(504);
    bb.writeString(value);
  }

  var value = message["sourceCodeLibraryKeys"];
  if (value != null) {
    bb.writeVarUint(515);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }

  var value = message["usedMakeLibraries"];
  if (value != null) {
    bb.writeVarUint(524);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeUsedMakeLibrary"](value, bb);
    }
  }

  var value = message["makeLibraryComponentId"];
  if (value != null) {
    bb.writeVarUint(518);
    bb.writeString(value);
  }

  var value = message["shouldHidePreviewForMakeKitCreation"];
  if (value != null) {
    bb.writeVarUint(520);
    bb.writeByte(value);
  }

  var value = message["isMakeKit"];
  if (value != null) {
    bb.writeVarUint(551);
    bb.writeByte(value);
  }

  var value = message["codePreviewSettings"];
  if (value != null) {
    bb.writeVarUint(531);
    this["encodePrototypeDevice"](value, bb);
  }

  var value = message["codeExamples"];
  if (value != null) {
    bb.writeVarUint(525);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCodeExample"](value, bb);
    }
  }

  var value = message["exportedFromCodeFileId"];
  if (value != null) {
    bb.writeVarUint(428);
    this["encodeCodeFileId"](value, bb);
  }

  var value = message["codeExportName"];
  if (value != null) {
    bb.writeVarUint(430);
    bb.writeString(value);
  }

  var value = message["codeComponentDescription"];
  if (value != null) {
    bb.writeVarUint(547);
    bb.writeString(value);
  }

  var value = message["backingCodeComponentId"];
  if (value != null) {
    bb.writeVarUint(429);
    this["encodeCodeComponentId"](value, bb);
  }

  var value = message["isMainCodeComponent"];
  if (value != null) {
    bb.writeVarUint(487);
    bb.writeByte(value);
  }

  var value = message["codeSnapshotState"];
  if (value != null) {
    bb.writeVarUint(431);
    var encoded = this["CodeSnapshotState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeSnapshotState\""); bb.writeVarUint(encoded);
  }

  var value = message["chatMessages"];
  if (value != null) {
    bb.writeVarUint(451);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChatMessage"](value, bb);
    }
  }

  var value = message["chatCompressionState"];
  if (value != null) {
    bb.writeVarUint(485);
    this["encodeNodeChatCompressionState"](value, bb);
  }

  var value = message["aiChatThread"];
  if (value != null) {
    bb.writeVarUint(496);
    this["encodeAIChatThread"](value, bb);
  }

  var value = message["codeChatMessagesKey"];
  if (value != null) {
    bb.writeVarUint(484);
    bb.writeString(value);
  }

  var value = message["codeSnapshot"];
  if (value != null) {
    bb.writeVarUint(459);
    this["encodeCodeSnapshot"](value, bb);
  }

  var value = message["codeSnapshotLayers"];
  if (value != null) {
    bb.writeVarUint(589);
    this["encodeCodeSnapshotLayers"](value, bb);
  }

  var value = message["codeSnapshotInvalidatedAt"];
  if (value != null) {
    bb.writeVarUint(480);
    bb.writeVarUint(value);
  }

  var value = message["isCodeBehavior"];
  if (value != null) {
    bb.writeVarUint(465);
    bb.writeByte(value);
  }

  var value = message["autoForkCode"];
  if (value != null) {
    bb.writeVarUint(469);
    bb.writeByte(value);
  }

  var value = message["hasBeenManuallyRenamed"];
  if (value != null) {
    bb.writeVarUint(470);
    bb.writeByte(value);
  }

  var value = message["codeCreatedFromDesign"];
  if (value != null) {
    bb.writeVarUint(471);
    bb.writeByte(value);
  }

  var value = message["codeCreatedFromDesignNodeId"];
  if (value != null) {
    bb.writeVarUint(481);
    this["encodeCanvasNodeId"](value, bb);
  }

  var value = message["imageImports"];
  if (value != null) {
    bb.writeVarUint(473);
    this["encodeImageImportMap"](value, bb);
  }

  var value = message["codeObjectType"];
  if (value != null) {
    bb.writeVarUint(516);
    var encoded = this["CodeObjectType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeObjectType\""); bb.writeVarUint(encoded);
  }

  var value = message["codeFilePath"];
  if (value != null) {
    bb.writeVarUint(472);
    bb.writeString(value);
  }

  var value = message["codeBehaviorData"];
  if (value != null) {
    bb.writeVarUint(478);
    this["encodeCodeBehaviorData"](value, bb);
  }

  var value = message["codeLibraryFormat"];
  if (value != null) {
    bb.writeVarUint(519);
    bb.writeVarUint(value);
  }

  var value = message["isCodePreviewPlayingOnCanvas"];
  if (value != null) {
    bb.writeVarUint(527);
    bb.writeByte(value);
  }

  var value = message["codeEmbedInfo"];
  if (value != null) {
    bb.writeVarUint(532);
    this["encodeCodeEmbedInfo"](value, bb);
  }

  var value = message["isEmbedCodeLayer"];
  if (value != null) {
    bb.writeVarUint(546);
    bb.writeByte(value);
  }

  var value = message["codeSourceInfo"];
  if (value != null) {
    bb.writeVarUint(558);
    this["encodeCodeSourceInfo"](value, bb);
  }

  var value = message["mimeType"];
  if (value != null) {
    bb.writeVarUint(536);
    bb.writeString(value);
  }

  var value = message["blobRef"];
  if (value != null) {
    bb.writeVarUint(537);
    bb.writeByteArray(value);
  }

  var value = message["cmsSelector"];
  if (value != null) {
    bb.writeVarUint(419);
    this["encodeCMSSelector"](value, bb);
  }

  var value = message["cmsConsumptionMap"];
  if (value != null) {
    bb.writeVarUint(420);
    this["encodeCMSConsumptionMap"](value, bb);
  }

  var value = message["cmsRichTextStyleMap"];
  if (value != null) {
    bb.writeVarUint(460);
    this["encodeCMSRichTextStyleMap"](value, bb);
  }

  var value = message["repeaterSymbolId"];
  if (value != null) {
    bb.writeVarUint(539);
    this["encodeSymbolId"](value, bb);
  }

  var value = message["repeaterCmsOverrideData"];
  if (value != null) {
    bb.writeVarUint(540);
    this["encodeRepeaterCmsOverrideData"](value, bb);
  }

  var value = message["repeaterSymbolOverrideData"];
  if (value != null) {
    bb.writeVarUint(549);
    this["encodeRepeaterSymbolOverrideData"](value, bb);
  }

  var value = message["repeaterOverrideData"];
  if (value != null) {
    bb.writeVarUint(541);
    this["encodeRepeaterOverrideData"](value, bb);
  }

  var value = message["aiEditedNodeChangeFieldNumbers"];
  if (value != null) {
    bb.writeVarUint(405);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["aiEditScopeLabel"];
  if (value != null) {
    bb.writeVarUint(408);
    bb.writeString(value);
  }

  var value = message["firstDraftData"];
  if (value != null) {
    bb.writeVarUint(407);
    this["encodeFirstDraftData"](value, bb);
  }

  var value = message["firstDraftKitElementData"];
  if (value != null) {
    bb.writeVarUint(418);
    this["encodeFirstDraftKitElementData"](value, bb);
  }

  var value = message["cooperRevertData"];
  if (value != null) {
    bb.writeVarUint(421);
    this["encodeCooperRevertData"](value, bb);
  }

  var value = message["cooperTemplateData"];
  if (value != null) {
    bb.writeVarUint(461);
    this["encodeCooperTemplateData"](value, bb);
  }

  var value = message["buzzApprovalRequests"];
  if (value != null) {
    bb.writeVarUint(528);
    this["encodeBuzzApprovalRequests"](value, bb);
  }

  var value = message["buzzApprovalNodeStatusInfo"];
  if (value != null) {
    bb.writeVarUint(529);
    this["encodeBuzzApprovalNodeStatusInfo"](value, bb);
  }

  var value = message["hubFileAttribution"];
  if (value != null) {
    bb.writeVarUint(422);
    this["encodeHubFileAttribution"](value, bb);
  }

  var value = message["managedStringData"];
  if (value != null) {
    bb.writeVarUint(454);
    this["encodeManagedStringData"](value, bb);
  }

  var value = message["thumbnailInfo"];
  if (value != null) {
    bb.writeVarUint(466);
    this["encodeThumbnailInfo"](value, bb);
  }

  var value = message["aiCanvasPrompt"];
  if (value != null) {
    bb.writeVarUint(494);
    this["encodeAiCanvasPrompt"](value, bb);
  }

  var value = message["backingNodeId"];
  if (value != null) {
    bb.writeVarUint(499);
    this["encodeCanvasNodeId"](value, bb);
  }

  var value = message["pageStatus"];
  if (value != null) {
    bb.writeVarUint(548);
    bb.writeString(value);
  }

  var value = message["motionTransform"];
  if (value != null) {
    bb.writeVarUint(523);
    this["encodeTRSSTransform2D"](value, bb);
  }

  var value = message["linkMotionScaleAspectRatio"];
  if (value != null) {
    bb.writeVarUint(597);
    bb.writeByte(value);
  }

  var value = message["timelinePosition"];
  if (value != null) {
    bb.writeVarUint(506);
    bb.writeVarInt64(value);
  }

  var value = message["keyframeValue"];
  if (value != null) {
    bb.writeVarUint(507);
    this["encodeKeyframeValueData"](value, bb);
  }

  var value = message["keyframeValueRef"];
  if (value != null) {
    bb.writeVarUint(586);
    this["encodeVariableData"](value, bb);
  }

  var value = message["interpolationType"];
  if (value != null) {
    bb.writeVarUint(505);
    var encoded = this["InterpolationType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationType\""); bb.writeVarUint(encoded);
  }

  var value = message["bezierHandles"];
  if (value != null) {
    bb.writeVarUint(508);
    this["encodeBezierHandles"](value, bb);
  }

  var value = message["easingData"];
  if (value != null) {
    bb.writeVarUint(535);
    this["encodeEasingData"](value, bb);
  }

  var value = message["motionPathBezierHandles"];
  if (value != null) {
    bb.writeVarUint(598);
    this["encodeBezierHandles"](value, bb);
  }

  var value = message["interpolationColorSpace"];
  if (value != null) {
    bb.writeVarUint(599);
    var encoded = this["InterpolationColorSpace"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationColorSpace\""); bb.writeVarUint(encoded);
  }

  var value = message["interpolationHueMethod"];
  if (value != null) {
    bb.writeVarUint(600);
    var encoded = this["InterpolationHueMethod"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationHueMethod\""); bb.writeVarUint(encoded);
  }

  var value = message["keyframeOperation"];
  if (value != null) {
    bb.writeVarUint(509);
    var encoded = this["KeyframeOperation"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"KeyframeOperation\""); bb.writeVarUint(encoded);
  }

  var value = message["timelinePositionType"];
  if (value != null) {
    bb.writeVarUint(510);
    var encoded = this["TimelinePositionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TimelinePositionType\""); bb.writeVarUint(encoded);
  }

  var value = message["trackLoopMode"];
  if (value != null) {
    bb.writeVarUint(591);
    var encoded = this["TrackLoopMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TrackLoopMode\""); bb.writeVarUint(encoded);
  }

  var value = message["isClip"];
  if (value != null) {
    bb.writeVarUint(545);
    bb.writeByte(value);
  }

  var value = message["clipId"];
  if (value != null) {
    bb.writeVarUint(511);
    this["encodeGUID"](value, bb);
  }

  var value = message["timelineDuration"];
  if (value != null) {
    bb.writeVarUint(512);
    bb.writeVarUint64(value);
  }

  var value = message["timelineOffset"];
  if (value != null) {
    bb.writeVarUint(513);
    bb.writeVarInt64(value);
  }

  var value = message["timelineDisabled"];
  if (value != null) {
    bb.writeVarUint(543);
    bb.writeByte(value);
  }

  var value = message["playbackStyle"];
  if (value != null) {
    bb.writeVarUint(514);
    var encoded = this["PlaybackStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlaybackStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["timelineDefinitions"];
  if (value != null) {
    bb.writeVarUint(552);
    this["encodeTimelineDefinitionsMap"](value, bb);
  }

  var value = message["timelineAssignments"];
  if (value != null) {
    bb.writeVarUint(553);
    this["encodeTimelineAssignmentsMap"](value, bb);
  }

  var value = message["animationPresets"];
  if (value != null) {
    bb.writeVarUint(521);
    this["encodeAnimationPresets"](value, bb);
  }

  var value = message["styleIdsForAnimation"];
  if (value != null) {
    bb.writeVarUint(582);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStyleIdForAnimation"](value, bb);
    }
  }

  var value = message["backingAnimationPresetId"];
  if (value != null) {
    bb.writeVarUint(583);
    this["encodeAnimationPresetId"](value, bb);
  }

  var value = message["tools"];
  if (value != null) {
    bb.writeVarUint(568);
    this["encodeTools"](value, bb);
  }

  var value = message["customEffects"];
  if (value != null) {
    bb.writeVarUint(569);
    this["encodeCustomEffects"](value, bb);
  }

  var value = message["transitionOverrides"];
  if (value != null) {
    bb.writeVarUint(526);
    this["encodeTransitionOverrideData"](value, bb);
  }

  var value = message["useLegacySmartAnimate"];
  if (value != null) {
    bb.writeVarUint(544);
    bb.writeByte(value);
  }

  var value = message["sourceControlConfig"];
  if (value != null) {
    bb.writeVarUint(557);
    this["encodeSourceControlConfig"](value, bb);
  }

  var value = message["makeContentState"];
  if (value != null) {
    bb.writeVarUint(595);
    var encoded = this["MakeContentState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MakeContentState\""); bb.writeVarUint(encoded);
  }

  var value = message["specBlockType"];
  if (value != null) {
    bb.writeVarUint(559);
    var encoded = this["SpecBlockType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SpecBlockType\""); bb.writeVarUint(encoded);
  }

  var value = message["specBlockContent"];
  if (value != null) {
    bb.writeVarUint(560);
    this["encodeCollaborativePlainText"](value, bb);
  }

  var value = message["specCodeBlockLanguage"];
  if (value != null) {
    bb.writeVarUint(561);
    bb.writeString(value);
  }

  var value = message["specBlockTableAlignment"];
  if (value != null) {
    bb.writeVarUint(562);
    bb.writeString(value);
  }

  var value = message["specBlockIndentLevel"];
  if (value != null) {
    bb.writeVarUint(563);
    bb.writeVarInt(value);
  }

  var value = message["specImageHash"];
  if (value != null) {
    bb.writeVarUint(575);
    bb.writeString(value);
  }

  var value = message["specWidth"];
  if (value != null) {
    bb.writeVarUint(576);
    bb.writeVarInt(value);
  }

  var value = message["specHeight"];
  if (value != null) {
    bb.writeVarUint(577);
    bb.writeVarInt(value);
  }

  var value = message["specBlockTableRowHeights"];
  if (value != null) {
    bb.writeVarUint(578);
    this["encodeTableRowColumnSizeMap"](value, bb);
  }

  var value = message["specBlockTableColumnWidths"];
  if (value != null) {
    bb.writeVarUint(579);
    this["encodeTableRowColumnSizeMap"](value, bb);
  }

  var value = message["specEmbedUrl"];
  if (value != null) {
    bb.writeVarUint(590);
    bb.writeString(value);
  }

  var value = message["placeholder"];
  if (value != null) {
    bb.writeVarUint(565);
    bb.writeByte(value);
  }

  var value = message["placeholderClientLifecycleId"];
  if (value != null) {
    bb.writeVarUint(584);
    bb.writeString(value);
  }

  var value = message["placeholderInvalidateAt"];
  if (value != null) {
    bb.writeVarUint(585);
    bb.writeVarInt(value);
  }

  var value = message["disableJitDst"];
  if (value != null) {
    bb.writeVarUint(567);
    bb.writeByte(value);
  }

  var value = message["customToolArtifactRef"];
  if (value != null) {
    bb.writeVarUint(588);
    this["encodeCustomToolArtifactRef"](value, bb);
  }

  var value = message["weaveConnection"];
  if (value != null) {
    bb.writeVarUint(592);
    this["encodeWeaveConnection"](value, bb);
  }

  var value = message["weaveLayerConnections"];
  if (value != null) {
    bb.writeVarUint(593);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeWeaveLayerConnection"](value, bb);
    }
  }

  var value = message["weaveLayerId"];
  if (value != null) {
    bb.writeVarUint(596);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["GitRepoRefProvider"] = {
  "0": "UGIT",
  "1": "GITHUB",
  "2": "OTHER",
  "UGIT": 0,
  "GITHUB": 1,
  "OTHER": 2
};

exports["decodeGitRepoRef"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["provider"] = this["GitRepoRefProvider"][bb.readVarUint()];
        break;

      case 2:
        result["gitRepo"] = bb.readString();
        break;

      case 3:
        result["gitRef"] = bb.readString();
        break;

      case 4:
        result["gitBaseRef"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGitRepoRef"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["provider"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["GitRepoRefProvider"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"GitRepoRefProvider\""); bb.writeVarUint(encoded);
  }

  var value = message["gitRepo"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["gitRef"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["gitBaseRef"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSourceControlConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["origin"] = this["decodeGitRepoRef"](bb);
        break;

      case 2:
        result["upstream"] = this["decodeGitRepoRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSourceControlConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["origin"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGitRepoRef"](value, bb);
  }

  var value = message["upstream"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGitRepoRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["MakeContentState"] = {
  "0": "UNKNOWN",
  "1": "EMPTY",
  "2": "POPULATED",
  "3": "SEEDED",
  "UNKNOWN": 0,
  "EMPTY": 1,
  "POPULATED": 2,
  "SEEDED": 3
};

exports["decodeCodeSnapshot"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 6:
        result["state"] = this["CodeSnapshotState"][bb.readVarUint()];
        break;

      case 7:
        result["invalidatedAt"] = bb.readVarUint();
        break;

      case 8:
        result["cachedPreviewStatus"] = this["CachedPreviewStatus"][bb.readVarUint()];
        break;

      case 1:
        var length = bb.readVarUint();
        var values = result["paints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 2:
        result["offset"] = this["decodeVector"](bb);
        break;

      case 3:
        result["layoutSize"] = this["decodeVector"](bb);
        break;

      case 5:
        result["canvasSize"] = this["decodeVector"](bb);
        break;

      case 4:
        result["devicePixelRatio"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeSnapshot"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["CodeSnapshotState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeSnapshotState\""); bb.writeVarUint(encoded);
  }

  var value = message["invalidatedAt"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarUint(value);
  }

  var value = message["cachedPreviewStatus"];
  if (value != null) {
    bb.writeVarUint(8);
    var encoded = this["CachedPreviewStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CachedPreviewStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["paints"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["layoutSize"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVector"](value, bb);
  }

  var value = message["canvasSize"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVector"](value, bb);
  }

  var value = message["devicePixelRatio"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeOutputLayer"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["node"] = this["decodeNodeChange"](bb);
        break;

      case 2:
        result["sourceNodeId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeOutputLayer"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["node"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["sourceNodeId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeSnapshotLayers"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["state"] = this["CodeSnapshotState"][bb.readVarUint()];
        break;

      case 2:
        result["invalidatedAt"] = bb.readVarUint();
        break;

      case 4:
        result["cachedPreviewStatus"] = this["CachedPreviewStatus"][bb.readVarUint()];
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["layers"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCodeOutputLayer"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeSnapshotLayers"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CodeSnapshotState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeSnapshotState\""); bb.writeVarUint(encoded);
  }

  var value = message["invalidatedAt"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["cachedPreviewStatus"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["CachedPreviewStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CachedPreviewStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["layers"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCodeOutputLayer"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeBehaviorData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["icon"] = bb.readString();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["nodeTypes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      case 4:
        result["category"] = bb.readString();
        break;

      case 5:
        result["apiVersion"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeBehaviorData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["icon"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["nodeTypes"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }

  var value = message["category"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["apiVersion"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeExample"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["exampleName"] = bb.readString();
        break;

      case 2:
        result["codeExportName"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeExample"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["exampleName"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["codeExportName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeUsedMakeLibrary"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["makeLibraryId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeUsedMakeLibrary"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["makeLibraryId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCookieBannerText"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["bannerHeader"] = bb.readString();
        break;

      case 2:
        result["bannerDisclaimerExplicit"] = bb.readString();
        break;

      case 3:
        result["bannerDisclaimerImplicit"] = bb.readString();
        break;

      case 4:
        result["policyLabel"] = bb.readString();
        break;

      case 5:
        result["acceptText"] = bb.readString();
        break;

      case 6:
        result["acknowledgeText"] = bb.readString();
        break;

      case 7:
        result["manageText"] = bb.readString();
        break;

      case 8:
        result["rejectText"] = bb.readString();
        break;

      case 9:
        result["necessaryText"] = bb.readString();
        break;

      case 10:
        result["necessaryDescription"] = bb.readString();
        break;

      case 11:
        result["analyticsText"] = bb.readString();
        break;

      case 12:
        result["analyticsDescription"] = bb.readString();
        break;

      case 13:
        result["preferencesText"] = bb.readString();
        break;

      case 14:
        result["preferencesDescription"] = bb.readString();
        break;

      case 15:
        result["marketingText"] = bb.readString();
        break;

      case 16:
        result["marketingDescription"] = bb.readString();
        break;

      case 17:
        result["saveLabel"] = bb.readString();
        break;

      case 18:
        result["triggerLabel"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCookieBannerText"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["bannerHeader"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["bannerDisclaimerExplicit"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["bannerDisclaimerImplicit"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["policyLabel"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["acceptText"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["acknowledgeText"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }

  var value = message["manageText"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeString(value);
  }

  var value = message["rejectText"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["necessaryText"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeString(value);
  }

  var value = message["necessaryDescription"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeString(value);
  }

  var value = message["analyticsText"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeString(value);
  }

  var value = message["analyticsDescription"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeString(value);
  }

  var value = message["preferencesText"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeString(value);
  }

  var value = message["preferencesDescription"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeString(value);
  }

  var value = message["marketingText"];
  if (value != null) {
    bb.writeVarUint(15);
    bb.writeString(value);
  }

  var value = message["marketingDescription"];
  if (value != null) {
    bb.writeVarUint(16);
    bb.writeString(value);
  }

  var value = message["saveLabel"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeString(value);
  }

  var value = message["triggerLabel"];
  if (value != null) {
    bb.writeVarUint(18);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCookieBannerSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["enabled"] = !!bb.readByte();
        break;

      case 2:
        result["componentType"] = this["CookieBannerComponentType"][bb.readVarUint()];
        break;

      case 3:
        result["xAlignment"] = this["CookieXAlignment"][bb.readVarUint()];
        break;

      case 4:
        result["yAlignment"] = this["CookieYAlignment"][bb.readVarUint()];
        break;

      case 5:
        result["triggerXAlignment"] = this["CookieXAlignment"][bb.readVarUint()];
        break;

      case 6:
        result["triggerYAlignment"] = this["CookieYAlignment"][bb.readVarUint()];
        break;

      case 7:
        result["triggerComponentType"] = this["TriggerComponentType"][bb.readVarUint()];
        break;

      case 8:
        result["policyUrl"] = bb.readString();
        break;

      case 9:
        result["text"] = this["decodeCookieBannerText"](bb);
        break;

      case 10:
        result["policyLink"] = this["decodeGUID"](bb);
        break;

      case 11:
        result["locale"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCookieBannerSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["enabled"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["componentType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["CookieBannerComponentType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CookieBannerComponentType\""); bb.writeVarUint(encoded);
  }

  var value = message["xAlignment"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["CookieXAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CookieXAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["yAlignment"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["CookieYAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CookieYAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["triggerXAlignment"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["CookieXAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CookieXAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["triggerYAlignment"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["CookieYAlignment"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CookieYAlignment\""); bb.writeVarUint(encoded);
  }

  var value = message["triggerComponentType"];
  if (value != null) {
    bb.writeVarUint(7);
    var encoded = this["TriggerComponentType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TriggerComponentType\""); bb.writeVarUint(encoded);
  }

  var value = message["policyUrl"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["text"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeCookieBannerText"](value, bb);
  }

  var value = message["policyLink"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeGUID"](value, bb);
  }

  var value = message["locale"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CookieBannerComponentType"] = {
  "0": "BANNER",
  "1": "MODAL",
  "BANNER": 0,
  "MODAL": 1
};
exports["TriggerComponentType"] = {
  "0": "BANNER",
  "1": "TAG",
  "BANNER": 0,
  "TAG": 1
};
exports["CookieXAlignment"] = {
  "0": "LEFT",
  "1": "CENTER",
  "2": "RIGHT",
  "LEFT": 0,
  "CENTER": 1,
  "RIGHT": 2
};
exports["CookieYAlignment"] = {
  "0": "TOP",
  "1": "CENTER",
  "2": "BOTTOM",
  "TOP": 0,
  "CENTER": 1,
  "BOTTOM": 2
};

exports["decodeResponsiveSetSettings"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["title"] = bb.readString();
        break;

      case 2:
        result["description"] = bb.readString();
        break;

      case 3:
        result["scalingMode"] = this["ResponsiveScalingMode"][bb.readVarUint()];
        break;

      case 4:
        result["scalingMinFontSize"] = bb.readVarFloat();
        break;

      case 5:
        result["scalingMaxFontSize"] = bb.readVarFloat();
        break;

      case 6:
        result["scalingMinLayoutWidth"] = bb.readVarFloat();
        break;

      case 7:
        result["scalingMaxLayoutWidth"] = bb.readVarFloat();
        break;

      case 8:
        result["lang"] = bb.readString();
        break;

      case 9:
        result["faviconHash"] = bb.readString();
        break;

      case 10:
        result["socialImageHash"] = bb.readString();
        break;

      case 11:
        result["googleAnalyticsID"] = bb.readString();
        break;

      case 12:
        result["blockSearchIndexing"] = !!bb.readByte();
        break;

      case 13:
        result["customCodeHeadStart"] = bb.readString();
        break;

      case 14:
        result["customCodeHeadEnd"] = bb.readString();
        break;

      case 15:
        result["customCodeBodyStart"] = bb.readString();
        break;

      case 16:
        result["customCodeBodyEnd"] = bb.readString();
        break;

      case 17:
        result["faviconID"] = this["decodeGUID"](bb);
        break;

      case 18:
        result["socialImageID"] = this["decodeGUID"](bb);
        break;

      case 19:
        result["addBypassLinks"] = !!bb.readByte();
        break;

      case 20:
        result["ignoreReducedMotion"] = !!bb.readByte();
        break;

      case 21:
        result["cookieBanner"] = this["decodeCookieBannerSettings"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeResponsiveSetSettings"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["title"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["scalingMode"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["ResponsiveScalingMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ResponsiveScalingMode\""); bb.writeVarUint(encoded);
  }

  var value = message["scalingMinFontSize"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["scalingMaxFontSize"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["scalingMinLayoutWidth"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["scalingMaxLayoutWidth"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["lang"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["faviconHash"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeString(value);
  }

  var value = message["socialImageHash"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeString(value);
  }

  var value = message["googleAnalyticsID"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeString(value);
  }

  var value = message["blockSearchIndexing"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeByte(value);
  }

  var value = message["customCodeHeadStart"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeString(value);
  }

  var value = message["customCodeHeadEnd"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeString(value);
  }

  var value = message["customCodeBodyStart"];
  if (value != null) {
    bb.writeVarUint(15);
    bb.writeString(value);
  }

  var value = message["customCodeBodyEnd"];
  if (value != null) {
    bb.writeVarUint(16);
    bb.writeString(value);
  }

  var value = message["faviconID"];
  if (value != null) {
    bb.writeVarUint(17);
    this["encodeGUID"](value, bb);
  }

  var value = message["socialImageID"];
  if (value != null) {
    bb.writeVarUint(18);
    this["encodeGUID"](value, bb);
  }

  var value = message["addBypassLinks"];
  if (value != null) {
    bb.writeVarUint(19);
    bb.writeByte(value);
  }

  var value = message["ignoreReducedMotion"];
  if (value != null) {
    bb.writeVarUint(20);
    bb.writeByte(value);
  }

  var value = message["cookieBanner"];
  if (value != null) {
    bb.writeVarUint(21);
    this["encodeCookieBannerSettings"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ResponsiveScalingMode"] = {
  "0": "REFLOW",
  "1": "SCALE",
  "REFLOW": 0,
  "SCALE": 1
};

exports["decodeCMSSelector"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["cmsCollectionId"] = bb.readString();
        break;

      case 2:
        result["filterCriteria"] = this["decodeCMSFilterCritera"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["sorts"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCMSSelectorSort"](bb);
        break;

      case 4:
        result["limit"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSSelector"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["cmsCollectionId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["filterCriteria"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeCMSFilterCritera"](value, bb);
  }

  var value = message["sorts"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCMSSelectorSort"](value, bb);
    }
  }

  var value = message["limit"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCMSFilterCritera"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["matchType"] = this["CMSFilterCriteriaMatchType"][bb.readVarUint()];
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["filters"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCMSSelectorFilter"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSFilterCritera"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["matchType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CMSFilterCriteriaMatchType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CMSFilterCriteriaMatchType\""); bb.writeVarUint(encoded);
  }

  var value = message["filters"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCMSSelectorFilter"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CMSFilterCriteriaMatchType"] = {
  "0": "MATCH_ALL",
  "1": "MATCH_ANY",
  "MATCH_ALL": 0,
  "MATCH_ANY": 1
};

exports["decodeCMSSelectorFilter"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["cmsFieldId"] = bb.readString();
        break;

      case 2:
        result["op"] = this["CMSSelectorFilterOperator"][bb.readVarUint()];
        break;

      case 3:
        result["comparisonValue"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSSelectorFilter"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["cmsFieldId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["op"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["CMSSelectorFilterOperator"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CMSSelectorFilterOperator\""); bb.writeVarUint(encoded);
  }

  var value = message["comparisonValue"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CMSSelectorFilterOperator"] = {
  "0": "EQUALS",
  "EQUALS": 0
};

exports["decodeCMSSelectorSort"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["cmsFieldId"] = bb.readString();
        break;

      case 2:
        result["orderBy"] = this["CMSFieldOrderBy"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSSelectorSort"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["cmsFieldId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["orderBy"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["CMSFieldOrderBy"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CMSFieldOrderBy\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CMSFieldOrderBy"] = {
  "0": "ASCENDING",
  "1": "DESCENDING",
  "ASCENDING": 0,
  "DESCENDING": 1
};

exports["decodeCMSConsumptionMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCMSConsumptionMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSConsumptionMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCMSConsumptionMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCMSConsumptionMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["consumptionField"] = this["CMSConsumptionField"][bb.readVarUint()];
        break;

      case 2:
        result["cmsFieldId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSConsumptionMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["consumptionField"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CMSConsumptionField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CMSConsumptionField\""); bb.writeVarUint(encoded);
  }

  var value = message["cmsFieldId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CMSConsumptionField"] = {
  "0": "MISSING",
  "1": "TEXT_DATA",
  "MISSING": 0,
  "TEXT_DATA": 1
};

exports["decodeCMSRichTextStyleMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCMSRichTextStyleEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSRichTextStyleMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCMSRichTextStyleEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCMSRichTextStyleEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["styleClass"] = this["CMSRichTextStyleClass"][bb.readVarUint()];
        break;

      case 2:
        result["textDescriptor"] = this["decodeCMSRichTextDescriptor"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSRichTextStyleEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["styleClass"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CMSRichTextStyleClass"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CMSRichTextStyleClass\""); bb.writeVarUint(encoded);
  }

  var value = message["textDescriptor"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeCMSRichTextDescriptor"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CMSRichTextStyleClass"] = {
  "0": "HEADING1",
  "1": "HEADING2",
  "2": "HEADING3",
  "3": "HEADING4",
  "4": "HEADING5",
  "5": "HEADING6",
  "6": "PARAGRAPH",
  "7": "LINK",
  "8": "BLOCKQUOTE",
  "HEADING1": 0,
  "HEADING2": 1,
  "HEADING3": 2,
  "HEADING4": 3,
  "HEADING5": 4,
  "HEADING6": 5,
  "PARAGRAPH": 6,
  "LINK": 7,
  "BLOCKQUOTE": 8
};

exports["decodeCMSRichTextDescriptor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["textStyleId"] = this["decodeStyleId"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["fontNameVariants"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFontName"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSRichTextDescriptor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["textStyleId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeStyleId"](value, bb);
  }

  var value = message["fontNameVariants"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFontName"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRepeaterCmsOverrideData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRepeaterCmsOverrideData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRepeaterOverrideData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["parentIndexOverrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRepeaterOverrideData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["parentIndexOverrides"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRepeaterSymbolOverrideData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["overridesByPosition"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeRepeaterPositionOverrides"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRepeaterSymbolOverrideData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overridesByPosition"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeRepeaterPositionOverrides"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRepeaterPositionOverrides"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["position"] = this["decodeParentIndex"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRepeaterPositionOverrides"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeParentIndex"](value, bb);
  }

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInheritedVariablesData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["variableIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeInheritedVariableEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInheritedVariablesData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["variableIds"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeInheritedVariableEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInheritedVariableEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["variableId"] = this["decodeVariableID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInheritedVariableEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["variableId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHubFileAttribution"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["hubFileId"] = bb.readString();
        break;

      case 2:
        result["hubFileName"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHubFileAttribution"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["hubFileId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["hubFileName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["context"] = bb.readString();
        break;

      case 3:
        result["locale"] = bb.readString();
        break;

      case 4:
        result["content"] = this["decodeManagedStringNode"](bb);
        break;

      case 5:
        result["contentSchema"] = this["ManagedStringContentSchema"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["context"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["locale"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["content"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeManagedStringNode"](value, bb);
  }

  var value = message["contentSchema"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["ManagedStringContentSchema"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ManagedStringContentSchema\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ManagedStringContentSchema"] = {
  "0": "V0",
  "V0": 0
};
exports["ManagedStringNodeType"] = {
  "0": "TEXT",
  "1": "CONCATENATE",
  "2": "PLURAL",
  "3": "PLACEHOLDER",
  "TEXT": 0,
  "CONCATENATE": 1,
  "PLURAL": 2,
  "PLACEHOLDER": 3
};

exports["decodeManagedStringNode"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["ManagedStringNodeType"][bb.readVarUint()];
        break;

      case 2:
        result["textNodeData"] = this["decodeManagedStringTextNodeData"](bb);
        break;

      case 3:
        result["concatenateNodeData"] = this["decodeManagedStringConcatenateAstNodeData"](bb);
        break;

      case 4:
        result["pluralNodeData"] = this["decodeManagedStringPluralAstNodeData"](bb);
        break;

      case 5:
        result["placeholderNodeData"] = this["decodeManagedStringPlaceholderAstNodeData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringNode"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ManagedStringNodeType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ManagedStringNodeType\""); bb.writeVarUint(encoded);
  }

  var value = message["textNodeData"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeManagedStringTextNodeData"](value, bb);
  }

  var value = message["concatenateNodeData"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeManagedStringConcatenateAstNodeData"](value, bb);
  }

  var value = message["pluralNodeData"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeManagedStringPluralAstNodeData"](value, bb);
  }

  var value = message["placeholderNodeData"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeManagedStringPlaceholderAstNodeData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringTextNodeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringTextNodeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringConcatenateAstNodeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["values"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeManagedStringNode"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringConcatenateAstNodeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["values"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeManagedStringNode"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ManagedStringPluralType"] = {
  "0": "ZERO",
  "1": "ONE",
  "2": "TWO",
  "3": "FEW",
  "4": "MANY",
  "5": "OTHER",
  "ZERO": 0,
  "ONE": 1,
  "TWO": 2,
  "FEW": 3,
  "MANY": 4,
  "OTHER": 5
};

exports["decodeManagedStringPluralAstNodeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["identifier"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["conditions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeManagedStringPluralTypeMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringPluralAstNodeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["identifier"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["conditions"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeManagedStringPluralTypeMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringPluralTypeMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = this["ManagedStringPluralType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = this["decodeManagedStringNode"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringPluralTypeMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ManagedStringPluralType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ManagedStringPluralType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeManagedStringNode"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ManagedStringFormatType"] = {
  "0": "TEXT",
  "1": "DATE",
  "2": "TIME",
  "3": "NUMBER",
  "TEXT": 0,
  "DATE": 1,
  "TIME": 2,
  "NUMBER": 3
};

exports["decodeManagedStringPlaceholderAstNodeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["identifier"] = bb.readString();
        break;

      case 2:
        result["formatType"] = this["ManagedStringFormatType"][bb.readVarUint()];
        break;

      case 3:
        result["formatPattern"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringPlaceholderAstNodeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["identifier"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["formatType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["ManagedStringFormatType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ManagedStringFormatType\""); bb.writeVarUint(encoded);
  }

  var value = message["formatPattern"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCooperRevertData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["originalValues"] = this["decodeNodeChange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCooperRevertData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["originalValues"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeNodeChange"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVideoPlayback"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["autoplay"] = !!bb.readByte();
        break;

      case 2:
        result["mediaLoop"] = !!bb.readByte();
        break;

      case 3:
        result["muted"] = !!bb.readByte();
        break;

      case 4:
        result["showControls"] = !!bb.readByte();
        break;

      case 5:
        result["startTimeMs"] = bb.readVarUint();
        break;

      case 6:
        result["endTimeMs"] = bb.readVarUint();
        break;

      case 7:
        result["playbackRate"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVideoPlayback"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["autoplay"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["mediaLoop"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["muted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["showControls"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["startTimeMs"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["endTimeMs"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarUint(value);
  }

  var value = message["playbackRate"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["MediaAction"] = {
  "0": "PLAY",
  "1": "PAUSE",
  "2": "TOGGLE_PLAY_PAUSE",
  "3": "MUTE",
  "4": "UNMUTE",
  "5": "TOGGLE_MUTE_UNMUTE",
  "6": "SKIP_FORWARD",
  "7": "SKIP_BACKWARD",
  "8": "SKIP_TO",
  "9": "SET_PLAYBACK_RATE",
  "PLAY": 0,
  "PAUSE": 1,
  "TOGGLE_PLAY_PAUSE": 2,
  "MUTE": 3,
  "UNMUTE": 4,
  "TOGGLE_MUTE_UNMUTE": 5,
  "SKIP_FORWARD": 6,
  "SKIP_BACKWARD": 7,
  "SKIP_TO": 8,
  "SET_PLAYBACK_RATE": 9
};
exports["AnimationTimelineAction"] = {
  "0": "PLAY",
  "1": "PAUSE",
  "2": "TOGGLE_PLAY_PAUSE",
  "3": "SET_PLAYHEAD",
  "PLAY": 0,
  "PAUSE": 1,
  "TOGGLE_PLAY_PAUSE": 2,
  "SET_PLAYHEAD": 3
};

exports["decodeWidgetHoverStyle"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["fillPaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["strokePaints"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePaint"](bb);
        break;

      case 3:
        result["opacity"] = bb.readVarFloat();
        break;

      case 4:
        result["areFillPaintsSet"] = !!bb.readByte();
        break;

      case 5:
        result["areStrokePaintsSet"] = !!bb.readByte();
        break;

      case 6:
        result["isOpacitySet"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetHoverStyle"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["fillPaints"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["strokePaints"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePaint"](value, bb);
    }
  }

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["areFillPaintsSet"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["areStrokePaintsSet"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["isOpacitySet"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeWidgetDerivedSubtreeCursor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sessionID"] = bb.readVarUint();
        break;

      case 2:
        result["counter"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetDerivedSubtreeCursor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["counter"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMultiplayerMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMultiplayerMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMultiplayerMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMultiplayerMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMultiplayerMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["value"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMultiplayerMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableDataMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableDataMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableDataMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableDataMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableDataMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeField"] = bb.readVarUint();
        break;

      case 2:
        result["variableData"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["variableField"] = this["VariableField"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableDataMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeField"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["variableData"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["variableField"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["VariableField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableField\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["VariableField"] = {
  "0": "MISSING",
  "1": "CORNER_RADIUS",
  "2": "PARAGRAPH_SPACING",
  "3": "PARAGRAPH_INDENT",
  "4": "STROKE_WEIGHT",
  "5": "STACK_SPACING",
  "6": "STACK_PADDING_LEFT",
  "7": "STACK_PADDING_TOP",
  "8": "STACK_PADDING_RIGHT",
  "9": "STACK_PADDING_BOTTOM",
  "10": "VISIBLE",
  "11": "TEXT_DATA",
  "12": "WIDTH",
  "13": "HEIGHT",
  "14": "RECTANGLE_TOP_LEFT_CORNER_RADIUS",
  "15": "RECTANGLE_TOP_RIGHT_CORNER_RADIUS",
  "16": "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS",
  "17": "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS",
  "18": "BORDER_TOP_WEIGHT",
  "19": "BORDER_BOTTOM_WEIGHT",
  "20": "BORDER_LEFT_WEIGHT",
  "21": "BORDER_RIGHT_WEIGHT",
  "22": "VARIANT_PROPERTIES",
  "23": "STACK_COUNTER_SPACING",
  "24": "MIN_WIDTH",
  "25": "MAX_WIDTH",
  "26": "MIN_HEIGHT",
  "27": "MAX_HEIGHT",
  "28": "FONT_FAMILY",
  "29": "FONT_STYLE",
  "30": "FONT_VARIATIONS",
  "31": "OPACITY",
  "32": "FONT_SIZE",
  "34": "LETTER_SPACING",
  "36": "LINE_HEIGHT",
  "37": "OVERRIDDEN_SYMBOL_ID",
  "38": "HYPERLINK",
  "39": "CMS_SERIALIZED_RICH_TEXT_DATA",
  "40": "SLOT_CONTENT_ID",
  "41": "GRID_ROW_GAP",
  "42": "GRID_COLUMN_GAP",
  "43": "X_POSITION",
  "44": "Y_POSITION",
  "45": "ROTATION",
  "46": "MOTION_TRANSLATION_X",
  "47": "MOTION_TRANSLATION_Y",
  "48": "MOTION_ROTATION",
  "49": "MOTION_SCALE_X",
  "50": "MOTION_SCALE_Y",
  "51": "MOTION_SHEAR",
  "52": "SCROLL_OFFSET_X",
  "53": "SCROLL_OFFSET_Y",
  "54": "PATH_TRIM_START",
  "55": "PATH_TRIM_END",
  "56": "DISSOLVE_PROGRESS",
  "57": "EASING_DATA",
  "58": "MEDIA_CURRENT_TIME",
  "59": "TRANSFORM_3D_PERSPECTIVE",
  "60": "TRANSFORM_3D_TRANSLATION_Z",
  "61": "TRANSFORM_3D_ROTATION_X",
  "62": "TRANSFORM_3D_ROTATION_Y",
  "63": "TRANSFORM_3D_ROTATION_Z",
  "64": "POLYGON_COUNT",
  "65": "ARC_DATA_STARTING_ANGLE",
  "66": "ARC_DATA_ENDING_ANGLE",
  "67": "ARC_DATA_INNER_RADIUS",
  "68": "KEYFRAME_VALUE",
  "69": "MOTION_TRANSLATION_XY",
  "70": "MOTION_SCALE_XY",
  "71": "SCENE_3D_PERSPECTIVE",
  "72": "STAR_INNER_SCALE",
  "73": "MOTION_TRANSFORM_ORIGIN_XY",
  "74": "MOTION_TRANSFORM_ORIGIN_X",
  "75": "MOTION_TRANSFORM_ORIGIN_Y",
  "MISSING": 0,
  "CORNER_RADIUS": 1,
  "PARAGRAPH_SPACING": 2,
  "PARAGRAPH_INDENT": 3,
  "STROKE_WEIGHT": 4,
  "STACK_SPACING": 5,
  "STACK_PADDING_LEFT": 6,
  "STACK_PADDING_TOP": 7,
  "STACK_PADDING_RIGHT": 8,
  "STACK_PADDING_BOTTOM": 9,
  "VISIBLE": 10,
  "TEXT_DATA": 11,
  "WIDTH": 12,
  "HEIGHT": 13,
  "RECTANGLE_TOP_LEFT_CORNER_RADIUS": 14,
  "RECTANGLE_TOP_RIGHT_CORNER_RADIUS": 15,
  "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS": 16,
  "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS": 17,
  "BORDER_TOP_WEIGHT": 18,
  "BORDER_BOTTOM_WEIGHT": 19,
  "BORDER_LEFT_WEIGHT": 20,
  "BORDER_RIGHT_WEIGHT": 21,
  "VARIANT_PROPERTIES": 22,
  "STACK_COUNTER_SPACING": 23,
  "MIN_WIDTH": 24,
  "MAX_WIDTH": 25,
  "MIN_HEIGHT": 26,
  "MAX_HEIGHT": 27,
  "FONT_FAMILY": 28,
  "FONT_STYLE": 29,
  "FONT_VARIATIONS": 30,
  "OPACITY": 31,
  "FONT_SIZE": 32,
  "LETTER_SPACING": 34,
  "LINE_HEIGHT": 36,
  "OVERRIDDEN_SYMBOL_ID": 37,
  "HYPERLINK": 38,
  "CMS_SERIALIZED_RICH_TEXT_DATA": 39,
  "SLOT_CONTENT_ID": 40,
  "GRID_ROW_GAP": 41,
  "GRID_COLUMN_GAP": 42,
  "X_POSITION": 43,
  "Y_POSITION": 44,
  "ROTATION": 45,
  "MOTION_TRANSLATION_X": 46,
  "MOTION_TRANSLATION_Y": 47,
  "MOTION_ROTATION": 48,
  "MOTION_SCALE_X": 49,
  "MOTION_SCALE_Y": 50,
  "MOTION_SHEAR": 51,
  "SCROLL_OFFSET_X": 52,
  "SCROLL_OFFSET_Y": 53,
  "PATH_TRIM_START": 54,
  "PATH_TRIM_END": 55,
  "DISSOLVE_PROGRESS": 56,
  "EASING_DATA": 57,
  "MEDIA_CURRENT_TIME": 58,
  "TRANSFORM_3D_PERSPECTIVE": 59,
  "TRANSFORM_3D_TRANSLATION_Z": 60,
  "TRANSFORM_3D_ROTATION_X": 61,
  "TRANSFORM_3D_ROTATION_Y": 62,
  "TRANSFORM_3D_ROTATION_Z": 63,
  "POLYGON_COUNT": 64,
  "ARC_DATA_STARTING_ANGLE": 65,
  "ARC_DATA_ENDING_ANGLE": 66,
  "ARC_DATA_INNER_RADIUS": 67,
  "KEYFRAME_VALUE": 68,
  "MOTION_TRANSLATION_XY": 69,
  "MOTION_SCALE_XY": 70,
  "SCENE_3D_PERSPECTIVE": 71,
  "STAR_INNER_SCALE": 72,
  "MOTION_TRANSFORM_ORIGIN_XY": 73,
  "MOTION_TRANSFORM_ORIGIN_X": 74,
  "MOTION_TRANSFORM_ORIGIN_Y": 75
};

exports["decodeVariableModeBySetMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableModeBySetMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableModeBySetMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableModeBySetMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableModeBySetMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["variableSetID"] = this["decodeVariableSetID"](bb);
        break;

      case 2:
        result["variableModeID"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["variableSetExtensionID"] = this["decodeVariableSetID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableModeBySetMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["variableSetID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["variableModeID"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["variableSetExtensionID"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableSetID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeSyntaxMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCodeSyntaxMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeSyntaxMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCodeSyntaxMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeSyntaxMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["platform"] = this["CodeSyntaxPlatform"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeSyntaxMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["platform"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CodeSyntaxPlatform"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CodeSyntaxPlatform\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTableMergedCellMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTableMergedCellMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableMergedCellMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTableMergedCellMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTableMergedCellMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["rowId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["colId"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["rowSpan"] = bb.readVarInt();
        break;

      case 4:
        result["colSpan"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableMergedCellMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["rowId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["colId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["rowSpan"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarInt(value);
  }

  var value = message["colSpan"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTableRowColumnPositionMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTableRowColumnPositionMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableRowColumnPositionMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTableRowColumnPositionMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTableRowColumnPositionMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["position"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableRowColumnPositionMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDPositionMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPositionMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDPositionMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPositionMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDPositionMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["position"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDPositionMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDGridTrackSizeMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDGridTrackSizeMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDGridTrackSizeMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDGridTrackSizeMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDGridTrackSizeMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["trackSize"] = this["decodeGridTrackSize"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGUIDGridTrackSizeMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["trackSize"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGridTrackSize"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeObjectAnimationList"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeObjectAnimationListItem"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeObjectAnimationList"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeObjectAnimationListItem"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeObjectAnimationListItem"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["targetNodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["animation"] = this["decodePrototypeAction"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeObjectAnimationListItem"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["targetNodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["animation"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodePrototypeAction"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGridTrackSize"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["minSizing"] = this["decodeGridTrackSizingFunction"](bb);
        break;

      case 2:
        result["maxSizing"] = this["decodeGridTrackSizingFunction"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGridTrackSize"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["minSizing"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGridTrackSizingFunction"](value, bb);
  }

  var value = message["maxSizing"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGridTrackSizingFunction"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGridTrackSizingFunction"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["GridTrackSizingType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGridTrackSizingFunction"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["GridTrackSizingType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"GridTrackSizingType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["GridTrackSizingType"] = {
  "0": "FLEX",
  "1": "FIXED",
  "2": "HUG",
  "FLEX": 0,
  "FIXED": 1,
  "HUG": 2
};

exports["decodeTableRowColumnSizeMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTableRowColumnSizeMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableRowColumnSizeMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTableRowColumnSizeMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTableRowColumnSizeMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["size"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTableRowColumnSizeMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["size"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaPositionMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAgendaPositionMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaPositionMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAgendaPositionMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaPositionMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["position"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaPositionMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AgendaItemType"] = {
  "0": "NODE",
  "1": "BLOCK",
  "NODE": 0,
  "BLOCK": 1
};

exports["decodeAgendaMetadataMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAgendaMetadataMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaMetadataMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAgendaMetadataMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaMetadataMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["data"] = this["decodeAgendaMetadata"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaMetadataMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["data"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAgendaMetadata"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaMetadata"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["type"] = this["AgendaItemType"][bb.readVarUint()];
        break;

      case 3:
        result["targetNodeID"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["timerInfo"] = this["decodeAgendaTimerInfo"](bb);
        break;

      case 5:
        result["voteInfo"] = this["decodeAgendaVoteInfo"](bb);
        break;

      case 6:
        result["musicInfo"] = this["decodeAgendaMusicInfo"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaMetadata"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["AgendaItemType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AgendaItemType\""); bb.writeVarUint(encoded);
  }

  var value = message["targetNodeID"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["timerInfo"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeAgendaTimerInfo"](value, bb);
  }

  var value = message["voteInfo"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeAgendaVoteInfo"](value, bb);
  }

  var value = message["musicInfo"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeAgendaMusicInfo"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaTimerInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["timerLength"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaTimerInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["timerLength"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaVoteInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["voteCount"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaVoteInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["voteCount"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAgendaMusicInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["songID"] = bb.readString();
        break;

      case 2:
        result["startTimeMs"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgendaMusicInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["songID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["startTimeMs"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["DiagramLayoutRuleType"] = {
  "0": "NONE",
  "1": "TREE",
  "NONE": 0,
  "TREE": 1
};

exports["decodeDiagramParentIndex"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["guid"] = this["decodeGUID"](bb);
  result["position"] = bb.readString();
  return result;
};

exports["encodeDiagramParentIndex"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"guid\"");
  }

  var value = message["position"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"position\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};
exports["DiagramLayoutPaused"] = {
  "0": "NO",
  "1": "YES",
  "NO": 0,
  "YES": 1
};

exports["decodeComponentPropRef"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeField"] = bb.readVarUint();
        break;

      case 2:
        result["defID"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["zombieFallbackName"] = bb.readString();
        break;

      case 4:
        result["componentPropNodeField"] = this["ComponentPropNodeField"][bb.readVarUint()];
        break;

      case 5:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropRef"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeField"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["defID"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["zombieFallbackName"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["componentPropNodeField"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["ComponentPropNodeField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ComponentPropNodeField\""); bb.writeVarUint(encoded);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ComponentPropNodeField"] = {
  "0": "VISIBLE",
  "1": "TEXT_DATA",
  "2": "OVERRIDDEN_SYMBOL_ID",
  "3": "INHERIT_FILL_STYLE_ID",
  "4": "SLOT_CONTENT_ID",
  "VISIBLE": 0,
  "TEXT_DATA": 1,
  "OVERRIDDEN_SYMBOL_ID": 2,
  "INHERIT_FILL_STYLE_ID": 3,
  "SLOT_CONTENT_ID": 4
};

exports["decodeComponentPropAssignment"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["defID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["value"] = this["decodeComponentPropValue"](bb);
        break;

      case 3:
        result["varValue"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["legacyDerivedTextData"] = this["decodeDerivedTextData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropAssignment"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["defID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeComponentPropValue"](value, bb);
  }

  var value = message["varValue"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["legacyDerivedTextData"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeDerivedTextData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeComponentPropDef"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["name"] = bb.readString();
        break;

      case 3:
        result["initialValue"] = this["decodeComponentPropValue"](bb);
        break;

      case 4:
        result["sortPosition"] = bb.readString();
        break;

      case 5:
        result["parentPropDefId"] = this["decodeGUID"](bb);
        break;

      case 6:
        result["type"] = this["ComponentPropType"][bb.readVarUint()];
        break;

      case 7:
        result["isDeleted"] = !!bb.readByte();
        break;

      case 8:
        result["preferredValues"] = this["decodeComponentPropPreferredValues"](bb);
        break;

      case 9:
        result["varValue"] = this["decodeVariableData"](bb);
        break;

      case 10:
        result["parameterConfig"] = this["decodeParameterConfig"](bb);
        break;

      case 11:
        result["description"] = bb.readString();
        break;

      case 12:
        result["slotPropConfig"] = this["decodeSlotPropConfig"](bb);
        break;

      case 13:
        result["colorArrayConfig"] = this["decodeColorArrayConfig"](bb);
        break;

      case 14:
        var length = bb.readVarUint();
        var values = result["visibleWhen"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropVisibilityClause"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropDef"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["initialValue"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeComponentPropValue"](value, bb);
  }

  var value = message["sortPosition"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["parentPropDefId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeGUID"](value, bb);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["ComponentPropType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ComponentPropType\""); bb.writeVarUint(encoded);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }

  var value = message["preferredValues"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeComponentPropPreferredValues"](value, bb);
  }

  var value = message["varValue"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeVariableData"](value, bb);
  }

  var value = message["parameterConfig"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeParameterConfig"](value, bb);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeString(value);
  }

  var value = message["slotPropConfig"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeSlotPropConfig"](value, bb);
  }

  var value = message["colorArrayConfig"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeColorArrayConfig"](value, bb);
  }

  var value = message["visibleWhen"];
  if (value != null) {
    bb.writeVarUint(14);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropVisibilityClause"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeComponentPropValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["boolValue"] = !!bb.readByte();
        break;

      case 2:
        result["textValue"] = this["decodeTextData"](bb);
        break;

      case 3:
        result["guidValue"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["floatValue"] = bb.readVarFloat();
        break;

      case 5:
        result["easingData"] = this["decodeEasingData"](bb);
        break;

      case 6:
        result["vectorValue"] = this["decodeVector"](bb);
        break;

      case 7:
        result["lineValue"] = this["decodeLine"](bb);
        break;

      case 8:
        result["circleValue"] = this["decodeCircle"](bb);
        break;

      case 9:
        result["rotation3DValue"] = this["decodeRotation3D"](bb);
        break;

      case 10:
        result["circlePointValue"] = this["decodeCirclePoint"](bb);
        break;

      case 11:
        result["gradientValue"] = this["decodeGradient"](bb);
        break;

      case 12:
        result["colorPointValue"] = this["decodeColorPoint"](bb);
        break;

      case 13:
        result["colorArrayValue"] = this["decodeColorArray"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["boolValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["textValue"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTextData"](value, bb);
  }

  var value = message["guidValue"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["floatValue"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["easingData"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeEasingData"](value, bb);
  }

  var value = message["vectorValue"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeVector"](value, bb);
  }

  var value = message["lineValue"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeLine"](value, bb);
  }

  var value = message["circleValue"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeCircle"](value, bb);
  }

  var value = message["rotation3DValue"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeRotation3D"](value, bb);
  }

  var value = message["circlePointValue"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeCirclePoint"](value, bb);
  }

  var value = message["gradientValue"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeGradient"](value, bb);
  }

  var value = message["colorPointValue"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeColorPoint"](value, bb);
  }

  var value = message["colorArrayValue"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeColorArray"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["durationUs"] = bb.readVarUint64();
        break;

      case 2:
        result["defaultTimeline"] = !!bb.readByte();
        break;

      case 3:
        result["parentTimelineDefId"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["playbackStyle"] = this["PlaybackStyle"][bb.readVarUint()];
        break;

      case 5:
        result["autoplay"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["durationUs"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint64(value);
  }

  var value = message["defaultTimeline"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["parentTimelineDefId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["playbackStyle"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["PlaybackStyle"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlaybackStyle\""); bb.writeVarUint(encoded);
  }

  var value = message["autoplay"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineDefinitionsMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTimelineDefinitionsMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineDefinitionsMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTimelineDefinitionsMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineDefinitionsMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["data"] = this["decodeTimelineData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineDefinitionsMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["data"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTimelineData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineAssignmentKey"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["assignedTimelineId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["containingTimelineId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineAssignmentKey"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["assignedTimelineId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["containingTimelineId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineBindingData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["offsetUs"] = bb.readVarInt64();
        break;

      case 2:
        result["disabled"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineBindingData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["offsetUs"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarInt64(value);
  }

  var value = message["disabled"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineAssignmentsMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTimelineAssignmentsMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineAssignmentsMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTimelineAssignmentsMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelineAssignmentsMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = this["decodeTimelineAssignmentKey"](bb);
        break;

      case 2:
        result["value"] = this["decodeTimelineBindingData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelineAssignmentsMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeTimelineAssignmentKey"](value, bb);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTimelineBindingData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ComponentPropType"] = {
  "0": "BOOL",
  "1": "TEXT",
  "2": "COLOR",
  "3": "INSTANCE_SWAP",
  "4": "VARIANT",
  "5": "NUMBER",
  "6": "IMAGE",
  "7": "SLOT",
  "8": "EASING",
  "9": "COLOR_ARRAY",
  "10": "VECTOR",
  "11": "LINE",
  "12": "CIRCLE",
  "13": "ROTATION_3D",
  "14": "CIRCLE_POINT",
  "15": "GRADIENT",
  "16": "COLOR_POINT",
  "BOOL": 0,
  "TEXT": 1,
  "COLOR": 2,
  "INSTANCE_SWAP": 3,
  "VARIANT": 4,
  "NUMBER": 5,
  "IMAGE": 6,
  "SLOT": 7,
  "EASING": 8,
  "COLOR_ARRAY": 9,
  "VECTOR": 10,
  "LINE": 11,
  "CIRCLE": 12,
  "ROTATION_3D": 13,
  "CIRCLE_POINT": 14,
  "GRADIENT": 15,
  "COLOR_POINT": 16
};

exports["decodeComponentPropPreferredValues"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["stringValues"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["instanceSwapValues"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeInstanceSwapPreferredValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropPreferredValues"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stringValues"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }

  var value = message["instanceSwapValues"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeInstanceSwapPreferredValue"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeComponentPropVisibilityClause"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["siblingPropDefMatches"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropSiblingMatch"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropVisibilityClause"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["siblingPropDefMatches"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropSiblingMatch"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeComponentPropSiblingMatch"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["propName"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["anyOf"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropVisibilityValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropSiblingMatch"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["propName"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["anyOf"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropVisibilityValue"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeComponentPropVisibilityValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stringValue"] = bb.readString();
        break;

      case 2:
        result["floatValue"] = bb.readVarFloat();
        break;

      case 3:
        result["boolValue"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeComponentPropVisibilityValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stringValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["floatValue"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["boolValue"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeParameterConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["numberPropConfig"] = this["decodeNumberPropConfig"](bb);
        break;

      case 2:
        result["control"] = this["ParameterConfigControl"][bb.readVarUint()];
        break;

      case 3:
        result["sliderConfig"] = this["decodeSliderConfig"](bb);
        break;

      case 4:
        result["label"] = this["decodeVariableData"](bb);
        break;

      case 5:
        result["inputConfig"] = this["decodeInputConfig"](bb);
        break;

      case 6:
        result["selectConfig"] = this["decodeSelectConfig"](bb);
        break;

      case 7:
        result["pointConfig"] = this["decodePointConfig"](bb);
        break;

      case 8:
        result["lineConfig"] = this["decodeLineConfig"](bb);
        break;

      case 9:
        result["pointRadiusConfig"] = this["decodePointRadiusConfig"](bb);
        break;

      case 10:
        result["rotation3DConfig"] = this["decodeRotation3DConfig"](bb);
        break;

      case 11:
        result["circlePointConfig"] = this["decodeCirclePointConfig"](bb);
        break;

      case 12:
        result["colorPointConfig"] = this["decodeColorPointConfig"](bb);
        break;

      case 13:
        result["showDividerAbove"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeParameterConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["numberPropConfig"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeNumberPropConfig"](value, bb);
  }

  var value = message["control"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["ParameterConfigControl"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ParameterConfigControl\""); bb.writeVarUint(encoded);
  }

  var value = message["sliderConfig"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeSliderConfig"](value, bb);
  }

  var value = message["label"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }

  var value = message["inputConfig"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeInputConfig"](value, bb);
  }

  var value = message["selectConfig"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeSelectConfig"](value, bb);
  }

  var value = message["pointConfig"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodePointConfig"](value, bb);
  }

  var value = message["lineConfig"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeLineConfig"](value, bb);
  }

  var value = message["pointRadiusConfig"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodePointRadiusConfig"](value, bb);
  }

  var value = message["rotation3DConfig"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeRotation3DConfig"](value, bb);
  }

  var value = message["circlePointConfig"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeCirclePointConfig"](value, bb);
  }

  var value = message["colorPointConfig"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeColorPointConfig"](value, bb);
  }

  var value = message["showDividerAbove"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ParameterConfigControl"] = {
  "0": "DEFAULT",
  "1": "SLIDER",
  "2": "INPUT",
  "3": "SELECT",
  "DEFAULT": 0,
  "SLIDER": 1,
  "INPUT": 2,
  "SELECT": 3
};

exports["decodeInputConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["unit"] = this["decodeVariableData"](bb);
        break;

      case 2:
        result["min"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["max"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["icon"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInputConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["unit"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableData"](value, bb);
  }

  var value = message["min"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["max"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["icon"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSliderConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["min"] = this["decodeVariableData"](bb);
        break;

      case 2:
        result["max"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["step"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["unit"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSliderConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["min"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableData"](value, bb);
  }

  var value = message["max"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["step"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["unit"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["PointMode"] = {
  "0": "CANVAS_AND_UI",
  "1": "CANVAS",
  "2": "UI",
  "CANVAS_AND_UI": 0,
  "CANVAS": 1,
  "UI": 2
};

exports["decodePointConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      case 2:
        result["unit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePointConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }

  var value = message["unit"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeLine"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["a"] = this["decodeVector"](bb);
        break;

      case 2:
        result["b"] = this["decodeVector"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLine"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["a"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["b"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeLineConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      case 2:
        result["unit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLineConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }

  var value = message["unit"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCircle"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["center"] = this["decodeVector"](bb);
        break;

      case 2:
        result["radius"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCircle"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["center"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["radius"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePointRadiusConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      case 2:
        result["positionUnit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      case 3:
        result["radiusUnit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      case 4:
        result["minRadius"] = bb.readVarFloat();
        break;

      case 5:
        result["maxRadius"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePointRadiusConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }

  var value = message["positionUnit"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }

  var value = message["radiusUnit"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }

  var value = message["minRadius"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["maxRadius"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRotation3D"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["x"] = bb.readVarFloat();
        break;

      case 2:
        result["y"] = bb.readVarFloat();
        break;

      case 3:
        result["z"] = bb.readVarFloat();
        break;

      case 4:
        result["translateZ"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRotation3D"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["x"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["y"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["z"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["translateZ"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeRotation3DConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRotation3DConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCirclePoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["center"] = this["decodeVector"](bb);
        break;

      case 2:
        result["radius"] = bb.readVarFloat();
        break;

      case 3:
        result["angle"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCirclePoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["center"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["radius"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["angle"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCirclePointConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      case 2:
        result["positionUnit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      case 3:
        result["radiusUnit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      case 4:
        result["minRadius"] = bb.readVarFloat();
        break;

      case 5:
        result["maxRadius"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCirclePointConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }

  var value = message["positionUnit"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }

  var value = message["radiusUnit"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }

  var value = message["minRadius"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["maxRadius"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorPoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["point"] = this["decodeVector"](bb);
        break;

      case 2:
        result["color"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeColorPoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["point"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorPointConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mode"] = this["PointMode"][bb.readVarUint()];
        break;

      case 2:
        result["unit"] = this["NumberUnits"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeColorPointConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mode"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PointMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PointMode\""); bb.writeVarUint(encoded);
  }

  var value = message["unit"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NumberUnits"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NumberUnits\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGradient"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["stops"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGradientStop"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGradient"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stops"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGradientStop"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGradientStop"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["position"] = bb.readVarFloat();
        break;

      case 2:
        result["color"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGradientStop"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGradientParameterValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["stops"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeColorStop"](bb);
        break;

      case 2:
        result["transform"] = this["decodeMatrix"](bb);
        break;

      case 3:
        result["opacity"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGradientParameterValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stops"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeColorStop"](value, bb);
    }
  }

  var value = message["transform"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeMatrix"](value, bb);
  }

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSelectOption"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = this["decodeVariableData"](bb);
        break;

      case 2:
        result["label"] = bb.readString();
        break;

      case 3:
        result["icon"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSelectOption"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableData"](value, bb);
  }

  var value = message["label"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["icon"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSelectConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["options"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeSelectOption"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSelectConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["options"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeSelectOption"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorArrayConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["minLength"] = bb.readVarUint();
        break;

      case 2:
        result["maxLength"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeColorArrayConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["minLength"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["maxLength"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSlotPropConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stretchChildOnInsert"] = !!bb.readByte();
        break;

      case 2:
        result["displayByDefault"] = !!bb.readByte();
        break;

      case 3:
        result["minChildren"] = bb.readVarUint();
        break;

      case 4:
        result["maxChildren"] = bb.readVarUint();
        break;

      case 5:
        result["allowPreferredValuesOnly"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlotPropConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stretchChildOnInsert"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["displayByDefault"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["minChildren"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["maxChildren"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }

  var value = message["allowPreferredValuesOnly"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNumberPropConfig"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["control"] = this["ParameterConfigControl"][bb.readVarUint()];
        break;

      case 2:
        result["min"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["max"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["step"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNumberPropConfig"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["control"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ParameterConfigControl"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ParameterConfigControl\""); bb.writeVarUint(encoded);
  }

  var value = message["min"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["max"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["step"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInstanceSwapPreferredValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["InstanceSwapPreferredValueType"][bb.readVarUint()];
        break;

      case 2:
        result["key"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInstanceSwapPreferredValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["InstanceSwapPreferredValueType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InstanceSwapPreferredValueType\""); bb.writeVarUint(encoded);
  }

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["InstanceSwapPreferredValueType"] = {
  "0": "COMPONENT",
  "1": "STATE_GROUP",
  "COMPONENT": 0,
  "STATE_GROUP": 1
};
exports["WidgetEvent"] = {
  "0": "MOUSE_DOWN",
  "1": "CLICK",
  "2": "TEXT_EDIT_END",
  "3": "ATTACHED_STICKABLES_CHANGED",
  "4": "STUCK_STATUS_CHANGED",
  "MOUSE_DOWN": 0,
  "CLICK": 1,
  "TEXT_EDIT_END": 2,
  "ATTACHED_STICKABLES_CHANGED": 3,
  "STUCK_STATUS_CHANGED": 4
};
exports["WidgetInputBehavior"] = {
  "0": "WRAP",
  "1": "TRUNCATE",
  "2": "MULTILINE",
  "WRAP": 0,
  "TRUNCATE": 1,
  "MULTILINE": 2
};

exports["decodeWidgetMetadata"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["pluginID"] = bb.readString();
        break;

      case 2:
        result["pluginVersionID"] = bb.readString();
        break;

      case 3:
        result["widgetName"] = bb.readString();
        break;

      case 4:
        result["isResizable"] = !!bb.readByte();
        break;

      case 5:
        result["isRotatable"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetMetadata"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["pluginID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["pluginVersionID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["widgetName"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["isResizable"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["isRotatable"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["WidgetPropertyMenuItemType"] = {
  "0": "ACTION",
  "1": "SEPARATOR",
  "2": "COLOR",
  "3": "DROPDOWN",
  "4": "COLOR_SELECTOR",
  "5": "TOGGLE",
  "6": "LINK",
  "ACTION": 0,
  "SEPARATOR": 1,
  "COLOR": 2,
  "DROPDOWN": 3,
  "COLOR_SELECTOR": 4,
  "TOGGLE": 5,
  "LINK": 6
};

exports["decodeWidgetPropertyMenuSelectorOption"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["option"] = bb.readString();
        break;

      case 2:
        result["tooltip"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetPropertyMenuSelectorOption"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["option"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["tooltip"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["WidgetInputTextNodeType"] = {
  "0": "WIDGET_CONTROLLED",
  "1": "RICH_TEXT",
  "WIDGET_CONTROLLED": 0,
  "RICH_TEXT": 1
};

exports["decodeWidgetPropertyMenuItem"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["propertyName"] = bb.readString();
        break;

      case 2:
        result["tooltip"] = bb.readString();
        break;

      case 3:
        result["itemType"] = this["WidgetPropertyMenuItemType"][bb.readVarUint()];
        break;

      case 4:
        result["icon"] = bb.readString();
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["options"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeWidgetPropertyMenuSelectorOption"](bb);
        break;

      case 6:
        result["selectedOption"] = bb.readString();
        break;

      case 7:
        result["isToggled"] = !!bb.readByte();
        break;

      case 8:
        result["href"] = bb.readString();
        break;

      case 9:
        result["allowCustomColor"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeWidgetPropertyMenuItem"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["propertyName"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["tooltip"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["itemType"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["WidgetPropertyMenuItemType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"WidgetPropertyMenuItemType\""); bb.writeVarUint(encoded);
  }

  var value = message["icon"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["options"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeWidgetPropertyMenuSelectorOption"](value, bb);
    }
  }

  var value = message["selectedOption"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }

  var value = message["isToggled"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }

  var value = message["href"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["allowCustomColor"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CodeBlockLanguage"] = {
  "0": "TYPESCRIPT",
  "1": "CPP",
  "2": "RUBY",
  "3": "CSS",
  "4": "JAVASCRIPT",
  "5": "HTML",
  "6": "JSON",
  "7": "GRAPHQL",
  "8": "PYTHON",
  "9": "GO",
  "10": "SQL",
  "11": "SWIFT",
  "12": "KOTLIN",
  "13": "RUST",
  "14": "BASH",
  "15": "PLAINTEXT",
  "16": "MARKDOWN",
  "TYPESCRIPT": 0,
  "CPP": 1,
  "RUBY": 2,
  "CSS": 3,
  "JAVASCRIPT": 4,
  "HTML": 5,
  "JSON": 6,
  "GRAPHQL": 7,
  "PYTHON": 8,
  "GO": 9,
  "SQL": 10,
  "SWIFT": 11,
  "KOTLIN": 12,
  "RUST": 13,
  "BASH": 14,
  "PLAINTEXT": 15,
  "MARKDOWN": 16
};
exports["CodeBlockTheme"] = {
  "0": "FIGJAM_DARK",
  "1": "DRACULA",
  "2": "DUOTONE_SEA",
  "3": "DUOTONE_SPACE",
  "4": "DUOTONE_EARTH",
  "5": "DUOTONE_FOREST",
  "6": "DUOTONE_LIGHT",
  "FIGJAM_DARK": 0,
  "DRACULA": 1,
  "DUOTONE_SEA": 2,
  "DUOTONE_SPACE": 3,
  "DUOTONE_EARTH": 4,
  "DUOTONE_FOREST": 5,
  "DUOTONE_LIGHT": 6
};
exports["SpecBlockType"] = {
  "0": "DEFAULT",
  "1": "PARAGRAPH",
  "2": "HEADING_1",
  "3": "HEADING_2",
  "4": "HEADING_3",
  "5": "HEADING_4",
  "6": "HEADING_5",
  "7": "HEADING_6",
  "8": "CODE_BLOCK",
  "9": "BLOCK_QUOTE",
  "10": "HORIZONTAL_RULE",
  "11": "ORDERED_LIST_ITEM",
  "12": "UNORDERED_LIST_ITEM",
  "13": "DOCUMENT",
  "14": "TABLE",
  "15": "TABLE_ROW",
  "16": "TABLE_CELL",
  "17": "TODO_LIST_ITEM_UNCHECKED",
  "18": "TODO_LIST_ITEM_CHECKED",
  "19": "IMAGE",
  "20": "EMBED",
  "21": "EMBEDDED_CANVAS",
  "DEFAULT": 0,
  "PARAGRAPH": 1,
  "HEADING_1": 2,
  "HEADING_2": 3,
  "HEADING_3": 4,
  "HEADING_4": 5,
  "HEADING_5": 6,
  "HEADING_6": 7,
  "CODE_BLOCK": 8,
  "BLOCK_QUOTE": 9,
  "HORIZONTAL_RULE": 10,
  "ORDERED_LIST_ITEM": 11,
  "UNORDERED_LIST_ITEM": 12,
  "DOCUMENT": 13,
  "TABLE": 14,
  "TABLE_ROW": 15,
  "TABLE_CELL": 16,
  "TODO_LIST_ITEM_UNCHECKED": 17,
  "TODO_LIST_ITEM_CHECKED": 18,
  "IMAGE": 19,
  "EMBED": 20,
  "EMBEDDED_CANVAS": 21
};
exports["InternalEnumForTest"] = {
  "1": "OLD",
  "OLD": 1
};

exports["decodeInternalDataForTest"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["testFieldA"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInternalDataForTest"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["testFieldA"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStateGroupPropertyValueOrder"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["property"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["values"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStateGroupPropertyValueOrder"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["property"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["values"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["BackfillError"] = {
  "0": "NONE",
  "1": "TRANSIENT_RETRYING",
  "2": "PERMANENTLY_FAILED",
  "3": "PASTE_FAILED",
  "NONE": 0,
  "TRANSIENT_RETRYING": 1,
  "PERMANENTLY_FAILED": 2,
  "PASTE_FAILED": 3
};

exports["decodePartialPasteAnnotation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["isPartial"] = !!bb.readByte();
        break;

      case 2:
        result["annotatedAt"] = bb.readVarUint64();
        break;

      case 3:
        result["errorState"] = this["BackfillError"][bb.readVarUint()];
        break;

      case 4:
        result["upserted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePartialPasteAnnotation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["isPartial"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["annotatedAt"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint64(value);
  }

  var value = message["errorState"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["BackfillError"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BackfillError\""); bb.writeVarUint(encoded);
  }

  var value = message["upserted"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariantPropSpec"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["propDefId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["value"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariantPropSpec"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["propDefId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTextListData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["listID"] = bb.readVarInt();
        break;

      case 2:
        result["bulletType"] = this["BulletType"][bb.readVarUint()];
        break;

      case 3:
        result["indentationLevel"] = bb.readVarInt();
        break;

      case 4:
        result["lineNumber"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextListData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["listID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarInt(value);
  }

  var value = message["bulletType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["BulletType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"BulletType\""); bb.writeVarUint(encoded);
  }

  var value = message["indentationLevel"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarInt(value);
  }

  var value = message["lineNumber"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["BulletType"] = {
  "0": "ORDERED",
  "1": "UNORDERED",
  "2": "INDENT",
  "3": "NO_LIST",
  "ORDERED": 0,
  "UNORDERED": 1,
  "INDENT": 2,
  "NO_LIST": 3
};

exports["decodeTextLineData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["lineType"] = this["LineType"][bb.readVarUint()];
        break;

      case 10:
        result["styleId"] = bb.readVarInt();
        break;

      case 2:
        result["indentationLevel"] = bb.readVarInt();
        break;

      case 9:
        result["sourceDirectionality"] = this["SourceDirectionality"][bb.readVarUint()];
        break;

      case 3:
        result["directionality"] = this["Directionality"][bb.readVarUint()];
        break;

      case 4:
        result["directionalityIntent"] = this["DirectionalityIntent"][bb.readVarUint()];
        break;

      case 5:
        result["downgradeStyleId"] = bb.readVarInt();
        break;

      case 6:
        result["consistencyStyleId"] = bb.readVarInt();
        break;

      case 7:
        result["listStartOffset"] = bb.readVarInt();
        break;

      case 8:
        result["isFirstLineOfList"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextLineData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["lineType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["LineType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LineType\""); bb.writeVarUint(encoded);
  }

  var value = message["styleId"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeVarInt(value);
  }

  var value = message["indentationLevel"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarInt(value);
  }

  var value = message["sourceDirectionality"];
  if (value != null) {
    bb.writeVarUint(9);
    var encoded = this["SourceDirectionality"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SourceDirectionality\""); bb.writeVarUint(encoded);
  }

  var value = message["directionality"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["Directionality"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Directionality\""); bb.writeVarUint(encoded);
  }

  var value = message["directionalityIntent"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["DirectionalityIntent"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DirectionalityIntent\""); bb.writeVarUint(encoded);
  }

  var value = message["downgradeStyleId"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarInt(value);
  }

  var value = message["consistencyStyleId"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarInt(value);
  }

  var value = message["listStartOffset"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarInt(value);
  }

  var value = message["isFirstLineOfList"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDerivedTextLineData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["directionality"] = this["Directionality"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDerivedTextLineData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["directionality"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["Directionality"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Directionality\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["LineType"] = {
  "0": "PLAIN",
  "1": "ORDERED_LIST",
  "2": "UNORDERED_LIST",
  "3": "BLOCKQUOTE",
  "4": "HEADER",
  "PLAIN": 0,
  "ORDERED_LIST": 1,
  "UNORDERED_LIST": 2,
  "BLOCKQUOTE": 3,
  "HEADER": 4
};
exports["SourceDirectionality"] = {
  "0": "AUTO",
  "1": "LTR",
  "2": "RTL",
  "AUTO": 0,
  "LTR": 1,
  "RTL": 2
};
exports["Directionality"] = {
  "0": "LTR",
  "1": "RTL",
  "LTR": 0,
  "RTL": 1
};
exports["DirectionalityIntent"] = {
  "0": "IMPLICIT",
  "1": "EXPLICIT",
  "IMPLICIT": 0,
  "EXPLICIT": 1
};

exports["decodePrototypeInteraction"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["event"] = this["decodePrototypeEvent"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["actions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePrototypeAction"](bb);
        break;

      case 4:
        result["isDeleted"] = !!bb.readByte();
        break;

      case 5:
        result["stateManagementVersion"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeInteraction"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["event"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodePrototypeEvent"](value, bb);
  }

  var value = message["actions"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePrototypeAction"](value, bb);
    }
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["stateManagementVersion"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePrototypeEvent"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["interactionType"] = this["InteractionType"][bb.readVarUint()];
        break;

      case 2:
        result["interactionMaintained"] = !!bb.readByte();
        break;

      case 3:
        result["interactionDuration"] = bb.readVarFloat();
        break;

      case 4:
        result["keyTrigger"] = this["decodeKeyTrigger"](bb);
        break;

      case 5:
        result["voiceEventPhrase"] = bb.readString();
        break;

      case 6:
        result["transitionTimeout"] = bb.readVarFloat();
        break;

      case 7:
        result["mediaHitTime"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeEvent"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["interactionType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["InteractionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InteractionType\""); bb.writeVarUint(encoded);
  }

  var value = message["interactionMaintained"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["interactionDuration"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["keyTrigger"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeKeyTrigger"](value, bb);
  }

  var value = message["voiceEventPhrase"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["transitionTimeout"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["mediaHitTime"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePrototypeVariableTarget"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeVariableID"](bb);
        break;

      case 2:
        result["nodeFieldAlias"] = this["decodeNodeFieldAlias"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeVariableTarget"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableID"](value, bb);
  }

  var value = message["nodeFieldAlias"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNodeFieldAlias"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeConditionalActions"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["actions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePrototypeAction"](bb);
        break;

      case 2:
        result["condition"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeConditionalActions"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["actions"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePrototypeAction"](value, bb);
    }
  }

  var value = message["condition"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePrototypeAction"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["transitionNodeID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["transitionType"] = this["TransitionType"][bb.readVarUint()];
        break;

      case 3:
        result["transitionDuration"] = bb.readVarFloat();
        break;

      case 4:
        result["easingType"] = this["EasingType"][bb.readVarUint()];
        break;

      case 5:
        result["transitionTimeout"] = bb.readVarFloat();
        break;

      case 6:
        result["transitionShouldSmartAnimate"] = !!bb.readByte();
        break;

      case 43:
        result["enableJitSmartAnimate"] = !!bb.readByte();
        break;

      case 44:
        result["interpolationColorSpace"] = this["InterpolationColorSpace"][bb.readVarUint()];
        break;

      case 45:
        result["interpolationHueMethod"] = this["InterpolationHueMethod"][bb.readVarUint()];
        break;

      case 7:
        result["connectionType"] = this["ConnectionType"][bb.readVarUint()];
        break;

      case 9:
        result["overlayRelativePosition"] = this["decodeVector"](bb);
        break;

      case 10:
        result["navigationType"] = this["NavigationType"][bb.readVarUint()];
        break;

      case 11:
        result["transitionPreserveScroll"] = !!bb.readByte();
        break;

      case 12:
        var length = bb.readVarUint();
        var values = result["easingFunction"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 13:
        result["extraScrollOffset"] = this["decodeVector"](bb);
        break;

      case 25:
        result["transitionResetScrollPosition"] = !!bb.readByte();
        break;

      case 26:
        result["transitionResetInteractiveComponents"] = !!bb.readByte();
        break;

      case 42:
        result["transitionOverridesEnabled"] = !!bb.readByte();
        break;

      case 8:
        result["connectionURL"] = bb.readString();
        break;

      case 18:
        result["openUrlInNewTab"] = !!bb.readByte();
        break;

      case 34:
        result["linkParam"] = this["decodeVariableData"](bb);
        break;

      case 35:
        result["cmsTarget"] = this["decodeCMSItemPageTarget"](bb);
        break;

      case 14:
        result["targetVariableID"] = this["decodeGUID"](bb);
        break;

      case 15:
        result["targetVariableValue"] = this["decodeVariableAnyValue"](bb);
        break;

      case 19:
        result["targetVariable"] = this["decodePrototypeVariableTarget"](bb);
        break;

      case 20:
        result["targetVariableData"] = this["decodeVariableData"](bb);
        break;

      case 16:
        result["mediaAction"] = this["MediaAction"][bb.readVarUint()];
        break;

      case 17:
        result["transitionResetVideoPosition"] = !!bb.readByte();
        break;

      case 21:
        result["mediaSkipToTime"] = bb.readVarFloat();
        break;

      case 22:
        result["mediaSkipByAmount"] = bb.readVarFloat();
        break;

      case 36:
        result["mediaPlaybackRate"] = bb.readVarFloat();
        break;

      case 23:
        var length = bb.readVarUint();
        var values = result["conditions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableData"](bb);
        break;

      case 24:
        var length = bb.readVarUint();
        var values = result["conditionalActions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeConditionalActions"](bb);
        break;

      case 27:
        result["targetVariableSetID"] = this["decodeVariableSetID"](bb);
        break;

      case 28:
        result["targetVariableModeID"] = this["decodeGUID"](bb);
        break;

      case 29:
        result["targetVariableSetKey"] = bb.readString();
        break;

      case 38:
        result["variableSetTargetExtensionId"] = this["decodeVariableSetID"](bb);
        break;

      case 30:
        result["animationType"] = this["AnimationType"][bb.readVarUint()];
        break;

      case 31:
        result["animationTargetId"] = this["decodeGUID"](bb);
        break;

      case 32:
        result["animationPhase"] = this["AnimationPhase"][bb.readVarUint()];
        break;

      case 33:
        result["animationState"] = this["decodeAnimationState"](bb);
        break;

      case 37:
        result["simpleLink"] = !!bb.readByte();
        break;

      case 39:
        result["animationTimelineAction"] = this["AnimationTimelineAction"][bb.readVarUint()];
        break;

      case 41:
        result["animationTimelineDefId"] = this["decodeGUID"](bb);
        break;

      case 40:
        result["animationSkipToTime"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeAction"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["transitionNodeID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["transitionType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["TransitionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionDuration"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["easingType"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["EasingType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EasingType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionTimeout"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["transitionShouldSmartAnimate"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["enableJitSmartAnimate"];
  if (value != null) {
    bb.writeVarUint(43);
    bb.writeByte(value);
  }

  var value = message["interpolationColorSpace"];
  if (value != null) {
    bb.writeVarUint(44);
    var encoded = this["InterpolationColorSpace"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationColorSpace\""); bb.writeVarUint(encoded);
  }

  var value = message["interpolationHueMethod"];
  if (value != null) {
    bb.writeVarUint(45);
    var encoded = this["InterpolationHueMethod"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"InterpolationHueMethod\""); bb.writeVarUint(encoded);
  }

  var value = message["connectionType"];
  if (value != null) {
    bb.writeVarUint(7);
    var encoded = this["ConnectionType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ConnectionType\""); bb.writeVarUint(encoded);
  }

  var value = message["overlayRelativePosition"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeVector"](value, bb);
  }

  var value = message["navigationType"];
  if (value != null) {
    bb.writeVarUint(10);
    var encoded = this["NavigationType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NavigationType\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionPreserveScroll"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeByte(value);
  }

  var value = message["easingFunction"];
  if (value != null) {
    bb.writeVarUint(12);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["extraScrollOffset"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeVector"](value, bb);
  }

  var value = message["transitionResetScrollPosition"];
  if (value != null) {
    bb.writeVarUint(25);
    bb.writeByte(value);
  }

  var value = message["transitionResetInteractiveComponents"];
  if (value != null) {
    bb.writeVarUint(26);
    bb.writeByte(value);
  }

  var value = message["transitionOverridesEnabled"];
  if (value != null) {
    bb.writeVarUint(42);
    bb.writeByte(value);
  }

  var value = message["connectionURL"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["openUrlInNewTab"];
  if (value != null) {
    bb.writeVarUint(18);
    bb.writeByte(value);
  }

  var value = message["linkParam"];
  if (value != null) {
    bb.writeVarUint(34);
    this["encodeVariableData"](value, bb);
  }

  var value = message["cmsTarget"];
  if (value != null) {
    bb.writeVarUint(35);
    this["encodeCMSItemPageTarget"](value, bb);
  }

  var value = message["targetVariableID"];
  if (value != null) {
    bb.writeVarUint(14);
    this["encodeGUID"](value, bb);
  }

  var value = message["targetVariableValue"];
  if (value != null) {
    bb.writeVarUint(15);
    this["encodeVariableAnyValue"](value, bb);
  }

  var value = message["targetVariable"];
  if (value != null) {
    bb.writeVarUint(19);
    this["encodePrototypeVariableTarget"](value, bb);
  }

  var value = message["targetVariableData"];
  if (value != null) {
    bb.writeVarUint(20);
    this["encodeVariableData"](value, bb);
  }

  var value = message["mediaAction"];
  if (value != null) {
    bb.writeVarUint(16);
    var encoded = this["MediaAction"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MediaAction\""); bb.writeVarUint(encoded);
  }

  var value = message["transitionResetVideoPosition"];
  if (value != null) {
    bb.writeVarUint(17);
    bb.writeByte(value);
  }

  var value = message["mediaSkipToTime"];
  if (value != null) {
    bb.writeVarUint(21);
    bb.writeVarFloat(value);
  }

  var value = message["mediaSkipByAmount"];
  if (value != null) {
    bb.writeVarUint(22);
    bb.writeVarFloat(value);
  }

  var value = message["mediaPlaybackRate"];
  if (value != null) {
    bb.writeVarUint(36);
    bb.writeVarFloat(value);
  }

  var value = message["conditions"];
  if (value != null) {
    bb.writeVarUint(23);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableData"](value, bb);
    }
  }

  var value = message["conditionalActions"];
  if (value != null) {
    bb.writeVarUint(24);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeConditionalActions"](value, bb);
    }
  }

  var value = message["targetVariableSetID"];
  if (value != null) {
    bb.writeVarUint(27);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["targetVariableModeID"];
  if (value != null) {
    bb.writeVarUint(28);
    this["encodeGUID"](value, bb);
  }

  var value = message["targetVariableSetKey"];
  if (value != null) {
    bb.writeVarUint(29);
    bb.writeString(value);
  }

  var value = message["variableSetTargetExtensionId"];
  if (value != null) {
    bb.writeVarUint(38);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["animationType"];
  if (value != null) {
    bb.writeVarUint(30);
    var encoded = this["AnimationType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnimationType\""); bb.writeVarUint(encoded);
  }

  var value = message["animationTargetId"];
  if (value != null) {
    bb.writeVarUint(31);
    this["encodeGUID"](value, bb);
  }

  var value = message["animationPhase"];
  if (value != null) {
    bb.writeVarUint(32);
    var encoded = this["AnimationPhase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnimationPhase\""); bb.writeVarUint(encoded);
  }

  var value = message["animationState"];
  if (value != null) {
    bb.writeVarUint(33);
    this["encodeAnimationState"](value, bb);
  }

  var value = message["simpleLink"];
  if (value != null) {
    bb.writeVarUint(37);
    bb.writeByte(value);
  }

  var value = message["animationTimelineAction"];
  if (value != null) {
    bb.writeVarUint(39);
    var encoded = this["AnimationTimelineAction"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AnimationTimelineAction\""); bb.writeVarUint(encoded);
  }

  var value = message["animationTimelineDefId"];
  if (value != null) {
    bb.writeVarUint(41);
    this["encodeGUID"](value, bb);
  }

  var value = message["animationSkipToTime"];
  if (value != null) {
    bb.writeVarUint(40);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AnimationPhase"] = {
  "0": "IN",
  "1": "OUT",
  "IN": 0,
  "OUT": 1
};
exports["AnimationType"] = {
  "0": "NONE",
  "1": "FADE",
  "2": "SLIDE_FROM_LEFT",
  "3": "SLIDE_FROM_RIGHT",
  "4": "SLIDE_FROM_TOP",
  "5": "SLIDE_FROM_BOTTOM",
  "NONE": 0,
  "FADE": 1,
  "SLIDE_FROM_LEFT": 2,
  "SLIDE_FROM_RIGHT": 3,
  "SLIDE_FROM_TOP": 4,
  "SLIDE_FROM_BOTTOM": 5
};

exports["decodeAnimationState"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["opacity"] = bb.readVarFloat();
        break;

      case 2:
        result["transform"] = this["decodeMatrix"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnimationState"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["opacity"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["transform"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeMatrix"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePrototypeStartingPoint"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["description"] = bb.readString();
        break;

      case 3:
        result["position"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePrototypeStartingPoint"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["position"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TriggerDevice"] = {
  "0": "KEYBOARD",
  "1": "UNKNOWN_CONTROLLER",
  "2": "XBOX_ONE",
  "3": "PS4",
  "4": "SWITCH_PRO",
  "KEYBOARD": 0,
  "UNKNOWN_CONTROLLER": 1,
  "XBOX_ONE": 2,
  "PS4": 3,
  "SWITCH_PRO": 4
};

exports["decodeKeyTrigger"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["keyCodes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarInt();
        break;

      case 2:
        result["triggerDevice"] = this["TriggerDevice"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyTrigger"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["keyCodes"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarInt(value);
    }
  }

  var value = message["triggerDevice"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["TriggerDevice"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TriggerDevice\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHyperlink"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["url"] = bb.readString();
        break;

      case 2:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["cmsTarget"] = this["decodeCMSItemPageTarget"](bb);
        break;

      case 3:
        result["openInNewTab"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHyperlink"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["cmsTarget"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeCMSItemPageTarget"](value, bb);
  }

  var value = message["openInNewTab"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCMSItemPageTarget"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["cmsItemId"] = bb.readString();
        break;

      case 3:
        result["fieldSchemaId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSItemPageTarget"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["cmsItemId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["fieldSchemaId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["MentionSource"] = {
  "0": "DEFAULT",
  "1": "COPY_DUPLICATE",
  "2": "SILENT_INSERT",
  "DEFAULT": 0,
  "COPY_DUPLICATE": 1,
  "SILENT_INSERT": 2
};

exports["decodeMention"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["mentionedUserId"] = bb.readString();
        break;

      case 3:
        result["mentionedByUserId"] = bb.readString();
        break;

      case 4:
        result["fileKey"] = bb.readString();
        break;

      case 5:
        result["source"] = this["MentionSource"][bb.readVarUint()];
        break;

      case 6:
        result["mentionedUserIdInt"] = bb.readVarUint64();
        break;

      case 7:
        result["mentionedByUserIdInt"] = bb.readVarUint64();
        break;

      case 8:
        result["mentionedUserGroupId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMention"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["mentionedUserId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["mentionedByUserId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["fileKey"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["source"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["MentionSource"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MentionSource\""); bb.writeVarUint(encoded);
  }

  var value = message["mentionedUserIdInt"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarUint64(value);
  }

  var value = message["mentionedByUserIdInt"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarUint64(value);
  }

  var value = message["mentionedUserGroupId"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEmbedData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["url"] = bb.readString();
        break;

      case 2:
        result["srcUrl"] = bb.readString();
        break;

      case 3:
        result["title"] = bb.readString();
        break;

      case 4:
        result["thumbnailUrl"] = bb.readString();
        break;

      case 5:
        result["width"] = bb.readVarFloat();
        break;

      case 6:
        result["height"] = bb.readVarFloat();
        break;

      case 7:
        result["embedType"] = bb.readString();
        break;

      case 8:
        result["thumbnailImageHash"] = bb.readString();
        break;

      case 9:
        result["faviconImageHash"] = bb.readString();
        break;

      case 10:
        result["provider"] = bb.readString();
        break;

      case 11:
        result["originalText"] = bb.readString();
        break;

      case 12:
        result["description"] = bb.readString();
        break;

      case 13:
        result["embedVersionId"] = bb.readString();
        break;

      case 14:
        result["isPublishedSite"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEmbedData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["srcUrl"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["title"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["thumbnailUrl"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["width"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["height"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }

  var value = message["embedType"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeString(value);
  }

  var value = message["thumbnailImageHash"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }

  var value = message["faviconImageHash"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeString(value);
  }

  var value = message["provider"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeString(value);
  }

  var value = message["originalText"];
  if (value != null) {
    bb.writeVarUint(11);
    bb.writeString(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeString(value);
  }

  var value = message["embedVersionId"];
  if (value != null) {
    bb.writeVarUint(13);
    bb.writeString(value);
  }

  var value = message["isPublishedSite"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStampData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["userId"] = bb.readString();
        break;

      case 2:
        result["votingSessionId"] = bb.readString();
        break;

      case 3:
        result["stampedByUserId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStampData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["userId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["votingSessionId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["stampedByUserId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeLinkPreviewData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["url"] = bb.readString();
        break;

      case 2:
        result["title"] = bb.readString();
        break;

      case 3:
        result["provider"] = bb.readString();
        break;

      case 4:
        result["description"] = bb.readString();
        break;

      case 5:
        result["thumbnailImageHash"] = bb.readString();
        break;

      case 6:
        result["faviconImageHash"] = bb.readString();
        break;

      case 7:
        result["thumbnailImageWidth"] = bb.readVarFloat();
        break;

      case 8:
        result["thumbnailImageHeight"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLinkPreviewData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["title"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["provider"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["description"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["thumbnailImageHash"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["faviconImageHash"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeString(value);
  }

  var value = message["thumbnailImageWidth"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarFloat(value);
  }

  var value = message["thumbnailImageHeight"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeViewport"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["canvasSpaceBounds"] = this["decodeRect"](bb);
        break;

      case 2:
        result["pixelPreview"] = !!bb.readByte();
        break;

      case 3:
        result["pixelDensity"] = bb.readVarFloat();
        break;

      case 4:
        result["canvasGuid"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeViewport"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["canvasSpaceBounds"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeRect"](value, bb);
  }

  var value = message["pixelPreview"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["pixelDensity"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["canvasGuid"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMouse"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["cursor"] = this["MouseCursor"][bb.readVarUint()];
        break;

      case 2:
        result["canvasSpaceLocation"] = this["decodeVector"](bb);
        break;

      case 3:
        result["canvasSpaceSelectionBox"] = this["decodeRect"](bb);
        break;

      case 4:
        result["canvasGuid"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["cursorHiddenReason"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMouse"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["cursor"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["MouseCursor"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MouseCursor\""); bb.writeVarUint(encoded);
  }

  var value = message["canvasSpaceLocation"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVector"](value, bb);
  }

  var value = message["canvasSpaceSelectionBox"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeRect"](value, bb);
  }

  var value = message["canvasGuid"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }

  var value = message["cursorHiddenReason"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeClick"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["id"] = bb.readVarUint();
  result["point"] = this["decodeVector"](bb);
  return result;
};

exports["encodeClick"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"id\"");
  }

  var value = message["point"];
  if (value != null) {
    this["encodeVector"](value, bb);
  } else {
    throw new Error("Missing required field \"point\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeScrollPosition"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["node"] = this["decodeGUID"](bb);
  result["scrollOffset"] = this["decodeVector"](bb);
  return result;
};

exports["encodeScrollPosition"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["node"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"node\"");
  }

  var value = message["scrollOffset"];
  if (value != null) {
    this["encodeVector"](value, bb);
  } else {
    throw new Error("Missing required field \"scrollOffset\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTriggeredOverlay"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["overlayGuid"] = this["decodeGUID"](bb);
  result["hotspotGuid"] = this["decodeGUID"](bb);
  result["swapGuid"] = this["decodeGUID"](bb);
  return result;
};

exports["encodeTriggeredOverlay"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overlayGuid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"overlayGuid\"");
  }

  var value = message["hotspotGuid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"hotspotGuid\"");
  }

  var value = message["swapGuid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"swapGuid\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTriggeredOverlayData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["overlayGuid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["hotspotGuid"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["swapGuid"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["prototypeInteractionGuid"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["hotspotBlueprintId"] = this["decodeGUIDPath"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTriggeredOverlayData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["overlayGuid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["hotspotGuid"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["swapGuid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["prototypeInteractionGuid"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }

  var value = message["hotspotBlueprintId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeGUIDPath"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTriggeredSetVariableActionData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeForFindingTopmostScreenId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["targetVariableId"] = bb.readString();
        break;

      case 3:
        result["targetVariableData"] = bb.readString();
        break;

      case 4:
        result["resolvedVariableModes"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTriggeredSetVariableActionData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeForFindingTopmostScreenId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["targetVariableId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["targetVariableData"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["resolvedVariableModes"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTriggeredSetVariableModeActionData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeForFindingTopmostScreenId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["targetVariableSetKey"] = bb.readString();
        break;

      case 3:
        result["targetVariableModeId"] = bb.readString();
        break;

      case 4:
        result["targetVariableSetId"] = this["decodeVariableSetID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTriggeredSetVariableModeActionData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeForFindingTopmostScreenId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["targetVariableSetKey"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["targetVariableModeId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["targetVariableSetId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableSetID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVideoStateChangeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["targetNodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["isPlaying"] = !!bb.readByte();
        break;

      case 3:
        result["isPlayingSound"] = !!bb.readByte();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["currentTimes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 5:
        result["actionTakenTimestamp"] = bb.readVarUint();
        break;

      case 6:
        result["playbackRate"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVideoStateChangeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["targetNodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["isPlaying"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["isPlayingSound"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["currentTimes"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["actionTakenTimestamp"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["playbackRate"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimelinePlaybackStateData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["status"] = bb.readVarUint();
        break;

      case 2:
        result["playbackTimeUs"] = bb.readVarUint64();
        break;

      case 3:
        result["timelineRootId"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["timelineDefId"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["focusedSubtimelineRootId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimelinePlaybackStateData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["status"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["playbackTimeUs"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint64(value);
  }

  var value = message["timelineRootId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["timelineDefId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }

  var value = message["focusedSubtimelineRootId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEmbeddedPrototypeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["sessionId"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEmbeddedPrototypeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["sessionId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePresentedState"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["baseScreenID"] = this["decodeGUID"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["overlays"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTriggeredOverlayData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePresentedState"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["baseScreenID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["overlays"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTriggeredOverlayData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TransitionDirection"] = {
  "0": "FORWARD",
  "1": "REVERSE",
  "FORWARD": 0,
  "REVERSE": 1
};

exports["decodeTopLevelPlaybackChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["oldState"] = this["decodePresentedState"](bb);
        break;

      case 2:
        result["newState"] = this["decodePresentedState"](bb);
        break;

      case 3:
        result["hotspotBlueprintID"] = this["decodeGUIDPath"](bb);
        break;

      case 4:
        result["interactionID"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["isHotspotInNewPresentedState"] = !!bb.readByte();
        break;

      case 6:
        result["direction"] = this["TransitionDirection"][bb.readVarUint()];
        break;

      case 7:
        result["instanceStablePath"] = this["decodeGUIDPath"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTopLevelPlaybackChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["oldState"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodePresentedState"](value, bb);
  }

  var value = message["newState"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodePresentedState"](value, bb);
  }

  var value = message["hotspotBlueprintID"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["interactionID"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }

  var value = message["isHotspotInNewPresentedState"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["direction"];
  if (value != null) {
    bb.writeVarUint(6);
    var encoded = this["TransitionDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["instanceStablePath"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeGUIDPath"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInstanceStateChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stateID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["interactionID"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["hotspotStablePath"] = this["decodeGUIDPath"](bb);
        break;

      case 4:
        result["instanceStablePath"] = this["decodeGUIDPath"](bb);
        break;

      case 5:
        result["phase"] = this["PlaybackChangePhase"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInstanceStateChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stateID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["interactionID"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["hotspotStablePath"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["instanceStablePath"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["phase"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["PlaybackChangePhase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlaybackChangePhase\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTextCursor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["selectionBox"] = this["decodeRect"](bb);
        break;

      case 2:
        result["canvasGuid"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["textNodeGuid"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextCursor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["selectionBox"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeRect"](value, bb);
  }

  var value = message["canvasGuid"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["textNodeGuid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTextSelection"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["selectionBoxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeRect"](bb);
        break;

      case 2:
        result["canvasGuid"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["textNodeGuid"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["textSelectionRange"] = this["decodeVector"](bb);
        break;

      case 5:
        result["textNodeOrContainingIfGuid"] = this["decodeGUID"](bb);
        break;

      case 6:
        result["tableCellRowId"] = this["decodeGUID"](bb);
        break;

      case 7:
        result["tableCellColId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTextSelection"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["selectionBoxes"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeRect"](value, bb);
    }
  }

  var value = message["canvasGuid"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["textNodeGuid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["textSelectionRange"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVector"](value, bb);
  }

  var value = message["textNodeOrContainingIfGuid"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeGUID"](value, bb);
  }

  var value = message["tableCellRowId"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeGUID"](value, bb);
  }

  var value = message["tableCellColId"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["PlaybackChangePhase"] = {
  "0": "INITIATED",
  "1": "ABORTED",
  "2": "COMMITTED",
  "INITIATED": 0,
  "ABORTED": 1,
  "COMMITTED": 2
};

exports["decodePlaybackChangeKeyframe"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["phase"] = this["PlaybackChangePhase"][bb.readVarUint()];
        break;

      case 2:
        result["progress"] = bb.readVarFloat();
        break;

      case 3:
        result["timestamp"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePlaybackChangeKeyframe"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["phase"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PlaybackChangePhase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlaybackChangePhase\""); bb.writeVarUint(encoded);
  }

  var value = message["progress"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["timestamp"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStateMapping"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stablePath"] = this["decodeGUIDPath"](bb);
        break;

      case 2:
        result["lastTopLevelChange"] = this["decodeTopLevelPlaybackChange"](bb);
        break;

      case 3:
        result["lastTopLevelChangeStatus"] = this["decodePlaybackChangeKeyframe"](bb);
        break;

      case 4:
        result["timestamp"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStateMapping"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stablePath"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["lastTopLevelChange"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTopLevelPlaybackChange"](value, bb);
  }

  var value = message["lastTopLevelChangeStatus"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodePlaybackChangeKeyframe"](value, bb);
  }

  var value = message["timestamp"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeScrollMapping"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["blueprintID"] = this["decodeGUIDPath"](bb);
        break;

      case 2:
        result["overlayIndex"] = bb.readVarUint();
        break;

      case 3:
        result["scrollOffset"] = this["decodeVector"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeScrollMapping"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["blueprintID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["overlayIndex"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["scrollOffset"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVector"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePlaybackUpdate"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["lastTopLevelChange"] = this["decodeTopLevelPlaybackChange"](bb);
        break;

      case 2:
        result["lastTopLevelChangeStatus"] = this["decodePlaybackChangeKeyframe"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["scrollMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeScrollMapping"](bb);
        break;

      case 4:
        result["timestamp"] = bb.readVarFloat();
        break;

      case 5:
        result["pointerLocation"] = this["decodeVector"](bb);
        break;

      case 6:
        result["isTopLevelFrameChange"] = !!bb.readByte();
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["stateMappings"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeStateMapping"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePlaybackUpdate"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["lastTopLevelChange"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeTopLevelPlaybackChange"](value, bb);
  }

  var value = message["lastTopLevelChangeStatus"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodePlaybackChangeKeyframe"](value, bb);
  }

  var value = message["scrollMappings"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeScrollMapping"](value, bb);
    }
  }

  var value = message["timestamp"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["pointerLocation"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVector"](value, bb);
  }

  var value = message["isTopLevelFrameChange"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["stateMappings"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeStateMapping"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeChatMessage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["text"] = bb.readString();
        break;

      case 2:
        result["previousText"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeChatMessage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["text"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["previousText"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVoiceMetadata"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["connectedCallId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVoiceMetadata"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["connectedCallId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAprilFunCursor"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = bb.readString();
        break;

      case 2:
        result["trailEnabled"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAprilFunCursor"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["trailEnabled"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAprilFunFigPal"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["customization"] = bb.readString();
        break;

      case 2:
        result["name"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAprilFunFigPal"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["customization"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["Heartbeat"] = {
  "0": "FOREGROUND",
  "1": "BACKGROUND",
  "FOREGROUND": 0,
  "BACKGROUND": 1
};
exports["SitesViewState"] = {
  "0": "FILE",
  "1": "CODE",
  "2": "DAKOTA",
  "3": "SETTINGS",
  "4": "INSERT",
  "5": "VARIABLES",
  "FILE": 0,
  "CODE": 1,
  "DAKOTA": 2,
  "SETTINGS": 3,
  "INSERT": 4,
  "VARIABLES": 5
};
exports["DesignFullPageViewState"] = {
  "0": "NONE",
  "1": "DESIGN_SYSTEM",
  "2": "VARIABLES",
  "NONE": 0,
  "DESIGN_SYSTEM": 1,
  "VARIABLES": 2
};

exports["decodeAgentInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["logo"] = bb.readString();
        break;

      case 3:
        result["oauthClientId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgentInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["logo"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["oauthClientId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AgentActivityStatus"] = {
  "1": "RUNNING",
  "RUNNING": 1
};

exports["decodeAgentCanvasActivity"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["nodeIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 2:
        result["status"] = this["AgentActivityStatus"][bb.readVarUint()];
        break;

      case 3:
        result["triggeringUserId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAgentCanvasActivity"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeIds"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["status"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["AgentActivityStatus"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AgentActivityStatus\""); bb.writeVarUint(encoded);
  }

  var value = message["triggeringUserId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeUserChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sessionID"] = bb.readVarUint();
        break;

      case 44:
        result["stableSessionID"] = bb.readString();
        break;

      case 2:
        result["connected"] = !!bb.readByte();
        break;

      case 3:
        result["name"] = bb.readString();
        break;

      case 4:
        result["color"] = this["decodeColor"](bb);
        break;

      case 5:
        result["imageURL"] = bb.readString();
        break;

      case 6:
        result["viewport"] = this["decodeViewport"](bb);
        break;

      case 7:
        result["mouse"] = this["decodeMouse"](bb);
        break;

      case 8:
        var length = bb.readVarUint();
        var values = result["selection"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 9:
        var length = bb.readVarUint();
        var values = result["observing"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 10:
        result["deviceName"] = bb.readString();
        break;

      case 11:
        var length = bb.readVarUint();
        var values = result["recentClicks"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeClick"](bb);
        break;

      case 12:
        var length = bb.readVarUint();
        var values = result["scrollPositions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeScrollPosition"](bb);
        break;

      case 13:
        var length = bb.readVarUint();
        var values = result["triggeredOverlays"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTriggeredOverlay"](bb);
        break;

      case 14:
        result["userID"] = bb.readString();
        break;

      case 15:
        result["lastTriggeredHotspot"] = this["decodeGUID"](bb);
        break;

      case 16:
        result["lastTriggeredPrototypeInteractionID"] = this["decodeGUID"](bb);
        break;

      case 38:
        result["lastTriggeredObjectAnimationIndex"] = bb.readVarUint();
        break;

      case 17:
        var length = bb.readVarUint();
        var values = result["triggeredOverlaysData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTriggeredOverlayData"](bb);
        break;

      case 18:
        var length = bb.readVarUint();
        var values = result["playbackUpdates"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePlaybackUpdate"](bb);
        break;

      case 19:
        result["chatMessage"] = this["decodeChatMessage"](bb);
        break;

      case 20:
        result["voiceMetadata"] = this["decodeVoiceMetadata"](bb);
        break;

      case 21:
        result["canWrite"] = !!bb.readByte();
        break;

      case 22:
        result["highFiveStatus"] = !!bb.readByte();
        break;

      case 23:
        var length = bb.readVarUint();
        var values = result["instanceStateChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeInstanceStateChange"](bb);
        break;

      case 24:
        result["textCursor"] = this["decodeTextCursor"](bb);
        break;

      case 25:
        result["textSelection"] = this["decodeTextSelection"](bb);
        break;

      case 26:
        result["connectedAtTimeS"] = bb.readVarUint();
        break;

      case 27:
        result["focusOnTextCursor"] = !!bb.readByte();
        break;

      case 28:
        result["heartbeat"] = this["Heartbeat"][bb.readVarUint()];
        break;

      case 29:
        var length = bb.readVarUint();
        var values = result["triggeredSetVariableActionData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTriggeredSetVariableActionData"](bb);
        break;

      case 30:
        var length = bb.readVarUint();
        var values = result["videoStateChangeData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVideoStateChangeData"](bb);
        break;

      case 31:
        result["clientID"] = bb.readString();
        break;

      case 32:
        result["focusedSlideId"] = this["decodeGUID"](bb);
        break;

      case 33:
        var length = bb.readVarUint();
        var values = result["triggeredSetVariableModeActionData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTriggeredSetVariableModeActionData"](bb);
        break;

      case 34:
        result["aprilFunCursor"] = this["decodeAprilFunCursor"](bb);
        break;

      case 35:
        var length = bb.readVarUint();
        var values = result["embeddedPrototypeData"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEmbeddedPrototypeData"](bb);
        break;

      case 36:
        result["activeSlidesEmbeddablePrototype"] = this["decodeGUID"](bb);
        break;

      case 43:
        var length = bb.readVarUint();
        var values = result["activeEmbeddedPrototypes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 37:
        result["activeCodeComponentId"] = this["decodeGUID"](bb);
        break;

      case 39:
        result["aprilFunFigPal"] = this["decodeAprilFunFigPal"](bb);
        break;

      case 40:
        result["collaborativeTextSelection"] = this["decodeCollaborativeTextSelection"](bb);
        break;

      case 41:
        result["sitesViewState"] = this["SitesViewState"][bb.readVarUint()];
        break;

      case 42:
        var length = bb.readVarUint();
        var values = result["nodeChatExchanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChatExchange"](bb);
        break;

      case 45:
        result["designFullPageViewState"] = this["DesignFullPageViewState"][bb.readVarUint()];
        break;

      case 46:
        result["agentInfo"] = this["decodeAgentInfo"](bb);
        break;

      case 47:
        var length = bb.readVarUint();
        var values = result["timelinePlaybackState"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTimelinePlaybackStateData"](bb);
        break;

      case 48:
        result["agentCanvasActivity"] = this["decodeAgentCanvasActivity"](bb);
        break;

      case 49:
        result["assistantThreadId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeUserChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["stableSessionID"];
  if (value != null) {
    bb.writeVarUint(44);
    bb.writeString(value);
  }

  var value = message["connected"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["color"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeColor"](value, bb);
  }

  var value = message["imageURL"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["viewport"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeViewport"](value, bb);
  }

  var value = message["mouse"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeMouse"](value, bb);
  }

  var value = message["selection"];
  if (value != null) {
    bb.writeVarUint(8);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["observing"];
  if (value != null) {
    bb.writeVarUint(9);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["deviceName"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeString(value);
  }

  var value = message["recentClicks"];
  if (value != null) {
    bb.writeVarUint(11);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeClick"](value, bb);
    }
  }

  var value = message["scrollPositions"];
  if (value != null) {
    bb.writeVarUint(12);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeScrollPosition"](value, bb);
    }
  }

  var value = message["triggeredOverlays"];
  if (value != null) {
    bb.writeVarUint(13);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTriggeredOverlay"](value, bb);
    }
  }

  var value = message["userID"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeString(value);
  }

  var value = message["lastTriggeredHotspot"];
  if (value != null) {
    bb.writeVarUint(15);
    this["encodeGUID"](value, bb);
  }

  var value = message["lastTriggeredPrototypeInteractionID"];
  if (value != null) {
    bb.writeVarUint(16);
    this["encodeGUID"](value, bb);
  }

  var value = message["lastTriggeredObjectAnimationIndex"];
  if (value != null) {
    bb.writeVarUint(38);
    bb.writeVarUint(value);
  }

  var value = message["triggeredOverlaysData"];
  if (value != null) {
    bb.writeVarUint(17);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTriggeredOverlayData"](value, bb);
    }
  }

  var value = message["playbackUpdates"];
  if (value != null) {
    bb.writeVarUint(18);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePlaybackUpdate"](value, bb);
    }
  }

  var value = message["chatMessage"];
  if (value != null) {
    bb.writeVarUint(19);
    this["encodeChatMessage"](value, bb);
  }

  var value = message["voiceMetadata"];
  if (value != null) {
    bb.writeVarUint(20);
    this["encodeVoiceMetadata"](value, bb);
  }

  var value = message["canWrite"];
  if (value != null) {
    bb.writeVarUint(21);
    bb.writeByte(value);
  }

  var value = message["highFiveStatus"];
  if (value != null) {
    bb.writeVarUint(22);
    bb.writeByte(value);
  }

  var value = message["instanceStateChanges"];
  if (value != null) {
    bb.writeVarUint(23);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeInstanceStateChange"](value, bb);
    }
  }

  var value = message["textCursor"];
  if (value != null) {
    bb.writeVarUint(24);
    this["encodeTextCursor"](value, bb);
  }

  var value = message["textSelection"];
  if (value != null) {
    bb.writeVarUint(25);
    this["encodeTextSelection"](value, bb);
  }

  var value = message["connectedAtTimeS"];
  if (value != null) {
    bb.writeVarUint(26);
    bb.writeVarUint(value);
  }

  var value = message["focusOnTextCursor"];
  if (value != null) {
    bb.writeVarUint(27);
    bb.writeByte(value);
  }

  var value = message["heartbeat"];
  if (value != null) {
    bb.writeVarUint(28);
    var encoded = this["Heartbeat"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Heartbeat\""); bb.writeVarUint(encoded);
  }

  var value = message["triggeredSetVariableActionData"];
  if (value != null) {
    bb.writeVarUint(29);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTriggeredSetVariableActionData"](value, bb);
    }
  }

  var value = message["videoStateChangeData"];
  if (value != null) {
    bb.writeVarUint(30);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVideoStateChangeData"](value, bb);
    }
  }

  var value = message["clientID"];
  if (value != null) {
    bb.writeVarUint(31);
    bb.writeString(value);
  }

  var value = message["focusedSlideId"];
  if (value != null) {
    bb.writeVarUint(32);
    this["encodeGUID"](value, bb);
  }

  var value = message["triggeredSetVariableModeActionData"];
  if (value != null) {
    bb.writeVarUint(33);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTriggeredSetVariableModeActionData"](value, bb);
    }
  }

  var value = message["aprilFunCursor"];
  if (value != null) {
    bb.writeVarUint(34);
    this["encodeAprilFunCursor"](value, bb);
  }

  var value = message["embeddedPrototypeData"];
  if (value != null) {
    bb.writeVarUint(35);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEmbeddedPrototypeData"](value, bb);
    }
  }

  var value = message["activeSlidesEmbeddablePrototype"];
  if (value != null) {
    bb.writeVarUint(36);
    this["encodeGUID"](value, bb);
  }

  var value = message["activeEmbeddedPrototypes"];
  if (value != null) {
    bb.writeVarUint(43);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["activeCodeComponentId"];
  if (value != null) {
    bb.writeVarUint(37);
    this["encodeGUID"](value, bb);
  }

  var value = message["aprilFunFigPal"];
  if (value != null) {
    bb.writeVarUint(39);
    this["encodeAprilFunFigPal"](value, bb);
  }

  var value = message["collaborativeTextSelection"];
  if (value != null) {
    bb.writeVarUint(40);
    this["encodeCollaborativeTextSelection"](value, bb);
  }

  var value = message["sitesViewState"];
  if (value != null) {
    bb.writeVarUint(41);
    var encoded = this["SitesViewState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SitesViewState\""); bb.writeVarUint(encoded);
  }

  var value = message["nodeChatExchanges"];
  if (value != null) {
    bb.writeVarUint(42);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChatExchange"](value, bb);
    }
  }

  var value = message["designFullPageViewState"];
  if (value != null) {
    bb.writeVarUint(45);
    var encoded = this["DesignFullPageViewState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DesignFullPageViewState\""); bb.writeVarUint(encoded);
  }

  var value = message["agentInfo"];
  if (value != null) {
    bb.writeVarUint(46);
    this["encodeAgentInfo"](value, bb);
  }

  var value = message["timelinePlaybackState"];
  if (value != null) {
    bb.writeVarUint(47);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTimelinePlaybackStateData"](value, bb);
    }
  }

  var value = message["agentCanvasActivity"];
  if (value != null) {
    bb.writeVarUint(48);
    this["encodeAgentCanvasActivity"](value, bb);
  }

  var value = message["assistantThreadId"];
  if (value != null) {
    bb.writeVarUint(49);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeInteractiveSlideElementChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["userID"] = bb.readString();
        break;

      case 2:
        result["anonymousUserID"] = bb.readString();
        break;

      case 3:
        result["nodeID"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["responseData"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeInteractiveSlideElementChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["userID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["anonymousUserID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["nodeID"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["responseData"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeStatusChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["nodeIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 2:
        result["statusInfo"] = this["decodeSectionStatusInfo"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeStatusChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeIds"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["statusInfo"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeSectionStatusInfo"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBuzzApprovalAssetEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["assetNodeId"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["approved"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBuzzApprovalAssetEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["assetNodeId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["approved"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBuzzApprovalChange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["assetEntries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBuzzApprovalAssetEntry"](bb);
        break;

      case 2:
        result["canvasGridNodeId"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["requestId"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBuzzApprovalChange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["assetEntries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBuzzApprovalAssetEntry"](value, bb);
    }
  }

  var value = message["canvasGridNodeId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["requestId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["SceneGraphQueryBehavior"] = {
  "0": "DEFAULT",
  "1": "CONTAINING_PAGE",
  "2": "PLUGIN",
  "DEFAULT": 0,
  "CONTAINING_PAGE": 1,
  "PLUGIN": 2
};
exports["SceneGraphQueryMode"] = {
  "0": "ADD",
  "1": "SET",
  "ADD": 0,
  "SET": 1
};

exports["decodeSceneGraphQuery"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["startingNode"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["depth"] = bb.readVarUint();
        break;

      case 3:
        result["behavior"] = this["SceneGraphQueryBehavior"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSceneGraphQuery"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["startingNode"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["depth"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["behavior"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["SceneGraphQueryBehavior"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SceneGraphQueryBehavior\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeChangesMetadata"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["blobsFieldOffset"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChangesMetadata"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["blobsFieldOffset"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCursorReaction"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["imageUrl"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCursorReaction"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["imageUrl"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTimerInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["isPaused"] = !!bb.readByte();
        break;

      case 2:
        result["timeRemainingMs"] = bb.readVarUint();
        break;

      case 3:
        result["totalTimeMs"] = bb.readVarUint();
        break;

      case 4:
        result["timerID"] = bb.readVarUint();
        break;

      case 5:
        result["setBy"] = bb.readString();
        break;

      case 6:
        result["songID"] = bb.readVarUint();
        break;

      case 7:
        result["lastReceivedSongTimestampMs"] = bb.readVarUint();
        break;

      case 8:
        result["songUUID"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTimerInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["isPaused"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["timeRemainingMs"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["totalTimeMs"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["timerID"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }

  var value = message["setBy"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["songID"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeVarUint(value);
  }

  var value = message["lastReceivedSongTimestampMs"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarUint(value);
  }

  var value = message["songUUID"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMusicInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["isPaused"] = !!bb.readByte();
        break;

      case 2:
        result["messageID"] = bb.readVarUint();
        break;

      case 3:
        result["songID"] = bb.readString();
        break;

      case 4:
        result["lastReceivedSongTimestampMs"] = bb.readVarUint();
        break;

      case 5:
        result["isStopped"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMusicInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["isPaused"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["messageID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["songID"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["lastReceivedSongTimestampMs"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }

  var value = message["isStopped"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePresenterNomination"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sessionID"] = bb.readVarUint();
        break;

      case 2:
        result["isCancelled"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePresenterNomination"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["isCancelled"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePresenterInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sessionID"] = bb.readVarUint();
        break;

      case 2:
        result["nomination"] = this["decodePresenterNomination"](bb);
        break;

      case 3:
        result["isReconnected"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePresenterInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["nomination"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodePresenterNomination"](value, bb);
  }

  var value = message["isReconnected"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeClientBroadcast"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["sessionID"] = bb.readVarUint();
        break;

      case 2:
        result["cursorReaction"] = this["decodeCursorReaction"](bb);
        break;

      case 3:
        result["timer"] = this["decodeTimerInfo"](bb);
        break;

      case 4:
        result["presenter"] = this["decodePresenterInfo"](bb);
        break;

      case 5:
        result["prototypePresenter"] = this["decodePresenterInfo"](bb);
        break;

      case 6:
        result["music"] = this["decodeMusicInfo"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeClientBroadcast"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["cursorReaction"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeCursorReaction"](value, bb);
  }

  var value = message["timer"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeTimerInfo"](value, bb);
  }

  var value = message["presenter"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodePresenterInfo"](value, bb);
  }

  var value = message["prototypePresenter"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodePresenterInfo"](value, bb);
  }

  var value = message["music"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeMusicInfo"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["PasteAssetType"] = {
  "0": "UNKNOWN",
  "1": "VARIABLE",
  "2": "STYLE_PROPERTIES",
  "3": "STYLE_PROPERTIES_FILL",
  "4": "STYLE_PROPERTIES_STROKE",
  "5": "STYLE_PROPERTIES_EFFECT",
  "UNKNOWN": 0,
  "VARIABLE": 1,
  "STYLE_PROPERTIES": 2,
  "STYLE_PROPERTIES_FILL": 3,
  "STYLE_PROPERTIES_STROKE": 4,
  "STYLE_PROPERTIES_EFFECT": 5
};
exports["NodeChangeOrder"] = {
  "0": "GUID",
  "1": "PREORDER",
  "2": "TOPOLOGICAL",
  "GUID": 0,
  "PREORDER": 1,
  "TOPOLOGICAL": 2
};

exports["decodeMessage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["MessageType"][bb.readVarUint()];
        break;

      case 2:
        result["sessionID"] = bb.readVarUint();
        break;

      case 42:
        result["stableSessionID"] = bb.readString();
        break;

      case 3:
        result["ackID"] = bb.readVarUint();
        break;

      case 37:
        result["isRetransmission"] = !!bb.readByte();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["nodeChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["userChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeUserChange"](bb);
        break;

      case 32:
        result["interactiveSlideElementChange"] = this["decodeInteractiveSlideElementChange"](bb);
        break;

      case 36:
        result["nodeStatusChange"] = this["decodeNodeStatusChange"](bb);
        break;

      case 44:
        result["buzzApprovalChange"] = this["decodeBuzzApprovalChange"](bb);
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["blobs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBlob"](bb);
        break;

      case 30:
        result["blobBaseIndex"] = bb.readVarUint();
        break;

      case 7:
        result["signalName"] = bb.readString();
        break;

      case 8:
        result["access"] = this["Access"][bb.readVarUint()];
        break;

      case 9:
        result["styleSetName"] = bb.readString();
        break;

      case 10:
        result["styleSetType"] = this["StyleSetType"][bb.readVarUint()];
        break;

      case 11:
        result["styleSetContentType"] = this["StyleSetContentType"][bb.readVarUint()];
        break;

      case 12:
        result["pasteID"] = bb.readVarInt();
        break;

      case 13:
        result["pasteOffset"] = this["decodeVector"](bb);
        break;

      case 14:
        result["pasteFileKey"] = bb.readString();
        break;

      case 15:
        result["signalPayload"] = bb.readString();
        break;

      case 16:
        var length = bb.readVarUint();
        var values = result["sceneGraphQueries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeSceneGraphQuery"](bb);
        break;

      case 17:
        result["nodeChangesMetadata"] = this["decodeNodeChangesMetadata"](bb);
        break;

      case 18:
        result["fileVersion"] = bb.readVarUint();
        break;

      case 19:
        result["pasteIsPartiallyOutsideEnclosingFrame"] = !!bb.readByte();
        break;

      case 20:
        result["pastePageId"] = this["decodeGUID"](bb);
        break;

      case 21:
        result["isCut"] = !!bb.readByte();
        break;

      case 22:
        var length = bb.readVarUint();
        var values = result["localUndoStack"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMessage"](bb);
        break;

      case 23:
        var length = bb.readVarUint();
        var values = result["localRedoStack"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeMessage"](bb);
        break;

      case 24:
        var length = bb.readVarUint();
        var values = result["broadcasts"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeClientBroadcast"](bb);
        break;

      case 25:
        result["reconnectSequenceNumber"] = bb.readVarUint();
        break;

      case 26:
        result["pasteBranchSourceFileKey"] = bb.readString();
        break;

      case 27:
        result["pasteEditorType"] = this["EditorType"][bb.readVarUint()];
        break;

      case 28:
        result["postSyncActions"] = bb.readString();
        break;

      case 29:
        var length = bb.readVarUint();
        var values = result["publishedAssetGuids"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 31:
        result["dirtyFromInitialLoad"] = !!bb.readByte();
        break;

      case 33:
        var length = bb.readVarUint();
        var values = result["clipboardSelectionRegions"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeClipboardSelectionRegion"](bb);
        break;

      case 34:
        result["encodedOffsetsIndex"] = this["decodeEncodedOffsetsIndex"](bb);
        break;

      case 35:
        result["hasRepeatingContent"] = !!bb.readByte();
        break;

      case 38:
        result["sentTimestamp"] = bb.readVarUint64();
        break;

      case 39:
        var length = bb.readVarUint();
        var values = result["annotationCategories"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnnotationCategory"](bb);
        break;

      case 40:
        result["clientRenderedMetadata"] = this["decodeClientRenderedMetadata"](bb);
        break;

      case 41:
        result["pasteAssetType"] = this["PasteAssetType"][bb.readVarUint()];
        break;

      case 43:
        result["objectAnimations"] = this["decodeObjectAnimationList"](bb);
        break;

      case 45:
        result["sceneGraphQueryMode"] = this["SceneGraphQueryMode"][bb.readVarUint()];
        break;

      case 46:
        var length = bb.readVarUint();
        var values = result["undoBatchPageIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 47:
        result["originFileKey"] = bb.readString();
        break;

      case 48:
        result["nodeChangeOrder"] = this["NodeChangeOrder"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMessage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["MessageType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"MessageType\""); bb.writeVarUint(encoded);
  }

  var value = message["sessionID"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["stableSessionID"];
  if (value != null) {
    bb.writeVarUint(42);
    bb.writeString(value);
  }

  var value = message["ackID"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["isRetransmission"];
  if (value != null) {
    bb.writeVarUint(37);
    bb.writeByte(value);
  }

  var value = message["nodeChanges"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["userChanges"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeUserChange"](value, bb);
    }
  }

  var value = message["interactiveSlideElementChange"];
  if (value != null) {
    bb.writeVarUint(32);
    this["encodeInteractiveSlideElementChange"](value, bb);
  }

  var value = message["nodeStatusChange"];
  if (value != null) {
    bb.writeVarUint(36);
    this["encodeNodeStatusChange"](value, bb);
  }

  var value = message["buzzApprovalChange"];
  if (value != null) {
    bb.writeVarUint(44);
    this["encodeBuzzApprovalChange"](value, bb);
  }

  var value = message["blobs"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBlob"](value, bb);
    }
  }

  var value = message["blobBaseIndex"];
  if (value != null) {
    bb.writeVarUint(30);
    bb.writeVarUint(value);
  }

  var value = message["signalName"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeString(value);
  }

  var value = message["access"];
  if (value != null) {
    bb.writeVarUint(8);
    var encoded = this["Access"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"Access\""); bb.writeVarUint(encoded);
  }

  var value = message["styleSetName"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeString(value);
  }

  var value = message["styleSetType"];
  if (value != null) {
    bb.writeVarUint(10);
    var encoded = this["StyleSetType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StyleSetType\""); bb.writeVarUint(encoded);
  }

  var value = message["styleSetContentType"];
  if (value != null) {
    bb.writeVarUint(11);
    var encoded = this["StyleSetContentType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"StyleSetContentType\""); bb.writeVarUint(encoded);
  }

  var value = message["pasteID"];
  if (value != null) {
    bb.writeVarUint(12);
    bb.writeVarInt(value);
  }

  var value = message["pasteOffset"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodeVector"](value, bb);
  }

  var value = message["pasteFileKey"];
  if (value != null) {
    bb.writeVarUint(14);
    bb.writeString(value);
  }

  var value = message["signalPayload"];
  if (value != null) {
    bb.writeVarUint(15);
    bb.writeString(value);
  }

  var value = message["sceneGraphQueries"];
  if (value != null) {
    bb.writeVarUint(16);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeSceneGraphQuery"](value, bb);
    }
  }

  var value = message["nodeChangesMetadata"];
  if (value != null) {
    bb.writeVarUint(17);
    this["encodeNodeChangesMetadata"](value, bb);
  }

  var value = message["fileVersion"];
  if (value != null) {
    bb.writeVarUint(18);
    bb.writeVarUint(value);
  }

  var value = message["pasteIsPartiallyOutsideEnclosingFrame"];
  if (value != null) {
    bb.writeVarUint(19);
    bb.writeByte(value);
  }

  var value = message["pastePageId"];
  if (value != null) {
    bb.writeVarUint(20);
    this["encodeGUID"](value, bb);
  }

  var value = message["isCut"];
  if (value != null) {
    bb.writeVarUint(21);
    bb.writeByte(value);
  }

  var value = message["localUndoStack"];
  if (value != null) {
    bb.writeVarUint(22);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMessage"](value, bb);
    }
  }

  var value = message["localRedoStack"];
  if (value != null) {
    bb.writeVarUint(23);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeMessage"](value, bb);
    }
  }

  var value = message["broadcasts"];
  if (value != null) {
    bb.writeVarUint(24);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeClientBroadcast"](value, bb);
    }
  }

  var value = message["reconnectSequenceNumber"];
  if (value != null) {
    bb.writeVarUint(25);
    bb.writeVarUint(value);
  }

  var value = message["pasteBranchSourceFileKey"];
  if (value != null) {
    bb.writeVarUint(26);
    bb.writeString(value);
  }

  var value = message["pasteEditorType"];
  if (value != null) {
    bb.writeVarUint(27);
    var encoded = this["EditorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EditorType\""); bb.writeVarUint(encoded);
  }

  var value = message["postSyncActions"];
  if (value != null) {
    bb.writeVarUint(28);
    bb.writeString(value);
  }

  var value = message["publishedAssetGuids"];
  if (value != null) {
    bb.writeVarUint(29);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["dirtyFromInitialLoad"];
  if (value != null) {
    bb.writeVarUint(31);
    bb.writeByte(value);
  }

  var value = message["clipboardSelectionRegions"];
  if (value != null) {
    bb.writeVarUint(33);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeClipboardSelectionRegion"](value, bb);
    }
  }

  var value = message["encodedOffsetsIndex"];
  if (value != null) {
    bb.writeVarUint(34);
    this["encodeEncodedOffsetsIndex"](value, bb);
  }

  var value = message["hasRepeatingContent"];
  if (value != null) {
    bb.writeVarUint(35);
    bb.writeByte(value);
  }

  var value = message["sentTimestamp"];
  if (value != null) {
    bb.writeVarUint(38);
    bb.writeVarUint64(value);
  }

  var value = message["annotationCategories"];
  if (value != null) {
    bb.writeVarUint(39);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnnotationCategory"](value, bb);
    }
  }

  var value = message["clientRenderedMetadata"];
  if (value != null) {
    bb.writeVarUint(40);
    this["encodeClientRenderedMetadata"](value, bb);
  }

  var value = message["pasteAssetType"];
  if (value != null) {
    bb.writeVarUint(41);
    var encoded = this["PasteAssetType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PasteAssetType\""); bb.writeVarUint(encoded);
  }

  var value = message["objectAnimations"];
  if (value != null) {
    bb.writeVarUint(43);
    this["encodeObjectAnimationList"](value, bb);
  }

  var value = message["sceneGraphQueryMode"];
  if (value != null) {
    bb.writeVarUint(45);
    var encoded = this["SceneGraphQueryMode"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SceneGraphQueryMode\""); bb.writeVarUint(encoded);
  }

  var value = message["undoBatchPageIds"];
  if (value != null) {
    bb.writeVarUint(46);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["originFileKey"];
  if (value != null) {
    bb.writeVarUint(47);
    bb.writeString(value);
  }

  var value = message["nodeChangeOrder"];
  if (value != null) {
    bb.writeVarUint(48);
    var encoded = this["NodeChangeOrder"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodeChangeOrder\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEncodedOffsetsIndex"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeChangesFieldOffset"] = bb.readVarUint();
        break;

      case 2:
        result["nodeChangesFieldLength"] = bb.readVarUint();
        break;

      case 3:
        result["blobsFieldOffset"] = bb.readVarUint();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["nodeChangeOffsets"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDAndEncodedOffset"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEncodedOffsetsIndex"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeChangesFieldOffset"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["nodeChangesFieldLength"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["blobsFieldOffset"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["nodeChangeOffsets"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDAndEncodedOffset"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGUIDAndEncodedOffset"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["guid"] = this["decodeGUID"](bb);
  result["offset"] = bb.readVarUint();
  return result;
};

exports["encodeGUIDAndEncodedOffset"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    this["encodeGUID"](value, bb);
  } else {
    throw new Error("Missing required field \"guid\"");
  }

  var value = message["offset"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"offset\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeDiffChunk"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["nodeChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 2:
        result["phase"] = this["NodePhase"][bb.readVarUint()];
        break;

      case 3:
        result["displayNode"] = this["decodeNodeChange"](bb);
        break;

      case 4:
        result["canvasId"] = this["decodeGUID"](bb);
        break;

      case 5:
        result["canvasName"] = bb.readString();
        break;

      case 6:
        result["canvasIsInternal"] = !!bb.readByte();
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["chunksAffectingThisChunk"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      case 8:
        var length = bb.readVarUint();
        var values = result["basisParentHierarchy"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 9:
        var length = bb.readVarUint();
        var values = result["parentHierarchy"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 10:
        var length = bb.readVarUint();
        var values = result["basisParentHierarchyGuids"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 11:
        var length = bb.readVarUint();
        var values = result["parentHierarchyGuids"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDiffChunk"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeChanges"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["phase"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NodePhase"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodePhase\""); bb.writeVarUint(encoded);
  }

  var value = message["displayNode"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["canvasId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeGUID"](value, bb);
  }

  var value = message["canvasName"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeString(value);
  }

  var value = message["canvasIsInternal"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["chunksAffectingThisChunk"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }

  var value = message["basisParentHierarchy"];
  if (value != null) {
    bb.writeVarUint(8);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["parentHierarchy"];
  if (value != null) {
    bb.writeVarUint(9);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["basisParentHierarchyGuids"];
  if (value != null) {
    bb.writeVarUint(10);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["parentHierarchyGuids"];
  if (value != null) {
    bb.writeVarUint(11);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["DiffType"] = {
  "0": "BRANCHING",
  "1": "NODE_CHANGES_ONLY",
  "BRANCHING": 0,
  "NODE_CHANGES_ONLY": 1
};

exports["decodeDiffPayload"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["nodeChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["blobs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeBlob"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["diffChunks"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeDiffChunk"](bb);
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["diffBasis"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["basisParentNodeChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["parentNodeChanges"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChange"](bb);
        break;

      case 7:
        result["diffType"] = this["DiffType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeDiffPayload"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeChanges"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["blobs"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeBlob"](value, bb);
    }
  }

  var value = message["diffChunks"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeDiffChunk"](value, bb);
    }
  }

  var value = message["diffBasis"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["basisParentNodeChanges"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["parentNodeChanges"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChange"](value, bb);
    }
  }

  var value = message["diffType"];
  if (value != null) {
    bb.writeVarUint(7);
    var encoded = this["DiffType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"DiffType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["RichMediaType"] = {
  "0": "ANIMATED_IMAGE",
  "1": "VIDEO",
  "ANIMATED_IMAGE": 0,
  "VIDEO": 1
};

exports["decodeRichMediaData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["mediaHash"] = bb.readString();
        break;

      case 2:
        result["richMediaType"] = this["RichMediaType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeRichMediaData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["mediaHash"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["richMediaType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["RichMediaType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RichMediaType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["VariableDataType"] = {
  "0": "BOOLEAN",
  "1": "FLOAT",
  "2": "STRING",
  "3": "ALIAS",
  "4": "COLOR",
  "5": "EXPRESSION",
  "6": "MAP",
  "7": "SYMBOL_ID",
  "8": "FONT_STYLE",
  "9": "TEXT_DATA",
  "10": "INVALID",
  "11": "NODE_FIELD_ALIAS",
  "12": "CMS_ALIAS",
  "13": "PROP_REF",
  "14": "IMAGE",
  "15": "MANAGED_STRING_ALIAS",
  "16": "LINK",
  "17": "JS_RUNTIME_ALIAS",
  "18": "SLOT_CONTENT_ID",
  "19": "DATE",
  "20": "KEYFRAME_TRACK_ID",
  "21": "KEYFRAME_TRACK_PARAMETER_DATA",
  "22": "EASING",
  "23": "TIMING",
  "24": "VECTOR",
  "25": "COLOR_ARRAY",
  "26": "LINE",
  "27": "CIRCLE",
  "28": "ROTATION_3D",
  "29": "CIRCLE_POINT",
  "30": "GRADIENT",
  "31": "COLOR_POINT",
  "32": "GRADIENT_PAINT",
  "BOOLEAN": 0,
  "FLOAT": 1,
  "STRING": 2,
  "ALIAS": 3,
  "COLOR": 4,
  "EXPRESSION": 5,
  "MAP": 6,
  "SYMBOL_ID": 7,
  "FONT_STYLE": 8,
  "TEXT_DATA": 9,
  "INVALID": 10,
  "NODE_FIELD_ALIAS": 11,
  "CMS_ALIAS": 12,
  "PROP_REF": 13,
  "IMAGE": 14,
  "MANAGED_STRING_ALIAS": 15,
  "LINK": 16,
  "JS_RUNTIME_ALIAS": 17,
  "SLOT_CONTENT_ID": 18,
  "DATE": 19,
  "KEYFRAME_TRACK_ID": 20,
  "KEYFRAME_TRACK_PARAMETER_DATA": 21,
  "EASING": 22,
  "TIMING": 23,
  "VECTOR": 24,
  "COLOR_ARRAY": 25,
  "LINE": 26,
  "CIRCLE": 27,
  "ROTATION_3D": 28,
  "CIRCLE_POINT": 29,
  "GRADIENT": 30,
  "COLOR_POINT": 31,
  "GRADIENT_PAINT": 32
};
exports["VariableResolvedDataType"] = {
  "0": "BOOLEAN",
  "1": "FLOAT",
  "2": "STRING",
  "4": "COLOR",
  "5": "MAP",
  "6": "SYMBOL_ID",
  "7": "FONT_STYLE",
  "8": "TEXT_DATA",
  "9": "IMAGE",
  "10": "LINK",
  "11": "JS_RUNTIME_ALIAS",
  "12": "SLOT_CONTENT_ID",
  "13": "KEYFRAME_TRACK_ID",
  "14": "KEYFRAME_TRACK_PARAMETER_DATA",
  "15": "EASING",
  "16": "TIMING",
  "17": "VECTOR",
  "18": "COLOR_ARRAY",
  "19": "LINE",
  "20": "CIRCLE",
  "21": "ROTATION_3D",
  "22": "CIRCLE_POINT",
  "23": "GRADIENT",
  "24": "COLOR_POINT",
  "25": "GRADIENT_PAINT",
  "BOOLEAN": 0,
  "FLOAT": 1,
  "STRING": 2,
  "COLOR": 4,
  "MAP": 5,
  "SYMBOL_ID": 6,
  "FONT_STYLE": 7,
  "TEXT_DATA": 8,
  "IMAGE": 9,
  "LINK": 10,
  "JS_RUNTIME_ALIAS": 11,
  "SLOT_CONTENT_ID": 12,
  "KEYFRAME_TRACK_ID": 13,
  "KEYFRAME_TRACK_PARAMETER_DATA": 14,
  "EASING": 15,
  "TIMING": 16,
  "VECTOR": 17,
  "COLOR_ARRAY": 18,
  "LINE": 19,
  "CIRCLE": 20,
  "ROTATION_3D": 21,
  "CIRCLE_POINT": 22,
  "GRADIENT": 23,
  "COLOR_POINT": 24,
  "GRADIENT_PAINT": 25
};

exports["decodeVariableAnyValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["boolValue"] = !!bb.readByte();
        break;

      case 2:
        result["textValue"] = bb.readString();
        break;

      case 3:
        result["floatValue"] = bb.readVarFloat();
        break;

      case 4:
        result["alias"] = this["decodeVariableID"](bb);
        break;

      case 5:
        result["colorValue"] = this["decodeColor"](bb);
        break;

      case 6:
        result["expressionValue"] = this["decodeExpression"](bb);
        break;

      case 7:
        result["mapValue"] = this["decodeVariableMap"](bb);
        break;

      case 8:
        result["symbolIdValue"] = this["decodeSymbolId"](bb);
        break;

      case 9:
        result["fontStyleValue"] = this["decodeVariableFontStyle"](bb);
        break;

      case 10:
        result["textDataValue"] = this["decodeTextData"](bb);
        break;

      case 11:
        result["nodeFieldAliasValue"] = this["decodeNodeFieldAlias"](bb);
        break;

      case 12:
        result["cmsAliasValue"] = this["decodeCMSAlias"](bb);
        break;

      case 13:
        result["propRefValue"] = this["decodePropRefValue"](bb);
        break;

      case 14:
        result["imageValue"] = this["decodeImageParameterValue"](bb);
        break;

      case 15:
        result["managedStringAliasValue"] = this["decodeManagedStringAlias"](bb);
        break;

      case 16:
        result["linkValue"] = this["decodeHyperlink"](bb);
        break;

      case 17:
        result["jsRuntimeAliasValue"] = this["decodeJsRuntimeAlias"](bb);
        break;

      case 18:
        result["slotContentIdValue"] = this["decodeSlotContentId"](bb);
        break;

      case 19:
        result["keyframeTrackIdValue"] = this["decodeKeyframeTrackId"](bb);
        break;

      case 20:
        result["keyframeTrackParameterValue"] = this["decodeKeyframeTrackParameterValue"](bb);
        break;

      case 21:
        result["easingValue"] = this["decodeEasingData"](bb);
        break;

      case 22:
        result["vectorValue"] = this["decodeVector"](bb);
        break;

      case 23:
        result["colorArrayValue"] = this["decodeColorArray"](bb);
        break;

      case 24:
        result["lineValue"] = this["decodeLine"](bb);
        break;

      case 25:
        result["circleValue"] = this["decodeCircle"](bb);
        break;

      case 26:
        result["rotation3DValue"] = this["decodeRotation3D"](bb);
        break;

      case 27:
        result["circlePointValue"] = this["decodeCirclePoint"](bb);
        break;

      case 28:
        result["gradientValue"] = this["decodeGradient"](bb);
        break;

      case 29:
        result["colorPointValue"] = this["decodeColorPoint"](bb);
        break;

      case 30:
        result["gradientParameterValue"] = this["decodeGradientParameterValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableAnyValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["boolValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["textValue"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["floatValue"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["alias"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableID"](value, bb);
  }

  var value = message["colorValue"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeColor"](value, bb);
  }

  var value = message["expressionValue"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeExpression"](value, bb);
  }

  var value = message["mapValue"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeVariableMap"](value, bb);
  }

  var value = message["symbolIdValue"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeSymbolId"](value, bb);
  }

  var value = message["fontStyleValue"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeVariableFontStyle"](value, bb);
  }

  var value = message["textDataValue"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeTextData"](value, bb);
  }

  var value = message["nodeFieldAliasValue"];
  if (value != null) {
    bb.writeVarUint(11);
    this["encodeNodeFieldAlias"](value, bb);
  }

  var value = message["cmsAliasValue"];
  if (value != null) {
    bb.writeVarUint(12);
    this["encodeCMSAlias"](value, bb);
  }

  var value = message["propRefValue"];
  if (value != null) {
    bb.writeVarUint(13);
    this["encodePropRefValue"](value, bb);
  }

  var value = message["imageValue"];
  if (value != null) {
    bb.writeVarUint(14);
    this["encodeImageParameterValue"](value, bb);
  }

  var value = message["managedStringAliasValue"];
  if (value != null) {
    bb.writeVarUint(15);
    this["encodeManagedStringAlias"](value, bb);
  }

  var value = message["linkValue"];
  if (value != null) {
    bb.writeVarUint(16);
    this["encodeHyperlink"](value, bb);
  }

  var value = message["jsRuntimeAliasValue"];
  if (value != null) {
    bb.writeVarUint(17);
    this["encodeJsRuntimeAlias"](value, bb);
  }

  var value = message["slotContentIdValue"];
  if (value != null) {
    bb.writeVarUint(18);
    this["encodeSlotContentId"](value, bb);
  }

  var value = message["keyframeTrackIdValue"];
  if (value != null) {
    bb.writeVarUint(19);
    this["encodeKeyframeTrackId"](value, bb);
  }

  var value = message["keyframeTrackParameterValue"];
  if (value != null) {
    bb.writeVarUint(20);
    this["encodeKeyframeTrackParameterValue"](value, bb);
  }

  var value = message["easingValue"];
  if (value != null) {
    bb.writeVarUint(21);
    this["encodeEasingData"](value, bb);
  }

  var value = message["vectorValue"];
  if (value != null) {
    bb.writeVarUint(22);
    this["encodeVector"](value, bb);
  }

  var value = message["colorArrayValue"];
  if (value != null) {
    bb.writeVarUint(23);
    this["encodeColorArray"](value, bb);
  }

  var value = message["lineValue"];
  if (value != null) {
    bb.writeVarUint(24);
    this["encodeLine"](value, bb);
  }

  var value = message["circleValue"];
  if (value != null) {
    bb.writeVarUint(25);
    this["encodeCircle"](value, bb);
  }

  var value = message["rotation3DValue"];
  if (value != null) {
    bb.writeVarUint(26);
    this["encodeRotation3D"](value, bb);
  }

  var value = message["circlePointValue"];
  if (value != null) {
    bb.writeVarUint(27);
    this["encodeCirclePoint"](value, bb);
  }

  var value = message["gradientValue"];
  if (value != null) {
    bb.writeVarUint(28);
    this["encodeGradient"](value, bb);
  }

  var value = message["colorPointValue"];
  if (value != null) {
    bb.writeVarUint(29);
    this["encodeColorPoint"](value, bb);
  }

  var value = message["gradientParameterValue"];
  if (value != null) {
    bb.writeVarUint(30);
    this["encodeGradientParameterValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ExpressionFunction"] = {
  "0": "ADDITION",
  "1": "SUBTRACTION",
  "2": "RESOLVE_VARIANT",
  "3": "MULTIPLY",
  "4": "DIVIDE",
  "5": "EQUALS",
  "6": "NOT_EQUAL",
  "7": "LESS_THAN",
  "8": "LESS_THAN_OR_EQUAL",
  "9": "GREATER_THAN",
  "10": "GREATER_THAN_OR_EQUAL",
  "11": "AND",
  "12": "OR",
  "13": "NOT",
  "14": "STRINGIFY",
  "15": "TERNARY",
  "16": "VAR_MODE_LOOKUP",
  "17": "NEGATE",
  "18": "IS_TRUTHY",
  "19": "KEYFRAME",
  "20": "COMPOSE_COLOR",
  "ADDITION": 0,
  "SUBTRACTION": 1,
  "RESOLVE_VARIANT": 2,
  "MULTIPLY": 3,
  "DIVIDE": 4,
  "EQUALS": 5,
  "NOT_EQUAL": 6,
  "LESS_THAN": 7,
  "LESS_THAN_OR_EQUAL": 8,
  "GREATER_THAN": 9,
  "GREATER_THAN_OR_EQUAL": 10,
  "AND": 11,
  "OR": 12,
  "NOT": 13,
  "STRINGIFY": 14,
  "TERNARY": 15,
  "VAR_MODE_LOOKUP": 16,
  "NEGATE": 17,
  "IS_TRUTHY": 18,
  "KEYFRAME": 19,
  "COMPOSE_COLOR": 20
};

exports["decodeExpression"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["expressionFunction"] = this["ExpressionFunction"][bb.readVarUint()];
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["expressionArguments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeExpression"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["expressionFunction"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ExpressionFunction"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ExpressionFunction\""); bb.writeVarUint(encoded);
  }

  var value = message["expressionArguments"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableMapValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["value"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["guidKey"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableMapValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["guidKey"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["values"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableMapValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["values"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableMapValue"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeColorArray"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["colors"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeColorArray"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["colors"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableFontStyle"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["asString"] = this["decodeVariableData"](bb);
        break;

      case 2:
        result["asFloat"] = this["decodeVariableData"](bb);
        break;

      case 3:
        result["asVariations"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableFontStyle"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["asString"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableData"](value, bb);
  }

  var value = message["asFloat"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }

  var value = message["asVariations"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImageParameterValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["image"] = this["decodeImage"](bb);
        break;

      case 2:
        result["imageThumbnail"] = this["decodeImage"](bb);
        break;

      case 6:
        result["animatedImage"] = this["decodeImage"](bb);
        break;

      case 3:
        result["altText"] = bb.readString();
        break;

      case 4:
        result["originalImageHeight"] = bb.readVarUint();
        break;

      case 5:
        result["originalImageWidth"] = bb.readVarUint();
        break;

      case 7:
        result["animationFrame"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImageParameterValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["image"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeImage"](value, bb);
  }

  var value = message["imageThumbnail"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeImage"](value, bb);
  }

  var value = message["animatedImage"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeImage"](value, bb);
  }

  var value = message["altText"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["originalImageHeight"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarUint(value);
  }

  var value = message["originalImageWidth"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["animationFrame"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeThumbnailInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["nodeID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["thumbnailVersion"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeThumbnailInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["nodeID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["thumbnailVersion"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAiCanvasPrompt"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["userPrompt"] = bb.readString();
        break;

      case 2:
        result["authorId"] = bb.readString();
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["parentNodeIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAiCanvasPrompt"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["userPrompt"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["authorId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["parentNodeIds"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeFieldAlias"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stablePathToNode"] = this["decodeGUIDPath"](bb);
        break;

      case 2:
        result["nodeField"] = this["NodeFieldAliasType"][bb.readVarUint()];
        break;

      case 3:
        result["indexOrKey"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeFieldAlias"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stablePathToNode"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUIDPath"](value, bb);
  }

  var value = message["nodeField"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NodeFieldAliasType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodeFieldAliasType\""); bb.writeVarUint(encoded);
  }

  var value = message["indexOrKey"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["NodeFieldAliasType"] = {
  "0": "MISSING",
  "1": "COMPONENT_PROP_ASSIGNMENTS",
  "MISSING": 0,
  "COMPONENT_PROP_ASSIGNMENTS": 1
};

exports["decodeCMSAlias"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["collectionId"] = bb.readString();
        break;

      case 2:
        result["itemId"] = bb.readString();
        break;

      case 3:
        result["fieldId"] = bb.readString();
        break;

      case 4:
        result["type"] = this["VariableDataType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCMSAlias"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["collectionId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["itemId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["fieldId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["VariableDataType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableDataType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeJsRuntimeAlias"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["lookupKey"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeJsRuntimeAlias"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["lookupKey"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePropRefValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["defId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePropRefValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["defId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringPlaceholderMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["value"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringPlaceholderMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSlotContentId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlotContentId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeManagedStringAlias"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["managedStringId"] = this["decodeManagedStringId"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["placeholderValues"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeManagedStringPlaceholderMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManagedStringAlias"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["managedStringId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeManagedStringId"](value, bb);
  }

  var value = message["placeholderValues"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeManagedStringPlaceholderMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeKeyframeTrackId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeTrackId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnimationPresetId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnimationPresetId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeToolId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeToolId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCustomEffectId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["assetRef"] = this["decodeAssetRef"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCustomEffectId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["assetRef"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAssetRef"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTRSSTransform2D"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["translation"] = this["decodeVector"](bb);
        break;

      case 2:
        result["rotation"] = bb.readVarFloat();
        break;

      case 3:
        result["scale"] = this["decodeVector"](bb);
        break;

      case 4:
        result["shearX"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTRSSTransform2D"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["translation"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }

  var value = message["rotation"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["scale"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVector"](value, bb);
  }

  var value = message["shearX"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = this["decodeVariableAnyValue"](bb);
        break;

      case 2:
        result["dataType"] = this["VariableDataType"][bb.readVarUint()];
        break;

      case 3:
        result["resolvedDataType"] = this["VariableResolvedDataType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableAnyValue"](value, bb);
  }

  var value = message["dataType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["VariableDataType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableDataType\""); bb.writeVarUint(encoded);
  }

  var value = message["resolvedDataType"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["VariableResolvedDataType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableResolvedDataType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableSetMode"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["name"] = bb.readString();
        break;

      case 3:
        result["sortPosition"] = bb.readString();
        break;

      case 4:
        result["parentVariableSetId"] = this["decodeVariableSetID"](bb);
        break;

      case 5:
        result["parentModeId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableSetMode"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["sortPosition"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["parentVariableSetId"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableSetID"](value, bb);
  }

  var value = message["parentModeId"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableDataValues"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeVariableDataValuesEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableDataValues"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeVariableDataValuesEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableDataValuesEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["modeID"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["variableData"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableDataValuesEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["modeID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["variableData"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["VariableScope"] = {
  "0": "ALL_SCOPES",
  "1": "TEXT_CONTENT",
  "2": "CORNER_RADIUS",
  "3": "WIDTH_HEIGHT",
  "4": "GAP",
  "5": "ALL_FILLS",
  "6": "FRAME_FILL",
  "7": "SHAPE_FILL",
  "8": "TEXT_FILL",
  "9": "STROKE",
  "10": "STROKE_FLOAT",
  "11": "EFFECT_FLOAT",
  "12": "EFFECT_COLOR",
  "13": "OPACITY",
  "14": "FONT_STYLE",
  "15": "FONT_FAMILY",
  "16": "FONT_SIZE",
  "17": "LINE_HEIGHT",
  "18": "LETTER_SPACING",
  "19": "PARAGRAPH_SPACING",
  "20": "PARAGRAPH_INDENT",
  "21": "FONT_VARIATIONS",
  "22": "TRANSFORM",
  "23": "COLOR_OPACITY",
  "ALL_SCOPES": 0,
  "TEXT_CONTENT": 1,
  "CORNER_RADIUS": 2,
  "WIDTH_HEIGHT": 3,
  "GAP": 4,
  "ALL_FILLS": 5,
  "FRAME_FILL": 6,
  "SHAPE_FILL": 7,
  "TEXT_FILL": 8,
  "STROKE": 9,
  "STROKE_FLOAT": 10,
  "EFFECT_FLOAT": 11,
  "EFFECT_COLOR": 12,
  "OPACITY": 13,
  "FONT_STYLE": 14,
  "FONT_FAMILY": 15,
  "FONT_SIZE": 16,
  "LINE_HEIGHT": 17,
  "LETTER_SPACING": 18,
  "PARAGRAPH_SPACING": 19,
  "PARAGRAPH_INDENT": 20,
  "FONT_VARIATIONS": 21,
  "TRANSFORM": 22,
  "COLOR_OPACITY": 23
};

exports["decodeKeyframeAnyValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["floatValue"] = bb.readVarFloat();
        break;

      case 2:
        result["colorValue"] = this["decodeColor"](bb);
        break;

      case 3:
        result["textDataValue"] = this["decodeTextData"](bb);
        break;

      case 4:
        result["vectorValue"] = this["decodeVector"](bb);
        break;

      case 5:
        result["boolValue"] = !!bb.readByte();
        break;

      case 6:
        result["circleValue"] = this["decodeCircle"](bb);
        break;

      case 7:
        result["lineValue"] = this["decodeLine"](bb);
        break;

      case 8:
        result["circlePointValue"] = this["decodeCirclePoint"](bb);
        break;

      case 9:
        result["colorPointValue"] = this["decodeColorPoint"](bb);
        break;

      case 10:
        result["gradientParameterValue"] = this["decodeGradientParameterValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeAnyValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["floatValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["colorValue"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeColor"](value, bb);
  }

  var value = message["textDataValue"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeTextData"](value, bb);
  }

  var value = message["vectorValue"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVector"](value, bb);
  }

  var value = message["boolValue"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }

  var value = message["circleValue"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeCircle"](value, bb);
  }

  var value = message["lineValue"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeLine"](value, bb);
  }

  var value = message["circlePointValue"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeCirclePoint"](value, bb);
  }

  var value = message["colorPointValue"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeColorPoint"](value, bb);
  }

  var value = message["gradientParameterValue"];
  if (value != null) {
    bb.writeVarUint(10);
    this["encodeGradientParameterValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["KeyframeValueType"] = {
  "0": "FLOAT",
  "1": "INVALID",
  "2": "COLOR",
  "3": "TEXT_DATA",
  "4": "VECTOR",
  "5": "BOOL",
  "6": "CIRCLE",
  "7": "LINE",
  "8": "CIRCLE_POINT",
  "9": "COLOR_POINT",
  "10": "GRADIENT_PAINT",
  "FLOAT": 0,
  "INVALID": 1,
  "COLOR": 2,
  "TEXT_DATA": 3,
  "VECTOR": 4,
  "BOOL": 5,
  "CIRCLE": 6,
  "LINE": 7,
  "CIRCLE_POINT": 8,
  "COLOR_POINT": 9,
  "GRADIENT_PAINT": 10
};

exports["decodeKeyframeValueData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = this["decodeKeyframeAnyValue"](bb);
        break;

      case 2:
        result["valueType"] = this["KeyframeValueType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeValueData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeKeyframeAnyValue"](value, bb);
  }

  var value = message["valueType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["KeyframeValueType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"KeyframeValueType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["KeyframeTrackParameterType"] = {
  "0": "INVALID",
  "1": "MANUAL",
  "2": "ANIMATION_PRESET",
  "INVALID": 0,
  "MANUAL": 1,
  "ANIMATION_PRESET": 2
};

exports["decodeManualKeyframeTrackParameter"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["keyframeTrackId"] = this["decodeKeyframeTrackId"](bb);
        break;

      case 2:
        result["timelineDefId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeManualKeyframeTrackParameter"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["keyframeTrackId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeKeyframeTrackId"](value, bb);
  }

  var value = message["timelineDefId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnimationPresetKeyframeTrackParameter"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["animationPresetId"] = this["decodeAnimationPresetId"](bb);
        break;

      case 2:
        result["keyframeTrackId"] = this["decodeKeyframeTrackId"](bb);
        break;

      case 3:
        result["timelineDefId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnimationPresetKeyframeTrackParameter"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["animationPresetId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeAnimationPresetId"](value, bb);
  }

  var value = message["keyframeTrackId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeKeyframeTrackId"](value, bb);
  }

  var value = message["timelineDefId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeKeyframeTrackAnyParameter"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["manual"] = this["decodeManualKeyframeTrackParameter"](bb);
        break;

      case 2:
        result["animationPreset"] = this["decodeAnimationPresetKeyframeTrackParameter"](bb);
        break;

      case 3:
        result["animationStyleBindingId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeTrackAnyParameter"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["manual"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeManualKeyframeTrackParameter"](value, bb);
  }

  var value = message["animationPreset"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAnimationPresetKeyframeTrackParameter"](value, bb);
  }

  var value = message["animationStyleBindingId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeKeyframeTrackParameter"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = this["decodeKeyframeTrackAnyParameter"](bb);
        break;

      case 2:
        result["type"] = this["KeyframeTrackParameterType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeTrackParameter"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeKeyframeTrackAnyParameter"](value, bb);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["KeyframeTrackParameterType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"KeyframeTrackParameterType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeKeyframeTrackParameterValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["parameters"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeKeyframeTrackParameter"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeKeyframeTrackParameterValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["parameters"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeKeyframeTrackParameter"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnimationPresets"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["presets"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAnimationPresetData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnimationPresets"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["presets"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAnimationPresetData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAnimationPresetData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["animationPresetId"] = this["decodeAnimationPresetId"](bb);
        break;

      case 2:
        result["timelineDefId"] = this["decodeGUID"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAnimationPresetData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["animationPresetId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeAnimationPresetId"](value, bb);
  }

  var value = message["timelineDefId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStyleAnimation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["animationPresetId"] = this["decodeAnimationPresetId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStyleAnimation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["animationPresetId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeAnimationPresetId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeStyleIdForAnimation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["timelineDefId"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["animationStyleId"] = this["decodeStyleId"](bb);
        break;

      case 4:
        result["timelineOffset"] = bb.readVarInt64();
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["generatedAnimationPresets"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGeneratedAnimationPreset"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeStyleIdForAnimation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["timelineDefId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["animationStyleId"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeStyleId"](value, bb);
  }

  var value = message["timelineOffset"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt64(value);
  }

  var value = message["generatedAnimationPresets"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGeneratedAnimationPreset"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeGeneratedAnimationPreset"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["animationPresetId"] = this["decodeAnimationPresetId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeGeneratedAnimationPreset"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["animationPresetId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeAnimationPresetId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTools"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["tools"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeToolData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTools"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tools"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeToolData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeToolData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["toolId"] = this["decodeToolId"](bb);
        break;

      case 2:
        result["backingCodeComponentId"] = this["decodeCodeComponentId"](bb);
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["componentPropAssignments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropAssignment"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeToolData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["toolId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeToolId"](value, bb);
  }

  var value = message["backingCodeComponentId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeCodeComponentId"](value, bb);
  }

  var value = message["componentPropAssignments"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropAssignment"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSpringParams"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["stiffness"] = bb.readVarFloat();
        break;

      case 2:
        result["damping"] = bb.readVarFloat();
        break;

      case 3:
        result["mass"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSpringParams"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stiffness"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["damping"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["mass"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionEasingAnyValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["springEasing"] = this["decodeSpringParams"](bb);
        break;

      case 2:
        result["bezierEasing"] = this["decodeBezierHandles"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionEasingAnyValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["springEasing"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeSpringParams"](value, bb);
  }

  var value = message["bezierEasing"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeBezierHandles"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEasingData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["easingType"] = this["EasingType"][bb.readVarUint()];
        break;

      case 2:
        result["easingValue"] = this["decodeTransitionEasingAnyValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEasingData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["easingType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["EasingType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EasingType\""); bb.writeVarUint(encoded);
  }

  var value = message["easingValue"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTransitionEasingAnyValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionOverride"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["duration"] = bb.readVarFloat();
        break;

      case 3:
        result["durationVar"] = this["decodeVariableData"](bb);
        break;

      case 4:
        result["delay"] = bb.readVarFloat();
        break;

      case 5:
        result["delayVar"] = this["decodeVariableData"](bb);
        break;

      case 6:
        result["easing"] = this["decodeEasingData"](bb);
        break;

      case 7:
        result["easingVar"] = this["decodeVariableData"](bb);
        break;

      case 8:
        result["createdAtMs"] = bb.readVarUint64();
        break;

      case 9:
        var length = bb.readVarUint();
        var values = result["interactionIDs"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 10:
        result["disabled"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionOverride"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["duration"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["durationVar"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVariableData"](value, bb);
  }

  var value = message["delay"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["delayVar"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVariableData"](value, bb);
  }

  var value = message["easing"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeEasingData"](value, bb);
  }

  var value = message["easingVar"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeVariableData"](value, bb);
  }

  var value = message["createdAtMs"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarUint64(value);
  }

  var value = message["interactionIDs"];
  if (value != null) {
    bb.writeVarUint(9);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["disabled"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionOverrideData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["all"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTransitionOverride"](bb);
        break;

      case 2:
        result["propertyOverrides"] = this["decodeTransitionOverridePropMap"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionOverrideData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["all"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTransitionOverride"](value, bb);
    }
  }

  var value = message["propertyOverrides"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeTransitionOverridePropMap"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["TransitionOverrideProp"] = {
  "0": "ALL",
  "1": "OPACITY",
  "2": "TRANSLATION",
  "3": "ROTATION",
  "4": "SCALE",
  "ALL": 0,
  "OPACITY": 1,
  "TRANSLATION": 2,
  "ROTATION": 3,
  "SCALE": 4
};
exports["TransitionOverrideBindingTopLevelField"] = {
  "0": "MISSING",
  "1": "PARAMETER_CONSUMPTION_MAP",
  "2": "EFFECT_DATA",
  "3": "FILL_PAINT_DATA",
  "4": "STROKE_PAINT_DATA",
  "MISSING": 0,
  "PARAMETER_CONSUMPTION_MAP": 1,
  "EFFECT_DATA": 2,
  "FILL_PAINT_DATA": 3,
  "STROKE_PAINT_DATA": 4
};

exports["decodeTransitionOverrideBindingLocation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["topLevelField"] = this["TransitionOverrideBindingTopLevelField"][bb.readVarUint()];
        break;

      case 2:
        result["parameterFieldValue"] = bb.readVarInt();
        break;

      case 3:
        result["index"] = bb.readVarInt();
        break;

      case 4:
        result["effectParametrizedFieldValue"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionOverrideBindingLocation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["topLevelField"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransitionOverrideBindingTopLevelField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionOverrideBindingTopLevelField\""); bb.writeVarUint(encoded);
  }

  var value = message["parameterFieldValue"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarInt(value);
  }

  var value = message["index"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarInt(value);
  }

  var value = message["effectParametrizedFieldValue"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["KeyframeBindingEffectParametrizedField"] = {
  "0": "MISSING",
  "1": "OFFSET_X",
  "2": "OFFSET_Y",
  "3": "RADIUS",
  "4": "SPREAD",
  "5": "COLOR",
  "6": "REFRACTION_RADIUS",
  "7": "SPECULAR_ANGLE",
  "8": "SPECULAR_INTENSITY",
  "9": "CHROMATIC_ABERRATION",
  "10": "SPLAY",
  "11": "REFRACTION_INTENSITY",
  "12": "START_RADIUS",
  "13": "START_OFFSET_X",
  "14": "START_OFFSET_Y",
  "15": "END_OFFSET_X",
  "16": "END_OFFSET_Y",
  "17": "NOISE_SIZE_X",
  "18": "NOISE_SIZE_Y",
  "19": "DENSITY",
  "20": "EFFECT_OPACITY",
  "21": "SECONDARY_COLOR",
  "MISSING": 0,
  "OFFSET_X": 1,
  "OFFSET_Y": 2,
  "RADIUS": 3,
  "SPREAD": 4,
  "COLOR": 5,
  "REFRACTION_RADIUS": 6,
  "SPECULAR_ANGLE": 7,
  "SPECULAR_INTENSITY": 8,
  "CHROMATIC_ABERRATION": 9,
  "SPLAY": 10,
  "REFRACTION_INTENSITY": 11,
  "START_RADIUS": 12,
  "START_OFFSET_X": 13,
  "START_OFFSET_Y": 14,
  "END_OFFSET_X": 15,
  "END_OFFSET_Y": 16,
  "NOISE_SIZE_X": 17,
  "NOISE_SIZE_Y": 18,
  "DENSITY": 19,
  "EFFECT_OPACITY": 20,
  "SECONDARY_COLOR": 21
};

exports["decodeNodeContentsKeyframeBindingLocation"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["topLevelField"] = this["TransitionOverrideBindingTopLevelField"][bb.readVarUint()];
        break;

      case 2:
        result["parameterFieldValue"] = this["VariableField"][bb.readVarUint()];
        break;

      case 3:
        result["index"] = bb.readVarInt();
        break;

      case 4:
        result["effectParametrizedFieldValue"] = this["KeyframeBindingEffectParametrizedField"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeContentsKeyframeBindingLocation"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["topLevelField"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransitionOverrideBindingTopLevelField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionOverrideBindingTopLevelField\""); bb.writeVarUint(encoded);
  }

  var value = message["parameterFieldValue"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["VariableField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"VariableField\""); bb.writeVarUint(encoded);
  }

  var value = message["index"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarInt(value);
  }

  var value = message["effectParametrizedFieldValue"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["KeyframeBindingEffectParametrizedField"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"KeyframeBindingEffectParametrizedField\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionOverridePropMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTransitionOverridePropMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionOverridePropMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTransitionOverridePropMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeTransitionOverridePropMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["prop"] = this["TransitionOverrideProp"][bb.readVarUint()];
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["overrides"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeTransitionOverride"](bb);
        break;

      case 3:
        result["bindingLocation"] = this["decodeTransitionOverrideBindingLocation"](bb);
        break;

      case 4:
        result["nodeContentsBindingLocation"] = this["decodeNodeContentsKeyframeBindingLocation"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeTransitionOverridePropMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["prop"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["TransitionOverrideProp"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"TransitionOverrideProp\""); bb.writeVarUint(encoded);
  }

  var value = message["overrides"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeTransitionOverride"](value, bb);
    }
  }

  var value = message["bindingLocation"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeTransitionOverrideBindingLocation"](value, bb);
  }

  var value = message["nodeContentsBindingLocation"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeNodeContentsKeyframeBindingLocation"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CodeSyntaxPlatform"] = {
  "0": "WEB",
  "1": "ANDROID",
  "2": "iOS",
  "WEB": 0,
  "ANDROID": 1,
  "iOS": 2
};

exports["decodeOptionalVector"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["value"] = this["decodeVector"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeOptionalVector"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVector"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["HTMLTag"] = {
  "0": "AUTO",
  "1": "ARTICLE",
  "2": "SECTION",
  "3": "NAV",
  "4": "ASIDE",
  "5": "H1",
  "6": "H2",
  "7": "H3",
  "8": "H4",
  "9": "H5",
  "10": "H6",
  "11": "HGROUP",
  "12": "HEADER",
  "13": "FOOTER",
  "14": "ADDRESS",
  "15": "P",
  "16": "HR",
  "17": "PRE",
  "18": "BLOCKQUOTE",
  "19": "OL",
  "20": "UL",
  "21": "MENU",
  "22": "LI",
  "23": "DL",
  "24": "DT",
  "25": "DD",
  "26": "FIGURE",
  "27": "FIGCAPTION",
  "28": "MAIN",
  "29": "DIV",
  "30": "A",
  "31": "EM",
  "32": "STRONG",
  "33": "SMALL",
  "34": "S",
  "35": "CITE",
  "36": "Q",
  "37": "DFN",
  "38": "ABBR",
  "39": "RUBY",
  "40": "RT",
  "41": "RP",
  "42": "DATA",
  "43": "TIME",
  "44": "CODE",
  "45": "VAR",
  "46": "SAMP",
  "47": "KBD",
  "48": "SUB",
  "49": "SUP",
  "50": "I",
  "51": "B",
  "52": "U",
  "53": "MARK",
  "54": "BDI",
  "55": "BDO",
  "56": "SPAN",
  "57": "BR",
  "58": "WBR",
  "59": "PICTURE",
  "60": "SOURCE",
  "61": "IMG",
  "62": "FORM",
  "63": "LABEL",
  "64": "INPUT",
  "65": "BUTTON",
  "66": "SELECT",
  "67": "DATALIST",
  "68": "OPTGROUP",
  "69": "OPTION",
  "70": "TEXTAREA",
  "71": "OUTPUT",
  "72": "PROGRESS",
  "73": "METER",
  "74": "FIELDSET",
  "75": "LEGEND",
  "76": "VIDEO",
  "AUTO": 0,
  "ARTICLE": 1,
  "SECTION": 2,
  "NAV": 3,
  "ASIDE": 4,
  "H1": 5,
  "H2": 6,
  "H3": 7,
  "H4": 8,
  "H5": 9,
  "H6": 10,
  "HGROUP": 11,
  "HEADER": 12,
  "FOOTER": 13,
  "ADDRESS": 14,
  "P": 15,
  "HR": 16,
  "PRE": 17,
  "BLOCKQUOTE": 18,
  "OL": 19,
  "UL": 20,
  "MENU": 21,
  "LI": 22,
  "DL": 23,
  "DT": 24,
  "DD": 25,
  "FIGURE": 26,
  "FIGCAPTION": 27,
  "MAIN": 28,
  "DIV": 29,
  "A": 30,
  "EM": 31,
  "STRONG": 32,
  "SMALL": 33,
  "S": 34,
  "CITE": 35,
  "Q": 36,
  "DFN": 37,
  "ABBR": 38,
  "RUBY": 39,
  "RT": 40,
  "RP": 41,
  "DATA": 42,
  "TIME": 43,
  "CODE": 44,
  "VAR": 45,
  "SAMP": 46,
  "KBD": 47,
  "SUB": 48,
  "SUP": 49,
  "I": 50,
  "B": 51,
  "U": 52,
  "MARK": 53,
  "BDI": 54,
  "BDO": 55,
  "SPAN": 56,
  "BR": 57,
  "WBR": 58,
  "PICTURE": 59,
  "SOURCE": 60,
  "IMG": 61,
  "FORM": 62,
  "LABEL": 63,
  "INPUT": 64,
  "BUTTON": 65,
  "SELECT": 66,
  "DATALIST": 67,
  "OPTGROUP": 68,
  "OPTION": 69,
  "TEXTAREA": 70,
  "OUTPUT": 71,
  "PROGRESS": 72,
  "METER": 73,
  "FIELDSET": 74,
  "LEGEND": 75,
  "VIDEO": 76
};
exports["ARIARole"] = {
  "0": "AUTO",
  "1": "BUTTON",
  "2": "CHECKBOX",
  "3": "GRIDCELL",
  "4": "LINK",
  "5": "MENUITEM",
  "6": "MENUITEMCHECKBOX",
  "7": "MENUITEMRADIO",
  "8": "OPTION",
  "9": "PROGRESSBAR",
  "10": "RADIO",
  "11": "SCROLLBAR",
  "12": "SEARCHBOX",
  "13": "SEPARATOR",
  "14": "SLIDER",
  "15": "SPINBUTTON",
  "16": "SWITCH",
  "17": "TAB",
  "18": "TABPANEL",
  "19": "TEXTBOX",
  "20": "TREEITEM",
  "21": "COMBOBOX",
  "22": "GRID",
  "23": "LISTBOX",
  "24": "MENU",
  "25": "MENUBAR",
  "26": "RADIOGROUP",
  "27": "TABLIST",
  "28": "TREE",
  "29": "TREEGRID",
  "30": "APPLICATION",
  "31": "ARTICLE",
  "32": "BLOCKQUOTE",
  "33": "CAPTION",
  "34": "CELL",
  "35": "COLUMNHEADER",
  "36": "DEFINITION",
  "37": "DELETION",
  "38": "DIRECTORY",
  "39": "DOCUMENT",
  "40": "EMPHASIS",
  "41": "FEED",
  "42": "FIGURE",
  "43": "GENERIC",
  "44": "GROUP",
  "45": "HEADING",
  "46": "IMG",
  "47": "INSERTION",
  "48": "LIST",
  "49": "LISTITEM",
  "50": "MATH",
  "51": "METER",
  "52": "NONE",
  "53": "NOTE",
  "54": "PARAGRAPH",
  "55": "PRESENTATION",
  "56": "ROW",
  "57": "ROWGROUP",
  "58": "ROWHEADER",
  "59": "STRONG",
  "60": "SUBSCRIPT",
  "61": "SUPERSCRIPT",
  "62": "TABLE",
  "63": "TERM",
  "64": "TIME",
  "65": "TOOLBAR",
  "66": "TOOLTIP",
  "67": "BANNER",
  "68": "COMPLEMENTARY",
  "69": "CONTENTINFO",
  "70": "FORM",
  "71": "MAIN",
  "72": "NAVIGATION",
  "73": "REGION",
  "74": "SEARCH",
  "75": "ALERT",
  "76": "LOG",
  "77": "MARQUEE",
  "78": "STATUS",
  "79": "TIMER",
  "80": "ALERTDIALOG",
  "81": "DIALOG",
  "82": "IMAGE",
  "83": "HEADING_1",
  "84": "HEADING_2",
  "85": "HEADING_3",
  "86": "HEADING_4",
  "87": "HEADING_5",
  "88": "HEADING_6",
  "89": "HEADER",
  "90": "FOOTER",
  "91": "SIDEBAR",
  "92": "SECTION",
  "93": "MAINCONTENT",
  "94": "TABLE_CELL",
  "95": "WIDGET",
  "AUTO": 0,
  "NONE": 52,
  "APPLICATION": 30,
  "BANNER": 67,
  "COMPLEMENTARY": 68,
  "CONTENTINFO": 69,
  "FORM": 70,
  "MAIN": 71,
  "NAVIGATION": 72,
  "REGION": 73,
  "SEARCH": 74,
  "SEPARATOR": 13,
  "ARTICLE": 31,
  "COLUMNHEADER": 35,
  "DEFINITION": 36,
  "DIRECTORY": 38,
  "DOCUMENT": 39,
  "GROUP": 44,
  "HEADING": 45,
  "IMG": 46,
  "LIST": 48,
  "LISTITEM": 49,
  "MATH": 50,
  "NOTE": 53,
  "PRESENTATION": 55,
  "ROW": 56,
  "ROWGROUP": 57,
  "ROWHEADER": 58,
  "TABLE": 62,
  "TOOLBAR": 65,
  "BUTTON": 1,
  "CHECKBOX": 2,
  "GRIDCELL": 3,
  "LINK": 4,
  "MENUITEM": 5,
  "MENUITEMCHECKBOX": 6,
  "MENUITEMRADIO": 7,
  "OPTION": 8,
  "PROGRESSBAR": 9,
  "RADIO": 10,
  "SCROLLBAR": 11,
  "SLIDER": 14,
  "SPINBUTTON": 15,
  "TAB": 17,
  "TABPANEL": 18,
  "TEXTBOX": 19,
  "TREEITEM": 20,
  "COMBOBOX": 21,
  "GRID": 22,
  "LISTBOX": 23,
  "MENU": 24,
  "MENUBAR": 25,
  "RADIOGROUP": 26,
  "TABLIST": 27,
  "TREE": 28,
  "TREEGRID": 29,
  "TOOLTIP": 66,
  "ALERT": 75,
  "LOG": 76,
  "MARQUEE": 77,
  "STATUS": 78,
  "TIMER": 79,
  "ALERTDIALOG": 80,
  "DIALOG": 81,
  "SEARCHBOX": 12,
  "SWITCH": 16,
  "BLOCKQUOTE": 32,
  "CAPTION": 33,
  "CELL": 34,
  "DELETION": 37,
  "EMPHASIS": 40,
  "FEED": 41,
  "FIGURE": 42,
  "GENERIC": 43,
  "INSERTION": 47,
  "METER": 51,
  "PARAGRAPH": 54,
  "STRONG": 59,
  "SUBSCRIPT": 60,
  "SUPERSCRIPT": 61,
  "TERM": 63,
  "TIME": 64,
  "IMAGE": 82,
  "HEADING_1": 83,
  "HEADING_2": 84,
  "HEADING_3": 85,
  "HEADING_4": 86,
  "HEADING_5": 87,
  "HEADING_6": 88,
  "HEADER": 89,
  "FOOTER": 90,
  "SIDEBAR": 91,
  "SECTION": 92,
  "MAINCONTENT": 93,
  "TABLE_CELL": 94,
  "WIDGET": 95
};

exports["decodeMigrationStatus"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["dsdCleanup"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMigrationStatus"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["dsdCleanup"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeFieldMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeFieldMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeFieldMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeFieldMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeFieldMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["field"] = bb.readVarUint();
        break;

      case 3:
        result["lastModifiedSequenceNumber"] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeFieldMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["field"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["lastModifiedSequenceNumber"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ColorProfile"] = {
  "0": "SRGB",
  "1": "DISPLAY_P3",
  "SRGB": 0,
  "DISPLAY_P3": 1
};
exports["DocumentColorProfile"] = {
  "0": "LEGACY",
  "1": "SRGB",
  "2": "DISPLAY_P3",
  "LEGACY": 0,
  "SRGB": 1,
  "DISPLAY_P3": 2
};
exports["ChildReadingDirection"] = {
  "0": "NONE",
  "1": "LEFT_TO_RIGHT",
  "2": "RIGHT_TO_LEFT",
  "NONE": 0,
  "LEFT_TO_RIGHT": 1,
  "RIGHT_TO_LEFT": 2
};

exports["decodeARIAAttributeAnyValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["boolValue"] = !!bb.readByte();
        break;

      case 2:
        result["stringValue"] = bb.readString();
        break;

      case 3:
        result["floatValue"] = bb.readVarFloat();
        break;

      case 4:
        result["intValue"] = bb.readVarInt();
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["stringArrayValue"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeARIAAttributeAnyValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["boolValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeByte(value);
  }

  var value = message["stringValue"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["floatValue"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["intValue"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarInt(value);
  }

  var value = message["stringArrayValue"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ARIAAttributeDataType"] = {
  "0": "BOOLEAN",
  "1": "STRING",
  "2": "FLOAT",
  "3": "INT",
  "4": "STRING_LIST",
  "BOOLEAN": 0,
  "STRING": 1,
  "FLOAT": 2,
  "INT": 3,
  "STRING_LIST": 4
};

exports["decodeARIAAttributeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["ARIAAttributeDataType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = this["decodeARIAAttributeAnyValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeARIAAttributeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ARIAAttributeDataType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ARIAAttributeDataType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeARIAAttributeAnyValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeARIAAttributesMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeARIAAttributesMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeARIAAttributesMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeARIAAttributesMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeARIAAttributesMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["attribute"] = bb.readString();
        break;

      case 2:
        result["value"] = this["decodeARIAAttributeData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeARIAAttributesMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["attribute"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeARIAAttributeData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHandoffStatusMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["guid"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["handoffStatus"] = this["decodeSectionStatusInfo"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHandoffStatusMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["guid"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["handoffStatus"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeSectionStatusInfo"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHandoffStatusMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["entries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeHandoffStatusMapEntry"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHandoffStatusMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["entries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeHandoffStatusMapEntry"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEditScopeInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["editScopeStacks"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEditScopeStack"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["snapshots"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEditScopeSnapshot"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEditScopeInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["editScopeStacks"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEditScopeStack"](value, bb);
    }
  }

  var value = message["snapshots"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEditScopeSnapshot"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEditScopeSnapshot"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["frames"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEditScopeStack"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["nodeChangeFieldNumbers"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEditScopeSnapshot"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["frames"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEditScopeStack"](value, bb);
    }
  }

  var value = message["nodeChangeFieldNumbers"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEditScopeStack"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["stack"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeEditScope"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEditScopeStack"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["stack"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeEditScope"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeEditScope"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["EditScopeType"][bb.readVarUint()];
        break;

      case 2:
        result["label"] = bb.readString();
        break;

      case 3:
        result["editorType"] = this["EditorType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeEditScope"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["EditScopeType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EditScopeType\""); bb.writeVarUint(encoded);
  }

  var value = message["label"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["editorType"];
  if (value != null) {
    bb.writeVarUint(3);
    var encoded = this["EditorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EditorType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["EditScopeType"] = {
  "0": "INVALID",
  "1": "TEST_SETUP",
  "2": "USER",
  "3": "PLUGIN",
  "4": "SYSTEM",
  "5": "REST_API",
  "6": "ONBOARDING",
  "7": "AUTOSAVE",
  "8": "AI",
  "INVALID": 0,
  "TEST_SETUP": 1,
  "USER": 2,
  "PLUGIN": 3,
  "SYSTEM": 4,
  "REST_API": 5,
  "ONBOARDING": 6,
  "AUTOSAVE": 7,
  "AI": 8
};
exports["SectionPresetState"] = {
  "0": "INSERTED",
  "1": "USER_EDITED",
  "INSERTED": 0,
  "USER_EDITED": 1
};
exports["EmojiImageSet"] = {
  "0": "APPLE",
  "1": "NOTO",
  "APPLE": 0,
  "NOTO": 1
};
exports["SelectionRegionFocusType"] = {
  "0": "NONE",
  "1": "PRIMARY",
  "2": "SECONDARY",
  "NONE": 0,
  "PRIMARY": 1,
  "SECONDARY": 2
};

exports["decodeSectionPresetInfo"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["shelfId"] = bb.readVarUint64();
        break;

      case 2:
        result["templateId"] = bb.readVarUint64();
        break;

      case 3:
        result["templateName"] = bb.readString();
        break;

      case 4:
        result["state"] = this["SectionPresetState"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSectionPresetInfo"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["shelfId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint64(value);
  }

  var value = message["templateId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint64(value);
  }

  var value = message["templateName"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(4);
    var encoded = this["SectionPresetState"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SectionPresetState\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeClipboardTextRange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["start"] = bb.readVarInt();
        break;

      case 2:
        result["end"] = bb.readVarInt();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeClipboardTextRange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["start"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarInt(value);
  }

  var value = message["end"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarInt(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeClipboardSelectionRegion"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["parent"] = this["decodeGUID"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["nodes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUID"](bb);
        break;

      case 3:
        result["enclosingFrameOffset"] = this["decodeVector"](bb);
        break;

      case 4:
        result["pasteIsPartiallyOutsideEnclosingFrame"] = !!bb.readByte();
        break;

      case 5:
        result["focusType"] = this["SelectionRegionFocusType"][bb.readVarUint()];
        break;

      case 6:
        result["textRange"] = this["decodeClipboardTextRange"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeClipboardSelectionRegion"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["parent"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["nodes"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUID"](value, bb);
    }
  }

  var value = message["enclosingFrameOffset"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeVector"](value, bb);
  }

  var value = message["pasteIsPartiallyOutsideEnclosingFrame"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["focusType"];
  if (value != null) {
    bb.writeVarUint(5);
    var encoded = this["SelectionRegionFocusType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"SelectionRegionFocusType\""); bb.writeVarUint(encoded);
  }

  var value = message["textRange"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeClipboardTextRange"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["FirstDraftKitType"] = {
  "0": "LOCAL",
  "1": "LIBRARY",
  "2": "NONE",
  "LOCAL": 0,
  "LIBRARY": 1,
  "NONE": 2
};

exports["decodeFirstDraftKit"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["key"] = bb.readString();
        break;

      case 2:
        result["type"] = this["FirstDraftKitType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFirstDraftKit"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["key"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["FirstDraftKitType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FirstDraftKitType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFirstDraftData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["generationId"] = bb.readString();
        break;

      case 2:
        result["kit"] = this["decodeFirstDraftKit"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFirstDraftData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["generationId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["kit"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeFirstDraftKit"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["FirstDraftKitElementType"] = {
  "0": "NONE",
  "1": "BUILDING_BLOCK",
  "2": "GROUPED_COMPONENT",
  "NONE": 0,
  "BUILDING_BLOCK": 1,
  "GROUPED_COMPONENT": 2
};

exports["decodeFirstDraftKitElementData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["FirstDraftKitElementType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFirstDraftKitElementData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["FirstDraftKitElementType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"FirstDraftKitElementType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["PlatformShapeProperty"] = {
  "0": "FILL",
  "1": "STROKE",
  "2": "TEXT",
  "3": "STROKE_COLOR",
  "FILL": 0,
  "STROKE": 1,
  "TEXT": 2,
  "STROKE_COLOR": 3
};
exports["PlatformShapeBehaviorType"] = {
  "0": "SHAPE",
  "1": "CONTAINER",
  "2": "ADVANCED_CONTAINER",
  "SHAPE": 0,
  "CONTAINER": 1,
  "ADVANCED_CONTAINER": 2
};

exports["decodePlatformShapePropertyMapEntry"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["property"] = this["PlatformShapeProperty"][bb.readVarUint()];
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["nodePaths"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeGUIDPath"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePlatformShapePropertyMapEntry"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["property"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["PlatformShapeProperty"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlatformShapeProperty\""); bb.writeVarUint(encoded);
  }

  var value = message["nodePaths"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeGUIDPath"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePlatformShapeDefinition"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["propertyMapEntries"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodePlatformShapePropertyMapEntry"](bb);
        break;

      case 2:
        result["behaviorType"] = this["PlatformShapeBehaviorType"][bb.readVarUint()];
        break;

      case 3:
        result["thumbnailNode"] = this["decodeGUIDPath"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePlatformShapeDefinition"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["propertyMapEntries"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodePlatformShapePropertyMapEntry"](value, bb);
    }
  }

  var value = message["behaviorType"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["PlatformShapeBehaviorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"PlatformShapeBehaviorType\""); bb.writeVarUint(encoded);
  }

  var value = message["thumbnailNode"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUIDPath"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeBehaviors"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["link"] = this["decodeLinkBehavior"](bb);
        break;

      case 2:
        result["appear"] = this["decodeAppearBehavior"](bb);
        break;

      case 3:
        result["hover"] = this["decodeHoverBehavior"](bb);
        break;

      case 4:
        result["press"] = this["decodePressBehavior"](bb);
        break;

      case 5:
        result["focus"] = this["decodeFocusBehavior"](bb);
        break;

      case 6:
        result["scrollParallax"] = this["decodeScrollParallaxBehavior"](bb);
        break;

      case 7:
        result["scrollTransform"] = this["decodeScrollTransformBehavior"](bb);
        break;

      case 8:
        result["cursor"] = this["decodeCursorBehavior"](bb);
        break;

      case 9:
        result["marquee"] = this["decodeMarqueeBehavior"](bb);
        break;

      case 10:
        var length = bb.readVarUint();
        var values = result["code"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCodeBehavior"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeBehaviors"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["link"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeLinkBehavior"](value, bb);
  }

  var value = message["appear"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAppearBehavior"](value, bb);
  }

  var value = message["hover"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeHoverBehavior"](value, bb);
  }

  var value = message["press"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodePressBehavior"](value, bb);
  }

  var value = message["focus"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeFocusBehavior"](value, bb);
  }

  var value = message["scrollParallax"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeScrollParallaxBehavior"](value, bb);
  }

  var value = message["scrollTransform"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeScrollTransformBehavior"](value, bb);
  }

  var value = message["cursor"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeCursorBehavior"](value, bb);
  }

  var value = message["marquee"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeMarqueeBehavior"](value, bb);
  }

  var value = message["code"];
  if (value != null) {
    bb.writeVarUint(10);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCodeBehavior"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeBehaviorTransition"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["easingType"] = this["EasingType"][bb.readVarUint()];
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["easingFunction"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readVarFloat();
        break;

      case 3:
        result["transitionDuration"] = bb.readVarFloat();
        break;

      case 4:
        result["delay"] = bb.readVarFloat();
        break;

      case 5:
        result["transitionDurationVar"] = this["decodeVariableData"](bb);
        break;

      case 6:
        result["delayVar"] = this["decodeVariableData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBehaviorTransition"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["easingType"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["EasingType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"EasingType\""); bb.writeVarUint(encoded);
  }

  var value = message["easingFunction"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarFloat(value);
    }
  }

  var value = message["transitionDuration"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["delay"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }

  var value = message["transitionDurationVar"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVariableData"](value, bb);
  }

  var value = message["delayVar"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeVariableData"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AppearBehaviorTrigger"] = {
  "1": "PAGE_LOAD",
  "2": "THIS_LAYER_IN_VIEW",
  "3": "OTHER_LAYER_IN_VIEW",
  "4": "SCROLL_DIRECTION",
  "PAGE_LOAD": 1,
  "THIS_LAYER_IN_VIEW": 2,
  "OTHER_LAYER_IN_VIEW": 3,
  "SCROLL_DIRECTION": 4
};
exports["RelativeDirection"] = {
  "1": "UP",
  "2": "DOWN",
  "3": "LEFT",
  "4": "RIGHT",
  "UP": 1,
  "DOWN": 2,
  "LEFT": 3,
  "RIGHT": 4
};

exports["decodeAppearBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["trigger"] = this["AppearBehaviorTrigger"][bb.readVarUint()];
        break;

      case 2:
        result["direction"] = this["RelativeDirection"][bb.readVarUint()];
        break;

      case 3:
        result["otherLayer"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["enterTransition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 5:
        result["enterState"] = this["decodeNodeChange"](bb);
        break;

      case 6:
        result["exitTransition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 7:
        result["exitState"] = this["decodeNodeChange"](bb);
        break;

      case 8:
        result["playsOnce"] = !!bb.readByte();
        break;

      case 9:
        result["playsOnceVar"] = this["decodeVariableData"](bb);
        break;

      case 10:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAppearBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["trigger"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["AppearBehaviorTrigger"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AppearBehaviorTrigger\""); bb.writeVarUint(encoded);
  }

  var value = message["direction"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["RelativeDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RelativeDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["otherLayer"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["enterTransition"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["enterState"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["exitTransition"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["exitState"];
  if (value != null) {
    bb.writeVarUint(7);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["playsOnce"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeByte(value);
  }

  var value = message["playsOnceVar"];
  if (value != null) {
    bb.writeVarUint(9);
    this["encodeVariableData"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(10);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeHoverBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["transition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 2:
        result["state"] = this["decodeNodeChange"](bb);
        break;

      case 3:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeHoverBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["transition"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodePressBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["transition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 2:
        result["state"] = this["decodeNodeChange"](bb);
        break;

      case 3:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodePressBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["transition"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFocusBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["transition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 2:
        result["state"] = this["decodeNodeChange"](bb);
        break;

      case 3:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFocusBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["transition"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["state"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeScrollParallaxBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["axis"] = this["ScrollDirection"][bb.readVarUint()];
        break;

      case 2:
        result["speed"] = bb.readVarFloat();
        break;

      case 3:
        result["relativeToPage"] = !!bb.readByte();
        break;

      case 4:
        result["speedVar"] = this["decodeVariableData"](bb);
        break;

      case 5:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeScrollParallaxBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["axis"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ScrollDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ScrollDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["speed"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["relativeToPage"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["speedVar"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["ScrollTransformBehaviorTrigger"] = {
  "1": "PAGE_HEIGHT",
  "2": "THIS_LAYER_IN_VIEW",
  "3": "OTHER_LAYER_IN_VIEW",
  "PAGE_HEIGHT": 1,
  "THIS_LAYER_IN_VIEW": 2,
  "OTHER_LAYER_IN_VIEW": 3
};

exports["decodeScrollTransformBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["trigger"] = this["ScrollTransformBehaviorTrigger"][bb.readVarUint()];
        break;

      case 2:
        result["otherLayer"] = this["decodeGUID"](bb);
        break;

      case 3:
        result["transition"] = this["decodeBehaviorTransition"](bb);
        break;

      case 4:
        result["fromState"] = this["decodeNodeChange"](bb);
        break;

      case 5:
        result["toState"] = this["decodeNodeChange"](bb);
        break;

      case 6:
        result["playsOnce"] = !!bb.readByte();
        break;

      case 7:
        result["playsOnceVar"] = !!bb.readByte();
        break;

      case 8:
        result["playsOnceVar2"] = this["decodeVariableData"](bb);
        break;

      case 9:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeScrollTransformBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["trigger"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["ScrollTransformBehaviorTrigger"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"ScrollTransformBehaviorTrigger\""); bb.writeVarUint(encoded);
  }

  var value = message["otherLayer"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeGUID"](value, bb);
  }

  var value = message["transition"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeBehaviorTransition"](value, bb);
  }

  var value = message["fromState"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["toState"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeNodeChange"](value, bb);
  }

  var value = message["playsOnce"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }

  var value = message["playsOnceVar"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }

  var value = message["playsOnceVar2"];
  if (value != null) {
    bb.writeVarUint(8);
    this["encodeVariableData"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(9);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCursorBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["hotspotX"] = bb.readVarFloat();
        break;

      case 2:
        result["hotspotY"] = bb.readVarFloat();
        break;

      case 3:
        result["cursorGuid"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCursorBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["hotspotX"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["hotspotY"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["cursorGuid"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeMarqueeBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["direction"] = this["RelativeDirection"][bb.readVarUint()];
        break;

      case 2:
        result["speed"] = bb.readVarFloat();
        break;

      case 3:
        result["shouldLoopInfinitely"] = !!bb.readByte();
        break;

      case 4:
        result["speedVar"] = this["decodeVariableData"](bb);
        break;

      case 5:
        result["shouldLoopInfinitelyVar"] = this["decodeVariableData"](bb);
        break;

      case 6:
        result["pauseOnHover"] = this["decodeVariableData"](bb);
        break;

      case 7:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeMarqueeBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["direction"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["RelativeDirection"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"RelativeDirection\""); bb.writeVarUint(encoded);
  }

  var value = message["speed"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["shouldLoopInfinitely"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["speedVar"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeVariableData"](value, bb);
  }

  var value = message["shouldLoopInfinitelyVar"];
  if (value != null) {
    bb.writeVarUint(5);
    this["encodeVariableData"](value, bb);
  }

  var value = message["pauseOnHover"];
  if (value != null) {
    bb.writeVarUint(6);
    this["encodeVariableData"](value, bb);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(7);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCodeBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["codeComponentId"] = this["decodeCodeComponentId"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["componentPropAssignments"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeComponentPropAssignment"](bb);
        break;

      case 3:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCodeBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["codeComponentId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeCodeComponentId"](value, bb);
  }

  var value = message["componentPropAssignments"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeComponentPropAssignment"](value, bb);
    }
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeClientRenderedMetadata"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["loadID"] = bb.readString();
        break;

      case 2:
        result["trackingSessionId"] = bb.readString();
        break;

      case 3:
        result["trackingSessionSequenceId"] = bb.readVarUint();
        break;

      case 4:
        result["reconnectID"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeClientRenderedMetadata"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["loadID"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["trackingSessionId"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["trackingSessionSequenceId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarUint(value);
  }

  var value = message["reconnectID"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCustomEffects"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["customEffects"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeCustomEffectData"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCustomEffects"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["customEffects"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeCustomEffectData"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeCustomEffectData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["customEffectId"] = this["decodeCustomEffectId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCustomEffectData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["customEffectId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeCustomEffectId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["LinkBehaviorType"] = {
  "1": "URL",
  "2": "PAGE",
  "URL": 1,
  "PAGE": 2
};

exports["decodeLinkBehavior"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["LinkBehaviorType"][bb.readVarUint()];
        break;

      case 2:
        result["url"] = bb.readString();
        break;

      case 3:
        result["page"] = this["decodeGUID"](bb);
        break;

      case 4:
        result["openInNewWindow"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeLinkBehavior"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["LinkBehaviorType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"LinkBehaviorType\""); bb.writeVarUint(encoded);
  }

  var value = message["url"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["page"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeGUID"](value, bb);
  }

  var value = message["openInNewWindow"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeVariableIdOrVariableOverrideId"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["variableId"] = this["decodeVariableID"](bb);
        break;

      case 2:
        result["variableOverrideId"] = this["decodeVariableOverrideId"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeVariableIdOrVariableOverrideId"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["variableId"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeVariableID"](value, bb);
  }

  var value = message["variableOverrideId"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeVariableOverrideId"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFontVariationAxis"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["tag"] = bb.readString();
  result["name"] = bb.readString();
  result["min"] = bb.readVarFloat();
  result["max"] = bb.readVarFloat();
  result["defaultValue"] = bb.readVarFloat();
  return result;
};

exports["encodeIndexFontVariationAxis"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tag"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"tag\"");
  }

  var value = message["name"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"name\"");
  }

  var value = message["min"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"min\"");
  }

  var value = message["max"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"max\"");
  }

  var value = message["defaultValue"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"defaultValue\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFontVariationAxisValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["tag"] = bb.readString();
  result["value"] = bb.readVarFloat();
  return result;
};

exports["encodeIndexFontVariationAxisValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["tag"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"tag\"");
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarFloat(value);
  } else {
    throw new Error("Missing required field \"value\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFontStyle"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["postscript"] = bb.readString();
        break;

      case 3:
        result["weight"] = bb.readVarFloat();
        break;

      case 4:
        result["italic"] = !!bb.readByte();
        break;

      case 5:
        result["stretch"] = bb.readVarFloat();
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["variationAxisValues"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeIndexFontVariationAxisValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeIndexFontStyle"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["postscript"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["weight"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["italic"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeByte(value);
  }

  var value = message["stretch"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarFloat(value);
  }

  var value = message["variationAxisValues"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFontVariationAxisValue"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFontFile"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["filename"] = bb.readString();
        break;

      case 2:
        result["version"] = bb.readVarUint();
        break;

      case 3:
        result["family"] = bb.readString();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["styles"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeIndexFontStyle"](bb);
        break;

      case 5:
        var length = bb.readVarUint();
        var values = result["variationAxes"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeIndexFontVariationAxis"](bb);
        break;

      case 6:
        result["useFontOpticalSize"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeIndexFontFile"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["filename"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarUint(value);
  }

  var value = message["family"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["styles"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFontStyle"](value, bb);
    }
  }

  var value = message["variationAxes"];
  if (value != null) {
    bb.writeVarUint(5);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFontVariationAxis"](value, bb);
    }
  }

  var value = message["useFontOpticalSize"];
  if (value != null) {
    bb.writeVarUint(6);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFamilyRename"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["oldFamily"] = bb.readString();
  result["newFamily"] = bb.readString();
  return result;
};

exports["encodeIndexFamilyRename"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["oldFamily"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"oldFamily\"");
  }

  var value = message["newFamily"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"newFamily\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexStyleRename"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["oldStyle"] = bb.readString();
  result["newStyle"] = bb.readString();
  return result;
};

exports["encodeIndexStyleRename"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["oldStyle"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"oldStyle\"");
  }

  var value = message["newStyle"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"newStyle\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexFamilyStylesRename"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["familyName"] = bb.readString();
  var length = bb.readVarUint();
  var values = result["styleRenames"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = this["decodeIndexStyleRename"](bb);
  return result;
};

exports["encodeIndexFamilyStylesRename"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["familyName"];
  if (value != null) {
    bb.writeString(value);
  } else {
    throw new Error("Missing required field \"familyName\"");
  }

  var value = message["styleRenames"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexStyleRename"](value, bb);
    }
  } else {
    throw new Error("Missing required field \"styleRenames\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexRenames"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  var length = bb.readVarUint();
  var values = result["family"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = this["decodeIndexFamilyRename"](bb);
  var length = bb.readVarUint();
  var values = result["style"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = this["decodeIndexFamilyStylesRename"](bb);
  return result;
};

exports["encodeIndexRenames"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["family"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFamilyRename"](value, bb);
    }
  } else {
    throw new Error("Missing required field \"family\"");
  }

  var value = message["style"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFamilyStylesRename"](value, bb);
    }
  } else {
    throw new Error("Missing required field \"style\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexEmojiSequence"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  var length = bb.readVarUint();
  var values = result["codepoints"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
  return result;
};

exports["encodeIndexEmojiSequence"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["codepoints"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  } else {
    throw new Error("Missing required field \"codepoints\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeIndexEmojis"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  result["revision"] = bb.readVarUint();
  var length = bb.readVarUint();
  var values = result["sizes"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = bb.readVarUint();
  var length = bb.readVarUint();
  var values = result["sequences"] = Array(length);
  for (var i = 0; i < length; i++) values[i] = this["decodeIndexEmojiSequence"](bb);
  return result;
};

exports["encodeIndexEmojis"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["revision"];
  if (value != null) {
    bb.writeVarUint(value);
  } else {
    throw new Error("Missing required field \"revision\"");
  }

  var value = message["sizes"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeVarUint(value);
    }
  } else {
    throw new Error("Missing required field \"sizes\"");
  }

  var value = message["sequences"];
  if (value != null) {
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexEmojiSequence"](value, bb);
    }
  } else {
    throw new Error("Missing required field \"sequences\"");
  }

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFontIndex"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["schemaVersion"] = bb.readVarUint();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["files"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeIndexFontFile"](bb);
        break;

      case 3:
        result["renames"] = this["decodeIndexRenames"](bb);
        break;

      case 4:
        result["emojis"] = this["decodeIndexEmojis"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFontIndex"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["schemaVersion"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["files"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeIndexFontFile"](value, bb);
    }
  }

  var value = message["renames"];
  if (value != null) {
    bb.writeVarUint(3);
    this["encodeIndexRenames"](value, bb);
  }

  var value = message["emojis"];
  if (value != null) {
    bb.writeVarUint(4);
    this["encodeIndexEmojis"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeSlideThemeData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["themeID"] = this["decodeThemeID"](bb);
        break;

      case 2:
        result["version"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeSlideThemeData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["themeID"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeThemeID"](value, bb);
  }

  var value = message["version"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["SlideNumber"] = {
  "0": "NONE",
  "1": "SLIDE",
  "2": "SECTION",
  "3": "SUBSECTION",
  "4": "TOTAL_WITHIN_DECK",
  "5": "TOTAL_WITHIN_SECTION",
  "NONE": 0,
  "SLIDE": 1,
  "SECTION": 2,
  "SUBSECTION": 3,
  "TOTAL_WITHIN_DECK": 4,
  "TOTAL_WITHIN_SECTION": 5
};
exports["NodeChatMessageType"] = {
  "0": "USER_MESSAGE",
  "1": "ASSISTANT_MESSAGE",
  "2": "TOOL_MESSAGE",
  "3": "SYSTEM_MESSAGE",
  "USER_MESSAGE": 0,
  "ASSISTANT_MESSAGE": 1,
  "TOOL_MESSAGE": 2,
  "SYSTEM_MESSAGE": 3
};

exports["decodeNodeChatMessage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["id"] = this["decodeGUID"](bb);
        break;

      case 2:
        result["type"] = this["NodeChatMessageType"][bb.readVarUint()];
        break;

      case 3:
        result["userId"] = bb.readString();
        break;

      case 4:
        result["textContent"] = bb.readString();
        break;

      case 5:
        result["sentAt"] = bb.readVarUint();
        break;

      case 6:
        var length = bb.readVarUint();
        var values = result["toolCalls"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChatToolCall"](bb);
        break;

      case 7:
        var length = bb.readVarUint();
        var values = result["toolResults"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChatToolResult"](bb);
        break;

      case 8:
        result["sentAt64"] = bb.readVarUint64();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChatMessage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["id"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["NodeChatMessageType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"NodeChatMessageType\""); bb.writeVarUint(encoded);
  }

  var value = message["userId"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }

  var value = message["textContent"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["sentAt"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint(value);
  }

  var value = message["toolCalls"];
  if (value != null) {
    bb.writeVarUint(6);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChatToolCall"](value, bb);
    }
  }

  var value = message["toolResults"];
  if (value != null) {
    bb.writeVarUint(7);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChatToolResult"](value, bb);
    }
  }

  var value = message["sentAt64"];
  if (value != null) {
    bb.writeVarUint(8);
    bb.writeVarUint64(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeChatToolCall"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["toolCallId"] = bb.readString();
        break;

      case 2:
        result["toolName"] = bb.readString();
        break;

      case 3:
        result["argsJson"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChatToolCall"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["toolCallId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["toolName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["argsJson"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeChatToolResult"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["toolCallId"] = bb.readString();
        break;

      case 2:
        result["toolName"] = bb.readString();
        break;

      case 3:
        result["resultJson"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChatToolResult"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["toolCallId"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["toolName"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["resultJson"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeChatExchange"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["node"] = this["decodeGUID"](bb);
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["messages"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeNodeChatMessage"](bb);
        break;

      case 3:
        result["isTyping"] = !!bb.readByte();
        break;

      case 4:
        var length = bb.readVarUint();
        var values = result["fileUpdates"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeFileUpdate"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChatExchange"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["node"];
  if (value != null) {
    bb.writeVarUint(1);
    this["encodeGUID"](value, bb);
  }

  var value = message["messages"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeNodeChatMessage"](value, bb);
    }
  }

  var value = message["isTyping"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }

  var value = message["fileUpdates"];
  if (value != null) {
    bb.writeVarUint(4);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeFileUpdate"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeNodeChatCompressionState"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["startIndex"] = bb.readVarUint();
        break;

      case 2:
        result["summary"] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeNodeChatCompressionState"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["startIndex"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["summary"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeFileUpdate"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["contents"] = bb.readString();
        break;

      case 3:
        result["isDeleted"] = !!bb.readByte();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeFileUpdate"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["contents"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeString(value);
  }

  var value = message["isDeleted"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeByte(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAIChatContentPart"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["AIChatContentPartType"][bb.readVarUint()];
        break;

      case 2:
        result["value"] = this["decodeAIChatContentPartAnyValue"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAIChatContentPart"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["AIChatContentPartType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AIChatContentPartType\""); bb.writeVarUint(encoded);
  }

  var value = message["value"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeAIChatContentPartAnyValue"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AIChatContentPartType"] = {
  "0": "INVALID",
  "1": "TEXT",
  "2": "SELECTED_NODE_IDS",
  "INVALID": 0,
  "TEXT": 1,
  "SELECTED_NODE_IDS": 2
};

exports["decodeAIChatContentPartAnyValue"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["textValue"] = bb.readString();
        break;

      case 2:
        var length = bb.readVarUint();
        var values = result["selectedNodeIds"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = bb.readString();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAIChatContentPartAnyValue"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["textValue"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["selectedNodeIds"];
  if (value != null) {
    bb.writeVarUint(2);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      bb.writeString(value);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["AIChatMessageRole"] = {
  "0": "USER",
  "1": "ASSISTANT",
  "2": "TOOL",
  "3": "SYSTEM",
  "USER": 0,
  "ASSISTANT": 1,
  "TOOL": 2,
  "SYSTEM": 3
};

exports["decodeAIChatMessage"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["createdAtMs"] = bb.readVarUint();
        break;

      case 2:
        result["role"] = this["AIChatMessageRole"][bb.readVarUint()];
        break;

      case 3:
        var length = bb.readVarUint();
        var values = result["content"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAIChatContentPart"](bb);
        break;

      case 4:
        result["clientId"] = bb.readString();
        break;

      case 5:
        result["createdAtMs64"] = bb.readVarUint64();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAIChatMessage"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["createdAtMs"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarUint(value);
  }

  var value = message["role"];
  if (value != null) {
    bb.writeVarUint(2);
    var encoded = this["AIChatMessageRole"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"AIChatMessageRole\""); bb.writeVarUint(encoded);
  }

  var value = message["content"];
  if (value != null) {
    bb.writeVarUint(3);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAIChatContentPart"](value, bb);
    }
  }

  var value = message["clientId"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeString(value);
  }

  var value = message["createdAtMs64"];
  if (value != null) {
    bb.writeVarUint(5);
    bb.writeVarUint64(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeAIChatThread"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["messages"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeAIChatMessage"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeAIChatThread"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["messages"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeAIChatMessage"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["CooperTemplateType"] = {
  "0": "CUSTOM",
  "1": "TWITTER_POST",
  "2": "LINKEDIN_POST",
  "3": "INSTA_POST_SQUARE",
  "4": "INSTA_POST_PORTRAIT",
  "5": "INSTA_STORY",
  "6": "INSTA_AD",
  "7": "FACEBOOK_POST",
  "8": "FACEBOOK_COVER_PHOTO",
  "9": "FACEBOOK_EVENT_COVER",
  "10": "FACEBOOK_AD_PORTRAIT",
  "11": "FACEBOOK_AD_SQUARE",
  "12": "PINTEREST_AD_PIN",
  "13": "TWITTER_BANNER",
  "15": "LINKEDIN_POST_SQUARE",
  "16": "LINKEDIN_POST_PORTRAIT",
  "17": "LINKEDIN_POST_LANDSCAPE",
  "18": "LINKEDIN_PROFILE_BANNER",
  "19": "LINKEDIN_ARTICLE_BANNER",
  "20": "LINKEDIN_AD_LANDSCAPE",
  "21": "LINKEDIN_AD_SQUARE",
  "22": "LINKEDIN_AD_VERTICAL",
  "23": "YOUTUBE_THUMBNAIL",
  "24": "YOUTUBE_BANNER",
  "25": "YOUTUBE_AD",
  "26": "TWITCH_BANNER",
  "27": "GOOGLE_LEADERBOARD_AD",
  "28": "GOOGLE_LARGE_AD",
  "29": "GOOGLE_MED_AD",
  "30": "GOOGLE_MOBILE_BANNER_AD",
  "31": "GOOGLE_SKYSCRAPER_AD",
  "32": "CARD_HORIZONTAL",
  "33": "CARD_VERTICAL",
  "34": "PRINT_US_LETTER",
  "35": "POSTER",
  "36": "BANNER_STANDARD",
  "37": "BANNER_WIDE",
  "38": "BANNER_ULTRAWIDE",
  "39": "NAME_TAG_PORTRAIT",
  "40": "NAME_TAG_LANDSCAPE",
  "41": "INSTA_REEL_COVER",
  "42": "ZOOM_BACKGROUND",
  "43": "TIKTOK_POST",
  "44": "INSTA_AD_PORTRAIT",
  "45": "INSTA_POST_TALL_PORTRAIT",
  "46": "TWITTER_POST_SQUARE",
  "47": "FACEBOOK_POST_SQUARE",
  "48": "FACEBOOK_POST_PORTRAIT",
  "49": "FACEBOOK_STORY",
  "50": "GOOGLE_SQUARE_AD",
  "51": "GOOGLE_SMALL_SQUARE_AD",
  "52": "GOOGLE_NARROW_SKYSCRAPER_AD",
  "53": "GOOGLE_HALF_PAGE_AD",
  "54": "GOOGLE_LARGE_LEADERBOARD_AD",
  "55": "GOOGLE_BILLBOARD_AD",
  "56": "GOOGLE_BANNER_LEADERBOARD_AD",
  "57": "GOOGLE_TOP_BANNER_AD",
  "58": "GOOGLE_MOBILE_LEADERBOARD_BANNER_AD",
  "59": "GOOGLE_LARGE_MOBILE_BANNER_AD",
  "60": "GOOGLE_MOBILE_INTERSTITIAL_AD",
  "61": "GOOGLE_MOBILE_MED_RECTANGLE_AD",
  "62": "PINTEREST_PIN_STANDARD",
  "63": "PINTEREST_PIN_SQUARE",
  "64": "PINTEREST_AD_SQUARE",
  "65": "PRINT_A4",
  "CUSTOM": 0,
  "TWITTER_POST": 1,
  "LINKEDIN_POST": 2,
  "INSTA_POST_SQUARE": 3,
  "INSTA_POST_PORTRAIT": 4,
  "INSTA_STORY": 5,
  "INSTA_AD": 6,
  "FACEBOOK_POST": 7,
  "FACEBOOK_COVER_PHOTO": 8,
  "FACEBOOK_EVENT_COVER": 9,
  "FACEBOOK_AD_PORTRAIT": 10,
  "FACEBOOK_AD_SQUARE": 11,
  "PINTEREST_AD_PIN": 12,
  "TWITTER_BANNER": 13,
  "LINKEDIN_POST_SQUARE": 15,
  "LINKEDIN_POST_PORTRAIT": 16,
  "LINKEDIN_POST_LANDSCAPE": 17,
  "LINKEDIN_PROFILE_BANNER": 18,
  "LINKEDIN_ARTICLE_BANNER": 19,
  "LINKEDIN_AD_LANDSCAPE": 20,
  "LINKEDIN_AD_SQUARE": 21,
  "LINKEDIN_AD_VERTICAL": 22,
  "YOUTUBE_THUMBNAIL": 23,
  "YOUTUBE_BANNER": 24,
  "YOUTUBE_AD": 25,
  "TWITCH_BANNER": 26,
  "GOOGLE_LEADERBOARD_AD": 27,
  "GOOGLE_LARGE_AD": 28,
  "GOOGLE_MED_AD": 29,
  "GOOGLE_MOBILE_BANNER_AD": 30,
  "GOOGLE_SKYSCRAPER_AD": 31,
  "CARD_HORIZONTAL": 32,
  "CARD_VERTICAL": 33,
  "PRINT_US_LETTER": 34,
  "POSTER": 35,
  "BANNER_STANDARD": 36,
  "BANNER_WIDE": 37,
  "BANNER_ULTRAWIDE": 38,
  "NAME_TAG_PORTRAIT": 39,
  "NAME_TAG_LANDSCAPE": 40,
  "INSTA_REEL_COVER": 41,
  "ZOOM_BACKGROUND": 42,
  "TIKTOK_POST": 43,
  "INSTA_AD_PORTRAIT": 44,
  "INSTA_POST_TALL_PORTRAIT": 45,
  "TWITTER_POST_SQUARE": 46,
  "FACEBOOK_POST_SQUARE": 47,
  "FACEBOOK_POST_PORTRAIT": 48,
  "FACEBOOK_STORY": 49,
  "GOOGLE_SQUARE_AD": 50,
  "GOOGLE_SMALL_SQUARE_AD": 51,
  "GOOGLE_NARROW_SKYSCRAPER_AD": 52,
  "GOOGLE_HALF_PAGE_AD": 53,
  "GOOGLE_LARGE_LEADERBOARD_AD": 54,
  "GOOGLE_BILLBOARD_AD": 55,
  "GOOGLE_BANNER_LEADERBOARD_AD": 56,
  "GOOGLE_TOP_BANNER_AD": 57,
  "GOOGLE_MOBILE_LEADERBOARD_BANNER_AD": 58,
  "GOOGLE_LARGE_MOBILE_BANNER_AD": 59,
  "GOOGLE_MOBILE_INTERSTITIAL_AD": 60,
  "GOOGLE_MOBILE_MED_RECTANGLE_AD": 61,
  "PINTEREST_PIN_STANDARD": 62,
  "PINTEREST_PIN_SQUARE": 63,
  "PINTEREST_AD_SQUARE": 64,
  "PRINT_A4": 65
};

exports["decodeCooperTemplateData"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["type"] = this["CooperTemplateType"][bb.readVarUint()];
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeCooperTemplateData"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["type"];
  if (value != null) {
    bb.writeVarUint(1);
    var encoded = this["CooperTemplateType"][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + " for enum \"CooperTemplateType\""); bb.writeVarUint(encoded);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImageImportMap"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        var length = bb.readVarUint();
        var values = result["imports"] = Array(length);
        for (var i = 0; i < length; i++) values[i] = this["decodeImageImport"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImageImportMap"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["imports"];
  if (value != null) {
    bb.writeVarUint(1);
    var values = value, n = values.length;
    bb.writeVarUint(n);
    for (var i = 0; i < n; i++) {
      value = values[i];
      this["encodeImageImport"](value, bb);
    }
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};

exports["decodeImageImport"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["name"] = bb.readString();
        break;

      case 2:
        result["image"] = this["decodeImage"](bb);
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeImageImport"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["name"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeString(value);
  }

  var value = message["image"];
  if (value != null) {
    bb.writeVarUint(2);
    this["encodeImage"](value, bb);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["InterpolationType"] = {
  "0": "HOLD",
  "1": "BEZIER",
  "2": "SPRING",
  "HOLD": 0,
  "BEZIER": 1,
  "SPRING": 2
};

exports["decodeBezierHandles"] = function (bb) {
  var result = {};
  if (!(bb instanceof this.ByteBuffer)) {
    bb = new this.ByteBuffer(bb);
  }

  while (true) {
    switch (bb.readVarUint()) {
      case 0:
        return result;

      case 1:
        result["p1x"] = bb.readVarFloat();
        break;

      case 2:
        result["p1y"] = bb.readVarFloat();
        break;

      case 3:
        result["p2x"] = bb.readVarFloat();
        break;

      case 4:
        result["p2y"] = bb.readVarFloat();
        break;

      default:
        throw new Error("Attempted to parse invalid message");
    }
  }
};

exports["encodeBezierHandles"] = function (message, bb) {
  var isTopLevel = !bb;
  if (isTopLevel) bb = new this.ByteBuffer();

  var value = message["p1x"];
  if (value != null) {
    bb.writeVarUint(1);
    bb.writeVarFloat(value);
  }

  var value = message["p1y"];
  if (value != null) {
    bb.writeVarUint(2);
    bb.writeVarFloat(value);
  }

  var value = message["p2x"];
  if (value != null) {
    bb.writeVarUint(3);
    bb.writeVarFloat(value);
  }

  var value = message["p2y"];
  if (value != null) {
    bb.writeVarUint(4);
    bb.writeVarFloat(value);
  }
  bb.writeVarUint(0);

  if (isTopLevel) return bb.toUint8Array();
};
exports["KeyframeOperation"] = {
  "0": "SET",
  "1": "SCALE",
  "2": "OFFSET",
  "SET": 0,
  "SCALE": 1,
  "OFFSET": 2
};
exports["TimelinePositionType"] = {
  "0": "ABSOLUTE",
  "1": "RELATIVE",
  "ABSOLUTE": 0,
  "RELATIVE": 1
};
exports["PlaybackStyle"] = {
  "0": "ONCE",
  "1": "LOOP",
  "2": "BOOMERANG",
  "ONCE": 0,
  "LOOP": 1,
  "BOOMERANG": 2
};
exports["TrackLoopMode"] = {
  "0": "NONE",
  "1": "LOOP",
  "NONE": 0,
  "LOOP": 1
};

export default exports;
