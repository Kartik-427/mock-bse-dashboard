import mongoose from "mongoose";

const uri = "mongodb+srv://kadmin:kadmin123@intelliflowcluster.azc5otp.mongodb.net/arham-fintech?retryWrites=true&w=majority&appName=IntelliFlowCluster";

try {
  await mongoose.connect(uri);
  console.log("Connected");
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}