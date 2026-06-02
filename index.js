const path = require("path");

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "proto/api/api.proto"),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [
      path.join(__dirname, "proto"),
      path.join(__dirname, "googleapis"),
    ],
  },
);

const tron = grpc.loadPackageDefinition(packageDefinition);
const client = new tron.protocol.Wallet(
  process.env.TRON_GRPC_URL || "grpc.trongrid.io:50051",
  grpc.credentials.createInsecure(),
);
client.GetBlockByNum2({ num: 81853922 }, (err, block) => {
  if (err) console.error(err);
  else console.log(block);
});
