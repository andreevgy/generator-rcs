const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your component name",
        default: this.appname
      }
    ]);
    this.answers.name = this.answers.name.charAt(0).toUpperCase() + this.answers.name.slice(1)
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./index.js'),
      this.destinationPath(`./${this.answers.name}/index.js`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('./Component.jsx'),
      this.destinationPath(`./${this.answers.name}/${this.answers.name}.jsx`),
      { name: this.answers.name }
    );

    this.fs.copyTpl(
      this.templatePath('./Component.module.scss'),
      this.destinationPath(`./${this.answers.name}/${this.answers.name}.module.scss`),
      { name: this.answers.name }
    );
  };

};