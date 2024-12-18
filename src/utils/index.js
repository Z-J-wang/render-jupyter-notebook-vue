export * from './notebook';

export const fetchMarkdownData = async url => {
  const response = await fetch(url, { method: 'GET' });
  const data = await response.text();

  return data;
};

export const fetchNotebookData = async url => {
  const response = await fetch(url, { method: 'GET' });
  const data = await response.json();

  return data;
};
