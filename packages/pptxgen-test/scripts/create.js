const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
// const filename = "iu_6708x8965.jpeg";
const filename = "kimyeona_5107x7661.jpg";
const source = path.join(root, "src/images", filename);
const destination = path.join(root, "public/10m");

fs.access(destination, error => {
  if (error)
    fs.mkdirSync(destination);

  for (let i = 0; i < 50; i++) {
    copy(source, path.join(destination, `lg_${i}.jpeg`));
  }
});

function copy(file, dest) {
  let stream = fs.createReadStream(file);

  stream.on("data", function(chunk) {
    console.log( ">> data  event : chunk size = %d", chunk.length );
  });

  stream.on("error", error => {
    console.log(error);
  });

  stream.on("end", () => {
    console.log("done copying");
  });

  stream.pipe(fs.createWriteStream(dest));
}
