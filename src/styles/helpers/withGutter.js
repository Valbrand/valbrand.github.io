export default function withGutter (gutterSize, attribute = 'margin-bottom') {
  return `
    & > * {
      ${attribute}: ${gutterSize};

      &:last-child {
        ${attribute}: 0;
      }
    }
  `
}
