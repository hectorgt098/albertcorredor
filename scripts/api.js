/* "use strict";

const galery = document.querySelector(".galery");
const feed = document.querySelector(".contenedor-galery");

const token =
  "IGQVJVRWJRTTR5UEFIMnRLam9BejB1QzdJdWJkS0tuMjB1T0F3cVp3a0Fha202dXUxVDR5OXNHa1hIMjZA6RlpMemtCSjlDX3ZAqd21ybTZAIX29zZAUtEX0tZAeVNISnNNcW1NNmlIVi1DWXZAtNWpFVFlRdQZDZD";
const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=15&access_token=${token}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => CrearHtml(data.data));

function CrearHtml(data) {
  for (const img of data) {
    galery.innerHTML += `
    <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="" />
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>
                    ${img.caption.slice(0, 100)}
                </p>
            </a>
        </div>
  </div>
        `;
  }
}

 */