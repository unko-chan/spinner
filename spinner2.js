spinner = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
];
delay = 0
for (const position of spinner) {
  setTimeout(() => {
  process.stdout.write(position);
}, delay)
delay += 200
}

