import { render } from 'mustache';
import * as fs from 'fs';
import * as path from 'path';

export class MustacheService {
  
  renderMustacheTemplate(templateName: string, vars: { [x: string]: any }): string {
    const templatePath = path.resolve(process.cwd(), 'src/views/mustache', `${templateName}.html.mustache`);
    const template = fs.readFileSync(templatePath, 'utf-8');
    return render(template, vars);
  }

}
