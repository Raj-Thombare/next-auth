import { getServerSession } from "next-auth";
import Appbar from "../components/Appbar";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function () {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Appbar />
      <p> User page</p>
      {JSON.stringify(session)}
    </div>
  );
}
