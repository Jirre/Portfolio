import matter from 'gray-matter';

const disabledEngine = () => {
  throw new Error('JS front matter is disabled');
};

export const parseYaml = (source: string) =>
  matter(source, {
    engines: { js: disabledEngine, javascript: disabledEngine },
  });