module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***********************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!****************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/extends.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**********************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!********************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!********************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**********************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var toPrimitive = __webpack_require__(/*! ./toPrimitive */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js":
/*!*****************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var react = __webpack_require__(/*! react */ "react");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var pill = __webpack_require__(/*! @keystone-ui/pill */ "@keystone-ui/pill");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");

function useObjectURL(fileData) {
  let [objectURL, setObjectURL] = react.useState(undefined);
  react.useEffect(() => {
    if (fileData) {
      let url = URL.createObjectURL(fileData);
      setObjectURL(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [fileData]);
  return objectURL;
}

function Field({
  autoFocus,
  field,
  value,
  onChange
}) {
  const inputRef = react.useRef(null);
  const errorMessage = value.kind === 'upload' ? validateImage(value.data) : undefined;
  const imagePathFromUpload = useObjectURL(errorMessage === undefined && value.kind === 'upload' ? value.data.file : undefined);
  const imagePath = value.kind === 'from-server' ? value.data.publicUrlTransformed : imagePathFromUpload; // Generate a random input key when the value changes, to ensure the file input is unmounted and
  // remounted (this is the only way to reset its value and ensure onChange will fire again if
  // the user selects the same file again)

  const inputKey = react.useMemo(() => Math.random(), [value]);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), value.kind === 'from-server' || value.kind === 'upload' ? core.jsx(core.Stack, {
    gap: "small"
  }, imagePath && errorMessage === undefined && core.jsx(Image, {
    src: imagePath,
    alt: field.path
  }), onChange && core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(button.Button, {
    size: "small",
    onClick: () => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, "Change image"), value.kind === 'from-server' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange({
        kind: 'remove',
        previous: value
      });
    }
  }, "Remove"), value.kind === 'upload' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange(value.previous);
    }
  }, "Cancel"), errorMessage ? core.jsx(pill.Pill, {
    tone: "negative",
    weight: "light"
  }, errorMessage) : value.kind === 'upload' && core.jsx(pill.Pill, {
    weight: "light",
    tone: "positive"
  }, "Save to upload this image"))) : core.jsx(core.Stack, {
    css: {
      alignItems: 'center'
    },
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    onClick: () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.click();
    }
  }, "Upload Image"), value.kind === 'remove' && core.jsx(button.Button, {
    size: "small",
    tone: "negative",
    onClick: () => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value.previous);
    }
  }, "Undo removal"), value.kind === 'remove' && // NOTE -- UX decision is to not display this, I think it would only be relevant
  // for deleting uploaded images (and we don't support that yet)
  // <Pill weight="light" tone="warning">
  //   Save to remove this image
  // </Pill>
  null), core.jsx("input", {
    css: {
      display: 'none'
    },
    autoComplete: "off",
    autoFocus: autoFocus,
    ref: inputRef,
    key: inputKey,
    name: field.path,
    onChange: ({
      target: {
        validity,
        files
      }
    }) => {
      const file = files === null || files === void 0 ? void 0 : files[0];
      if (!file) return; // bail if the user cancels from the file browser

      onChange === null || onChange === void 0 ? void 0 : onChange({
        kind: 'upload',
        data: {
          file,
          validity
        },
        previous: value
      });
    },
    type: "file",
    disabled: onChange === undefined
  }));
}
function validateImage({
  file,
  validity
}) {
  if (!validity.valid) {
    return 'Something went wrong, please reload and try again.';
  } // check if the file is actually an image


  if (!file.type.includes('image')) {
    return 'Only image files are allowed. Please try again.';
  }
} // ==============================
// Styled Components
// ==============================

const Image = props => {
  const theme = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: 'white',
      borderRadius: theme.radii.medium,
      border: `1px solid ${theme.colors.border}`,
      flexShrink: 0,
      lineHeight: 0,
      padding: 4,
      position: 'relative',
      textAlign: 'center',
      width: 130 // 120px image + chrome

    }
  }, core.jsx("img", _extends({
    css: {
      height: 'auto',
      maxWidth: '100%'
    }
  }, props)));
};

