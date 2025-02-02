/**
 * Returns new HTML Elements
 *
 * @param tagName - HTML Element Tag
 * @param options - HTML Element Options
 * @returns HTMLObjectElement
 */
export function createElement(
  tagName: keyof HTMLElementTagNameMap,
  options?: ElementCreationOptions
) {
  return document.createElement(tagName, options);
}
