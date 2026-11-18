const main = document.querySelector('main');
const projectId = new URLSearchParams(location.search).get('project');
const selected = projects.find(project => project.id === projectId);

function add(parent, tag, text, className) {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  parent.append(element);
  return element;
}

function link(parent, label, href, className) {
  const element = add(parent, 'a', label, className);
  element.href = href;
  return element;
}

function tags(parent, tools) {
  const list = add(parent, 'ul', '', 'tags');
  for (const tool of tools) add(list, 'li', tool);
}

function metadata(project) {
  return project.type + ' · ' + project.year;
}

function renderCard(project, grid) {
  const card = add(grid, 'article', '', 'project');
  add(card, 'p', metadata(project), 'label');
  add(card, 'h3', project.title);
  add(card, 'p', project.summary);
  tags(card, project.tools);
  link(card, 'Case study →', '?project=' + project.id);
}

function renderCaseStudy(project) {
  document.title = project.title + ' | Khoo Kah Qin';
  main.replaceChildren();
  const study = add(main, 'article', '', 'study');
  link(study, '← All projects', './#work');
  add(study, 'p', metadata(project), 'label');
  add(study, 'h1', project.title);
  add(study, 'p', project.summary, 'intro');
  tags(study, project.tools);
  if (project.repo) link(study, 'View source on GitHub ↗', project.repo, 'button');
  if (project.images?.length) {
    const gallery = add(study, 'section', '', 'section');
    add(gallery, 'h2', 'Environment captures');
    const grid = add(gallery, 'div', '', 'gallery');
    for (const [path, caption] of project.images) {
      const figure = add(grid, 'figure');
      const imageLink = link(figure, '', path);
      const image = add(imageLink, 'img');
      image.src = path;
      image.alt = caption + ' environment in Endless Rollball';
      image.loading = 'lazy';
      add(figure, 'figcaption', caption);
    }
  }
  const features = add(study, 'section', '', 'section');
  add(features, 'h2', 'Project features');
  const grid = add(features, 'div', '', 'project-grid');
  for (const [heading, description] of project.details) {
    const feature = add(grid, 'article', '', 'project');
    add(feature, 'h3', heading);
    add(feature, 'p', description);
  }
}

if (selected) {
  renderCaseStudy(selected);
} else {
  const grid = document.querySelector('#projects');
  for (const project of projects) renderCard(project, grid);
}
