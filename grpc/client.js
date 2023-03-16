import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { sleep } from "./utils.js";

const PROTO_PATH = ["news.proto", "greeter.proto"];

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: ["proto"],
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const protos = grpc.loadPackageDefinition(packageDefinition);

const NewsService = protos.NewsService;
const GreeterService = protos.Greeter;

let news = [
  { id: "1", title: "Note 1", body: "Content 1", image: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", image: "Post image 2" },
];

const newsClient = new NewsService(
  "localhost:4000",
  grpc.credentials.createInsecure()
);

const greeterClient = new GreeterService(
  "localhost:4000",
  grpc.credentials.createInsecure()
);

//const listNews = newsClient.getListNews();
//listNews.on("data", (news) => {
//console.log(news);
//});

//const receiveNews = newsClient.receiveListNews((error, stats) => {});

//(async function () {
//let num = 10;
//while (num > 0) {
//await sleep(100);
//receiveNews.write(news[0]);
//num -= 1;
//}
//receiveNews.end();
//})();

const streamNews = newsClient.streamNews();

streamNews.on("data", (val) => {
  console.log(val);
});

(async function () {
  let num = 10;
  while (num > 0) {
    await sleep(100);
    streamNews.write(news[0]);
    num -= 1;
  }
  streamNews.end();
})();
