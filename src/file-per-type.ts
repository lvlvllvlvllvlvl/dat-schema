import fs from 'node:fs';

for (let i of ['_Core.gql', '4_00_Leagues.gql']) {
  const text = fs.readFileSync('dat-schema/poe2/' + i).toString();
  for (let [schema, name] of text.matchAll(/type (\w+)[^{]*\{[^}]*\}/gs)) {
    fs.writeFileSync(`dat-schema/poe2/${name}.graphql`, schema);
  }
}
