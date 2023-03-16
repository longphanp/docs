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

const server = new grpc.Server();

let news = [
  { id: "1", title: "Note 1", body: "Content 1", image: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", image: "Post image 2" },
];

server.addService(protos.NewsService.service, {
  getAllNews: (_, callback) => {
    callback(null, { news });
  },

  getListNews: async (call) => {
    let num = 10;
    while (num > 0) {
      await sleep(100);
      call.write(news[0]);
      num -= 1;
    }
    call.end();
  },

  receiveListNews: async (call, callback) => {
    call.on("data", (news) => {
      console.log(news);
    });

    call.on("end", () => {
      console.log("end");
      callback(null, {});
    });
  },

  StreamNews: async (call) => {
    call.on("data", (news) => {
      console.log(news);
      news.body = "get";
      call.write(news);
    });

    call.on("end", () => {
      call.end();
    });
  },
});

server.addService(protos.Greeter.service, {
  sayHello: (call, callback) => {
    callback(null, { message: `hi ${call.request.name}` });
  },
});

server.bindAsync(
  "localhost:4000",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    server.start();
    console.log("Up 4000");
  }
);
