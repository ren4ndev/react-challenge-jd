import DOMPurify from 'dompurify';

export default function renderHtml(innerHtml) {
  return {
    __html: DOMPurify.sanitize(innerHtml),
  };
}
