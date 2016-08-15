jQuery(function($, undefined) {
  $('html').terminal(new Handler(), {
    greetings: 'Welcome Human',
    name: 'main_interpreter',
    height: 200,
    prompt: "[[bg;green;]$ ]"
  });
});

// refactor this in a class that parses the string
// and handle command manually from terminal function in jquery ready
function Handler() {
  this.test = function() {
    this.echo("Hey! <i class='twa twa-smile'></i></span>", {raw: true});
  }

  this.current = function() {
    this.echo("current Prompt: " + this.get_prompt());
  }

  this.ls = function() {
    return "snake github";
  }

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
