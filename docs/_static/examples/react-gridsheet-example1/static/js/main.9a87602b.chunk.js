(this["webpackJsonpreact-gridsheet-example1"] =
  this["webpackJsonpreact-gridsheet-example1"] || []).push([
  [0],
  {
    21: function (e, t, d) {},
    56: function (e, t, d) {
      "use strict";
      d.r(t);
      var n = d(0),
        r = d.n(n),
        a = d(24),
        c = d.n(a),
        o = (d(21), d(1)),
        i = d(2),
        u = d(3),
        l = d(4),
        s = d(14),
        O = d(11),
        $ = (function (e) {
          Object(u.a)(d, e);
          var t = Object(l.a)(d);
          function d() {
            return Object(o.a)(this, d), t.apply(this, arguments);
          }
          return (
            Object(i.a)(d, [
              {
                key: "main",
                value: function (e) {
                  return "\ud83d\ude38".concat(e, "\ud83d\ude38");
                },
              },
            ]),
            d
          );
        })(s.a),
        b = [
          [0, "=A1+60", "=B1+10", "=C1+10", "=D1+10", "=E1+5", "", "", "", ""],
          ["E", "D", "C", "B", "A", "S", "", "", "", ""],
          ["", "", "", "", "", "NOW:", "=NOW()", "", "", ""],
          [
            "Name",
            "Point",
            "Rank",
            "",
            "",
            "",
            '=HOPE("World peace") & "!!"',
            "",
            "",
            "",
          ],
          [
            "apple",
            50,
            "=HLOOKUP(B5, $A$1:$F$2, 2, true)",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
          [
            "orange",
            82,
            "=HLOOKUP(B6, $A$1:$F$2, 2, true)",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
          [
            "grape",
            75,
            "=HLOOKUP(B7, $A$1:$F$2, 2, true)",
            "",
            "",
            "",
            "Greater than",
            70,
            "",
            "",
          ],
          [
            "melon",
            98,
            "=HLOOKUP(B8, $A$1:$F$2, 2, true)",
            "",
            "",
            "",
            '\'=countif(B5:B9, ">" & H7)',
            '=countif(B5:B9, ">" & H7)',
            "",
            "",
          ],
          [
            "banana",
            65,
            "=HLOOKUP(B9, $A$1:$F$2, 2, true)",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ],
        ];
      function h() {
        return Object(O.jsx)("div", {
          className: "App",
          children: Object(O.jsx)(s.b, {
            initial: Object(s.c)(b, {
              1: { style: { backgroundColor: "#ddd" } },
              2: { style: {} },
              3: { style: {} },
              A: { width: 50 },
              B: { width: 50 },
              C: { width: 50 },
              D: { width: 50 },
              E: { width: 50 },
              F: { width: 50 },
              G: { width: 200 },
              H7: { style: { backgroundColor: "#ffeeee" } },
              A4: { style: { backgroundColor: "#dddddd" } },
              B4: { style: { backgroundColor: "#dddddd" } },
              C4: { style: { backgroundColor: "#dddddd" } },
            }),
            additionalFunctions: { hope: $ },
          }),
        });
      }
      c.a.render(
        Object(O.jsx)(r.a.StrictMode, { children: Object(O.jsx)(h, {}) }),
        document.getElementById("example1")
      );
    },
  },
  [[56, 1, 2]],
]);
//# sourceMappingURL=main.9a87602b.chunk.js.map