/* @jsx jsx */
const Cell = ({
  item,
  field
}) => {
  const data = item[field.path];
  if (!data) return null;
  return core.jsx("div", {
    css: {
      alignItems: 'center',
      display: 'flex',
      height: 24,
      lineHeight: 0,
      width: 24
    }
  }, core.jsx("img", {
    alt: data.filename,
    css: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    src: data.publicUrlTransformed
  }));
};
const CardValue = ({
  item,
  field
}) => {
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), data && core.jsx("img", {
    alt: data.filename,
    src: data.publicUrlTransformed
  }));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {
        id
        filename
        publicUrlTransformed(transformation: { width: "120" crop: "limit" })
      }`,
    defaultValue: {
      kind: 'empty'
    },

    deserialize(item) {
      const value = item[config.path];
      if (!value) return {
        kind: 'empty'
      };
      return {
        kind: 'from-server',
        data: value
      };
    },

    validate(value) {
      return value.kind !== 'upload' || validateImage(value.data) === undefined;
    },

    serialize(value) {
      if (value.kind === 'upload') {
        return {
          [config.path]: value.data.file
        };
      }

      if (value.kind === 'remove') {
        return {
          [config.path]: null
        };
      }

      return {};
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js":
/*!*************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cloudinary.cjs.dev.js */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/\D/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var types_text_views_dist_fields = __webpack_require__(/*! ../../../text/views/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
__webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");

/* @jsx jsx */
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'string' ? value : '';
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql({
        type,
        value
      }) {
        switch (type) {
          case 'is':
            {
              return {
                [config.path]: value
              };
            }

          case 'not':
            {
              return {
                [`${config.path}_not`]: value
              };
            }

          case 'in':
            {
              return {
                [`${config.path}_in`]: value.split(',').map(value => value.trim())
              };
            }

          case 'not_in':
            {
              return {
                [`${config.path}_not_in`]: value.split(',').map(value => value.trim())
              };
            }
        }

        return {};
      },

      Label({
        label,
        type,
        value
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = types_text_views_dist_fields.CardValue;
exports.Cell = types_text_views_dist_fields.Cell;
exports.Field = types_text_views_dist_fields.Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js":
/*!*******************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js":
/*!************************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var EyeIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeIcon */ "@keystone-ui/icons/icons/EyeIcon");
var EyeOffIcon = __webpack_require__(/*! @keystone-ui/icons/icons/EyeOffIcon */ "@keystone-ui/icons/icons/EyeOffIcon");
var XIcon = __webpack_require__(/*! @keystone-ui/icons/icons/XIcon */ "@keystone-ui/icons/icons/XIcon");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(fields.TextInput, {
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(fields.TextInput, {
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js":
/*!********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _toPropertyKey = __webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
var React = __webpack_require__(/*! react */ "react");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState('');
  const QUERY = apollo.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }

      meta: ${list.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `;
  const {
    data,
    error,
    loading,
    fetchMore
  } = apollo.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      search,
      first: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.meta.count) || 0;
  const relationshipSelectComponents = React.useMemo(() => ({
    MenuList: (_ref) => {
      let {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      const loadingRef = React.useRef(null);
      const QUERY = apollo.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                ${labelField}: ${list.labelField}
                ${idField}: id
                ${extraSelection}
              }
            }
          `;
      useIntersectionObserver(([{
        isIntersecting
      }]) => {
        if (!props.selectProps.isLoading && isIntersecting && props.options.length < count) {
          fetchMore({
            query: QUERY,
            variables: {
              search,
              first: subsequentItemsToLoad,
              skip: props.options.length
            },
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) return prev;
              return {
                meta: prev.meta,
                items: [...prev.items, ...fetchMoreResult.items]
              };
            }
          });
        }
      }, loadingRef);
      return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
        css: {
          textAlign: 'center'
        },
        ref: loadingRef
      }, props.options.length < count && core.jsx("span", {
        css: {
          padding: 8
        }
      }, "Loading...")));
    }
  }), [count, list.gqlNames.listQueryName]); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map((_ref2) => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref2,
        data = _objectWithoutProperties(_ref2, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];

  if (state.kind === 'one') {
    return core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: true,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    });
  }

  return core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: true,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  });
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js":
/*!****************************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var React = __webpack_require__(/*! react */ "react");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var context = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
var router = __webpack_require__(/*! @keystone-next/admin-ui/router */ "@keystone-next/admin-ui/router");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var tooltip = __webpack_require__(/*! @keystone-ui/tooltip */ "@keystone-ui/tooltip");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var adminUiUtils = __webpack_require__(/*! @keystone-next/admin-ui-utils */ "@keystone-next/admin-ui-utils");
var apollo = __webpack_require__(/*! @keystone-next/admin-ui/apollo */ "@keystone-next/admin-ui/apollo");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var types_relationship_views_RelationshipSelect_dist_fields = __webpack_require__(/*! ../RelationshipSelect/dist/fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/RelationshipSelect/dist/fields.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = apollo.useQuery(apollo.gql`query($id: ID!) {
  item: ${localList.key}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter = adminUiUtils.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(id: $id, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = adminUiUtils.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = adminUiUtils.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(adminUiUtils.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/* @jsx jsx */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = adminUiUtils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = adminUiUtils.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default['default'](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(adminUiUtils.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const CardContainer = (_ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mode"]);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
};

function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client = apollo.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, [...value.currentIds].map(id => {
    const itemGetter = items[id];
    return value.itemsBeingEdited.has(id) && onChange !== undefined ? core.jsx(CardContainer, {
      mode: "edit",
      key: id
    }, core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    })) : core.jsx(CardContainer, {
      mode: "view",
      key: id
    }, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of adminUiUtils.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: router.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details")));
  }), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client.query({
              query: apollo.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: {id_in:$ids}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = adminUiUtils.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  value,
  list
}) {
  var _value$value;

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: router.Link // What happens when there are 10,000 ids? The URL would be too
      // big, so we arbitrarily limit it to the first 100
      // TODO: we should be able to filter by this, no?
      ,
      href: `/${list.path}?!id_in="${value.value.slice(0, 100).map(({
        id
      }) => id).join(',')}"`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: router.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: router.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = context.useKeystone();
  const foreignList = context.useList(field.refListKey);
  const localList = context.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(components.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const {
    colors
  } = core.useTheme();
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(components.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? // TODO: namespace this stuff at the Keystone level
    `${config.path}__id: id
           ${config.path} {
            id
           }` : `${config.path} {
             id
             label: ${config.fieldMeta.refLabelField}
           }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data[`${config.path}__id`],
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        value,
        initialValue: value
      };
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: {
                id: state.initialValue.id
              }
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: disconnect[0]
            }
          };
        }
      }

      return {};
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js":
/*!************************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js":
/*!**********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), field.displayMode === 'select' ? core.jsx(fields.Select, {
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
}) : core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
}));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  }));
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => x.value) : options[0].value;
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js":
/*!******************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js":
/*!********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js":
/*!****************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js":
/*!*************************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
var components = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js":
/*!*********************************************************************************************************************************************!*\
  !*** D:/programming_folder/graphql-slickfits/sick-fits/backend/node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./fields.cjs.dev.js */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @keystone-next/admin-ui/context */ "@keystone-next/admin-ui/context");
/* harmony import */ var _keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @keystone-next/admin-ui/components */ "@keystone-next/admin-ui/components");
/* harmony import */ var _keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
/* harmony import */ var _keystone_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/mongoId/views */ "../../node_modules/@keystone-next/fields/types/mongoId/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/text/views */ "../../node_modules/@keystone-next/fields/types/text/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/password/views */ "../../node_modules/@keystone-next/fields/types/password/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/timestamp/views */ "../../node_modules/@keystone-next/fields/types/timestamp/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/relationship/views */ "../../node_modules/@keystone-next/fields/types/relationship/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/select/views */ "../../node_modules/@keystone-next/fields/types/select/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/fields/types/integer/views */ "../../node_modules/@keystone-next/fields/types/integer/views/dist/fields.cjs.js");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/cloudinary/views */ "../../node_modules/@keystone-next/cloudinary/views/dist/cloudinary.cjs.js");
/* harmony import */ var _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__);












const adminConfig = {};
const fieldViews = {
  view56038de4: _node_modules_keystone_next_fields_types_mongoId_views__WEBPACK_IMPORTED_MODULE_4__,
  view4837adef: _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_5__,
  viewf5777244: _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_6__,
  view8fe11a6d: _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_7__,
  view93cd2431: _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_8__,
  viewa504dd00: _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_9__,
  view47f7e745: _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_10__,
  view8111d661: _node_modules_keystone_next_cloudinary_views__WEBPACK_IMPORTED_MODULE_11__
};
const lazyMetadataQuery = {
  kind: 'Document',
  definitions: [{
    kind: 'OperationDefinition',
    operation: 'query',
    selectionSet: {
      kind: 'SelectionSet',
      selections: [{
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'keystone',
          loc: {
            start: 22,
            end: 30
          }
        },
        arguments: [],
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'adminMeta',
              loc: {
                start: 39,
                end: 48
              }
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'lists',
                  loc: {
                    start: 59,
                    end: 64
                  }
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [{
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'key',
                      loc: {
                        start: 77,
                        end: 80
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 77,
                      end: 80
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'isHidden',
                      loc: {
                        start: 91,
                        end: 99
                      }
                    },
                    arguments: [],
                    directives: [],
                    loc: {
                      start: 91,
                      end: 99
                    }
                  }, {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'fields',
                      loc: {
                        start: 110,
                        end: 116
                      }
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [{
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'path',
                          loc: {
                            start: 131,
                            end: 135
                          }
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 131,
                          end: 135
                        }
                      }, {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'createView',
                          loc: {
                            start: 148,
                            end: 158
                          }
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'fieldMode',
                              loc: {
                                start: 175,
                                end: 184
                              }
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 175,
                              end: 184
                            }
                          }],
                          loc: {
                            start: 159,
                            end: 198
                          }
                        },
                        loc: {
                          start: 148,
                          end: 198
                        }
                      }],
                      loc: {
                        start: 117,
                        end: 210
                      }
                    },
                    loc: {
                      start: 110,
                      end: 210
                    }
                  }],
                  loc: {
                    start: 65,
                    end: 220
                  }
                },
                loc: {
                  start: 59,
                  end: 220
                }
              }],
              loc: {
                start: 49,
                end: 228
              }
            },
            loc: {
              start: 39,
              end: 228
            }
          }],
          loc: {
            start: 31,
            end: 234
          }
        },
        loc: {
          start: 22,
          end: 234
        }
      }, {
        kind: 'Field',
        name: {
          kind: 'Name',
          value: 'authenticatedItem'
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [{
            kind: 'InlineFragment',
            typeCondition: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'User'
              }
            },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'id'
                }
              }, {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'name'
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_ui_core__WEBPACK_IMPORTED_MODULE_3__["Core"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_context__WEBPACK_IMPORTED_MODULE_1__["KeystoneProvider"], {
    adminConfig: adminConfig,
    adminMetaHash: "vn0sgv",
    fieldViews: fieldViews,
    lazyMetadataQuery: lazyMetadataQuery
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keystone_next_admin_ui_components__WEBPACK_IMPORTED_MODULE_2__["ErrorBoundary"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps))));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@keystone-next/admin-ui-utils":
/*!************************************************!*\
  !*** external "@keystone-next/admin-ui-utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui-utils");

/***/ }),

/***/ "@keystone-next/admin-ui/apollo":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/apollo" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/apollo");

/***/ }),

/***/ "@keystone-next/admin-ui/components":
/*!*****************************************************!*\
  !*** external "@keystone-next/admin-ui/components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/components");

/***/ }),

/***/ "@keystone-next/admin-ui/context":
/*!**************************************************!*\
  !*** external "@keystone-next/admin-ui/context" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/context");

/***/ }),

/***/ "@keystone-next/admin-ui/router":
/*!*************************************************!*\
  !*** external "@keystone-next/admin-ui/router" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-next/admin-ui/router");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeIcon":
/*!***************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/EyeOffIcon":
/*!******************************************************!*\
  !*** external "@keystone-ui/icons/icons/EyeOffIcon" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/XIcon":
/*!*************************************************!*\
  !*** external "@keystone-ui/icons/icons/XIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ "@keystone-ui/loading":
/*!***************************************!*\
  !*** external "@keystone-ui/loading" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ "@keystone-ui/modals":
/*!**************************************!*\
  !*** external "@keystone-ui/modals" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ "@keystone-ui/pill":
/*!************************************!*\
  !*** external "@keystone-ui/pill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "@keystone-ui/toast":
/*!*************************************!*\
  !*** external "@keystone-ui/toast" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ "@keystone-ui/tooltip":
/*!***************************************!*\
  !*** external "@keystone-ui/tooltip" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vRDovcHJvZ3JhbW1pbmdfZm9sZGVyL2dyYXBocWwtc2xpY2tmaXRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MvZGlzdC9jbG91ZGluYXJ5LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvY2xvdWRpbmFyeS92aWV3cy9kaXN0L2Nsb3VkaW5hcnkuY2pzLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9pbnRlZ2VyL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL2ludGVnZXIvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL21vbmdvSWQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9wYXNzd29yZC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vRDovcHJvZ3JhbW1pbmdfZm9sZGVyL2dyYXBocWwtc2xpY2tmaXRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9kaXN0L2ZpZWxkcy5janMuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2ZpZWxkcy5janMuZGV2LmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vL0Q6L3Byb2dyYW1taW5nX2ZvbGRlci9ncmFwaHFsLXNsaWNrZml0cy9zaWNrLWZpdHMvYmFja2VuZC9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9maWVsZHMuY2pzLmpzIiwid2VicGFjazovLy9EOi9wcm9ncmFtbWluZ19mb2xkZXIvZ3JhcGhxbC1zbGlja2ZpdHMvc2ljay1maXRzL2JhY2tlbmQvbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9maWVsZHMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vRDovcHJvZ3JhbW1pbmdfZm9sZGVyL2dyYXBocWwtc2xpY2tmaXRzL3NpY2stZml0cy9iYWNrZW5kL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllT2ZmSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9sb2FkaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL21vZGFsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9waWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3RvYXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhc3QtZGVlcC1lcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludGVyc2VjdGlvbi1vYnNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiYWRtaW5Db25maWciLCJmaWVsZFZpZXdzIiwidmlldzU2MDM4ZGU0IiwidmlldzQ4MzdhZGVmIiwidmlld2Y1Nzc3MjQ0IiwidmlldzhmZTExYTZkIiwidmlldzkzY2QyNDMxIiwidmlld2E1MDRkZDAwIiwidmlldzQ3ZjdlNzQ1IiwidmlldzgxMTFkNjYxIiwibGF6eU1ldGFkYXRhUXVlcnkiLCJraW5kIiwiZGVmaW5pdGlvbnMiLCJvcGVyYXRpb24iLCJzZWxlY3Rpb25TZXQiLCJzZWxlY3Rpb25zIiwibmFtZSIsInZhbHVlIiwibG9jIiwic3RhcnQiLCJlbmQiLCJhcmd1bWVudHMiLCJkaXJlY3RpdmVzIiwidHlwZUNvbmRpdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFD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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gIGlmIChrZXkgaW4gb2JqKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcclxuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcclxuXHJcbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xyXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcclxuXHJcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcclxuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xyXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcclxuICAgIH0pO1xyXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGtleXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcclxuXHJcbiAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQyOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKTtcclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XHJcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XHJcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XHJcbiAgdmFyIGtleSwgaTtcclxuXHJcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcclxuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XHJcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XHJcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XHJcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllczsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XHJcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XHJcbiAgdmFyIHRhcmdldCA9IHt9O1xyXG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcclxuICB2YXIga2V5LCBpO1xyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcclxuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XHJcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xyXG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xyXG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcclxuXHJcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XHJcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3RvUHJpbWl0aXZlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xyXG5cclxudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmVcIik7XHJcblxyXG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcclxuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcclxuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX3R5cGVvZihvYmopO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XHJcbnZhciBwaWxsID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3BpbGwnKTtcclxudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcclxuXHJcbmZ1bmN0aW9uIHVzZU9iamVjdFVSTChmaWxlRGF0YSkge1xyXG4gIGxldCBbb2JqZWN0VVJMLCBzZXRPYmplY3RVUkxdID0gcmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICByZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZpbGVEYXRhKSB7XHJcbiAgICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVEYXRhKTtcclxuICAgICAgc2V0T2JqZWN0VVJMKHVybCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtmaWxlRGF0YV0pO1xyXG4gIHJldHVybiBvYmplY3RVUkw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpZWxkKHtcclxuICBhdXRvRm9jdXMsXHJcbiAgZmllbGQsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2VcclxufSkge1xyXG4gIGNvbnN0IGlucHV0UmVmID0gcmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsaWRhdGVJbWFnZSh2YWx1ZS5kYXRhKSA6IHVuZGVmaW5lZDtcclxuICBjb25zdCBpbWFnZVBhdGhGcm9tVXBsb2FkID0gdXNlT2JqZWN0VVJMKGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnID8gdmFsdWUuZGF0YS5maWxlIDogdW5kZWZpbmVkKTtcclxuICBjb25zdCBpbWFnZVBhdGggPSB2YWx1ZS5raW5kID09PSAnZnJvbS1zZXJ2ZXInID8gdmFsdWUuZGF0YS5wdWJsaWNVcmxUcmFuc2Zvcm1lZCA6IGltYWdlUGF0aEZyb21VcGxvYWQ7IC8vIEdlbmVyYXRlIGEgcmFuZG9tIGlucHV0IGtleSB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLCB0byBlbnN1cmUgdGhlIGZpbGUgaW5wdXQgaXMgdW5tb3VudGVkIGFuZFxyXG4gIC8vIHJlbW91bnRlZCAodGhpcyBpcyB0aGUgb25seSB3YXkgdG8gcmVzZXQgaXRzIHZhbHVlIGFuZCBlbnN1cmUgb25DaGFuZ2Ugd2lsbCBmaXJlIGFnYWluIGlmXHJcbiAgLy8gdGhlIHVzZXIgc2VsZWN0cyB0aGUgc2FtZSBmaWxlIGFnYWluKVxyXG5cclxuICBjb25zdCBpbnB1dEtleSA9IHJlYWN0LnVzZU1lbW8oKCkgPT4gTWF0aC5yYW5kb20oKSwgW3ZhbHVlXSk7XHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyB8fCB2YWx1ZS5raW5kID09PSAndXBsb2FkJyA/IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJzbWFsbFwiXHJcbiAgfSwgaW1hZ2VQYXRoICYmIGVycm9yTWVzc2FnZSA9PT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KEltYWdlLCB7XHJcbiAgICBzcmM6IGltYWdlUGF0aCxcclxuICAgIGFsdDogZmllbGQucGF0aFxyXG4gIH0pLCBvbkNoYW5nZSAmJiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBhY3Jvc3M6IHRydWUsXHJcbiAgICBnYXA6IFwic21hbGxcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQ7XHJcblxyXG4gICAgICAoX2lucHV0UmVmJGN1cnJlbnQgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lucHV0UmVmJGN1cnJlbnQuY2xpY2soKTtcclxuICAgIH1cclxuICB9LCBcIkNoYW5nZSBpbWFnZVwiKSwgdmFsdWUua2luZCA9PT0gJ2Zyb20tc2VydmVyJyAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICBraW5kOiAncmVtb3ZlJyxcclxuICAgICAgICBwcmV2aW91czogdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgXCJSZW1vdmVcIiksIHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgb25DaGFuZ2UodmFsdWUucHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0sIFwiQ2FuY2VsXCIpLCBlcnJvck1lc3NhZ2UgPyBjb3JlLmpzeChwaWxsLlBpbGwsIHtcclxuICAgIHRvbmU6IFwibmVnYXRpdmVcIixcclxuICAgIHdlaWdodDogXCJsaWdodFwiXHJcbiAgfSwgZXJyb3JNZXNzYWdlKSA6IHZhbHVlLmtpbmQgPT09ICd1cGxvYWQnICYmIGNvcmUuanN4KHBpbGwuUGlsbCwge1xyXG4gICAgd2VpZ2h0OiBcImxpZ2h0XCIsXHJcbiAgICB0b25lOiBcInBvc2l0aXZlXCJcclxuICB9LCBcIlNhdmUgdG8gdXBsb2FkIHRoaXMgaW1hZ2VcIikpKSA6IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGNzczoge1xyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGdhcDogXCJzbWFsbFwiLFxyXG4gICAgYWNyb3NzOiB0cnVlXHJcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIHZhciBfaW5wdXRSZWYkY3VycmVudDI7XHJcblxyXG4gICAgICAoX2lucHV0UmVmJGN1cnJlbnQyID0gaW5wdXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2lucHV0UmVmJGN1cnJlbnQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5wdXRSZWYkY3VycmVudDIuY2xpY2soKTtcclxuICAgIH1cclxuICB9LCBcIlVwbG9hZCBJbWFnZVwiKSwgdmFsdWUua2luZCA9PT0gJ3JlbW92ZScgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgdG9uZTogXCJuZWdhdGl2ZVwiLFxyXG4gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UodmFsdWUucHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0sIFwiVW5kbyByZW1vdmFsXCIpLCB2YWx1ZS5raW5kID09PSAncmVtb3ZlJyAmJiAvLyBOT1RFIC0tIFVYIGRlY2lzaW9uIGlzIHRvIG5vdCBkaXNwbGF5IHRoaXMsIEkgdGhpbmsgaXQgd291bGQgb25seSBiZSByZWxldmFudFxyXG4gIC8vIGZvciBkZWxldGluZyB1cGxvYWRlZCBpbWFnZXMgKGFuZCB3ZSBkb24ndCBzdXBwb3J0IHRoYXQgeWV0KVxyXG4gIC8vIDxQaWxsIHdlaWdodD1cImxpZ2h0XCIgdG9uZT1cIndhcm5pbmdcIj5cclxuICAvLyAgIFNhdmUgdG8gcmVtb3ZlIHRoaXMgaW1hZ2VcclxuICAvLyA8L1BpbGw+XHJcbiAgbnVsbCksIGNvcmUuanN4KFwiaW5wdXRcIiwge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSxcclxuICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcclxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgcmVmOiBpbnB1dFJlZixcclxuICAgIGtleTogaW5wdXRLZXksXHJcbiAgICBuYW1lOiBmaWVsZC5wYXRoLFxyXG4gICAgb25DaGFuZ2U6ICh7XHJcbiAgICAgIHRhcmdldDoge1xyXG4gICAgICAgIHZhbGlkaXR5LFxyXG4gICAgICAgIGZpbGVzXHJcbiAgICAgIH1cclxuICAgIH0pID0+IHtcclxuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzID09PSBudWxsIHx8IGZpbGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWxlc1swXTtcclxuICAgICAgaWYgKCFmaWxlKSByZXR1cm47IC8vIGJhaWwgaWYgdGhlIHVzZXIgY2FuY2VscyBmcm9tIHRoZSBmaWxlIGJyb3dzZXJcclxuXHJcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh7XHJcbiAgICAgICAga2luZDogJ3VwbG9hZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZmlsZSxcclxuICAgICAgICAgIHZhbGlkaXR5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2aW91czogdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZFxyXG4gIH0pKTtcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUltYWdlKHtcclxuICBmaWxlLFxyXG4gIHZhbGlkaXR5XHJcbn0pIHtcclxuICBpZiAoIXZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICByZXR1cm4gJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgcmVsb2FkIGFuZCB0cnkgYWdhaW4uJztcclxuICB9IC8vIGNoZWNrIGlmIHRoZSBmaWxlIGlzIGFjdHVhbGx5IGFuIGltYWdlXHJcblxyXG5cclxuICBpZiAoIWZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xyXG4gICAgcmV0dXJuICdPbmx5IGltYWdlIGZpbGVzIGFyZSBhbGxvd2VkLiBQbGVhc2UgdHJ5IGFnYWluLic7XHJcbiAgfVxyXG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTdHlsZWQgQ29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IEltYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHRoZW1lID0gY29yZS51c2VUaGVtZSgpO1xyXG4gIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCB7XHJcbiAgICBjc3M6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGlpLm1lZGl1bSxcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcn1gLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxyXG4gICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6IDEzMCAvLyAxMjBweCBpbWFnZSArIGNocm9tZVxyXG5cclxuICAgIH1cclxuICB9LCBjb3JlLmpzeChcImltZ1wiLCBfZXh0ZW5kcyh7XHJcbiAgICBjc3M6IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcclxuICAgIH1cclxuICB9LCBwcm9wcykpKTtcclxufTtcclxuXHJcbi8qIEBqc3gganN4ICovXHJcbmNvbnN0IENlbGwgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGRcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgIGNzczoge1xyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAwLFxyXG4gICAgICB3aWR0aDogMjRcclxuICAgIH1cclxuICB9LCBjb3JlLmpzeChcImltZ1wiLCB7XHJcbiAgICBhbHQ6IGRhdGEuZmlsZW5hbWUsXHJcbiAgICBjc3M6IHtcclxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBzcmM6IGRhdGEucHVibGljVXJsVHJhbnNmb3JtZWRcclxuICB9KSk7XHJcbn07XHJcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XHJcbiAgaXRlbSxcclxuICBmaWVsZFxyXG59KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZGF0YSAmJiBjb3JlLmpzeChcImltZ1wiLCB7XHJcbiAgICBhbHQ6IGRhdGEuZmlsZW5hbWUsXHJcbiAgICBzcmM6IGRhdGEucHVibGljVXJsVHJhbnNmb3JtZWRcclxuICB9KSk7XHJcbn07XHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoOiBjb25maWcucGF0aCxcclxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXHJcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBgJHtjb25maWcucGF0aH0ge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZmlsZW5hbWVcclxuICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZCh0cmFuc2Zvcm1hdGlvbjogeyB3aWR0aDogXCIxMjBcIiBjcm9wOiBcImxpbWl0XCIgfSlcclxuICAgICAgfWAsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHtcclxuICAgICAga2luZDogJ2VtcHR5J1xyXG4gICAgfSxcclxuXHJcbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XHJcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiB7XHJcbiAgICAgICAga2luZDogJ2VtcHR5J1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6ICdmcm9tLXNlcnZlcicsXHJcbiAgICAgICAgZGF0YTogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGUodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLmtpbmQgIT09ICd1cGxvYWQnIHx8IHZhbGlkYXRlSW1hZ2UodmFsdWUuZGF0YSkgPT09IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAndXBsb2FkJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZS5kYXRhLmZpbGVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xyXG5leHBvcnRzLkNlbGwgPSBDZWxsO1xyXG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XHJcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Nsb3VkaW5hcnkuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jbG91ZGluYXJ5LmNqcy5kZXYuanNcIik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XHJcblxyXG4vKiBAanN4IGpzeCAqL1xyXG5jb25zdCBGaWVsZCA9ICh7XHJcbiAgZmllbGQsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgYXV0b0ZvY3VzXHJcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXHJcbiAgdHlwZTogXCJudW1iZXJcIixcclxuICBvbkNoYW5nZTogZXZlbnQgPT4ge1xyXG4gICAgb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xyXG4gIH0sXHJcbiAgdmFsdWU6IHZhbHVlXHJcbn0pIDogdmFsdWUpO1xyXG5jb25zdCBDZWxsID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkLFxyXG4gIGxpbmtUb1xyXG59KSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xyXG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xyXG59O1xyXG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcclxufTtcclxuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxyXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcclxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcclxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSArICcnIDogJyc7XHJcbiAgICB9LFxyXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiAoe1xyXG4gICAgICBbY29uZmlnLnBhdGhdOiB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQodmFsdWUsIDEwKVxyXG4gICAgfSksXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgRmlsdGVyKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcclxuICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW15cXGQsXFxzXS9nLCAnJykpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBncmFwaHFsOiAoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpcycgPyBjb25maWcucGF0aCA6IGAke2NvbmZpZy5wYXRofV8ke3R5cGV9YDtcclxuICAgICAgICBjb25zdCB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgW2tleV06IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkgPyB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlLnNwbGl0KCcsJykubWFwKGkgPT4gcGFyc2VJbnQoaSkpIDogcGFyc2VJbnQodmFsdWVXaXRob3V0V2hpdGVzcGFjZSlcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgTGFiZWwoe1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHR5cGVcclxuICAgICAgfSkge1xyXG4gICAgICAgIGxldCByZW5kZXJlZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmIChbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICByZW5kZXJlZFZhbHVlID0gdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiAke3JlbmRlcmVkVmFsdWV9YDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHR5cGVzOiB7XHJcbiAgICAgICAgaXM6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3Q6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3Q6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGx0OiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIGxlc3MgdGhhbicsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBndGU6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGx0ZToge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW46IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgb25lIG9mJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdF9pbjoge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBub3Qgb25lIG9mJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcclxuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMgPSByZXF1aXJlKCcuLi8uLi8uLi90ZXh0L3ZpZXdzL2Rpc3QvZmllbGRzLmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xyXG5cclxuLyogQGpzeCBqc3ggKi9cclxuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxyXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcclxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxyXG4gICAgZGVmYXVsdFZhbHVlOiAnJyxcclxuXHJcbiAgICBkZXNlcmlhbGl6ZShpdGVtKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gaXRlbVtjb25maWcucGF0aF07XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcclxuICAgIH0sXHJcblxyXG4gICAgc2VyaWFsaXplKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIEZpbHRlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ3JhcGhxbCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpcyc6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2FzZSAnbm90JzpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBbYCR7Y29uZmlnLnBhdGh9X25vdGBdOiB2YWx1ZVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjYXNlICdpbic6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9pbmBdOiB2YWx1ZS5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiB2YWx1ZS50cmltKCkpXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNhc2UgJ25vdF9pbic6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgW2Ake2NvbmZpZy5wYXRofV9ub3RfaW5gXTogdmFsdWUuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gdmFsdWUudHJpbSgpKVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIExhYmVsKHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH0pIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IHZhbHVlLnRyaW0oKSkuam9pbignLCAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogJHtyZW5kZXJlZFZhbHVlfWA7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB0eXBlczoge1xyXG4gICAgICAgIGlzOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90OiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCcsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbjoge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBvbmUgb2YnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X2luOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLkNhcmRWYWx1ZSA9IHR5cGVzX3RleHRfdmlld3NfZGlzdF9maWVsZHMuQ2FyZFZhbHVlO1xyXG5leHBvcnRzLkNlbGwgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkNlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSB0eXBlc190ZXh0X3ZpZXdzX2Rpc3RfZmllbGRzLkZpZWxkO1xyXG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XHJcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIEV5ZUljb24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvRXllSWNvbicpO1xyXG52YXIgRXllT2ZmSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9FeWVPZmZJY29uJyk7XHJcbnZhciBYSWNvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9YSWNvbicpO1xyXG52YXIgc2VnbWVudGVkQ29udHJvbCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbCcpO1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGZvcmNlVmFsaWRhdGlvbixcclxuICBhdXRvRm9jdXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW5wdXRWYWx1ZSwgc2V0U2hvd0lucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b3VjaGVkU2Vjb25kSW5wdXQsIHNldFRvdWNoZWRTZWNvbmRJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2hvdWxkU2hvd1ZhbGlkYXRpb24gPSBmb3JjZVZhbGlkYXRpb24gfHwgdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0O1xyXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBzaG91bGRTaG93VmFsaWRhdGlvbiAmJiB2YWx1ZS5raW5kID09PSAnZWRpdGluZycgPyB2YWx1ZS52YWx1ZSA9PT0gdmFsdWUuY29uZmlybSA/IHZhbHVlLnZhbHVlLmxlbmd0aCA+PSBmaWVsZC5taW5MZW5ndGggPyB1bmRlZmluZWQgOiBgVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgJHtmaWVsZC5taW5MZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2AgOiAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnIDogdW5kZWZpbmVkO1xyXG4gIGNvbnN0IGlucHV0VHlwZSA9IHNob3dJbnB1dFZhbHVlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUuaXNTZXQgPyAnUGFzc3dvcmQgaXMgc2V0JyA6ICdQYXNzd29yZCBpcyBub3Qgc2V0JyA6IHZhbHVlLmtpbmQgPT09ICdpbml0aWFsJyA/IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAga2luZDogJ2VkaXRpbmcnLFxyXG4gICAgICAgIGNvbmZpcm06ICcnLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1NldDogdmFsdWUuaXNTZXRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgdmFsdWUuaXNTZXQgPyAnQ2hhbmdlIFBhc3N3b3JkJyA6ICdTZXQgUGFzc3dvcmQnKSA6IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJzbWFsbFwiXHJcbiAgfSwgY29yZS5qc3goXCJkaXZcIiwge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfVxyXG4gIH0sIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcclxuICAgIGF1dG9Gb2N1czogdHJ1ZSxcclxuICAgIGludmFsaWQ6IHZhbGlkYXRpb24gIT09IHVuZGVmaW5lZCxcclxuICAgIHR5cGU6IGlucHV0VHlwZSxcclxuICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcclxuICAgIHBsYWNlaG9sZGVyOiBcIk5ldyBQYXNzd29yZFwiLFxyXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcclxuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiAoKSA9PiB7XHJcbiAgICAgIHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpO1xyXG4gICAgfVxyXG4gIH0pLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgICBpbnZhbGlkOiB2YWxpZGF0aW9uICE9PSB1bmRlZmluZWQsXHJcbiAgICB0eXBlOiBpbnB1dFR5cGUsXHJcbiAgICB2YWx1ZTogdmFsdWUuY29uZmlybSxcclxuICAgIHBsYWNlaG9sZGVyOiBcIkNvbmZpcm0gUGFzc3dvcmRcIixcclxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgIGNvbmZpcm06IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiAoKSA9PiB7XHJcbiAgICAgIHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKTtcclxuICAgIH1cclxuICB9KSwgY29yZS5qc3goU3BhY2VyLCBudWxsKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICBzZXRTaG93SW5wdXRWYWx1ZSghc2hvd0lucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIG51bGwsIHNob3dJbnB1dFZhbHVlID8gJ0hpZGUgVGV4dCcgOiAnU2hvdyBUZXh0JyksIHNob3dJbnB1dFZhbHVlID8gY29yZS5qc3goRXllT2ZmSWNvbi5FeWVPZmZJY29uLCBudWxsKSA6IGNvcmUuanN4KEV5ZUljb24uRXllSWNvbiwgbnVsbCkpLCBjb3JlLmpzeChTcGFjZXIsIG51bGwpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICBraW5kOiAnaW5pdGlhbCcsXHJcbiAgICAgICAgaXNTZXQ6IHZhbHVlLmlzU2V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiQ2FuY2VsXCIpLCBjb3JlLmpzeChYSWNvbi5YSWNvbiwgbnVsbCkpKSwgdmFsaWRhdGlvbiAmJiBjb3JlLmpzeChjb3JlLlRleHQsIHtcclxuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxyXG4gICAgc2l6ZTogXCJzbWFsbFwiXHJcbiAgfSwgdmFsaWRhdGlvbikpKTtcclxufTtcclxuY29uc3QgQ2VsbCA9ICh7XHJcbiAgaXRlbSxcclxuICBmaWVsZFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgaXRlbVtgJHtmaWVsZC5wYXRofV9pc19zZXRgXSA/ICdJcyBzZXQnIDogJ0lzIG5vdCBzZXQnKTtcclxufTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2Ake2ZpZWxkLnBhdGh9X2lzX3NldGBdID8gJ0lzIHNldCcgOiAnSXMgbm90IHNldCcpO1xyXG59O1xyXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogYCR7Y29uZmlnLnBhdGh9X2lzX3NldGAsXHJcbiAgICBtaW5MZW5ndGg6IGNvbmZpZy5maWVsZE1ldGEubWluTGVuZ3RoLFxyXG4gICAgZGVmYXVsdFZhbHVlOiB7XHJcbiAgICAgIGtpbmQ6ICdpbml0aWFsJyxcclxuICAgICAgaXNTZXQ6IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGUoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmtpbmQgPT09ICdpbml0aWFsJyB8fCBzdGF0ZS52YWx1ZSA9PT0gc3RhdGUuY29uZmlybSAmJiBzdGF0ZS52YWx1ZS5sZW5ndGggPj0gY29uZmlnLmZpZWxkTWV0YS5taW5MZW5ndGg7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+ICh7XHJcbiAgICAgIGtpbmQ6ICdpbml0aWFsJyxcclxuICAgICAgaXNTZXQ6IGRhdGFbYCR7Y29uZmlnLnBhdGh9X2lzX3NldGBdXHJcbiAgICB9KSxcclxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4ge1xyXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ2luaXRpYWwnKSByZXR1cm4ge307XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogdmFsdWUudmFsdWVcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgRmlsdGVyKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KHNlZ21lbnRlZENvbnRyb2wuU2VnbWVudGVkQ29udHJvbCwge1xyXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogTnVtYmVyKHByb3BzLnZhbHVlKSxcclxuICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKCEhdmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlZ21lbnRzOiBbJ0lzIE5vdCBTZXQnLCAnSXMgU2V0J11cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdyYXBocWw6ICh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFtgJHtjb25maWcucGF0aH1fJHt0eXBlfWBdOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBMYWJlbCh7XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICdpcyBzZXQnIDogJ2lzIG5vdCBzZXQnO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgdHlwZXM6IHtcclxuICAgICAgICBpc19zZXQ6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgU2V0JyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBTcGFjZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc3BhY2luZ1xyXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XHJcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgIGNzczoge1xyXG4gICAgICB3aWR0aDogc3BhY2luZy5zbWFsbCxcclxuICAgICAgZmxleFNocmluazogMFxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcclxuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBfdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleScpO1xyXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG5yZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGFwb2xsbyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbycpO1xyXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XHJcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XHJcblxyXG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcihjYiwgcmVmKSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYiwge30pO1xyXG4gICAgbGV0IG5vZGUgPSByZWYuY3VycmVudDtcclxuXHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKG5vZGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsSXRlbXNUb0xvYWQgPSAxMDtcclxuY29uc3Qgc3Vic2VxdWVudEl0ZW1zVG9Mb2FkID0gNTA7XHJcbmNvbnN0IGlkRmllbGQgPSAnX19fX2lkX19fXyc7XHJcbmNvbnN0IGxhYmVsRmllbGQgPSAnX19fX2xhYmVsX19fXyc7XHJcbmNvbnN0IFJlbGF0aW9uc2hpcFNlbGVjdCA9ICh7XHJcbiAgYXV0b0ZvY3VzLFxyXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcclxuICBpc0Rpc2FibGVkLFxyXG4gIGlzTG9hZGluZyxcclxuICBsaXN0LFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHN0YXRlLFxyXG4gIGV4dHJhU2VsZWN0aW9uID0gJydcclxufSkgPT4ge1xyXG4gIHZhciBfZGF0YSRpdGVtcztcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBRVUVSWSA9IGFwb2xsby5ncWxgXHJcbiAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3QoJHNlYXJjaDogU3RyaW5nISwgJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xyXG4gICAgICBpdGVtczogJHtsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHNlYXJjaDogJHNlYXJjaCwgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcclxuICAgICAgICAke2lkRmllbGR9OiBpZFxyXG4gICAgICAgICR7bGFiZWxGaWVsZH06ICR7bGlzdC5sYWJlbEZpZWxkfVxyXG4gICAgICAgICR7ZXh0cmFTZWxlY3Rpb259XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1ldGE6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlNZXRhTmFtZX0oc2VhcmNoOiAkc2VhcmNoKSB7XHJcbiAgICAgICAgY291bnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YSxcclxuICAgIGVycm9yLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGZldGNoTW9yZVxyXG4gIH0gPSBhcG9sbG8udXNlUXVlcnkoUVVFUlksIHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBzZWFyY2gsXHJcbiAgICAgIGZpcnN0OiBpbml0aWFsSXRlbXNUb0xvYWQsXHJcbiAgICAgIHNraXA6IDBcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBjb3VudCA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWV0YS5jb3VudCkgfHwgMDtcclxuICBjb25zdCByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xyXG4gICAgTWVudUxpc3Q6IChfcmVmKSA9PiB7XHJcbiAgICAgIGxldCB7XHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgICAgfSA9IF9yZWYsXHJcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjaGlsZHJlblwiXSk7XHJcblxyXG4gICAgICBjb25zdCBsb2FkaW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgICBjb25zdCBRVUVSWSA9IGFwb2xsby5ncWxgXHJcbiAgICAgICAgICAgIHF1ZXJ5IFJlbGF0aW9uc2hpcFNlbGVjdE1vcmUoJHNlYXJjaDogU3RyaW5nISwgJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xyXG4gICAgICAgICAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0oc2VhcmNoOiAkc2VhcmNoLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xyXG4gICAgICAgICAgICAgICAgJHtsYWJlbEZpZWxkfTogJHtsaXN0LmxhYmVsRmllbGR9XHJcbiAgICAgICAgICAgICAgICAke2lkRmllbGR9OiBpZFxyXG4gICAgICAgICAgICAgICAgJHtleHRyYVNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGA7XHJcbiAgICAgIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKChbe1xyXG4gICAgICAgIGlzSW50ZXJzZWN0aW5nXHJcbiAgICAgIH1dKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9wcy5zZWxlY3RQcm9wcy5pc0xvYWRpbmcgJiYgaXNJbnRlcnNlY3RpbmcgJiYgcHJvcHMub3B0aW9ucy5sZW5ndGggPCBjb3VudCkge1xyXG4gICAgICAgICAgZmV0Y2hNb3JlKHtcclxuICAgICAgICAgICAgcXVlcnk6IFFVRVJZLFxyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgZmlyc3Q6IHN1YnNlcXVlbnRJdGVtc1RvTG9hZCxcclxuICAgICAgICAgICAgICBza2lwOiBwcm9wcy5vcHRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXYsIHtcclxuICAgICAgICAgICAgICBmZXRjaE1vcmVSZXN1bHRcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSByZXR1cm4gcHJldjtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWV0YTogcHJldi5tZXRhLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2Lml0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQuaXRlbXNdXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBsb2FkaW5nUmVmKTtcclxuICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5zZWxlY3RDb21wb25lbnRzLk1lbnVMaXN0LCBwcm9wcywgY2hpbGRyZW4sIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZjogbG9hZGluZ1JlZlxyXG4gICAgICB9LCBwcm9wcy5vcHRpb25zLmxlbmd0aCA8IGNvdW50ICYmIGNvcmUuanN4KFwic3BhblwiLCB7XHJcbiAgICAgICAgY3NzOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBcIkxvYWRpbmcuLi5cIikpKTtcclxuICAgIH1cclxuICB9KSwgW2NvdW50LCBsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWVdKTsgLy8gVE9ETzogYmV0dGVyIGVycm9yIFVJXHJcbiAgLy8gVE9ETzogSGFuZGxlIHBlcm1pc3Npb24gZXJyb3JzXHJcbiAgLy8gKGllOyB1c2VyIGhhcyBwZXJtaXNzaW9uIHRvIHJlYWQgdGhpcyByZWxhdGlvbnNoaXAgZmllbGQsIGJ1dFxyXG4gIC8vIG5vdCB0aGUgcmVsYXRlZCBsaXN0LCBvciBzb21lIGl0ZW1zIG9uIHRoZSBsaXN0KVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwgbnVsbCwgXCJFcnJvclwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RhdGEkaXRlbXMgPSBkYXRhLml0ZW1zKSA9PT0gbnVsbCB8fCBfZGF0YSRpdGVtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RhdGEkaXRlbXMubWFwKChfcmVmMikgPT4ge1xyXG4gICAgbGV0IHtcclxuICAgICAgW2lkRmllbGRdOiB2YWx1ZSxcclxuICAgICAgW2xhYmVsRmllbGRdOiBsYWJlbFxyXG4gICAgfSA9IF9yZWYyLFxyXG4gICAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFtpZEZpZWxkLCBsYWJlbEZpZWxkXS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbGFiZWw6IGxhYmVsIHx8IHZhbHVlLFxyXG4gICAgICBkYXRhXHJcbiAgICB9O1xyXG4gIH0pKSB8fCBbXTtcclxuXHJcbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdvbmUnKSB7XHJcbiAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlNlbGVjdCAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHJlYWN0LXNlbGVjdCBwYXNzZXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gb25JbnB1dENoYW5nZVxyXG4gICAgLy8gYW5kIHVzZVN0YXRlIHNldHRlcnMgbG9nIGEgd2FybmluZyBpZiBhIHNlY29uZCBhcmd1bWVudCBpcyBwYXNzZWRcclxuICAgICwge1xyXG4gICAgICBvbklucHV0Q2hhbmdlOiB2YWwgPT4gc2V0U2VhcmNoKHZhbCksXHJcbiAgICAgIGlzTG9hZGluZzogbG9hZGluZyB8fCBpc0xvYWRpbmcsXHJcbiAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgICBjb21wb25lbnRzOiByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzLFxyXG4gICAgICBwb3J0YWxNZW51OiB0cnVlLFxyXG4gICAgICB2YWx1ZTogc3RhdGUudmFsdWUgPyB7XHJcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlLmlkLFxyXG4gICAgICAgIGxhYmVsOiBzdGF0ZS52YWx1ZS5sYWJlbCxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgZGF0YTogc3RhdGUudmFsdWUuZGF0YVxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcclxuICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcclxuICAgICAgICBzdGF0ZS5vbkNoYW5nZSh2YWx1ZSA/IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZS52YWx1ZSxcclxuICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCxcclxuICAgICAgICAgIGRhdGE6IHZhbHVlLmRhdGFcclxuICAgICAgICB9IDogbnVsbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXHJcbiAgICAgIGlzQ2xlYXJhYmxlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXHJcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5NdWx0aVNlbGVjdCAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHJlYWN0LXNlbGVjdCBwYXNzZXMgYSBzZWNvbmQgYXJndW1lbnQgdG8gb25JbnB1dENoYW5nZVxyXG4gIC8vIGFuZCB1c2VTdGF0ZSBzZXR0ZXJzIGxvZyBhIHdhcm5pbmcgaWYgYSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkXHJcbiAgLCB7XHJcbiAgICBvbklucHV0Q2hhbmdlOiB2YWwgPT4gc2V0U2VhcmNoKHZhbCksXHJcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcgfHwgaXNMb2FkaW5nLFxyXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXHJcbiAgICBjb21wb25lbnRzOiByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzLFxyXG4gICAgcG9ydGFsTWVudTogdHJ1ZSxcclxuICAgIHZhbHVlOiBzdGF0ZS52YWx1ZS5tYXAodmFsdWUgPT4gKHtcclxuICAgICAgdmFsdWU6IHZhbHVlLmlkLFxyXG4gICAgICBsYWJlbDogdmFsdWUubGFiZWwsXHJcbiAgICAgIGRhdGE6IHZhbHVlLmRhdGFcclxuICAgIH0pKSxcclxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xyXG4gICAgICBzdGF0ZS5vbkNoYW5nZSh2YWx1ZS5tYXAoeCA9PiAoe1xyXG4gICAgICAgIGlkOiB4LnZhbHVlLFxyXG4gICAgICAgIGxhYmVsOiB4LmxhYmVsLFxyXG4gICAgICAgIGRhdGE6IHguZGF0YVxyXG4gICAgICB9KSkpO1xyXG4gICAgfSxcclxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcclxuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxyXG4gICAgaXNDbGVhcmFibGU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcclxuICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydHMuUmVsYXRpb25zaGlwU2VsZWN0ID0gUmVsYXRpb25zaGlwU2VsZWN0O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xyXG52YXIgY29udGV4dCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbnRleHQnKTtcclxudmFyIHJvdXRlciA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3JvdXRlcicpO1xyXG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xyXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XHJcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XHJcbnZhciBtb2RhbHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbW9kYWxzJyk7XHJcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XHJcbnZhciB0b29sdGlwID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3Rvb2x0aXAnKTtcclxudmFyIGxvYWRpbmcgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xyXG52YXIgYWRtaW5VaVV0aWxzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWktdXRpbHMnKTtcclxudmFyIGFwb2xsbyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2Fwb2xsbycpO1xyXG52YXIgdG9hc3QgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9hc3QnKTtcclxudmFyIGlzRGVlcEVxdWFsID0gcmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XHJcbnZhciB0eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3RfZmllbGRzID0gcmVxdWlyZSgnLi4vUmVsYXRpb25zaGlwU2VsZWN0L2Rpc3QvZmllbGRzLmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5Jyk7XHJcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XHJcblxyXG52YXIgaXNEZWVwRXF1YWxfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KGlzRGVlcEVxdWFsKTtcclxuXHJcbmZ1bmN0aW9uIHVzZUl0ZW1TdGF0ZSh7XHJcbiAgc2VsZWN0ZWRGaWVsZHMsXHJcbiAgbG9jYWxMaXN0LFxyXG4gIGlkLFxyXG4gIGZpZWxkXHJcbn0pIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhLFxyXG4gICAgZXJyb3IsXHJcbiAgICBsb2FkaW5nXHJcbiAgfSA9IGFwb2xsby51c2VRdWVyeShhcG9sbG8uZ3FsYHF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgaXRlbTogJHtsb2NhbExpc3Qua2V5fSh3aGVyZToge2lkOiAkaWR9KSB7XHJcbiAgICBpZFxyXG4gICAgcmVsYXRpb25zaGlwOiAke2ZpZWxkLnBhdGh9IHtcclxuICAgICAgJHtzZWxlY3RlZEZpZWxkc31cclxuICAgIH1cclxuICB9XHJcbn1gLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtc0FyckZyb21EYXRhLFxyXG4gICAgcmVsYXRpb25zaGlwR2V0dGVyXHJcbiAgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YUdldHRlciA9IGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9ycyk7XHJcbiAgICBjb25zdCByZWxhdGlvbnNoaXBHZXR0ZXIgPSBkYXRhR2V0dGVyLmdldCgnaXRlbScpLmdldCgncmVsYXRpb25zaGlwJyk7XHJcbiAgICBjb25zdCBpc01hbnkgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uc2hpcEdldHRlci5kYXRhKTtcclxuICAgIGNvbnN0IGl0ZW1zQXJyRnJvbURhdGEgPSAoaXNNYW55ID8gcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEubWFwKChfLCBpKSA9PiByZWxhdGlvbnNoaXBHZXR0ZXIuZ2V0KGkpKSA6IFtyZWxhdGlvbnNoaXBHZXR0ZXJdKS5maWx0ZXIoeCA9PiB7XHJcbiAgICAgIHZhciBfeCRkYXRhO1xyXG5cclxuICAgICAgcmV0dXJuICgoX3gkZGF0YSA9IHguZGF0YSkgPT09IG51bGwgfHwgX3gkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkZGF0YS5pZCkgIT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVsYXRpb25zaGlwR2V0dGVyLFxyXG4gICAgICBpdGVtc0FyckZyb21EYXRhXHJcbiAgICB9O1xyXG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xyXG4gIGxldCBbe1xyXG4gICAgaXRlbXMsXHJcbiAgICBpdGVtc0FyckZyb21EYXRhOiBpdGVtc0FyckZyb21EYXRhU3RhdGVcclxuICB9LCBzZXRJdGVtc1N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGl0ZW1zQXJyRnJvbURhdGE6IFtdLFxyXG4gICAgaXRlbXM6IHt9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpdGVtc0FyckZyb21EYXRhU3RhdGUgIT09IGl0ZW1zQXJyRnJvbURhdGEpIHtcclxuICAgIGxldCBuZXdJdGVtcyA9IHt9O1xyXG4gICAgaXRlbXNBcnJGcm9tRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB2YXIgX2l0ZW1zJGl0ZW0kZGF0YSRpZCwgX2l0ZW0kZXJyb3JzLCBfaW5pdGlhbEl0ZW1JblN0YXRlJGU7XHJcblxyXG4gICAgICBjb25zdCBpbml0aWFsSXRlbUluU3RhdGUgPSAoX2l0ZW1zJGl0ZW0kZGF0YSRpZCA9IGl0ZW1zW2l0ZW0uZGF0YS5pZF0pID09PSBudWxsIHx8IF9pdGVtcyRpdGVtJGRhdGEkaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pdGVtcyRpdGVtJGRhdGEkaWQuZnJvbUluaXRpYWxRdWVyeTtcclxuXHJcbiAgICAgIGlmICgoaXRlbXNbaXRlbS5kYXRhLmlkXSAmJiBpbml0aWFsSXRlbUluU3RhdGUgfHwgIWl0ZW1zW2l0ZW0uZGF0YS5pZF0pICYmICghaW5pdGlhbEl0ZW1JblN0YXRlIHx8IGl0ZW0uZGF0YSAhPT0gaW5pdGlhbEl0ZW1JblN0YXRlLmRhdGEgfHwgKChfaXRlbSRlcnJvcnMgPSBpdGVtLmVycm9ycykgPT09IG51bGwgfHwgX2l0ZW0kZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaXRlbSRlcnJvcnMubGVuZ3RoKSAhPT0gKChfaW5pdGlhbEl0ZW1JblN0YXRlJGUgPSBpbml0aWFsSXRlbUluU3RhdGUuZXJyb3JzKSA9PT0gbnVsbCB8fCBfaW5pdGlhbEl0ZW1JblN0YXRlJGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbml0aWFsSXRlbUluU3RhdGUkZS5sZW5ndGgpIHx8IChpdGVtLmVycm9ycyB8fCBbXSkuc29tZSgoZXJyLCBpKSA9PiB7XHJcbiAgICAgICAgdmFyIF9pbml0aWFsSXRlbUluU3RhdGUkZTI7XHJcblxyXG4gICAgICAgIHJldHVybiBlcnIgIT09ICgoX2luaXRpYWxJdGVtSW5TdGF0ZSRlMiA9IGluaXRpYWxJdGVtSW5TdGF0ZS5lcnJvcnMpID09PSBudWxsIHx8IF9pbml0aWFsSXRlbUluU3RhdGUkZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbml0aWFsSXRlbUluU3RhdGUkZTJbaV0pO1xyXG4gICAgICB9KSkpIHtcclxuICAgICAgICBuZXdJdGVtc1tpdGVtLmRhdGEuaWRdID0ge1xyXG4gICAgICAgICAgY3VycmVudDogaXRlbSxcclxuICAgICAgICAgIGZyb21Jbml0aWFsUXVlcnk6IGl0ZW1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0l0ZW1zW2l0ZW0uZGF0YS5pZF0gPSBpdGVtc1tpdGVtLmRhdGEuaWRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGl0ZW1zID0gbmV3SXRlbXM7XHJcbiAgICBzZXRJdGVtc1N0YXRlKHtcclxuICAgICAgaXRlbXM6IG5ld0l0ZW1zLFxyXG4gICAgICBpdGVtc0FyckZyb21EYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1zVG9SZXR1cm4gPSB7fTtcclxuICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaWQgPT4ge1xyXG4gICAgICAgIGl0ZW1zVG9SZXR1cm5baWRdID0gaXRlbXNbaWRdLmN1cnJlbnQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXNUb1JldHVybjtcclxuICAgIH0sIFtpdGVtc10pLFxyXG4gICAgc2V0SXRlbXM6IFJlYWN0LnVzZUNhbGxiYWNrKGl0ZW1zID0+IHtcclxuICAgICAgc2V0SXRlbXNTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgbGV0IGl0ZW1zRm9yU3RhdGUgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICB2YXIgX3N0YXRlJGl0ZW1zJGlkO1xyXG5cclxuICAgICAgICAgIGlmIChpdGVtc1tpZF0gPT09ICgoX3N0YXRlJGl0ZW1zJGlkID0gc3RhdGUuaXRlbXNbaWRdKSA9PT0gbnVsbCB8fCBfc3RhdGUkaXRlbXMkaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpdGVtcyRpZC5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBpdGVtc0ZvclN0YXRlW2lkXSA9IHN0YXRlLml0ZW1zW2lkXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBfc3RhdGUkaXRlbXMkaWQyO1xyXG5cclxuICAgICAgICAgICAgaXRlbXNGb3JTdGF0ZVtpZF0gPSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudDogaXRlbXNbaWRdLFxyXG4gICAgICAgICAgICAgIGZyb21Jbml0aWFsUXVlcnk6IChfc3RhdGUkaXRlbXMkaWQyID0gc3RhdGUuaXRlbXNbaWRdKSA9PT0gbnVsbCB8fCBfc3RhdGUkaXRlbXMkaWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaXRlbXMkaWQyLmZyb21Jbml0aWFsUXVlcnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXRlbXNBcnJGcm9tRGF0YTogc3RhdGUuaXRlbXNBcnJGcm9tRGF0YSxcclxuICAgICAgICAgIGl0ZW1zOiBpdGVtc0ZvclN0YXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9LCBbc2V0SXRlbXNTdGF0ZV0pLFxyXG4gICAgc3RhdGU6ICgoKSA9PiB7XHJcbiAgICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtpbmQ6ICdsb2FkaW5nJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwICYmIGVycm9yLm5ldHdvcmtFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBraW5kOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubmV0d29ya0Vycm9yLm1lc3NhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmllbGQubWFueSAmJiAhcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpIHtcclxuICAgICAgICB2YXIgX3JlbGF0aW9uc2hpcEdldHRlciRlO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ2Vycm9yJyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICgoX3JlbGF0aW9uc2hpcEdldHRlciRlID0gcmVsYXRpb25zaGlwR2V0dGVyLmVycm9ycykgPT09IG51bGwgfHwgX3JlbGF0aW9uc2hpcEdldHRlciRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVsYXRpb25zaGlwR2V0dGVyJGVbMF0ubWVzc2FnZSkgfHwgJydcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6ICdsb2FkZWQnXHJcbiAgICAgIH07XHJcbiAgICB9KSgpXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiB1c2VGaWVsZHNPYmoobGlzdCwgZmllbGRzKSB7XHJcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZWRpdEZpZWxkcyA9IHt9O1xyXG4gICAgZmllbGRzID09PSBudWxsIHx8IGZpZWxkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmllbGRzLmZvckVhY2goZmllbGRQYXRoID0+IHtcclxuICAgICAgZWRpdEZpZWxkc1tmaWVsZFBhdGhdID0gbGlzdC5maWVsZHNbZmllbGRQYXRoXTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVkaXRGaWVsZHM7XHJcbiAgfSwgW2ZpZWxkcywgbGlzdC5maWVsZHNdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5saW5lRWRpdCh7XHJcbiAgZmllbGRzLFxyXG4gIGxpc3QsXHJcbiAgc2VsZWN0ZWRGaWVsZHMsXHJcbiAgaXRlbUdldHRlcixcclxuICBvbkNhbmNlbCxcclxuICBvblNhdmVcclxufSkge1xyXG4gIHZhciBfaXRlbUdldHRlciRlcnJvcnM7XHJcblxyXG4gIGNvbnN0IGZpZWxkc09iaiA9IHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZHMpO1xyXG4gIGNvbnN0IFt1cGRhdGUsIHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBlcnJvclxyXG4gIH1dID0gYXBvbGxvLnVzZU11dGF0aW9uKGFwb2xsby5ncWxgbXV0YXRpb24gKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMudXBkYXRlSW5wdXROYW1lfSEsICRpZDogSUQhKSB7XHJcbiAgICAgICAgICBpdGVtOiAke2xpc3QuZ3FsTmFtZXMudXBkYXRlTXV0YXRpb25OYW1lfShpZDogJGlkLCBkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1gLCB7XHJcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcclxuICB9KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gYWRtaW5VaVV0aWxzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpdGVtOiBpdGVtR2V0dGVyLmRhdGFcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGlmIChzdGF0ZS5pdGVtICE9PSBpdGVtR2V0dGVyLmRhdGEgJiYgKF9pdGVtR2V0dGVyJGVycm9ycyA9IGl0ZW1HZXR0ZXIuZXJyb3JzKSAhPT0gbnVsbCAmJiBfaXRlbUdldHRlciRlcnJvcnMgIT09IHZvaWQgMCAmJiBfaXRlbUdldHRlciRlcnJvcnMuZXZlcnkoeCA9PiB7XHJcbiAgICB2YXIgX3gkcGF0aDtcclxuXHJcbiAgICByZXR1cm4gKChfeCRwYXRoID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoLmxlbmd0aCkgIT09IDE7XHJcbiAgfSkpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gYWRtaW5VaVV0aWxzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcclxuICAgIHNldFZhbHVlKHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBjaGFuZ2VkRmllbGRzLFxyXG4gICAgZGF0YUZvclVwZGF0ZVxyXG4gIH0gPSBhZG1pblVpVXRpbHMudXNlQ2hhbmdlZEZpZWxkc0FuZERhdGFGb3JVcGRhdGUoZmllbGRzT2JqLCBpdGVtR2V0dGVyLCBzdGF0ZS52YWx1ZSk7XHJcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IGFkbWluVWlVdGlscy51c2VJbnZhbGlkRmllbGRzKGZpZWxkc09iaiwgc3RhdGUudmFsdWUpO1xyXG4gIGNvbnN0IFtmb3JjZVZhbGlkYXRpb24sIHNldEZvcmNlVmFsaWRhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9hc3RzID0gdG9hc3QudXNlVG9hc3RzKCk7XHJcbiAgY29uc3Qgc2F2ZUJ1dHRvblByb3BzID0ge1xyXG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nLFxyXG4gICAgd2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBzaXplOiAnc21hbGwnLFxyXG4gICAgdG9uZTogJ2FjdGl2ZScsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0ZvcmNlVmFsaWRhdGlvbiA9IGludmFsaWRGaWVsZHMuc2l6ZSAhPT0gMDtcclxuICAgICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XHJcbiAgICAgIGlmIChuZXdGb3JjZVZhbGlkYXRpb24pIHJldHVybjtcclxuICAgICAgdXBkYXRlKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGRhdGE6IGRhdGFGb3JVcGRhdGUsXHJcbiAgICAgICAgICBpZDogaXRlbUdldHRlci5nZXQoJ2lkJykuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbigoe1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgZXJyb3JzXHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xyXG4gICAgICAgIC8vIHdoaWNoIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGRvIG5vdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdG8gdXBkYXRlIHRoZSBpdGVtXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcclxuICAgICAgICAgIHZhciBfeCRwYXRoMjtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKChfeCRwYXRoMiA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgyLmxlbmd0aCkgPT09IDE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxyXG4gICAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6IGRhdGEuaXRlbVtsaXN0LmxhYmVsRmllbGRdIHx8IGRhdGEuaXRlbS5pZCxcclxuICAgICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1NhdmVkIHN1Y2Nlc3NmdWxseSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgb25TYXZlKGFkbWluVWlVdGlscy5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcclxuICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjaGlsZHJlbjogJ1NhdmUnXHJcbiAgfTtcclxuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgZ2FwOiBcInhsYXJnZVwiXHJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goY29tcG9uZW50cy5HcmFwaFFMRXJyb3JOb3RpY2UsIHtcclxuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvciAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xyXG4gICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cclxuICAgICxcclxuICAgIGVycm9yczogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnMuZmlsdGVyKHggPT4ge1xyXG4gICAgICB2YXIgX3gkcGF0aDM7XHJcblxyXG4gICAgICByZXR1cm4gKChfeCRwYXRoMyA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgzLmxlbmd0aCkgPT09IDE7XHJcbiAgICB9KVxyXG4gIH0pLCBjb3JlLmpzeChhZG1pblVpVXRpbHMuRmllbGRzLCB7XHJcbiAgICBmaWVsZE1vZGVzOiBudWxsLFxyXG4gICAgZmllbGRzOiBmaWVsZHNPYmosXHJcbiAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvbixcclxuICAgIGludmFsaWRGaWVsZHM6IGludmFsaWRGaWVsZHMsXHJcbiAgICBvbkNoYW5nZTogUmVhY3QudXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xyXG4gICAgICBzZXRWYWx1ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAgIGl0ZW06IHN0YXRlLml0ZW0sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlKHN0YXRlLnZhbHVlKVxyXG4gICAgICB9KSk7XHJcbiAgICB9LCBbc2V0VmFsdWVdKSxcclxuICAgIHZhbHVlOiBzdGF0ZS52YWx1ZVxyXG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBhY3Jvc3M6IHRydWUsXHJcbiAgICBnYXA6IFwic21hbGxcIlxyXG4gIH0sIGNoYW5nZWRGaWVsZHMuc2l6ZSA/IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHNhdmVCdXR0b25Qcm9wcykgOiBjb3JlLmpzeCh0b29sdGlwLlRvb2x0aXAsIHtcclxuICAgIGNvbnRlbnQ6IFwiTm8gZmllbGRzIGhhdmUgYmVlbiBtb2RpZmllZCBzbyB5b3UgY2Fubm90IHNhdmUgY2hhbmdlc1wiXHJcbiAgfSwgcHJvcHMgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIHByb3BzLCBzYXZlQnV0dG9uUHJvcHMsIHtcclxuICAgIC8vIG1ha2luZyBvbkNsaWNrIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIG1ha2luZyB0aGUgYnV0dG9uIGRpc2FibGVkIHNvIHRoZSBidXR0b24gY2FuIGJlIGZvY3Vzc2VkIHNvIGtleWJvYXJkIHVzZXJzIGNhbiBzZWUgdGhlIHRvb2x0aXBcclxuICAgIG9uQ2xpY2s6IHVuZGVmaW5lZFxyXG4gIH0pKSksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIHdlaWdodDogXCJub25lXCIsXHJcbiAgICBvbkNsaWNrOiBvbkNhbmNlbFxyXG4gIH0sIFwiQ2FuY2VsXCIpKSk7XHJcbn1cclxuXHJcbi8qIEBqc3gganN4ICovXHJcbmZ1bmN0aW9uIElubGluZUNyZWF0ZSh7XHJcbiAgbGlzdCxcclxuICBvbkNhbmNlbCxcclxuICBvbkNyZWF0ZSxcclxuICBmaWVsZHM6IGZpZWxkUGF0aHMsXHJcbiAgc2VsZWN0ZWRGaWVsZHNcclxufSkge1xyXG4gIGNvbnN0IHRvYXN0cyA9IHRvYXN0LnVzZVRvYXN0cygpO1xyXG4gIGNvbnN0IGZpZWxkcyA9IHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZFBhdGhzKTtcclxuICBjb25zdCBbY3JlYXRlSXRlbSwge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yXHJcbiAgfV0gPSBhcG9sbG8udXNlTXV0YXRpb24oYXBvbGxvLmdxbGBtdXRhdGlvbigkZGF0YTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZUlucHV0TmFtZX0hKSB7XHJcbiAgICAgIGl0ZW06ICR7bGlzdC5ncWxOYW1lcy5jcmVhdGVNdXRhdGlvbk5hbWV9KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cclxuICAgIH1cclxuICB9YCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XHJcbiAgICAgIHZhbHVlW2ZpZWxkUGF0aF0gPSB7XHJcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcclxuICAgICAgICB2YWx1ZTogZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci5kZWZhdWx0VmFsdWVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGludmFsaWRGaWVsZHMgPSBhZG1pblVpVXRpbHMudXNlSW52YWxpZEZpZWxkcyhmaWVsZHMsIHZhbHVlKTtcclxuICBjb25zdCBbZm9yY2VWYWxpZGF0aW9uLCBzZXRGb3JjZVZhbGlkYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9yY2VWYWxpZGF0aW9uID0gaW52YWxpZEZpZWxkcy5zaXplICE9PSAwO1xyXG4gICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XHJcbiAgICBpZiAobmV3Rm9yY2VWYWxpZGF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICBjb25zdCBhbGxTZXJpYWxpemVkVmFsdWVzID0gYWRtaW5VaVV0aWxzLnNlcmlhbGl6ZVZhbHVlVG9PYmpCeUZpZWxkS2V5KGZpZWxkcywgdmFsdWUpO1xyXG4gICAgT2JqZWN0LmtleXMoYWxsU2VyaWFsaXplZFZhbHVlcykuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgY29udHJvbGxlclxyXG4gICAgICB9ID0gZmllbGRzW2ZpZWxkUGF0aF07XHJcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBhbGxTZXJpYWxpemVkVmFsdWVzW2ZpZWxkUGF0aF07XHJcblxyXG4gICAgICBpZiAoIWlzRGVlcEVxdWFsX19kZWZhdWx0WydkZWZhdWx0J10oc2VyaWFsaXplZCwgY29udHJvbGxlci5zZXJpYWxpemUoY29udHJvbGxlci5kZWZhdWx0VmFsdWUpKSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgc2VyaWFsaXplZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY3JlYXRlSXRlbSh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGRhdGFcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigoe1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBlcnJvcnNcclxuICAgIH0pID0+IHtcclxuICAgICAgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcclxuICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cclxuICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcclxuICAgICAgICB2YXIgX3gkcGF0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuICgoX3gkcGF0aCA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aC5sZW5ndGgpID09PSAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byBjcmVhdGUgaXRlbScsXHJcbiAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxyXG4gICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb25DcmVhdGUoYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycykuZ2V0KCdpdGVtJykpO1xyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcclxuICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJ4bGFyZ2VcIlxyXG4gIH0sIGVycm9yICYmIGNvcmUuanN4KGNvbXBvbmVudHMuR3JhcGhRTEVycm9yTm90aWNlLCB7XHJcbiAgICBuZXR3b3JrRXJyb3I6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5uZXR3b3JrRXJyb3IsXHJcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXHJcbiAgfSksIGNvcmUuanN4KGFkbWluVWlVdGlscy5GaWVsZHMsIHtcclxuICAgIGZpZWxkTW9kZXM6IG51bGwsXHJcbiAgICBmaWVsZHM6IGZpZWxkcyxcclxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxyXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcclxuICAgIG9uQ2hhbmdlOiBzZXRWYWx1ZSxcclxuICAgIHZhbHVlOiB2YWx1ZVxyXG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwic21hbGxcIixcclxuICAgIGFjcm9zczogdHJ1ZVxyXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIGlzTG9hZGluZzogbG9hZGluZyxcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIHRvbmU6IFwicG9zaXRpdmVcIixcclxuICAgIHdlaWdodDogXCJib2xkXCIsXHJcbiAgICBvbkNsaWNrOiBvbkNyZWF0ZUNsaWNrXHJcbiAgfSwgXCJDcmVhdGUgXCIsIGxpc3Quc2luZ3VsYXIpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxyXG4gICAgb25DbGljazogb25DYW5jZWxcclxuICB9LCBcIkNhbmNlbFwiKSkpO1xyXG59XHJcblxyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gKF9yZWYpID0+IHtcclxuICBsZXQge1xyXG4gICAgbW9kZSA9ICd2aWV3J1xyXG4gIH0gPSBfcmVmLFxyXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJtb2RlXCJdKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdG9uZXNcclxuICB9ID0gY29yZS51c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHRvbmUgPSB0b25lc1ttb2RlID09PSAnZWRpdCcgPyAnYWN0aXZlJyA6IG1vZGUgPT09ICdjcmVhdGUnID8gJ3Bvc2l0aXZlJyA6ICdwYXNzaXZlJ107XHJcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuQm94LCBfZXh0ZW5kcyh7XHJcbiAgICBwYWRkaW5nTGVmdDogXCJ4bGFyZ2VcIixcclxuICAgIGNzczoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgICAgY29udGVudDogJ1wiIFwiJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvbmUuYm9yZGVyLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgICB3aWR0aDogNCxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgekluZGV4OiAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBwcm9wcykpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQ2FyZHMoe1xyXG4gIGxvY2FsTGlzdCxcclxuICBmaWVsZCxcclxuICBmb3JlaWduTGlzdCxcclxuICBpZCxcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBmb3JjZVZhbGlkYXRpb25cclxufSkge1xyXG4gIHZhciBfZmllbGQkZGlzcGxheSRpbmxpbmU7XHJcblxyXG4gIGxldCBzZWxlY3RlZEZpZWxkcyA9IFsuLi5uZXcgU2V0KFsuLi5maWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMsIC4uLigoKF9maWVsZCRkaXNwbGF5JGlubGluZSA9IGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdCkgPT09IG51bGwgfHwgX2ZpZWxkJGRpc3BsYXkkaW5saW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkZGlzcGxheSRpbmxpbmUuZmllbGRzKSB8fCBbXSldKV0ubWFwKGZpZWxkUGF0aCA9PiB7XHJcbiAgICByZXR1cm4gZm9yZWlnbkxpc3QuZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci5ncmFwaHFsU2VsZWN0aW9uO1xyXG4gIH0pLmpvaW4oJ1xcbicpO1xyXG5cclxuICBpZiAoIWZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcy5pbmNsdWRlcygnaWQnKSkge1xyXG4gICAgc2VsZWN0ZWRGaWVsZHMgKz0gJ1xcbmlkJztcclxuICB9XHJcblxyXG4gIGlmICghZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLmluY2x1ZGVzKGZvcmVpZ25MaXN0LmxhYmVsRmllbGQpICYmIGZvcmVpZ25MaXN0LmxhYmVsRmllbGQgIT09ICdpZCcpIHtcclxuICAgIHNlbGVjdGVkRmllbGRzICs9IGBcXG4ke2ZvcmVpZ25MaXN0LmxhYmVsRmllbGR9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zLFxyXG4gICAgc2V0SXRlbXMsXHJcbiAgICBzdGF0ZTogaXRlbXNTdGF0ZVxyXG4gIH0gPSB1c2VJdGVtU3RhdGUoe1xyXG4gICAgc2VsZWN0ZWRGaWVsZHMsXHJcbiAgICBsb2NhbExpc3QsXHJcbiAgICBpZCxcclxuICAgIGZpZWxkXHJcbiAgfSk7XHJcbiAgY29uc3QgY2xpZW50ID0gYXBvbGxvLnVzZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmdMYXp5SXRlbXMsIHNldElzTG9hZGluZ0xhenlJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb25uZWN0SXRlbXMsIHNldFNob3dDb25uZWN0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoaWRlQ29ubmVjdEl0ZW1zTGFiZWwsIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZSgnQ2FuY2VsJyk7XHJcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdsb2FkaW5nJykge1xyXG4gICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIGNvcmUuanN4KGxvYWRpbmcuTG9hZGluZ0RvdHMsIHtcclxuICAgICAgbGFiZWw6IGBMb2FkaW5nIGl0ZW1zIGZvciAke2ZpZWxkLmxhYmVsfSBmaWVsZGBcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdlcnJvcicpIHtcclxuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwge1xyXG4gICAgICBjc3M6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgfVxyXG4gICAgfSwgaXRlbXNTdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwieGxhcmdlXCJcclxuICB9LCBbLi4udmFsdWUuY3VycmVudElkc10ubWFwKGlkID0+IHtcclxuICAgIGNvbnN0IGl0ZW1HZXR0ZXIgPSBpdGVtc1tpZF07XHJcbiAgICByZXR1cm4gdmFsdWUuaXRlbXNCZWluZ0VkaXRlZC5oYXMoaWQpICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XHJcbiAgICAgIG1vZGU6IFwiZWRpdFwiLFxyXG4gICAgICBrZXk6IGlkXHJcbiAgICB9LCBjb3JlLmpzeChJbmxpbmVFZGl0LCB7XHJcbiAgICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxyXG4gICAgICBmaWVsZHM6IGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdC5maWVsZHMsXHJcbiAgICAgIG9uU2F2ZTogbmV3SXRlbUdldHRlciA9PiB7XHJcbiAgICAgICAgc2V0SXRlbXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyksIHt9LCB7XHJcbiAgICAgICAgICBbaWRdOiBuZXdJdGVtR2V0dGVyXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQmVpbmdFZGl0ZWQgPSBuZXcgU2V0KHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpO1xyXG4gICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQuZGVsZXRlKGlkKTtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWRcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcclxuICAgICAgaXRlbUdldHRlcjogaXRlbUdldHRlcixcclxuICAgICAgb25DYW5jZWw6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtc0JlaW5nRWRpdGVkID0gbmV3IFNldCh2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkKTtcclxuICAgICAgICBpdGVtc0JlaW5nRWRpdGVkLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KSkgOiBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XHJcbiAgICAgIG1vZGU6IFwidmlld1wiLFxyXG4gICAgICBrZXk6IGlkXHJcbiAgICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICAgIGdhcDogXCJ4bGFyZ2VcIlxyXG4gICAgfSwgZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLm1hcChmaWVsZFBhdGggPT4ge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xyXG4gICAgICBjb25zdCBpdGVtRm9yRmllbGQgPSB7fTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgZ3JhcGhxbEZpZWxkIG9mIGFkbWluVWlVdGlscy5nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXIoZmllbGQuY29udHJvbGxlcikpIHtcclxuICAgICAgICBjb25zdCBmaWVsZEdldHRlciA9IGl0ZW1HZXR0ZXIuZ2V0KGdyYXBocWxGaWVsZCk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZEdldHRlci5lcnJvcnMpIHtcclxuICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGZpZWxkR2V0dGVyLmVycm9yc1swXS5tZXNzYWdlO1xyXG4gICAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW1Gb3JGaWVsZFtncmFwaHFsRmllbGRdID0gZmllbGRHZXR0ZXIuZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkLnZpZXdzLkNhcmRWYWx1ZSwge1xyXG4gICAgICAgIGtleTogZmllbGRQYXRoLFxyXG4gICAgICAgIGZpZWxkOiBmaWVsZC5jb250cm9sbGVyLFxyXG4gICAgICAgIGl0ZW06IGl0ZW1Gb3JGaWVsZFxyXG4gICAgICB9KTtcclxuICAgIH0pKSwgY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgICBhY3Jvc3M6IHRydWUsXHJcbiAgICAgIGdhcDogXCJzbWFsbFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwieGxhcmdlXCJcclxuICAgIH0sIGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdCAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZDogbmV3IFNldChbLi4udmFsdWUuaXRlbXNCZWluZ0VkaXRlZCwgaWRdKVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSxcclxuICAgICAgdG9uZTogXCJhY3RpdmVcIlxyXG4gICAgfSwgXCJFZGl0XCIpLCBmaWVsZC5kaXNwbGF5LnJlbW92ZU1vZGUgPT09ICdkaXNjb25uZWN0JyAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KHRvb2x0aXAuVG9vbHRpcCwge1xyXG4gICAgICBjb250ZW50OiBcIlRoaXMgaXRlbSB3aWxsIG5vdCBiZSBkZWxldGVkLiBJdCB3aWxsIG9ubHkgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZmllbGQuXCJcclxuICAgIH0sIHByb3BzID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHtcclxuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJZHMgPSBuZXcgU2V0KHZhbHVlLmN1cnJlbnRJZHMpO1xyXG4gICAgICAgIGN1cnJlbnRJZHMuZGVsZXRlKGlkKTtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIGN1cnJlbnRJZHNcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHByb3BzLCB7XHJcbiAgICAgIHRvbmU6IFwibmVnYXRpdmVcIlxyXG4gICAgfSksIFwiUmVtb3ZlXCIpKSwgZmllbGQuZGlzcGxheS5saW5rVG9JdGVtICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICB3ZWlnaHQ6IFwibGlua1wiLFxyXG4gICAgICB0b25lOiBcImFjdGl2ZVwiLFxyXG4gICAgICBjc3M6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzOiByb3V0ZXIuTGluayxcclxuICAgICAgaHJlZjogYC8ke2ZvcmVpZ25MaXN0LnBhdGh9LyR7aWR9YFxyXG4gICAgfSwgXCJWaWV3IFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciwgXCIgZGV0YWlsc1wiKSkpO1xyXG4gIH0pLCBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCAmJiBzaG93Q29ubmVjdEl0ZW1zID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xyXG4gICAgbW9kZTogXCJlZGl0XCJcclxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwic21hbGxcIixcclxuICAgIG1hcmdpblk6IFwibWVkaXVtXCIsXHJcbiAgICBhY3Jvc3M6IHRydWVcclxuICB9LCBjb3JlLmpzeCh0eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3RfZmllbGRzLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBpc0xvYWRpbmdMYXp5SXRlbXMsXHJcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ0xhenlJdGVtcyxcclxuICAgIHBsYWNlaG9sZGVyOiBgU2VsZWN0IGEgJHtmb3JlaWduTGlzdC5zaW5ndWxhcn1gLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAga2luZDogJ21hbnknLFxyXG5cclxuICAgICAgYXN5bmMgb25DaGFuZ2Uob3B0aW9ucykge1xyXG4gICAgICAgIC8vIFRPRE86IG1heWJlIHVzZSB0aGUgZXh0cmFTZWxlY3Rpb24gcHJvcCBvbiBSZWxhdGlvbnNoaXBTZWxlY3QgaGVyZVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QgPSBbXTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXZhbHVlLmN1cnJlbnRJZHMuaGFzKGl0ZW0uaWQpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QucHVzaChpdGVtLmlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICBlcnJvcnNcclxuICAgICAgICAgICAgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgICAgICAgcXVlcnk6IGFwb2xsby5ncWxgcXVlcnkgKCRpZHM6IFtJRCFdISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICR7Zm9yZWlnbkxpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6IHtpZF9pbjokaWRzfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaWRzOiBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFHZXR0ZXJzID0gYWRtaW5VaVV0aWxzLm1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbXNEYXRhR2V0dGVyID0gZGF0YUdldHRlcnMuZ2V0KCdpdGVtcycpO1xyXG5cclxuICAgICAgICAgICAgICBsZXQgbmV3SXRlbXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBuZXdDdXJyZW50SWRzID0gZmllbGQubWFueSA/IG5ldyBTZXQodmFsdWUuY3VycmVudElkcykgOiBuZXcgU2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zRGF0YUdldHRlci5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNEYXRhR2V0dGVyLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5pZCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1cnJlbnRJZHMuYWRkKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2l0ZW0uaWRdID0gaXRlbXNEYXRhR2V0dGVyLmdldChpKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAobmV3Q3VycmVudElkcy5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgICAgICAgICAgY3VycmVudElkczogbmV3Q3VycmVudElkc1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlkZUNvbm5lY3RJdGVtc0xhYmVsKCdEb25lJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdMYXp5SXRlbXMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgdmFsdWU6ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgICBpZiAodmFsdWUuY3VycmVudElkcy5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgICB9KSgpXHJcbiAgICB9XHJcbiAgfSksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dDb25uZWN0SXRlbXMoZmFsc2UpXHJcbiAgfSwgaGlkZUNvbm5lY3RJdGVtc0xhYmVsKSkpIDogdmFsdWUuaXRlbUJlaW5nQ3JlYXRlZCA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcclxuICAgIG1vZGU6IFwiY3JlYXRlXCJcclxuICB9LCBjb3JlLmpzeChJbmxpbmVDcmVhdGUsIHtcclxuICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcclxuICAgIGZpZWxkczogZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUuZmllbGRzLFxyXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICBvbkNhbmNlbDogKCkgPT4ge1xyXG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZVxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25DcmVhdGU6IGl0ZW1HZXR0ZXIgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGl0ZW1HZXR0ZXIuZGF0YS5pZDtcclxuICAgICAgc2V0SXRlbXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyksIHt9LCB7XHJcbiAgICAgICAgW2lkXTogaXRlbUdldHRlclxyXG4gICAgICB9KSk7XHJcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGN1cnJlbnRJZHM6IGZpZWxkLm1hbnkgPyBuZXcgU2V0KFsuLi52YWx1ZS5jdXJyZW50SWRzLCBpZF0pIDogbmV3IFNldChbaWRdKVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfSkpIDogZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgfHwgZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xyXG4gICAgbW9kZTogXCJjcmVhdGVcIlxyXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJzbWFsbFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIm1lZGl1bVwiLFxyXG4gICAgYWNyb3NzOiB0cnVlXHJcbiAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXHJcbiAgICB0b25lOiBcInBvc2l0aXZlXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IHRydWVcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH0sIFwiQ3JlYXRlIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciksIGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxyXG4gICAgdG9uZTogXCJwYXNzaXZlXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIHNldFNob3dDb25uZWN0SXRlbXModHJ1ZSk7XHJcbiAgICAgIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbCgnQ2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfSwgXCJMaW5rIGV4aXN0aW5nIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhcikpKSA6IG51bGwsIGZvcmNlVmFsaWRhdGlvbiAmJiBjb3JlLmpzeChjb3JlLlRleHQsIHtcclxuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxyXG4gICAgc2l6ZTogXCJzbWFsbFwiXHJcbiAgfSwgXCJZb3UgbXVzdCBmaW5pc2ggY3JlYXRpbmcgYW5kIGVkaXRpbmcgYW55IHJlbGF0ZWQgXCIsIGZvcmVpZ25MaXN0LmxhYmVsLnRvTG93ZXJDYXNlKCksIFwiIGJlZm9yZSBzYXZpbmcgdGhlIFwiLCBsb2NhbExpc3Quc2luZ3VsYXIudG9Mb3dlckNhc2UoKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaW5rVG9SZWxhdGVkSXRlbXMoe1xyXG4gIHZhbHVlLFxyXG4gIGxpc3RcclxufSkge1xyXG4gIHZhciBfdmFsdWUkdmFsdWU7XHJcblxyXG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xyXG4gICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgIHRvbmU6ICdhY3RpdmUnLFxyXG4gICAgd2VpZ2h0OiAnbGluaydcclxuICB9O1xyXG5cclxuICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XHJcbiAgICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XHJcbiAgICAgIGFzOiByb3V0ZXIuTGluayAvLyBXaGF0IGhhcHBlbnMgd2hlbiB0aGVyZSBhcmUgMTAsMDAwIGlkcz8gVGhlIFVSTCB3b3VsZCBiZSB0b29cclxuICAgICAgLy8gYmlnLCBzbyB3ZSBhcmJpdHJhcmlseSBsaW1pdCBpdCB0byB0aGUgZmlyc3QgMTAwXHJcbiAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBiZSBhYmxlIHRvIGZpbHRlciBieSB0aGlzLCBubz9cclxuICAgICAgLFxyXG4gICAgICBocmVmOiBgLyR7bGlzdC5wYXRofT8haWRfaW49XCIke3ZhbHVlLnZhbHVlLnNsaWNlKDAsIDEwMCkubWFwKCh7XHJcbiAgICAgICAgaWRcclxuICAgICAgfSkgPT4gaWQpLmpvaW4oJywnKX1cImBcclxuICAgIH0pLCBcIlZpZXcgcmVsYXRlZCBcIiwgbGlzdC5wbHVyYWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xyXG4gICAgYXM6IHJvdXRlci5MaW5rLFxyXG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vJHsoX3ZhbHVlJHZhbHVlID0gdmFsdWUudmFsdWUpID09PSBudWxsIHx8IF92YWx1ZSR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ZhbHVlJHZhbHVlLmlkfWBcclxuICB9KSwgXCJWaWV3IFwiLCBsaXN0LnNpbmd1bGFyLCBcIiBkZXRhaWxzXCIpO1xyXG59XHJcblxyXG5jb25zdCBSZWxhdGlvbnNoaXBMaW5rQnV0dG9uID0gKHtcclxuICBocmVmLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICBjc3M6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgd2VpZ2h0OiBcImxpbmtcIixcclxuICB0b25lOiBcImFjdGl2ZVwiLFxyXG4gIGFzOiByb3V0ZXIuTGluayxcclxuICBocmVmOiBocmVmXHJcbn0sIGNoaWxkcmVuKTtcclxuXHJcbmNvbnN0IFJlbGF0aW9uc2hpcERpc3BsYXkgPSAoe1xyXG4gIGxpc3QsXHJcbiAgdmFsdWVcclxufSkgPT4ge1xyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcclxuICAgIGlmICh2YWx1ZS52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XHJcbiAgICAgICAgZ2FwOiBcInNtYWxsXCJcclxuICAgICAgfSwgdmFsdWUudmFsdWUubWFwKGkgPT4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xyXG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7aS5pZH1gXHJcbiAgICAgIH0sIGkubGFiZWwpKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3QucGx1cmFsLCBcIilcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh2YWx1ZS52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xyXG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7dmFsdWUudmFsdWUuaWR9YFxyXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5sYWJlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3Quc2luZ3VsYXIsIFwiKVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZCA9ICh7XHJcbiAgZmllbGQsXHJcbiAgYXV0b0ZvY3VzLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGZvcmNlVmFsaWRhdGlvblxyXG59KSA9PiB7XHJcbiAgY29uc3Qga2V5c3RvbmUgPSBjb250ZXh0LnVzZUtleXN0b25lKCk7XHJcbiAgY29uc3QgZm9yZWlnbkxpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XHJcbiAgY29uc3QgbG9jYWxMaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLmxpc3RLZXkpO1xyXG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnY2FyZHMtdmlldycpIHtcclxuICAgIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICAgIGFzOiBcImZpZWxkc2V0XCIsXHJcbiAgICAgIGdhcDogXCJtZWRpdW1cIlxyXG4gICAgfSwgY29yZS5qc3goZmllbGRzLkZpZWxkTGVnZW5kLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KENhcmRzLCB7XHJcbiAgICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxyXG4gICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgIGlkOiB2YWx1ZS5pZCxcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXHJcbiAgICAgIGZvcmVpZ25MaXN0OiBmb3JlaWduTGlzdCxcclxuICAgICAgbG9jYWxMaXN0OiBsb2NhbExpc3RcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCB7XHJcbiAgICBhczogXCJsZWdlbmRcIlxyXG4gIH0sIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgZ2FwOiBcIm1lZGl1bVwiXHJcbiAgfSwgY29yZS5qc3godHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2ZpZWxkcy5SZWxhdGlvbnNoaXBTZWxlY3QsIHtcclxuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcclxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxyXG4gICAgc3RhdGU6IHZhbHVlLmtpbmQgPT09ICdtYW55JyA/IHtcclxuICAgICAga2luZDogJ21hbnknLFxyXG4gICAgICB2YWx1ZTogdmFsdWUudmFsdWUsXHJcblxyXG4gICAgICBvbkNoYW5nZShuZXdJdGVtcykge1xyXG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgdmFsdWU6IG5ld0l0ZW1zXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSA6IHtcclxuICAgICAga2luZDogJ29uZScsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcclxuXHJcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbCkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnb25lJykge1xyXG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGFjcm9zczogdHJ1ZSxcclxuICAgIGdhcDogXCJzbWFsbFwiXHJcbiAgfSwgIWZpZWxkLmhpZGVDcmVhdGUgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgZGlzYWJsZWQ6IGlzRHJhd2VyT3BlbixcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgc2V0SXNEcmF3ZXJPcGVuKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFwiQ3JlYXRlIHJlbGF0ZWQgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSwga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0uc3RhdGUgPT09ICdhdXRoZW50aWNhdGVkJyAmJiBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5saXN0S2V5ID09PSBmaWVsZC5yZWZMaXN0S2V5ICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIGlmIChrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0ge1xyXG4gICAgICAgICAgbGFiZWw6IGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxhYmVsLFxyXG4gICAgICAgICAgaWQ6IGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmlkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xyXG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBbLi4udmFsdWUudmFsdWUsIHZhbF1cclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCB2YWx1ZS5raW5kID09PSAnbWFueScgPyAnQWRkICcgOiAnU2V0IGFzICcsIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxhYmVsKSwgISEodmFsdWUua2luZCA9PT0gJ21hbnknID8gdmFsdWUudmFsdWUubGVuZ3RoIDogdmFsdWUua2luZCA9PT0gJ29uZScgJiYgdmFsdWUudmFsdWUpICYmIGNvcmUuanN4KExpbmtUb1JlbGF0ZWRJdGVtcywge1xyXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICB2YWx1ZTogdmFsdWVcclxuICB9KSkpLCBjb3JlLmpzeChtb2RhbHMuRHJhd2VyQ29udHJvbGxlciwge1xyXG4gICAgaXNPcGVuOiBpc0RyYXdlck9wZW5cclxuICB9LCBjb3JlLmpzeChjb21wb25lbnRzLkNyZWF0ZUl0ZW1EcmF3ZXIsIHtcclxuICAgIGxpc3RLZXk6IGZvcmVpZ25MaXN0LmtleSxcclxuICAgIG9uQ2xvc2U6ICgpID0+IHtcclxuICAgICAgc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBvbkNyZWF0ZTogdmFsID0+IHtcclxuICAgICAgc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIHZhbHVlOiBbLi4udmFsdWUudmFsdWUsIHZhbF1cclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUua2luZCA9PT0gJ29uZScpIHtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIHZhbHVlOiB2YWxcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KSkpIDogY29yZS5qc3goUmVsYXRpb25zaGlwRGlzcGxheSwge1xyXG4gICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgbGlzdDogZm9yZWlnbkxpc3RcclxuICB9KSk7XHJcbn07XHJcbmNvbnN0IENlbGwgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGl0ZW1cclxufSkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBjb250ZXh0LnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XHJcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XHJcbiAgY29uc3QgaXRlbXMgPSAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xyXG4gIGNvbnN0IGRpc3BsYXlJdGVtcyA9IGl0ZW1zLmxlbmd0aCA8IDUgPyBpdGVtcyA6IGl0ZW1zLnNsaWNlKDAsIDMpO1xyXG4gIGNvbnN0IG92ZXJmbG93ID0gaXRlbXMubGVuZ3RoIDwgNSA/IDAgOiBpdGVtcy5sZW5ndGggLSAzO1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yc1xyXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY29sb3I6IGNvbG9ycy5mb3JlZ3JvdW5kLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgZGlzcGxheUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCB7XHJcbiAgICBrZXk6IGl0ZW0uaWRcclxuICB9LCAhIWluZGV4ID8gJywgJyA6ICcnLCBjb3JlLmpzeChyb3V0ZXIuTGluaywge1xyXG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXHJcbiAgICBhczogYC8ke2xpc3QucGF0aH0vJHtpdGVtLmlkfWAsXHJcbiAgICBjc3M6IHN0eWxlc1xyXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSwgb3ZlcmZsb3cgPyBgLCBhbmQgJHtvdmVyZmxvd30gbW9yZWAgOiBudWxsKTtcclxufTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBmaWVsZCxcclxuICBpdGVtXHJcbn0pID0+IHtcclxuICBjb25zdCBsaXN0ID0gY29udGV4dC51c2VMaXN0KGZpZWxkLnJlZkxpc3RLZXkpO1xyXG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcclxuICAgIGtleTogaXRlbS5pZFxyXG4gIH0sICEhaW5kZXggPyAnLCAnIDogJycsIGNvcmUuanN4KHJvdXRlci5MaW5rLCB7XHJcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS9baWRdYCxcclxuICAgIGFzOiBgLyR7bGlzdC5wYXRofS8ke2l0ZW0uaWR9YFxyXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSk7XHJcbn07XHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBtYW55OiBjb25maWcuZmllbGRNZXRhLm1hbnksXHJcbiAgICBsaXN0S2V5OiBjb25maWcubGlzdEtleSxcclxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxyXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcclxuICAgIGRpc3BsYXk6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjYXJkcycgPyB7XHJcbiAgICAgIG1vZGU6ICdjYXJkcycsXHJcbiAgICAgIGNhcmRGaWVsZHM6IGNvbmZpZy5maWVsZE1ldGEuY2FyZEZpZWxkcyxcclxuICAgICAgaW5saW5lQ3JlYXRlOiBjb25maWcuZmllbGRNZXRhLmlubGluZUNyZWF0ZSxcclxuICAgICAgaW5saW5lRWRpdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVFZGl0LFxyXG4gICAgICBsaW5rVG9JdGVtOiBjb25maWcuZmllbGRNZXRhLmxpbmtUb0l0ZW0sXHJcbiAgICAgIHJlbW92ZU1vZGU6IGNvbmZpZy5maWVsZE1ldGEucmVtb3ZlTW9kZSxcclxuICAgICAgaW5saW5lQ29ubmVjdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVDb25uZWN0XHJcbiAgICB9IDoge1xyXG4gICAgICBtb2RlOiAnc2VsZWN0JyxcclxuICAgICAgcmVmTGFiZWxGaWVsZDogY29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkXHJcbiAgICB9LFxyXG4gICAgcmVmTGlzdEtleTogY29uZmlnLmZpZWxkTWV0YS5yZWZMaXN0S2V5LFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJyA/IC8vIFRPRE86IG5hbWVzcGFjZSB0aGlzIHN0dWZmIGF0IHRoZSBLZXlzdG9uZSBsZXZlbFxyXG4gICAgYCR7Y29uZmlnLnBhdGh9X19pZDogaWRcclxuICAgICAgICAgICAke2NvbmZpZy5wYXRofSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgfWAgOiBgJHtjb25maWcucGF0aH0ge1xyXG4gICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgIGxhYmVsOiAke2NvbmZpZy5maWVsZE1ldGEucmVmTGFiZWxGaWVsZH1cclxuICAgICAgICAgICB9YCxcclxuICAgIGhpZGVDcmVhdGU6IGNvbmZpZy5maWVsZE1ldGEuaGlkZUNyZWF0ZSxcclxuICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnLmZpZWxkTWV0YS5tYW55ID8ge1xyXG4gICAgICBraW5kOiAnbWFueScsXHJcbiAgICAgIGluaXRpYWxWYWx1ZTogW10sXHJcbiAgICAgIHZhbHVlOiBbXVxyXG4gICAgfSA6IHtcclxuICAgICAga2luZDogJ29uZScsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBpbml0aWFsVmFsdWU6IG51bGxcclxuICAgIH0sXHJcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XHJcbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnKSB7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbElkcyA9IG5ldyBTZXQoKEFycmF5LmlzQXJyYXkoZGF0YVtjb25maWcucGF0aF0pID8gZGF0YVtjb25maWcucGF0aF0gOiBkYXRhW2NvbmZpZy5wYXRoXSA/IFtkYXRhW2NvbmZpZy5wYXRoXV0gOiBbXSkubWFwKHggPT4geC5pZCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBraW5kOiAnY2FyZHMtdmlldycsXHJcbiAgICAgICAgICBpZDogZGF0YVtgJHtjb25maWcucGF0aH1fX2lkYF0sXHJcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGluaXRpYWxJZHMsXHJcbiAgICAgICAgICBjdXJyZW50SWRzOiBpbml0aWFsSWRzXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IChkYXRhW2NvbmZpZy5wYXRoXSB8fCBbXSkubWFwKHggPT4gKHtcclxuICAgICAgICAgIGlkOiB4LmlkLFxyXG4gICAgICAgICAgbGFiZWw6IHgubGFiZWwgfHwgeC5pZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ21hbnknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XHJcblxyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZS5pZCxcclxuICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS5pZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogJ29uZScsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlOiB2YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUua2luZCAhPT0gJ2NhcmRzLXZpZXcnIHx8IHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQuc2l6ZSA9PT0gMCAmJiAhdmFsdWUuaXRlbUJlaW5nQ3JlYXRlZDtcclxuICAgIH0sXHJcblxyXG4gICAgc2VyaWFsaXplOiBzdGF0ZSA9PiB7XHJcbiAgICAgIGlmIChzdGF0ZS5raW5kID09PSAnbWFueScpIHtcclxuICAgICAgICBjb25zdCBuZXdBbGxJZHMgPSBuZXcgU2V0KHN0YXRlLnZhbHVlLm1hcCh4ID0+IHguaWQpKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsSWRzID0gbmV3IFNldChzdGF0ZS5pbml0aWFsVmFsdWUubWFwKHggPT4geC5pZCkpO1xyXG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gc3RhdGUuaW5pdGlhbFZhbHVlLmZpbHRlcih4ID0+ICFuZXdBbGxJZHMuaGFzKHguaWQpKS5tYXAoeCA9PiAoe1xyXG4gICAgICAgICAgaWQ6IHguaWRcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgbGV0IGNvbm5lY3QgPSBzdGF0ZS52YWx1ZS5maWx0ZXIoeCA9PiAhaW5pdGlhbElkcy5oYXMoeC5pZCkpLm1hcCh4ID0+ICh7XHJcbiAgICAgICAgICBpZDogeC5pZFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoIHx8IGNvbm5lY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICBsZXQgb3V0cHV0ID0ge307XHJcblxyXG4gICAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5kaXNjb25uZWN0ID0gZGlzY29ubmVjdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoY29ubmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QgPSBjb25uZWN0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IG91dHB1dFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUua2luZCA9PT0gJ29uZScpIHtcclxuICAgICAgICB2YXIgX3N0YXRlJGluaXRpYWxWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmluaXRpYWxWYWx1ZSAmJiAhc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcclxuICAgICAgICAgICAgICBkaXNjb25uZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc3RhdGUuaW5pdGlhbFZhbHVlLmlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUudmFsdWUgJiYgc3RhdGUudmFsdWUuaWQgIT09ICgoX3N0YXRlJGluaXRpYWxWYWx1ZSA9IHN0YXRlLmluaXRpYWxWYWx1ZSkgPT09IG51bGwgfHwgX3N0YXRlJGluaXRpYWxWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGluaXRpYWxWYWx1ZS5pZCkpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcclxuICAgICAgICAgICAgICBjb25uZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc3RhdGUudmFsdWUuaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmtpbmQgPT09ICdjYXJkcy12aWV3Jykge1xyXG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gWy4uLnN0YXRlLmluaXRpYWxJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuY3VycmVudElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGxldCBjb25uZWN0ID0gWy4uLnN0YXRlLmN1cnJlbnRJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuaW5pdGlhbElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5tYW55KSB7XHJcbiAgICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGggfHwgY29ubmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0Lmxlbmd0aCA/IGNvbm5lY3QgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0Lmxlbmd0aCA/IGRpc2Nvbm5lY3QgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25uZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3RbMF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XHJcbiAgICAgICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdFswXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcclxuZXhwb3J0cy5DZWxsID0gQ2VsbDtcclxuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xyXG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIGNvbXBvbmVudHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb21wb25lbnRzJyk7XHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIHNlZ21lbnRlZENvbnRyb2wgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2wnKTtcclxuXHJcbi8qIEBqc3gganN4ICovXHJcbmNvbnN0IEZpZWxkID0gKHtcclxuICBmaWVsZCxcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBhdXRvRm9jdXNcclxufSkgPT4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3NlbGVjdCcgPyBjb3JlLmpzeChmaWVsZHMuU2VsZWN0LCB7XHJcbiAgaXNDbGVhcmFibGU6IHRydWUsXHJcbiAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXHJcbiAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcclxuICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XHJcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UodmFsdWUpO1xyXG4gIH0sXHJcbiAgdmFsdWU6IHZhbHVlLFxyXG4gIHBvcnRhbE1lbnU6IHRydWVcclxufSkgOiBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcclxuICBzZWdtZW50czogZmllbGQub3B0aW9ucy5tYXAoeCA9PiB4LmxhYmVsKSxcclxuICBzZWxlY3RlZEluZGV4OiB2YWx1ZSA/IGZpZWxkLm9wdGlvbnMuZmluZEluZGV4KHggPT4geC52YWx1ZSA9PT0gdmFsdWUudmFsdWUpIDogdW5kZWZpbmVkLFxyXG4gIG9uQ2hhbmdlOiBpbmRleCA9PiB7XHJcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZmllbGQub3B0aW9uc1tpbmRleF0pO1xyXG4gIH1cclxufSkpO1xyXG5jb25zdCBDZWxsID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkLFxyXG4gIGxpbmtUb1xyXG59KSA9PiB7XHJcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQ7XHJcblxyXG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcclxuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gdmFsdWUpKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kLmxhYmVsO1xyXG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChjb21wb25lbnRzLkNlbGxMaW5rLCBsaW5rVG8sIGxhYmVsKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgbGFiZWwpO1xyXG59O1xyXG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICB2YXIgX2ZpZWxkJG9wdGlvbnMkZmluZDI7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gKF9maWVsZCRvcHRpb25zJGZpbmQyID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gaXRlbVtmaWVsZC5wYXRoXSkpID09PSBudWxsIHx8IF9maWVsZCRvcHRpb25zJGZpbmQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kMi5sYWJlbDtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBsYWJlbCk7XHJcbn07XHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzID0gY29uZmlnLmZpZWxkTWV0YS5vcHRpb25zLm1hcCh4ID0+ICh7XHJcbiAgICBsYWJlbDogeC5sYWJlbCxcclxuICAgIHZhbHVlOiB4LnZhbHVlLnRvU3RyaW5nKClcclxuICB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxyXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcclxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxyXG4gICAgZGF0YVR5cGU6IGNvbmZpZy5maWVsZE1ldGEuZGF0YVR5cGUsXHJcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcclxuICAgIG9wdGlvbnM6IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzLFxyXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBkYXRhW2NvbmZpZy5wYXRoXSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcclxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZS50b1N0cmluZygpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XHJcbiAgICAgIHZhciBfdmFsdWUkdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjb25maWcucGF0aF06IChfdmFsdWUkdmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUudmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlIDogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGZpbHRlcjoge1xyXG4gICAgICBGaWx0ZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLk11bHRpU2VsZWN0LCB7XHJcbiAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsXHJcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ3JhcGhxbDogKHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHZhbHVlOiBvcHRpb25zXHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICBjb25zdCBpbnZlcnRlZCA9IHR5cGUgPT09ICdub3RfbWF0Y2hlcyc7XHJcblxyXG4gICAgICAgIGlmICghb3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFtgJHtjb25maWcucGF0aH0ke2ludmVydGVkID8gJ19ub3QnIDogJyd9YF06IG51bGxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc011bHRpID0gb3B0aW9ucy5sZW5ndGggPiAxO1xyXG4gICAgICAgIGxldCBrZXkgPSBjb25maWcucGF0aDtcclxuXHJcbiAgICAgICAgaWYgKGlzTXVsdGkgJiYgaW52ZXJ0ZWQpIHtcclxuICAgICAgICAgIGtleSA9IGAke2NvbmZpZy5wYXRofV9ub3RfaW5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aSkge1xyXG4gICAgICAgICAga2V5ID0gYCR7Y29uZmlnLnBhdGh9X2luYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGludmVydGVkKSB7XHJcbiAgICAgICAgICBrZXkgPSBgJHtjb25maWcucGF0aH1fbm90YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNNdWx0aSA/IG9wdGlvbnMubWFwKHggPT4geC52YWx1ZSkgOiBvcHRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgTGFiZWwoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkge1xyXG4gICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBzZXRgIDogYGhhcyBubyB2YWx1ZWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcclxuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCBpbiBbJHt2YWx1ZXN9XWAgOiBgaXMgaW4gWyR7dmFsdWVzfV1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZVswXS5sYWJlbDtcclxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBub3QgJHtvcHRpb25MYWJlbH1gIDogYGlzICR7b3B0aW9uTGFiZWx9YDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHR5cGVzOiB7XHJcbiAgICAgICAgbWF0Y2hlczoge1xyXG4gICAgICAgICAgbGFiZWw6ICdNYXRjaGVzJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdF9tYXRjaGVzOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IG1hdGNoJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcclxuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5wcm9kLmpzXCIpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZmllbGRzLmNqcy5kZXYuanNcIik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBjb21wb25lbnRzID0gcmVxdWlyZSgnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cycpO1xyXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XHJcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XHJcblxyXG4vKiBAanN4IGpzeCAqL1xyXG5jb25zdCBGaWVsZCA9ICh7XHJcbiAgZmllbGQsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgYXV0b0ZvY3VzXHJcbn0pID0+IGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3RleHRhcmVhJyA/IGNvcmUuanN4KGZpZWxkcy5UZXh0QXJlYSwge1xyXG4gIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpLFxyXG4gIHZhbHVlOiB2YWx1ZVxyXG59KSA6IGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIHtcclxuICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICB2YWx1ZTogdmFsdWVcclxufSkgOiB2YWx1ZSk7XHJcbmNvbnN0IENlbGwgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGQsXHJcbiAgbGlua1RvXHJcbn0pID0+IHtcclxuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XHJcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goY29tcG9uZW50cy5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XHJcbn07XHJcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xyXG5jb25zdCBDYXJkVmFsdWUgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGRcclxufSkgPT4ge1xyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xyXG59O1xyXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXHJcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxyXG4gICAgZGlzcGxheU1vZGU6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUsXHJcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJztcclxuICAgIH0sXHJcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+ICh7XHJcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlXHJcbiAgICB9KSxcclxuICAgIGZpbHRlcjoge1xyXG4gICAgICBGaWx0ZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xyXG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXHJcbiAgICAgICAgICBhdXRvRm9jdXM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGdyYXBocWw6ICh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdHlwZSA9PT0gJ2lzX2knID8gYCR7Y29uZmlnLnBhdGh9X2lgIDogYCR7Y29uZmlnLnBhdGh9XyR7dHlwZX1gO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgTGFiZWwoe1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH0pIHtcclxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06IFwiJHt2YWx1ZX1cImA7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB0eXBlczoge1xyXG4gICAgICAgIGNvbnRhaW5zX2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnQ29udGFpbnMnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X2NvbnRhaW5zX2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgY29udGFpbicsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc19pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRzX3dpdGhfaToge1xyXG4gICAgICAgICAgbGFiZWw6ICdTdGFydHMgd2l0aCcsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3Rfc3RhcnRzX3dpdGhfaToge1xyXG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBzdGFydCB3aXRoJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZHNfd2l0aF9pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0VuZHMgd2l0aCcsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3RfZW5kc193aXRoX2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgZW5kIHdpdGgnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcclxuZXhwb3J0cy5DZWxsID0gQ2VsbDtcclxuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xyXG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGRhdGVGbnMgPSByZXF1aXJlKCdkYXRlLWZucycpO1xyXG52YXIgY29tcG9uZW50cyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS1uZXh0L2FkbWluLXVpL2NvbXBvbmVudHMnKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xyXG5cclxuY29uc3QgZ2V0VGltZSA9IHRpbWVWYWx1ZSA9PiB7XHJcbiAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBbMCwgMF07XHJcbiAgcmV0dXJuIHRpbWVWYWx1ZS5zcGxpdCgnOicpLm1hcChuID0+IE51bWJlcihuKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlKSB7XHJcbiAgaWYgKCFkYXRlKSByZXR1cm4gZmFsc2U7XHJcbiAgcmV0dXJuIEJvb2xlYW4oZGF0ZUZucy5wYXJzZUlTTyhkYXRlKS50b0lTT1N0cmluZygpKTtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkVGltZSh0aW1lKSB7XHJcbiAgaWYgKCF0aW1lKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZUZucy5pc1ZhbGlkKGRhdGVGbnMucGFyc2UodGltZSwgJ0hIOm1tJywgbmV3IERhdGUoKSkpO1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRJU08odmFsdWUpIHtcclxuICB0cnkge1xyXG4gICAgLy8gdG9JU09TdHJpbmcgY29udmVydHMgb3VyIHN0cmluZyBpbnRvIHp1bHUgdGltZVxyXG4gICAgLy8gaW5zdGVhZCBvZiBjaGVja2luZyBmb3IgdGhlIHRpbWVzdGFtcCB0byBiZSBzcGVjaWZpY2FsbHkgaW4genVsdSB0aW1lXHJcbiAgICAvLyB3ZSByZWxheCB0aGUgdmFsaWRhdGlvbiBoZXJlIGEgbGl0dGxlLCB0byBqdXN0IGJlIGEgdmFsaWQgSVNPIHN0cmluZy5cclxuICAgIHJldHVybiBCb29sZWFuKGRhdGVGbnMucGFyc2VJU08oY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSkudG9JU09TdHJpbmcoKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbnN0cnVjdFRpbWVzdGFtcCh7XHJcbiAgZGF0ZVZhbHVlLFxyXG4gIHRpbWVWYWx1ZVxyXG59KSB7XHJcbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZShkYXRlVmFsdWUpO1xyXG4gIGNvbnN0IFtob3VycywgbWludXRlc10gPSBnZXRUaW1lKHRpbWVWYWx1ZSk7XHJcbiAgZm9ybWF0dGVkRGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgZm9ybWF0dGVkRGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdElTTyhmb3JtYXR0ZWREYXRlKTtcclxufVxyXG5mdW5jdGlvbiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlVmFsdWU6IHZhbHVlLFxyXG4gICAgdGltZVZhbHVlOiByZXNvbHZlSW5pdGlhbFRpbWVWYWx1ZSh2YWx1ZSlcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdE91dHB1dCh2YWx1ZSkge1xyXG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gIHJldHVybiBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlSW5pdGlhbFRpbWVWYWx1ZSh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgY29uc3QgZGF0ZSA9IHZhbHVlIHx8IGRlZmF1bHRWYWx1ZTtcclxuICBpZiAoIWRhdGUpIHJldHVybiAnJztcclxuICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XHJcbiAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgIGhvdXIxMjogZmFsc2VcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgVGltZVBpY2tlciA9ICh7XHJcbiAgYXV0b0ZvY3VzLFxyXG4gIG9uQmx1cixcclxuICBkaXNhYmxlZCxcclxuICBvbkNoYW5nZSxcclxuICBmb3JtYXQgPSAnMjRocicsXHJcbiAgdmFsdWVcclxufSkgPT4ge1xyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICAgIG1heExlbmd0aDogZm9ybWF0ID09PSAnMjRocicgPyA1IDogNyxcclxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcclxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcclxuICAgIG9uQmx1cjogb25CbHVyLFxyXG4gICAgcGxhY2Vob2xkZXI6IGZvcm1hdCA9PT0gJzI0aHInID8gJzAwOjAwJyA6ICcwMDowMGFtJyxcclxuICAgIHZhbHVlOiB2YWx1ZVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGZvcmNlVmFsaWRhdGlvblxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3RvdWNoZWRGaXJzdElucHV0LCBzZXRUb3VjaGVkRmlyc3RJbnB1dF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvdWNoZWRTZWNvbmRJbnB1dCwgc2V0VG91Y2hlZFNlY29uZElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzaG93VmFsaWRhdGlvbiA9IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dCB8fCBmb3JjZVZhbGlkYXRpb247XHJcblxyXG4gIGNvbnN0IHNob3dEYXRlRXJyb3IgPSBkYXRlVmFsdWUgPT4ge1xyXG4gICAgaWYgKCFkYXRlVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgICAgICBjc3M6IHtcclxuICAgICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgXCJQbGVhc2Ugc2VsZWN0IGEgZGF0ZSB2YWx1ZS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICFpc1ZhbGlkRGF0ZShkYXRlVmFsdWUpICYmIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgICAgY3NzOiB7XHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICAgIH1cclxuICAgIH0sIFwiSW5jb3JyZWN0IGRhdGUgdmFsdWVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1RpbWVFcnJvciA9IHRpbWVWYWx1ZSA9PiB7XHJcbiAgICBpZiAoIXRpbWVWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBcIlBsZWFzZSBzZWxlY3QgYSB0aW1lIHZhbHVlLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gIWlzVmFsaWRUaW1lKHRpbWVWYWx1ZSkgJiYgY29yZS5qc3goXCJkaXZcIiwge1xyXG4gICAgICBjc3M6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgfVxyXG4gICAgfSwgXCJUaW1lIG11c3QgYmUgaW4gdGhlIGZvcm0gSEg6bW1cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIG51bGwsIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChjb3JlLklubGluZSwge1xyXG4gICAgZ2FwOiBcInNtYWxsXCJcclxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRGF0ZVBpY2tlciwge1xyXG4gICAgb25VcGRhdGU6IGRhdGUgPT4ge1xyXG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICBkYXRlVmFsdWU6IGRhdGUgfHwgJydcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xlYXI6ICgpID0+IHtcclxuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgZGF0ZVZhbHVlOiAnJ1xyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiAoKSA9PiBzZXRUb3VjaGVkRmlyc3RJbnB1dCh0cnVlKSxcclxuICAgIHZhbHVlOiB2YWx1ZS5kYXRlVmFsdWVcclxuICB9KSwgc2hvd1ZhbGlkYXRpb24gJiYgc2hvd0RhdGVFcnJvcih2YWx1ZS5kYXRlVmFsdWUpKSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goVGltZVBpY2tlciwge1xyXG4gICAgb25CbHVyOiAoKSA9PiBzZXRUb3VjaGVkU2Vjb25kSW5wdXQodHJ1ZSksXHJcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgIGZvcm1hdDogXCIyNGhyXCIsXHJcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgIHRpbWVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSksXHJcbiAgICB2YWx1ZTogdmFsdWUudGltZVZhbHVlIHx8ICcnXHJcbiAgfSksIHNob3dWYWxpZGF0aW9uICYmIHNob3dUaW1lRXJyb3IodmFsdWUudGltZVZhbHVlKSkpKSA6IGlzVmFsaWRJU08odmFsdWUpID8gZm9ybWF0T3V0cHV0KGNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkpIDogJycpO1xyXG59O1xyXG5jb25zdCBDZWxsID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkLFxyXG4gIGxpbmtUb1xyXG59KSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcclxuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goY29tcG9uZW50cy5DZWxsTGluaywgbGlua1RvLCBmb3JtYXRPdXRwdXQodmFsdWUpKSA6IGNvcmUuanN4KGNvbXBvbmVudHMuQ2VsbENvbnRhaW5lciwgbnVsbCwgZm9ybWF0T3V0cHV0KHZhbHVlKSk7XHJcbn07XHJcbkNlbGwuc3VwcG9ydHNMaW5rVG8gPSB0cnVlO1xyXG5jb25zdCBDYXJkVmFsdWUgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGRcclxufSkgPT4ge1xyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGl0ZW1bZmllbGQucGF0aF0pO1xyXG59O1xyXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHtcclxuICAgICAgZGF0ZVZhbHVlOiAnJyxcclxuICAgICAgdGltZVZhbHVlOiAnJ1xyXG4gICAgfSxcclxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZVZhbHVlOiAnJyxcclxuICAgICAgICB0aW1lVmFsdWU6ICcnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2VyaWFsaXplOiAoe1xyXG4gICAgICBkYXRlVmFsdWUsXHJcbiAgICAgIHRpbWVWYWx1ZVxyXG4gICAgfSkgPT4ge1xyXG4gICAgICBpZiAoZGF0ZVZhbHVlICYmIHRpbWVWYWx1ZSAmJiBpc1ZhbGlkSVNPKHtcclxuICAgICAgICBkYXRlVmFsdWUsXHJcbiAgICAgICAgdGltZVZhbHVlXHJcbiAgICAgIH0pKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xyXG4gICAgICAgICAgZGF0ZVZhbHVlLFxyXG4gICAgICAgICAgdGltZVZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFtjb25maWcucGF0aF06IGZvcm1hdHRlZERhdGVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjb25maWcucGF0aF06IG51bGxcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgdmFsaWRhdGUoe1xyXG4gICAgICBkYXRlVmFsdWUsXHJcbiAgICAgIHRpbWVWYWx1ZVxyXG4gICAgfSkge1xyXG4gICAgICBpZiAoIWRhdGVWYWx1ZSAmJiAhdGltZVZhbHVlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKCFkYXRlVmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYgKCF0aW1lVmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIGlzVmFsaWRJU08oe1xyXG4gICAgICAgIGRhdGVWYWx1ZSxcclxuICAgICAgICB0aW1lVmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcclxuZXhwb3J0cy5DZWxsID0gQ2VsbDtcclxuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xyXG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9maWVsZHMuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBLZXlzdG9uZVByb3ZpZGVyIH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29udGV4dCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb3JlIH0gZnJvbSAnQGtleXN0b25lLXVpL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyB2aWV3NTYwMzhkZTQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9tb25nb0lkL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXc0ODM3YWRlZiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3RleHQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlld2Y1Nzc3MjQ0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvcGFzc3dvcmQvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzhmZTExYTZkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzJztcbmltcG9ydCAqIGFzIHZpZXc5M2NkMjQzMSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3YTUwNGRkMDAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MnO1xuaW1wb3J0ICogYXMgdmlldzQ3ZjdlNzQ1IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9maWVsZHMvdHlwZXMvaW50ZWdlci92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3ODExMWQ2NjEgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2Nsb3VkaW5hcnkvdmlld3MnO1xuXG5jb25zdCBhZG1pbkNvbmZpZyA9IHt9O1xuXG5jb25zdCBmaWVsZFZpZXdzID0ge1xuICB2aWV3NTYwMzhkZTQsXG4gIHZpZXc0ODM3YWRlZixcbiAgdmlld2Y1Nzc3MjQ0LFxuICB2aWV3OGZlMTFhNmQsXG4gIHZpZXc5M2NkMjQzMSxcbiAgdmlld2E1MDRkZDAwLFxuICB2aWV3NDdmN2U3NDUsXG4gIHZpZXc4MTExZDY2MSxcbn07XG5cbmNvbnN0IGxhenlNZXRhZGF0YVF1ZXJ5ID0ge1xuICBraW5kOiAnRG9jdW1lbnQnLFxuICBkZWZpbml0aW9uczogW1xuICAgIHtcbiAgICAgIGtpbmQ6ICdPcGVyYXRpb25EZWZpbml0aW9uJyxcbiAgICAgIG9wZXJhdGlvbjogJ3F1ZXJ5JyxcbiAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICdrZXlzdG9uZScsXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMzAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYWRtaW5NZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzOSwgZW5kOiA0OCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdsaXN0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNTksIGVuZDogNjQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAna2V5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA3NywgZW5kOiA4MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdpc0hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogOTEsIGVuZDogOTkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDkxLCBlbmQ6IDk5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3BhdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjcmVhdGVWaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxNDgsIGVuZDogMTU4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkTW9kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTU5LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTE3LCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTEwLCBlbmQ6IDIxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNjUsIGVuZDogMjIwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDQ5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogMjI4IH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAzMSwgZW5kOiAyMzQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDIzNCB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ2F1dGhlbnRpY2F0ZWRJdGVtJyB9LFxuICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2luZDogJ0lubGluZUZyYWdtZW50JyxcbiAgICAgICAgICAgICAgICAgIHR5cGVDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWVkVHlwZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHsga2luZDogJ05hbWUnLCB2YWx1ZTogJ1VzZXInIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBraW5kOiAnRmllbGQnLCBuYW1lOiB7IGtpbmQ6ICdOYW1lJywgdmFsdWU6ICdpZCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsga2luZDogJ0ZpZWxkJywgbmFtZTogeyBraW5kOiAnTmFtZScsIHZhbHVlOiAnbmFtZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb3JlPlxuICAgICAgPEtleXN0b25lUHJvdmlkZXJcbiAgICAgICAgYWRtaW5Db25maWc9e2FkbWluQ29uZmlnfVxuICAgICAgICBhZG1pbk1ldGFIYXNoPVwidm4wc2d2XCJcbiAgICAgICAgZmllbGRWaWV3cz17ZmllbGRWaWV3c31cbiAgICAgICAgbGF6eU1ldGFkYXRhUXVlcnk9e2xhenlNZXRhZGF0YVF1ZXJ5fVxuICAgICAgPlxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvS2V5c3RvbmVQcm92aWRlcj5cbiAgICA8L0NvcmU+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQvYWRtaW4tdWkvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtbmV4dC9hZG1pbi11aS9jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2FkbWluLXVpL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9maWVsZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0V5ZU9mZkljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL1hJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9sb2FkaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9tb2RhbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3BpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS90b2FzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvdG9vbHRpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0LWRlZXAtZXF1YWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=