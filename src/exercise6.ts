/**
 * Select the link of the a tag with id "worng_url" using getElementById
 * and change the href from http:// to https://
 */

const link = document.getElementById('worng_url');

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}