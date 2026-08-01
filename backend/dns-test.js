import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.intelliflowcluster.azc5otp.mongodb.net",
  (err, records) => {
    console.log(err);
    console.log(records);
  }
);