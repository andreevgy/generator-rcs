const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    this.argument("name", { type: String, required: false });
    this.name = this.options.name;
  }

  async prompting() {
    if (!this.name) {
      this.answers = await this.prompt([
        {
          type: "input",
          name: "name",
          message: "Your component name",
          default: this.appname
        }
      ]);
      this.name = this.answers.name;
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./index.js'),
      this.destinationPath(`./${this.name}/index.js`),
      { name: this.name }
    );

    this.fs.copyTpl(
      this.templatePath('./Component.jsx'),
      this.destinationPath(`./${this.name}/${this.name}.jsx`),
      { name: this.name }
    );

    this.fs.copyTpl(
      this.templatePath('./Component.module.scss'),
      this.destinationPath(`./${this.name}/${this.name}.module.scss`),
      { name: this.name }
    );
  };

};