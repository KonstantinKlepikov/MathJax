/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/Latin-Modern/fontdata-extra.js
 *  
 *  Adds extra stretchy characters to the Latin-Modern fonts

 *  Copyright (c) 2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (SVG) {
  var VERSION = "2.3";

  var DELIMITERS = SVG.FONTDATA.DELIMITERS;

  var H = "H", V = "V";

  var ALPHABETS = "LatinModernMathJax_Alphabets",
      ARROWS = "LatinModernMathJax_Arrows",
      DOUBLESTRUCK = "LatinModernMathJax_DoubleStruck",
      FRAKTUR = "LatinModernMathJax_Fraktur",
      LATIN = "LatinModernMathJax_Latin",
      MAIN = "LatinModernMathJax_Main",
      MARKS = "LatinModernMathJax_Marks",
      MISC = "LatinModernMathJax_Misc",
      MONOSPACE = "LatinModernMathJax_Monospace",
      NONUNICODE = "LatinModernMathJax_NonUnicode",
      NORMAL = "LatinModernMathJax_Normal",
      OPERATORS = "LatinModernMathJax_Operators",
      SANSSERIF = "LatinModernMathJax_SansSerif",
      SCRIPT = "LatinModernMathJax_Script",
      SHAPES = "LatinModernMathJax_Shapes",
      SIZE1 = "LatinModernMathJax_Size1",
      SIZE2 = "LatinModernMathJax_Size2",
      SIZE3 = "LatinModernMathJax_Size3",
      SIZE4 = "LatinModernMathJax_Size4",
      SIZE5 = "LatinModernMathJax_Size5",
      SIZE6 = "LatinModernMathJax_Size6",
      SIZE7 = "LatinModernMathJax_Size7",
      SYMBOLS = "LatinModernMathJax_Symbols",
      VARIANTS = "LatinModernMathJax_Variants";

  var delim = {

  };
  
  for (var id in delim) {if (delim.hasOwnProperty(id)) {DELIMITERS[id] = delim[id]}};

  MathJax.Ajax.loadComplete(SVG.fontDir + "/fontdata-extra.js");

})(MathJax.OutputJax["SVG"]);