import { ModelOption } from "./schema";

// export function model(options: ModelOption): Rule {
//   return (tree: TreeWalker, _context: SchematicContext) => {
//     const name = options.name;
//     const props = (options.props) ?
//       options.props.split(",").map(v => v.split(":")) : [];

//     _context.logger.info(`Create Model name: ${name}, props: ${props}`);

//     return tree;
//   }
// }

// export function model(options: ModelOption): Rule {
//   return (tree: TreeWalker, _context: SchematicContext) => {
//     const name = options.name;
//     const props = (options.props) ?
//       options.props.split(",").map(v => v.split(":")) : [];

//     return chain([
//       externalSchematic('@schematics/angular', 'class', options),
//       (tree: Tree, _context: SchematicContext) => {
//         const content = tree.read(`/src/app/${name}.ts`);
//         if (content) {
//           const propsStr = props
//             .map(v => `  ${v[0]}: ${v[1]}`)
//             .reduce((b, a) => b + '\n' + a, '');
//           const newStr = content.toString().replace("\n", propsStr + "\n");
//           tree.overwrite(`/src/app/${name}.ts`, newStr);
//         }
//         return tree;
//       }
//     ]);
//   }
// }

import { classify } from '@angular-devkit/core/src/utils/strings';

const stringUtils = { classify };

export function model(options: ModelOption): Rule {
  const props = (options.props) ?
    options.props.split(",").map(v => v.split(":")) : [];
  const name = options.name;
  const templateSource = apply(url('./files'), [
    template({ props, name, ...stringUtils }),
    move('src/app/models/')
  ]);

  return chain([
    mergeWith(templateSource, MergeStrategy.Default)
  ]);
}
