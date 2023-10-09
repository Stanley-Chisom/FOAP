const posts = [];

const images = [
  "https://dr.savee-cdn.com/things/thumbnails/6/5/207a7cbaaf072dfd20d10f.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/1ac0b35d0a1b6e6bd1204a.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/1abc7c7f193edfc9f1cc26.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/4bb26d71dd2b04495d7708.webp",
  "https://dr.savee-cdn.com/things/6/0/f64bb9c2e1db766ab5e623.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/0/9b6c1b00e645789cfc4618.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/2078ce197b51d7815b6807.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/3/18445ef4021e40e35eca3e.webp",
  "https://dr.savee-cdn.com/things/thumbnails/5/9/8587a809a9343455673b0b.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/5/1ac0b35d0a1b6e6bd1204a.webp",
];

let imageIndex = 0;

for (let i = 0; i < 80; i++) {
  let img = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };

  posts.push(img);
  imageIndex++;

  if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts);
