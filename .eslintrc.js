// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-parens": ["warn", "always"],
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": ["error", "always"],
    "jsx-quotes": ["error", "prefer-single"],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "linebreak-style": ["error", "unix"],
    "no-console": ["warn", {"allow": ["warn", "error"]}],
    "object-curly-spacing": ["error", "never"],
    "object-curly-newline": ["warn", {
        "ImportDeclaration": {"multiline": true},
        "ObjectExpression": {"multiline": true, "minProperties": 6, "consistent": true},
        "ObjectPattern": {"multiline": true, "minProperties": 6, "consistent": true}
    }],
    "quotes": ["error", "single", {"avoidEscape": true}],
    "semi": ["error", "never"],
    "space-before-blocks": ["error", {"functions": "always", "keywords": "always", "classes": "always"}],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["error", "never"],
    "template-curly-spacing": ["error", "never"],

    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/require-await": ["error"],

    "import/first": ["error"],
    "import/newline-after-import": ["error", {"count": 1}],
    "import/order": ["error", {"groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object"]}],

    "react/self-closing-comp": ["warn", {
        "component": true,
        "html": true
    }],
    "react/jsx-closing-tag-location": ["warn"],
    "react/jsx-curly-brace-presence": ["warn", {"props": "never", "children": "never"}],
    "react/jsx-curly-spacing": ["warn", {"when": "never", "children": true}],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-max-props-per-line": ["warn", {"maximum": 3}],
    "react/jsx-no-useless-fragment": ["warn"],
    "react/jsx-tag-spacing": ["warn", {"beforeClosing": "never", "beforeSelfClosing": "never"}],
    "react/jsx-wrap-multilines": ["warn", {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "ignore"
    }],

    "jest/no-focused-tests": ["warn"],
    "jest/valid-title": ["error"]
  }
}
