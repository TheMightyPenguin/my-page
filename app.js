jQuery(function($, undefined) {
  $('html').terminal(new Handler(), {
    greetings: 'Welcome Human',
    name: 'main_interpreter',
    height: 200,
    prompt: function() {
      return "Hi> ";
    }
  });
});

function Handler() {
  this.calc = {
    add: function(a, b) {
      this.echo(a + b);
    }
  };

  this.greet = function() {
    this.echo("Hello fellow penguin!");
  }
}

function jsInterpreter(command, term) {
  if (command !== '') {
    try {
      var result = window.eval(command);
      if (result !== undefined) {
        term.echo(new String(result));
      }
    } catch(e) {
      term.error(new String(e));
    }
  } else {
     term.echo('');
  }
}
