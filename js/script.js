'use strict';
function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

// eslint-disable-next-line no-unused-vars
function generateTitleLinks() {

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* remove contents of titleList */

  /* for each article */

  /* get the article id */

  /* find the title element */

  /* get the title from the title element */

  /* create HTML of the link */

  /* insert link into titleList */


  const articles = document.querySelectorAll(optArticleSelector);
  for (const article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle +'</span></a></li>';
    titleList.innerHTML = titleList.innerHTML + linkHTML;
    // eslint-disable-next-line no-unused-vars
    let html = '';
    const links = document.querySelectorAll('.titles a');
    for (const link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();
}
function generateTags(){
  /* find all articles */
  const optArticleTagsSelector = '.post-tags .list',
  console.log('split');
  

  /* START LOOP: for every article: */

  /* find tags wrapper */

  /* make html variable with empty string */

  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}
generateTags();

