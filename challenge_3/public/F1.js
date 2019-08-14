"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F1 = function (_React$Component) {
  _inherits(F1, _React$Component);

  function F1(props) {
    _classCallCheck(this, F1);

    return _possibleConstructorReturn(this, (F1.__proto__ || Object.getPrototypeOf(F1)).call(this, props));
  }

  _createClass(F1, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          null,
          React.createElement("input", { type: "text", placeholder: "stuff" }),
          React.createElement(
            "button",
            { onClick: this.props.nextButtonHandler },
            "Checkout"
          )
        )
      );
    }
  }]);

  return F1;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9GMS5qc3giXSwibmFtZXMiOlsiRjEiLCJwcm9wcyIsIm5leHRCdXR0b25IYW5kbGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFTUEsRTs7O0FBQ0osY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1HQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSx5Q0FBTyxNQUFPLE1BQWQsRUFBcUIsYUFBYyxPQUFuQyxHQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBVyxLQUFLQSxLQUFMLENBQVdDLGlCQUE5QjtBQUFBO0FBQUE7QUFGRjtBQURGLE9BREY7QUFRRDs7OztFQWRjQyxNQUFNQyxTIiwiZmlsZSI6IkYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXIgPSBcInN0dWZmXCI+PC9pbnB1dD5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uZXh0QnV0dG9uSGFuZGxlcn0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19