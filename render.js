module.exports = {
  name: "render",
  ns: "less",
  description: "Less Renderer",
  phrases: {
    active: "Rendering LESS"
  },
  ports: {
    input: {
      less: {
        title: "Less",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      css: {
        title: "CSS",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      less: require('less')
    }
  },
  fn: function render(input, $, output, state, done, cb, on, less) {
    var r = function() {
      less.render($.less, function renderCallback(error, css) {
        cb({
          error: error,
          css: css
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}