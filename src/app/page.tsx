import { headers } from "next/headers";
import { Status, StatusLabel } from "./components/active-label";
import AddCompanyButton from "./components/add-company-button";



export default function Home() {
  const h = headers();
console.log(h.get('user-agent'));
  return <div>
    <h1 className="text-xl">Home page{new Date().toTimeString() }</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
    <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    <AddCompanyButton></AddCompanyButton>
        </div>
 
}
