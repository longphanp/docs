const start = Date.now();

let count = 0;
for (let i = 0; i < 1000; i++) {
  count += i;
}

const end = Date.now();
postMessage((end - start) / 1000);
