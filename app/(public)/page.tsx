import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";


export default async function Home() {
  const user = await getMe()
  console.log("Root Route");
  console.log(user);
  return (
    <div  >
      <h3>Hello world Home page</h3>

      <Button className="bg-red">New Button</Button>

    </div>
  );
}
