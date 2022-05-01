const input = [];

const solution = input => {
  const html = input[0];
  const div = [...html.matchAll(/<div title="([\w\s]+)">(.*?)<\/div>/g)];

  const rgx_tag = /<(?!\/?p(?=>|\s.*>))\/?.*?>/g;
  const rgx_paragraph = /<p>(.*?)<\/p>/g;
  const rgx_spaces = /\s{2,}/g;

  const res = [];
  for (let i = 0; i < div.length; i++) {
    const [_, title, content] = div[i];
    const paragraphs = [
      ...content.replace(rgx_tag, "").matchAll(rgx_paragraph),
    ].map(paragraph => paragraph[1].trim().replace(rgx_spaces, " "));

    res.push("title : " + title + "\n" + paragraphs.join("\n"));
  }
  console.log(res.join("\n"));
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
